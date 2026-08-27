import { createSymbol } from "../dream-symbol-factory";
import { SHARED_SOURCES } from "../dream-symbol-sources";

const s = SHARED_SOURCES;

const symbols = [
  ["macera","Macera"],["magaza","Mağaza"],["mağaza_kapisi","Mağaza Kapısı"],
  ["manken","Manken"],["manken_olmak","Manken Olmak"],["maske","Maske"],
  ["maskeli_balo","Maskeli Balo"],["matbaa","Matbaa"],["masa","Masa"],
  ["masa_sandalye","Masa ve Sandalye"],["matematik","Matematik"],["matematik_sinavi","Matematik Sınavı"],
  ["maymun","Maymun"],["marti","Martı"],["marti_sesi","Martı Sesi"],
  ["masal","Masal"],["masal_kitabi","Masal Kitabı"],["mektup_zarfi","Mektup Zarfı"],
  ["menekse","Menekşe"],["mercan","Mercan"],["mercimek","Mercimek"],
  ["meydan","Meydan"],["meydan_saat","Meydan Saati"],["metro","Metro"],
  ["metro_istasyonu","Metro İstasyonu"],["meteoroloji","Meteoroloji"],
  ["mikrofon","Mikrofon"],["mikroskop","Mikroskop"],["millet","Kalabalık"],
  ["minare","Minare"],["minibüs","Minibüs"],
  ["motor","Motor"],["motor_arizasi","Motor Arızası"],["motorbot","Motorbot"],
  ["mumluk","Mumluk"],["mühendis","Mühendis"],["mühür","Mühür"],
  ["müzik","Müzik"],["müzik_aleti","Müzik Aleti"],["müzisyen","Müzisyen"],
  ["manzara","Manzara"],["manzara_fotografi","Manzara Fotoğrafı"],["maraton","Maraton"],
  ["maraton_kosmak","Maraton Koşmak"],["mağara_duvari","Mağara Duvarı"],
  ["mağara_girişi","Mağara Girişi"],["mermer","Mermer"],["mermer_heykel","Mermer Heykel"],
  ["masa_saati","Masa Saati"],["masa_örtüsü","Masa Örtüsü"],
  ["makarna","Makarna"],["makine","Makine"],["makine_arizasi","Makine Arızası"]
];

function rich(slug: string, title: string, relatedSlugs: string[] = []) {
  return createSymbol({
    slug,
    title,
    relatedSlugs,
    shortDescription: `Rüyada ${title.toLowerCase()} görmek; kişinin deneyimleri, rüyanın bağlamı ve rüyadaki duygusal ton üzerinden farklı biçimlerde değerlendirilebilir.`,
    positiveAssociations: ["Farkındalık", "Yaratıcılık", "Keşif", "Değişim"],
    challengingAssociations: ["Belirsizlik", "Kaygı", "Çatışma", "Kontrol kaybı"],
    contextDependentAssociations: [
      `${title} rüyada nasıl görünüyordu?`,
      "Rüyada ne hissediyordunuz?",
      "Sembolün rüyadaki işlevi neydi?",
      "Bu sembolün sizin için kişisel bir anlamı var mı?"
    ],
    commonVariations: [
      `${title} görmek`,
      `${title} kullanmak`,
      `${title} ile karşılaşmak`,
      `${title} kaybetmek`
    ],
    psychology: `${title} sembolünün anlamı kişisel deneyimlere, duygulara ve güncel yaşam olaylarına bağlı olarak değişebilir.`,
    jungian: `Jungcu açıdan ${title.toLowerCase()}, bilinçdışı süreçlerin sembolik bir ifadesi olarak düşünülebilir. Kişisel çağrışım belirleyicidir.`,
    islamicTradition: `${title} İslami rüya yorum geleneklerinde farklı kaynaklarda farklı biçimlerde ele alınabilir ve kesin gelecek bilgisi olarak değerlendirilmemelidir.`,
    christianTraditions: `${title} Hristiyan sembolizminde kültürel ve metinsel bağlama göre değişen çağrışımlara sahip olabilir.`,
    jewishTraditions: `${title} Yahudi geleneklerinde tarihsel ve yorumlayıcı bağlama göre farklı anlamlar taşıyabilir.`,
    buddhistEasternApproaches: `${title} Doğu yaklaşımlarında algı, zihin ve deneyimin doğası bağlamında farklı biçimlerde yorumlanabilir.`,
    spiritualApproaches: `${title} spiritüel yaklaşımlarda içsel dönüşüm veya farkındalık için sembolik bir metafor olarak görülebilir.`,
    comparisonTable: [
      { approach: "Modern psikoloji", interpretation: "Kişisel deneyim ve duygusal çağrışımlar", type: "Araştırma temelli / bireysel" },
      { approach: "Jungcu", interpretation: "Bilinçdışı ve sembolik süreçler", type: "Psikolojik teori" },
      { approach: "İslami gelenek", interpretation: "Geleneksel sembolik yorumlar", type: "Dini/kültürel gelenek" },
      { approach: "Spiritüel", interpretation: "Sezgisel sembolik çağrışımlar", type: "Sezgisel çerçeve" }
    ],
    commonGround: "Rüya sembollerinin anlamı bağlamdan bağımsız tek bir anlama indirgenemez.",
    differences: "Psikolojik, Jungcu, dini ve spiritüel yaklaşımlar sembolleri farklı çerçevelerden değerlendirir.",
    inusAssessment: `${title} rüyasını değerlendirirken sembolün rüyadaki rolü, kişinin duyguları ve gerçek yaşamındaki çağrışımları birlikte ele alınmalıdır.`,
    faq: [
      { question: `Rüyada ${title.toLowerCase()} görmek ne anlama gelir?`, answer: "Tek bir evrensel anlamı yoktur; bağlam ve kişisel çağrışımlar önemlidir." },
      { question: `${title} rüyası geleceği haber verir mi?`, answer: "Rüyaların geleceği güvenilir biçimde öngördüğünü gösteren bilimsel kanıt bulunmamaktadır." },
      { question: `${title} rüyası olumlu mu olumsuz mu?`, answer: "Tek başına sembolü olumlu veya olumsuz olarak sınıflandırmak doğru değildir." }
    ],
    sources: [s.schredl2010, s.blagrove2019]
  });
}

export const batchM = symbols.map(([slug, title]) => rich(slug, title));
