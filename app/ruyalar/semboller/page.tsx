import Link from "next/link";
import type { Metadata } from "next";

import AdSlot from "@/components/ads/AdSlot";

import SymbolSearch from "@/components/dream-symbols/SymbolSearch";
import { getAllPublishedSymbols } from "@/lib/symbols/repository";

const BASE_URL = "https://www.in-us.app";

const FEATURED_SLUGS = [
  "dis",
  "ev",
  "ucmak",
  "ayna",
] as const;

export const metadata: Metadata = {
  title: "Rüya Sembolleri | Psikoloji, Jung ve Farklı Yaklaşımlar",
  description:
    "Rüya sembollerini psikolojik, Jungçu ve farklı kültürel perspektiflerden inceleyin. Sembollerin anlamlarının rüyanın bağlamıyla nasıl değişebileceğini keşfedin.",
  alternates: {
    canonical: "/ruyalar/semboller",
  },
  openGraph: {
    title: "Rüya Sembolleri | INUS",
    description:
      "Rüya sembollerini psikolojik, Jungçu ve farklı kültürel perspektiflerden inceleyin.",
    url: `${BASE_URL}/ruyalar/semboller`,
    type: "website",
    locale: "tr_TR",
    siteName: "INUS",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DreamSymbolsIndexPage() {
  const symbols = getAllPublishedSymbols();

  const searchSymbols = symbols.map((symbol) => ({
    slug: symbol.slug,
    title: symbol.title,
    shortDescription: symbol.shortDescription,
  }));

  const featured = FEATURED_SLUGS.flatMap((slug) => {
    const symbol = symbols.find(
      (candidate) => candidate.slug === slug,
    );

    return symbol ? [symbol] : [];
  });

  const lead = featured[0];
  const secondary = featured.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Rüya Sembolleri",
    description:
      "Rüya sembollerinin psikolojik, Jungçu ve farklı kültürel perspektiflerden incelendiği INUS rehberi.",
    isPartOf: {
      "@type": "WebSite",
      name: "INUS",
      url: `${BASE_URL}/`,
    },
    url: `${BASE_URL}/ruyalar/semboller`,
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
              href="/ruyalar"
              className="hidden transition hover:text-[#24221f] sm:inline"
            >
              Rüyalar
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
                RÜYA SEMBOLLERİ
              </p>

              <h1 className="max-w-xl text-[48px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[64px] md:text-[76px]">
                Rüyanda ne
                <br />
                gördün?
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-[16px] leading-8 text-[#625c54]">
                Bir sembol tek başına bütün rüyayı açıklamaz. INUS&apos;ta
                sembollere psikolojik, Jungçu ve farklı kültürel
                perspektiflerden bakabilir; anlamlarının rüyanın bağlamıyla
                nasıl değişebileceğini inceleyebilirsin.
              </p>

              <div className="mt-10">
                <SymbolSearch symbols={searchSymbols} />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT BRIDGE */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                SEMBOLÜN ÖTESİNDE
              </p>

              <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                Rüyanda bir sembolden fazlası vardı.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
                Rüyadaki kişiler, olaylar, duygular ve küçük ayrıntılar
                sembolün rüyanın içinde nasıl bir yerde durduğunu
                değiştirebilir. Tek bir parçaya değil, rüyanın bütününe
                birlikte bakabilirsin.
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

        {/* EDITORIAL */}
        {lead && (
          <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
              SEÇİLMİŞ SEMBOLLER
            </p>

            <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
              Bazı sembollere daha yakından bak.
            </h2>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
              <Link
                href={`/ruyalar/semboller/${lead.slug}`}
                className="group flex min-h-[360px] flex-col justify-between rounded-xl border border-[#d9d1c7] bg-[#eee8df] p-7 transition hover:border-[#bfb5aa] sm:p-9"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#81786e]">
                    ÖNE ÇIKAN SEMBOL
                  </p>

                  <h3 className="mt-6 text-4xl font-light tracking-[-0.035em] sm:text-5xl">
                    {lead.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#625c54]">
                    {lead.shortDescription}
                  </p>
                </div>

                <span className="mt-10 inline-flex items-center gap-4 text-sm">
                  Sembolü incele
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>

              <div className="overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
                {secondary.map((symbol) => (
                  <Link
                    key={symbol.slug}
                    href={`/ruyalar/semboller/${symbol.slug}`}
                    className="group block border-b border-[#ded6cc] p-6 last:border-b-0 sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-xl font-light tracking-[-0.02em]">
                          {symbol.title}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-[#746d64]">
                          {symbol.shortDescription}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="shrink-0 text-sm transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <AdSlot placement="symbol-hub-after-featured" />

        <footer className="flex flex-col gap-4 border-t border-[#d9d2c9] py-7 text-xs text-[#91887e] sm:flex-row sm:items-center sm:justify-between">
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
