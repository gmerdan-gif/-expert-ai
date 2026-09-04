import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/ruyalar",
  },
  title: "Rüyalar | Rüya Analizi, Psikoloji ve Bilim",
  description:
    "Rüyalar nedir, neden görülür ve neden unutulur? Rüyalar, uyku, bellek, duygular, semboller ve psikolojik rüya analizi hakkında araştırmalara dayalı kapsamlı bilgiler.",
};

const topics = [
  {
    number: "01",
    title: "Rüya nedir?",
    slug: "ruya-nedir",
    text: "Rüya deneyiminin ne olduğu, REM ve NREM uykusunda rüyaların nasıl ortaya çıktığı ve modern araştırmaların temel bulguları.",
  },
  {
    number: "02",
    title: "Neden rüya görürüz?",
    slug: "neden-ruya-goruruz",
    text: "Rüyaların işlevi konusunda öne sürülen bellek, duygu, biliş ve diğer açıklamalar. Bildiklerimiz ve hâlâ bilmediklerimiz.",
  },
  {
    number: "03",
    title: "Rüyalar neden unutulur?",
    slug: "ruyalar-neden-unutulur",
    text: "Rüya hatırlamanın neden kişiden kişiye değiştiği ve uyandıktan sonra rüya içeriğinin neden hızla kaybolabildiği.",
  },
  {
    number: "04",
    title: "Rüyalar ve bellek",
    slug: "ruyalar-ve-bellek",
    text: "Uyku, öğrenme, bellek pekiştirme ve rüya içeriği arasındaki ilişki üzerine araştırmalar ne söylüyor?",
  },
  {
    number: "05",
    title: "Rüyalar ve duygular",
    slug: "ruyalar-ve-duygular",
    text: "Korku, özlem, öfke, mutluluk ve diğer duyguların rüya deneyimiyle ilişkisine bilimsel bir bakış.",
  },
  {
    number: "06",
    title: "Rüya sembolleri",
    slug: "ruya-sembolleri",
    text: "Sembolleri hazır sözlük anlamlarıyla açıklamak yerine kişisel bağlam ve rüyanın bütünü içinde değerlendirmek.",
  },
  {
    number: "07",
    title: "Tekrarlayan rüyalar",
    slug: "tekrarlayan-ruyalar",
    text: "Benzer rüyaların tekrar tekrar görülmesinin olası açıklamaları ve bu deneyimin kişisel bağlamı.",
  },
  {
    number: "08",
    title: "Kâbuslar ve yoğun rüyalar",
    slug: "kabuslar",
    text: "Kâbus deneyimi, yoğun olumsuz duygular ve rüya içeriği arasındaki ilişkiler hakkında bildiklerimiz.",
  },
];

const sources = [
  {
    authors: "Hudachek, L. & Wamsley, E. J. (2023)",
    title:
      "A meta-analysis of the relation between dream content and memory consolidation",
    journal: "Sleep, 46(12), zsad111.",
    id: "PMID 37058584 · DOI 10.1093/sleep/zsad111",
  },
  {
    authors: "Schredl, M. (2010)",
    title: "Characteristics and contents of dreams",
    journal: "International Review of Neurobiology, 92, 135–154.",
    id: "PMID 20870066 · DOI 10.1016/S0074-7742(10)92007-2",
  },
  {
    authors: "Schredl, M. & Hofmann, F. (2003)",
    title: "Continuity between waking activities and dream activities",
    journal: "Consciousness and Cognition, 12(2), 298–308.",
    id: "PMID 12763010 · DOI 10.1016/S1053-8100(02)00072-7",
  },
  {
    authors: "Eichenlaub, J.-B. et al. (2020)",
    title:
      "Dreams reflect nocturnal cognitive processes: Early-night dreams are more continuous with waking life, and late-night dreams are more emotional and hyperassociative",
    journal: "Sleep Medicine Reviews / related dream research literature.",
    id: "PMID 33360822",
  },
  {
    authors: "Blagrove, M. et al. (2019)",
    title: "Reactions to Dream Content: Continuity and Non-continuity",
    journal: "Frontiers in Psychology, 10, 2676.",
    id: "PMID 31849778 · DOI 10.3389/fpsyg.2019.02676",
  },
  {
    authors: "Scarpelli, S. et al. (2019)",
    title: "The Functional Role of Dreaming in Emotional Processes",
    journal: "Frontiers in Psychology, 10, 459.",
    id: "PMID 30930809 · DOI 10.3389/fpsyg.2019.00459",
  },
  {
    authors: "Horton, C. L. (2017)",
    title:
      "Consciousness across Sleep and Wake: Discontinuity and Continuity of Memory Experiences As a Reflection of Consolidation Processes",
    journal: "Frontiers in Psychiatry, 8, 159.",
    id: "PMID 28936183 · DOI 10.3389/fpsyt.2017.00159",
  },
  {
    authors: "What about dreams? State of the art and open questions (2022)",
    title:
      "A review of current neuroscientific and psychological questions surrounding dreaming",
    journal: "Journal of Sleep Research.",
    id: "PMID 35417930 · DOI 10.1111/jsr.13609",
  },
];

const faqs = [
  {
    question: "Rüyaların herkes için aynı anlamı var mı?",
    answer:
      "Bunu destekleyen güvenilir bir bilimsel kanıt yoktur. Aynı sembol veya olay farklı kişilerde farklı çağrışımlara sahip olabilir. Bu nedenle psikolojik bir rüya analizinde kişinin kendi yaşamı, duyguları ve sembolle olan ilişkisi önemlidir.",
  },
  {
    question: "Rüyalar geleceği haber verir mi?",
    answer:
      "Rüyaların gelecekte gerçekleşecek olayları güvenilir biçimde öngördüğünü gösteren bilimsel bir kanıt bulunmamaktadır. Bir rüyanın daha sonra gerçekleşmiş gibi görünmesi; tesadüf, seçici hatırlama veya olayın rüyadaki içeriğe sonradan benzetilmesi gibi farklı açıklamalara sahip olabilir.",
  },
  {
    question: "Rüyalar sadece REM uykusunda mı görülür?",
    answer:
      "Hayır. Rüya deneyimleri REM uykusunda daha canlı ve karmaşık biçimde raporlanabilse de NREM uykusundan uyanmalarda da rüya deneyimleri bildirilmektedir. Güncel araştırmalar rüya deneyimini yalnızca REM uykusuyla açıklamanın yetersiz olduğunu göstermektedir.",
  },
  {
    question: "Neden bazı rüyalarımı çok iyi hatırlıyorum?",
    answer:
      "Rüya hatırlama; uyanma anındaki beyin durumu, rüyanın duygusal veya algısal yoğunluğu, bireysel farklılıklar ve uyanmadan sonra rüyanın ne kadar hızlı kaydedildiği gibi çeşitli faktörlerden etkilenebilir.",
  },
  {
    question: "Rüyalar gerçekten günlük hayatımızı yansıtır mı?",
    answer:
      "Araştırmalar uyanık yaşam ile rüya içeriği arasında belirli süreklilikler olduğunu gösteriyor. Ancak bu, rüyaların gündüz yaşananların birebir kopyası olduğu anlamına gelmez. Duygusal olarak önemli deneyimler, kişiler ve devam eden kaygılar rüyalarda farklı biçimlerde ortaya çıkabilir.",
  },
  {
    question: "INUS rüyaları nasıl yorumlar?",
    answer:
      "INUS hazır bir rüya sözlüğünden tek bir anlam çıkarmaya çalışmaz. Rüyadaki olayları, sembolleri, kişileri, mekânları, duyguları ve bunların birbirleriyle ilişkilerini birlikte ele alır. Ortaya çıkan yorum kesin gerçek, teşhis veya gelecek tahmini olarak sunulmaz; olası psikolojik anlamları araştıran bir bakış açısıdır.",
  },
];

export default function DreamsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Rüyalar | Rüya Analizi, Psikoloji ve Bilim | INUS",
    description:
      "Rüyalar, uyku, bellek, duygular ve psikolojik rüya analizi hakkında araştırmalara dayalı bilgiler.",
    isPartOf: {
      "@type": "WebSite",
      name: "INUS",
    },
  };

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        {/* HEADER */}
        <header className="flex items-center justify-between py-7">
          <Link
            href="/"
            className="text-xl font-medium tracking-[0.28em]"
          >
            INUS
          </Link>

          <Link
            href="/"
            className="text-sm tracking-wide text-[#5d5851] transition hover:text-[#24221f]"
          >
            Rüyanı analiz et
          </Link>
        </header>

        {/* INTRO */}
        <section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            RÜYA KÜTÜPHANESİ
          </p>

          <h1 className="max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
            Rüyalar hakkında
            <br />
            bildiklerimiz.
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-[#686158]">
            Rüyalar binlerce yıldır anlamlandırılmaya çalışılıyor. Modern
            araştırmalar ise rüyaları uyku, bellek, duygu, algı ve bilinç
            araştırmalarının kesişiminde inceliyor.
          </p>

          <p className="mt-5 max-w-2xl leading-7 text-[#817970]">
            Buradaki içerikler, bilimsel araştırmalar ile psikolojik ve
            yorumlayıcı yaklaşımları birbirinden ayırarak ele alır. Bir
            rüyanın herkes için geçerli tek bir anlamı olduğu varsayılmaz.
          </p>
        </section>

        {/* TOPICS */}
        <section className="pb-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
              KEŞFET
            </p>

            <h2 className="mt-3 text-3xl font-light">
              Rüyaları farklı yönleriyle anlamak
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <Link
  key={topic.title}
  href={topic.slug ? `/ruyalar/${topic.slug}` : "#"}
  className="block rounded-[26px] border border-[#d9d1c7] bg-[#faf8f4] p-7 transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(70,60,50,0.06)]"
>
  <span className="text-xs tracking-[0.2em] text-[#aaa198]">
    {topic.number}
  </span>

  <h2 className="mt-3 text-xl font-normal">
    {topic.title}
  </h2>

  <p className="mt-3 text-sm leading-7 text-[#686158]">
    {topic.text}
  </p>

  {topic.slug && (
    <p className="mt-5 text-xs tracking-wide text-[#625c54]">
      Yazıyı oku →
    </p>
  )}
</Link>
            ))}
          </div>
        </section>

        {/* MAIN ARTICLE */}
        <article className="rounded-[30px] border border-[#d9d1c7] bg-[#faf8f4] px-7 py-10 sm:px-12 sm:py-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            RÜYA ARAŞTIRMALARI
          </p>

          <h2 className="mt-4 text-3xl font-light sm:text-4xl">
            Rüyalar hakkında bilim ne söylüyor?
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#686158]">
            Rüya araştırmaları uzun süre psikoloji, nörobilim ve uyku
            araştırmalarının kesişiminde ilerledi. Bugün rüyaların bazı
            özellikleri hakkında güçlü kanıtlar bulunurken, neden rüya
            gördüğümüz ve rüyaların tam olarak hangi işlevleri yerine getirdiği
            hâlâ araştırılıyor.
          </p>

          <div className="mt-10 space-y-10 text-[15px] leading-8 text-[#454039]">
            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüya yalnızca bir hikâye değildir
              </h3>

              <p>
                Rüya deneyimi; görsel imgeler, düşünceler, duygular, kişiler,
                mekânlar, bedensel hisler ve olay örgülerinin bir araya
                gelmesinden oluşabilir. Bazı rüyalar oldukça gerçekçi ve
                tutarlı bir anlatıya sahipken bazıları zaman, mekân ve
                nedensellik açısından gündelik deneyimden belirgin biçimde
                ayrılır.
              </p>

              <p className="mt-4">
                Modern araştırmalar rüyayı yalnızca REM uykusuna ait bir
                fenomen olarak değerlendirmiyor. REM uyanmalarında daha canlı
                ve karmaşık rüya raporları sık görülse de NREM uykusundan
                uyanmalarda da rüya deneyimleri raporlanıyor. Bu nedenle
                “rüya = REM” şeklindeki basit eşleştirme günümüzde yeterli
                kabul edilmiyor.
              </p>
            </section>

            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                Neden rüya gördüğümüzü biliyor muyuz?
              </h3>

              <p>
                Henüz tek bir kabul edilmiş açıklama yok. Araştırmacılar
                rüyaları bellek işleme, duygusal süreçler, uyanık yaşamla
                süreklilik, bilişsel süreçler ve diğer nörofizyolojik
                mekanizmalarla ilişkilendiren farklı modeller üzerinde
                çalışıyor.
              </p>

              <p className="mt-4">
                Buradaki önemli nokta, bir teorinin rüya deneyiminin yalnızca
                bir bölümünü açıklayabilmesidir. Güncel literatür, rüyanın
                bütün özelliklerini tek bir mekanizmayla açıklamanın henüz
                mümkün olmadığını gösteriyor.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Bilimsel sınır:</strong> “Rüyaların amacı budur”
                  demek ile “bazı bulgular rüyaların bu süreçle ilişkili
                  olabileceğini düşündürüyor” demek aynı şey değildir. INUS,
                  bu ayrımı içeriklerinde özellikle korur.
                </p>
              </div>
            </section>

            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                Günlük hayat rüyalara nasıl girer?
              </h3>

              <p>
                Rüya araştırmalarında “continuity hypothesis” olarak bilinen
                yaklaşım, uyanık yaşam ile rüya içeriği arasında belirli bir
                süreklilik olduğunu öne sürer. Araştırmalar, günlük yaşamda
                önemli olan bazı kişiler, faaliyetler, düşünceler ve duygusal
                deneyimlerin rüyalarda ortaya çıkabildiğini gösteriyor.
              </p>

              <p className="mt-4">
                Ancak bu süreklilik, rüyanın gündüz yaşananların birebir
                tekrarı olduğu anlamına gelmez. Rüyadaki mekânlar, insanlar ve
                olaylar birbirleriyle gerçek hayatta mümkün olmayacak biçimde
                birleşebilir.
              </p>

              <p className="mt-4">
                Araştırmalar özellikle duygusal olarak önemli deneyimlerin
                rüya içeriğiyle ilişkili olabileceğini gösteriyor. Bununla
                birlikte ilişkinin düzeyi kişiden kişiye ve deneyimin türüne
                göre değişebilir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> Önemli bir sunumdan önce kişinin
                  rüyasında sahneye çıkıp konuşamadığını görmesi, otomatik
                  olarak “başarısızlık korkusu” anlamına gelmez. Daha anlamlı
                  soru, kişinin o dönemde değerlendirilme, kontrol veya
                  performansla ilgili ne yaşadığıdır.
                </p>
              </div>
            </section>

            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüyalar ve bellek arasında nasıl bir ilişki var?
              </h3>

              <p>
                Uyku ile bellek arasındaki ilişki, rüya araştırmalarının en
                aktif alanlarından biridir. Bazı çalışmalar, öğrenme öncesi
                deneyimlerin veya yeni öğrenilen bilgilerin daha sonra
                bildirilen rüyalarda ortaya çıkabildiğini gösteriyor.
              </p>

              <p className="mt-4">
                2023 yılında yayımlanan bir meta-analiz, öğrenmeyle ilişkili
                rüyalar ile uyku sonrası bellek performansı arasındaki ilişkiyi
                16 çalışmadaki 45 etki üzerinden inceledi. Araştırmacılar
                anlamlı bir ilişki buldu; ancak bu bulgu, rüya görmenin tek
                başına belleği güçlendirdiğini kanıtlamıyor.
              </p>

              <p className="mt-4">
                Özellikle NREM ve REM rüyaları arasında farklı örüntüler
                bulunabilmesi, rüya deneyiminin uyku sırasında gerçekleşen
                birden fazla bilişsel süreçle ilişkili olabileceğini
                düşündürüyor.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Önemli ayrım:</strong> Bir kişinin rüyasında gün
                  içinde öğrendiği bir bilgiyi görmesi ile o rüyanın belleği
                  kesin olarak pekiştirdiğini söylemek aynı şey değildir.
                  Araştırmalar ilişkiyi destekleyebilir; mekanizma ve
                  nedensellik ise ayrı sorulardır.
                </p>
              </div>
            </section>

            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüyalar neden bu kadar duygusal olabilir?
              </h3>

              <p>
                Korku, özlem, utanç, öfke, mutluluk ve şaşkınlık gibi duygular
                rüya deneyiminin önemli parçaları olabilir. REM uykusundan
                bildirilen rüyalar özellikle canlı ve duygusal içerikleriyle
                dikkat çekse de duygusal deneyim rüya araştırmalarında yalnızca
                tek bir uyku evresiyle açıklanmıyor.
              </p>

              <p className="mt-4">
                Rüya ile uyanık yaşam arasındaki süreklilik konusunda yapılan
                araştırmalar ilginç bir ayrım gösteriyor: Rüyadaki olayların
                kendisi gerçek dışı veya mantıksız olabilirken, kişinin bu
                olaylara verdiği duygusal tepki uyanık hayattaki tepkilerine
                benzeyebilir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> Rüyada hiç bilmediğiniz bir şehirde
                  kaybolabilirsiniz. Şehir gerçek olmayabilir; fakat
                  kaybolduğunuz anda hissettiğiniz korku, merak veya özgürlük
                  hissi sizin gerçek yaşamınızdaki duygusal deneyimlerinizle
                  ilişkili olabilir.
                </p>
              </div>
            </section>

            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüyalar neden unutulur?
              </h3>

              <p>
                Birçok insan uyandıktan birkaç dakika sonra rüyasının büyük
                bölümünü hatırlayamaz. Rüya hatırlama; bireysel özellikler,
                uyanma sırasında oluşan beyin etkinliği, rüyanın yoğunluğu ve
                uyandıktan sonra içeriğin ne kadar hızlı zihinsel olarak
                kaydedildiği gibi birçok faktörden etkilenebilir.
              </p>

              <p className="mt-4">
                Bu nedenle “Ben hiç rüya görmüyorum” ile “Rüyalarımı
                hatırlamıyorum” aynı şey değildir. Rüya deneyimi ile rüya
                hatırlama ayrı araştırma problemleridir.
              </p>

              <p className="mt-4">
                Rüyanın hemen ardından uyanmak ve içeriği kısa süre içinde
                zihinsel olarak tekrar etmek, bazı kişilerde hatırlamayı
                kolaylaştırabilir. Buna karşılık uyanır uyanmaz başka bir
                düşünceye, telefona veya günlük aktiviteye geçmek rüya
                içeriğinin kaybolmasını kolaylaştırabilir.
              </p>
            </section>

            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüyalardaki semboller ne anlama gelir?
              </h3>

              <p>
                İnternette çok sayıda “rüya sözlüğü” bulunuyor. Bu sözlükler
                belirli sembollere değişmez anlamlar atayabiliyor. Ancak bir
                sembolün herkes için aynı psikolojik anlama geldiğini gösteren
                güvenilir bir bilimsel sistem bulunmuyor.
              </p>

              <p className="mt-4">
                Örneğin su bir kişi için huzur, başka biri için tehlike,
                başka biri için çocukluk anısı veya özgürlük duygusuyla ilişkili
                olabilir. Sembolün kendisi kadar kişinin o sembolle kurduğu
                kişisel ilişki de önemlidir.
              </p>

              <p className="mt-4">
                Bu nedenle INUS'ta “yılan = düşman”, “su = duygular” gibi
                otomatik eşleştirmeler kullanılmaz. Bunun yerine sembolün
                rüyanın tamamındaki rolü, rüya sırasında hissedilen duygu,
                diğer karakterler ve kişinin kendi çağrışımları birlikte
                değerlendirilir.
              </p>
            </section>

            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüyaların tek bir anlamı var mı?
              </h3>

              <p>
                Hayır. Bir rüyanın bilimsel olarak herkes için geçerli tek bir
                “gizli mesajı” olduğunu söylemek mümkün değildir.
              </p>

              <p className="mt-4">
                Aynı rüya teması farklı insanların yaşamlarında tamamen farklı
                anlamlar taşıyabilir. Hatta aynı kişi için bile aynı sembolün
                anlamı zaman içinde değişebilir.
              </p>

              <p className="mt-4">
                Bu nedenle psikolojik rüya analizi kesin bir hüküm vermekten
                çok, rüyanın kişinin mevcut yaşamıyla hangi noktalarda
                bağlantı kurabileceğini araştıran bir süreç olarak
                düşünülebilir.
              </p>
            </section>

            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                Bilim ile rüya yorumu arasındaki fark
              </h3>

              <p>
                Bilimsel rüya araştırması ile tek bir kişinin rüyasını
                yorumlamak aynı faaliyet değildir. Bilimsel araştırmalar
                kontrollü yöntemler, örneklemler ve ölçülebilir veriler
                kullanarak genel ilişkileri araştırır.
              </p>

              <p className="mt-4">
                Bireysel rüya analizi ise tek bir kişinin deneyimini ve
                kişisel bağlamını ele alır. Bu nedenle bilimsel araştırmalardan
                elde edilen genel bir bulgu, kişinin belirli bir rüyasının
                nedenini tek başına açıklayamaz.
              </p>

              <p className="mt-4">
                INUS bu ayrımı korur: Araştırma bulguları, rüya deneyimini
                anlamak için bağlam sağlar; ancak belirli bir rüyaya kesin
                teşhis veya kesin açıklama olarak uygulanmaz.
              </p>
            </section>

            {/* SECTION */}
            <section>
              <h3 className="mb-3 text-xl font-normal">
                INUS rüya analizine nasıl yaklaşır?
              </h3>

              <p>
                INUS, rüyaları hazır sembol sözlükleriyle açıklamak yerine
                rüyanın kendi bağlamını incelemeyi amaçlar. Rüyadaki olaylar,
                kişiler, mekânlar, semboller, karşıtlıklar ve duygular birlikte
                değerlendirilir.
              </p>

              <p className="mt-4">
                Analiz bir psikiyatrik veya psikolojik teşhis değildir.
                Geleceği tahmin etmez ve yorumlarını bilimsel gerçek olarak
                sunmaz. Amaç, kişinin rüyasına farklı psikolojik bakış
                açılarıyla bakabilmesine yardımcı olmaktır.
              </p>

              <p className="mt-4">
                Bu yaklaşımın temel sorusu şudur:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#9b9186] pl-6 text-xl font-light leading-8 text-[#625c54]">
                “Bu rüya, bu kişi için neden tam olarak böyle bir hikâye
                kurmuş olabilir?”
              </blockquote>
            </section>
          </div>
        </article>

        {/* RESEARCH NOTE */}
        <section className="py-16 sm:py-20">
          <div className="rounded-[28px] border border-[#d9d1c7] bg-[#eee8df] px-7 py-9 sm:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
              BİLİMSEL OKUMA
            </p>

            <h2 className="mt-4 text-2xl font-light sm:text-3xl">
              Kanıt ile yorum arasındaki çizgi
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#625c54]">
              Rüya araştırmaları hızla gelişen ancak hâlâ birçok açık soruya
              sahip bir alan. Bu nedenle INUS içeriklerinde “kanıtlanmıştır”,
              “kesin olarak gösterir” veya “her zaman şu anlama gelir” gibi
              ifadeler yalnızca gerçekten desteklendikleri durumlarda
              kullanılır.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#625c54]">
              Bir araştırmanın bulduğu istatistiksel ilişki, tek bir kişinin
              rüyasının nedenini otomatik olarak açıklamaz. Bilimsel bulgular
              ile bireysel yorum arasındaki farkı korumak, rüya hakkında
              güvenilir konuşmanın temel koşullarından biridir.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-16 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            SIK SORULAN SORULAR
          </p>

          <h2 className="mt-4 text-3xl font-light">
            Rüyalar hakkında merak edilenler
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-[#d9d1c7] bg-[#faf8f4] p-6 sm:p-7"
              >
                <h3 className="text-lg font-normal">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#686158]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SOURCES */}
        <section className="pb-16 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            KAYNAKLAR
          </p>

          <h2 className="mt-4 text-3xl font-light">
            Araştırma ve literatür
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#686158]">
            Aşağıdaki çalışmalar, sayfadaki bilimsel açıklamaların temelini
            oluşturur. Kaynaklar özellikle rüya içeriği, bellek, duygular,
            uyanık yaşam ile rüya arasındaki süreklilik ve rüya araştırmasının
            güncel durumu üzerine seçilmiştir.
          </p>

          <div className="mt-8 space-y-6">
            {sources.map((source) => (
              <article
                key={source.title}
                className="border-b border-[#ddd5cb] pb-6"
              >
                <p className="text-sm font-medium text-[#454039]">
                  {source.authors}
                </p>

                <p className="mt-1 text-sm leading-7 text-[#625c54]">
                  <em>{source.title}</em>
                </p>

                <p className="mt-1 text-xs leading-6 text-[#8a8177]">
                  {source.journal}
                </p>

                <p className="mt-1 text-xs tracking-wide text-[#aaa198]">
                  {source.id}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 rounded-[30px] bg-[#292621] px-7 py-12 text-center text-white sm:mb-20 sm:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
            INUS
          </p>

          <h2 className="mt-4 text-3xl font-light">
            Şimdi kendi rüyanı keşfet.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d4cec5]">
            Rüyanı kendi kelimelerinle anlat. INUS; rüyanın olaylarını,
            sembollerini, duygularını ve hikâyesindeki ilişkileri birlikte
            değerlendirerek farklı psikolojik bakış açıları sunar.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm text-[#292621] transition hover:bg-[#eee8df]"
          >
            Rüyamı analiz et
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="pb-8 text-center text-xs text-[#aaa198]">
          INUS · Rüyalar hakkında araştırma ve psikolojik yaklaşım
        </footer>
      </div>
    </main>
  );
}