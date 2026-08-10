import Link from "next/link";

export const metadata = {
  title: "Neden Rüya Görürüz? | Rüyaların İşlevi ve Bilim | INUS",
  description:
    "Neden rüya görürüz? Rüyaların bellek, duygular, günlük yaşam ve tehdit simülasyonu ile ilişkisini açıklayan teoriler ve bilimsel kanıtlar.",
};

const sources = [
  {
    authors: "Perogamvros, L. et al. (2022)",
    title: "What about dreams? State of the art and open questions",
    journal: "Journal of Sleep Research",
    detail: "PMID 35417930 · DOI 10.1111/jsr.13609",
    url: "https://pubmed.ncbi.nlm.nih.gov/35417930/",
  },
  {
    authors: "Hudachek, L. & Wamsley, E. J. (2023)",
    title:
      "A meta-analysis of the relation between dream content and memory consolidation",
    journal: "Sleep, 46(12), zsad111",
    detail: "PMID 37058584 · DOI 10.1093/sleep/zsad111",
    url: "https://pubmed.ncbi.nlm.nih.gov/37058584/",
  },
  {
    authors: "Bloxham, A. & Horton, C. L. (2024)",
    title:
      "Enhancing and advancing the understanding and study of dreaming and memory consolidation",
    journal: "Consciousness and Cognition, 123, 103719",
    detail: "PMID 38941924 · DOI 10.1016/j.concog.2024.103719",
    url: "https://pubmed.ncbi.nlm.nih.gov/38941924/",
  },
  {
    authors: "Valli, K. & Revonsuo, A. (2009)",
    title:
      "The threat simulation theory in light of recent empirical evidence: a review",
    journal: "American Journal of Psychology, 122(1), 17–38",
    detail: "PMID 19353929",
    url: "https://pubmed.ncbi.nlm.nih.gov/19353929/",
  },
  {
    authors: "Malcolm-Smith, S. et al. (2008)",
    title: "Threat in dreams: an adaptation?",
    journal: "Consciousness and Cognition, 17(4), 1281–1291",
    detail: "PMID 17702604",
    url: "https://pubmed.ncbi.nlm.nih.gov/17702604/",
  },
  {
    authors: "Abbas, N. H. & Samson, D. R. (2023)",
    title:
      "Dreaming during the COVID-19 pandemic: Support for the threat simulation function of dreams",
    journal: "Frontiers in Psychology, 14, 1124772",
    detail: "PMID 36814654 · DOI 10.3389/fpsyg.2023.1124772",
    url: "https://pubmed.ncbi.nlm.nih.gov/36814654/",
  },
  {
    authors: "Lafrenière, A. et al. (2018)",
    title: "Autobiographical memory sources of threats in dreams",
    journal: "Consciousness and Cognition, 58, 124–135",
    detail: "PMID 29146175 · DOI 10.1016/j.concog.2017.10.017",
    url: "https://pubmed.ncbi.nlm.nih.gov/29146175/",
  },
];

const faqs = [
  {
    question: "Rüyaların neden görüldüğü kesin olarak biliniyor mu?",
    answer:
      "Hayır. Rüyaların işlevi konusunda birden fazla teori bulunuyor ve hiçbir teori bugün rüya deneyiminin bütün özelliklerini tek başına açıklamıyor.",
  },
  {
    question: "Rüyalar belleği güçlendirir mi?",
    answer:
      "Rüya içeriği ile bellek süreçleri arasında ilişki olduğuna dair bulgular var. Ancak rüya görmenin tek başına belleği güçlendirdiği veya rüyanın bunun doğrudan nedeni olduğu kesin olarak gösterilmiş değil.",
  },
  {
    question: "Rüyalar stresimizi işler mi?",
    answer:
      "Rüya içeriği ile duygusal olarak önemli yaşantılar arasında ilişkiler bulunabiliyor. Ancak bundan her rüyanın stres işleme amacı taşıdığı sonucu çıkarılamaz.",
  },
  {
    question: "Rüyalar tehditleri prova etmek için mi vardır?",
    answer:
      "Tehdit Simülasyonu Teorisi bu görüşü savunur ve bazı çalışmalar teorinin öngörüleriyle uyumlu sonuçlar bulmuştur. Ancak başka araştırmalar teorinin bazı temel öngörülerini desteklememiştir. Dolayısıyla bu, araştırılan teorilerden biridir; kanıtlanmış tek açıklama değildir.",
  },
  {
    question: "Rüyaların hiçbir işlevi olmayabilir mi?",
    answer:
      "Bu olasılık da bilimsel tartışmanın bir parçasıdır. Bir davranışın veya deneyimin biyolojik olarak belirli bir işlevi olması ile o işlevin deneysel olarak kanıtlanması birbirinden farklıdır.",
  },
];

export default function WhyDreamPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Neden Rüya Görürüz? Rüyaların İşlevi ve Bilim",
    description:
      "Rüyaların neden görüldüğüne dair temel teoriler, bilimsel kanıtlar ve araştırmaların sınırları.",
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
          <span>Neden rüya görürüz?</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-10 sm:pb-18 sm:pt-14">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            RÜYA ARAŞTIRMALARI
          </p>

          <h1 className="max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
            Neden rüya görürüz?
          </h1>

          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[#686158]">
            Rüyaların neden ortaya çıktığı, uyku ve bilinç araştırmalarının
            hâlâ açık sorularından biri. Bellek, duygular, günlük yaşam ve
            tehdit simülasyonu gibi farklı açıklamalar araştırılıyor.
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#817970]">
            Bu sayfa, bu teorileri “hangisi doğru?” sorusundan önce
            “hangi kanıtlar var ve kanıtların sınırları neler?” sorusuyla
            ele alır.
          </p>
        </header>

        {/* ARTICLE */}
        <article className="rounded-[30px] border border-[#d9d1c7] bg-[#faf8f4] px-7 py-10 sm:px-12 sm:py-14">
          <div className="space-y-12 text-[15px] leading-8 text-[#454039]">

            {/* INTRO */}
            <section>
              <h2 className="text-2xl font-normal">
                Rüyaların bir amacı var mı?
              </h2>

              <p className="mt-5">
                İnsanlar binlerce yıldır rüyaların neden görüldüğünü
                anlamlandırmaya çalışıyor. Modern bilim ise soruyu farklı bir
                biçimde ele alıyor: Rüya deneyimi hangi beyin ve uyku
                süreçleriyle ilişkili? Rüya içeriği uyanık yaşamdan neden
                etkileniyor? Ve rüya görmenin organizma açısından ölçülebilir
                bir işlevi var mı?
              </p>

              <p className="mt-4">
                Bu soruların henüz tek bir cevabı yok. Güncel rüya literatürü,
                birbiriyle kısmen örtüşen birçok teori ve araştırma yaklaşımı
                içeriyor.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>En önemli nokta:</strong> Rüyaların bellek veya
                  duygularla ilişkili olduğunu gösteren bir araştırma, otomatik
                  olarak “rüyaların amacı belleği veya duyguları işlemektir”
                  sonucunu kanıtlamaz. İlişki, işlev ve nedensellik farklı
                  bilimsel sorulardır.
                </p>
              </div>
            </section>

            {/* THEORY 1 */}
            <section>
              <h2 className="text-2xl font-normal">
                1. Bellek işleme yaklaşımı
              </h2>

              <p className="mt-5">
                Öne çıkan görüşlerden biri, rüyaların uyku sırasında gerçekleşen
                bellek süreçleriyle ilişkili olabileceğidir. Gün içinde
                karşılaştığımız kişiler, bilgiler ve olaylar uyku sırasında
                yeniden etkinleşebilir veya bellekteki diğer bilgilerle
                ilişkilendirilebilir.
              </p>

              <p className="mt-4">
                Bu fikir için önemli gözlemlerden biri, yeni öğrenilen
                materyallerin veya gün içinde yaşanan olayların daha sonra
                bildirilen rüyalarda ortaya çıkabilmesidir.
              </p>

              <p className="mt-4">
                2023 yılında yayımlanan bir meta-analiz, öğrenmeyle ilişkili
                rüyalar ile uyku sonrası bellek performansı arasındaki ilişkiyi
                16 çalışmadaki 45 etki üzerinden inceledi. Araştırmacılar
                anlamlı bir ilişki bildirdi.
              </p>

              <p className="mt-4">
                Ancak bu bulgu dikkatli yorumlanmalı. 2024 tarihli bir
                değerlendirme, rüya ve bellek konsolidasyonu araştırmalarında
                sonuçların karışık olduğunu ve yöntemsel sorunların önemli bir
                rol oynadığını belirtiyor.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Sonuç:</strong> Rüyalar ile bellek süreçleri arasında
                  araştırılmaya değer bir ilişki var. Fakat “rüyalar belleği
                  güçlendirmek için vardır” bugün kesinleşmiş bir bilimsel
                  sonuç değil.
                </p>
              </div>
            </section>

            {/* THEORY 2 */}
            <section>
              <h2 className="text-2xl font-normal">
                2. Duygusal işleme yaklaşımı
              </h2>

              <p className="mt-5">
                Rüyaların bir başka önemli özelliği yoğun duygular
                içerebilmesidir. Korku, özlem, utanç, öfke veya mutluluk gibi
                deneyimler rüya anlatılarının önemli parçaları olabilir.
              </p>

              <p className="mt-4">
                Bu gözlem, rüyaların duygusal deneyimlerin işlenmesiyle
                ilişkili olabileceği düşüncesine yol açmıştır. Özellikle
                duygusal olarak önemli olayların rüya içeriğine girebilmesi,
                bu hipotezin araştırılmasını destekleyen bulgulardan biridir.
              </p>

              <p className="mt-4">
                Ancak burada da aynı bilimsel ayrım geçerlidir: Bir rüyada
                yoğun bir duygu yaşanması, o rüyanın o duyguyu “işlemek için”
                ortaya çıktığını tek başına kanıtlamaz.
              </p>
            </section>

            {/* THEORY 3 */}
            <section>
              <h2 className="text-2xl font-normal">
                3. Uyanık yaşam ile süreklilik
              </h2>

              <p className="mt-5">
                Rüyaların işlevini açıklamak için kullanılan bir başka yaklaşım
                rüya içeriğinin uyanık yaşamla sürekliliğine odaklanır.
              </p>

              <p className="mt-4">
                İnsanların gündelik yaşamındaki önemli kişiler, faaliyetler,
                endişeler ve duygusal deneyimler rüyalarda farklı biçimlerde
                yeniden ortaya çıkabilir. Bu ilişki, rüyaların tamamen
                rastgele ve uyanık yaşamdan bağımsız deneyimler olmadığı
                düşüncesini destekler.
              </p>

              <p className="mt-4">
                Ancak süreklilik hipotezi tek başına rüyaların biyolojik
                işlevini açıklamaz. Bir deneyimin başka bir deneyimle ilişkili
                olması, ilk deneyimin ikinci deneyimin amacı olduğu anlamına
                gelmez.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> Yoğun bir iş döneminde iş arkadaşınızı
                  veya işle ilgili bir problemi rüyanızda görmeniz, rüyanın
                  mutlaka “iş stresini çözmek” için oluştuğu anlamına gelmez.
                  Öncelikle rüyanın uyanık yaşamla ilişkili olduğunu gösterir.
                </p>
              </div>
            </section>

            {/* THEORY 4 */}
            <section>
              <h2 className="text-2xl font-normal">
                4. Tehdit Simülasyonu Teorisi
              </h2>

              <p className="mt-5">
                Daha iddialı teorilerden biri, bazı rüyaların tehdit içeren
                durumları güvenli bir sanal ortamda simüle ederek tehdit
                algılama ve kaçınma becerilerinin provasını yaptığı fikridir.
              </p>

              <p className="mt-4">
                Bu yaklaşım “Threat Simulation Theory” olarak bilinir.
                Teoriye göre rüyalar evrimsel olarak hayatta kalma açısından
                önemli durumları tekrar tekrar simüle eden bir sistemin
                parçası olabilir.
              </p>

              <p className="mt-4">
                Teoriyi destekleyen araştırmalar var. Örneğin bazı çalışmalar
                rüyalardaki tehdit içeriğinin uyanık yaşamda yaşanan tehdit ve
                stresle ilişkili olabileceğini gösteriyor.
              </p>

              <p className="mt-4">
                Ancak teori tartışmasız değil. Bazı araştırmalar tehditlerin
                rüyalarda beklenenden daha az bulunduğunu ve gerçekçi tehdit
                kaçınma davranışlarının nadir olduğunu bildirerek teorinin
                bazı temel öngörülerine karşı sonuçlar ortaya koydu.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Bilimsel durum:</strong> Tehdit simülasyonu,
                  test edilebilir ve ampirik olarak araştırılmış bir teoridir.
                  Ancak rüyaların genel ve kesin işlevi olarak kabul edilmiş
                  değildir.
                </p>
              </div>
            </section>

            {/* THEORY 5 */}
            <section>
              <h2 className="text-2xl font-normal">
                5. Rüyalar birden fazla sürecin sonucu olabilir mi?
              </h2>

              <p className="mt-5">
                Belki de en önemli olasılık, rüyaların tek bir işleve
                indirgenememesidir.
              </p>

              <p className="mt-4">
                Uyku sırasında bellek yeniden etkinleşebilir, duygusal
                deneyimler farklı biçimlerde işlenebilir, gün içinde edinilen
                bilgiler eski anılarla birleşebilir ve beynin farklı ağları
                arasında yeni bağlantılar ortaya çıkabilir.
              </p>

              <p className="mt-4">
                Böyle bir durumda rüya, tek bir “programın çıktısı” olmaktan
                ziyade uyku sırasında gerçekleşen birçok sürecin öznel
                deneyime dönüşen sonucu olabilir.
              </p>

              <p className="mt-4">
                Bu yaklaşım, rüyaların neden bazen günlük hayata çok benzediğini
                ve bazen tamamen gerçeküstü bir yapıya sahip olduğunu birlikte
                düşünmeye izin verir.
              </p>
            </section>

            {/* WHAT WE KNOW */}
            <section>
              <h2 className="text-2xl font-normal">
                Peki bugün ne kadarını biliyoruz?
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#eee8df] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    DAHA GÜÇLÜ BULGULAR
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Rüya içeriği uyanık yaşamla belirli süreklilikler
                      gösterebilir.
                    </li>
                    <li>
                      • Rüya içeriği öğrenme ve bellek süreçleriyle ilişkili
                      olabilir.
                    </li>
                    <li>
                      • Duygusal deneyimler rüya içeriğinde önemli yer
                      tutabilir.
                    </li>
                    <li>
                      • Tehdit içeren rüyalar çeşitli araştırmalarda
                      sistematik olarak incelenmiştir.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#eee8df] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    HÂLÂ AÇIK
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>• Rüya görmenin tek bir temel işlevi var mı?</li>
                    <li>• Rüya içeriği nasıl seçiliyor?</li>
                    <li>• Rüyaların bellek üzerindeki nedensel etkisi nedir?</li>
                    <li>• Rüyalar evrimsel olarak neden ortaya çıktı?</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SCIENCE VS INTERPRETATION */}
            <section>
              <h2 className="text-2xl font-normal">
                Bilimsel teori ile kişisel rüya yorumu arasındaki fark
              </h2>

              <p className="mt-5">
                Bir teorinin rüyaların genel işlevi hakkında açıklama sunması,
                tek bir kişinin rüyasının anlamını açıklamak için yeterli
                değildir.
              </p>

              <p className="mt-4">
                Örneğin tehdit simülasyonu teorisi rüyalarda tehdit
                içeriklerinin neden bulunabileceğine dair bir model sunabilir.
                Ancak bu, sizin dün gece gördüğünüz kovalanma rüyasının
                kesinlikle bir tehdit provasından kaynaklandığını göstermez.
              </p>

              <p className="mt-4">
                Aynı şekilde rüyalar ile bellek arasında ilişki bulunması,
                gördüğünüz belirli bir kişinin veya olayın mutlaka bir anıyı
                pekiştirmek için rüyanıza girdiği anlamına gelmez.
              </p>
            </section>

            {/* INUS */}
            <section>
              <h2 className="text-2xl font-normal">
                INUS bu bilgileri nasıl kullanıyor?
              </h2>

              <p className="mt-5">
                INUS, rüyaların işlevi hakkında tek bir teoriyi doğru kabul
                ederek analiz yapmaz.
              </p>

              <p className="mt-4">
                Bir rüyanın kişisel bağlamını değerlendirirken günlük yaşam,
                duygular, önemli deneyimler, bellek çağrışımları, rüyanın
                olay örgüsü ve semboller birlikte ele alınır.
              </p>

              <p className="mt-4">
                Bilimsel araştırmalar burada bir çerçeve sağlar. Ancak
                araştırma sonuçları kişinin rüyasına otomatik olarak
                uygulanmaz.
              </p>

              <blockquote className="mt-7 border-l-2 border-[#9b9186] pl-6 text-xl font-light leading-8 text-[#625c54]">
                “Rüyaların neden görüldüğünü genel olarak anlamaya çalışmak
                başka, belirli bir rüyanın bu kişi için ne ifade edebileceğini
                araştırmak başkadır.”
              </blockquote>
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
            Bu sayfadaki açıklamalar, rüyaların işlevi, bellek, uyanık yaşam
            sürekliliği ve tehdit simülasyonu üzerine hakemli araştırmalar ve
            derlemeler temel alınarak hazırlanmıştır.
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
                  PubMed kaydını görüntüle →
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
            Neden rüya gördüğümüz hakkında
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
            Peki sen neden bu rüyayı gördün?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d4cec5]">
            Rüyanı kendi kelimelerinle anlat. INUS, rüyanın olaylarını,
            duygularını, sembollerini ve kişisel bağlamını birlikte
            değerlendirerek farklı psikolojik bakış açıları sunar.
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