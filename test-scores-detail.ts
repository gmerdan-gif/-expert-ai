import { dreamSymbols } from "./data/dream-symbols";
import { buildRelatedSymbolMap } from "./data/dream-symbol-relations";

const TEST = [
  "yilan",
  "su",
  "olum",
  "dis",
  "uzay",
  "araba",
  "ev",
  "bebek",
];

const map = buildRelatedSymbolMap(dreamSymbols);

for (const slug of TEST) {
  const symbol = dreamSymbols.find((s) => s.slug === slug);
  if (!symbol) continue;

  console.log(`\n========== ${symbol.title} ==========`);

  const relations = map.get(slug) ?? [];

  for (const relatedSlug of relations) {
    const related = dreamSymbols.find(
      (s) => s.slug === relatedSlug,
    );

    console.log(`→ ${related?.title ?? relatedSlug}`);
  }
}
