import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDreamSymbolBySlug,
  getRelatedDreamSymbols,
} from "@/data/dream-symbols";
import { SymbolArticle } from "@/components/dream-symbols/SymbolArticle";

import { dreamPhrase } from "@/data/dream-phrase";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const { getAllDreamSymbols } = await import("@/data/dream-symbols");

  const symbols = getAllDreamSymbols();

  return symbols.map((symbol) => ({
    slug: symbol.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const symbol = getDreamSymbolBySlug(slug);

  if (!symbol) {
    return {};
  }

  const phrase = dreamPhrase(symbol.title);

  return {
    title: `${phrase} ne anlama gelir? | INUS`,
    description: symbol.shortDescription,
  };
}

export default async function DreamSymbolPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const symbol = getDreamSymbolBySlug(slug);

  if (!symbol) {
    notFound();
  }

  const relatedSymbols = getRelatedDreamSymbols(symbol);

  const pageUrl = `https://in-us.app/ruyalar/semboller/${symbol.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: dreamPhrase(symbol.title),
    description: symbol.shortDescription,
    url: pageUrl,
    author: {
      "@type": "Organization",
      name: "INUS",
    },
    publisher: {
      "@type": "Organization",
      name: "INUS",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: symbol.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Rüyalar",
        item: "https://in-us.app/ruyalar",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Semboller",
        item: "https://in-us.app/ruyalar/semboller",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: dreamPhrase(symbol.title),
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
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
            href="/ruyalar/semboller"
            className="text-sm tracking-wide text-[#5d5851] transition hover:text-[#24221f]"
          >
            Tüm semboller
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

          <Link
            href="/ruyalar/semboller"
            className="hover:text-[#24221f]"
          >
            Semboller
          </Link>

          <span className="mx-2">/</span>

          <span>{symbol.title}</span>
        </nav>

        <header className="pb-10 pt-10 sm:pb-14 sm:pt-14">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            RÜYA SEMBOLÜ
          </p>

          <h1 className="max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">
            {dreamPhrase(symbol.title)}
          </h1>
        </header>

        <SymbolArticle
          symbol={symbol}
          relatedSymbols={relatedSymbols}
        />

        <footer className="pb-8 text-center text-xs text-[#aaa198]">
          INUS · Rüya sembolleri rehberi
        </footer>
      </div>
    </main>
  );
}