import { createSymbol } from "../dream-symbol-factory";
import { SHARED_SOURCES } from "../dream-symbol-sources";

const s = SHARED_SOURCES;

const symbols = [
  ["kaktus","Kaktüs"],["kelepce","Kelepçe"],["kasa","Kasa"],["kaset","Kaset"],
  ["klavye","Klavye"],["komodin","Komodin"],["koltuk","Koltuk"],["kavanoz","Kavanoz"],
  ["kibrit","Kibrit"],["kestane","Kestane"],["kiraz","Kiraz"],["kivi","Kivi"],
  ["karpuz","Karpuz"],["kavun","Kavun"],["kahve","Kahve"],["kahve_fincani","Kahve Fincanı"],
  ["kek","Kek"],["kurabiye","Kurabiye"],
  ["kirmizi_gul","Kırmızı Gül"],["koza","Koza"],["koz","Koz"],
  ["kugu","Kuğu"],["kum_saati","Kum Saati"],["kupa","Kupa"],
  ["kumbara","Kumbara"],["kurbaga","Kurbağa"],["kertenkele","Kertenkele"],
  ["kirpi","Kirpi"],["karinca","Karınca"],["karabatak","Karabatak"],
  ["kartal","Kartal"],["kanarya","Kanarya"],["karga","Karga"],
  ["koyun","Koyun"],["keçi","Keçi"],["inek","İnek"],["horoz","Horoz"],
  ["tavuk","Tavuk"],["civciv","Civciv"],["kozalak","Kozalak"],
  ["kestane_agaci","Kestane Ağacı"],["kuru_yaprak","Kuru Yaprak"],
  ["kamyon","Kamyon"],["kamyonet","Kamyonet"],["karavan","Karavan"],
  ["kano","Kano"],["kaykay","Kaykay"],
  ["kros","Koşu"],["kamp","Kamp"],["kamp_cadiri","Kamp Çadırı"],
  ["kayip_esya","Kayıp Eşya"],["kapi_zili","Kapı Zili"],["kumbara_kirmak","Kumbara Kırmak"]
];

function rich(slug: string, title: string, relatedSlugs: string[] = []) {
  return createSymbol({
    slug,
    title,
    relatedSlugs,
    shortDescription: `Rüyada ${title.toLowerCase()} görmek; sembolün rüyadaki bağlamına, kişinin duygularına ve kişisel deneyimlerine göre farklı çağrışımlar taşıyabilir.`,
    positiveAssociations: ["Keşif", "Farkındalık", "Değişim", "Yeni deneyim"],
    challengingAssociations: ["Belirsizlik", "Kaygı", "Kontrol kaybı", "Çatışma"],
    contextDependentAssociations: [
      `${title} rüyada nasıl görünüyordu?`,
      "Rüyada ne hissediyordunuz?",
      "Sembol rüyada ne yapıyordu?",
      "Gerçek hayatınızda bu sembolle kişisel bir bağlantınız var mı?"
    ],
    commonVariations: [
      `${title} görmek`,
      `${title} ile karşılaşmak`,
      `${title} kullanmak`,
      `${title} kaybetmek`
    ],
    psychology: `${title} imgesi kişinin kişisel deneyimleri, duygusal çağrışımları ve yaşamındaki güncel konularla bağlantılı olabilir. Tek başına evrensel bir anlam taşıdığı varsayılmamalıdır.`,
    jungian: `Jungcu açıdan ${title.toLowerCase()}, bilinçdışı bir içeriğin sembolik ifadesi olarak ele alınabilir. Sembolün kişisel çağrışımı ve rüyadaki rolü belirleyicidir.`,
    islamicTradition: `${title} sembolü İslami rüya yorum geleneklerinde farklı kaynak ve dönemlerde farklı biçimlerde ele alınabilir. Bu yorumlar kesin gelecek bilgisi olarak değerlendirilmemelidir.`,
    christianTraditions: `Hristiyan sembolizminde ${title.toLowerCase()} farklı metin ve geleneklerde değişen anlamlara sahip olabilir.`,
    jewishTraditions: `Yahudi geleneklerinde ${title.toLowerCase()} sembolizmi tarihsel ve yorumlayıcı bağlama göre değişebilir.`,
    buddhistEasternApproaches: `Budist ve Doğu yaklaşımlarında ${title.toLowerCase()} zihinsel süreçler ve deneyimin doğası üzerinden farklı şekillerde ele alınabilir.`,
    spiritualApproaches: `Spiritüel yaklaşımlarda ${title.toLowerCase()} kişisel dönüşüm, farkındalık veya içsel süreçler için sembolik bir metafor olarak görülebilir.`,
    comparisonTable: [
      { approach: "Modern psikoloji", interpretation: "Kişisel deneyim ve duygusal çağrışımlar", type: "Araştırma temelli / bireysel" },
      { approach: "Jungcu", interpretation: "Bilinçdışı ve sembolik süreçler", type: "Psikolojik teori" },
      { approach: "İslami gelenek", interpretation: "Geleneksel sembolik yorumlar", type: "Dini/kültürel gelenek" },
      { approach: "Spiritüel", interpretation: "Sezgisel ve sembolik çağrışımlar", type: "Sezgisel çerçeve" }
    ],
    commonGround: "Rüya sembolünün anlamı bağlamdan ve kişisel deneyimden bağımsız tek bir anlama indirgenemez.",
    differences: "Psikolojik, Jungcu, dini ve spiritüel yaklaşımlar sembolleri farklı kuramsal ve kültürel çerçevelerden ele alır.",
    inusAssessment: `Bu rüyayı değerlendirirken ${title.toLowerCase()} sembolünün rüyadaki rolü, kişinin duyguları ve gerçek yaşamındaki kişisel çağrışımları birlikte ele alınmalıdır.`,
    faq: [
      {
        question: `Rüyada ${title.toLowerCase()} görmek ne anlama gelir?`,
        answer: `Tek bir evrensel anlamı yoktur. ${title} sembolünün anlamı rüyanın bağlamına ve kişisel çağrışımlara göre değişebilir.`
      },
      {
        question: `${title} rüyası geleceği haber verir mi?`,
        answer: "Rüyaların geleceği güvenilir biçimde öngördüğünü gösteren bilimsel kanıt bulunmamaktadır."
      },
      {
        question: `${title} rüyası olumlu mu olumsuz mu?`,
        answer: `Tek başına ${title.toLowerCase()} sembolünün olumlu veya olumsuz olduğunu söylemek doğru değildir.`
      }
    ],
    sources: [s.schredl2010, s.blagrove2019]
  });
}

export const batchK = symbols.map(([slug, title]) => rich(slug, title));
