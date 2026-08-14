import { createSymbol } from "../dream-symbol-factory";
import { SHARED_SOURCES } from "../dream-symbol-sources";

const s = SHARED_SOURCES;

type RichInput = {
  slug: string;
  title: string;
  theme: string;
  positive: string[];
  challenging: string[];
  context: string[];
  variations: string[];
  psychology: string;
  jungian: string;
  cultural: string;
  spiritual: string;
  relatedSlugs?: string[];
};

function richSymbol(input: RichInput) {
  const { slug, title, theme, positive, challenging, context, variations,
    psychology, jungian, cultural, spiritual, relatedSlugs = [] } = input;

  return createSymbol({
    slug,
    title,
    shortDescription:
      `Rüyada ${title.toLowerCase()} görmek; ${theme} gibi farklı çağrışımlarla ilişkili olabilir. Rüyanın anlamı, sembolün kendisinden çok rüyanın bağlamı, kişinin duyguları ve kişisel deneyimleri üzerinden değerlendirilmelidir.`,

    positiveAssociations: positive,

    challengingAssociations: challenging,

    contextDependentAssociations: context,

    commonVariations: variations,

    psychology,

    jungian,

    islamicTradition:
      `${title} sembolü, İslami rüya yorum geleneklerinde farklı dönem ve kaynaklarda çeşitli biçimlerde ele alınabilir. Geleneksel yorumlar kültürel ve dini bir çerçeve sunar; kesin gelecek bilgisi veya kişisel bir hüküm olarak değerlendirilmemelidir.`,

    christianTraditions:
      `Hristiyan sembolizminde ${title.toLowerCase()} farklı metin, mezhep ve kültürel geleneklerde değişen çağrışımlara sahip olabilir. Bu yorumlar tek ve evrensel bir rüya sözlüğü anlamı oluşturmaz.`,

    jewishTraditions:
      `Yahudi geleneklerinde ${title.toLowerCase()} sembolizmi metinsel, kültürel ve yorumlayıcı bağlama göre farklılaşabilir. Rüyanın kişisel anlamı sembolün geleneksel anlamından bağımsız olarak değişebilir.`,

    buddhistEasternApproaches:
      `Budist ve diğer Doğu yaklaşımlarında ${title.toLowerCase()} zihinsel süreçler, algı, değişim veya deneyimin doğası üzerinden farklı biçimlerde yorumlanabilir. Bu yaklaşımlar modern psikolojik açıklamalarla aynı şey değildir.`,

    spiritualApproaches: spiritual,

    comparisonTable: [
      {
        approach: "Modern psikoloji",
        interpretation: `${title} ile ilişkili kişisel deneyim, duygu ve çağrışımlar`,
        type: "Araştırma temelli / bireysel",
      },
      {
        approach: "Jungcu",
        interpretation: `Sembolün bilinçdışı süreçler ve kişisel bütünlük içindeki yeri`,
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
      "Farklı yaklaşımlar, rüya sembollerinin bağlamdan bağımsız tek bir anlama indirgenmesinin sınırlı olduğunu kabul edebilir.",

    differences:
      "Psikolojik yaklaşımlar kişisel deneyim ve duygusal bağlamı öne çıkarırken, dini ve spiritüel gelenekler kendi sembolik ve kültürel çerçevelerini kullanır.",

    inusAssessment:
      `${title} rüyasını değerlendirirken hazır bir sözlük anlamı vermek yerine sembolün rüyadaki rolü, kişinin hissettiği duygu, olayların gelişimi ve gerçek yaşamındaki kişisel çağrışımları birlikte ele alınmalıdır.`,

    faq: [
      {
        question: `Rüyada ${title.toLowerCase()} görmek ne anlama gelir?`,
        answer:
          `Tek bir evrensel anlamı yoktur. ${title} sembolünün rüyadaki anlamı, olayların bağlamına, kişinin duygularına ve sembolle olan kişisel ilişkisine göre değişebilir.`,
      },
      {
        question: `${title} rüyası geleceği haber verir mi?`,
        answer:
          "Rüyaların geleceği güvenilir biçimde öngördüğünü gösteren bilimsel kanıt bulunmamaktadır. Rüyalar daha çok kişinin deneyimleri, duyguları ve zihinsel süreçleri bağlamında ele alınabilir.",
      },
      {
        question: `${title} rüyası olumlu mu olumsuz mu?`,
        answer:
          `Tek başına ${title.toLowerCase()} sembolünün olumlu veya olumsuz olduğunu söylemek doğru değildir. Rüyanın tamamı ve rüyadaki duygusal ton daha belirleyicidir.`,
      },
    ],

    sources: [s.schredl2010, s.blagrove2019],
    relatedSlugs,
  });
}

export const batchI = [

  richSymbol({
    slug: "ucurtma",
    title: "Uçurtma",
    theme: "özgürlük, yükselme, oyun, kontrol ve hayal gücü",
    positive: ["Özgürlük", "Yaratıcılık", "Hafiflik", "Keşif"],
    challenging: ["Kontrolü kaybetme", "Gerçeklikten uzaklaşma", "Belirsizlik", "Bağımlılık"],
    context: ["Uçurtmayı kim uçuruyordu?", "Uçurtma yükseliyor muydu?", "İp kopuyor muydu?", "Rüyada özgürlük mü yoksa kaygı mı hissedildi?"],
    variations: ["Uçurtma uçurmak", "Uçurtmanın düşmesi", "Uçurtma ipinin kopması", "Gökyüzünde çok sayıda uçurtma görmek"],
    psychology: "Uçurtma, kişinin özgürlük ve kontrol arasındaki deneyimini temsil eden kişisel bir imge haline gelebilir. Özellikle yükselme veya uzaklaşma duyguları rüyanın duygusal tonuyla birlikte önem kazanır.",
    jungian: "Jungcu açıdan uçurtmanın yükselmesi, bilincin sınırlarını aşma arzusuyla sembolik olarak ilişkilendirilebilir. Ancak ipin elde tutulması, özgürlük ile bağlılık arasındaki gerilimi de gösterebilir.",
    cultural: "Uçurtma farklı kültürlerde çocukluk, kutlama, özgürlük ve gökyüzüyle ilişkilendirilir.",
    spiritual: "Spiritüel yorumlarda uçurtma özgürleşme veya daha geniş bir perspektife yükselme metaforu olarak görülebilir."
  }),

  richSymbol({
    slug: "balon",
    title: "Balon",
    theme: "hafiflik, beklenti, yükselme, kutlama ve kırılganlık",
    positive: ["Neşe", "Umut", "Kutlama", "Hayal kurma"],
    challenging: ["Kırılganlık", "Hayal kırıklığı", "Kontrol kaybı", "Gerçeklikten kopma"],
    context: ["Balonun rengi neydi?", "Balon yükseliyor muydu?", "Patladı mı?", "Rüyada sevinç veya korku var mıydı?"],
    variations: ["Balon uçurmak", "Balonun patlaması", "Balonlarla dolu bir yer", "Gökyüzüne balon bırakmak"],
    psychology: "Balon, beklentilerin veya duygusal enerjinin geçici biçimde yükselmesini çağrıştırabilir. Patlayan balon ise ani hayal kırıklığı veya beklentinin sona ermesiyle ilişkilendirilebilir.",
    jungian: "Jungcu yaklaşımda balonun yükselmesi, bilincin gündelik gerçeklikten uzaklaşmasını sembolik olarak düşündürebilir. Sembolün kişisel çağrışımı belirleyicidir.",
    cultural: "Balon çoğu kültürde çocukluk, kutlama ve eğlenceyle bağlantılıdır.",
    spiritual: "Spiritüel yaklaşımlarda balon bırakma, yüklerden veya eski beklentilerden özgürleşmenin sembolü olarak yorumlanabilir."
  }),

  richSymbol({
    slug: "parasutu",
    title: "Paraşüt",
    theme: "güvenlik, risk, düşüş, korunma ve kontrol",
    positive: ["Korunma", "Güven", "Risk yönetimi", "Destek"],
    challenging: ["Düşme korkusu", "Güvensizlik", "Hazırlıksızlık", "Kontrol kaybı"],
    context: ["Paraşüt açıldı mı?", "Nereden düşülüyordu?", "Paraşüt güven veriyor muydu?", "Rüyadaki düşüş kontrollü müydü?"],
    variations: ["Paraşütle atlamak", "Paraşütün açılmaması", "Paraşütle güvenli inmek", "Bir başkasının paraşütle atlaması"],
    psychology: "Paraşüt, riskli bir durum karşısında kişinin kendisini ne kadar güvende hissettiğini düşündürebilir. Açılmaması hazırlık veya güven sorunlarını çağrıştırabilir.",
    jungian: "Jungcu açıdan paraşüt, bilinçdışı risklerle karşılaşırken güvenli iniş sağlayan psikolojik kaynakların sembolü olarak düşünülebilir.",
    cultural: "Paraşüt modern kültürde cesaret, risk ve kontrollü düşüş kavramlarıyla ilişkilidir.",
    spiritual: "Spiritüel yorumlarda paraşüt, kişinin görünmeyen bir destek tarafından korunduğu hissini temsil edebilir."
  }),

  richSymbol({
    slug: "roket",
    title: "Roket",
    theme: "hızlı ilerleme, hedef, yükseliş, enerji ve dönüşüm",
    positive: ["İlerleme", "Hedef", "Motivasyon", "Keşif"],
    challenging: ["Aşırı hırs", "Kontrol kaybı", "Baskı", "Yanlış yön"],
    context: ["Roket nereye gidiyordu?", "Fırlatma başarılı mıydı?", "Roketin içinde miydiniz?", "Hız nasıl hissettiriyordu?"],
    variations: ["Roket fırlatmak", "Roketin patlaması", "Roketle uzaya gitmek", "Roketi uzaktan izlemek"],
    psychology: "Roket rüyası, yoğun hedef odaklanmasını veya hayatın hızlandığı hissini yansıtabilir. Rüyanın kaygılı ya da heyecanlı olması yorumu değiştirir.",
    jungian: "Roketin yükselmesi, dönüşüm veya bilincin alışılmış sınırların dışına çıkmasıyla sembolik olarak ilişkilendirilebilir.",
    cultural: "Roket teknoloji, keşif ve insanlığın bilinmeyene ulaşma çabasıyla bağlantılıdır.",
    spiritual: "Spiritüel yorumlarda roket, hızlı içsel değişim veya bilinmeyene doğru yolculuk metaforu olarak görülebilir."
  }),

  richSymbol({
    slug: "uydu",
    title: "Uydu",
    theme: "uzaktan gözlem, bağlantı, iletişim ve perspektif",
    positive: ["Bağlantı", "Gözlem", "Perspektif", "Bilgi"],
    challenging: ["Mesafe", "İzlenme hissi", "Yalnızlık", "Kopukluk"],
    context: ["Uyduyu görebiliyor muydunuz?", "Uydu neyi izliyordu?", "Bir iletişim kuruluyor muydu?", "Uzaktan gözlemlemek nasıl hissettirdi?"],
    variations: ["Gökyüzünde uydu görmek", "Uydu sinyali almak", "Uydu bağlantısının kesilmesi", "Uydu görüntüsü izlemek"],
    psychology: "Uydu, kişinin bir olaydan duygusal olarak uzaklaşıp onu gözlemleme ihtiyacını çağrıştırabilir. Aynı zamanda iletişim ve bağlantı temalarını da taşıyabilir.",
    jungian: "Jungcu açıdan uydu, egonun olaylara daha geniş bir perspektiften bakma çabasını sembolize edebilir.",
    cultural: "Uydu modern dünyada iletişim, navigasyon, gözetim ve küresel bağlantıyla ilişkilidir.",
    spiritual: "Spiritüel yorumlarda uydu, olaylara daha yüksek veya geniş bir perspektiften bakma metaforu olabilir."
  }),

  richSymbol({
    slug: "astronot",
    title: "Astronot",
    theme: "bilinmeyen, keşif, yalnızlık, cesaret ve sınırları aşma",
    positive: ["Keşif", "Cesaret", "Merak", "Yeni deneyimler"],
    challenging: ["Yalnızlık", "İzolasyon", "Bilinmeyen korkusu", "Dünyadan kopma"],
    context: ["Astronot siz miydiniz?", "Nereye gidiliyordu?", "Uzayda yalnız mıydınız?", "Dünya görünür müydü?"],
    variations: ["Astronot olmak", "Astronot görmek", "Astronotla konuşmak", "Uzay yürüyüşü yapmak"],
    psychology: "Astronot imgesi, alışılmış çevreden uzaklaşarak yeni bir deneyime girme arzusunu veya bunun yarattığı yalnızlığı temsil edebilir.",
    jungian: "Jungcu açıdan astronot, bilinçdışının bilinmeyen alanlarına cesaretle giren araştırıcı figür olarak düşünülebilir.",
    cultural: "Astronot modern kültürde keşif, bilim ve insanın sınırları aşma isteğinin güçlü bir simgesidir.",
    spiritual: "Spiritüel yaklaşımlarda astronot, bilinç alanını genişletme veya bilinmeyen içsel alanları keşfetme metaforu olabilir."
  }),

  richSymbol({
    slug: "uzayli",
    title: "Uzaylı",
    theme: "yabancılık, bilinmeyen, farklılık ve tehdit algısı",
    positive: ["Merak", "Farklılığı kabul", "Keşif", "Yeni bakış açısı"],
    challenging: ["Yabancılık", "Tehdit", "Anlaşılmama", "Kontrol kaybı"],
    context: ["Uzaylı dostça mıydı?", "Sizinle iletişim kurdu mu?", "Korktunuz mu?", "Uzaylı nereden gelmişti?"],
    variations: ["Uzaylı görmek", "Uzaylıyla konuşmak", "Uzaylıdan kaçmak", "Uzaylı saldırısı"],
    psychology: "Uzaylı, kişinin kendisine yabancı gelen bir kişi, duygu veya durumla karşılaşmasını sembolik olarak yansıtabilir.",
    jungian: "Jungcu yaklaşımda uzaylı, egonun henüz tanımadığı psikolojik içeriklerin yabancı bir figür olarak ortaya çıkmasını temsil edebilir.",
    cultural: "Bilimkurgu kültüründe uzaylı bilinmeyen, yabancı olan ve insan sınırlarının ötesindeki varlık fikriyle ilişkilidir.",
    spiritual: "Spiritüel yorumlarda uzaylı bazen bilinmeyen bilinç biçimlerinin sembolü olarak ele alınır; bu yorumlar bilimsel bir iddia değildir."
  }),

  richSymbol({
    slug: "teleskop",
    title: "Teleskop",
    theme: "uzak hedefler, gözlem, merak ve perspektif",
    positive: ["Merak", "Farkındalık", "Keşif", "Geniş perspektif"],
    challenging: ["Uzaklık", "Belirsizlik", "Aşırı gözlem", "Gerçeğe ulaşamama"],
    context: ["Teleskopla neye baktınız?", "Görüntü net miydi?", "Uzak bir şeyi görmeye çalışıyor muydunuz?", "Gördüğünüz şey şaşırtıcı mıydı?"],
    variations: ["Teleskopla yıldızlara bakmak", "Teleskop almak", "Teleskopun bozulması", "Bir başkasının teleskop kullanması"],
    psychology: "Teleskop, doğrudan erişilemeyen bir konu hakkında daha fazla bilgi edinme veya olaylara mesafeden bakma ihtiyacını gösterebilir.",
    jungian: "Jungcu açıdan teleskop, bilincin görünmeyen veya uzak psikolojik içerikleri fark etme çabasını sembolize edebilir.",
    cultural: "Teleskop bilim, astronomi ve bilinmeyeni gözlemleme arzusuyla bağlantılıdır.",
    spiritual: "Spiritüel yaklaşımlarda teleskop daha geniş bir anlam arayışının sembolü olabilir."
  }),

  richSymbol({
    slug: "meteor",
    title: "Meteor",
    theme: "ani değişim, beklenmedik olay, güç ve geçicilik",
    positive: ["Dönüşüm", "Hayranlık", "Uyanış", "Farkındalık"],
    challenging: ["Ani tehdit", "Şok", "Kayıp korkusu", "Kontrolsüz değişim"],
    context: ["Meteor nereye düştü?", "Patlama oldu mu?", "Meteor sizi etkiledi mi?", "Rüyadaki duygu korku muydu yoksa hayranlık mı?"],
    variations: ["Meteor görmek", "Meteor yağmuru", "Meteor düşmesi", "Meteordan kaçmak"],
    psychology: "Meteor, kişinin yaşamında beklenmedik biçimde ortaya çıkan büyük bir olayın duygusal izini temsil edebilir.",
    jungian: "Jungcu açıdan meteor, bilinçdışından aniden gelen güçlü bir içeriğin veya dönüşüm ihtiyacının imgesi olarak düşünülebilir.",
    cultural: "Meteorlar popüler kültürde felaket, kozmik güç ve olağanüstü olaylarla ilişkilendirilir.",
    spiritual: "Spiritüel yorumlarda meteor ani farkındalık veya hayat yönünü değiştiren bir olayın sembolü olarak görülebilir."
  }),

  richSymbol({
    slug: "kuyruklu_yildiz",
    title: "Kuyruklu Yıldız",
    theme: "nadir olaylar, dikkat, geçiş ve gökyüzü",
    positive: ["Umut", "Hayranlık", "Yeni başlangıç", "Farkındalık"],
    challenging: ["Belirsizlik", "Geçicilik", "Uğursuzluk korkusu", "Beklenmedik değişim"],
    context: ["Kuyruklu yıldız parlak mıydı?", "Yakın mıydı?", "Bir dilek tuttunuz mu?", "Rüyada korku veya hayranlık var mıydı?"],
    variations: ["Kuyruklu yıldız görmek", "Kuyruklu yıldızın yaklaşması", "Kuyruklu yıldızı fotoğraflamak", "Gökyüzünde birden fazla kuyruklu yıldız"],
    psychology: "Kuyruklu yıldız, nadir veya dikkat çekici bir deneyimin zihinsel olarak önem kazanmasını temsil edebilir.",
    jungian: "Jungcu açıdan gökyüzünde belirginleşen kuyruklu yıldız, bilinçdışından gelen ve egonun dikkatini çeken güçlü bir sembol olarak düşünülebilir.",
    cultural: "Kuyruklu yıldızlar tarih boyunca hem hayranlık hem de korkuyla karşılanmış kozmik olaylardır.",
    spiritual: "Spiritüel geleneklerde kuyruklu yıldız bazen geçiş veya dönüşüm işareti olarak yorumlanmıştır; bunun kişisel bir kehanet olduğu söylenemez."
  }),

  richSymbol({
    slug: "samanyolu",
    title: "Samanyolu",
    theme: "sonsuzluk, bütünlük, hayranlık ve kozmik perspektif",
    positive: ["Bütünlük", "Hayranlık", "Geniş perspektif", "Merak"],
    challenging: ["Küçüklük hissi", "Yalnızlık", "Bilinmezlik", "Varoluşsal kaygı"],
    context: ["Samanyolu nasıl görünüyordu?", "Gökyüzü açık mıydı?", "Tek başınıza mıydınız?", "Rüya size huzur mu verdi?"],
    variations: ["Samanyolu'nu izlemek", "Samanyolu altında yürümek", "Samanyolu fotoğrafı çekmek", "Samanyolu'na doğru yolculuk"],
    psychology: "Samanyolu imgesi, kişinin kendi yaşamını daha geniş bir perspektiften değerlendirme ihtiyacını yansıtabilir.",
    jungian: "Jungcu açıdan kozmik bütünlük imgesi, bireysel egonun daha geniş bir psikolojik bütünlükle ilişkisini düşündürebilir.",
    cultural: "Samanyolu birçok kültürde mitoloji ve gökyüzü anlatılarıyla ilişkilendirilmiştir.",
    spiritual: "Spiritüel yaklaşımlarda Samanyolu bütünlük ve evrenle bağlantı hissinin metaforu olabilir."
  }),

  richSymbol({
    slug: "tutulma",
    title: "Tutulma",
    theme: "gizlenme, geçiş, belirsizlik ve dikkat çekici değişim",
    positive: ["Dönüşüm", "Farkındalık", "Yeni bakış", "Geçiş"],
    challenging: ["Belirsizlik", "Karanlık", "Kontrol kaybı", "Kaygı"],
    context: ["Güneş mi ay mı tutuluyordu?", "Gökyüzü karardı mı?", "Tutulmayı izliyor muydunuz?", "Rüyadaki atmosfer nasıldı?"],
    variations: ["Güneş tutulması", "Ay tutulması", "Tutulmayı izlemek", "Tutulma sırasında karanlıkta kalmak"],
    psychology: "Tutulma, kişinin normalde açık veya görünür olan bir konunun geçici olarak gizlenmesini deneyimlediğini gösterebilir.",
    jungian: "Jungcu açıdan ışığın geçici olarak örtülmesi, bilincin bir yönünün gölgede kalmasını sembolik olarak düşündürebilir.",
    cultural: "Tutulmalar tarih boyunca önemli ve sıra dışı gökyüzü olayları olarak değerlendirilmiştir.",
    spiritual: "Spiritüel yorumlarda tutulmalar geçiş dönemlerinin sembolü olarak ele alınabilir; bu, bilimsel bir öngörü anlamına gelmez."
  }),

  richSymbol({
    slug: "safak",
    title: "Şafak",
    theme: "başlangıç, umut, aydınlanma ve geçiş",
    positive: ["Umut", "Yeni başlangıç", "Aydınlanma", "Yenilenme"],
    challenging: ["Bekleme", "Belirsizlik", "Geçmişten ayrılma", "Kararsızlık"],
    context: ["Şafak hangi renkteydi?", "Gece sona eriyor muydu?", "Şafağı bekliyor muydunuz?", "Rüyada ne hissettiniz?"],
    variations: ["Şafak sökmesi", "Şafakta yürümek", "Şafak manzarası", "Şafakta bir yolculuğa çıkmak"],
    psychology: "Şafak, zor veya belirsiz bir dönemin ardından yeni bir aşamaya geçme beklentisini yansıtabilir.",
    jungian: "Jungcu açıdan karanlıktan ışığa geçiş, bilinçdışı içeriğin bilince yaklaşması ve psikolojik farkındalığın artmasıyla sembolik olarak ilişkilendirilebilir.",
    cultural: "Şafak birçok kültürde yenilenme ve yeni günün başlangıcı olarak görülür.",
    spiritual: "Spiritüel yorumlarda şafak içsel uyanış ve yeniden başlama metaforudur."
  }),

  richSymbol({
    slug: "gun_batimi",
    title: "Gün Batımı",
    theme: "sonlanma, kabul, geçiş, güzellik ve zaman",
    positive: ["Kabulleniş", "Huzur", "Tamamlanma", "Geçiş"],
    challenging: ["Kayıp", "Ayrılık", "Yaşlanma", "Bir dönemin bitişi"],
    context: ["Gün batımı nasıl görünüyordu?", "Tek başınıza mıydınız?", "Birinden ayrılıyor muydunuz?", "Hüzün veya huzur var mıydı?"],
    variations: ["Gün batımını izlemek", "Deniz üzerinde gün batımı", "Kırmızı gün batımı", "Gün batımında yürümek"],
    psychology: "Gün batımı, bir dönemin sona ermesi veya kişinin değişimi kabul etme sürecini temsil edebilir.",
    jungian: "Jungcu açıdan gün batımı yaşamın bir evresinden diğerine geçişi ve bilinçteki bir döngünün tamamlanmasını sembolize edebilir.",
    cultural: "Gün batımı sanat ve edebiyatta zamanın geçişi, güzellik ve sonlanma temalarıyla sıkça ilişkilendirilir.",
    spiritual: "Spiritüel yaklaşımlarda gün batımı bırakma, kabul ve döngülerin doğal akışıyla ilişkilendirilebilir."
  }),

  richSymbol({
    slug: "gece",
    title: "Gece",
    theme: "bilinmeyen, içe dönüş, gizlilik ve bilinçdışı",
    positive: ["İçe dönüş", "Dinlenme", "Gizli olanı keşif", "Sezgi"],
    challenging: ["Korku", "Belirsizlik", "Yalnızlık", "Güvensizlik"],
    context: ["Gece aydınlık mıydı?", "Yalnız mıydınız?", "Gece nerede geçiyordu?", "Karanlık korkutucu muydu?"],
    variations: ["Gece yürümek", "Gece yolculuğu", "Gece bir evde olmak", "Gece gökyüzünü izlemek"],
    psychology: "Gece rüyaları bilinmeyen veya henüz açıkça fark edilmemiş duygusal konularla ilişkili olabilir.",
    jungian: "Jungcu yaklaşımda gece, bilinçdışı alanın doğal bir imgesi olarak düşünülebilir; ancak gece sembolünün kişisel çağrışımı temel önem taşır.",
    cultural: "Gece tarih boyunca gizem, dinlenme, tehlike ve içsel yaşamla ilişkilendirilmiştir.",
    spiritual: "Spiritüel yaklaşımlarda gece içsel sessizlik ve bilinmeyenle karşılaşma zamanı olarak görülebilir."
  }),

  richSymbol({
    slug: "ay_isigi",
    title: "Ay Işığı",
    theme: "sezgi, sakinlik, gece, yansıma ve duygusal farkındalık",
    positive: ["Sakinlik", "Sezgi", "Duygusal farkındalık", "Gizem"],
    challenging: ["Belirsizlik", "Yanılsama", "Gizlilik", "Duygusal hassasiyet"],
    context: ["Ay ışığı parlak mıydı?", "Neyi aydınlatıyordu?", "Rüyada huzur var mıydı?", "Ay ışığında kim vardı?"],
    variations: ["Ay ışığında yürümek", "Ay ışığının eve girmesi", "Ay ışığında denizi görmek", "Ay ışığı altında konuşmak"],
    psychology: "Ay ışığı, kişinin açıkça ifade edilmeyen duygularını daha yumuşak biçimde fark etmesini temsil edebilir.",
    jungian: "Jungcu açıdan ay ışığı bilinçdışı içeriğin doğrudan güneş ışığı gibi değil, dolaylı ve sezgisel biçimde görünür hale gelmesini çağrıştırabilir.",
    cultural: "Ay ışığı şiir ve mitolojide romantizm, gizem ve geceyle bağlantılıdır.",
    spiritual: "Spiritüel yorumlarda ay ışığı sezgi ve içsel rehberlik metaforu olarak kullanılabilir."
  }),

  richSymbol({
    slug: "fener",
    title: "Fener",
    theme: "rehberlik, yön bulma, güvenlik ve karanlıkta ilerleme",
    positive: ["Rehberlik", "Güven", "Farkındalık", "Yön bulma"],
    challenging: ["Yetersiz görüş", "Kaybolma korkusu", "Sınırlı bilgi", "Belirsizlik"],
    context: ["Fener neyi aydınlatıyordu?", "Fener sizin elinizde miydi?", "Işık güçlü müydü?", "Karanlık ne kadar yoğundu?"],
    variations: ["Fener taşımak", "Fenerle karanlıkta yürümek", "Fenerin sönmesi", "Bir başkasının fener taşıması"],
    psychology: "Fener, belirsiz bir durumda kişinin elindeki sınırlı ama önemli bilgiyi veya desteği temsil edebilir.",
    jungian: "Jungcu açıdan fener, bilinçdışının karanlığında egonun ulaşabildiği küçük ama anlamlı farkındalık alanını sembolize edebilir.",
    cultural: "Fener tarih boyunca yol gösterme, güvenlik ve karanlığı aydınlatma aracı olmuştur.",
    spiritual: "Spiritüel yorumlarda fener içsel rehberlik ve bilinç ışığının metaforu olarak görülür."
  }),

  richSymbol({
    slug: "denizalti",
    title: "Denizaltı",
    theme: "derinlik, bilinçdışı, keşif, izolasyon ve gizli alanlar",
    positive: ["Keşif", "Derinlik", "Merak", "İçe bakış"],
    challenging: ["Kapalı kalma", "İzolasyon", "Bilinmeyen", "Boğulma korkusu"],
    context: ["Denizaltının içinde miydiniz?", "Deniz ne kadar derindi?", "Denizaltı güvenli miydi?", "Dışarıyı görebiliyor muydunuz?"],
    variations: ["Denizaltıyla dalmak", "Denizaltı görmek", "Denizaltının arızalanması", "Denizaltından çıkmak"],
    psychology: "Denizaltı, kişinin yoğun duyguların veya bilinçdışı süreçlerin derinliklerine kontrollü biçimde girmesini temsil edebilir.",
    jungian: "Jungcu açıdan denizin derinliklerine inmek bilinçdışı içeriklerle karşılaşmanın güçlü bir metaforu olabilir.",
    cultural: "Denizaltı keşif, askeri teknoloji ve denizin görünmeyen derinlikleriyle ilişkilidir.",
    spiritual: "Spiritüel yaklaşımlarda denizaltı içsel derinliklere yapılan sembolik yolculuğu temsil edebilir."
  }),

  richSymbol({
    slug: "yelken",
    title: "Yelken",
    theme: "yön, rüzgâr, hareket, uyum ve yolculuk",
    positive: ["Özgürlük", "Uyum", "Yolculuk", "Akış"],
    challenging: ["Rüzgâra bağımlılık", "Yön kaybı", "Belirsizlik", "Kontrol eksikliği"],
    context: ["Yelken dolu muydu?", "Deniz sakin miydi?", "Tekneyi kim kullanıyordu?", "Rüzgâr nereye esiyordu?"],
    variations: ["Yelken açmak", "Yelkenlinin hızlanması", "Yelkenin yırtılması", "Rüzgârsız denizde yelken"],
    psychology: "Yelken, kişinin yaşam koşullarını tamamen kontrol etmek yerine mevcut koşullara uyum sağlayarak ilerleme biçimini yansıtabilir.",
    jungian: "Jungcu açıdan yelken, bilinçli iradenin bilinçdışı veya dış koşulların enerjisiyle birlikte hareket etmesini sembolize edebilir.",
    cultural: "Yelken denizcilik, keşif ve rüzgârla uyum içinde hareket etme fikrini temsil eder.",
    spiritual: "Spiritüel yorumlarda yelken hayatın akışına uyum sağlama metaforu olarak kullanılabilir."
  }),

  richSymbol({
    slug: "liman",
    title: "Liman",
    theme: "güvenlik, varış, dinlenme, ayrılık ve geri dönüş",
    positive: ["Güven", "Dinlenme", "Varış", "Aidiyet"],
    challenging: ["Bekleme", "Ayrılık", "Hareketsizlik", "Geri dönme zorunluluğu"],
    context: ["Liman kalabalık mıydı?", "Bir gemi bekliyor muydunuz?", "Liman güvenli miydi?", "Gitmek mi kalmak mı istiyordunuz?"],
    variations: ["Limana girmek", "Limandan ayrılmak", "Limanı uzaktan görmek", "Fırtınada limana sığınmak"],
    psychology: "Liman, yoğun bir dönemden sonra güvenli bir alana ulaşma veya bir karar öncesinde bekleme ihtiyacını temsil edebilir.",
    jungian: "Jungcu açıdan liman, psikolojik yolculuğun geçici bir güvenlik ve yeniden değerlendirme noktası olarak düşünülebilir.",
    cultural: "Limanlar yolculuk, ticaret, ayrılık ve dönüş temalarıyla bağlantılıdır.",
    spiritual: "Spiritüel yorumlarda liman ruhsal sığınak veya geçici durak metaforu olabilir."
  }),

  richSymbol({
    slug: "iskele",
    title: "İskele",
    theme: "geçiş, bekleme, bağlantı ve suya yaklaşma",
    positive: ["Geçiş", "Hazırlık", "Bağlantı", "Yeni yolculuk"],
    challenging: ["Kararsızlık", "Bekleme", "Düşme korkusu", "Güvensiz zemin"],
    context: ["İskele sağlam mıydı?", "Nereye geçmeye çalışıyordunuz?", "Su sakin miydi?", "İskelede yalnız mıydınız?"],
    variations: ["İskelede yürümek", "İskeleden suya düşmek", "İskelede beklemek", "İskeleden tekneye binmek"],
    psychology: "İskele, bir durumdan diğerine geçmeden önceki ara aşamayı veya karar noktasını temsil edebilir.",
    jungian: "Jungcu açıdan iskele, bilinçli yaşam ile duygusal derinlikler arasında uzanan sembolik bir geçiş alanı olarak düşünülebilir.",
    cultural: "İskeleler yolculuk, ayrılık, varış ve denizle temas noktalarıdır.",
    spiritual: "Spiritüel yorumlarda iskele geçiş ve yeni bir aşamaya hazırlanma metaforudur."
  }),

  richSymbol({
    slug: "pusula",
    title: "Pusula",
    theme: "yön, karar, amaç ve içsel rehberlik",
    positive: ["Yön bulma", "Kararlılık", "Amaç", "Rehberlik"],
    challenging: ["Kararsızlık", "Yanlış yön", "Yolunu kaybetme", "Güven eksikliği"],
    context: ["Pusula hangi yönü gösteriyordu?", "Pusulaya güveniyor muydunuz?", "Bir yol ayrımında mıydınız?", "Pusula çalışıyor muydu?"],
    variations: ["Pusula kullanmak", "Pusulanın bozulması", "Pusulayla yol bulmak", "Başkasının pusula vermesi"],
    psychology: "Pusula rüyası, kişinin yaşamında yön veya karar konusunda daha net bir iç ölçüte ihtiyaç duyduğunu düşündürebilir.",
    jungian: "Jungcu açıdan pusula, egonun bireyselleşme sürecinde kendi yönünü bulma çabasını sembolize edebilir.",
    cultural: "Pusula keşif, navigasyon ve doğru yönü bulma kavramlarıyla ilişkilidir.",
    spiritual: "Spiritüel yaklaşımlarda pusula içsel yön ve sezgisel rehberlik metaforudur."
  }),

  richSymbol({
    slug: "harita",
    title: "Harita",
    theme: "planlama, yolculuk, yön ve yaşamın genel görünümü",
    positive: ["Planlama", "Farkındalık", "Yön", "Keşif"],
    challenging: ["Planın bozulması", "Kaybolma", "Aşırı kontrol", "Belirsizlik"],
    context: ["Harita nereye ait?", "Haritada yol bulunuyor muydu?", "Haritayı kim verdi?", "Harita doğru muydu?"],
    variations: ["Harita okumak", "Haritada kaybolmak", "Eski harita bulmak", "Haritada bilinmeyen bir yer görmek"],
    psychology: "Harita, kişinin karmaşık bir yaşam durumunu anlamlandırmak veya gelecekteki adımlarını planlamak istemesini yansıtabilir.",
    jungian: "Jungcu açıdan harita, bireyin iç dünyasının veya yaşam yolunun bilinçli bir zihinsel modelini temsil edebilir.",
    cultural: "Haritalar keşif, coğrafya, planlama ve bilinmeyeni anlamlandırma araçlarıdır.",
    spiritual: "Spiritüel yorumlarda harita hayat yolculuğunun sembolik modeli olarak görülebilir."
  }),

  richSymbol({
    slug: "bavul",
    title: "Bavul",
    theme: "taşınan deneyimler, yolculuk, hazırlık ve geçmiş",
    positive: ["Hazırlık", "Yeni başlangıç", "Bağımsızlık", "Yolculuk"],
    challenging: ["Yük", "Geçmişe bağlılık", "Hazırlıksızlık", "Ayrılık"],
    context: ["Bavul ağır mıydı?", "Bavulun içinde ne vardı?", "Nereye gidiyordunuz?", "Bavulu unutmuş muydunuz?"],
    variations: ["Bavul hazırlamak", "Bavul kaybetmek", "Ağır bavul taşımak", "Bavul açmak"],
    psychology: "Bavul, kişinin geçmişten geleceğe taşıdığı deneyimleri, sorumlulukları veya duygusal yükleri sembolize edebilir.",
    jungian: "Jungcu açıdan bavul, bireyleşme yolculuğunda egonun beraberinde taşıdığı kişisel ve gölgede kalmış içeriklerin imgesi olabilir.",
    cultural: "Bavul seyahat, taşınma, ayrılık ve yeni başlangıçlarla ilişkilidir.",
    spiritual: "Spiritüel yorumlarda bavul eski yükleri bırakma veya yeni bir yolculuğa hazırlanma metaforu olabilir."
  }),

  richSymbol({
    slug: "pasaport",
    title: "Pasaport",
    theme: "kimlik, geçiş, aidiyet, özgürlük ve sınırlar",
    positive: ["Özgürlük", "Yeni deneyim", "Kimlik", "Geçiş"],
    challenging: ["Engellenme", "Kimlik kaygısı", "Sınırlar", "Yetersizlik"],
    context: ["Pasaport geçerli miydi?", "Bir sınırdan geçiyor muydunuz?", "Pasaportu kaybettiniz mi?", "Kimliğinizi kanıtlamanız gerekiyor muydu?"],
    variations: ["Pasaport almak", "Pasaport kaybetmek", "Pasaport kontrolü", "Pasaportla seyahat etmek"],
    psychology: "Pasaport kimlik ve ait olma duygusuyla birlikte kişinin bir yaşam alanından diğerine geçme arzusunu yansıtabilir.",
    jungian: "Jungcu açıdan pasaport, sosyal kimlik ile kişinin daha derin bireysel kimliği arasındaki ilişkiyi düşündürebilir.",
    cultural: "Pasaport modern dünyada kimlik, sınır ve uluslararası hareketlilik sembolüdür.",
    spiritual: "Spiritüel yorumlarda pasaport bir bilinç durumundan diğerine geçiş metaforu olarak görülebilir."
  }),

  richSymbol({
    slug: "bilet",
    title: "Bilet",
    theme: "fırsat, yolculuk, seçim, geçiş ve zamanlama",
    positive: ["Fırsat", "Hazırlık", "Yolculuk", "Seçim"],
    challenging: ["Kaçırılmış fırsat", "Geç kalma", "Yanlış seçim", "Belirsizlik"],
    context: ["Bilet nereye aitti?", "Biletin tarihi neydi?", "Treni veya uçağı kaçırdınız mı?", "Bilet sizin miydi?"],
    variations: ["Bilet almak", "Bilet kaybetmek", "Bilet kontrolü", "Yanlış bilet almak"],
    psychology: "Bilet, kişinin önünde gördüğü bir fırsatı veya belirli bir zaman içinde karar verme baskısını temsil edebilir.",
    jungian: "Jungcu açıdan bilet, bireyin psikolojik yolculuğunda yeni bir aşamaya geçmek için sahip olduğu sembolik izin veya fırsat olarak düşünülebilir.",
    cultural: "Biletler seyahat, etkinlik ve erişim hakkıyla bağlantılıdır.",
    spiritual: "Spiritüel yorumlarda bilet yeni bir yaşam aşamasına geçiş sembolü olabilir."
  }),

  richSymbol({
    slug: "havaalani",
    title: "Havaalanı",
    theme: "geçiş, bekleme, yolculuk, seçim ve belirsizlik",
    positive: ["Yeni başlangıç", "Keşif", "Özgürlük", "Değişim"],
    challenging: ["Bekleme", "Geç kalma", "Yolunu şaşırma", "Kontrol kaybı"],
    context: ["Uçağa yetişebildiniz mi?", "Nereye gidiyordunuz?", "Havaalanı kalabalık mıydı?", "Bilet veya pasaport sorunu oldu mu?"],
    variations: ["Havaalanında beklemek", "Uçağı kaçırmak", "Gümrükten geçmek", "Havaalanında kaybolmak"],
    psychology: "Havaalanı rüyaları çoğunlukla geçiş dönemleri, kararlar ve geleceğe yönelik belirsizliklerle bağlantılı olabilir.",
    jungian: "Jungcu açıdan havaalanı, eski psikolojik durum ile yeni bir yaşam yönü arasında bulunan geçiş alanı olarak düşünülebilir.",
    cultural: "Havaalanı modern dünyada hareketlilik, ayrılık, buluşma ve uluslararası yolculuğun sembolüdür.",
    spiritual: "Spiritüel yorumlarda havaalanı bir bilinç durumundan diğerine geçiş metaforu olarak görülebilir."
  }),

  richSymbol({
    slug: "otel",
    title: "Otel",
    theme: "geçicilik, yabancı ortam, dinlenme ve kimlik",
    positive: ["Dinlenme", "Keşif", "Geçici özgürlük", "Yeni deneyim"],
    challenging: ["Aidiyetsizlik", "Yalnızlık", "Geçicilik", "Yabancılık"],
    context: ["Otel tanıdık mıydı?", "Odada kim vardı?", "Otel güvenli miydi?", "Orada kalmak mı ayrılmak mı istiyordunuz?"],
    variations: ["Otele yerleşmek", "Otelde kaybolmak", "Otel odası aramak", "Otelden ayrılmak"],
    psychology: "Otel, kişinin hayatındaki geçici bir dönemi veya kendisini henüz tam olarak ait hissetmediği bir durumu temsil edebilir.",
    jungian: "Jungcu açıdan otel, kalıcı kimlikten ziyade geçici bir psikolojik durumun veya persona değişiminin sembolü olabilir.",
    cultural: "Otel seyahat, geçicilik ve farklı kimlik deneyimleriyle ilişkilidir.",
    spiritual: "Spiritüel yorumlarda otel yaşam yolculuğundaki geçici durak metaforu olabilir."
  }),

  richSymbol({
    slug: "restoran",
    title: "Restoran",
    theme: "beslenme, sosyal ilişki, seçim ve haz",
    positive: ["Paylaşım", "Haz", "Sosyallik", "Seçim"],
    challenging: ["Memnuniyetsizlik", "Aşırı tüketim", "Sosyal baskı", "Seçim stresi"],
    context: ["Ne yediniz?", "Kiminleydiniz?", "Yemek güzel miydi?", "Hesabı kim ödüyordu?"],
    variations: ["Restoranda yemek yemek", "Restoranda garson olmak", "Hesabı ödemek", "Restoranda yer bulamamak"],
    psychology: "Restoran, kişinin hem fiziksel hem de sosyal ihtiyaçlarını nasıl karşıladığına ilişkin kişisel deneyimleri çağrıştırabilir.",
    jungian: "Jungcu açıdan yemek ve paylaşım, psikolojik olarak bir şeyi kabul etme veya içselleştirme temalarıyla ilişkilendirilebilir.",
    cultural: "Restoranlar yemek, sosyal bağ ve kültürel paylaşım alanlarıdır.",
    spiritual: "Spiritüel yaklaşımlarda yemek paylaşımı birliktelik ve karşılıklı beslenmenin metaforu olabilir."
  }),

  richSymbol({
    slug: "market",
    title: "Market",
    theme: "seçim, ihtiyaç, tüketim, bolluk ve günlük yaşam",
    positive: ["Bolluk", "Seçim", "İhtiyaçları karşılama", "Bağımsızlık"],
    challenging: ["Kararsızlık", "Aşırı tüketim", "Maddi kaygı", "Fazlalık"],
    context: ["Ne satın alıyordunuz?", "Market dolu muydu?", "Paranız yeterli miydi?", "Bir şeyi bulamıyor muydunuz?"],
    variations: ["Markette alışveriş yapmak", "Markette kaybolmak", "Kasada beklemek", "Marketin kapanması"],
    psychology: "Market, gündelik yaşamda ihtiyaçlar arasında seçim yapmayı ve kaynakların nasıl kullanılacağını temsil edebilir.",
    jungian: "Jungcu açıdan market, egonun birçok seçenek arasından hangi psikolojik veya yaşam içeriğini 'alacağını' seçtiği sembolik bir alan olabilir.",
    cultural: "Market tüketim, ihtiyaç ve ekonomik yaşamın gündelik bir parçasıdır.",
    spiritual: "Spiritüel yorumlarda market, arzular ile gerçek ihtiyaçlar arasındaki farkı düşünme metaforu olabilir."
  }),

  richSymbol({
    slug: "sinema",
    title: "Sinema",
    theme: "izleme, hikâye, kimlik, kaçış ve gözlem",
    positive: ["Hayal gücü", "Farkındalık", "Eğlence", "Perspektif"],
    challenging: ["Gerçeklikten kaçış", "Pasiflik", "Yanılsama", "Başkalarının hayatını izleme"],
    context: ["Hangi filmi izliyordunuz?", "Film sizi etkiledi mi?", "Salonda yalnız mıydınız?", "Kendinizi filmde gördünüz mü?"],
    variations: ["Sinemaya gitmek", "Film izlemek", "Sinema salonunda kaybolmak", "Filmin içinde olmak"],
    psychology: "Sinema rüyası, kişinin kendi yaşamını dışarıdan gözlemleme veya başka bir hikâyeyle özdeşleşme ihtiyacını yansıtabilir.",
    jungian: "Jungcu açıdan film, bilinçdışının imgeler yoluyla anlattığı kişisel bir hikâye gibi düşünülebilir.",
    cultural: "Sinema hikâye anlatımı, eğlence ve toplumsal imgelerin güçlü bir aracıdır.",
    spiritual: "Spiritüel yaklaşımlarda sinema yaşamın gözlemlenen bir hikâye olması metaforunu taşıyabilir."
  }),

  richSymbol({
    slug: "tiyatro",
    title: "Tiyatro",
    theme: "roller, performans, persona, izleyici ve sosyal kimlik",
    positive: ["Yaratıcılık", "Kendini ifade", "Sosyallik", "Özgüven"],
    challenging: ["Performans baskısı", "Yargılanma", "Sahte kimlik", "Utanç"],
    context: ["Sahnede miydiniz?", "İzleyici kimdi?", "Rolünüz neydi?", "Oyunu unutuyor muydunuz?"],
    variations: ["Tiyatroda oyuncu olmak", "Tiyatro izlemek", "Sahnede hata yapmak", "Boş tiyatro salonu"],
    psychology: "Tiyatro rüyaları kişinin sosyal rollerini, başkalarının beklentilerini ve kendisini nasıl sunduğunu düşündürebilir.",
    jungian: "Jungcu açıdan tiyatro özellikle persona kavramıyla güçlü biçimde ilişkilendirilebilir; kişinin dış dünyaya sunduğu yüz ile iç dünyası arasındaki fark önem kazanır.",
    cultural: "Tiyatro insan davranışlarını roller ve hikâyeler aracılığıyla temsil eden eski bir sanat biçimidir.",
    spiritual: "Spiritüel yorumlarda tiyatro bazen yaşam rollerinin geçici doğasının metaforu olarak görülür."
  }),

  richSymbol({
    slug: "muze",
    title: "Müze",
    theme: "geçmiş, hafıza, miras, koruma ve geçmişle ilişki",
    positive: ["Öğrenme", "Hatırlama", "Farkındalık", "Kültürel bağ"],
    challenging: ["Geçmişe takılma", "Nostalji", "Donmuşluk", "Kayıp"],
    context: ["Müzede ne gördünüz?", "Eserler tanıdık mıydı?", "Müze eski veya terk edilmiş miydi?", "Bir eserin sizinle bağlantısı var mıydı?"],
    variations: ["Müzede gezmek", "Müzede kaybolmak", "Eski eser görmek", "Müzede çalışmak"],
    psychology: "Müze, kişinin geçmiş deneyimlerini saklama, inceleme veya yeniden anlamlandırma sürecini sembolize edebilir.",
    jungian: "Jungcu açıdan müze, kişisel veya kolektif geçmişten kalan imgelerin bilinçte korunmuş bir arşivi gibi düşünülebilir.",
    cultural: "Müzeler kültürel hafıza ve geçmişin korunmasıyla ilişkilidir.",
    spiritual: "Spiritüel yaklaşımlarda müze geçmişten gelen derslerin fark edilmesi metaforu olabilir."
  }),

  richSymbol({
    slug: "kutuphane",
    title: "Kütüphane",
    theme: "bilgi, hafıza, araştırma, öğrenme ve bilinmeyen",
    positive: ["Bilgi", "Öğrenme", "Merak", "Farkındalık"],
    challenging: ["Bilgi yükü", "Kaybolma", "Aşırı düşünme", "Cevap arayışı"],
    context: ["Hangi kitabı arıyordunuz?", "Kütüphane sonsuz muydu?", "Bir kitap bulabildiniz mi?", "Kütüphane tanıdık mıydı?"],
    variations: ["Kütüphanede kitap aramak", "Kütüphanede kaybolmak", "Gizli kitap bulmak", "Kütüphanede çalışmak"],
    psychology: "Kütüphane, kişinin cevap arama, geçmiş bilgileri düzenleme veya kendisini anlamaya çalışma sürecini yansıtabilir.",
    jungian: "Jungcu açıdan kütüphane, bilinçdışının ve kolektif deneyimin geniş bir sembolik arşivi olarak düşünülebilir.",
    cultural: "Kütüphaneler bilgi, eğitim ve kültürel hafızanın merkezleridir.",
    spiritual: "Spiritüel yorumlarda kütüphane içsel bilgiye ve anlam arayışına açılan sembolik alan olabilir."
  }),

  richSymbol({
    slug: "ofis",
    title: "Ofis",
    theme: "iş, sorumluluk, performans, düzen ve sosyal roller",
    positive: ["Başarı", "Düzen", "Üretkenlik", "Sorumluluk"],
    challenging: ["Stres", "Performans baskısı", "Otorite", "Tükenmişlik"],
    context: ["Ofiste ne yapıyordunuz?", "Kimler vardı?", "İş yetişiyor muydu?", "Ofiste kendinizi nasıl hissediyordunuz?"],
    variations: ["Ofiste çalışmak", "Ofise geç kalmak", "Ofiste kaybolmak", "Boş ofis görmek"],
    psychology: "Ofis rüyaları iş yaşamının yarattığı sorumluluk, başarı ve performans duygularını yansıtabilir.",
    jungian: "Jungcu açıdan ofis, kişinin sosyal persona ve toplumsal işlevleriyle ilişkilendirilebilir.",
    cultural: "Ofis modern çalışma yaşamı, hiyerarşi ve profesyonel kimlikle bağlantılıdır.",
    spiritual: "Spiritüel yorumlarda ofis kişinin dış dünyadaki görevleri ile içsel ihtiyaçları arasındaki dengeyi düşündürebilir."
  }),

  richSymbol({
    slug: "fabrika",
    title: "Fabrika",
    theme: "üretim, tekrar, sistem, emek ve mekaniklik",
    positive: ["Üretkenlik", "Düzen", "İş birliği", "Sonuç alma"],
    challenging: ["Tekdüzelik", "Mekanikleşme", "Baskı", "Kontrol altında olma"],
    context: ["Fabrikada çalışıyor muydunuz?", "Makineler çalışıyor muydu?", "Üretim ne yapıyordu?", "Fabrika güvenli miydi?"],
    variations: ["Fabrikada çalışmak", "Fabrikanın durması", "Fabrikada kaybolmak", "Terk edilmiş fabrika"],
    psychology: "Fabrika, yaşamın belirli alanlarında tekrar, üretim ve rutin duygusunu temsil edebilir.",
    jungian: "Jungcu açıdan fabrika, psikolojik yaşamın bilinçli biçimde kontrol edilen ve tekrar eden yönlerinin sembolü olabilir.",
    cultural: "Fabrika sanayi, emek, üretim ve modern ekonomik sistemlerle ilişkilidir.",
    spiritual: "Spiritüel yaklaşımlarda fabrika otomatikleşmiş yaşam kalıplarını fark etme metaforu olabilir."
  }),

  richSymbol({
    slug: "hapishane",
    title: "Hapishane",
    theme: "kısıtlama, sınırlar, suçluluk, kontrol ve özgürlük",
    positive: ["İçsel disiplin", "Sınır farkındalığı", "Dönüşüm", "Sorumluluk"],
    challenging: ["Özgürlük kaybı", "Suçluluk", "Baskı", "Çaresizlik"],
    context: ["Hapishanede neden bulunuyordunuz?", "Kapı açık mıydı?", "Kaçmaya çalışıyor muydunuz?", "Kim sizi orada tutuyordu?"],
    variations: ["Hapishaneye girmek", "Hapishaneden kaçmak", "Hapishanede ziyaretçi olmak", "Hapishanede mahsur kalmak"],
    psychology: "Hapishane rüyası kişinin kendisini bir ilişki, görev, düşünce veya yaşam koşulu tarafından kısıtlanmış hissetmesiyle ilişkili olabilir.",
    jungian: "Jungcu açıdan hapishane, egonun kendi oluşturduğu psikolojik sınırlara hapsolmasını veya gölgede kalan içeriklerle yüzleşmesini sembolize edebilir.",
    cultural: "Hapishane hukuk, ceza, kontrol ve özgürlüğün sınırlandırılmasıyla ilişkilidir.",
    spiritual: "Spiritüel yorumlarda hapishane kişinin kendisini sınırlayan içsel kalıpların metaforu olabilir."
  }),

  richSymbol({
    slug: "mahkeme",
    title: "Mahkeme",
    theme: "yargılanma, karar, sorumluluk, adalet ve değerlendirme",
    positive: ["Adalet", "Sorumluluk", "Hesaplaşma", "Netlik"],
    challenging: ["Yargılanma korkusu", "Suçluluk", "Baskı", "Haksızlık"],
    context: ["Yargılanıyor muydunuz?", "Hakim ne söylüyordu?", "Suçlu muydunuz?", "Mahkeme sonucu neydi?"],
    variations: ["Mahkemede olmak", "Hakim görmek", "Duruşmaya girmek", "Mahkeme kararı beklemek"],
    psychology: "Mahkeme rüyası kişinin kendisini veya bir başkasını değerlendirdiği, karar vermeye çalıştığı dönemlerle bağlantılı olabilir.",
    jungian: "Jungcu açıdan mahkeme, egonun davranışlarıyla ilgili içsel bir değerlendirme veya vicdanla karşılaşma imgesi olabilir.",
    cultural: "Mahkeme adalet, toplumsal düzen ve sorumluluk kavramlarıyla bağlantılıdır.",
    spiritual: "Spiritüel yorumlarda mahkeme kişinin kendi davranışlarını dürüstçe değerlendirmesi metaforu olabilir."
  }),

  richSymbol({
    slug: "cami",
    title: "Cami",
    theme: "maneviyat, topluluk, huzur, ibadet ve aidiyet",
    positive: ["Huzur", "Aidiyet", "Maneviyat", "Topluluk"],
    challenging: ["Suçluluk", "Dini kaygı", "Yargılanma", "Aidiyet sorgusu"],
    context: ["Cami nasıl görünüyordu?", "İçeride kimler vardı?", "İbadet ediyor muydunuz?", "Rüyadaki duygu neydi?"],
    variations: ["Camiye girmek", "Camide namaz kılmak", "Cami aramak", "Boş cami görmek"],
    psychology: "Cami rüyasının anlamı kişinin dini, kültürel ve kişisel yaşamındaki deneyimlerinden güçlü biçimde etkilenebilir.",
    jungian: "Jungcu açıdan kutsal mekan imgeleri kişinin anlam, bütünlük ve içsel merkez arayışıyla sembolik olarak ilişkilendirilebilir.",
    cultural: "Cami İslam kültüründe ibadet ve topluluk yaşamının önemli mekanlarından biridir.",
    spiritual: "Spiritüel yaklaşımlarda cami huzur, yöneliş ve içsel anlam arayışının sembolü olabilir."
  }),

  richSymbol({
    slug: "kilise",
    title: "Kilise",
    theme: "kutsallık, vicdan, topluluk, anlam ve gelenek",
    positive: ["Huzur", "Anlam", "Topluluk", "İçsel arayış"],
    challenging: ["Suçluluk", "Yargılanma", "İnanç sorgusu", "Yabancılık"],
    context: ["Kilise tanıdık mıydı?", "İçeride kim vardı?", "Bir tören mi yapılıyordu?", "Kilisede kendinizi nasıl hissettiniz?"],
    variations: ["Kiliseye girmek", "Kilisede dua etmek", "Boş kilise görmek", "Kilise çanı duymak"],
    psychology: "Kilise imgesi kişinin anlam, ahlaki değerlendirme veya geçmişten gelen kültürel deneyimleriyle bağlantılı olabilir.",
    jungian: "Jungcu açıdan kutsal mekan, psikolojik bütünlük ve Self arayışının sembolik bir alanı olarak düşünülebilir.",
    cultural: "Kilise Hristiyan geleneklerinde ibadet, topluluk ve kutsal mekan kavramlarıyla ilişkilidir.",
    spiritual: "Spiritüel yorumlarda kilise içsel anlam ve kutsal olanla ilişki kurma metaforu olabilir."
  }),

  richSymbol({
    slug: "tapinak",
    title: "Tapınak",
    theme: "kutsallık, içsel merkez, arayış ve anlam",
    positive: ["Anlam", "Huzur", "Arayış", "Bütünlük"],
    challenging: ["Gizem", "Yabancılık", "Aşırı idealizasyon", "Yargılanma"],
    context: ["Tapınak neredeydi?", "İçeri girebildiniz mi?", "Orada ne arıyordunuz?", "Mekan size tanıdık geliyor muydu?"],
    variations: ["Tapınağa girmek", "Tapınak aramak", "Terk edilmiş tapınak", "Tapınakta bir nesne bulmak"],
    psychology: "Tapınak, kişinin hayatında önemli ve derin bir anlam arayışını veya kendisi için özel bir alan yaratma ihtiyacını yansıtabilir.",
    jungian: "Jungcu açıdan tapınak, Self'in merkezi ve bütünlük arayışının güçlü bir sembolik mekanı olarak düşünülebilir.",
    cultural: "Tapınaklar birçok kültürde kutsal alan, ritüel ve topluluk yaşamıyla ilişkilidir.",
    spiritual: "Spiritüel yaklaşımlarda tapınak içsel merkeze dönüş ve kutsal olanla temas metaforudur."
  }),

  richSymbol({
    slug: "can",
    title: "Çan",
    theme: "uyarı, çağrı, zaman, duyuru ve farkındalık",
    positive: ["Uyanış", "Farkındalık", "Çağrı", "Duyuru"],
    challenging: ["Alarm", "Baskı", "Korku", "Rahatsız edici tekrar"],
    context: ["Çanı kim çalıyordu?", "Ses yüksek miydi?", "Çan ne zaman çaldı?", "Çan size ne hissettirdi?"],
    variations: ["Çan sesi duymak", "Çan çalmak", "Çanın kırılması", "Uzakta çan sesi"],
    psychology: "Çan sesi rüyada kişinin dikkatini çekmek isteyen bir konuya veya önemli bir değişimin farkına varma ihtiyacına işaret eden kişisel bir imge olabilir.",
    jungian: "Jungcu açıdan çan, bilinçdışından bilince yönelen bir çağrı veya uyarı olarak sembolik biçimde düşünülebilir.",
    cultural: "Çanlar dini törenler, zaman işaretleri ve toplumsal duyurularla ilişkilendirilmiştir.",
    spiritual: "Spiritüel yorumlarda çan sesi uyanış ve farkındalık çağrısı olarak yorumlanabilir."
  }),

  richSymbol({
    slug: "saat_kulesi",
    title: "Saat Kulesi",
    theme: "zaman, bekleme, yaşam döngüsü ve toplumsal ritim",
    positive: ["Zaman farkındalığı", "Düzen", "Planlama", "Olgunlaşma"],
    challenging: ["Geç kalma", "Zaman baskısı", "Yaşlanma kaygısı", "Kaçırılmış fırsat"],
    context: ["Saat kaçtı?", "Kule çalışıyor muydu?", "Saati kim izliyordu?", "Zaman hızlı mı geçiyordu?"],
    variations: ["Saat kulesi görmek", "Saat kulesine çıkmak", "Saatin durması", "Saat kulesinin çalması"],
    psychology: "Saat kulesi, kişinin zamanın geçişi, son tarihler veya hayatındaki önemli dönüm noktaları üzerine düşünmesini yansıtabilir.",
    jungian: "Jungcu açıdan saat kulesi bireysel yaşamın daha geniş zaman ve yaşam döngüleri içindeki konumunu sembolize edebilir.",
    cultural: "Saat kuleleri şehirlerin ortak zamanını ve kamusal yaşamın ritmini temsil eder.",
    spiritual: "Spiritüel yaklaşımlarda saat kulesi yaşamın geçiciliği ve zamanın değerini hatırlatan bir sembol olabilir."
  }),

  richSymbol({
    slug: "kule",
    title: "Kule",
    theme: "yükseklik, güç, izolasyon, perspektif ve hedef",
    positive: ["Perspektif", "Başarı", "Yükselme", "Güç"],
    challenging: ["İzolasyon", "Düşme korkusu", "Aşırı hırs", "Ulaşılmazlık"],
    context: ["Kuleye çıkıyor muydunuz?", "Kule ne kadar yüksekti?", "Tepeden ne görüyordunuz?", "Kule güvenli miydi?"],
    variations: ["Kuleye çıkmak", "Kuleden düşmek", "Uzakta kule görmek", "Kulenin yıkılması"],
    psychology: "Kule kişinin daha geniş bir perspektif kazanma arzusunu veya güç ve statüyle ilgili deneyimlerini temsil edebilir.",
    jungian: "Jungcu açıdan kule, bilincin yükselmesini ve dünyaya yukarıdan bakma çabasını sembolize edebilir; yıkılması ise aşırı kurulmuş bir yapının sorgulanmasını çağrıştırabilir.",
    cultural: "Kuleler güç, savunma, statü ve yüksek perspektifle ilişkilidir.",
    spiritual: "Spiritüel yorumlarda kule yükselme ve daha geniş farkındalık metaforu olabilir."
  }),

  richSymbol({
    slug: "kale",
    title: "Kale",
    theme: "savunma, sınırlar, güç, güvenlik ve geçmiş",
    positive: ["Korunma", "Güç", "Dayanıklılık", "Sınır koyma"],
    challenging: ["Kapanma", "Savunmacılık", "Yalnızlık", "Katılık"],
    context: ["Kaleye girebildiniz mi?", "Kale korunuyor muydu?", "İçeride kim vardı?", "Kale güvenli mi yoksa tehdit edici miydi?"],
    variations: ["Kaleye girmek", "Kaleyi savunmak", "Kalenin kuşatılması", "Terk edilmiş kale"],
    psychology: "Kale, kişinin kendisini korumak için oluşturduğu psikolojik sınırları veya güçlü savunma mekanizmalarını temsil edebilir.",
    jungian: "Jungcu açıdan kale egonun kendisini bilinçdışı içeriklerden koruyan güçlü sınırlarının sembolü olabilir.",
    cultural: "Kaleler tarih boyunca savunma, güç ve siyasi otoriteyle ilişkilendirilmiştir.",
    spiritual: "Spiritüel yorumlarda kale içsel merkez ve sınırların korunması metaforu olabilir."
  }),

  richSymbol({
    slug: "saray",
    title: "Saray",
    theme: "güç, statü, ihtişam, arzu ve içsel değer",
    positive: ["Başarı", "Bolluk", "Özgüven", "Potansiyel"],
    challenging: ["Aşırı ego", "Statü baskısı", "Yabancılaşma", "Gerçeklikten uzaklaşma"],
    context: ["Saray kimin?", "İçeride kim vardı?", "Sarayda kendinizi nasıl hissediyordunuz?", "Saray görkemli mi yoksa boş muydu?"],
    variations: ["Saraya girmek", "Sarayda yaşamak", "Sarayın kaybolması", "Terk edilmiş saray"],
    psychology: "Saray kişinin kendisi hakkındaki değer algısını, başarı beklentilerini veya ulaşmak istediği statüyü yansıtabilir.",
    jungian: "Jungcu açıdan saray, psişenin geniş ve zengin iç yapısının sembolik bir temsili olabilir; ancak aşırı ihtişam persona ile gerçek benlik arasındaki farkı da düşündürebilir.",
    cultural: "Saraylar güç, yönetim, zenginlik ve tarihsel statüyle ilişkilidir.",
    spiritual: "Spiritüel yorumlarda saray içsel zenginlik veya egosal ihtişam arasındaki ayrımı düşündüren bir sembol olabilir."
  }),

  richSymbol({
    slug: "heykel",
    title: "Heykel",
    theme: "kalıcılık, kimlik, donmuşluk, hatıra ve ideal",
    positive: ["Kalıcılık", "Hatırlanma", "İdeal", "Kimlik"],
    challenging: ["Donmuşluk", "Değişememe", "İdealleştirme", "Duygusal uzaklık"],
    context: ["Heykel kimi temsil ediyordu?", "Heykel canlı gibi miydi?", "Heykele dokundunuz mu?", "Heykel kırıldı mı?"],
    variations: ["Heykel görmek", "Heykel yapmak", "Heykelin canlanması", "Heykelin kırılması"],
    psychology: "Heykel, kişinin kendisi veya başkaları hakkında değişmez kabul ettiği bir imgeyi temsil edebilir.",
    jungian: "Jungcu açıdan heykel, psişede sabitlenmiş bir arketipsel imgenin veya idealize edilmiş kişiliğin sembolü olarak düşünülebilir.",
    cultural: "Heykeller hafıza, sanat, tarih ve kişilerin kamusal temsiliyle ilişkilidir.",
    spiritual: "Spiritüel yorumlarda heykel biçimin ötesindeki anlamı arama ve sabit imgeleri sorgulama metaforu olabilir."
  }),

  richSymbol({
    slug: "resim",
    title: "Resim",
    theme: "ifade, hafıza, perspektif, yaratıcılık ve temsil",
    positive: ["Yaratıcılık", "Kendini ifade", "Hafıza", "Farkındalık"],
    challenging: ["Yanılsama", "Geçmişe takılma", "Kendini yanlış görme", "İdealizasyon"],
    context: ["Resimde ne vardı?", "Resmi kim yapmıştı?", "Resimde kendinizi gördünüz mü?", "Resim değişiyor muydu?"],
    variations: ["Resim yapmak", "Eski resim görmek", "Resmin içine girmek", "Resmin değişmesi"],
    psychology: "Resim, kişinin kendisini veya geçmişini belirli bir perspektiften temsil etme biçimini sembolize edebilir.",
    jungian: "Jungcu açıdan resim, bilinçdışının görsel bir anlatımı gibi düşünülebilir; özellikle rüyada değişen resimler dikkat çekicidir.",
    cultural: "Resim sanat, hafıza ve kişisel veya toplumsal temsil biçimlerinden biridir.",
    spiritual: "Spiritüel yaklaşımlarda resim içsel dünyanın dışa yansıması olarak yorumlanabilir."
  }),

  richSymbol({
    slug: "fotograf",
    title: "Fotoğraf",
    theme: "hafıza, geçmiş, kimlik ve anı",
    positive: ["Hatırlama", "Bağ", "Hafıza", "Kimlik"],
    challenging: ["Nostalji", "Geçmişe bağlılık", "Kayıp", "Donmuş anı"],
    context: ["Fotoğrafta kim vardı?", "Fotoğraf eski miydi?", "Fotoğraf değişti mi?", "Fotoğrafa bakınca ne hissettiniz?"],
    variations: ["Fotoğraf çekmek", "Eski fotoğraf bulmak", "Fotoğrafta kendini görmek", "Fotoğrafın kaybolması"],
    psychology: "Fotoğraf rüyası geçmişteki bir deneyimin veya kişinin zihinde yeniden etkinleşmesini temsil edebilir.",
    jungian: "Jungcu açıdan fotoğraf, geçmişteki bir persona veya kimlik durumunun zihinsel imgesini temsil edebilir.",
    cultural: "Fotoğraf kişisel ve toplumsal hafızanın önemli araçlarından biridir.",
    spiritual: "Spiritüel yorumlarda fotoğraf geçmişle bağ kurma ve anıların anlamını yeniden değerlendirme sembolü olabilir."
  }),

  richSymbol({
    slug: "kamera",
    title: "Kamera",
    theme: "gözlem, mahremiyet, kayıt, bakış ve farkındalık",
    positive: ["Gözlem", "Farkındalık", "Hafıza", "Perspektif"],
    challenging: ["İzlenme", "Mahremiyet kaygısı", "Yargılanma", "Aşırı kontrol"],
    context: ["Kamera kimin elindeydi?", "Sizi mi çekiyordu?", "Ne kaydediliyordu?", "Kamerayı fark ettiğinizde ne hissettiniz?"],
    variations: ["Kamerayla çekim yapmak", "Kameraya yakalanmak", "Güvenlik kamerası görmek", "Kamera satın almak"],
    psychology: "Kamera, kişinin kendisini dışarıdan gözlemleme veya başkalarının bakışı altında hissetme deneyimini yansıtabilir.",
    jungian: "Jungcu açıdan kamera, egonun kendi davranışlarını gözlemlemesi veya persona ile ilgili farkındalık kazanmasıyla ilişkilendirilebilir.",
    cultural: "Kameralar kayıt, medya, gözetim ve hatırlama teknolojileriyle ilişkilidir.",
    spiritual: "Spiritüel yorumlarda kamera kendini gözlemleme ve bilinçli farkındalık metaforu olabilir."
  }),

];