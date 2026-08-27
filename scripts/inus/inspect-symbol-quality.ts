import { dreamSymbolEntries } from "../../data/dream-symbol-entries";

function text(value: unknown): string {
  if (typeof value === "string") return value;

  if (Array.isArray(value)) {
    return value.map(text).join(" ");
  }

  if (value && typeof value === "object") {
    return Object.values(value as Record<string, unknown>)
      .map(text)
      .join(" ");
  }

  return "";
}

function words(value: unknown): number {
  return text(value)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length;
}

function chars(value: unknown): number {
  return text(value).trim().length;
}

const fields = [
  "shortDescription",
  "positiveAssociations",
  "challengingAssociations",
  "contextDependentAssociations",
  "commonVariations",
  "psychology",
  "jungian",
  "islamicTradition",
  "christianTraditions",
  "jewishTraditions",
  "buddhistEasternApproaches",
  "spiritualApproaches",
  "comparisonTable",
  "commonGround",
  "differences",
  "inusAssessment",
  "faq",
];

console.log("");
console.log("==========================================");
console.log("INUS SYMBOL DATASET INSPECTOR");
console.log("==========================================");
console.log("");
console.log(`TOPLAM: ${dreamSymbolEntries.length}`);
console.log("");

for (const field of fields) {
  const values = dreamSymbolEntries.map(
    (symbol) =>
      words(
        (symbol as unknown as Record<string, unknown>)[field],
      ),
  );

  const nonEmpty = values.filter((x) => x > 0);

  const min = Math.min(...values);
  const max = Math.max(...values);

  const avg =
    values.reduce((a, b) => a + b, 0) /
    values.length;

  const sorted = [...values].sort((a, b) => a - b);

  const median =
    sorted[Math.floor(sorted.length / 2)];

  console.log(
    `${field.padEnd(28)} ` +
    `filled=${String(nonEmpty.length).padStart(4)} ` +
    `min=${String(min).padStart(4)} ` +
    `median=${String(median).padStart(4)} ` +
    `avg=${avg.toFixed(1).padStart(6)} ` +
    `max=${String(max).padStart(4)}`,
  );
}

console.log("");
console.log("==========================================");
console.log("ÖRNEK SEMBOLLER");
console.log("==========================================");

const sampleSlugs = [
  "okula_gitmek",
  "gunes",
  "yilan",
  "araba",
  "bebek",
];

for (const slug of sampleSlugs) {
  const symbol = dreamSymbolEntries.find(
    (item) => item.slug === slug,
  );

  if (!symbol) {
    console.log(`\n[${slug}] BULUNAMADI`);
    continue;
  }

  console.log("");
  console.log(`### ${symbol.title}`);
  console.log(`slug: ${symbol.slug}`);

  for (const field of [
    "shortDescription",
    "psychology",
    "jungian",
    "islamicTradition",
    "christianTraditions",
    "jewishTraditions",
    "buddhistEasternApproaches",
    "spiritualApproaches",
    "commonGround",
    "differences",
    "inusAssessment",
  ]) {
    const value =
      (symbol as unknown as Record<string, unknown>)[field];

    console.log(
      `\n--- ${field} ---`,
    );

    console.log(text(value).slice(0, 900));
  }

  console.log("\n--- commonVariations ---");
  console.log(
    JSON.stringify(symbol.commonVariations),
  );

  console.log("\n--- comparisonTable ---");
  console.log(
    JSON.stringify(symbol.comparisonTable),
  );

  console.log("\n--- faq ---");
  console.log(
    JSON.stringify(symbol.faq),
  );
}

console.log("");
console.log("==========================================");
console.log("INSPECTION TAMAMLANDI");
console.log("==========================================");
