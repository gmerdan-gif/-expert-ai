import Link from "next/link";
import type { Metadata } from "next";
import { getAllDreamSymbols } from "@/data/dream-symbols";

export const metadata: Metadata = {
  title: "Rüya Sembolleri Sözlüğü | Rüyada Sembol Görmek",
  description:
    "Rüyada görülen sembollerin anlamları: psikoloji, Jungcu yaklaşım, dini gelenekler ve kişisel bağlam perspektifinden 30+ rüya sembolü rehberi.",
  alternates: {
    canonical: "/ruyalar/semboller",
  },
  openGraph: {
    title: "Rüya Sembolleri Sözlüğü | INUS",
    description:
      "Rüyada yılan, su, ev, uçmak ve daha fazlası — sembolleri bağlamsal ve çok perspektifli inceleyin.",
    url: "https://in-us.app/ruyalar/semboller",
    type: "website",
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DreamSymbolsIndexPage() {
  const symbols = getAllDreamSymbols();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Rüya Sembolleri Sözlüğü",
    description:
      "Rüyada görülen sembollerin psikolojik, Jungcu, dini ve spiritüel perspektiflerden incelenmesi.",
    isPartOf: {
      "@type": "WebSite",
      name: "INUS",
      url: "https://in-us.app",
    },
    url: "https://in-us.app/ruyalar/semboller",
  };

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
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

        <nav
          className="pt-10 text-xs text-[#8a8177]"
          aria-label="Breadcrumb"
        >
          <Link href="/ruyalar" className="hover:text-[#24221f]">
            Rüyalar
          </Link>
          <span className="mx-2">/</span>
          <span>Semboller</span>
        </nav>

        <header className="pb-14 pt-10 sm:pb-18 sm:pt-14">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            RÜYA SEMBOLLERİ
          </p>
          <h1 className="max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
            Rüyada sembol
            <br />
            görmek ne demek?
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[#686158]">
            Her sembol için psikoloji, Jungcu yaklaşım, dini gelenekler ve
            spiritüel yorumları bir arada sunan bağlamsal rehberler. Evrensel
            tek anlam iddiası taşımaz.
          </p>
        </header>

        <section className="mb-10 rounded-[28px] bg-[#292621] px-7 py-9 text-white sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
            INUS YAKLAŞIMI
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d4cec5]">
            Bu rehberler rüya sözlüğü değildir. Her sembol, kişisel bağlam,
            duygular ve rüyanın bütünü içinde değerlendirilmelidir. Kesin
            teşhis, gelecek tahmini veya evrensel anlam iddiası yoktur.
          </p>
        </section>

        <section className="pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            SEMBOLLER
          </p>
          <h2 className="mt-3 text-3xl font-light">
            {symbols.length} rüya sembolü rehberi
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symbols.map((symbol) => (
              <Link
                key={symbol.slug}
                href={`/ruyalar/semboller/${symbol.slug}`}
                className="block rounded-[26px] border border-[#d9d1c7] bg-[#faf8f4] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(70,60,50,0.06)]"
              >
                <h3 className="text-lg font-normal">
                  Rüyada {symbol.title} görmek
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#686158]">
                  {symbol.shortDescription}
                </p>
                <p className="mt-4 text-xs tracking-wide text-[#625c54]">
                  Rehberi oku →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-[30px] bg-[#292621] px-7 py-12 text-center text-white sm:mb-20 sm:px-12">
          <h2 className="text-3xl font-light">Kendi rüyanı analiz et.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d4cec5]">
            Sembolleri hazır anlamlarla değil, rüyanın bütünü ve kişisel
            çağrışımların üzerinden incele.
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm text-[#292621] transition hover:bg-[#eee8df]"
          >
            Rüyamı analiz et
          </Link>
        </section>

        <footer className="pb-8 text-center text-xs text-[#aaa198]">
          INUS · Rüya sembolleri rehberi
        </footer>
      </div>
    </main>
  );
}
