export type DreamSymbolSource = {
  authors: string;
  title: string;
  journal?: string;
  detail?: string;
  url?: string;
};

export type DreamSymbolFaq = {
  question: string;
  answer: string;
};

export type ComparisonRow = {
  approach: string;
  interpretation: string;
  type: string;
};

export type DreamSymbol = {
  slug: string;
  title: string;
  shortDescription: string;
  positiveAssociations: string[];
  challengingAssociations: string[];
  contextDependentAssociations: string[];
  commonVariations: string[];
  psychology: string;
  jungian: string;
  islamicTradition: string;
  christianTraditions: string;
  jewishTraditions: string;
  buddhistEasternApproaches: string;
  spiritualApproaches: string;
  comparisonTable: ComparisonRow[];
  commonGround: string;
  differences: string;
  inusAssessment: string;
  faq: DreamSymbolFaq[];
  sources: DreamSymbolSource[];
  relatedSlugs: string[];
};

export { SHARED_SOURCES, DEFAULT_SOURCES } from "./dream-symbol-sources";

import { dreamSymbolEntries } from "./dream-symbol-entries";

export const dreamSymbols: DreamSymbol[] = dreamSymbolEntries;

export function getAllDreamSymbols(): DreamSymbol[] {
  return dreamSymbols;
}

export function getDreamSymbolBySlug(slug: string): DreamSymbol | undefined {
  return dreamSymbols.find((symbol) => symbol.slug === slug);
}

export function getRelatedDreamSymbols(
  symbol: DreamSymbol,
  limit = 4,
): DreamSymbol[] {
  const related = symbol.relatedSlugs
    .map((relatedSlug) => getDreamSymbolBySlug(relatedSlug))
    .filter((item): item is DreamSymbol => item !== undefined);

  if (related.length >= limit) {
    return related.slice(0, limit);
  }

  const fallback = dreamSymbols
    .filter(
      (item) =>
        item.slug !== symbol.slug &&
        !related.some((relatedItem) => relatedItem.slug === item.slug),
    )
    .slice(0, limit - related.length);

  return [...related, ...fallback];
}
