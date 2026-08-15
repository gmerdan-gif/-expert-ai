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
import { buildRelatedSymbolMap } from "./dream-symbol-relations";

export const dreamSymbols: DreamSymbol[] = dreamSymbolEntries;

/*
 * Automatically calculated semantic relationships.
 *
 * Manually defined relatedSlugs always take priority.
 * For symbols without manually defined relationships, or when
 * fewer than four manual relationships exist, the similarity
 * map supplies the remaining related symbols.
 */
const automaticRelatedSymbolMap = buildRelatedSymbolMap(dreamSymbols, 4);

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
  const manualRelated = symbol.relatedSlugs
    .map((relatedSlug) => getDreamSymbolBySlug(relatedSlug))
    .filter((item): item is DreamSymbol => item !== undefined);

  const automaticRelated = (automaticRelatedSymbolMap.get(symbol.slug) ?? [])
    .map((relatedSlug) => getDreamSymbolBySlug(relatedSlug))
    .filter((item): item is DreamSymbol => item !== undefined);

  const combined = [
    ...manualRelated,
    ...automaticRelated.filter(
      (item) =>
        item.slug !== symbol.slug &&
        !manualRelated.some((manual) => manual.slug === item.slug),
    ),
  ];

  return combined.slice(0, limit);
}
