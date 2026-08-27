import { createHash } from "node:crypto";
import { dreamSymbols } from "../../data/dream-symbols";

type FieldName =
  | "shortDescription"
  | "psychology"
  | "jungian"
  | "positiveAssociations"
  | "challengingAssociations";

const fields: FieldName[] = [
  "shortDescription",
  "psychology",
  "jungian",
  "positiveAssociations",
  "challengingAssociations",
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

function valueOf(
  symbol: (typeof dreamSymbols)[number],
  field: FieldName,
): string {
  const value = symbol[field];

  if (Array.isArray(value)) {
    return value.map(String).join(" | ");
  }

  return String(value);
}

/*
 * Sembol adını metinden çıkartarak template yapısını ölçer.
 *
 * Örnek:
 *
 * "Rüyada sel görmek farklı..."
 * "Rüyada buz görmek farklı..."
 *
 * aynı template olarak kabul edilir.
 */
function removeSymbolName(
  text: string,
  title: string,
): string {
  const normalizedText = normalize(text);
  const normalizedTitle = normalize(title);

  return normalizedText
    .replace(
      new RegExp(
        normalizedTitle.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&",
        ),
        "gi",
      ),
      "{{SYMBOL}}",
    )
    .replace(/\s+/g, " ")
    .trim();
}

function hash(text: string): string {
  return createHash("sha1")
    .update(text)
    .digest("hex");
}

type Cluster = {
  key: string;
  count: number;
  symbols: {
    title: string;
    slug: string;
  }[];
};

const clusters = new Map<string, Cluster>();

for (const symbol of dreamSymbols) {
  const templateParts = fields.map((field) =>
    removeSymbolName(
      valueOf(symbol, field),
      symbol.title,
    ),
  );

  const key = hash(
    templateParts.join("\n---\n"),
  );

  const existing = clusters.get(key);

  if (existing) {
    existing.count++;
    existing.symbols.push({
      title: symbol.title,
      slug: symbol.slug,
    });
  } else {
    clusters.set(key, {
      key,
      count: 1,
      symbols: [
        {
          title: symbol.title,
          slug: symbol.slug,
        },
      ],
    });
  }
}

const sortedClusters = [...clusters.values()]
  .sort((a, b) => b.count - a.count);

const repeated = sortedClusters.filter(
  (cluster) => cluster.count >= 2,
);

const exactClusters = new Map<string, number>();

for (const symbol of dreamSymbols) {
  const exactParts = fields.map((field) =>
    normalize(valueOf(symbol, field)),
  );

  const key = hash(
    exactParts.join("\n---\n"),
  );

  exactClusters.set(
    key,
    (exactClusters.get(key) ?? 0) + 1,
  );
}

const exactDuplicateGroups =
  [...exactClusters.values()]
    .filter((count) => count >= 2);

const exactDuplicateSymbols =
  exactDuplicateGroups.reduce(
    (sum, count) => sum + count,
    0,
  );

const templateDuplicateSymbols =
  repeated.reduce(
    (sum, cluster) => sum + cluster.count,
    0,
  );

console.log("");
console.log("==========================================");
console.log("INUS TEMPLATE CLUSTER ANALYSIS");
console.log("==========================================");

console.log(
  `TOPLAM SEMBOL : ${dreamSymbols.length}`,
);

console.log("");
console.log("SONUÇLAR");
console.log("------------------------------------------");

console.log(
  `Template cluster sayısı       : ${repeated.length}`,
);

console.log(
  `Template duplicate sembol     : ${templateDuplicateSymbols}`,
);

console.log(
  `Exact duplicate grup sayısı   : ${exactDuplicateGroups.length}`,
);

console.log(
  `Exact duplicate sembol        : ${exactDuplicateSymbols}`,
);

console.log("");
console.log("EN BÜYÜK TEMPLATE CLUSTERLARI");
console.log("==========================================");

for (const cluster of repeated.slice(0, 30)) {
  console.log("");
  console.log(
    `${cluster.count} sembol`,
  );

  console.log(
    cluster.symbols
      .slice(0, 20)
      .map(
        (symbol) =>
          `${symbol.title} | ${symbol.slug}`,
      )
      .join("\n"),
  );

  if (cluster.symbols.length > 20) {
    console.log(
      `... +${cluster.symbols.length - 20} sembol`,
    );
  }
}

console.log("");
console.log("==========================================");
console.log("ANALİZ TAMAMLANDI");
console.log("READ-ONLY");
console.log("==========================================");
