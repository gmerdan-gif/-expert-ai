import { createSymbol } from "../dream-symbol-factory";
import { SHARED_SOURCES } from "../dream-symbol-sources";

const s = SHARED_SOURCES;

type CustomSymbol = {
  slug: string;
  title: string;
  shortDescription: string;
  positive: string[];
  challenging: string[];
  context: string[];
  variations: string[];
  psychology: string;
  jungian: string;
  islamic: string;
  christian: string;
  jewish: string;
  eastern: string;
  spiritual: string;
  assessment: string;
};

const symbols: CustomSymbol[] = [



];

function rich(symbol: CustomSymbol) {
  return createSymbol({
    slug: symbol.slug,
    title: symbol.title,
    relatedSlugs: [],
    shortDescription: symbol.shortDescription,
    positiveAssociations: symbol.positive,
    challengingAssociations: symbol.challenging,
    contextDependentAssociations: symbol.context,
    commonVariations: symbol.variations,
    psychology: symbol.psychology,
    jungian: symbol.jungian,
    islamicTradition: symbol.islamic,
    christianTraditions: symbol.christian,
    jewishTraditions: symbol.jewish,
    buddhistEasternApproaches: symbol.eastern,
    spiritualApproaches: symbol.spiritual,
    comparisonTable: [
      {
        approach: "Modern psikoloji",
        interpretation: "Kişisel deneyim, duygu ve yaşam bağlamı",
        type: "Araştırma temelli / bireysel",
      },
      {
        approach: "Jungcu",
        interpretation: "Bilinçdışı süreçler ve sembolik anlam",
        type: "Psikolojik teori",
      },
      {
        approach: "İslami gelenek",
        interpretation: "Geleneksel sembolik yorumlar",
        type: "Dini/kültürel gelenek",
      },
      {
        approach: "Spiritüel",
        interpretation: "Sezgisel ve sembolik çağrışımlar",
        type: "Sezgisel çerçeve",
      },
    ],
    commonGround:
      "Sembolün anlamı rüyadaki bağlamdan ve kişinin kişisel deneyiminden bağımsız tek bir anlama indirgenemez.",
    differences:
      "Psikolojik yaklaşımlar kişisel deneyim ve duygulara, Jungcu yaklaşım bilinçdışı süreçlere, dini gelenekler kendi metinsel çerçevelerine, spiritüel yaklaşımlar ise sezgisel anlamlara ağırlık verir.",
    inusAssessment: symbol.assessment,
    faq: [
      {
        question: `Rüyada ${symbol.title.toLowerCase()} görmek ne anlama gelir?`,
        answer:
          `Tek bir evrensel anlamı yoktur. ${symbol.title} rüyasının anlamı, rüyadaki olaylara, duygulara ve kişinin kişisel çağrışımlarına göre değişebilir.`,
      },
      {
        question: `${symbol.title} rüyası geleceği haber verir mi?`,
        answer:
          "Rüyaların geleceği güvenilir biçimde öngördüğünü gösteren bilimsel kanıt bulunmamaktadır.",
      },
      {
        question: `${symbol.title} rüyası olumlu mu olumsuz mu?`,
        answer:
          `Tek başına ${symbol.title.toLowerCase()} sembolünün olumlu veya olumsuz olduğunu söylemek doğru değildir.`,
      },
    ],
    sources: [s.schredl2010, s.blagrove2019],
  });
}

export const batchS = symbols.map(rich);
