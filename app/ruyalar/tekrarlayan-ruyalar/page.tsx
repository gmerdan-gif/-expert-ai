import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/tekrarlayan-ruyalar",
  },
  title: "Tekrarlayan Rüyalar | Neden Aynı Rüyayı Görüyoruz?",
  description:
    "Tekrarlayan rüyalar neden görülür? Aynı rüyanın veya temanın tekrar etmesi, stres, duygular, günlük yaşam ve psikolojik rüya analizi hakkında bilimsel bilgiler.",
};

const sources = [
  {
    authors: "Schredl, M. (2010)",
    title: "Characteristics and contents of dreams",
    journal: "International Review of Neurobiology, 92, 135–154.",
    detail: "PMID 20870066 · DOI 10.1016/S0074-7742(10)92007-2",
    url: "https://pubmed.ncbi.nlm.nih.gov/20870066/",
  },
  {
    authors: "Schredl, M. & Hofmann, F. (2003)",
    title: "Continuity between waking activities and dream activities",
    journal: "Consciousness and Cognition, 12(2), 298–308.",
    detail: "PMID 12763010 · DOI 10.1016/S1053-8100(02)00072-7",
    url: "https://pubmed.ncbi.nlm.nih.gov/12763010/",
  },
  {
    authors: "Blagrove, M. et al. (2019)",
    title: "Reactions to Dream Content: Continuity and Non-continuity",
    journal: "Frontiers in Psychology, 10, 2676.",
    detail: "PMID 31849778 · DOI 10.3389/fpsyg.2019.02676",
    url: "https://pubmed.ncbi.nlm.nih.gov/31849778/",
  },
  {
    authors: "Zadra, A. & Donderi, D. C. (2000)",
    title:
      "Nightmares and bad dreams: Their prevalence and relationship to well-being",
    journal: "Journal of Abnormal Psychology.",
    detail: "Research on recurrent unpleasant dream experiences",
    url: "https://pubmed.ncbi.nlm.nih.gov/11014146/",
  },
  {
    authors: "Yu, C. K.-C. (2007)",
    title:
      "The repetition of dreams: A review of the literature",
    journal: "Dreaming.",
    detail: "Review of recurrent dream phenomena",
    url: "https://psycnet.apa.org/record/2007-19165-004",
  },
];

const faqs = [
  {
    question: "Aynı rüyayı tekrar tekrar görmek ne anlama gelir?",
    answer:
      "Tekrarlayan bir rüyanın herkes için geçerli tek bir anlamı yoktur. Tekrar eden rüyalar bazen benzer duygular, yaşam sorunları veya devam eden deneyimlerle ilişkili olabilir. Ancak tek başına tekrar etmesi belirli bir psikolojik durumu kanıtlamaz.",
  },
  {
    question: "Tekrarlayan rüyalar stres yüzünden mi görülür?",
    answer:
      "Stres ve duygusal olarak önemli yaşam olayları rüya içeriğiyle ilişkili olabilir. Ancak her tekrarlayan rüyanın nedeni stres değildir. Kişinin yaşam bağlamı, rüyanın içeriği ve rüyadaki duygular birlikte değerlendirilmelidir.",
  },
  {
    question: "Aynı rüyayı görmek bilinçaltımın bana mesaj verdiği anlamına mı gelir?",
    answer:
      "Bunu kesin olarak söylemek mümkün değildir. Psikodinamik ve Jungcu yaklaşımlar tekrarlayan rüyaları psikolojik süreçleri düşünmek için kullanabilir. Ancak böyle bir yorum bilimsel olarak kanıtlanmış bir mesaj olarak sunulmamalıdır.",
  },
  {
    question: "Tekrarlayan rüyalar kötü bir şey olacağını haber verir mi?",
    answer:
      "Hayır. Tekrarlayan rüyaların gelecekte gerçekleşecek olayları güvenilir biçimde öngördüğünü gösteren bilimsel bir kanıt bulunmamaktadır.",
  },
  {
    question: "Tekrarlayan rüyalar zamanla değişebilir mi?",
    answer:
      "Evet. Rüyanın temel teması benzer kalırken kişiler, mekânlar, olaylar veya duygular değişebilir. Bu değişimler rüyanın zaman içinde farklı bir biçim aldığını gösterebilir; ancak tek başına belirli bir psikolojik sonuca işaret etmez.",
  },
  {
    question: "Tekrarlayan rüyalar tamamen kaybolabilir mi?",
    answer:
      "Bazı kişilerde tekrarlayan rüyaların sıklığı zamanla azalabilir veya rüyanın içeriği değişebilir. Bunun nedenleri kişisel yaşam koşullarındaki değişiklikler, stres düzeyi, uyku düzeni ve başka faktörlerle ilişkili olabilir.",
  },
];

export default function RecurrentDreamsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tekrarlayan Rüyalar: Neden Aynı Rüyayı Görüyoruz?",
    description:
      "Tekrarlayan rüyaların olası açıklamaları, duygular, stres, günlük yaşam ve psikolojik rüya analizi.",
    author: {
      "@type": "Organization",
      name: "INUS",
    },
    publisher: {
      "@type": "Organization",
      name: "INUS",
    },
  };

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">

        {/* HEADER */}
        <header className="flex items-center justify-between py-7">
          <Link
            href="/"
            className="text-xl font-medium tracking-[0.28em]"
          >
            INUS
          </Link>

          <Link
            href="/ruyalar"
            className="text-sm tracking-wide text-[#5d5851] transition hover:text-[#24221f]"
          >
            Rüya Kütüphanesi
          </Link>
        </header>

        {/* BREADCRUMB */}
        <nav
          className="pt-10 text-xs text-[#8a8177]"
          aria-label="Breadcrumb"
        >
          <Link href="/ruyalar" className="hover:text-[#24221f]">
            Rüyalar
          </Link>

          <span className="mx-2">/</span>

          <span>Tekrarlayan rüyalar</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-10 sm:pb-18 sm:pt-14">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            TEKRARLAYAN RÜYALAR
          </p>

          <h1 className="max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
            Neden aynı rüyayı
            <br />
            tekrar görüyoruz?
          </h1>

          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[#686158]">
            Bazı rüyalar tek seferlik değildir. Aynı mekân, benzer bir olay,
            aynı kişi veya aynı duygusal atmosfer farklı gecelerde yeniden
            ortaya çıkabilir.
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#817970]">
            Tekrarlayan rüyalar ilginç bir araştırma konusu olsa da bunların
            herkes için geçerli tek bir psikolojik anlamı yoktur. Rüyanın
            içeriği, duygusu ve kişinin yaşamındaki bağlam birlikte
            değerlendirilmelidir.
          </p>
        </header>

        {/* KEY POINT */}
        <section className="mb-10 rounded-[28px] bg-[#292621] px-7 py-9 text-white sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
            TEMEL AYRIM
          </p>

          <h2 className="mt-4 text-2xl font-light">
            Tekrar etmek, tek başına bir mesajın kanıtı değildir.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d4cec5]">
            Aynı rüyanın tekrar görülmesi dikkat çekici olabilir. Ancak
            “tekrarlıyorsa kesin olarak bilinçaltının mesajıdır” demek,
            araştırmaların desteklediğinden daha güçlü bir iddiadır.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="rounded-[30px] border border-[#d9d1c7] bg-[#faf8f4] px-7 py-10 sm:px-12 sm:py-14">

          <div className="space-y-12 text-[15px] leading-8 text-[#454039]">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-normal">
                Tekrarlayan rüya nedir?
              </h2>

              <p className="mt-5">
                Tekrarlayan rüya, kişinin benzer bir rüyayı veya benzer bir
                rüya temasını birden fazla kez yaşamasıdır.
              </p>

              <p className="mt-4">
                Burada “aynı rüya” ifadesi her zaman kelimesi kelimesine aynı
                olay örgüsü anlamına gelmez. Bazen mekân aynı kalırken olay
                değişebilir. Bazen kişi aynı olabilir ama rüyadaki durum
                farklılaşabilir.
              </p>

              <p className="mt-4">
                Bazı kişiler ise yıllar boyunca benzer bir duygusal atmosferin
                tekrar ettiğini fark eder.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-normal">
                Aynı rüya gerçekten tamamen aynı mı?
              </h2>

              <p className="mt-5">
                Rüya hafızası oldukça kırılgan olduğu için bu soruya kesin
                cevap vermek zordur.
              </p>

              <p className="mt-4">
                Kişi iki rüyayı benzer olarak hatırlayabilir; ancak ayrıntılar
                farklı olabilir. Bu nedenle araştırmalarda “tekrarlayan rüya”
                çoğu zaman birebir aynı senaryodan çok ortak temalar ve
                örüntüler üzerinden değerlendirilir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> Bir gece havaalanında uçağa
                  yetişememek, başka bir gece treni kaçırmak ve başka bir gece
                  önemli bir toplantıya geç kalmak farklı rüyalar olabilir.
                  Ancak kişi bunların hepsinde aynı “yetişememe” duygusunu
                  yaşayabilir.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-normal">
                Tekrarlayan rüyalar neden görülür?
              </h2>

              <p className="mt-5">
                Bunun tek bir açıklaması yoktur.
              </p>

              <p className="mt-4">
                Rüya araştırmalarında uyanık yaşamla süreklilik, duygusal
                deneyimler, bellek süreçleri ve devam eden yaşam sorunları
                gibi farklı faktörler incelenmektedir.
              </p>

              <p className="mt-4">
                Bir kişinin yaşamında uzun süre devam eden bir sorun veya
                duygusal olarak önemli bir konu varsa, bunun rüyalarda
                farklı biçimlerde tekrar ortaya çıkması mümkün olabilir.
              </p>

              <p className="mt-4">
                Ancak bu, her tekrarlayan rüyanın çözülmemiş bir psikolojik
                sorundan kaynaklandığını göstermez.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-normal">
                Stres ve tekrarlayan rüyalar
              </h2>

              <p className="mt-5">
                Stres, rüya içeriği ve rüya hatırlama üzerinde etkili
                olabilecek faktörlerden biridir.
              </p>

              <p className="mt-4">
                Özellikle kişinin gündelik yaşamında devam eden bir problem
                varsa, bunun rüyalarda tekrar eden temalar şeklinde ortaya
                çıkması mümkündür.
              </p>

              <p className="mt-4">
                Örneğin iş değişikliği sürecindeki bir kişi sürekli olarak
                kaybolduğunu veya bir yere yetişemediğini görebilir.
              </p>

              <p className="mt-4">
                Fakat bu rüyanın kesin olarak “iş değiştirme korkusunu”
                gösterdiğini söylemek için yeterli değildir. Kişinin kendi
                çağrışımları ve yaşam bağlamı gerekir.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-normal">
                Tekrarlayan rüyalarda duygular neden önemli?
              </h2>

              <p className="mt-5">
                Bazen rüyanın tekrar eden kısmı olay değil, duygudur.
              </p>

              <p className="mt-4">
                Kişi her seferinde farklı bir yerde olabilir ancak aynı
                çaresizlik, kontrol kaybı, utanç veya korku hissini
                yaşayabilir.
              </p>

              <p className="mt-4">
                Bu nedenle rüyayı anlamaya çalışırken yalnızca “ne oldu?”
                sorusunu değil, “her seferinde nasıl hissettim?” sorusunu
                sormak yararlı olabilir.
              </p>

              <blockquote className="mt-7 border-l-2 border-[#9b9186] pl-6 text-xl font-light leading-8 text-[#625c54]">
                Bazen tekrarlayan şey hikâye değil, hikâyenin yarattığı
                duygudur.
              </blockquote>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-normal">
                Tekrarlayan rüya zaman içinde değişebilir mi?
              </h2>

              <p className="mt-5">
                Evet. Bir rüyanın temel teması benzer kalırken ayrıntıları
                değişebilir.
              </p>

              <p className="mt-4">
                Örneğin kişi başlangıçta sürekli olarak bir binadan çıkamadığı
                rüyalar görebilir. Daha sonra aynı binada kapıyı bulabilir,
                kapıyı açabilir veya dışarı çıkabilir.
              </p>

              <p className="mt-4">
                Böyle bir değişim psikolojik olarak ilginç olabilir; ancak
                tek başına “sorun çözüldü” sonucunu kanıtlamaz.
              </p>

              <p className="mt-4">
                Değişimin anlamını değerlendirmek için kişinin gerçek
                yaşamındaki değişikliklere de bakmak gerekir.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-normal">
                Rüyaların tekrar etmesi bilinçaltının mesajı mı?
              </h2>

              <p className="mt-5">
                Psikolojik yorumlama geleneklerinde tekrarlayan rüyalar
                bilinçdışı süreçlerle ilişkilendirilebilir.
              </p>

              <p className="mt-4">
                Özellikle Jungcu yaklaşımda rüyanın tekrar eden temaları,
                kişinin bilinçli tutumuyla arasındaki gerilimleri düşünmek
                için kullanılabilir.
              </p>

              <p className="mt-4">
                Ancak bunu “bilinçaltı kesin olarak sana şu mesajı veriyor”
                şeklinde ifade etmek doğru değildir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>INUS yaklaşımı:</strong> Tekrarlayan rüyayı hazır
                  bir mesaj olarak vermek yerine, tekrarın kişinin mevcut
                  yaşamında neyle ilişkili olabileceğini araştırmak.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-normal">
                Tekrarlayan rüyalar geleceği haber verir mi?
              </h2>

              <p className="mt-5">
                Hayır. Tekrarlayan rüyaların gelecekte gerçekleşecek olayları
                güvenilir biçimde öngördüğünü gösteren bilimsel kanıt
                bulunmamaktadır.
              </p>

              <p className="mt-4">
                Bazen rüyadaki bir olay daha sonra gerçek hayatta yaşanmış
                gibi görünebilir. Bunun arkasında tesadüf, seçici hatırlama
                veya gerçekleşen olayın daha sonra rüyaya benzetilmesi gibi
                mekanizmalar bulunabilir.
              </p>

              <p className="mt-4">
                Bu nedenle tekrarlayan bir rüyanın gelecekte olacak bir
                olayın işareti olduğunu varsaymak güvenilir değildir.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-normal">
                Tekrarlayan kâbuslar farklı bir konu mu?
              </h2>

              <p className="mt-5">
                Tekrarlayan kâbuslar rüya araştırmalarında ayrıca önem taşır.
                Özellikle yoğun korku veya tehdit hissiyle birlikte gelen
                rüyalar kişinin uyku deneyimini etkileyebilir.
              </p>

              <p className="mt-4">
                Kâbusların ortaya çıkmasında stres, travmatik deneyimler,
                uyku bozuklukları, ilaçlar ve başka faktörler rol oynayabilir.
              </p>

              <p className="mt-4">
                Bu nedenle sık ve ciddi biçimde rahatsız eden kâbuslar
                yalnızca sembolik bir yorum konusu olarak ele alınmamalıdır.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-normal">
                Tekrarlayan rüyalar ne zaman azalabilir?
              </h2>

              <p className="mt-5">
                Bazı kişilerde yaşam koşulları değiştikçe belirli rüyaların
                sıklığı azalabilir.
              </p>

              <p className="mt-4">
                Bir problemin çözülmesi, stres düzeyinin azalması veya kişinin
                yaşadığı deneyime ilişkin bakış açısının değişmesi rüya
                deneyiminde de değişikliklerle birlikte görülebilir.
              </p>

              <p className="mt-4">
                Ancak bu ilişki kişiden kişiye değişir ve tek başına rüyanın
                kaybolması belirli bir psikolojik sürecin tamamlandığını
                kanıtlamaz.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-normal">
                Tekrarlayan rüyayı anlamak için hangi sorular sorulabilir?
              </h2>

              <p className="mt-5">
                Rüyanın tekrar etmesini anlamaya çalışırken şu sorular
                başlangıç için yararlı olabilir:
              </p>

              <ol className="mt-5 space-y-4 pl-5">
                <li>
                  <strong>1.</strong> Rüyanın hangi kısmı her seferinde
                  tekrar ediyor?
                </li>
                <li>
                  <strong>2.</strong> Rüyada en güçlü duygu hangisi?
                </li>
                <li>
                  <strong>3.</strong> Rüya ilk ne zaman ortaya çıktı?
                </li>
                <li>
                  <strong>4.</strong> Rüyanın başladığı dönemde hayatımda
                  neler oluyordu?
                </li>
                <li>
                  <strong>5.</strong> Son dönemde rüyadaki temaya benzeyen
                  bir durum yaşıyor muyum?
                </li>
                <li>
                  <strong>6.</strong> Rüya zaman içinde nasıl değişti?
                </li>
              </ol>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-normal">
                INUS tekrarlayan rüyalara nasıl yaklaşır?
              </h2>

              <p className="mt-5">
                INUS için tekrarın kendisi önemli bir ipucudur; fakat otomatik
                bir cevap değildir.
              </p>

              <p className="mt-4">
                Rüyanın tekrar eden olayları, kişiler, mekânları ve duyguları
                birlikte incelenir. Daha sonra bunların kişinin mevcut yaşamı
                ve kişisel çağrışımlarıyla nasıl ilişkili olabileceği
                araştırılır.
              </p>

              <p className="mt-4">
                Jungcu bakış açısından tekrar eden bir tema, kişinin bilinçli
                tutumuyla rüya arasındaki gerilimi düşünmek için bir fırsat
                olarak ele alınabilir.
              </p>

              <p className="mt-4">
                Ancak ortaya çıkan yorum kesin gerçek, teşhis veya gelecek
                tahmini olarak sunulmaz.
              </p>

              <blockquote className="mt-7 border-l-2 border-[#9b9186] pl-6 text-xl font-light leading-8 text-[#625c54]">
                “Aynı rüya neden tekrar geliyor?” kadar,
                “Hayatımda ne tekrar ediyor?” sorusu da önemlidir.
              </blockquote>
            </section>

            {/* SUMMARY */}
            <section>
              <h2 className="text-2xl font-normal">
                Kısaca ne biliyoruz?
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#eee8df] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    BİLDİKLERİMİZ
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Rüyalar ve uyanık yaşam arasında süreklilikler
                      bulunabilir.
                    </li>
                    <li>
                      • Duygusal olarak önemli deneyimler rüyalarda tekrar
                      ortaya çıkabilir.
                    </li>
                    <li>
                      • Tekrarlayan rüyalar birebir aynı olmak zorunda değildir.
                    </li>
                    <li>
                      • Rüya temaları zaman içinde değişebilir.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#eee8df] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    KESİN OLARAK SÖYLEYEMEDİĞİMİZ
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Her tekrarın tek bir nedeni olduğunu.
                    </li>
                    <li>
                      • Her tekrarlayan rüyanın bastırılmış bir çatışmayı
                      gösterdiğini.
                    </li>
                    <li>
                      • Rüyaların geleceği haber verdiğini.
                    </li>
                    <li>
                      • Bir rüyanın herkes için aynı anlama geldiğini.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* SOURCES */}
        <section className="py-16 sm:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            KAYNAKLAR
          </p>

          <h2 className="mt-4 text-3xl font-light">
            Araştırma ve literatür
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#686158]">
            Bu sayfadaki açıklamalar; rüya içeriği, uyanık yaşam ile rüya
            arasındaki süreklilik, tekrarlayan rüyalar ve kâbuslar üzerine
            araştırmalar temel alınarak hazırlanmıştır.
          </p>

          <div className="mt-8 space-y-5">
            {sources.map((source) => (
              <article
                key={source.title}
                className="rounded-2xl border border-[#ddd5cb] bg-[#faf8f4] p-6"
              >
                <p className="text-sm font-medium text-[#454039]">
                  {source.authors}
                </p>

                <p className="mt-1 text-sm leading-7 text-[#625c54]">
                  <em>{source.title}</em>
                </p>

                <p className="mt-1 text-xs text-[#8a8177]">
                  {source.journal}
                </p>

                <p className="mt-2 text-xs text-[#aaa198]">
                  {source.detail}
                </p>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-[#625c54] underline underline-offset-4 hover:text-[#24221f]"
                >
                  Kaynağı görüntüle →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-16 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            SIK SORULAN SORULAR
          </p>

          <h2 className="mt-4 text-3xl font-light">
            Tekrarlayan rüyalar hakkında
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-[#d9d1c7] bg-[#faf8f4] p-6"
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

        {/* CTA */}
        <section className="mb-16 rounded-[30px] bg-[#292621] px-7 py-12 text-center text-white sm:mb-20 sm:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
            INUS
          </p>

          <h2 className="mt-4 text-3xl font-light">
            Tekrarlayan rüyanı keşfet.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d4cec5]">
            Rüyanın tekrar eden olaylarını, duygularını ve hayatındaki
            karşılıklarını birlikte incele.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm text-[#292621] transition hover:bg-[#eee8df]"
          >
            Rüyamı analiz et
          </Link>
        </section>

        <footer className="pb-8 text-center text-xs text-[#aaa198]">
          INUS · Rüyalar hakkında araştırma ve psikolojik yaklaşım
        </footer>
      </div>
    </main>
  );
}