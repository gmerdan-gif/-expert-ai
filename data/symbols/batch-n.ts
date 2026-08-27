import { createSymbol } from "../dream-symbol-factory";
import { SHARED_SOURCES } from "../dream-symbol-sources";

const s = SHARED_SOURCES;

const symbols: [string, string][] = [
  ["narin", "Narinlik"],
  ["nehir_koprusu", "Nehir Köprüsü"],
  ["nobet", "Nöbet"],
  ["not_defteri", "Not Defteri"],
  ["numara", "Numara"],
  ["oda_anahtari", "Oda Anahtarı"],
  ["odun", "Odun"],
  ["ofke", "Öfke"],
  ["ogul", "Oğul"],
  ["ok", "Ok"],
  ["okul_otobusu", "Okul Otobüsü"],
  ["olta", "Olta"],
  ["omuz", "Omuz"],
  ["onluk", "Onluk"],
  ["opera", "Opera"],
  ["organ", "Organ"],
  ["oyuncak", "Oyuncak"],
  ["oyuncak_araba", "Oyuncak Araba"],
  ["oyuncak_bebek", "Oyuncak Bebek"],
  ["ozur", "Özür"],
  ["palto", "Palto"],
  ["pano", "Pano"],
  ["pantolon", "Pantolon"],
  ["parmak", "Parmak"],
  ["parmak_izi", "Parmak İzi"],
  ["parmaklik", "Parmaklık"],
  ["park", "Park"],
  ["patlama", "Patlama"],
  ["patron", "Patron"],
  ["perde", "Perde"],
  ["pipo", "Pipo"],
  ["piramit", "Piramit"],
  ["pizza", "Pizza"],
  ["posta", "Posta"],
  ["posta_kutusu", "Posta Kutusu"],
  ["pranga", "Pranga"],
  ["puset", "Puset"],
  ["raf", "Raf"],
  ["robot", "Robot"],
  ["rozet", "Rozet"],
  ["ruj", "Ruj"],
];

export const batchN = symbols.map(([slug, title]) =>
  createSymbol({
    slug,
    title,
    shortDescription: `${title} rüyası, kişinin yaşamındaki deneyimler ve kişisel çağrışımlar üzerinden farklı şekillerde değerlendirilebilir.`,

    positiveAssociations: [
      "Farkındalık",
      "Yeni bir bakış açısı",
      "İçsel keşif",
    ],
    challengingAssociations: [
      "Belirsizlik",
      "Kontrol ihtiyacı",
      "Bastırılmış duygu",
    ],
    contextDependentAssociations: [
      `${title} ile karşılaşmak`,
      `${title} kullanmak`,
      `${title} aramak veya kaybetmek`,
    ],
    commonVariations: [
      `${title} görmek`,
      `${title} taşımak`,
      `${title} ile etkileşime girmek`,
    ],
    psychology:
      "Psikolojik açıdan sembolün anlamı kişinin güncel yaşamı, duyguları ve sembole yüklediği kişisel çağrışımlarla birlikte ele alınmalıdır.",
    jungian:
      "Jungcu açıdan sembol, bilinçdışı içeriğin bilinçle ilişki kurma biçimlerinden biri olarak düşünülebilir.",
    islamicTradition:
      "İslami rüya yorum geleneklerinde sembolün anlamı bağlama ve yorum geleneğine göre değişebilir; kesin gelecek bilgisi olarak değerlendirilmemelidir.",
    christianTraditions:
      "Hristiyan geleneklerinde sembolün anlamı metinsel, kültürel ve kişisel bağlama göre farklı biçimlerde yorumlanabilir.",
    jewishTraditions:
      "Yahudi yorum geleneklerinde sembolün anlamı tarihsel, kültürel ve yorumlayıcı bağlama göre değişebilir.",
    buddhistEasternApproaches:
      "Budist ve Doğu yaklaşımlarında sembol zihinsel süreçler, algı ve deneyimin doğası bağlamında farklı biçimlerde ele alınabilir.",
    spiritualApproaches:
      "Spiritüel yaklaşımlarda sembol kişisel dönüşüm veya farkındalık için sembolik bir metafor olarak görülebilir.",
    comparisonTable: [
      {
        approach: "Modern psikoloji",
        interpretation: "Kişisel deneyim, duygu ve çağrışımlar",
        type: "Araştırma temelli / bireysel",
      },
      {
        approach: "Jungcu",
        interpretation: "Bilinçdışı ve sembolik süreçler",
        type: "Psikolojik teori",
      },
      {
        approach: "Dini gelenekler",
        interpretation: "Tarihsel ve kültürel yorum çerçeveleri",
        type: "Dini/kültürel gelenek",
      },
      {
        approach: "Spiritüel",
        interpretation: "İçsel dönüşüm ve farkındalık",
        type: "Sezgisel çerçeve",
      },
    ],
    commonGround:
      "Sembolün anlamı bağlamdan bağımsız tek ve evrensel bir anlama indirgenemez.",
    differences:
      "Psikolojik, Jungcu, kültürel ve spiritüel yaklaşımlar aynı sembolü farklı çerçevelerden değerlendirebilir.",
    inusAssessment:
      `${title} rüyasını değerlendirirken sembolün rüyadaki rolü, kişinin duyguları ve gerçek yaşamındaki çağrışımları birlikte ele alınmalıdır.`,
    relatedSlugs: [],
    faq: [
      {
        question: `Rüyada ${title.toLowerCase()} görmek ne anlama gelir?`,
        answer:
          "Tek bir evrensel anlamı yoktur; rüyanın bağlamı ve kişisel çağrışımlar önemlidir.",
      },
      {
        question: `${title} rüyası geleceği haber verir mi?`,
        answer:
          "Rüyaların geleceği güvenilir biçimde öngördüğünü gösteren bilimsel kanıt bulunmamaktadır.",
      },
      {
        question: `${title} rüyası olumlu mu olumsuz mu?`,
        answer:
          "Tek başına sembolü olumlu veya olumsuz olarak sınıflandırmak doğru değildir.",
      },
    ],
    sources: [s.schredl2010, s.blagrove2019],
  })
);