import { dreamSymbols } from "./data/dream-symbols";
import {
  buildProfile,
  calculateSimilarity,
} from "./data/dream-symbol-relations";

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

const profiles = new Map<
  string,
  ReturnType<typeof buildProfile>
>();

for (const symbol of dreamSymbols) {
  profiles.set(
    symbol.slug,
    buildProfile(symbol),
  );
}

/*
 * Build document frequency from the SAME fields
 * used by WeightedProfile.
 */
const documentFrequency = (() => {
  const frequency = new Map<string, number>();

  const fields = [
    "title",
    "variations",
    "positive",
    "challenging",
    "context",
    "jungian",
    "psychology",
  ] as const;

  for (const profile of profiles.values()) {
    const seen = new Set<string>();

    for (const field of fields) {
      for (const token of profile[field]) {
        seen.add(token);
      }
    }

    for (const token of seen) {
      frequency.set(
        token,
        (frequency.get(token) ?? 0) + 1,
      );
    }
  }

  return frequency;
})();

const totalDocuments = profiles.size;

for (const slug of TEST) {
  const symbol = dreamSymbols.find(
    (s) => s.slug === slug,
  );

  if (!symbol) continue;

  const profile = profiles.get(slug)!;

  console.log(
    `\n========== ${symbol.title} ==========`,
  );
  const manualRelations = symbol.relatedSlugs ?? [];

  if (manualRelations.length > 0) {
    console.log(
      `MANUAL → ${manualRelations.join(", ")}`,
    );
  }
  
  const results = dreamSymbols
  .filter(
    (candidate) =>
      candidate.slug !== slug,
  )
    .map((candidate) => {
      const similarity = calculateSimilarity(
        profile,
        profiles.get(candidate.slug)!,
        totalDocuments,
        documentFrequency,
      );

      return {
        title: candidate.title,
        slug: candidate.slug,
        score: similarity.score,
        matches: similarity.matches,
      };
    })
    .filter(
      (candidate) =>
        candidate.score > 0 &&
        candidate.matches.length > 0,
    )
    .sort(
      (a, b) => b.score - a.score,
    );

  for (const result of results.slice(0, 15)) {
    console.log(
      `${result.title.padEnd(22)} ` +
      `score=${result.score.toFixed(2).padStart(7)} ` +
      `matches=[${result.matches.join(", ")}]`,
    );
  }
}
