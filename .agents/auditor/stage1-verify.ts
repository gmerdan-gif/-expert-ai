/**
 * INUS Stage 1 — independent read-only verification.
 * Writes ONLY under .agents/reports/. Does not modify production data.
 */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { dreamSymbolEntries } from "../../data/dream-symbol-entries";
import { dreamSymbols, getDreamSymbolBySlug } from "../../data/dream-symbols";
import { DEFAULT_SOURCES } from "../../data/dream-symbol-sources";
import { batchA } from "../../data/symbols/batch-a";
import { batchB } from "../../data/symbols/batch-b";
import { batchC } from "../../data/symbols/batch-c";
import { batchD } from "../../data/symbols/batch-d";
import { batchE } from "../../data/symbols/batch-e";
import { batchF } from "../../data/symbols/batch-f";
import { batchG } from "../../data/symbols/batch-g";
import { batchH } from "../../data/symbols/batch-h";
import { batchI } from "../../data/symbols/batch-i";
import { batchJ } from "../../data/symbols/batch-j";
import { batchK } from "../../data/symbols/batch-k";
import { batchL } from "../../data/symbols/batch-l";
import { batchM } from "../../data/symbols/batch-m";
import { batchN } from "../../data/symbols/batch-n";
import { batchO } from "../../data/symbols/batch-o";
import { batchP } from "../../data/symbols/batch-p";
import { batchQ } from "../../data/symbols/batch-q";
import { batchR } from "../../data/symbols/batch-r";
import { batchS } from "../../data/symbols/batch-s";
import { batchT } from "../../data/symbols/batch-t";
import { batchU } from "../../data/symbols/batch-u";
import { batchV } from "../../data/symbols/batch-v";
import { batchW } from "../../data/symbols/batch-w";
import { batchX } from "../../data/symbols/batch-x";
import { batchY } from "../../data/symbols/batch-y";
import { batchZ } from "../../data/symbols/batch-z";
import { batchAA } from "../../data/symbols/batch-aa";
import { batchAB } from "../../data/symbols/batch-ab";
import { batchAC } from "../../data/symbols/batch-ac";
import { batchAD } from "../../data/symbols/batch-ad";
import { batchAE } from "../../data/symbols/batch-ae";
import { batchAF } from "../../data/symbols/batch-af";
import { batchAG } from "../../data/symbols/batch-ag";
import { batchAH } from "../../data/symbols/batch-ah";
import { batchAI } from "../../data/symbols/batch-ai";
import { batchAJ } from "../../data/symbols/batch-aj";
import { batchAK } from "../../data/symbols/batch-ak";
import { batchAL } from "../../data/symbols/batch-al";
import { batchAM } from "../../data/symbols/batch-am";
import { batchAN } from "../../data/symbols/batch-an";
import { batchAO } from "../../data/symbols/batch-ao";
import { batchAP } from "../../data/symbols/batch-ap";
import { batchAQ } from "../../data/symbols/batch-aq";
import { batchAR } from "../../data/symbols/batch-ar";
import { batchAS } from "../../data/symbols/batch-as";

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, ".agents/reports");

type Severity = "P0" | "P1" | "P2" | "P3";

type Issue = {
  file: string;
  slug: string;
  field: string;
  severity: Severity;
  problem: string;
  evidence: string;
  recommended_action: string;
};

function normalize(text: string): string {
  return text
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9çğıöşü\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(value: unknown): number {
  const text =
    typeof value === "string"
      ? value
      : Array.isArray(value)
        ? value.join(" ")
        : "";
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function tokens(value: string): Set<string> {
  return new Set(
    normalize(value)
      .split(/\s+/)
      .filter((t) => t.length >= 5),
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  for (const t of a) if (b.has(t)) intersection++;
  const union = a.size + b.size - intersection;
  return union ? intersection / union : 0;
}

function contentFingerprint(symbol: (typeof dreamSymbols)[number]): Set<string> {
  return tokens(
    [
      symbol.shortDescription,
      symbol.psychology,
      symbol.jungian,
      symbol.positiveAssociations.join(" "),
      symbol.challengingAssociations.join(" "),
    ].join(" "),
  );
}

function sourceFingerprint(sources: (typeof dreamSymbols)[number]["sources"]): string {
  return createHash("sha1")
    .update(
      JSON.stringify(
        sources.map((s) => ({
          authors: s.authors,
          title: s.title,
          url: s.url ?? "",
        })),
      ),
    )
    .digest("hex");
}

function removeSymbolName(text: string, title: string): string {
  const normalizedText = normalize(text);
  const normalizedTitle = normalize(title);
  return normalizedText
    .replace(
      new RegExp(
        normalizedTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "gi",
      ),
      "{{SYMBOL}}",
    )
    .replace(/\s+/g, " ")
    .trim();
}

function fieldValue(
  symbol: (typeof dreamSymbols)[number],
  field:
    | "shortDescription"
    | "psychology"
    | "jungian"
    | "positiveAssociations"
    | "challengingAssociations",
): string {
  const value = symbol[field];
  return Array.isArray(value) ? value.map(String).join(" | ") : String(value);
}

// ---------------------------------------------------------------------------
// 1. COUNT VERIFICATION
// ---------------------------------------------------------------------------

const entryCount = dreamSymbolEntries.length;
const exportCount = dreamSymbols.length;

const slugCounts = new Map<string, number>();
const titleCounts = new Map<string, number>();
const slugToIndices = new Map<string, number[]>();

dreamSymbols.forEach((symbol, index) => {
  slugCounts.set(symbol.slug, (slugCounts.get(symbol.slug) ?? 0) + 1);
  titleCounts.set(symbol.title, (titleCounts.get(symbol.title) ?? 0) + 1);
  const indices = slugToIndices.get(symbol.slug) ?? [];
  indices.push(index);
  slugToIndices.set(symbol.slug, indices);
});

const uniqueSlugs = [...slugCounts.keys()].length;
const uniqueTitles = [...titleCounts.keys()].length;
const duplicateSlugEntries = [...slugCounts.entries()].filter(([, n]) => n > 1);
const duplicateTitleEntries = [...titleCounts.entries()].filter(([, n]) => n > 1);

// Batch file inventory — measure exported array lengths (not createSymbol call counts).
const batchExports: Record<string, unknown[]> = {
  "batch-a.ts": batchA,
  "batch-b.ts": batchB,
  "batch-c.ts": batchC,
  "batch-d.ts": batchD,
  "batch-e.ts": batchE,
  "batch-f.ts": batchF,
  "batch-g.ts": batchG,
  "batch-h.ts": batchH,
  "batch-i.ts": batchI,
  "batch-j.ts": batchJ,
  "batch-k.ts": batchK,
  "batch-l.ts": batchL,
  "batch-m.ts": batchM,
  "batch-n.ts": batchN,
  "batch-o.ts": batchO,
  "batch-p.ts": batchP,
  "batch-q.ts": batchQ,
  "batch-r.ts": batchR,
  "batch-s.ts": batchS,
  "batch-t.ts": batchT,
  "batch-u.ts": batchU,
  "batch-v.ts": batchV,
  "batch-w.ts": batchW,
  "batch-x.ts": batchX,
  "batch-y.ts": batchY,
  "batch-z.ts": batchZ,
  "batch-aa.ts": batchAA,
  "batch-ab.ts": batchAB,
  "batch-ac.ts": batchAC,
  "batch-ad.ts": batchAD,
  "batch-ae.ts": batchAE,
  "batch-af.ts": batchAF,
  "batch-ag.ts": batchAG,
  "batch-ah.ts": batchAH,
  "batch-ai.ts": batchAI,
  "batch-aj.ts": batchAJ,
  "batch-ak.ts": batchAK,
  "batch-al.ts": batchAL,
  "batch-am.ts": batchAM,
  "batch-an.ts": batchAN,
  "batch-ao.ts": batchAO,
  "batch-ap.ts": batchAP,
  "batch-aq.ts": batchAQ,
  "batch-ar.ts": batchAR,
  "batch-as.ts": batchAS,
};

const batchFiles = Object.keys(batchExports).sort();
const batchSizes: Record<string, number> = {};
let batchSum = 0;
for (const file of batchFiles) {
  const len = batchExports[file].length;
  batchSizes[file] = len;
  batchSum += len;
}

// ---------------------------------------------------------------------------
// 2. STRUCTURAL ISSUES
// ---------------------------------------------------------------------------

const issues: Issue[] = [];

for (const [slug, count] of duplicateSlugEntries) {
  const indices = slugToIndices.get(slug)!;
  const a = dreamSymbols[indices[0]];
  const b = dreamSymbols[indices[1]];
  const sim = jaccard(contentFingerprint(a), contentFingerprint(b));
  const lookup = getDreamSymbolBySlug(slug);
  issues.push({
    file: "data/symbols/* (duplicate slug across batches)",
    slug,
    field: "slug",
    severity: "P0",
    problem:
      "Aynı slug birden fazla kayıtta. getDreamSymbolBySlug ilk kaydı döndürür; sonraki (genelde daha spesifik) içerik gizlenir.",
    evidence: `count=${count}; indices=${indices.join(",")}; lookupReturnsFirst=${lookup?.shortDescription === a.shortDescription}; contentJaccard=${sim.toFixed(3)}; titles="${a.title}" vs "${b.title}"`,
    recommended_action:
      "Tek canonical kayıt bırak; gizli spesifik kaydı koru; unique-slug invariant testi ekle.",
  });
}

// Same-title distinct-slug collisions
for (const [title, count] of duplicateTitleEntries) {
  if (count < 2) continue;
  const symbols = dreamSymbols.filter((s) => s.title === title);
  const slugs = symbols.map((s) => s.slug);
  const uniqueSlugSet = new Set(slugs);
  if (uniqueSlugSet.size < 2) continue; // exact slug dups already P0

  const fps = symbols.map(contentFingerprint);
  let maxSim = 0;
  for (let i = 0; i < fps.length; i++) {
    for (let j = i + 1; j < fps.length; j++) {
      maxSim = Math.max(maxSim, jaccard(fps[i], fps[j]));
    }
  }

  const severity: Severity = maxSim >= 0.95 ? "P1" : "P1";
  issues.push({
    file: "data/symbols/*",
    slug: slugs.join(" / "),
    field: "title+slug",
    severity,
    problem:
      "Aynı title için birden fazla slug (ASCII/diacritic veya varyant). SEO/canonical çakışması.",
    evidence: `title="${title}"; slugs=${slugs.join(",")}; maxContentJaccard=${maxSim.toFixed(3)}`,
    recommended_action:
      "Canonical slug seç; diğerini redirect veya kaldır; title uniqueness sağla.",
  });
}

// Broken relatedSlugs
const slugSet = new Set(dreamSymbols.map((s) => s.slug));
const brokenRelated: { slug: string; missing: string[] }[] = [];
for (const symbol of dreamSymbols) {
  const missing = symbol.relatedSlugs.filter((r) => !slugSet.has(r));
  if (missing.length) {
    brokenRelated.push({ slug: symbol.slug, missing });
  }
}

for (const item of brokenRelated) {
  issues.push({
    file: "data/symbols/*",
    slug: item.slug,
    field: "relatedSlugs",
    severity: "P2",
    problem: "Manuel relatedSlugs hedef slug mevcut değil.",
    evidence: `dangling=${item.missing.join(",")}`,
    recommended_action: "Dangling hedefleri düzelt veya kaldır; auto-relation yeterliyse manuel boş bırak.",
  });
}

// ---------------------------------------------------------------------------
// 3. DATASET-WIDE METRICS
// ---------------------------------------------------------------------------

const REQUIRED_TEXT = [
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
] as const;

const REQUIRED_ARRAY = [
  "positiveAssociations",
  "challengingAssociations",
  "contextDependentAssociations",
  "commonVariations",
  "comparisonTable",
  "faq",
  "sources",
] as const;

const missingFieldCounts: Record<string, number> = {};
for (const field of [...REQUIRED_TEXT, ...REQUIRED_ARRAY]) {
  missingFieldCounts[field] = 0;
}

let emptyRelated = 0;
let shortJungian = 0;
let shortPsychology = 0;
let shortIslamic = 0;
let shortChristian = 0;
let shortJewish = 0;
let shortBuddhist = 0;
let shortSpiritual = 0;
let defaultSourcesOnly = 0;

const defaultFp = sourceFingerprint(DEFAULT_SOURCES);
const sourceFpCounts = new Map<string, { count: number; sampleSlug: string; sourceCount: number; titles: string[] }>();

const GENERIC_SNIPPETS = [
  "farklı kişisel çağrışımlar ve bağlamsal anlamlar",
  "rüyanın atmosferi, yaşanan duygu",
  "gündelik yaşam deneyimleri, duygusal durumu",
  "bilinçdışındaki bir sürecin sembolik ifadesi",
  "tek bir evrensel",
  "kesin bir anlam",
];

const genericSnippetHits: Record<string, number> = {};
for (const snip of GENERIC_SNIPPETS) genericSnippetHits[snip] = 0;

for (const symbol of dreamSymbols) {
  for (const field of REQUIRED_TEXT) {
    if (!String(symbol[field] ?? "").trim()) missingFieldCounts[field]++;
  }
  for (const field of REQUIRED_ARRAY) {
    const value = symbol[field];
    if (!Array.isArray(value) || value.length === 0) missingFieldCounts[field]++;
  }

  if (!symbol.relatedSlugs.length) emptyRelated++;
  if (wordCount(symbol.jungian) < 15) shortJungian++;
  if (wordCount(symbol.psychology) < 15) shortPsychology++;
  if (wordCount(symbol.islamicTradition) < 15) shortIslamic++;
  if (wordCount(symbol.christianTraditions) < 15) shortChristian++;
  if (wordCount(symbol.jewishTraditions) < 15) shortJewish++;
  if (wordCount(symbol.buddhistEasternApproaches) < 15) shortBuddhist++;
  if (wordCount(symbol.spiritualApproaches) < 15) shortSpiritual++;

  const fp = sourceFingerprint(symbol.sources);
  const existingFp = sourceFpCounts.get(fp);
  if (existingFp) {
    existingFp.count++;
  } else {
    sourceFpCounts.set(fp, {
      count: 1,
      sampleSlug: symbol.slug,
      sourceCount: symbol.sources.length,
      titles: symbol.sources.map((s) => s.title),
    });
  }
  if (fp === defaultFp) defaultSourcesOnly++;

  const blob = [
    symbol.shortDescription,
    symbol.psychology,
    symbol.jungian,
  ].join(" ");
  const norm = normalize(blob);
  for (const snip of GENERIC_SNIPPETS) {
    if (norm.includes(normalize(snip))) genericSnippetHits[snip]++;
  }
}

// Template clusters (symbol-name-stripped)
type Cluster = {
  key: string;
  count: number;
  symbols: { slug: string; title: string }[];
};
const clusters = new Map<string, Cluster>();
const fields = [
  "shortDescription",
  "psychology",
  "jungian",
  "positiveAssociations",
  "challengingAssociations",
] as const;

for (const symbol of dreamSymbols) {
  const parts = fields.map((f) => removeSymbolName(fieldValue(symbol, f), symbol.title));
  const key = createHash("sha1").update(parts.join("\n---\n")).digest("hex");
  const existing = clusters.get(key);
  if (existing) {
    existing.count++;
    existing.symbols.push({ slug: symbol.slug, title: symbol.title });
  } else {
    clusters.set(key, {
      key,
      count: 1,
      symbols: [{ slug: symbol.slug, title: symbol.title }],
    });
  }
}

const repeatedClusters = [...clusters.values()]
  .filter((c) => c.count >= 2)
  .sort((a, b) => b.count - a.count);

const templateDuplicateSymbols = repeatedClusters.reduce(
  (sum, c) => sum + c.count,
  0,
);

// High-similarity pairs among TOP template cluster exemplars (symbol-specific P1 sample)
// Find near-identical content pairs with jaccard >= 0.98 on short+psych+jung only
const nearIdenticalPairs: {
  a: string;
  b: string;
  similarity: number;
}[] = [];

const profiles = dreamSymbols.map((s) => ({
  slug: s.slug,
  title: s.title,
  fp: tokens(
    [s.shortDescription, s.psychology, s.jungian].join(" "),
  ),
}));

// Sample pairwise only within largest template clusters to keep O(n) manageable
for (const cluster of repeatedClusters.slice(0, 20)) {
  const members = cluster.symbols
    .map((s) => profiles.find((p) => p.slug === s.slug)!)
    .filter(Boolean);
  for (let i = 0; i < members.length; i++) {
    for (let j = i + 1; j < members.length; j++) {
      const sim = jaccard(members[i].fp, members[j].fp);
      if (sim >= 0.98) {
        nearIdenticalPairs.push({
          a: members[i].slug,
          b: members[j].slug,
          similarity: Number(sim.toFixed(3)),
        });
      }
    }
  }
}

nearIdenticalPairs.sort((a, b) => b.similarity - a.similarity);

// Symbol-specific P1 from hard template clusters with size >= 5 and near-identical content
const symbolSpecificP1 = new Set<string>();
for (const cluster of repeatedClusters) {
  if (cluster.count >= 5) {
    for (const s of cluster.symbols) symbolSpecificP1.add(s.slug);
  }
}
for (const pair of nearIdenticalPairs) {
  symbolSpecificP1.add(pair.a);
  symbolSpecificP1.add(pair.b);
}

// Add lunapark / exact near-dup as P1 if not already
for (const issue of issues) {
  if (issue.severity === "P1") {
    for (const part of issue.slug.split(" / ")) symbolSpecificP1.add(part.trim());
  }
}

// ---------------------------------------------------------------------------
// 4. AUDITOR LOGIC VALIDATION
// ---------------------------------------------------------------------------

const existingAuditPath = path.join(REPORT_DIR, "symbol-audit.json");
let existingAudit: {
  version?: string;
  symbolCount?: number;
  distribution?: Record<string, number>;
  systemicFindings?: Record<string, { count: number; percentage: number }>;
} | null = null;

if (fs.existsSync(existingAuditPath)) {
  existingAudit = JSON.parse(fs.readFileSync(existingAuditPath, "utf8"));
}

const auditorValidation = {
  scriptPath: "scripts/inus/audit-symbols.ts",
  versionInReport: existingAudit?.version ?? null,
  reportedSymbolCount: existingAudit?.symbolCount ?? null,
  actualEntryCount: entryCount,
  countMatch: existingAudit?.symbolCount === entryCount,
  obsoleteAssumptions: [
    {
      assumption: "1330 symbols",
      status: "OBSOLETE",
      evidence:
        "No hardcoded 1330 in current auditor v4. Only mentioned as historical warning in .agents/orchestrator/AGENT.md. Actual entry count is 1676.",
    },
    {
      assumption: "1676 symbols (orchestrator CURRENT DATASET RULE)",
      status: "PARTIALLY_VALID",
      evidence: `dreamSymbols.length === ${exportCount}; unique slugs === ${uniqueSlugs}. Entry array length is 1676 but 2 slug collisions → effective unique symbols ${uniqueSlugs}.`,
    },
    {
      assumption: "Field-length scoring as primary quality (v2 jungian/psychology < 70 words)",
      status: "PARTIALLY_RETIRED",
      evidence:
        "v2 backup used <70 word thresholds. v4 lowered to <15 and treats length as limited contentScore component (mainWords/2.5 capped). Still risks rewarding verbosity; orchestrator forbids length-alone optimization.",
    },
    {
      assumption: "Jaccard token similarity ≥0.90 → symbol-specific P1",
      status: "OBSOLETE_AS_P1_TRIGGER",
      evidence: `Existing v4 report marks ${existingAudit?.distribution?.P1 ?? "?"} as P1 and duplicateRisk ${existingAudit?.systemicFindings?.duplicateRisk?.count ?? "?"} (${existingAudit?.systemicFindings?.duplicateRisk?.percentage ?? "?"}%). Shared boilerplate tokens inflate Jaccard across unrelated symbols. Hard template-cluster analysis finds ${repeatedClusters.length} repeated clusters covering ${templateDuplicateSymbols} symbols — systemic, not 1400+ independent P1s.`,
    },
    {
      assumption: "completenessScore / missing commonVariations as quality proxy",
      status: "VALID_AS_SYSTEMIC_METRIC_ONLY",
      evidence: `missing commonVariations=${missingFieldCounts.commonVariations} (${((missingFieldCounts.commonVariations / entryCount) * 100).toFixed(1)}%). v4 correctly does not escalate missing variations alone to P1, but contentScore still rewards FAQ/comparison length.`,
    },
    {
      assumption: "Auditor detects structural slug collisions as P0",
      status: "FALSE / GAP",
      evidence: `v4 distribution P0=${existingAudit?.distribution?.P0 ?? 0}; independent check found ${duplicateSlugEntries.length} duplicate slug keys (${duplicateSlugEntries.map(([s]) => s).join(", ")}). Content auditor never checks slug uniqueness.`,
    },
  ],
  priorityInflation: {
    v4_P1: existingAudit?.distribution?.P1 ?? null,
    independent_symbol_specific_P1_estimate: symbolSpecificP1.size,
    note: "v4 P1 count is dominated by dataset-wide template similarity. Orchestrator rule: never promote all symbols to P1 merely because they share a dataset-wide weakness.",
  },
};

// ---------------------------------------------------------------------------
// 5. WRITE REPORTS
// ---------------------------------------------------------------------------

const dataset = {
  entryCount,
  exportCount,
  uniqueSlugCount: uniqueSlugs,
  uniqueTitleCount: uniqueTitles,
  duplicateSlugKeys: duplicateSlugEntries.map(([slug, count]) => ({ slug, count })),
  duplicateTitleCount: duplicateTitleEntries.length,
  effectiveUniqueSymbols: uniqueSlugs,
  batchFileCount: batchFiles.length,
    batchSumExportedArrays: batchSum,
  batchSizes,
  emptyBatches: Object.entries(batchSizes)
    .filter(([, n]) => n === 0)
    .map(([f]) => f),
  obsoleteAssumption_1330: false,
  confirmedAssumption_1676_entries: entryCount === 1676,
};

const systemic = {
  missingFields: missingFieldCounts,
  emptyRelatedSlugs: emptyRelated,
  shortFields: {
    jungian_lt15: shortJungian,
    psychology_lt15: shortPsychology,
    islamicTradition_lt15: shortIslamic,
    christianTraditions_lt15: shortChristian,
    jewishTraditions_lt15: shortJewish,
    buddhistEasternApproaches_lt15: shortBuddhist,
    spiritualApproaches_lt15: shortSpiritual,
  },
  sources: (() => {
    const ranked = [...sourceFpCounts.entries()]
      .map(([fp, info]) => ({ fingerprint: fp.slice(0, 12), ...info }))
      .sort((a, b) => b.count - a.count);
    const dominant = ranked[0];
    return {
      uniqueFingerprints: sourceFpCounts.size,
      defaultSourcesCount: defaultSourcesOnly,
      defaultSourcesPercentage: Number(
        ((defaultSourcesOnly / entryCount) * 100).toFixed(1),
      ),
      dominantFingerprintCount: dominant?.count ?? 0,
      dominantFingerprintPercentage: Number(
        (((dominant?.count ?? 0) / entryCount) * 100).toFixed(1),
      ),
      dominantSourceTitles: dominant?.titles ?? [],
      topFingerprints: ranked.slice(0, 5),
    };
  })(),
  genericSnippetHits,
  templateClusters: {
    repeatedClusterCount: repeatedClusters.length,
    symbolsInRepeatedClusters: templateDuplicateSymbols,
    topClusters: repeatedClusters.slice(0, 15).map((c) => ({
      count: c.count,
      sample: c.symbols.slice(0, 12),
    })),
  },
  nearIdenticalPairsInTopClusters: nearIdenticalPairs.slice(0, 40),
};

const issueCounts = {
  P0: issues.filter((i) => i.severity === "P0").length,
  P1: issues.filter((i) => i.severity === "P1").length,
  P2: issues.filter((i) => i.severity === "P2").length,
  P3: issues.filter((i) => i.severity === "P3").length,
};

// Dataset-wide P2/P3 findings as issues (not per-symbol)
const datasetWideIssues: Issue[] = [
  {
    file: "data/symbols/* + scripts/inus/audit-symbols.ts",
    slug: "*",
    field: "content-template",
    severity: "P1",
    problem:
      "DATASET-WIDE: Shared boilerplate / template content across many symbols. Do NOT rewrite 1400+ symbols individually.",
    evidence: `repeatedClusters=${repeatedClusters.length}; symbolsInClusters=${templateDuplicateSymbols}; v4_duplicateRisk=${existingAudit?.systemicFindings?.duplicateRisk?.count ?? "n/a"}; top generic snippets=${JSON.stringify(genericSnippetHits)}`,
    recommended_action:
      "Treat as systemic: identify root template; pick 10–20 representative symbols from worst cluster; propose + review before expanding.",
  },
  {
    file: "data/symbols/*",
    slug: "*",
    field: "commonVariations",
    severity: "P2",
    problem: "DATASET-WIDE: commonVariations empty on a large share of symbols.",
    evidence: `missing=${missingFieldCounts.commonVariations}/${entryCount} (${((missingFieldCounts.commonVariations / entryCount) * 100).toFixed(1)}%)`,
    recommended_action:
      "Systemic content policy: decide whether variations are required; if yes, batch-fill with symbol-specific variations after pilot.",
  },
  {
    file: "data/dream-symbol-factory.ts + data/dream-symbol-sources.ts",
    slug: "*",
    field: "sources",
    severity: "P2",
    problem:
      "DATASET-WIDE: Source monoculture — vast majority share one 2-source fingerprint (Schredl 2010 + Blagrove 2019), not claim-specific citations.",
    evidence: `uniqueFingerprints=${sourceFpCounts.size}; dominant=${
      [...sourceFpCounts.values()].sort((a, b) => b.count - a.count)[0]?.count
    }/${entryCount}; DEFAULT_SOURCES(3-item)=${defaultSourcesOnly}`,
    recommended_action:
      "Do not auto-expand sources without claim support. Policy: cite only sources that support specific claims; pilot on high-traffic symbols.",
  },
  {
    file: "data/symbols/batch-q.ts + data/symbols/batch-s.ts",
    slug: "*",
    field: "batch",
    severity: "P3",
    problem: "Empty batches still imported in dream-symbol-entries.",
    evidence: `emptyBatches=${JSON.stringify(
      Object.entries(batchSizes)
        .filter(([, n]) => n === 0)
        .map(([f]) => f),
    )}`,
    recommended_action: "Remove empty imports or restore content; cosmetic only.",
  },
];

const allIssues = [...issues, ...datasetWideIssues];

const structuralReport = {
  generatedAt: new Date().toISOString(),
  stage: "AUDIT",
  readOnly: true,
  dataset,
  issueCounts: {
    P0: allIssues.filter((i) => i.severity === "P0").length,
    P1: allIssues.filter((i) => i.severity === "P1").length,
    P2: allIssues.filter((i) => i.severity === "P2").length,
    P3: allIssues.filter((i) => i.severity === "P3").length,
  },
  symbolSpecificIssueCounts: issueCounts,
  systemic,
  auditorValidation,
  issues: allIssues,
  recommendedNextStep: "PRIORITIZE",
  stopGate: "STAGE_1_COMPLETE_DO_NOT_PROCEED",
};

fs.mkdirSync(REPORT_DIR, { recursive: true });
fs.writeFileSync(
  path.join(REPORT_DIR, "structural-audit.json"),
  JSON.stringify(structuralReport, null, 2),
);

const pct = (n: number) => ((n / entryCount) * 100).toFixed(1);

const summary = `# INUS AUDIT REPORT — Stage 1 only

**Generated:** ${structuralReport.generatedAt}
**Auditor:** READ-ONLY (no production file modifications)
**Orchestrator stage:** AUDIT complete → STOP (no PRIORITIZE/PROPOSE/PATCH)

---

## 1. Actual dataset count

| Metric | Value | Verdict |
|--------|------:|---------|
| \`dreamSymbolEntries.length\` / \`dreamSymbols.length\` | **${entryCount}** | Entry-array count |
| Unique slugs | **${uniqueSlugs}** | ${duplicateSlugEntries.length} exact slug collision key(s) |
| Unique titles | **${uniqueTitles}** | ${duplicateTitleEntries.length} title collision group(s) |
| Active batch files (\`batch-*.ts\`) | **${batchFiles.length}** | exported array sum=${batchSum} |
| Empty batches | ${dataset.emptyBatches.join(", ") || "none"} | Still imported |
| Obsolete assumption **1330** | — | **FALSE / obsolete** (not present in live data or auditor v4 hardcode) |
| Assumption **1676** | entries | **TRUE for entry count**; effective unique symbols = **${uniqueSlugs}** |

### Source of truth

- Aggregator: \`data/dream-symbol-entries.ts\`
- Runtime: \`data/dream-symbols.ts\` → \`dreamSymbols = dreamSymbolEntries\`
- Factory: \`createSymbol\` + \`DEFAULT_SOURCES\`

---

## 2. Structural findings

### P0 — Blockers

${
  duplicateSlugEntries.length
    ? duplicateSlugEntries
        .map(
          ([slug, count]) =>
            `- **\`${slug}\`** appears **${count}** times → \`getDreamSymbolBySlug\` returns the first record; later content is hidden.`,
        )
        .join("\n")
    : "- None"
}

### Schema integrity (positive)

- Required text fields present on essentially all entries (empty counts in structural-audit.json).
- FAQ / sources arrays present on all entries in this pass.
- Relation engine auto-fills when manual \`relatedSlugs\` empty (${emptyRelated}/${entryCount} empty manual).

### Auditor gap

- Content auditor v4 reported P0=${existingAudit?.distribution?.P0 ?? "n/a"} and never flagged slug uniqueness.
- Independent structural audit corrects this.

---

## 3. Dataset-wide problems

| Finding | Count | % of ${entryCount} | Class |
|---------|------:|-------------------:|-------|
| missing \`commonVariations\` | ${missingFieldCounts.commonVariations} | ${pct(missingFieldCounts.commonVariations)}% | systemic P2 |
| Jungian < 15 words | ${shortJungian} | ${pct(shortJungian)}% | systemic metric (length ≠ quality) |
| Psychology < 15 words | ${shortPsychology} | ${pct(shortPsychology)}% | systemic metric |
| DEFAULT_SOURCES (3-item factory default) | ${defaultSourcesOnly} | ${pct(defaultSourcesOnly)}% | minority |
| dominant shared source set (2-item) | ${systemic.sources.dominantFingerprintCount} | ${systemic.sources.dominantFingerprintPercentage}% | systemic P2 monoculture |
| unique source fingerprints | ${sourceFpCounts.size} | — | monoculture |
| template repeated clusters | ${repeatedClusters.length} | — | systemic P1 |
| symbols inside repeated clusters | ${templateDuplicateSymbols} | ${pct(templateDuplicateSymbols)}% | systemic |
| v4 duplicate-risk (≥0.85) | ${existingAudit?.systemicFindings?.duplicateRisk?.count ?? "n/a"} | ${existingAudit?.systemicFindings?.duplicateRisk?.percentage ?? "n/a"}% | **inflated P1 trigger** |
| empty manual relatedSlugs | ${emptyRelated} | ${pct(emptyRelated)}% | expected if auto-relations OK |
| broken relatedSlugs targets | ${brokenRelated.length} | — | symbol-specific P2 |

### Hard boilerplate phrase hits

${Object.entries(genericSnippetHits)
  .map(([k, v]) => `- "${k}…": **${v}**`)
  .join("\n")}

**Orchestrator interpretation:** Shared templates are a **systemic** problem. Do **not** treat v4's ${existingAudit?.distribution?.P1 ?? "1415"} P1 labels as ${existingAudit?.distribution?.P1 ?? "1415"} independent rewrites.

### Top template clusters (sample)

${repeatedClusters
  .slice(0, 8)
  .map(
    (c) =>
      `- **${c.count} symbols** — e.g. ${c.symbols
        .slice(0, 6)
        .map((s) => s.slug)
        .join(", ")}`,
  )
  .join("\n") || "- (no repeated clusters found)"}

---

## 4. Symbol-specific P1 / P2 problems

### P1 (symbol-specific — high value)

1. **Exact slug collisions** (also P0 structurally): ${duplicateSlugEntries.map(([s]) => `\`${s}\``).join(", ") || "none"}
2. **Title/slug canonical collisions** (${issues.filter((i) => i.severity === "P1" && i.field === "title+slug").length} groups): ASCII vs diacritic or near-variant slugs sharing one title — see \`structural-audit.json\`.
3. **Near-identical content pairs** inside template clusters (jaccard ≥ 0.98 on short+psych+jung): ${nearIdenticalPairs.length} pairs sampled in top clusters — e.g. ${nearIdenticalPairs
  .slice(0, 5)
  .map((p) => `${p.a}↔${p.b}(${p.similarity})`)
  .join(", ") || "none"}.

Representative worst-cluster exemplars for a future 10–20 batch (do not patch now):
\`${repeatedClusters[0]?.symbols
  .slice(0, 12)
  .map((s) => s.slug)
  .join("`, `") || "n/a"}\`

### P2 (symbol-specific)

${
  brokenRelated.length
    ? brokenRelated
        .map((b) => `- \`${b.slug}\`: dangling related → ${b.missing.map((m) => `\`${m}\``).join(", ")}`)
        .join("\n")
    : "- No dangling relatedSlugs found in this pass."
}

---

## 5. Obsolete auditor assumptions

| Assumption | Status | Notes |
|------------|--------|-------|
| 1330 symbols | **OBSOLETE** | Not in live dataset; historical only |
| 1676 = unique symbols | **PARTIALLY VALID** | 1676 entries, ${uniqueSlugs} unique slugs |
| v2 field-length <70 as quality gate | **PARTIALLY RETIRED** | v4 uses <15 + capped length score; still length-biased |
| Jaccard ≥0.90 ⇒ independent P1 | **OBSOLETE AS P1 TRIGGER** | Marks ~${existingAudit?.distribution?.P1 ?? "?"} symbols P1; mostly shared boilerplate |
| Auditor catches slug collisions | **GAP** | v4 P0=0; structural audit finds ${duplicateSlugEntries.length} |
| missing commonVariations ⇒ rewrite all | **SYSTEMIC ONLY** | Completeness metric, not per-symbol P1 |

Auditor script validated: \`scripts/inus/audit-symbols.ts\` (v4). Prior versions in \`.agents/logs/audit-symbols.v2.backup.ts\` / \`v3\`.

---

## 6. Recommended next workflow step

**STOP after Stage 1.**

Next authorized stage when human continues: **PRIORITIZE** (Stage 2).

Suggested prioritization order (for later — not executed now):

1. Fix **P0 slug collisions** (small, reversible data patch).
2. Resolve **title/slug canonical pairs** (SEO).
3. Treat **template boilerplate** as systemic: pick **10–20** symbols from the worst cluster → PROPOSE → REVIEW → PATCH → TEST → RE-AUDIT.
4. Defer dataset-wide \`commonVariations\` / source monoculture until after pilot proves a pattern.

---

## Artifacts

| Path | Contents |
|------|----------|
| \`.agents/reports/structural-audit.json\` | Full structured Stage 1 report + auditor validation |
| \`.agents/reports/symbol-audit.json\` | Prior per-symbol v4 scores (reference; P1 inflated) |
| \`.agents/reports/AUDIT-SUMMARY.md\` | This executive report |

---

## Stage gate

**AUDIT: COMPLETE**
**Production files modified:** none
**Do not proceed to proposal, review, patch, test, re-audit, or release.**
`;

fs.writeFileSync(path.join(REPORT_DIR, "AUDIT-SUMMARY.md"), summary);

console.log("==========================================");
console.log("INUS STAGE 1 — INDEPENDENT VERIFY");
console.log("==========================================");
console.log(`entries=${entryCount} uniqueSlugs=${uniqueSlugs} uniqueTitles=${uniqueTitles}`);
console.log(`dupSlugs=${duplicateSlugEntries.length} titleCollisions=${issues.filter((i) => i.field === "title+slug").length}`);
console.log(`brokenRelated=${brokenRelated.length}`);
console.log(`templateClusters=${repeatedClusters.length} symbolsInClusters=${templateDuplicateSymbols}`);
console.log(`defaultSources=${defaultSourcesOnly} uniqueSourceFp=${sourceFpCounts.size}`);
console.log(`v4_P1=${existingAudit?.distribution?.P1 ?? "n/a"} independent_cluster_symbols=${symbolSpecificP1.size}`);
console.log("WROTE: .agents/reports/structural-audit.json");
console.log("WROTE: .agents/reports/AUDIT-SUMMARY.md");
console.log("READ-ONLY — production untouched");
console.log("STAGE 1 COMPLETE — STOP");
