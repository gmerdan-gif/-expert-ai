import Link from "next/link";

export const metadata = {
  title: "Rüyalar ve Bellek | Uyku, Öğrenme ve Rüya Araştırmaları | INUS",
  description:
    "Rüyalar ve bellek arasındaki ilişki nedir? Uyku sırasında öğrenme, bellek pekiştirme, rüya içeriği ve güncel bilimsel araştırmalar hakkında kapsamlı bilgiler.",
};

const sources = [
  {
    authors: "Hudachek, L. & Wamsley, E. J. (2023)",
    title:
      "A meta-analysis of the relation between dream content and memory consolidation",
    journal: "Sleep, 46(12), zsad111.",
    detail: "PMID 37058584 · DOI 10.1093/sleep/zsad111",
    url: "https://pubmed.ncbi.nlm.nih.gov/37058584/",
  },
  {
    authors: "Bloxham, A. & Horton, C. L. (2024)",
    title:
      "Enhancing and advancing the understanding and study of dreaming and memory consolidation",
    journal: "Consciousness and Cognition, 123, 103719.",
    detail: "PMID 38941924 · DOI 10.1016/j.concog.2024.103719",
    url: "https://pubmed.ncbi.nlm.nih.gov/38941924/",
  },
  {
    authors: "Eichenlaub, J.-B. et al. (2023)",
    title:
      "The memory sources of dreams: serial awakenings across sleep stages and time of night",
    journal: "Sleep, 46(2).",
    detail: "PMCID PMC10091095",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10091095/",
  },
  {
    authors: "Wamsley, E. J. & Stickgold, R. (2011)",
    title: "Memory, sleep and dreaming: experiencing consolidation",
    journal: "Sleep Medicine Clinics, 6(1), 97–108.",
    detail: "Related review literature on sleep, memory and dreaming",
    url: "https://pubmed.ncbi.nlm.nih.gov/21243074/",
  },
  {
    authors: "Scullin, M. K. et al. (2018)",
    title:
      "The effects of sleep on memory and learning",
    journal: "Related experimental and review literature.",
    detail: "Sleep-dependent memory research",
    url: "https://pubmed.ncbi.nlm.nih.gov/29420982/",
  },
  {
    authors: "Tamminen, J. et al. (2017)",
    title:
      "Sleep spindle activity is associated with the integration of new memories",
    journal: "Journal of Sleep Research.",
    detail: "Related research on sleep and memory integration",
    url: "https://pubmed.ncbi.nlm.nih.gov/28240731/",
  },
];

const faqs = [
  {
    question: "Rüyalar gerçekten hafızayı güçlendirir mi?",
    answer:
      "Rüya içeriği ile bellek süreçleri arasında ilişkiler bulunduğuna dair kanıtlar vardır. Ancak rüya görmenin tek başına hafızayı güçlendirdiği veya rüyanın bellek pekiştirmenin doğrudan nedeni olduğu kesin olarak gösterilmiş değildir.",
  },
  {
    question: "Uyurken öğrendiğimiz bilgileri rüyamızda görür müyüz?",
    answer:
      "Bazı deneylerde yeni öğrenilen bilgilerin veya öğrenmeyle ilişkili unsurların daha sonra bildirilen rüyalarda ortaya çıkabildiği görülmüştür. Ancak bu her öğrenmenin rüyaya girdiği anlamına gelmez.",
  },
  {
    question: "Rüyamda eski bir anımı gördüysem beynim onu işliyor mudur?",
    answer:
      "Bunun mümkün olduğunu söyleyen teoriler vardır, fakat tek bir rüyanın belirli bir anıyı işlediğini kesin olarak söylemek mümkün değildir. Rüya içeriğinde bir anının bulunması ile o anının bellekte pekiştirilmesi aynı şey değildir.",
  },
  {
    question: "REM uykusu bellek için daha mı önemlidir?",
    answer:
      "Bellek pekiştirme yalnızca REM uykusuna özgü değildir. NREM uykusunun özellikle bazı evreleri de bellek süreçlerinde önemli rol oynar. Farklı bellek türleri ve farklı öğrenme görevleri farklı uyku süreçleriyle ilişkili olabilir.",
  },
  {
    question: "Rüyamda sınav çalıştığımı görmem sınavda başarılı olacağım anlamına gelir mi?",
    answer:
      "Hayır. Böyle bir rüya gelecekteki performansı güvenilir biçimde öngördüğünü göstermez. Rüya, sınavla ilgili zihinsel veya duygusal meşguliyetin bir yansıması olabilir; ancak bundan geleceğe yönelik kesin bir sonuç çıkarılamaz.",
  },
];

export default function DreamsMemoryPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rüyalar ve Bellek: Uyku, Öğrenme ve Hatırlama",
    description:
      "Rüyalar ile bellek süreçleri arasındaki ilişkiyi bilimsel araştırmalar üzerinden açıklayan kapsamlı rehber.",
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

          <span>Rüyalar ve bellek</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-10 sm:pb-18 sm:pt-14">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            RÜYA VE BELLEK
          </p>

          <h1 className="max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
            Rüyalar ve bellek
          </h1>

          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[#686158]">
            Uyku sırasında beynimiz yalnızca dinlenmez. Öğrenilen bilgilerin
            yeniden işlenmesi, anıların düzenlenmesi ve farklı bilgi parçaları
            arasındaki ilişkilerin güçlenmesi gibi süreçler de uykuyla
            ilişkilendirilmiştir.
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#817970]">
            Peki rüyalar bu süreçlerin bir parçası mı? Araştırmalar ilginç
            ilişkiler gösteriyor; ancak rüya ile bellek arasındaki nedensel
            bağlantı hâlâ tam olarak çözülmüş değil.
          </p>
        </header>

        {/* KEY POINT */}
        <section className="mb-10 rounded-[28px] bg-[#292621] px-7 py-9 text-white sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
            TEMEL AYRIM
          </p>

          <h2 className="mt-4 text-2xl font-light">
            Rüyada bir anının görünmesi, o anının kesin olarak pekiştirildiği
            anlamına gelmez.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d4cec5]">
            Rüya içeriği ile bellek süreçleri arasında ilişki bulunabilir.
            Ancak korelasyon, yani iki olayın birlikte görülmesi, birinin
            diğerine neden olduğunu kanıtlamaz.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="rounded-[30px] border border-[#d9d1c7] bg-[#faf8f4] px-7 py-10 sm:px-12 sm:py-14">

          <div className="space-y-12 text-[15px] leading-8 text-[#454039]">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-normal">
                Uyku ile bellek arasında nasıl bir ilişki var?
              </h2>

              <p className="mt-5">
                Yeni bir şey öğrendiğimizde beynimiz bu bilgiyi yalnızca
                uyanıkken kullanmaz. Uyku sırasında yeni öğrenilen bilgilerin
                yeniden etkinleştirilmesi ve mevcut bilgilerle bütünleştirilmesi
                gibi süreçlerin gerçekleşebildiğine dair güçlü kanıtlar
                bulunuyor.
              </p>

              <p className="mt-4">
                Bu süreç genel olarak <strong>bellek konsolidasyonu</strong>
                olarak adlandırılır. Konsolidasyon, yeni oluşmuş bellek
                izlerinin zaman içinde daha kararlı ve kullanılabilir hâle
                gelmesiyle ilişkilidir.
              </p>

              <p className="mt-4">
                Ancak bellek tek bir sistem değildir. Örneğin bir telefon
                numarasını öğrenmek, bisiklete binmeyi öğrenmek ve çocuklukta
                yaşanan bir olayı hatırlamak farklı bellek süreçleri
                içerebilir.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-normal">
                Peki rüyalar bunun neresinde?
              </h2>

              <p className="mt-5">
                Rüyaların bellekle ilişkili olabileceğini düşündüren önemli
                bulgulardan biri, yakın zamanda yaşanan veya öğrenilen
                deneyimlerin rüya içeriklerinde ortaya çıkabilmesidir.
              </p>

              <p className="mt-4">
                Bir kişi gün içinde yeni bir yerde bulunmuşsa, yeni bir insanla
                tanışmışsa veya önemli bir bilgi öğrenmişse, bunların rüyada
                doğrudan veya dönüştürülmüş biçimde ortaya çıkması mümkündür.
              </p>

              <p className="mt-4">
                Bu olgu bazen <strong>day-residue</strong>, yani gün artığı
                olarak adlandırılan rüya içeriğiyle ilişkilendirilir.
              </p>

              <p className="mt-4">
                Fakat rüyada bir olayın ortaya çıkması ile o olayın bellekte
                pekiştirilmesi aynı şey değildir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> Yeni öğrendiğiniz bir yabancı
                  kelimeyi rüyanızda görmeniz, beyninizin bu kelimeyi
                  işlediğini düşündürebilir. Ancak yalnızca rüyanın içeriğine
                  bakarak kelimenin bellekte daha iyi depolandığını
                  söyleyemezsiniz.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-normal">
                2023 meta-analizi bize ne söylüyor?
              </h2>

              <p className="mt-5">
                Hudachek ve Wamsley tarafından 2023 yılında yayımlanan
                meta-analiz, öğrenmeyle ilişkili rüya içeriği ile uyku sonrası
                bellek performansı arasındaki ilişkiyi inceleyen çalışmaları
                bir araya getirdi.
              </p>

              <p className="mt-4">
                Araştırmacılar 16 çalışmadan elde edilen toplam 45 etki
                büyüklüğünü değerlendirdi ve öğrenmeyle ilişkili rüyalar ile
                daha iyi uyku sonrası bellek performansı arasında anlamlı bir
                ilişki bildirdi.
              </p>

              <p className="mt-4">
                Bu sonuç ilginç olsa da “rüya görmek belleği güçlendirir”
                sonucunu tek başına kanıtlamaz.
              </p>

              <p className="mt-4">
                Çünkü rüya içeriği, uykunun kendisi ve bellek konsolidasyonu
                aynı anda gerçekleşen süreçler olabilir. Rüyanın kendisinin
                nedensel rolünü diğer uyku süreçlerinden ayırmak oldukça
                zordur.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Bilimsel sonuç:</strong> Rüyalar ile bellek arasında
                  anlamlı bir ilişki olduğuna dair kanıt vardır. Ancak
                  ilişkinin mekanizması ve rüyanın nedensel rolü hâlâ
                  araştırılmaktadır.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-normal">
                2024 araştırmaları neden hâlâ temkinli?
              </h2>

              <p className="mt-5">
                2024 yılında yayımlanan bir değerlendirme, rüya ve bellek
                konsolidasyonu literatürünün ilerlediğini ancak araştırmaların
                önemli metodolojik sınırlamaları olduğunu vurguladı.
              </p>

              <p className="mt-4">
                Rüya içeriğini ölçmek kolay değildir. Araştırmacılar çoğu
                zaman kişilerin uyandıktan sonra anlattıkları rüyalara
                güvenmek zorundadır. Bu ise hem hatırlama hem de raporlama
                süreçlerini araştırmanın içine dahil eder.
              </p>

              <p className="mt-4">
                Ayrıca bir kişinin rüyasında belirli bir anının bulunması,
                beynin o anıyı uykuda nasıl işlediğini doğrudan göstermeyebilir.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-normal">
                Uyku sırasında öğrenilen şeyler rüyaya girebilir mi?
              </h2>

              <p className="mt-5">
                Bazı deneylerde katılımcılar uyku öncesinde belirli bilgiler
                veya deneyimlerle karşılaştırılıyor ve daha sonra rüyalarında
                bu öğrenme materyaliyle ilişkili içerikler raporlayabiliyor.
              </p>

              <p className="mt-4">
                Bu durum, beynin uyku sırasında yeni edinilmiş bilgileri
                yeniden etkinleştirebildiği düşüncesiyle uyumludur.
              </p>

              <p className="mt-4">
                Ancak burada da önemli bir sınır vardır: Rüyanın öğrenilen
                materyalle ilişkili olması, rüyanın o materyali “öğretmek” veya
                “hafızaya kaydetmek” amacıyla oluştuğu anlamına gelmez.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-normal">
                REM ve NREM bellekte farklı roller oynuyor mu?
              </h2>

              <p className="mt-5">
                Uyku tek tip bir durum değildir. REM ve NREM uykusu farklı
                nörofizyolojik özelliklere sahiptir ve bellek araştırmalarında
                farklı öğrenme türleriyle ilişkileri incelenmektedir.
              </p>

              <p className="mt-4">
                Özellikle NREM uykusunun bazı evreleri, yeni öğrenilen bilgilerin
                yeniden etkinleştirilmesi ve uzun süreli belleğe
                bütünleştirilmesi açısından önemli görülmektedir.
              </p>

              <p className="mt-4">
                REM uykusu ise özellikle duygusal bellek ve daha karmaşık
                ilişkilerin işlenmesi bağlamında araştırılmıştır.
              </p>

              <p className="mt-4">
                Ancak “NREM bellektir, REM duygudur” gibi keskin bir ayrım
                yapmak doğru değildir. Gerçek biyolojik süreçler bu kadar
                basit değildir ve uyku evreleri birbirinden tamamen bağımsız
                çalışmaz.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-normal">
                Rüyalar eski anıları neden yeniden canlandırabilir?
              </h2>

              <p className="mt-5">
                Rüyalarda yalnızca son birkaç günün olayları görülmez.
                Çocukluk anıları, yıllar önce tanınmış kişiler veya uzun
                süredir düşünülmeyen mekânlar da rüya içeriğinde ortaya
                çıkabilir.
              </p>

              <p className="mt-4">
                Bunun bir açıklaması, rüyanın yalnızca tek bir anıyı yeniden
                oynatmak yerine farklı bellek parçalarını birleştirebilmesidir.
              </p>

              <p className="mt-4">
                Bu nedenle rüyalarda zaman açısından birbirinden çok uzak
                kişilerin veya olayların aynı hikâyede bulunması şaşırtıcı
                değildir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> Çocukluk evinizde, bugün tanıdığınız
                  bir arkadaşınızla birlikte olduğunuzu görebilirsiniz.
                  Beyin için bu iki anının aynı rüya içinde birleşmesi,
                  uyanık yaşamın kronolojik mantığına uymasa da rüya deneyimi
                  açısından mümkündür.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-normal">
                Rüya görmek ile hatırlamak arasındaki fark
              </h2>

              <p className="mt-5">
                Bir önceki INUS makalesinde ele aldığımız gibi, rüyanın
                hatırlanması ayrı bir bellek problemidir.
              </p>

              <p className="mt-4">
                Bu nedenle sabah hatırladığınız rüya, gece boyunca gerçekleşmiş
                olabilecek tüm rüya deneyimlerini temsil etmeyebilir.
              </p>

              <p className="mt-4">
                Bu ayrım rüya ve bellek araştırmaları açısından son derece
                önemlidir. Araştırmacı yalnızca hatırlanan rüyalara bakarsa,
                hatırlanmayan rüya deneyimlerini veri setinin dışında bırakmış
                olur.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-normal">
                Rüyalar geleceği tahmin edebilir mi?
              </h2>

              <p className="mt-5">
                Bellek ile rüya arasındaki ilişki, bazen rüyaların gelecekteki
                olayları önceden bildirdiği şeklinde yorumlanabiliyor. Ancak
                bilimsel açıdan bu sonuç desteklenmiyor.
              </p>

              <p className="mt-4">
                Bir rüyanın daha sonra gerçekleşmiş gibi görünmesi; tesadüf,
                seçici hatırlama, olayların rüyaya sonradan benzetilmesi veya
                kişinin zaten gelecekte gerçekleşme ihtimali yüksek bir olayı
                zihninde önceden canlandırmış olması gibi farklı açıklamalara
                sahip olabilir.
              </p>

              <p className="mt-4">
                Belleğin uyku sırasında işlenmesi ile geleceğin bilinmesi
                birbirinden tamamen farklı iddialardır.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-normal">
                INUS rüyalar ve bellek ilişkisine nasıl bakıyor?
              </h2>

              <p className="mt-5">
                INUS için bilimsel araştırmalar önemli bir bağlam sağlar;
                ancak bir rüyadaki her kişinin veya olayın otomatik olarak
                belirli bir anıyı temsil ettiği varsayılmaz.
              </p>

              <p className="mt-4">
                Bir rüyada geçmişten bir kişinin görülmesi durumunda öncelikle
                kişinin o kişiyle ilgili kişisel çağrışımları, rüyadaki
                duygusu ve o kişinin hikâyedeki rolü dikkate alınır.
              </p>

              <p className="mt-4">
                Bilim bize belleğin uyku sırasında nasıl işlenebileceği
                hakkında genel bir çerçeve sunabilir. Fakat tek bir kişinin
                rüyasındaki belirli bir anının neden ortaya çıktığını bu
                araştırmalardan doğrudan çıkarmak mümkün değildir.
              </p>

              <blockquote className="mt-7 border-l-2 border-[#9b9186] pl-6 text-xl font-light leading-8 text-[#625c54]">
                “Bir rüyanın geçmişten bir şeyi taşıması, onun yalnızca geçmiş
                hakkında olduğu anlamına gelmez.”
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
                    DAHA GÜÇLÜ BULGULAR
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Uyku sırasında bellekle ilişkili yeniden işleme
                      süreçleri gerçekleşebilir.
                    </li>
                    <li>
                      • Öğrenmeyle ilişkili içerikler rüyalarda ortaya
                      çıkabilir.
                    </li>
                    <li>
                      • Rüya içeriği ile uyku sonrası bellek performansı
                      arasında ilişkiler bulunmuştur.
                    </li>
                    <li>
                      • Farklı uyku evreleri bellek süreçlerine farklı
                      katkılarda bulunabilir.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#eee8df] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    HÂLÂ AÇIK
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Rüyaların bellek konsolidasyonundaki doğrudan rolü nedir?
                    </li>
                    <li>
                      • Rüya görmek mi, yoksa uykunun diğer süreçleri mi daha
                      belirleyicidir?
                    </li>
                    <li>
                      • Rüya içeriği neden bazı anıları seçiyor?
                    </li>
                    <li>
                      • Rüyaların bellek üzerindeki nedensel etkisi ne kadar?
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
            Bu sayfadaki bilgiler; rüya içeriği, uyku sırasında bellek
            konsolidasyonu, öğrenme ve rüya hatırlama üzerine deneysel
            çalışmalar ve bilimsel derlemeler temel alınarak hazırlanmıştır.
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
            Rüyalar ve bellek hakkında
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
            Rüyandaki geçmişi keşfet.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d4cec5]">
            Rüyanda geçmişten bir kişi, mekân veya olay gördüysen, onu yalnızca
            bir sembol olarak değil, kendi yaşamındaki bağlamıyla birlikte
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