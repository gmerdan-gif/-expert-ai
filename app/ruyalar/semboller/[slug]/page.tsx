import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SymbolPage } from "@/components/symbol-pages/SymbolPage";
import {
  getAllPublishedSymbolSlugs,
  getPublishedSymbolBySlug,
} from "@/lib/symbols/repository";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const BASE_URL = "https://www.in-us.app";

export function generateStaticParams() {
  return getAllPublishedSymbolSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const symbol =
    getPublishedSymbolBySlug(slug);

  if (!symbol) {
    return {};
  }

  const lowerTitle =
    symbol.title.toLocaleLowerCase("tr-TR");

  const title =
    `Rüyada ${lowerTitle} Görmek Ne Anlama Gelir?`;

  const url =
    `${BASE_URL}/ruyalar/semboller/${symbol.slug}`;

  return {
    title,
    description: symbol.shortDescription,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",
      url,
      title,
      description: symbol.shortDescription,
      siteName: "INUS",
      locale: "tr_TR",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SymbolDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const symbol =
    getPublishedSymbolBySlug(slug);

  if (!symbol) {
    notFound();
  }

  const lowerTitle =
    symbol.title.toLocaleLowerCase("tr-TR");

  const url =
    `${BASE_URL}/ruyalar/semboller/${symbol.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      `Rüyada ${lowerTitle} Görmek Ne Anlama Gelir?`,
    description: symbol.shortDescription,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "INUS",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "INUS",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Rüyalar",
        item: `${BASE_URL}/ruyalar`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rüya Sembolleri",
        item: `${BASE_URL}/ruyalar/semboller`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: symbol.title,
        item: url,
      },
    ],
  };

  const faqJsonLd =
    symbol.faq.length > 0
      ? {
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
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      )}

      <SymbolPage symbol={symbol} />
    </>
  );
}
