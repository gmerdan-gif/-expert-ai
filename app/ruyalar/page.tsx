import Link from "next/link";
import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";

const BASE_URL = "https://www.in-us.app";

export const metadata: Metadata = {
  alternates: {
    canonical: "/ruyalar",
  },
  title: "Rüyalar | Rüya Analizi, Psikoloji ve Bilim",
  description:
    "Rüya deneyimi, uyku, bellek, duygular, semboller, tekrarlayan rüyalar ve kâbuslar hakkında araştırmalara dayalı INUS Rüya Kütüphanesi.",
  openGraph: {
    title: "Rüyalar | Rüya Kütüphanesi | INUS",
    description:
      "Rüya deneyimini bilimsel araştırmalar, psikoloji ve kişisel bağlam arasındaki farkları koruyarak keşfedin.",
    url: `${BASE_URL}/ruyalar`,
    type: "website",
    locale: "tr_TR",
    siteName: "INUS",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const topics = [
  {
    number: "01",
    title: "Rüya nedir?",
    slug: "ruya-nedir",
    text: "Rüya deneyiminin nasıl tanımlandığını, REM ve NREM uykusunda neler bildiğimizi ve araştırmaların temel bulgularını incele.",
  },
  {
    number: "02",
    title: "Neden rüya görürüz?",
    slug: "neden-ruya-goruruz",
    text: "Bellek, duygu, biliş ve tehdit simülasyonu gibi başlıca açıklamaları; kanıtları ve açık soruları birlikte değerlendir.",
  },
  {
    number: "03",
    title: "Rüyalar neden unutulur?",
    slug: "ruyalar-neden-unutulur",
    text: "Rüya hatırlamanın neden değiştiğini, uyanmanın rolünü ve rüya içeriğinin neden hızla kaybolabildiğini keşfet.",
  },
  {
    number: "04",
    title: "Rüyalar ve bellek",
    slug: "ruyalar-ve-bellek",
    text: "Uyku, öğrenme, bellek pekiştirme ve yaşantıların rüya içeriğine taşınması arasındaki ilişkileri incele.",
  },
  {
    number: "05",
    title: "Rüyalar ve duygular",
    slug: "ruyalar-ve-duygular",
    text: "Korku, özlem, öfke, mutluluk ve diğer duyguların rüya deneyimiyle nasıl ilişkilendirildiğine bak.",
  },
  {
    number: "06",
    title: "Rüya sembolleri",
    slug: "ruya-sembolleri",
    text: "Hazır sembol sözlükleri yerine kişisel çağrışım, rüyanın bütünü ve yorumun sınırları üzerinden sembolleri düşün.",
  },
  {
    number: "07",
    title: "Tekrarlayan rüyalar",
    slug: "tekrarlayan-ruyalar",
    text: "Benzer rüyaların veya temaların tekrar etmesini, olası ilişkileri ve kişisel bağlamın neden önemli olduğunu incele.",
  },
  {
    number: "08",
    title: "Kâbuslar ve yoğun rüyalar",
    slug: "kabuslar",
    text: "Kâbusları, rahatsız edici rüyaları, yoğun olumsuz duyguları ve klinik sınırların nerede başladığını öğren.",
  },
];

const readingLayers = [
  {
    number: "01",
    title: "Araştırma",
    text: "Uyku laboratuvarları, rüya raporları ve deneysel çalışmalar üzerinden gözlemlenebilen genel örüntüleri inceler.",
  },
  {
    number: "02",
    title: "Kuram",
    text: "Bellek, duygu veya biliş gibi bulguların neden ortaya çıktığını açıklamaya çalışan modeller ve hipotezler sunar.",
  },
  {
    number: "03",
    title: "Yorum",
    text: "Tek bir kişinin rüyasını; yaşantıları, çağrışımları, duyguları ve rüyanın kendi bağlamı içinde ele alır.",
  },
];

const sources = [
  {
    authors: "Scarpelli, S. et al. (2022)",
    title: "What about dreams? State of the art and open questions",
    journal: "Journal of Sleep Research, 31(4), e13609.",
    id: "PMID 35417930 · PMCID PMC9539486 · DOI 10.1111/jsr.13609",
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
    authors: "Hudachek, L. & Wamsley, E. J. (2023)",
    title:
      "A meta-analysis of the relation between dream content and memory consolidation",
    journal: "Sleep, 46(12), zsad111.",
    id: "PMID 37058584 · DOI 10.1093/sleep/zsad111",
  },
];

const faqs = [
  {
    question: "Rüyalar bilimsel olarak araştırılabilir mi?",
    answer:
      "Evet. Rüya araştırmaları uyku laboratuvarları, kontrollü uyandırmalar, rüya raporları, psikolojik ölçümler ve nörobilim yöntemlerinden yararlanır. Bununla birlikte tek bir kişinin belirli bir rüyasının kişisel anlamını bilimsel bir deney sonucu gibi belirlemek mümkün değildir.",
  },
  {
    question: "Rüyaların herkes için aynı anlamı var mı?",
    answer:
      "Bunu destekleyen güvenilir bir bilimsel sistem bulunmamaktadır. Aynı olay veya sembol farklı kişiler için farklı çağrışımlar taşıyabilir. Bu nedenle kişisel bağlam, rüyanın bütünü ve rüya sırasında yaşanan duygular önemlidir.",
  },
  {
    question: "Rüya araştırması ile rüya yorumu aynı şey mi?",
    answer:
      "Hayır. Rüya araştırması genel örüntüleri ve ilişkileri inceler. Bireysel rüya yorumu ise tek bir kişinin deneyimini ele alır. Araştırma bulguları yorum için bağlam sağlayabilir, ancak belirli bir rüyanın anlamını tek başına belirlemez.",
  },
  {
    question: "Kendi rüyamı incelerken nereden başlamalıyım?",
    answer:
      "Önce rüyanın olaylarını, kişilerini, mekânlarını ve özellikle sende bıraktığı duyguyu hatırlamaya çalışabilirsin. Bir sembole tek başına anlam vermek yerine, o sembolün rüyanın geri kalanıyla nasıl ilişki kurduğuna bakmak daha anlamlı bir başlangıçtır.",
  },
];

export default function DreamsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "INUS Rüya Kütüphanesi",
    description:
      "Rüya deneyimi, uyku, bellek, duygular, semboller ve psikolojik rüya analizi hakkında araştırmalara dayalı INUS içerik koleksiyonu.",
    url: `${BASE_URL}/ruyalar`,
    isPartOf: {
      "@type": "WebSite",
      name: "INUS",
      url: `${BASE_URL}/`,
    },
  };

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
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

          <div className="flex items-center gap-7 text-sm text-[#625c54]">
            <Link
              href="/ruyalar/semboller"
              className="hidden transition hover:text-[#24221f] sm:inline"
            >
              Rüya Sembolleri
            </Link>

            <Link
              href="/hakkimizda"
              className="transition hover:text-[#24221f]"
            >
              Hakkımızda
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="pb-14 pt-14 sm:pb-20 sm:pt-20">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                RÜYA KÜTÜPHANESİ
              </p>

              <h1 className="max-w-2xl text-[48px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[64px] md:text-[76px]">
                Rüyaları anlamak
                <br />
                için nereden
                <br />
                başlamalı?
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-[16px] leading-8 text-[#625c54]">
                Rüya deneyimi; uyku, bellek, duygular ve kişisel
                çağrışımların kesiştiği karmaşık bir alan. INUS Rüya
                Kütüphanesi, araştırmaların ne söylediğini ve yorumun nerede
                başladığını konu konu keşfetmek için bir başlangıç
                noktasıdır.
              </p>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
                Tek bir rüya teorisini, hazır sembol sözlüğünü veya herkes
                için geçerli tek bir anlamı başlangıç noktası olarak kabul
                etmiyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            KONU KONU KEŞFET
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Rüyaların farklı yönlerine daha yakından bak.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/ruyalar/${topic.slug}`}
                className="group flex min-h-[220px] flex-col justify-between rounded-xl border border-[#d9d1c7] bg-[#faf8f4] p-6 transition hover:border-[#bfb5aa] sm:p-7"
              >
                <div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-[10px] tracking-[0.22em] text-[#91887e]">
                      {topic.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-sm transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-light tracking-[-0.025em]">
                    {topic.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#6f675e]">
                    {topic.text}
                  </p>
                </div>

                <span className="mt-7 text-xs text-[#625c54]">
                  Yazıyı oku
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* READING MODEL */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                RÜYALARA BAKIŞ
              </p>

              <h2 className="max-w-xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                Rüya araştırmalarını nasıl okuyoruz?
              </h2>

              <p className="mt-5 max-w-lg text-[15px] leading-8 text-[#625c54]">
                Rüya hakkında konuşurken üç farklı düzey kolayca birbirine
                karışabilir. INUS bu ayrımı görünür tutmayı amaçlar.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
              {readingLayers.map((layer) => (
                <article
                  key={layer.title}
                  className="grid gap-4 border-b border-[#ded6cc] p-6 last:border-b-0 sm:grid-cols-[60px_1fr] sm:p-7"
                >
                  <span className="text-[10px] tracking-[0.22em] text-[#91887e]">
                    {layer.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-light tracking-[-0.02em]">
                      {layer.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#6f675e]">
                      {layer.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EVIDENCE / INTERPRETATION */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="rounded-xl bg-[#eee8df] px-7 py-10 sm:px-10 sm:py-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
              KANIT VE YORUM
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
              Araştırmanın gösterdiği ile bir rüyaya yüklenen anlam aynı şey
              değildir.
            </h2>

            <div className="mt-7 grid gap-6 text-[15px] leading-8 text-[#625c54] lg:grid-cols-2 lg:gap-12">
              <p>
                Araştırmalar rüyaların genel özellikleri, uyku evreleri,
                bellek veya duygularla ilişkileri hakkında bilgi sağlayabilir.
                Ancak örneklemler üzerinde bulunan bir ilişki, tek bir kişinin
                rüyasının nedenini otomatik olarak açıklamaz.
              </p>

              <p>
                Bireysel yorumda rüyanın bağlamı, kişinin çağrışımları ve
                yaşadığı dönem önem kazanır. INUS bu nedenle bilimsel
                araştırmaları kişisel rüya yorumuyla aynı düzeyde sunmaz;
                kesin teşhis veya gelecek tahmini üretmez.
              </p>
            </div>
          </div>
        </section>

        {/* DREAM BRIDGE */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                KENDİ RÜYANA DÖN
              </p>

              <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                Okumak başka, kendi rüyanı keşfetmek başka.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
                Rüyandaki kişiler, olaylar, semboller ve duygular ancak
                birbirleriyle kurdukları ilişki içinde anlam kazanır.
                Rüyanı hatırladığın gibi anlatabilir ve bütününe birlikte
                bakabilirsin.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]"
            >
              Rüyanı anlat
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            SIK SORULAN SORULAR
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Rüyalar hakkında temel sorular.
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

        {/* SOURCES */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            KAYNAKLAR
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Başlangıç için temel araştırmalar.
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#6f675e]">
            Bu sayfa bir literatür taramasının yerini almak yerine Rüya
            Kütüphanesi&apos;ne giriş sağlar. Daha özel araştırmalar ilgili
            konu sayfalarında yer alır.
          </p>

          <div className="mt-10 grid gap-x-10 gap-y-7 md:grid-cols-2">
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
                  {source.id}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <SiteFooter />
      </div>
    </main>
  );
}
