import fs from "node:fs";
import path from "node:path";

import type {
  SymbolContent,
} from "@/data/symbol-system/schema/symbol-schema";

import { generatedRelatedSymbolSlugs } from "@/lib/symbols/related-symbols.generated";

const PUBLISHED_SYMBOLS_DIR = path.join(
  process.cwd(),
  "data",
  "published-symbols",
);

function getPublishedSymbolFiles(): string[] {
  if (!fs.existsSync(PUBLISHED_SYMBOLS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(PUBLISHED_SYMBOLS_DIR)
    .filter((file) => file.endsWith(".json"))
    .sort();
}

export function getPublishedSymbolBySlug(
  slug: string,
): SymbolContent | null {
  const safeSlug = slug.trim().toLocaleLowerCase("tr-TR");

  if (
    !safeSlug ||
    safeSlug.includes("/") ||
    safeSlug.includes("\\") ||
    safeSlug.includes("..")
  ) {
    return null;
  }

  const filePath = path.join(
    PUBLISHED_SYMBOLS_DIR,
    `${safeSlug}.json`,
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const symbol = JSON.parse(
    fs.readFileSync(filePath, "utf8"),
  ) as SymbolContent;

  /*
   * A published file must agree with the requested slug.
   * This prevents a misplaced/renamed JSON file from silently
   * serving content under the wrong URL.
   */
  if (symbol.slug !== safeSlug) {
    throw new Error(
      `Published symbol slug mismatch: requested "${safeSlug}", file contains "${symbol.slug}".`,
    );
  }

  return symbol;
}

export function getAllPublishedSymbols(): SymbolContent[] {
  return getPublishedSymbolFiles().map((file) => {
    const filePath = path.join(
      PUBLISHED_SYMBOLS_DIR,
      file,
    );

    return JSON.parse(
      fs.readFileSync(filePath, "utf8"),
    ) as SymbolContent;
  });
}

export function getAllPublishedSymbolSlugs(): string[] {
  return getPublishedSymbolFiles().map((file) =>
    file.replace(/\.json$/, ""),
  );
}

export function publishedSymbolExists(
  slug: string,
): boolean {
  return getPublishedSymbolBySlug(slug) !== null;
}

export function getRelatedPublishedSymbols(
  symbol: SymbolContent,
  limit = 4,
): SymbolContent[] {
  const manualSlugs =
    symbol.relatedSlugs?.filter(
      (slug) => slug && slug !== symbol.slug,
    ) ?? [];

  const generatedSlugs =
    generatedRelatedSymbolSlugs[symbol.slug] ?? [];

  /*
   * Explicit editorial relationships take priority.
   * Generated relationships fill only when no manual
   * relationship has been defined for the symbol.
   */
  const candidateSlugs =
    manualSlugs.length > 0
      ? manualSlugs
      : generatedSlugs;

  const seen = new Set<string>();
  const related: SymbolContent[] = [];

  for (const slug of candidateSlugs) {
    if (
      slug === symbol.slug ||
      seen.has(slug)
    ) {
      continue;
    }

    const target =
      getPublishedSymbolBySlug(slug);

    if (!target) {
      continue;
    }

    seen.add(slug);
    related.push(target);

    if (related.length >= limit) {
      break;
    }
  }

  return related;
}
