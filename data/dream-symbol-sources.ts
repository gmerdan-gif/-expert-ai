import type { DreamSymbolSource } from "./dream-symbols";

export const SHARED_SOURCES = {
  schredl2010: {
    authors: "Schredl, M. (2010)",
    title: "Characteristics and contents of dreams",
    journal: "International Review of Neurobiology, 92, 135–154.",
    detail: "PMID 20870066 · DOI 10.1016/S0074-7742(10)92007-2",
    url: "https://pubmed.ncbi.nlm.nih.gov/20870066/",
  },
  blagrove2019: {
    authors: "Blagrove, M. et al. (2019)",
    title: "Reactions to Dream Content: Continuity and Non-continuity",
    journal: "Frontiers in Psychology, 10, 2676.",
    detail: "PMID 31849778 · DOI 10.3389/fpsyg.2019.02676",
    url: "https://pubmed.ncbi.nlm.nih.gov/31849778/",
  },
  jung1964: {
    authors: "Jung, C. G. (1964)",
    title: "Man and His Symbols",
    journal: "Aldus Books.",
    detail: "Jungian discussion of symbolic material in dreams",
    url: "https://archive.org/details/manhissymbols0000jung",
  },
  hall1966: {
    authors: "Hall, C. S. & Van de Castle, R. L. (1966)",
    title: "The Content Analysis of Dreams",
    journal: "Appleton-Century-Crofts.",
    detail: "Systematic approach to dream content analysis",
    url: "https://psycnet.apa.org/record/1967-35001-000",
  },
  domhoff2003: {
    authors: "Domhoff, G. W. (2003)",
    title:
      "The Scientific Study of Dreams: Neural Networks, Cognitive Development, and Content Analysis",
    journal: "American Psychological Association.",
    detail: "Research-based approach to dream content",
    url: "https://psycnet.apa.org/record/2003-88328-000",
  },
} satisfies Record<string, DreamSymbolSource>;

export const DEFAULT_SOURCES: DreamSymbolSource[] = [
  SHARED_SOURCES.schredl2010,
  SHARED_SOURCES.blagrove2019,
  SHARED_SOURCES.jung1964,
];
