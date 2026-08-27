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
    slug: "dis_dokulmesi",
    title: "Diş Dökülmesi",
    shortDescription:
      "Rüyada dişlerin dökülmesi, kayıp, değişim, görünüş, güç veya kontrol duygusuyla ilgili yoğun bir deneyimi çağrıştırabilir. Rüyadaki korku, utanç ya da rahatlama hissi anlamın yönünü belirgin biçimde değiştirebilir.",
    positive: ["Değişimi fark etmek", "Yenilenme", "Kendini yeniden değerlendirmek", "Bir dönemi kapatmak"],
    challenging: ["Kayıp korkusu", "Güvensizlik", "Kontrol kaybı", "Yaşlanma veya görünüş kaygısı"],
    context: ["Dişler kendiliğinden mi dökülüyordu?", "Ağrı veya kan var mıydı?", "Dişlerin dökülmesini saklamaya mı çalışıyordunuz?", "Döküldükten sonra ne hissettiniz?"],
    variations: ["Dişlerin tek tek dökülmesi", "Bütün dişlerin dökülmesi", "Diş dökülürken kan görmek", "Dökülen dişi elinde tutmak"],
    psychology:
      "Diş dökülmesi rüyaları psikolojik açıdan beden algısı, stres, kayıp korkusu ve kontrol deneyimleriyle ilişkilendirilebilir; ancak tek bir psikolojik açıklamaya indirgenemez.",
    jungian:
      "Jungcu açıdan dişlerin dökülmesi, kişinin eski bir tutunma biçiminin değişmesi veya benlik algısındaki bir dönüşümün sembolik ifadesi olarak düşünülebilir.",
    islamic:
      "İslami rüya yorum geleneklerinde dişler farklı dönem ve kaynaklarda aile, yaşam ve ilişkilerle bağlantılı sembolik anlamlarla ele alınmıştır. Bu yorumlar kesin bir gelecek bilgisi olarak değerlendirilmemelidir.",
    christian:
      "Hristiyan geleneklerinde beden ve diş imgeleri farklı metinsel ve kültürel bağlamlarda ele alınabilir; tek bir evrensel rüya anlamı bulunmaz.",
    jewish:
      "Yahudi yorum geleneklerinde beden imgelerinin anlamı metinsel, tarihsel ve kişisel bağlama göre değişebilir.",
    eastern:
      "Budist ve Doğu yaklaşımlarında dişlerin dökülmesi değişim, bedensel geçicilik ve kişinin deneyimine tutunma biçimleri üzerinden düşünülebilir.",
    spiritual:
      "Modern spiritüel yaklaşımlarda diş dökülmesi eski bir dönemin bırakılması veya yeni bir benlik algısına geçiş metaforu olarak yorumlanabilir.",
    assessment:
      "Bu rüyada en önemli ipucu dişlerin kendisinden çok, onları kaybederken yaşadığınız duygudur. Korku, utanç, rahatlama veya şaşkınlık rüyanın farklı bir içeriğe işaret ediyor olabilir.",
  },

  {
    slug: "sac_dokulmesi",
    title: "Saç Dökülmesi",
    shortDescription:
      "Rüyada saçların dökülmesi, kişinin kendilik algısı, çekicilik, güç, yaşlanma veya hayatındaki bir değişimle ilgili hassasiyetleri düşündürebilir.",
    positive: ["Kendini yeniden tanımlamak", "Değişimi kabul etmek", "Eski imajı bırakmak", "Farkındalık"],
    challenging: ["Güvensizlik", "Kaybetme korkusu", "Kontrol kaybı", "Kendilik algısında sarsılma"],
    context: ["Saçlarınız gerçekten dökülüyor muydu?", "Dökülmeyi fark ettiğinizde korktunuz mu?", "Başka biri saçınız hakkında yorum yaptı mı?", "Aynaya baktınız mı?"],
    variations: ["Bir tutam saçın dökülmesi", "Saçın tamamen dökülmesi", "Aynada saç dökülmesini görmek", "Dökülen saçı elinde görmek"],
    psychology:
      "Saç dökülmesi imgesi beden algısı, özgüven, değişim ve kontrol duygusuyla ilişkili kişisel deneyimleri yansıtabilir.",
    jungian:
      "Jungcu açıdan saç, persona ve benlik algısıyla ilişkili sembolik bir malzeme olarak düşünülebilir; dökülmesi eski bir kimlik biçiminin çözülmesini çağrıştırabilir.",
    islamic:
      "İslami geleneklerde saç sembolizmi farklı kaynaklarda farklı biçimlerde yorumlanabilir. Geleneksel yorumlar kişiye kesin bir hüküm veya gelecek bilgisi sunmaz.",
    christian:
      "Hristiyan sembolizminde saç güç, kimlik ve adanmışlık gibi farklı temalarla ilişkilendirilebilir; rüya yorumu bağlama göre değişir.",
    jewish:
      "Yahudi geleneklerinde saçla ilgili sembolik anlamlar tarihsel ve metinsel bağlama göre farklılaşabilir.",
    eastern:
      "Doğu yaklaşımlarında beden ve görünüşün değişmesi, geçicilik ve benliğe ilişkin tutunma üzerinden ele alınabilir.",
    spiritual:
      "Spiritüel yorumlarda saç dökülmesi eski kimliğin veya yaşam döneminin geride bırakılması şeklinde sembolik olarak görülebilir.",
    assessment:
      "Rüyadaki saç dökülmesinden çok, bunun sizde yarattığı duygu belirleyicidir. Kaybetme korkusu ile hafifleme hissi aynı sembolü tamamen farklı bir yere taşıyabilir.",
  },

  {
    slug: "ciplak_kalmak",
    title: "Çıplak Kalmak",
    shortDescription:
      "Rüyada çıplak kalmak, saklanan bir yönün görünür hale gelmesi, savunmasızlık veya başkalarının bakışı karşısında kendini nasıl hissettiğinle ilişkili olabilir.",
    positive: ["Kendin olabilmek", "Özgürleşme", "Maskelerin kalkması", "Kendini kabul"],
    challenging: ["Savunmasızlık", "Utanç", "Yargılanma korkusu", "Mahremiyet kaygısı"],
    context: ["Çıplak olduğunuzu kimler görüyordu?", "Utanıyor muydunuz?", "Kimse fark etmiyor muydu?", "Giyinmeye mi çalışıyordunuz?"],
    variations: ["Kalabalık içinde çıplak olmak", "Okulda çıplak kalmak", "İş yerinde çıplak olmak", "Çıplaklıktan utanmamak"],
    psychology:
      "Çıplaklık rüyaları sosyal değerlendirilme, mahremiyet, özgüven ve kişinin kendisini başkalarına ne ölçüde açtığıyla bağlantılı olabilir.",
    jungian:
      "Jungcu açıdan çıplaklık persona ile gerçek benlik arasındaki farkın görünür hale gelmesini veya kişinin savunmalarının zayıflamasını sembolize edebilir.",
    islamic:
      "İslami yorum geleneklerinde çıplaklık farklı bağlamlarda farklı anlamlar kazanabilir. Geleneksel yorumları kişisel ve kesin bir hüküm olarak almak doğru değildir.",
    christian:
      "Hristiyan sembolizminde çıplaklık masumiyet, utanç, kırılganlık ve görünürlük gibi farklı temalarla ilişkilendirilebilir.",
    jewish:
      "Yahudi geleneklerinde çıplaklık imgeleri mahremiyet, kırılganlık ve görünürlük bağlamlarında ele alınabilir.",
    eastern:
      "Doğu yaklaşımlarında çıplaklık, benlik imgesine ve başkalarının yargısına tutunmanın sorgulanması üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yaklaşımlarda çıplaklık, maskelerden arınma ve daha sahici bir benliğe yaklaşma metaforu olarak görülebilir.",
    assessment:
      "Bu rüyada kritik soru 'çıplak olmak' değil, başkalarının sizi çıplak görmesinin sizde ne uyandırdığıdır.",
  },


  {
    slug: "bogulmak",
    title: "Boğulmak",
    shortDescription:
      "Rüyada boğulmak, yoğun duyguların altında kalma, nefes alacak alan bulamama veya kişinin hayatında kendisini aşırı zorlayan bir durumla karşılaşmasıyla ilişkilendirilebilir.",
    positive: ["Duyguları fark etmek", "Yardım ihtiyacını görmek", "Sınırları tanımak", "Yükten kurtulma"],
    challenging: ["Bunalmışlık", "Kaygı", "Çaresizlik", "Kontrol kaybı"],
    context: ["Suda mı boğuluyordunuz?", "Birisi sizi kurtardı mı?", "Yüzmeye çalışıyor muydunuz?", "Boğulurken hangi duygu baskındı?"],
    variations: ["Denizde boğulmak", "Havuzda boğulmak", "Birini boğulurken görmek", "Boğulmaktan son anda kurtulmak"],
    psychology:
      "Boğulma imgeleri yoğun stres, bunalmışlık, çaresizlik veya kişinin duygusal kapasitesini aşan bir durumla ilgili deneyimlerle bağlantılı olabilir.",
    jungian:
      "Jungcu açıdan su bilinçdışının güçlü bir sembolü olduğundan boğulma, bilinçdışı duyguların ego üzerinde baskın hale gelmesini düşündürebilir.",
    islamic:
      "İslami geleneklerde su ve boğulma farklı kaynaklarda farklı sembolik anlamlarla yorumlanmıştır; bunlar kişiye özel kesin kehanetler değildir.",
    christian:
      "Hristiyan sembolizminde su ölüm, arınma ve yeniden doğuş gibi farklı temaları taşıyabilir.",
    jewish:
      "Yahudi geleneklerinde su imgeleri yaşam, tehlike, arınma ve geçiş gibi farklı bağlamlarda ele alınabilir.",
    eastern:
      "Doğu yaklaşımlarında boğulma, zihinsel ve duygusal süreçlerin kişiyi sürüklemesi üzerinden düşünülebilir.",
    spiritual:
      "Spiritüel yorumlarda boğulmak yoğun bir dönemin içinden geçmek ve eski bir halin çözülmesi metaforu olarak görülebilir.",
    assessment:
      "Bu rüyada suyun kendisinden önce 'nefes alamamak' deneyimine bakmak önemli olabilir. Hayatınızda şu sıralar size nefes alacak alan bırakmayan bir şey var mı?",
  },
];

const newSymbols: CustomSymbol[] = [

  // yukarıdaki 45 sembol
  ...[] as CustomSymbol[],
];

const allSymbols = [
  ...symbols,
  ...newSymbols,
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

export const batchP = allSymbols.map(rich);
