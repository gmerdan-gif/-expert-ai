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


  {
    slug: "evlenmek",
    title: "Evlenmek",
    shortDescription:
      "Rüyada evlenmek, yalnızca romantik ilişkilere değil, kişinin hayatında iki farklı yönü birleştirme, yeni bir sorumluluk alma veya önemli bir karar verme sürecine de işaret eden sembolik bir deneyim olabilir.",
    positive: [
      "Birleşme",
      "Bağ kurma",
      "Yeni dönem",
      "Bütünleşme",
    ],
    challenging: [
      "Bağlanma korkusu",
      "Sorumluluk",
      "Özgürlüğü kaybetme endişesi",
      "Kararsızlık",
    ],
    context: [
      "Kiminle evleniyordunuz?",
      "Evlilik sırasında mutlu muydunuz?",
      "Evlilik sizin seçiminiz miydi?",
      "Rüyadaki kişi tanıdığınız biri miydi?",
    ],
    variations: [
      "Tanımadığı biriyle evlenmek",
      "Sevdiği kişiyle evlenmek",
      "İstemeden evlenmek",
      "Düğün görmek",
    ],
    psychology:
      "Evlilik rüyaları bağlanma, karar verme, sorumluluk, ilişki beklentileri veya kişinin hayatındaki önemli bir birleşme süreciyle bağlantılı olabilir.",
    jungian:
      "Jungcu açıdan evlilik motifi, psikolojik karşıtlıkların veya farklı benlik yönlerinin birleşmesini çağrıştırabilir. Rüyadaki eş figürü bazen kişinin kendi iç dünyasındaki bir yönü temsil edebilir.",
    islamic:
      "İslami rüya yorum geleneklerinde evlilik farklı bağlamlarda sorumluluk, anlaşma, değişim veya yeni bir dönemle ilişkilendirilebilir.",
    christian:
      "Hristiyan sembolizminde evlilik birlik, bağlılık, antlaşma ve bütünlük gibi temalarla güçlü biçimde ilişkilidir.",
    jewish:
      "Yahudi geleneklerinde evlilik bağlılık, sorumluluk, birlik ve toplumsal yaşamla ilişkili önemli bir sembolik alandır.",
    eastern:
      "Doğu yaklaşımlarında birlik ve bağlanma, karşıtlıkların dengelenmesi ve kişinin ilişkilerindeki tutunma biçimleri üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yorumlarda evlilik bazen kişinin kendi içindeki farklı yönleri bir araya getirmesinin sembolü olarak ele alınır.",
    assessment:
      "Rüyada evlendiğiniz kişi kadar, evlilik fikrinin sizde yarattığı duygu önemli olabilir. Yakınlaşma mı hissediyordunuz, yoksa bir yere sıkışmış gibi mi?",
  },

  {
    slug: "bosanmak",
    title: "Boşanmak",
    shortDescription:
      "Rüyada boşanmak, gerçek bir ayrılığın habercisi olmak zorunda değildir; bir ilişkiden, alışkanlıktan, kimlikten veya yaşam biçiminden uzaklaşma ihtiyacını sembolik olarak ifade edebilir.",
    positive: [
      "Özgürleşme",
      "Sınır koyma",
      "Eskiyi bırakma",
      "Bağımsızlık",
    ],
    challenging: [
      "Ayrılık korkusu",
      "Kayıp",
      "Belirsizlik",
      "Bağların kopması",
    ],
    context: [
      "Boşanmayı siz mi istiyordunuz?",
      "Rüyada rahatladınız mı yoksa üzüldünüz mü?",
      "Boşandığınız kişi gerçek hayatta hayatınızda mı?",
      "Boşanma sonrası ne yapmaya çalışıyordunuz?",
    ],
    variations: [
      "Eşinden boşanmak",
      "Boşandığını öğrenmek",
      "Boşanma kararı almak",
      "Boşandıktan sonra rahatlamak",
    ],
    psychology:
      "Boşanma rüyaları ayrılık korkusu kadar, kişinin hayatında artık kendisine uymayan bir bağdan veya alışkanlıktan uzaklaşma ihtiyacını da yansıtabilir.",
    jungian:
      "Jungcu açıdan ayrılık, egonun eski bir psikolojik düzenle bağını çözmesi veya farklı bir gelişim yönüne yönelmesi olarak düşünülebilir.",
    islamic:
      "İslami yorum geleneklerinde boşanma farklı kaynaklarda ayrılık, değişim veya bir durumdan çıkış gibi çeşitli anlamlarla ele alınabilir.",
    christian:
      "Hristiyan geleneklerinde evlilik ve ayrılık bağlılık, kayıp, sorumluluk ve yenilenme gibi farklı temalarla ilişkilendirilebilir.",
    jewish:
      "Yahudi geleneklerinde ayrılık ve boşanma hukuki, ailevi ve etik bağlamlarda ele alınan karmaşık konulardır; rüya yorumu ayrıca kişisel bağlama bağlıdır.",
    eastern:
      "Doğu yaklaşımlarında ayrılık, tutunma ve bırakma arasındaki ilişki üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yorumlarda boşanmak, artık kişinin gelişimine hizmet etmeyen bir bağın sembolik olarak çözülmesi şeklinde görülebilir.",
    assessment:
      "Rüyanın merkezinde gerçekten evlilik olmayabilir. Belki de içinizde bir şey 'artık böyle devam etmek istemiyorum' diyordur. Rüyadaki rahatlama ya da acı, hangi kapının aralandığını gösterebilir.",
  },

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

export const batchR = symbols.map(rich);
