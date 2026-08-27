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
    slug: "olmus_birini_gormek",
    title: "Ölmüş Birini Görmek",
    shortDescription:
      "Rüyada ölmüş birini görmek, özlemden tamamlanmamış duygulara, hatıralardan kişinin bugün yaşadığı bir döneme kadar pek çok farklı şeyi harekete geçirebilir. Rüyadaki karşılaşmanın nasıl hissettirdiği özellikle önemlidir.",
    positive: ["Hatırlama", "Bağ kurma", "Kapanış", "Duygusal bütünleşme"],
    challenging: ["Özlem", "Yas", "Pişmanlık", "Tamamlanmamışlık"],
    context: [
      "Ölmüş kişi sana ne söylüyordu?",
      "Onu görünce ne hissettin?",
      "Sana dokundu mu veya sarıldı mı?",
      "Rüyadaki hali gerçekte hatırladığın haline benziyor muydu?",
    ],
    variations: [
      "Ölmüş biriyle konuşmak",
      "Ölmüş birine sarılmak",
      "Ölmüş birinin eve gelmesi",
      "Ölmüş birinin yeniden öldüğünü görmek",
    ],
    psychology:
      "Ölmüş kişilerin rüyalarda görülmesi yas, özlem, anılar ve kişinin geçmiş ilişkileriyle bugün arasında kurduğu bağlantılarla ilişkili olabilir.",
    jungian:
      "Jungcu açıdan ölmüş bir figür, yalnızca gerçek kişiyi değil, onun kişide temsil ettiği özellikleri veya geçmişteki bir benlik dönemini de sembolize edebilir.",
    islamic:
      "İslami geleneklerde vefat etmiş kişilerin rüyada görülmesi farklı yorumlara konu olmuştur; bu rüyalar kesin biçimde mesaj veya gelecek bilgisi olarak kabul edilmemelidir.",
    christian:
      "Hristiyan geleneklerinde ölmüş kişilerle ilgili rüyalar yas, hatırlama ve manevi bağ duyguları çerçevesinde değerlendirilebilir.",
    jewish:
      "Yahudi geleneklerinde vefat etmiş kişilerin hatırlanması ve rüyalardaki görünümü tarihsel ve kişisel bağlama göre farklı şekillerde ele alınabilir.",
    eastern:
      "Doğu yaklaşımlarında ölmüş birini görmek, bağlanma, hatıra ve geçicilik deneyimleri üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yorumlarda bu tür rüyalar bazen kişinin geçmişle kurduğu ilişkinin yeniden görünür olması şeklinde ele alınır; bunun gerçek bir mesaj olduğunu varsaymak gerekmez.",
    assessment:
      "Belki rüyadaki kişi sana bir şey söylemeye gelmedi. Belki de sende bıraktığı bir duygu yeniden görünür hale geldi. Rüyada onun yanında kendini nasıl hissettiğin ipucu olabilir.",
  },




  {
    slug: "aglamak",
    title: "Ağlamak",
    shortDescription:
      "Rüyada ağlamak, bastırılmış bir duygunun kendine alan bulması kadar gerçek hayatta ifade edilemeyen bir yükün rüya içinde boşalmasıyla da ilişkili olabilir.",
    positive: ["Duygusal boşalma", "Rahatlama", "Kendini fark etmek", "Kabul"],
    challenging: ["Üzüntü", "Yas", "Yalnızlık", "Bastırılmış duygu"],
    context: [
      "Neden ağlıyordun?",
      "Kimsenin yanında mı yoksa yalnız mı ağlıyordun?",
      "Ağladıktan sonra rahatladın mı?",
      "Rüyadaki diğer insanlar ağladığını fark etti mi?",
    ],
    variations: [
      "Sessizce ağlamak",
      "Hıçkırarak ağlamak",
      "Sevinçten ağlamak",
      "Birinin yanında ağlamak",
    ],
    psychology:
      "Ağlama rüyaları yoğun duyguların işlenmesi, stres, yas veya gündelik hayatta ifade edilemeyen duygularla bağlantılı olabilir.",
    jungian:
      "Jungcu açıdan ağlamak, egonun kontrol ettiği duygusal malzemenin bilinçdışından yüzeye çıkması olarak düşünülebilir.",
    islamic:
      "İslami geleneklerde ağlama rüyaları bağlama göre farklı şekillerde yorumlanabilir; ağlamanın kendisi otomatik olarak iyi veya kötü kabul edilmemelidir.",
    christian:
      "Hristiyan sembolizminde gözyaşı yas kadar arınma, teslimiyet ve teselli temalarını da taşıyabilir.",
    jewish:
      "Yahudi geleneklerinde gözyaşı yas, dua ve duygusal ifade bağlamlarında ele alınabilir.",
    eastern:
      "Doğu yaklaşımlarında ağlamak, duyguyu bastırmak yerine onun gelip geçmesine izin verme deneyimi üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yorumlarda gözyaşı bazen duygusal arınma ve bırakma metaforu olarak görülür.",
    assessment:
      "Rüyada ağladıktan sonra nasıl uyandığını hatırla. İçinde bir ağırlık mı kaldı, yoksa garip bir hafiflik mi? Bazen rüyanın asıl mesajı gözyaşından sonra gelir.",
  },

  {
    slug: "bagirmak",
    title: "Bağırmak",
    shortDescription:
      "Rüyada bağırmak, duyulma ihtiyacı, öfke, çaresizlik veya gündelik hayatta söylenemeyen bir şeyin rüyada daha yüksek sesle ortaya çıkmasıyla bağlantılı olabilir.",
    positive: ["Kendini ifade etmek", "Sınır koymak", "Farkındalık", "Duyguyu kabul etmek"],
    challenging: ["Öfke", "Çaresizlik", "Duyulmama", "Gerilim"],
    context: [
      "Kime bağırıyordun?",
      "Seni duyuyorlar mıydı?",
      "Sesin çıkıyor muydu?",
      "Bağırınca rahatladın mı?",
    ],
    variations: [
      "Sesinin çıkmaması",
      "Birine bağırmak",
      "Yardım diye bağırmak",
      "Öfkeden bağırmak",
    ],
    psychology:
      "Bağırma rüyaları ifade edilemeyen öfke, duyulma ihtiyacı, stres veya çaresizlik deneyimleriyle ilişkili olabilir.",
    jungian:
      "Jungcu açıdan bağırmak, bilincin yeterince ifade edemediği bir içeriğin rüyada güçlü biçimde kendini göstermesi olarak düşünülebilir.",
    islamic:
      "İslami yorumlarda bağırma ve ses farklı kaynaklarda farklı anlamlarla ele alınabilir; yorum rüyanın bütününden bağımsız yapılmamalıdır.",
    christian:
      "Hristiyan sembolizminde haykırış yardım isteme, öfke, dua veya içsel mücadele gibi farklı anlamlar taşıyabilir.",
    jewish:
      "Yahudi geleneklerinde ses ve haykırış dua, itiraz ve duygusal ifade bağlamlarında ele alınabilir.",
    eastern:
      "Doğu yaklaşımlarında bağırma, bastırılan duygunun zihinsel deneyimde güçlü biçimde ortaya çıkması üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yorumlarda bağırmak, kişinin kendi sesini yeniden bulması veya uzun süredir susturduğu bir yönü fark etmesi metaforu olabilir.",
    assessment:
      "Rüyada sesinin çıkmaması özellikle dikkat çekici olabilir. Gerçek hayatında söylemek isteyip de bir türlü söyleyemediğin bir şey var mı?",
  },




  {
    slug: "kavga_etmek",
    title: "Kavga Etmek",
    shortDescription:
      "Rüyada kavga etmek, gerçek hayattaki bir çatışmanın doğrudan yansıması olabileceği gibi kişinin kendi içinde birbirine zıt iki yönün mücadelesini de gösterebilir.",
    positive: ["Sınır koymak", "Kendini ifade etmek", "Çatışmayı fark etmek", "Değişim"],
    challenging: ["Öfke", "Gerilim", "Çatışma", "Bastırılmış duygu"],
    context: [
      "Kiminle kavga ediyordun?",
      "Kavgayı sen mi başlattın?",
      "Kazanıyor muydun?",
      "Kavga bittikten sonra ne hissettin?",
    ],
    variations: [
      "Sevgiliyle kavga etmek",
      "Aileyle kavga etmek",
      "Tanımadığın biriyle kavga etmek",
      "Kavgada yenilmek",
    ],
    psychology:
      "Kavga rüyaları öfke, sınır ihlali, ilişkisel gerilim veya ifade edilmemiş çatışmalarla ilişkili olabilir.",
    jungian:
      "Jungcu açıdan rüyadaki rakip figür bazen kişinin kendi reddettiği veya kabul etmekte zorlandığı bir yönünü temsil edebilir.",
    islamic:
      "İslami yorumlarda kavga ve çatışma farklı kaynaklarda farklı biçimlerde ele alınabilir; rüya bağlamı önemlidir.",
    christian:
      "Hristiyan yaklaşımlarında çatışma öfke, bağışlama, sınır ve içsel mücadele temaları üzerinden değerlendirilebilir.",
    jewish:
      "Yahudi geleneklerinde tartışma ve çatışma, farklı görüşlerin karşılaşması ve kişinin kendi iç muhasebesiyle de ilişkilendirilebilir.",
    eastern:
      "Doğu yaklaşımlarında kavga, zihnin karşıtlık üretmesi ve çatışmaya tutunması üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yorumlarda kavga, kişinin kabul etmek istemediği bir yönüyle yüzleşmesinin sembolü olabilir.",
    assessment:
      "Rüyadaki kişi gerçekten o kişi mi, yoksa sende onun temsil ettiği bir özellik mi? Kavganın kiminle olduğundan çok neden çıktığına bak.",
  },

  {
    slug: "aldatilmak",
    title: "Aldatılmak",
    shortDescription:
      "Rüyada aldatılmak, gerçek hayatta partnerin gerçekten aldattığı anlamına gelmez. Güven, terk edilme korkusu, değersizlik hissi veya ilişkideki bir belirsizlik rüyada ihanet biçiminde ortaya çıkabilir.",
    positive: ["Güveni değerlendirmek", "Farkındalık", "Sınırları görmek", "İletişim"],
    challenging: ["Güvensizlik", "Kıskançlık", "Terk edilme korkusu", "Değersizlik"],
    context: [
      "Seni kim aldatıyordu?",
      "Aldatıldığını nasıl öğrendin?",
      "Rüyadaki baskın duygu neydi?",
      "Partnerin dışında başka kimler vardı?",
    ],
    variations: [
      "Sevgilinin aldattığını görmek",
      "Eşinin aldattığını görmek",
      "Aldatıldığını öğrenmek",
      "Aldatılma korkusu yaşamak",
    ],
    psychology:
      "Aldatılma rüyaları güven, bağlanma, kıskançlık, geçmiş deneyimler ve ilişkideki belirsizliklerle bağlantılı olabilir.",
    jungian:
      "Jungcu açıdan ihanet teması, kişinin ilişkideki persona, gölge veya kendi ihtiyaçlarıyla kurduğu ilişkinin de sembolik bir ifadesi olabilir.",
    islamic:
      "İslami geleneklerde ihanet ve aldatılma temaları farklı biçimlerde yorumlanabilir; rüyadan gerçek hayattaki bir kişi hakkında kesin sonuç çıkarmak doğru değildir.",
    christian:
      "Hristiyan sembolizminde ihanet güven, sadakat, bağışlama ve ilişki temalarıyla ilişkilendirilebilir.",
    jewish:
      "Yahudi geleneklerinde sadakat ve ihanet güçlü etik ve ilişkisel temalar olarak ele alınır.",
    eastern:
      "Doğu yaklaşımlarında kıskançlık ve kaybetme korkusu kişinin bağlanma biçimleri üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yorumlarda aldatılmak, kişinin kendi değerini başkasının davranışından bağımsız görmeyi öğrenmesiyle ilişkilendirilebilir.",
    assessment:
      "Bu rüya partnerin hakkında bir kanıt sunmuyor. Ama senin içinde güvenle ilgili bir yere dokunuyor olabilir. Rüyadaki asıl yara nerede?",
  },

  {
    slug: "terk_edilmek",
    title: "Terk Edilmek",
    shortDescription:
      "Rüyada terk edilmek, yalnız kalma korkusunu, bir ilişkinin değişmesini veya kişinin kendi hayatında kaybetmekten çekindiği bir şeyi görünür hale getirebilir.",
    positive: ["Bağımsızlık", "Kendini tanımak", "Farkındalık", "Yeni başlangıç"],
    challenging: ["Yalnızlık", "Terk edilme korkusu", "Güvensizlik", "Kayıp"],
    context: [
      "Seni kim terk ediyordu?",
      "Terk edildiğinde ne hissettin?",
      "Peşinden gittin mi?",
      "Rüyada yalnız mı kaldın?",
    ],
    variations: [
      "Sevgilinin terk etmesi",
      "Ailenin terk etmesi",
      "Arkadaşın tarafından terk edilmek",
      "Terk edilip geri dönmek",
    ],
    psychology:
      "Terk edilme rüyaları bağlanma, yalnızlık, kayıp korkusu ve kişinin geçmiş ilişkilerindeki deneyimlerle ilişkili olabilir.",
    jungian:
      "Jungcu açıdan terk edilme, dışarıdaki bir ilişkinin yanı sıra kişinin kendi bir parçasından uzaklaşmasını veya bastırılmış bir yönüyle bağını kaybetmesini de simgeleyebilir.",
    islamic:
      "İslami yorumlarda ayrılık ve terk edilme farklı kaynaklarda farklı biçimlerde ele alınabilir; rüyadan kesin gelecek sonucu çıkarılmamalıdır.",
    christian:
      "Hristiyan yaklaşımlarında ayrılık yalnızlık kadar bağışlama, güven ve yeniden bağ kurma temalarını da taşıyabilir.",
    jewish:
      "Yahudi geleneklerinde ayrılık ve yalnızlık kişisel, toplumsal ve ilişkisel bağlamlarda ele alınabilir.",
    eastern:
      "Doğu yaklaşımlarında terk edilme korkusu bağlanma ve kaybetme deneyimleri üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yorumlarda terk edilmek bazen kişinin dışarıdaki bir bağdan bağımsız olarak kendi iç desteğini bulması metaforu olarak görülür.",
    assessment:
      "Rüyada terk edilen kişi sen misin, yoksa hayatında geride bırakmak üzere olduğun eski bir tarafın mı? Bu ayrım rüyayı bambaşka bir yere götürebilir.",
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

export const batchT = symbols.map(rich);
