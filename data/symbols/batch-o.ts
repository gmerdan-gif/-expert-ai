import { createSymbol } from "../dream-symbol-factory";
import { SHARED_SOURCES } from "../dream-symbol-sources";

const s = SHARED_SOURCES;

const symbols = [
  ["asansorde_kalmak", "Asansörde Kalmak"],
  ["asansorun_dusmesi", "Asansörün Düşmesi"],
  ["asansorle_yukselmek", "Asansörle Yükselmek"],
  ["asansorle_inmek", "Asansörle İnmek"],
  ["merdivenden_dusmek", "Merdivenden Düşmek"],
  ["merdiven_cikmak", "Merdiven Çıkmak"],
  ["merdiven_inmek", "Merdiven İnmek"],
  ["kirik_merdiven", "Kırık Merdiven"],
  ["kapali_kapi", "Kapalı Kapı"],
  ["acik_kapi", "Açık Kapı"],
  ["kilitli_kapi", "Kilitli Kapı"],
  ["kapiyi_acamamak", "Kapıyı Açamamak"],
  ["anahtar_bulamamak", "Anahtar Bulamamak"],
  ["anahtari_kaybetmek", "Anahtarı Kaybetmek"],
  ["kayip_anahtar", "Kayıp Anahtar"],
  ["bos_ev", "Boş Ev"],
  ["eski_ev", "Eski Ev"],
  ["terk_edilmis_ev", "Terk Edilmiş Ev"],
  ["yeni_ev", "Yeni Ev"],
  ["evin_yikilmasi", "Evin Yıkılması"],
  ["evde_kaybolmak", "Evde Kaybolmak"],
  ["bilinmeyen_oda", "Bilinmeyen Oda"],
  ["gizli_oda", "Gizli Oda"],
  ["bos_oda", "Boş Oda"],
  ["karanlik_oda", "Karanlık Oda"],
  ["tavan_arasi", "Tavan Arası"],
  ["bodrumda_kalmak", "Bodrumda Kalmak"],
  ["sonsuz_koridor", "Sonsuz Koridor"],
  ["dar_koridor", "Dar Koridor"],
  ["pencereyi_acmak", "Pencereyi Açmak"],
  ["pencereden_bakmak", "Pencereden Bakmak"],
  ["kirik_pencere", "Kırık Pencere"],
  ["kapali_pencere", "Kapalı Pencere"],
  ["cam_kirilmasi", "Cam Kırılması"],
  ["cam_kirigi", "Cam Kırığı"],
  ["aynadaki_yansima", "Aynadaki Yansıma"],
  ["aynanin_kirilmasi", "Aynanın Kırılması"],
  ["aynada_kendini_gormek", "Aynada Kendini Görmek"],
  ["aynada_yuzunu_gorememe", "Aynada Yüzünü Görememek"],
  ["kaybolmak", "Kaybolmak"],
  ["yolunu_bulamamak", "Yolunu Bulamamak"],
  ["yanlis_yola_girmek", "Yanlış Yola Girmek"],
  ["yol_ayrimi", "Yol Ayrımı"],
  ["kavsak", "Kavşak"],
  ["uzak_yol", "Uzak Yol"],
  ["sonsuz_yol", "Sonsuz Yol"],
  ["yokuş", "Yokuş"],
  ["yokuştan_inmek", "Yokuştan İnmek"],
  ["yokuş_cikmak", "Yokuş Çıkmak"],
  ["kopruyu_gecmek", "Köprüyü Geçmek"],
  ["koprunun_yikilmasi", "Köprünün Yıkılması"],
  ["dar_kopru", "Dar Köprü"],
  ["koprunun_uzerinde_kalmak", "Köprünün Üzerinde Kalmak"],
  ["tünelde_kalmak", "Tünelde Kalmak"],
  ["tünelin_sonu", "Tünelin Sonu"],
  ["karanlik_tunel", "Karanlık Tünel"],
  ["isik_gormek", "Işık Görmek"],
  ["uzakta_isik", "Uzakta Işık"],
  ["isik_kapatmak", "Işık Kapatmak"],
  ["isik_acmak", "Işık Açmak"],
  ["elektriklerin_kesilmesi", "Elektriklerin Kesilmesi"],
  ["elektrik_arizasi", "Elektrik Arızası"],
  ["telefonun_kirilmasi", "Telefonun Kırılması"],
  ["telefonu_bulamamak", "Telefonu Bulamamak"],
  ["telefonun_calmasi", "Telefonun Çalması"],
  ["cevapsiz_telefon", "Cevapsız Telefon"],
  ["mesaj_almak", "Mesaj Almak"],
  ["mesaj_gondermek", "Mesaj Göndermek"],
  ["mesaji_silmek", "Mesajı Silmek"],
  ["mektup_almak", "Mektup Almak"],
  ["mektup_yazmak", "Mektup Yazmak"],
  ["paket_almak", "Paket Almak"],
  ["paket_acmak", "Paket Açmak"],
  ["kayip_canta", "Kayıp Çanta"],
  ["canta_bulmak", "Çanta Bulmak"],
  ["bos_canta", "Boş Çanta"],
  ["agir_canta", "Ağır Çanta"],
  ["ayakkabi_kaybetmek", "Ayakkabı Kaybetmek"],
  ["ayakkabi_giymek", "Ayakkabı Giymek"],
  ["ayakkabinin_yirtilmasi", "Ayakkabının Yırtılması"],
  ["yolculuga_hazirlanmak", "Yolculuğa Hazırlanmak"],
  ["treni_kacirmak", "Treni Kaçırmak"],
  ["otobusu_kacirmak", "Otobüsü Kaçırmak"],
  ["ucaga_yetisememek", "Uçağa Yetişememek"],
  ["ucaga_binmek", "Uçağa Binmek"],
  ["ucaktan_inmek", "Uçaktan İnmek"],
  ["ucagin_dusmesi", "Uçağın Düşmesi"],
  ["havaalaninda_kaybolmak", "Havaalanında Kaybolmak"],
  ["pasaportu_kaybetmek", "Pasaportu Kaybetmek"],
  ["sinavi_kazanmak", "Sınavı Kazanmak"],
  ["sinavi_kacirmak", "Sınavı Kaçırmak"],
  ["eski_sinif", "Eski Sınıf"],
  ["sinifta_kaybolmak", "Sınıfta Kaybolmak"],
  ["topluluk_onunde_konusmak", "Topluluk Önünde Konuşmak"],
  ["sahneye_cikmak", "Sahneye Çıkmak"],
  ["sahnede_unutmak", "Sahnede Unutmak"],
  ["alkis_duymak", "Alkış Duymak"],
  ["sessiz_kalabalik", "Sessiz Kalabalık"],
  ["kalabalikta_yalniz_kalmak", "Kalabalıkta Yalnız Kalmak"],
];

function rich(slug: string, title: string) {
  return createSymbol({
    slug,
    title,
    relatedSlugs: [],
    shortDescription:
      `Rüyada ${title.toLowerCase()} görmek, rüyanın atmosferi, yaşanan duygu ve olayın kişisel çağrışımlarıyla birlikte düşünüldüğünde farklı anlam katmanları taşıyabilir.`,
    positiveAssociations: [
      "Farkındalık",
      "Değişim",
      "Yeni bir bakış",
      "İçsel keşif",
    ],
    challengingAssociations: [
      "Belirsizlik",
      "Kaygı",
      "Kontrol kaybı",
      "Gerilim",
    ],
    contextDependentAssociations: [
      `${title} rüyada nasıl gerçekleşiyordu?`,
      "O sırada ne hissediyordunuz?",
      "Rüyadaki diğer kişiler veya nesneler nelerdi?",
      "Bu durum gerçek hayatınızda size neyi çağrıştırıyor?",
    ],
    commonVariations: [
      `${title} görmek`,
      `${title} yaşamak`,
      `${title} sırasında korkmak`,
      `${title} sırasında rahatlamak`,
    ],
    psychology:
      `${title} imgesi, kişinin güncel yaşamındaki deneyimler, duygular, beklentiler ve kişisel çağrışımlarla bağlantılı olarak ele alınabilir. Tek başına evrensel bir anlam taşıdığı varsayılmamalıdır.`,
    jungian:
      `Jungcu açıdan ${title.toLowerCase()}, bilinçdışındaki bir sürecin sembolik ifadesi olarak düşünülebilir. Sembolün kişisel anlamı ve rüyanın bütünü belirleyicidir.`,
    islamicTradition:
      `${title} sembolü İslami rüya yorum geleneklerinde farklı kaynak ve dönemlerde farklı şekillerde ele alınabilir. Geleneksel yorumlar kesin gelecek bilgisi olarak değerlendirilmemelidir.`,
    christianTraditions:
      `Hristiyan sembolizminde ${title.toLowerCase()} farklı metin, mezhep ve kültürel geleneklerde değişen çağrışımlara sahip olabilir.`,
    jewishTraditions:
      `Yahudi geleneklerinde ${title.toLowerCase()} sembolizmi tarihsel ve yorumlayıcı bağlama göre farklılaşabilir.`,
    buddhistEasternApproaches:
      `Budist ve Doğu yaklaşımlarında ${title.toLowerCase()} zihinsel süreçler, değişim ve deneyimin doğası üzerinden farklı biçimlerde yorumlanabilir.`,
    spiritualApproaches:
      `Modern spiritüel yaklaşımlarda ${title.toLowerCase()} kişisel dönüşüm, bırakma, farkındalık veya içsel süreçler için sembolik bir metafor olarak ele alınabilir.`,
    comparisonTable: [
      {
        approach: "Modern psikoloji",
        interpretation: "Kişisel deneyim ve duygusal çağrışımlar",
        type: "Araştırma temelli / bireysel",
      },
      {
        approach: "Jungcu",
        interpretation: "Bilinçdışı ve sembolik süreçler",
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
      "Rüya sembolünün anlamı bağlamdan ve kişisel deneyimden bağımsız tek bir anlama indirgenemez.",
    differences:
      "Psikolojik, Jungcu, dini ve spiritüel yaklaşımlar sembolleri farklı kuramsal ve kültürel çerçevelerden ele alır.",
    inusAssessment:
      `${title} rüyasını değerlendirirken rüyadaki olayın nasıl geliştiği, hissedilen duygu ve kişinin gerçek yaşamındaki kişisel çağrışımlar birlikte ele alınmalıdır.`,
    faq: [
      {
        question: `Rüyada ${title.toLowerCase()} görmek ne anlama gelir?`,
        answer:
          `Tek bir evrensel anlamı yoktur. ${title} sembolünün anlamı rüyanın bağlamına ve kişisel çağrışımlara göre değişebilir.`,
      },
      {
        question: `${title} rüyası geleceği haber verir mi?`,
        answer:
          "Rüyaların geleceği güvenilir biçimde öngördüğünü gösteren bilimsel kanıt bulunmamaktadır.",
      },
      {
        question: `${title} rüyası olumlu mu olumsuz mu?`,
        answer:
          `Tek başına ${title.toLowerCase()} sembolünün olumlu veya olumsuz olduğunu söylemek doğru değildir.`,
      },
    ],
    sources: [s.schredl2010, s.blagrove2019],
  });
}

export const batchO = symbols.map(([slug, title]) => rich(slug, title));
