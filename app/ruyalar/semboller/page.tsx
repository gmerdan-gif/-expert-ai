import Link from "next/link";
import type { Metadata } from "next";
import { getAllDreamSymbols } from "@/data/dream-symbols";
import SymbolSearch from "@/components/dream-symbols/SymbolSearch";

export const metadata: Metadata = {
  title: "Rüya Sembolleri | Psikoloji, Jung ve Dini Yorumlar",
  description:
    "Rüya sembollerini psikoloji, Jungcu yaklaşım, İslami ve diğer dini gelenekler ile spiritüel yorumlar üzerinden karşılaştırmalı olarak inceleyin.",
  alternates: {
    canonical: "/ruyalar/semboller",
  },
  openGraph: {
    title: "Rüya Sembolleri | INUS",
    description:
      "Rüyalardaki sembollerin farklı psikolojik, dini ve spiritüel yaklaşımlardaki anlamlarını keşfedin.",
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

  const searchSymbols = symbols.map((symbol) => ({
    slug: symbol.slug,
    title: symbol.title,
    shortDescription: symbol.shortDescription,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Rüya Sembolleri",
    description:
      "Rüya sembollerinin psikolojik, Jungcu, dini ve spiritüel perspektiflerden karşılaştırmalı olarak incelendiği rehber.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">

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
          <Link
            href="/ruyalar"
            className="hover:text-[#24221f]"
          >
            Rüyalar
          </Link>

          <span className="mx-2">/</span>

          <span>Semboller</span>
        </nav>

        <header className="pb-12 pt-10 sm:pb-14 sm:pt-14">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            RÜYA SEMBOLLERİ
          </p>

          <h1 className="max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
            Rüya sembolleri
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-[#686158]">
            Rüyalarda görülen sembollerin tek bir evrensel anlamı
            yoktur. INUS'ta her sembolü psikoloji, Jungcu yaklaşım,
            dini gelenekler ve spiritüel yorumlar üzerinden
            karşılaştırmalı olarak inceleyebilirsiniz.
          </p>
        </header>

        <SymbolSearch symbols={searchSymbols} />

        <section className="mb-16 rounded-[28px] bg-[#292621] px-7 py-9 text-white sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
            NASIL YORUMLUYORUZ?
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d4cec5]">
            Bir sembolün anlamı, rüyanın tamamından ve kişinin
            kendi yaşam deneyimlerinden bağımsız değildir. Bu nedenle
            INUS, hazır bir rüya sözlüğü sunmak yerine farklı
            yaklaşımları yan yana getirir ve kişisel bağlama alan bırakır.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light">
            Sembolü bulamadın mı?
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#686158]">
            Rüyanın tamamını anlat. Tek bir sembole bağlı kalmadan,
            rüyadaki olayları, duyguları ve kişisel çağrışımları
            birlikte değerlendirelim.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-[#292621] px-7 py-3 text-sm text-white transition hover:bg-[#3a3630]"
          >
            Rüyamı analiz et →
          </Link>
        </section>

        <footer className="pb-8 text-center text-xs text-[#aaa198]">
          INUS · Rüya sembolleri rehberi
        </footer>

      </div>
    </main>
  );
}
