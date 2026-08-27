import { dreamSymbols } from "./data/dream-symbols";
import { buildRelatedSymbolMap } from "./data/dream-symbol-relations";

const tests = [
  "yilan",
  "su",
  "olum",
  "dis",
  "uzay",
  "araba",
  "ev",
  "bebek",
];

const relatedMap = buildRelatedSymbolMap(dreamSymbols, 4);

for (const slug of tests) {
  const symbol = dreamSymbols.find(
    (s) => s.slug === slug,
  );

  if (!symbol) continue;

  const relatedSlugs =
    relatedMap.get(symbol.slug) ?? [];

  const related = relatedSlugs
    .map((slug) =>
      dreamSymbols.find(
        (s) => s.slug === slug,
      ),
    )
    .filter(Boolean);

  console.log(
    `${symbol.title}:`,
    related
      .map(
        (s) =>
          `${s!.title} (${s!.slug})`,
      )
      .join(" → ") || "İLİŞKİ YOK",
  );
}
