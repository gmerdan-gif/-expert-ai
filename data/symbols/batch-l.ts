import { createSymbol } from "../dream-symbol-factory";
import { SHARED_SOURCES } from "../dream-symbol-sources";

const s = SHARED_SOURCES;

const symbols = [
  ["labirent","Labirent"],["lastik","Lastik"],["limon","Limon"],["limonata","Limonata"],
  ["leylek","Leylek"],["leopar","Leopar"],["lama","Lama"],["lokomotif","Lokomotif"],
  ["lunapark","Lunapark"],["lunapark_treni","Lunapark Treni"],["lale","Lale"],
  ["lavanta","Lavanta"],["lamba_abajur","Abajur"],["laptop","Laptop"],
  ["lens","Lens"],["laboratuvar","Laboratuvar"],["laboratuvar_onlugu","Laboratuvar Önlüğü"],
  ["levha","Levha"],["levye","Levye"],["lift","Lift"],
  ["lokum","Lokum"],["lor","Lor"],["lahmacun","Lahmacun"],
  ["lavaş","Lavaş"],["liman_feneri","Liman Feneri"],["loş_isik","Loş Işık"],
  ["lastik_patlamasi","Lastik Patlaması"],["lastik_degisimi","Lastik Değişimi"],
  ["leke","Leke"],["leke_cikarmak","Leke Çıkarmak"],["leğen","Leğen"],
  ["lavabo","Lavabo"],["lavabo_tikanmasi","Lavabo Tıkanması"],["lavabo_tasi","Lavabo Taşı"],
  ["lokanta","Lokanta"],["lise","Lise"],["lise_sinifi","Lise Sınıfı"],
  ["lise_ogretmeni","Lise Öğretmeni"],["lisans","Lisans"],["lisans_diplomasi","Lisans Diploması"],
  ["laboratuvar_deneyi","Laboratuvar Deneyi"],["laboratuvar_sisesi","Laboratuvar Şişesi"],
  ["liman_gemisi","Liman Gemisi"],["limana_varmak","Limana Varmak"],
  ["limandan_ayrilmak","Limandan Ayrılmak"],["lunapark_donme_dolap","Dönme Dolap"],
  ["lunapark_tren","Lunapark Treni"],["lunapark_korku_tuneli","Korku Tüneli"],
  ["lazer","Lazer"],["lazer_isigi","Lazer Işığı"],["lazer_tabancasi","Lazer Tabancası"],
  ["led_isik","LED Işık"],["logar","Logar"],["logar_kapagi","Logar Kapağı"],
  ["lodos","Lodos"],["lotus","Lotus Çiçeği"]
];

function rich(slug: string, title: string, relatedSlugs: string[] = []) {
  return createSymbol({
    slug,
    title,
    relatedSlugs,
    shortDescription: `Rüyada ${title.toLowerCase()} görmek; bağlama, duygulara ve kişinin kişisel deneyimlerine göre farklı anlam çağrışımları taşıyabilir.`,
    positiveAssociations: ["Farkındalık", "Keşif", "Değişim", "Yeni deneyim"],
    challengingAssociations: ["Belirsizlik", "Kaygı", "Gerilim", "Kontrol kaybı"],
    contextDependentAssociations: [
      `${title} rüyada nasıl görünüyordu?`,
      "Rüyadaki temel duygu neydi?",
      "Sembol rüyada ne yapıyordu?",
      "Bu sembolün sizin hayatınızdaki kişisel anlamı nedir?"
    ],
    commonVariations: [
      `${title} görmek`,
      `${title} kullanmak`,
      `${title} ile karşılaşmak`,
      `${title} kaybetmek`
    ],
    psychology: `${title} kişinin kişisel deneyimleri ve duygusal çağrışımlarıyla bağlantılı olabilir. Rüyanın bütünü dikkate alınmalıdır.`,
    jungian: `Jungcu açıdan ${title.toLowerCase()}, bilinçdışı bir içeriğin sembolik ifadesi olarak düşünülebilir. Kişisel çağrışımlar temel önem taşır.`,
    islamicTradition: `${title} farklı İslami rüya yorum geleneklerinde farklı biçimlerde ele alınabilir; bunlar kesin gelecek bilgisi değildir.`,
    christianTraditions: `${title} Hristiyan sembolizminde farklı metin ve geleneklerde değişen çağrışımlara sahip olabilir.`,
    jewishTraditions: `${title} Yahudi yorum geleneklerinde tarihsel ve kültürel bağlama göre farklı anlamlar taşıyabilir.`,
    buddhistEasternApproaches: `${title} Doğu yaklaşımlarında zihinsel süreçler ve deneyimin doğası üzerinden farklı biçimlerde ele alınabilir.`,
    spiritualApproaches: `${title} spiritüel yorumlarda kişisel dönüşüm veya farkındalık için sembolik bir metafor olarak görülebilir.`,
    comparisonTable: [
      { approach: "Modern psikoloji", interpretation: "Kişisel deneyim ve duygular", type: "Araştırma temelli / bireysel" },
      { approach: "Jungcu", interpretation: "Bilinçdışı ve sembolik süreçler", type: "Psikolojik teori" },
      { approach: "İslami gelenek", interpretation: "Geleneksel sembolik yorum", type: "Dini/kültürel gelenek" },
      { approach: "Spiritüel", interpretation: "Sezgisel sembolik çağrışımlar", type: "Sezgisel çerçeve" }
    ],
    commonGround: "Rüya sembolleri bağlamdan bağımsız tek bir anlama indirgenemez.",
    differences: "Farklı yaklaşımlar sembolleri farklı psikolojik, kültürel ve spiritüel çerçevelerden değerlendirir.",
    inusAssessment: `${title} rüyasını değerlendirirken rüyanın bağlamı, duygusal tonu ve kişinin sembolle kişisel ilişkisi birlikte ele alınmalıdır.`,
    faq: [
      { question: `Rüyada ${title.toLowerCase()} görmek ne anlama gelir?`, answer: "Tek bir evrensel anlamı yoktur; rüyanın bağlamı ve kişisel çağrışımlar önemlidir." },
      { question: `${title} rüyası geleceği haber verir mi?`, answer: "Rüyaların geleceği güvenilir biçimde öngördüğünü gösteren bilimsel kanıt bulunmamaktadır." },
      { question: `${title} rüyası olumlu mu olumsuz mu?`, answer: "Sembolün anlamı rüyanın tamamına ve duygusal tona göre değişebilir." }
    ],
    sources: [s.schredl2010, s.blagrove2019]
  });
}

export const batchL = symbols.map(([slug, title]) => rich(slug, title));
