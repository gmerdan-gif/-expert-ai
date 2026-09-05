import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/kabuslar",
  },
  title: "Kâbuslar ve Yoğun Rüyalar | Neden Kâbus Görürüz?",
  description:
    "Kâbus nedir, neden görülür ve stresle ilişkisi nedir? Kötü rüyalar, kâbus bozukluğu, travma, uyku ve yoğun rüyalar hakkında bilimsel bilgiler.",
};

const sources = [
  {
    authors: "American Academy of Sleep Medicine (2018)",
    title: "The International Classification of Sleep Disorders, Third Edition",
    journal: "Diagnostic and Coding Manual.",
    detail: "Sleep-related disorders and nightmare disorder classification",
    url: "https://aasm.org/clinical-resources/international-classification-sleep-disorders/",
  },
  {
    authors: "Levin, R. & Nielsen, T. A. (2007)",
    title:
      "Disturbed dreaming, posttraumatic stress disorder, and affect distress: A review and neurocognitive model",
    journal: "Psychological Bulletin, 133(3), 482–528.",
    detail: "PMID 17469987 · DOI 10.1037/0033-2909.133.3.482",
    url: "https://pubmed.ncbi.nlm.nih.gov/17469987/",
  },
  {
    authors: "Gieselmann, A. et al. (2019)",
    title:
      "Aetiology and treatment of nightmare disorder: State of the art and future perspectives",
    journal: "Journal of Sleep Research, 28(4), e12820.",
    detail: "PMID 30868784 · DOI 10.1111/jsr.12820",
    url: "https://pubmed.ncbi.nlm.nih.gov/30868784/",
  },
  {
    authors: "Scarpelli, S. et al. (2019)",
    title: "The Functional Role of Dreaming in Emotional Processes",
    journal: "Frontiers in Psychology, 10, 459.",
    detail: "PMID 30930809 · DOI 10.3389/fpsyg.2019.00459",
    url: "https://pubmed.ncbi.nlm.nih.gov/30930809/",
  },
  {
    authors: "Zadra, A. & Donderi, D. C. (2000)",
    title:
      "Nightmares and bad dreams: Their prevalence and relationship to well-being",
    journal: "Journal of Abnormal Psychology.",
    detail: "Research on nightmares, bad dreams and well-being",
    url: "https://pubmed.ncbi.nlm.nih.gov/11014146/",
  },
  {
    authors: "Spoormaker, V. I. & van den Bout, J. (2005)",
    title:
      "The prevalence of sleep disorders in the Netherlands",
    journal: "Sleep Medicine.",
    detail: "Related epidemiological sleep research",
    url: "https://pubmed.ncbi.nlm.nih.gov/15961022/",
  },
];

const faqs = [
  {
    question: "Kâbus nedir?",
    answer:
      "Kâbus, genellikle güçlü olumsuz duygularla, özellikle korku veya tehdit hissiyle birlikte görülen ve çoğunlukla uyandıktan sonra hatırlanan rahatsız edici bir rüya deneyimidir. Tek bir kötü rüya yaşamak, kâbus bozukluğu olduğu anlamına gelmez.",
  },
  {
    question: "Kötü rüya ile kâbus aynı şey mi?",
    answer:
      "Gündelik dilde birbirinin yerine kullanılabilirler. Klinik açıdan ise kâbuslar daha belirgin korku, tehdit ve uyanma ile karakterize edilebilir. Sık tekrarlayan ve ciddi biçimde uykuya veya günlük yaşama zarar veren kâbuslar ayrıca değerlendirilebilir.",
  },
  {
    question: "Stres kâbuslara neden olur mu?",
    answer:
      "Stres ve duygusal olarak yoğun yaşam olayları kâbuslarla ilişkili olabilir. Ancak stres yaşayan herkes kâbus görmez ve her kâbusun nedeni stres değildir.",
  },
  {
    question: "Travmadan sonra kâbus görmek normal mi?",
    answer:
      "Travmatik deneyimlerden sonra rahatsız edici rüyalar ve kâbuslar görülebilir. Ancak tek başına kâbus görmek travma sonrası stres bozukluğu tanısı anlamına gelmez. Tanı için başka belirtilerin de değerlendirilmesi gerekir.",
  },
  {
    question: "Kâbuslar gelecekte kötü bir şey olacağını gösterir mi?",
    answer:
      "Hayır. Kâbusların gelecekte gerçekleşecek olayları güvenilir biçimde öngördüğünü gösteren bilimsel kanıt bulunmamaktadır.",
  },
  {
    question: "Sık kâbus görmek ne zaman önemlidir?",
    answer:
      "Kâbuslar sıklaşıyor, uykuyu bozuyor, uyumaktan kaçınmaya neden oluyor veya gündüz işlevselliğini belirgin biçimde etkiliyorsa durum yalnızca rüya yorumu olarak ele alınmamalıdır. Bir sağlık profesyoneliyle görüşmek uygun olabilir.",
  },
  {
    question: "Kâbusumu yorumlamak onu azaltır mı?",
    answer:
      "Bunu garanti etmek mümkün değildir. Bazı psikolojik yaklaşımlar rüya içeriğini anlamlandırmayı veya kâbusun senaryosuyla çalışmayı kullanır. Ancak etkili olduğu gösterilen klinik yöntemler, yalnızca sembol yorumlamasından daha kapsamlı olabilir.",
  },
];

export default function NightmaresPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kâbuslar ve Yoğun Rüyalar: Neden Kâbus Görürüz?",
    description:
      "Kâbuslar, kötü rüyalar, stres, travma ve uyku arasındaki ilişki hakkında bilimsel bilgiler.",
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

          <span>Kâbuslar ve yoğun rüyalar</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-10 sm:pb-18 sm:pt-14">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            KÂBUSLAR VE YOĞUN RÜYALAR
          </p>

          <h1 className="max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
            Neden kâbus
            <br />
            görürüz?
          </h1>

          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[#686158]">
            Bazı rüyalar uyandığımızda birkaç dakika içinde kaybolurken
            bazıları uzun süre etkisini sürdürebilir. Özellikle korku ve
            tehdit hissi içeren kâbuslar, rüya deneyiminin en yoğun
            biçimlerinden biridir.
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#817970]">
            Kâbusların stres, duygusal deneyimler, travma ve uyku süreçleriyle
            ilişkisi araştırılmaktadır. Ancak her kâbusun tek bir nedeni veya
            sembolik anlamı olduğu söylenemez.
          </p>
        </header>

        {/* KEY POINT */}
        <section className="mb-10 rounded-[28px] bg-[#292621] px-7 py-9 text-white sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
            TEMEL AYRIM
          </p>

          <h2 className="mt-4 text-2xl font-light">
            Kötü bir rüya görmek ile kâbus bozukluğu aynı şey değildir.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d4cec5]">
            Zaman zaman kâbus görmek oldukça yaygın bir deneyimdir. Klinik
            açıdan önemli olan ise kâbusların ne kadar sık olduğu, uykuyu
            nasıl etkilediği ve kişinin günlük yaşamında ne kadar sorun
            oluşturduğudur.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="rounded-[30px] border border-[#d9d1c7] bg-[#faf8f4] px-7 py-10 sm:px-12 sm:py-14">

          <div className="space-y-12 text-[15px] leading-8 text-[#454039]">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kâbus nedir?
              </h2>

              <p className="mt-5">
                Kâbus, genellikle yoğun korku, tehdit, çaresizlik veya başka
                güçlü olumsuz duygular içeren rahatsız edici bir rüya
                deneyimidir.
              </p>

              <p className="mt-4">
                Kişi çoğu zaman rüyanın içeriğini uyandıktan sonra
                hatırlayabilir. Rüya sırasında kovalanmak, düşmek, bir
                tehlikeden kaçamamak veya sevilen birini kaybetmek gibi
                senaryolar görülebilir.
              </p>

              <p className="mt-4">
                Ancak belirli bir rüya temasının herkes için aynı psikolojik
                anlamı olduğu sonucunu çıkarmak doğru değildir.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kötü rüya ile kâbus arasındaki fark
              </h2>

              <p className="mt-5">
                Her rahatsız edici rüya klinik anlamda kâbus değildir.
                İnsanlar zaman zaman garip, huzursuz edici veya olumsuz
                rüyalar görebilir.
              </p>

              <p className="mt-4">
                Kâbuslarda ise özellikle yoğun olumsuz duygu, tehdit hissi ve
                rüyadan uyanma daha belirgin olabilir.
              </p>

              <p className="mt-4">
                Kâbus bozukluğu ise bundan daha farklı bir klinik kavramdır.
                Tek bir kâbus veya ara sıra görülen kötü rüyalar tek başına
                bir bozukluk anlamına gelmez.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-normal">
                Neden kâbus görürüz?
              </h2>

              <p className="mt-5">
                Kâbusların tek bir nedeni yoktur.
              </p>

              <p className="mt-4">
                Stres, duygusal olarak yoğun deneyimler, travmatik olaylar,
                uyku düzensizlikleri, bazı ilaçlar ve çeşitli uyku veya
                psikolojik durumlar kâbuslarla ilişkili olabilir.
              </p>

              <p className="mt-4">
                Ayrıca bazı kişiler kâbus görmeye diğerlerinden daha yatkın
                olabilir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Bilimsel sınır:</strong> “Kâbus gördüm, demek ki
                  bilinçaltım bana şu mesajı veriyor” şeklinde tek adımlı bir
                  açıklama yapmak mümkün değildir.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-normal">
                Stres kâbusları artırabilir mi?
              </h2>

              <p className="mt-5">
                Duygusal stres ve yaşamda meydana gelen önemli olaylar kâbus
                deneyimleriyle ilişkili olabilir.
              </p>

              <p className="mt-4">
                Yoğun iş stresi, ilişki sorunları, kayıp, belirsizlik veya
                başka önemli yaşam olayları bazı kişilerde daha rahatsız edici
                rüyalarla birlikte görülebilir.
              </p>

              <p className="mt-4">
                Bununla birlikte stresin rüyalara etkisi kişiden kişiye
                değişir. Aynı olay iki kişide tamamen farklı rüya deneyimleri
                oluşturabilir.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-normal">
                Travma ve kâbuslar
              </h2>

              <p className="mt-5">
                Travmatik deneyimlerden sonra rahatsız edici rüyalar ve
                kâbuslar görülebilir.
              </p>

              <p className="mt-4">
                Bazı durumlarda rüyalar travmatik olayın doğrudan veya
                değiştirilmiş bir biçimde tekrarını içerebilir. Bazı kişilerde
                ise rüya doğrudan olayla ilgili olmayan ancak benzer korku,
                çaresizlik veya tehdit duygularını taşıyabilir.
              </p>

              <p className="mt-4">
                Ancak kâbus görmek tek başına travma sonrası stres bozukluğu
                anlamına gelmez. Böyle bir değerlendirme başka belirtilerin
                de incelenmesini gerektirir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Önemli:</strong> Tekrarlayan veya yoğun kâbuslar
                  kişinin uykusunu ve günlük yaşamını belirgin şekilde
                  etkiliyorsa yalnızca sembolik rüya yorumu yeterli bir
                  yaklaşım olmayabilir.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kâbuslar neden bu kadar gerçek hissedilir?
              </h2>

              <p className="mt-5">
                Rüya sırasında kişi olayların gerçekten yaşandığına benzer
                duygusal tepkiler verebilir.
              </p>

              <p className="mt-4">
                Rüyadaki olay mantıksız olsa bile korku, kalp çarpıntısı,
                çaresizlik veya panik hissi son derece gerçek olabilir.
              </p>

              <p className="mt-4">
                Bu nedenle kişi uyandıktan sonra bile rüyanın duygusal etkisi
                bir süre devam edebilir.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kâbuslar REM uykusunda mı görülür?
              </h2>

              <p className="mt-5">
                Kâbuslar özellikle REM uykusundan uyanmalar sırasında canlı
                ve ayrıntılı rüya deneyimleriyle ilişkilendirilebilir.
              </p>

              <p className="mt-4">
                Bununla birlikte rüya deneyimi yalnızca REM uykusuna özgü
                değildir. NREM uykusundan uyanmalarda da rüyalar
                bildirilmektedir.
              </p>

              <p className="mt-4">
                Bu nedenle “bütün korkulu rüyalar yalnızca REM'de olur”
                şeklindeki kesin ifade fazla basitleştirici olur.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kâbuslar geleceği haber verir mi?
              </h2>

              <p className="mt-5">
                Kâbusların gelecekte gerçekleşecek olayları güvenilir biçimde
                öngördüğünü gösteren bilimsel kanıt bulunmamaktadır.
              </p>

              <p className="mt-4">
                Bir kâbusun daha sonra yaşanan bir olaya benzediğini fark
                etmek etkileyici olabilir. Ancak bu durum geleceği tahmin
                ettiğini kanıtlamaz.
              </p>

              <p className="mt-4">
                Tesadüf, seçici hatırlama ve sonradan kurulan benzerlikler
                böyle deneyimlerin oluşmasına katkıda bulunabilir.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kâbusların sembolik anlamı var mı?
              </h2>

              <p className="mt-5">
                Bir kâbus psikolojik olarak yorumlanabilir; ancak sembollere
                otomatik anlamlar vermek güvenilir bir yöntem değildir.
              </p>

              <p className="mt-4">
                Örneğin rüyada kovalanmak bazı kişiler için kontrol kaybıyla,
                bazıları için belirli bir yaşam sorunuyla veya başka bir
                kişisel deneyimle ilişkili olabilir.
              </p>

              <p className="mt-4">
                Kâbusun anlamını araştırırken rüyadaki olay kadar kişinin
                rüyada ne hissettiği ve gerçek yaşamındaki bağlam da önemlidir.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kâbuslar neden tekrar eder?
              </h2>

              <p className="mt-5">
                Bazı kişiler benzer kâbusları tekrar tekrar yaşayabilir.
              </p>

              <p className="mt-4">
                Tekrarlayan kâbuslarda benzer duygusal temalar, devam eden
                stres kaynakları veya geçmiş deneyimler rol oynayabilir.
              </p>

              <p className="mt-4">
                Fakat tekrar eden her kâbusun “çözülmemiş bir travmayı”
                gösterdiği söylenemez.
              </p>

              <p className="mt-4">
                Rüyanın zaman içinde nasıl değiştiğine bakmak, yalnızca
                sembolü tek başına yorumlamaktan daha fazla bilgi sağlayabilir.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kâbuslar uyku kalitesini etkileyebilir mi?
              </h2>

              <p className="mt-5">
                Sık kâbuslar kişinin gece boyunca uyanmasına, tekrar uykuya
                dalmakta zorlanmasına veya uyumaktan endişe etmesine neden
                olabilir.
              </p>

              <p className="mt-4">
                Bu durum zaman içinde uyku kalitesi ve gündüz işlevselliği
                üzerinde etkili olabilir.
              </p>

              <p className="mt-4">
                Bu nedenle sık ve rahatsız edici kâbuslar yalnızca “rüya
                yorumu” olarak ele alınmamalıdır.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-normal">
                Sık kâbuslarda ne zaman profesyonel destek düşünülmeli?
              </h2>

              <p className="mt-5">
                Kâbuslar ara sıra görüldüğünde genellikle tek başına olağandışı
                bir durum değildir.
              </p>

              <p className="mt-4">
                Ancak kâbuslar sıklaşıyor, uzun süre devam ediyor, uykuyu
                belirgin biçimde bozuyor veya kişinin gündüz yaşamını
                etkiliyorsa bir hekim veya ruh sağlığı profesyoneliyle
                görüşmek uygun olabilir.
              </p>

              <p className="mt-4">
                Özellikle travmatik bir deneyimin ardından başlayan yoğun
                kâbuslarda profesyonel değerlendirme önem taşıyabilir.
              </p>

              <p className="mt-4">
                Burada amaç rüyaya bir “gizli anlam” bulmaktan önce kişinin
                uyku ve genel iyilik hâlini korumaktır.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kâbuslarla çalışmak mümkün mü?
              </h2>

              <p className="mt-5">
                Evet. Kâbuslarla ilişkili klinik yaklaşımlar bulunmaktadır.
              </p>

              <p className="mt-4">
                Özellikle tekrarlayan kâbuslarda bazı psikolojik tedavi
                yöntemleri ve rüya senaryosuyla çalışma teknikleri
                araştırılmıştır.
              </p>

              <p className="mt-4">
                Bu yöntemler, yalnızca sembolün anlamını bulmaya çalışmaktan
                daha kapsamlıdır ve kişinin uyku deneyimini doğrudan
                hedefleyebilir.
              </p>

              <p className="mt-4">
                Hangi yaklaşımın uygun olduğu kişinin durumuna göre
                değerlendirilmelidir.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl font-normal">
                INUS kâbuslara nasıl yaklaşır?
              </h2>

              <p className="mt-5">
                INUS bir kâbusu geleceğin habercisi veya kesin bir psikolojik
                teşhis olarak değerlendirmez.
              </p>

              <p className="mt-4">
                Rüyadaki olaylar, kişiler, semboller, korku veya diğer
                duygular ve kişinin güncel yaşamındaki bağlam birlikte
                incelenebilir.
              </p>

              <p className="mt-4">
                Ancak kâbusların kişinin uykusunu ve günlük yaşamını ciddi
                biçimde etkilediği durumlarda psikolojik yorumun profesyonel
                değerlendirmeye alternatif olmadığı açıkça korunur.
              </p>

              <blockquote className="mt-7 border-l-2 border-[#9b9186] pl-6 text-xl font-light leading-8 text-[#625c54]">
                “Bir kâbusun anlamını araştırmak önemlidir; ama kâbusun
                kişinin hayatını nasıl etkilediğini anlamak daha önemlidir.”
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
                      • Kâbuslar güçlü olumsuz duygular içerebilir.
                    </li>
                    <li>
                      • Stres ve duygusal deneyimler kâbuslarla ilişkili
                      olabilir.
                    </li>
                    <li>
                      • Travma sonrası kâbuslar görülebilir.
                    </li>
                    <li>
                      • Sık kâbuslar uyku kalitesini etkileyebilir.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#eee8df] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    KESİN OLARAK SÖYLEYEMEDİĞİMİZ
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Her kâbusun tek bir nedeni olduğunu.
                    </li>
                    <li>
                      • Her kâbusun travmayı gösterdiğini.
                    </li>
                    <li>
                      • Kâbusların geleceği haber verdiğini.
                    </li>
                    <li>
                      • Her sembolün herkes için aynı anlama geldiğini.
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
            Bu sayfadaki açıklamalar; kâbuslar, kötü rüyalar, uyku, duygusal
            süreçler ve travma sonrası rüya deneyimleri üzerine bilimsel
            literatür temel alınarak hazırlanmıştır.
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
            Kâbuslar hakkında
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
            Yoğun rüyanı keşfet.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d4cec5]">
            Rüyanın olaylarını, duygularını ve kişisel bağlamını birlikte
            incele.
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