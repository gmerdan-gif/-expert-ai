import Link from "next/link";

export const metadata = {
  title: "Rüya Sembolleri | Semboller ve Rüya Yorumu | INUS",
  description:
    "Rüya sembolleri gerçekten ne anlama gelir? Rüya sözlüklerinin sınırları, kişisel çağrışımlar, Jungcu yaklaşım ve modern rüya araştırmaları hakkında kapsamlı bilgiler.",
};

const sources = [
  {
    authors: "Hall, C. S. & Van de Castle, R. L. (1966)",
    title: "The Content Analysis of Dreams",
    journal: "Appleton-Century-Crofts.",
    detail: "Classic systematic approach to dream content analysis",
    url: "https://psycnet.apa.org/record/1967-35001-000",
  },
  {
    authors: "Schredl, M. (2010)",
    title: "Characteristics and contents of dreams",
    journal: "International Review of Neurobiology, 92, 135–154.",
    detail: "PMID 20870066 · DOI 10.1016/S0074-7742(10)92007-2",
    url: "https://pubmed.ncbi.nlm.nih.gov/20870066/",
  },
  {
    authors: "Domhoff, G. W. (2003)",
    title:
      "The Scientific Study of Dreams: Neural Networks, Cognitive Development, and Content Analysis",
    journal: "American Psychological Association.",
    detail: "Research-based approach to dream content",
    url: "https://psycnet.apa.org/record/2003-88328-000",
  },
  {
    authors: "Blagrove, M. et al. (2019)",
    title: "Reactions to Dream Content: Continuity and Non-continuity",
    journal: "Frontiers in Psychology, 10, 2676.",
    detail: "PMID 31849778 · DOI 10.3389/fpsyg.2019.02676",
    url: "https://pubmed.ncbi.nlm.nih.gov/31849778/",
  },
  {
    authors: "Roesler, C. (2023)",
    title:
      "Dream interpretation and empirical dream research",
    journal: "International Journal of Psychoanalysis.",
    detail:
      "Discussion of the relationship between empirical dream research and interpretation",
    url: "https://pubmed.ncbi.nlm.nih.gov/36706129/",
  },
  {
    authors: "Jung, C. G. (1964)",
    title: "Man and His Symbols",
    journal: "Aldus Books.",
    detail:
      "Classic Jungian discussion of symbolic material and psychological interpretation",
    url: "https://archive.org/details/manhissymbols0000jung",
  },
];

const faqs = [
  {
    question: "Rüya sembollerinin herkes için aynı anlamı var mı?",
    answer:
      "Bunu destekleyen güvenilir bir bilimsel sistem bulunmamaktadır. Aynı sembol farklı kişilerde farklı çağrışımlara sahip olabilir. Sembolün anlamını değerlendirirken kişinin kendi yaşamı ve sembolle ilişkisi önemlidir.",
  },
  {
    question: "Rüyada yılan görmek ne anlama gelir?",
    answer:
      "Tek bir evrensel anlamı olduğu söylenemez. Yılan bir kişi için korku, başka biri için hayranlık, dönüşüm, çocukluk anısı veya başka bir kişisel çağrışım taşıyabilir. Rüyadaki bağlam ve kişinin yılanla ilişkisi daha önemlidir.",
  },
  {
    question: "Rüyada su görmek ne anlama gelir?",
    answer:
      "Su için de herkes için geçerli tek bir anlam bulunmamaktadır. Suyun rüyadaki durumu, kişinin verdiği duygusal tepki ve kişisel geçmişi farklı yorumlara yol açabilir.",
  },
  {
    question: "Rüya sözlükleri bilimsel mi?",
    answer:
      "İnternette bulunan sabit sembol listelerinin bilimsel olarak her kişi için geçerli olduğu gösterilmiş değildir. Bunlar kültürel veya popüler yorumlar sunabilir; ancak psikolojik değerlendirme için tek başına yeterli değildir.",
  },
  {
    question: "Jung'a göre semboller neden önemlidir?",
    answer:
      "Jungcu yaklaşımda semboller bilinçdışı süreçlerin ifade biçimleri olarak ele alınabilir. Ancak Jung'un yaklaşımı ile modern deneysel rüya araştırması aynı bilimsel yöntem üzerine kurulmaz. Bu nedenle Jungcu yorumları ampirik bulgularla aynı tür kanıt olarak değerlendirmemek gerekir.",
  },
  {
    question: "Bir sembolün anlamını nasıl bulabilirim?",
    answer:
      "Öncelikle sembolün sizde ne çağrıştırdığını düşünmek daha yararlıdır. Ardından sembolün rüyadaki rolü, rüyadaki diğer kişiler ve olaylar, hissettiğiniz duygu ve son dönemdeki yaşam deneyimleri birlikte değerlendirilebilir.",
  },
];

export default function DreamSymbolsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rüya Sembolleri: Evrensel Anlamlar Var mı?",
    description:
      "Rüya sembollerinin kişisel bağlam, psikoloji ve modern rüya araştırmaları açısından incelenmesi.",
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

          <span>Rüya sembolleri</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-10 sm:pb-18 sm:pt-14">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            RÜYA SEMBOLLERİ
          </p>

          <h1 className="max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
            Rüyadaki sembolün
            <br />
            anlamı nedir?
          </h1>

          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[#686158]">
            İnternette rüya sembollerini açıklayan binlerce sözlük bulunuyor.
            Ancak bir sembolün herkes için aynı psikolojik anlama geldiğini
            gösteren güvenilir bir bilimsel sistem bulunmuyor.
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#817970]">
            Bir sembolü anlamaya çalışırken daha önemli soru çoğu zaman
            “Bu sembol genel olarak ne demek?” değil, “Bu sembol bu kişinin
            hayatında ne çağrıştırıyor?” sorusudur.
          </p>
        </header>

        {/* KEY POINT */}
        <section className="mb-10 rounded-[28px] bg-[#292621] px-7 py-9 text-white sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
            INUS'UN TEMEL YAKLAŞIMI
          </p>

          <h2 className="mt-4 text-2xl font-light">
            Sembolün sözlük anlamından önce kişisel anlamına bak.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d4cec5]">
            Aynı sembol iki farklı kişide tamamen farklı duygular ve
            çağrışımlar yaratabilir. Bu nedenle sembolü rüyanın geri
            kalanından ayırmak çoğu zaman yanıltıcıdır.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="rounded-[30px] border border-[#d9d1c7] bg-[#faf8f4] px-7 py-10 sm:px-12 sm:py-14">

          <div className="space-y-12 text-[15px] leading-8 text-[#454039]">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-normal">
                Sembol nedir?
              </h2>

              <p className="mt-5">
                Sembol, bir şeyin yalnızca kendisini temsil etmekten daha geniş
                çağrışımlar taşıyabilen bir ifade biçimidir. Rüyalarda kişiler,
                nesneler, hayvanlar, mekânlar ve olaylar sembolik bir işlev
                kazanabilir.
              </p>

              <p className="mt-4">
                Ancak burada önemli bir ayrım vardır: Bir şeyin sembolik
                olabilmesi, onun herkes için aynı şeyi sembolize ettiği
                anlamına gelmez.
              </p>

              <p className="mt-4">
                Örneğin “ev” bir kişi için güvenlik, başka biri için aile,
                başka biri için çocukluk veya baskı anlamına gelebilir.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-normal">
                Neden rüya sözlükleri bu kadar popüler?
              </h2>

              <p className="mt-5">
                Rüyalar karmaşık ve bazen anlaşılması güç deneyimlerdir.
                İnsan zihni belirsiz bir deneyime hızlı ve net bir açıklama
                getirmek ister.
              </p>

              <p className="mt-4">
                “Yılan = düşman”, “su = duygu”, “diş dökülmesi = kaygı” gibi
                eşleştirmeler bu nedenle cazip görünür. Tek bir sembol için
                kolayca ulaşılabilen tek bir cevap sunarlar.
              </p>

              <p className="mt-4">
                Sorun, bu eşleştirmelerin çoğunun kişinin bireysel bağlamını
                dışarıda bırakmasıdır.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> Yılanlardan korkan birinin rüyasında
                  yılan görmesi ile yıllardır yılan besleyen birinin aynı
                  rüyayı görmesi aynı psikolojik deneyim olmayabilir.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-normal">
                Bilimsel olarak “evrensel sembol sözlüğü” var mı?
              </h2>

              <p className="mt-5">
                Modern rüya araştırmalarında tüm insanlar için geçerli,
                sembol → tek anlam şeklinde çalışan doğrulanmış bir sistem
                bulunmamaktadır.
              </p>

              <p className="mt-4">
                Bilimsel rüya araştırmaları daha çok rüya içeriğinin
                özelliklerini, tekrar eden temaları, duyguları, günlük
                yaşamla ilişkileri ve bireysel farklılıkları incelemektedir.
              </p>

              <p className="mt-4">
                Bu, sembollerin psikolojik olarak hiçbir anlam taşımadığı
                anlamına gelmez. Yalnızca anlamın otomatik olarak sözlükten
                alınamayacağı anlamına gelir.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-normal">
                Aynı sembol neden farklı insanlar için farklı olabilir?
              </h2>

              <p className="mt-5">
                İnsanların yaşam deneyimleri, kültürleri, ilişkileri ve
                kişisel anıları birbirinden farklıdır.
              </p>

              <p className="mt-4">
                Bir kişinin çocukluk evinin mutfakla ilgili güçlü ve sıcak
                anıları olabilir. Başka bir kişi için aynı mekân aile
                çatışmalarıyla ilişkili olabilir.
              </p>

              <p className="mt-4">
                Dolayısıyla rüyada “mutfak” görmek tek başına belirli bir
                psikolojik durumu kanıtlamaz.
              </p>

              <p className="mt-4">
                Sembolün kişisel çağrışımı, rüyadaki konumu ve rüyanın
                duygusal atmosferi birlikte değerlendirilmelidir.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-normal">
                Jung sembollere neden önem veriyordu?
              </h2>

              <p className="mt-5">
                Carl Gustav Jung'un analitik psikolojisinde semboller önemli
                bir yere sahiptir. Jung, rüyaların bilinçdışı süreçlerin
                kendilerini ifade edebileceği alanlardan biri olduğunu
                düşünüyordu.
              </p>

              <p className="mt-4">
                Jungcu yaklaşımda sembolü yalnızca tek bir sözlük karşılığına
                indirgemek yerine, sembolün kişinin psikolojik yaşamındaki
                ilişkisine bakmak daha önemlidir.
              </p>

              <p className="mt-4">
                Bununla birlikte Jung'un teorileri ile günümüz deneysel
                nörobilim araştırmaları aynı metodolojik çerçeveye sahip
                değildir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Önemli ayrım:</strong> Jungcu bir yorumlayıcı
                  yaklaşım kullanılabilir; ancak bunu “bilimsel olarak
                  kanıtlanmış sembol anlamı” şeklinde sunmak doğru değildir.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-normal">
                Arketip ile sembol aynı şey mi?
              </h2>

              <p className="mt-5">
                Jungcu psikolojide arketip, sembolden daha geniş bir kavramdır.
                Arketipler belirli bir nesnenin veya görüntünün kendisi
                değildir; insan deneyiminde tekrar eden temel örüntülerle
                ilişkilendirilir.
              </p>

              <p className="mt-4">
                Örneğin “anne”, “gölge”, “kahraman” veya “bilge kişi” gibi
                kavramlar Jungcu literatürde arketipsel temalar olarak
                incelenebilir.
              </p>

              <p className="mt-4">
                Ancak rüyada görülen her anne figürünün “Anne arketipi”
                olduğunu söylemek de doğru değildir. Yine kişinin rüyadaki
                deneyimi ve çağrışımları önemlidir.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-normal">
                Bir sembolü yorumlamaya nereden başlanmalı?
              </h2>

              <p className="mt-5">
                Kullanılabilecek en basit başlangıç noktası kişisel
                çağrışımdır.
              </p>

              <ol className="mt-5 space-y-4 pl-5">
                <li>
                  <strong>1.</strong> Bu sembol bana ilk olarak ne
                  çağrıştırıyor?
                </li>
                <li>
                  <strong>2.</strong> Bu sembolle ilgili geçmişimde önemli
                  bir olay var mı?
                </li>
                <li>
                  <strong>3.</strong> Rüyada sembol ortaya çıktığında ne
                  hissettim?
                </li>
                <li>
                  <strong>4.</strong> Sembol rüyanın hangi bölümünde ortaya
                  çıktı?
                </li>
                <li>
                  <strong>5.</strong> Rüyadaki diğer kişiler ve olaylarla
                  nasıl bir ilişkisi vardı?
                </li>
              </ol>

              <p className="mt-5">
                Bu sorular sembolü tek başına yorumlamak yerine rüyanın
                bütününe yerleştirmeye yardımcı olur.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-normal">
                “Su = duygu” neden yetersiz bir açıklama?
              </h2>

              <p className="mt-5">
                Su gerçekten bazı rüyalarda güçlü bir sembolik işleve sahip
                olabilir. Ancak suyun kendisine otomatik olarak “duygu”
                anlamını vermek yeterli değildir.
              </p>

              <p className="mt-4">
                Rüyadaki su sakin bir göl olabilir, taşan bir nehir olabilir,
                deniz olabilir veya kişinin içinde yüzdüğü karanlık bir su
                olabilir.
              </p>

              <p className="mt-4">
                Kişinin suya verdiği tepki de değişebilir. Huzur, korku,
                merak veya özgürlük hissedebilir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Daha iyi yaklaşım:</strong> “Su ne demek?” yerine
                  “Bu rüyadaki suyla ilişkim neydi ve rüyadaki duyguyu nasıl
                  değiştirdi?” sorusu daha fazla bilgi sağlayabilir.
                </p>
              </div>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-normal">
                Rüyanın tamamı sembolden daha önemli olabilir
              </h2>

              <p className="mt-5">
                Rüyadaki tek bir nesneyi seçip yorumlamak bazen rüyanın
                genel yapısını gözden kaçırmaya neden olur.
              </p>

              <p className="mt-4">
                Aynı sembol farklı olay örgülerinde tamamen farklı bir işlev
                görebilir.
              </p>

              <p className="mt-4">
                Örneğin “kapı” rüyada kaçış yolu olabilir, içeri girilemeyen
                bir engel olabilir veya kişinin birini beklediği yer olabilir.
                Kapının anlamını yalnızca “fırsat” olarak tanımlamak rüyanın
                gerçek bağlamını kaçırabilir.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-normal">
                Kültür sembollerin anlamını etkiler mi?
              </h2>

              <p className="mt-5">
                Kültür, dil, din, aile ve kişisel yaşam deneyimleri insanların
                sembollerle kurduğu ilişkileri etkileyebilir.
              </p>

              <p className="mt-4">
                Aynı hayvan, renk veya nesne farklı kültürel ortamlarda farklı
                çağrışımlara sahip olabilir.
              </p>

              <p className="mt-4">
                Bu nedenle rüya analizinde yalnızca “insanlar genel olarak
                bunu böyle yorumlar” demek yeterli değildir.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-normal">
                Sembol gerçekten bilinçdışından mı geliyor?
              </h2>

              <p className="mt-5">
                Rüyalardaki sembolik görüntülerin kaynağı hakkında farklı
                psikolojik ve nörobilimsel açıklamalar bulunmaktadır.
              </p>

              <p className="mt-4">
                Bazı yaklaşımlar rüyaları bilinçdışı psikolojik süreçlerle
                ilişkilendirirken, diğer araştırmalar rüya içeriğini bellek,
                duygu, algı ve bilişsel süreçlerin uyku sırasında ortaya çıkan
                birleşimi olarak inceler.
              </p>

              <p className="mt-4">
                Bu nedenle tek bir rüya sembolünün “bilinçdışının kesin
                mesajı” olduğunu söylemek bilimsel olarak fazla iddialı olur.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-normal">
                INUS neden rüya sözlüğü kullanmıyor?
              </h2>

              <p className="mt-5">
                Çünkü INUS'un amacı bir sembole hazır bir cevap vermek değil,
                kişinin kendi rüyasını anlamasına yardımcı olmaktır.
              </p>

              <p className="mt-4">
                “Yılan = düşman” demek kolaydır. Fakat kişinin rüyasındaki
                yılanı neden gördüğünü anlamak için yılanın nasıl göründüğü,
                ne yaptığı, kişinin ne hissettiği ve rüyadaki diğer unsurlarla
                nasıl ilişkilendiği çok daha fazla bilgi sağlar.
              </p>

              <p className="mt-4">
                Bu yaklaşım INUS'un Jungcu ve bağlamsal analiz anlayışıyla
                uyumludur: sembol tek başına değil, rüyanın bütünlüğü içinde
                ele alınır.
              </p>

              <blockquote className="mt-7 border-l-2 border-[#9b9186] pl-6 text-xl font-light leading-8 text-[#625c54]">
                “Sembolün anlamını aramadan önce, onun bu rüyada ne yaptığını
                anlamaya çalış.”
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
                    DAHA GÜVENİLİR YAKLAŞIM
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Sembolü rüyanın bütünü içinde değerlendirmek.
                    </li>
                    <li>
                      • Kişisel çağrışımları dikkate almak.
                    </li>
                    <li>
                      • Rüyadaki duyguyu incelemek.
                    </li>
                    <li>
                      • Güncel yaşam bağlamını hesaba katmak.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#eee8df] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    KAÇINILMASI GEREKEN
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Her sembole tek ve değişmez anlam vermek.
                    </li>
                    <li>
                      • İnternet rüya sözlüklerini bilimsel gerçek kabul etmek.
                    </li>
                    <li>
                      • Rüyadaki tek bir nesneden kesin sonuç çıkarmak.
                    </li>
                    <li>
                      • Yorumu gelecek tahmini veya teşhis gibi sunmak.
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
            Bu sayfadaki yaklaşım; rüya içeriği araştırmaları, rüya yorumlama
            literatürü ve Jungcu psikolojik yaklaşımın temel kaynakları
            birlikte değerlendirilerek hazırlanmıştır.
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
            Rüya sembolleri hakkında
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
            Rüyandaki sembolleri keşfet.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d4cec5]">
            Rüyandaki sembolleri hazır anlamlarla değil, kendi yaşamındaki
            çağrışımları ve rüyanın bütünü üzerinden incele.
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