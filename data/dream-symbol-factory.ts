import type {
  ComparisonRow,
  DreamSymbol,
  DreamSymbolFaq,
  DreamSymbolSource,
} from "./dream-symbols";
import { DEFAULT_SOURCES } from "./dream-symbol-sources";

export type SymbolInput = {
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
  relatedSlugs: string[];
  sources?: DreamSymbolSource[];
};

export function createSymbol(input: SymbolInput): DreamSymbol {
  return {
    ...input,
    sources: input.sources ?? DEFAULT_SOURCES,
  };
}
