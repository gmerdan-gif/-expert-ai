import { dreamSymbols } from "./data/dream-symbols";
import { buildRelatedSymbolMap } from "./data/dream-symbol-relations";

const map = buildRelatedSymbolMap(dreamSymbols, 10);

for (const slug of [
  "yilan",
  "su",
  "olum",
  "dis",
  "uzay",
  "araba",
  "ev",
  "bebek",
]) {
  const symbol = dreamSymbols.find((s) => s.slug === slug);

  if (!symbol) continue;

  console.log(`\n========== ${symbol.title} ==========`);

  console.log(
    map.get(slug)
      ?.map((x) => {
        const target = dreamSymbols.find((s) => s.slug === x);
        return target ? `${target.title} (${x})` : x;
      })
      .join(" → ") || "YOK"
  );
}
