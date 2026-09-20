import Link from "next/link";
import type { Metadata } from "next";

import SymbolSearch from "@/components/dream-symbols/SymbolSearch";
import { getAllPublishedSymbols } from "@/lib/symbols/repository";

const BASE_URL = "https://www.in-us.app";

export const metadata: Metadata = {
  title: "Tüm Rüya Sembolleri | INUS",
  description:
    "INUS'ta yayınlanan rüya sembollerini alfabetik olarak keşfedin ve rüyanızda gördüğünüz sembolü bulun.",
  alternates: {
    canonical: "/ruyalar/semboller/tumu",
  },
  openGraph: {
    title: "Tüm Rüya Sembolleri | INUS",
    description:
      "INUS'ta yayınlanan rüya sembollerini alfabetik olarak keşfedin.",
    url: `${BASE_URL}/ruyalar/semboller/tumu`,
    type: "website",
    locale: "tr_TR",
    siteName: "INUS",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function getInitialLetter(title: string) {
  return title
    .trim()
    .charAt(0)
    .toLocaleUpperCase("tr-TR");
}

export default function AllDreamSymbolsPage() {
  const symbols = getAllPublishedSymbols().sort((a, b) =>
    a.title.localeCompare(b.title, "tr-TR"),
  );

  const searchSymbols = symbols.map((symbol) => ({
    slug: symbol.slug,
    title: symbol.title,
    shortDescription: symbol.shortDescription,
  }));

  const groups = symbols.reduce<
    Record<string, typeof symbols>
  >((result, symbol) => {
    const letter = getInitialLetter(symbol.title);

    if (!result[letter]) {
      result[letter] = [];
    }

    result[letter].push(symbol);

    return result;
  }, {});

  const letters = Object.keys(groups).sort((a, b) =>
    a.localeCompare(b, "tr-TR"),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tüm Rüya Sembolleri",
    description:
      "INUS'ta yayınlanan rüya sembollerinin alfabetik keşif sayfası.",
    url: `${BASE_URL}/ruyalar/semboller/tumu`,
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
              className="transition hover:text-[#24221f]"
            >
              Rüya Sembolleri
            </Link>

            <Link
              href="/hakkimizda"
              className="hidden transition hover:text-[#24221f] sm:inline"
            >
              Hakkımızda
            </Link>
          </div>
        </header>

        <section className="pb-14 pt-14 sm:pb-20 sm:pt-20">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            TÜM SEMBOLLER
          </p>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <h1 className="max-w-xl text-[48px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[64px] md:text-[72px]">
                Rüyandaki
                <br />
                sembolü bul.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-[16px] leading-8 text-[#625c54]">
                INUS&apos;ta yayınlanan sembolleri alfabetik olarak
                keşfedebilir veya rüyanda gördüğün bir şeyi doğrudan
                arayabilirsin. Bir sembolün anlamı rüyanın bağlamına,
                duygularına ve kişisel çağrışımlarına göre değişebilir.
              </p>

              <div className="mt-10">
                <SymbolSearch symbols={searchSymbols} />
              </div>
            </div>
          </div>
        </section>

        <nav
          aria-label="Sembol harfleri"
          className="border-y border-[#d9d2c9] py-6"
        >
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#625c54]">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#harf-${encodeURIComponent(letter)}`}
                className="transition hover:text-[#24221f]"
              >
                {letter}
              </a>
            ))}
          </div>
        </nav>

        <section
          aria-label="Tüm rüya sembolleri"
          className="py-10 sm:py-14"
        >
          {letters.map((letter) => (
            <section
              key={letter}
              id={`harf-${letter}`}
              className="scroll-mt-8 border-b border-[#d9d2c9] py-10 first:pt-0"
            >
              <div className="grid gap-7 md:grid-cols-[120px_1fr]">
                <h2 className="text-4xl font-light tracking-[-0.04em]">
                  {letter}
                </h2>

                <div className="grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                  {groups[letter].map((symbol) => (
                    <Link
                      key={symbol.slug}
                      href={`/ruyalar/semboller/${symbol.slug}`}
                      className="group flex items-center justify-between gap-4 border-b border-[#e3ddd5] py-4 text-[15px] transition hover:border-[#aaa095]"
                    >
                      <span>{symbol.title}</span>

                      <span
                        aria-hidden="true"
                        className="text-[#91887e] transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </section>

        <section className="border-b border-[#d9d2c9] pb-14 sm:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                SEMBOLÜN ÖTESİNDE
              </p>

              <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                Rüyan yalnızca bir sembolden oluşmaz.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
                Rüyadaki kişiler, olaylar ve duygular sembolün
                rüyanın içinde nasıl bir anlam taşıyabileceğini
                değiştirebilir.
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

        <footer className="flex flex-col gap-4 py-7 text-xs text-[#91887e] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-medium tracking-[0.28em] text-[#24221f]">
            INUS
          </span>

          <div className="flex flex-wrap gap-5">
            <Link href="/ruyalar">
              Rüyalar
            </Link>

            <Link href="/ruyalar/semboller">
              Rüya Sembolleri
            </Link>

            <Link href="/hakkimizda">
              Hakkımızda
            </Link>

            <Link href="/bize-ulasin">
              Bize Ulaşın
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
