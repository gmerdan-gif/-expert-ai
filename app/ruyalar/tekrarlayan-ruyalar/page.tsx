import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";

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
    authors: "Kahn, D. (2019)",
    title: "Reactions to Dream Content: Continuity and Non-continuity",
    journal: "Frontiers in Psychology, 10, 2676.",
    detail: "PMID 31849778 · PMCID PMC6901388 · DOI 10.3389/fpsyg.2019.02676",
    url: "https://pubmed.ncbi.nlm.nih.gov/31849778/",
  },
  {
    authors: "Zadra, A. & Donderi, D. C. (2000)",
    title:
      "Nightmares and bad dreams: Their prevalence and relationship to well-being",
    journal: "Journal of Abnormal Psychology, 109(2), 273–281.",
    detail: "PMID 10895565 · DOI 10.1037/0021-843X.109.2.273",
    url: "https://pubmed.ncbi.nlm.nih.gov/10895565/",
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

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">

        {/* HEADER */}
        <header className="flex items-center justify-between py-6">
          <Link
            href="/"
            className="text-lg font-medium tracking-[0.28em] transition hover:opacity-70"
          >
            INUS
          </Link>

          <Link
            href="/ruyalar"
            className="text-sm text-[#625c54] transition hover:text-[#24221f]"
          >
            Rüya Kütüphanesi
          </Link>
        </header>

        {/* BREADCRUMB */}
        <nav
          className="border-t border-[#d9d2c9] pt-6 text-[11px] text-[#91887e]"
          aria-label="Breadcrumb"
        >
          <Link href="/ruyalar" className="hover:text-[#24221f]">
            Rüyalar
          </Link>

          <span className="mx-2">/</span>

          <span>Tekrarlayan rüyalar</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            TEKRARLAYAN RÜYALAR
          </p>

          <h1 className="max-w-xl text-[48px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[64px] md:text-[72px]">
            Neden aynı rüyayı
            <br />
            tekrar görüyoruz?
          </h1>
            </div>

            <div className="flex flex-col justify-end">

          <p className="max-w-2xl text-[17px] font-light leading-8 text-[#625c54]">
            Bazı rüyalar tek seferlik değildir. Aynı mekân, benzer bir olay,
            aynı kişi veya aynı duygusal atmosfer farklı gecelerde yeniden
            ortaya çıkabilir.
          </p>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
            Tekrarlayan rüyalar ilginç bir araştırma konusu olsa da bunların
            herkes için geçerli tek bir psikolojik anlamı yoktur. Rüyanın
            içeriği, duygusu ve kişinin yaşamındaki bağlam birlikte
            değerlendirilmelidir.
          </p>
                    </div>
          </div>
        </header>

        {/* KEY POINT */}
        <section className="mb-12 rounded-xl bg-[#eee8df] px-7 py-9 sm:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            TEMEL AYRIM
          </p>

          <h2 className="mt-4 max-w-4xl text-2xl font-light tracking-[-0.025em] sm:text-3xl">
            Tekrar etmek, tek başına bir mesajın kanıtı değildir.
          </h2>

          <p className="mt-5 max-w-3xl text-[14px] leading-7 text-[#625c54]">
            Aynı rüyanın tekrar görülmesi dikkat çekici olabilir. Ancak
            “tekrarlıyorsa kesin olarak bilinçaltının mesajıdır” demek,
            araştırmaların desteklediğinden daha güçlü bir iddiadır.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="border-t border-[#d9d2c9] py-14 sm:py-16">

          <div className="divide-y divide-[#d9d2c9] text-[15px] leading-8 text-[#454039] [&>section]:py-12 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 lg:[&>section]:grid lg:[&>section]:grid-cols-[0.9fr_1.1fr] lg:[&>section]:gap-x-14 lg:[&>section>h2]:col-start-1 lg:[&>section>h2]:row-start-1 lg:[&>section>:not(h2)]:col-start-2">

            {/* 1 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
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
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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

              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">
                Bazen tekrarlayan şey hikâye değil, hikâyenin yarattığı
                duygudur.
              </blockquote>
            </section>

            {/* 6 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>INUS yaklaşımı:</strong> Tekrarlayan rüyayı hazır
                  bir mesaj olarak vermek yerine, tekrarın kişinin mevcut
                  yaşamında neyle ilişkili olabileceğini araştırmak.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
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

              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">
                “Aynı rüya neden tekrar geliyor?” kadar,
                “Hayatımda ne tekrar ediyor?” sorusu da önemlidir.
              </blockquote>
            </section>

            {/* SUMMARY */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Kısaca ne biliyoruz?
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
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

                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
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
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            KAYNAKLAR
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Araştırma ve literatür
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#6f675e]">
            Bu sayfadaki açıklamalar; rüya içeriği, uyanık yaşam ile rüya
            arasındaki süreklilik, tekrarlayan rüyalar ve kâbuslar üzerine
            araştırmalar temel alınarak hazırlanmıştır.
          </p>

          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {sources.map((source) => (
              <article
                key={source.title}
                className="border-t border-[#d9d2c9] pt-5"
              >
                <p className="text-sm font-medium text-[#454039]">
                  {source.authors}
                </p>

                <p className="mt-2 text-[13px] leading-6 text-[#625c54]">
                  <em>{source.title}</em>
                </p>

                <p className="mt-2 text-xs leading-6 text-[#91887e]">
                  {source.journal}
                </p>

                <p className="mt-1 text-[10px] tracking-wide text-[#aaa198]">
                  {source.detail}
                </p>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-[#625c54] underline decoration-[#bdb4aa] underline-offset-4 transition hover:text-[#24221f]"
                >
                  Kaynağı görüntüle →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            SIK SORULAN SORULAR
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Tekrarlayan rüyalar hakkında
          </h2>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="border-b border-[#ded6cc] p-6 last:border-b-0 sm:p-7"
              >
                <h3 className="text-lg font-light tracking-[-0.015em]">
                  {faq.question}
                </h3>

                <p className="mt-3 max-w-4xl text-[14px] leading-7 text-[#6f675e]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            INUS
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Tekrarlayan rüyanı keşfet.
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
            Rüyanın tekrar eden olaylarını, duygularını ve hayatındaki
            karşılıklarını birlikte incele.
          </p>

                      </div>

            <Link
            href="/"
            scroll={true}
            className="inline-flex items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]"
          >
            Rüyamı analiz et
          
              <span aria-hidden="true">→</span>
            </Link>
                  </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}