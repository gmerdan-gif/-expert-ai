import fs from "node:fs";
import path from "node:path";
import { dreamSymbols } from "../../data/dream-symbols";

type Priority = "P0" | "P1" | "P2" | "P3";

type DuplicateCandidate = {
  slug: string;
  title: string;
  similarity: number;
};

type AuditItem = {
  slug: string;
  title: string;
  priority: Priority;
  score: number;
  contentScore: number;
  specificityScore: number;
  duplicationScore: number;
  completenessScore: number;
  issues: string[];
  missing: string[];
  duplicateCandidates: DuplicateCandidate[];
};

const ROOT = process.cwd();

const GENERIC_PATTERNS = [
  "kişinin yaşam",
  "kişisel deneyim",
  "rüyanın bağlamı",
  "rüyanın bütünü",
  "kişisel çağrışım",
  "kişisel çağrışımlar",
  "duygusal durum",
  "içsel süreç",
  "yaşam deneyimleri",
  "yaşam koşulları",
  "farklı anlam",
  "farklı anlamlar",
  "bağlama göre",
  "bağlama bağlı",
];

const BOILERPLATE_PATTERNS = [
  "tek bir evrensel",
  "kesin bir anlam",
  "kesin gelecek",
  "geleceği haber",
  "bilimsel kanıt",
  "hazır bir",
  "otomatik bir yorum",
];

const REQUIRED_ARRAY_FIELDS = [
  "positiveAssociations",
  "challengingAssociations",
  "contextDependentAssociations",
  "commonVariations",
  "comparisonTable",
  "faq",
  "sources",
];

const REQUIRED_TEXT_FIELDS = [
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
];

function text(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.join(" ");
  return "";
}

function wordCount(value: string): number {
  return value
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function normalize(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9çğıöşü\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(value: string): Set<string> {
  return new Set(
    normalize(value)
      .split(/\s+/)
      .filter(
        (token) =>
          token.length >= 5 &&
          ![
            "kişinin",
            "kişisel",
            "rüyanın",
            "rüyadaki",
            "bağlam",
            "bağlama",
            "anlam",
            "sembol",
            "sembolik",
            "yorum",
            "yorumlar",
            "yaklaşım",
            "yaklaşımlar",
            "genellikle",
            "olabilir",
            "değişebilir",
          ].includes(token),
      ),
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;

  let intersection = 0;

  for (const token of a) {
    if (b.has(token)) intersection++;
  }

  const union = a.size + b.size - intersection;

  return union ? intersection / union : 0;
}

function countGenericPatterns(value: string): number {
  const normalized = normalize(value);

  return [
    ...GENERIC_PATTERNS,
    ...BOILERPLATE_PATTERNS,
  ].filter((pattern) =>
    normalized.includes(normalize(pattern)),
  ).length;
}

function getMainContent(
  symbol: (typeof dreamSymbols)[number],
): string {
  return [
    symbol.shortDescription,
    symbol.psychology,
    symbol.jungian,
    symbol.islamicTradition,
    symbol.christianTraditions,
    symbol.jewishTraditions,
    symbol.buddhistEasternApproaches,
    symbol.spiritualApproaches,
    symbol.commonGround,
    symbol.differences,
    symbol.inusAssessment,
  ].join(" ");
}

function getSpecificContent(
  symbol: (typeof dreamSymbols)[number],
): string {
  return [
    symbol.title,
    symbol.shortDescription,
    ...symbol.positiveAssociations,
    ...symbol.challengingAssociations,
    ...symbol.contextDependentAssociations,
    ...symbol.commonVariations,
  ].join(" ");
}

function getDuplicateProfile(
  symbol: (typeof dreamSymbols)[number],
): Set<string> {
  return tokens(
    [
      symbol.shortDescription,
      symbol.psychology,
      symbol.jungian,
      symbol.positiveAssociations.join(" "),
      symbol.challengingAssociations.join(" "),
      symbol.contextDependentAssociations.join(" "),
    ].join(" "),
  );
}

function auditSymbol(
  symbol: (typeof dreamSymbols)[number],
  duplicateProfiles: Map<string, Set<string>>,
): AuditItem {
  const issues: string[] = [];
  const missing: string[] = [];

  for (const field of REQUIRED_TEXT_FIELDS) {
    if (
      !text(
        symbol[field as keyof typeof symbol],
      ).trim()
    ) {
      missing.push(field);
    }
  }

  for (const field of REQUIRED_ARRAY_FIELDS) {
    const value =
      symbol[field as keyof typeof symbol];

    if (!Array.isArray(value) || value.length === 0) {
      missing.push(field);
    }
  }

  const mainContent = getMainContent(symbol);
  const specificContent = getSpecificContent(symbol);

  const mainWords = wordCount(mainContent);
  const genericHits = countGenericPatterns(mainContent);
  const specificWords = tokens(specificContent).size;

  /*
   * CONTENT
   *
   * Length matters only as a limited component.
   * It cannot dominate the final score.
   */
  const contentScore = Math.round(
    Math.min(mainWords / 2.5, 45) +
      Math.min(
        symbol.faq.length * 2,
        20,
      ) +
      Math.min(
        symbol.comparisonTable.length * 3,
        15,
      ) +
      Math.min(
        symbol.contextDependentAssociations.length,
        10,
      ),
  );

  /*
   * SPECIFICITY
   *
   * More symbol-specific vocabulary is good.
   * Generic boilerplate reduces the score.
   */
  const specificityScore = Math.max(
    0,
    Math.min(
      100,
      55 +
        Math.min(specificWords * 1.5, 35) -
        genericHits * 4,
    ),
  );

  /*
   * COMPLETENESS
   *
   * relatedSlugs deliberately excluded.
   *
   * Relations are generated automatically by the
   * relation engine when manual relations are absent.
   */
  const textPresent =
    REQUIRED_TEXT_FIELDS.filter(
      (field) =>
        !missing.includes(field),
    ).length;

  const arrayPresent =
    REQUIRED_ARRAY_FIELDS.filter(
      (field) =>
        !missing.includes(field),
    ).length;

  const completenessScore = Math.round(
    (textPresent / REQUIRED_TEXT_FIELDS.length) *
      70 +
      (arrayPresent / REQUIRED_ARRAY_FIELDS.length) *
        30,
  );

  /*
   * DUPLICATION
   *
   * Compare against ALL symbols.
   *
   * A duplicate candidate is only meaningful when
   * several major content fields overlap.
   */
  const profile =
    duplicateProfiles.get(symbol.slug)!;

  const duplicateCandidates: DuplicateCandidate[] = [];

  for (const candidate of dreamSymbols) {
    if (candidate.slug === symbol.slug) continue;

    const candidateProfile =
      duplicateProfiles.get(candidate.slug)!;

    const similarityScore =
      jaccard(profile, candidateProfile);

    if (similarityScore >= 0.72) {
      duplicateCandidates.push({
        slug: candidate.slug,
        title: candidate.title,
        similarity: Number(
          similarityScore.toFixed(3),
        ),
      });
    }
  }

  duplicateCandidates.sort(
    (a, b) => b.similarity - a.similarity,
  );

  const topDuplicateSimilarity =
    duplicateCandidates[0]?.similarity ?? 0;

  /*
   * A low duplication score is only produced for
   * genuinely high overlap.
   */
  const duplicationScore = Math.round(
    Math.max(
      0,
      100 -
        topDuplicateSimilarity * 100,
    ),
  );

  /*
   * ISSUES
   */
  if (genericHits >= 10) {
    issues.push(
      "yüksek generic/boilerplate yoğunluğu",
    );
  }

  if (mainWords < 100) {
    issues.push(
      "yetersiz içerik derinliği",
    );
  }

  if (wordCount(symbol.jungian) < 15) {
    issues.push(
      "Jungian içerik kısa",
    );
  }

  if (wordCount(symbol.psychology) < 15) {
    issues.push(
      "psychology içerik kısa",
    );
  }

  if (
    duplicateCandidates.length > 0 &&
    topDuplicateSimilarity >= 0.85
  ) {
    issues.push(
      "başka sembolle yüksek içerik benzerliği",
    );
  }

  /*
   * commonVariations is an informational completeness
   * issue, not a P1 trigger.
   */
  if (!symbol.commonVariations.length) {
    issues.push(
      "commonVariations eksik",
    );
  }

  /*
   * PRIORITY
   *
   * Conservative by design.
   */
  let priority: Priority = "P3";

  const structuralFailure =
    missing.includes("shortDescription") ||
    missing.includes("psychology") ||
    missing.includes("jungian") ||
    missing.includes("inusAssessment") ||
    symbol.sources.length === 0;

  const severeSpecificIssue =
    genericHits >= 16 ||
    topDuplicateSimilarity >= 0.9 ||
    completenessScore < 70;

  const meaningfulIssue =
    genericHits >= 10 ||
    topDuplicateSimilarity >= 0.85 ||
    completenessScore < 90;

  if (structuralFailure) {
    priority = "P0";
  } else if (severeSpecificIssue) {
    priority = "P1";
  } else if (meaningfulIssue) {
    priority = "P2";
  }

  /*
   * FINAL QUALITY SCORE
   */
  const score = Math.round(
    contentScore * 0.30 +
      specificityScore * 0.35 +
      duplicationScore * 0.20 +
      completenessScore * 0.15,
  );

  return {
    slug: symbol.slug,
    title: symbol.title,
    priority,
    score,
    contentScore,
    specificityScore,
    duplicationScore,
    completenessScore,
    issues,
    missing,
    duplicateCandidates:
      duplicateCandidates.slice(0, 5),
  };
}

/*
 * Build duplicate profiles once.
 */
const duplicateProfiles =
  new Map<string, Set<string>>();

for (const symbol of dreamSymbols) {
  duplicateProfiles.set(
    symbol.slug,
    getDuplicateProfile(symbol),
  );
}

const items = dreamSymbols.map((symbol) =>
  auditSymbol(
    symbol,
    duplicateProfiles,
  ),
);

const priorityOrder: Priority[] = [
  "P0",
  "P1",
  "P2",
  "P3",
];

items.sort(
  (a, b) =>
    priorityOrder.indexOf(a.priority) -
      priorityOrder.indexOf(b.priority) ||
    a.score - b.score,
);

const distribution = {
  P0: items.filter(
    (item) => item.priority === "P0",
  ).length,

  P1: items.filter(
    (item) => item.priority === "P1",
  ).length,

  P2: items.filter(
    (item) => item.priority === "P2",
  ).length,

  P3: items.filter(
    (item) => item.priority === "P3",
  ).length,
};

/*
 * SYSTEMIC FINDINGS
 */

const missingVariations =
  dreamSymbols.filter(
    (symbol) =>
      symbol.commonVariations.length === 0,
  ).length;

const shortJungian =
  dreamSymbols.filter(
    (symbol) =>
      wordCount(symbol.jungian) < 15,
  ).length;

const shortPsychology =
  dreamSymbols.filter(
    (symbol) =>
      wordCount(symbol.psychology) < 15,
  ).length;

const highGeneric =
  dreamSymbols.filter(
    (symbol) =>
      countGenericPatterns(
        getMainContent(symbol),
      ) >= 10,
  ).length;

const duplicateRisk =
  items.filter(
    (item) =>
      item.duplicateCandidates[0]?.similarity >=
      0.85,
  ).length;

const report = {
  version: "4.0",
  generatedAt:
    new Date().toISOString(),

  symbolCount:
    dreamSymbols.length,

  distribution,

  systemicFindings: {
    missingCommonVariations: {
      count: missingVariations,
      percentage: Number(
        (
          (missingVariations /
            dreamSymbols.length) *
          100
        ).toFixed(1),
      ),
    },

    shortJungian: {
      count: shortJungian,
      percentage: Number(
        (
          (shortJungian /
            dreamSymbols.length) *
          100
        ).toFixed(1),
      ),
    },

    shortPsychology: {
      count: shortPsychology,
      percentage: Number(
        (
          (shortPsychology /
            dreamSymbols.length) *
          100
        ).toFixed(1),
      ),
    },

    highGenericDensity: {
      count: highGeneric,
      percentage: Number(
        (
          (highGeneric /
            dreamSymbols.length) *
          100
        ).toFixed(1),
      ),
    },

    duplicateRisk: {
      count: duplicateRisk,
      percentage: Number(
        (
          (duplicateRisk /
            dreamSymbols.length) *
          100
        ).toFixed(1),
      ),
    },
  },

  items,
};

const reportPath = path.join(
  ROOT,
  ".agents/reports/symbol-audit.json",
);

fs.mkdirSync(
  path.dirname(reportPath),
  { recursive: true },
);

fs.writeFileSync(
  reportPath,
  JSON.stringify(report, null, 2),
);

console.log("");
console.log("==========================================");
console.log("INUS AUDITOR v4");
console.log("==========================================");
console.log("");
console.log(
  `TOPLAM SEMBOL : ${dreamSymbols.length}`,
);
console.log("");
console.log("ÖNCELİK DAĞILIMI");
console.log("------------------------------------------");
console.log(`P0 : ${distribution.P0}`);
console.log(`P1 : ${distribution.P1}`);
console.log(`P2 : ${distribution.P2}`);
console.log(`P3 : ${distribution.P3}`);

console.log("");
console.log("SYSTEMIC FINDINGS");
console.log("------------------------------------------");

console.log(
  `commonVariations eksik : ${missingVariations} / ${dreamSymbols.length} (%${(
    (missingVariations /
      dreamSymbols.length) *
    100
  ).toFixed(1)})`,
);

console.log(
  `Jungian < 15 kelime     : ${shortJungian} / ${dreamSymbols.length} (%${(
    (shortJungian /
      dreamSymbols.length) *
    100
  ).toFixed(1)})`,
);

console.log(
  `Psychology < 15 kelime  : ${shortPsychology} / ${dreamSymbols.length} (%${(
    (shortPsychology /
      dreamSymbols.length) *
    100
  ).toFixed(1)})`,
);

console.log(
  `Yüksek generic density  : ${highGeneric} / ${dreamSymbols.length} (%${(
    (highGeneric /
      dreamSymbols.length) *
    100
  ).toFixed(1)})`,
);

console.log(
  `Duplicate risk          : ${duplicateRisk} / ${dreamSymbols.length} (%${(
    (duplicateRisk /
      dreamSymbols.length) *
    100
  ).toFixed(1)})`,
);

console.log("");
console.log("EN KRİTİK 50");
console.log("==========================================");

for (const item of items.slice(0, 50)) {
  console.log(
    `${item.priority} | %${item.score
      .toString()
      .padStart(3)} | C ${item.contentScore
      .toString()
      .padStart(3)} S ${item.specificityScore
      .toString()
      .padStart(3)} D ${item.duplicationScore
      .toString()
      .padStart(3)} | ${item.title} | ${item.slug}`,
  );

  if (item.issues.length) {
    console.log(
      `     ${item.issues.join(" / ")}`,
    );
  }

  if (item.missing.length) {
    console.log(
      `     eksik: ${item.missing.join(", ")}`,
    );
  }

  if (
    item.duplicateCandidates.length
  ) {
    console.log(
      `     benzer: ${item.duplicateCandidates
        .slice(0, 3)
        .map(
          (candidate) =>
            `${candidate.title} (%${Math.round(
              candidate.similarity * 100,
            )})`,
        )
        .join(" / ")}`,
    );
  }
}

console.log("");
console.log(
  "RAPOR: .agents/reports/symbol-audit.json",
);
console.log("");
console.log("==========================================");
console.log("AUDIT TAMAMLANDI");
console.log("READ-ONLY — DOSYA DEĞİŞTİRİLMEDİ");
console.log("==========================================");
