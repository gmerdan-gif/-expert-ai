import { dreamSymbols } from "../../data/dream-symbols";

const targets = [
  "sel_gormek",
  "buz_gormek",
  "sis_gormek",
  "mum_gormek",
];

function normalize(text: string): string {
  return text
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9çğıöşü\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function words(text: string): Set<string> {
  return new Set(
    normalize(text)
      .split(/\s+/)
      .filter((x) => x.length >= 5),
  );
}

function similarity(a: string, b: string): number {
  const A = words(a);
  const B = words(b);

  let intersection = 0;

  for (const word of A) {
    if (B.has(word)) intersection++;
  }

  const union =
    A.size + B.size - intersection;

  return union
    ? intersection / union
    : 0;
}

const symbols = targets
  .map((slug) =>
    dreamSymbols.find(
      (symbol) => symbol.slug === slug,
    ),
  )
  .filter(Boolean);

console.log("");
console.log("==========================================");
console.log("INUS DUPLICATE INSPECTOR");
console.log("==========================================");

for (const symbol of symbols) {
  console.log("");
  console.log(`### ${symbol!.title}`);
  console.log(`slug: ${symbol!.slug}`);

  console.log("");
  console.log("--- shortDescription ---");
  console.log(symbol!.shortDescription);

  console.log("");
  console.log("--- psychology ---");
  console.log(symbol!.psychology);

  console.log("");
  console.log("--- jungian ---");
  console.log(symbol!.jungian);

  console.log("");
  console.log("--- positiveAssociations ---");
  console.log(
    JSON.stringify(
      symbol!.positiveAssociations,
      null,
      2,
    ),
  );

  console.log("");
  console.log("--- challengingAssociations ---");
  console.log(
    JSON.stringify(
      symbol!.challengingAssociations,
      null,
      2,
    ),
  );
}

console.log("");
console.log("==========================================");
console.log("PAIRWISE SIMILARITY");
console.log("==========================================");

for (let i = 0; i < symbols.length; i++) {
  for (let j = i + 1; j < symbols.length; j++) {
    const a = symbols[i]!;
    const b = symbols[j]!;

    const aMain = [
      a.shortDescription,
      a.psychology,
      a.jungian,
      a.positiveAssociations.join(" "),
      a.challengingAssociations.join(" "),
      a.contextDependentAssociations.join(" "),
    ].join(" ");

    const bMain = [
      b.shortDescription,
      b.psychology,
      b.jungian,
      b.positiveAssociations.join(" "),
      b.challengingAssociations.join(" "),
      b.contextDependentAssociations.join(" "),
    ].join(" ");

    console.log(
      `${a.title} ↔ ${b.title}: %${Math.round(
        similarity(aMain, bMain) * 100,
      )}`,
    );
  }
}

console.log("");
console.log("==========================================");
console.log("INSPECTION TAMAMLANDI");
console.log("READ-ONLY");
console.log("==========================================");
