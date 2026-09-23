import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAllPublishedSymbolSlugs,
  getPublishedSymbolBySlug,
} from "@/lib/symbols/repository";

import type {
  LimitedEvidenceLane,
} from "@/data/symbol-system/schema/symbol-schema";

const LIMITED_EVIDENCE_LABELS: Record<
  LimitedEvidenceLane,
  string
> = {
  psychology: "modern psikoloji",
  psychoanalytic: "psikanaliz",
  jungian: "Jungcu yaklaşım",
  "historical-cultural": "tarihsel/kültürel yaklaşım",
  islamic: "İslami gelenek",
  christian: "Hristiyan gelenekleri",
  jewish: "Yahudi gelenekleri",
  "buddhist-eastern": "Budist/Doğu yaklaşımları",
  spiritual: "spiritüel yaklaşımlar",
};

function formatLimitedEvidenceLanes(
  lanes: LimitedEvidenceLane[],
): string {
  const labels = lanes.map(
    (lane) => LIMITED_EVIDENCE_LABELS[lane],
  );

  if (labels.length <= 1) {
    return labels[0] ?? "";
  }

  if (labels.length === 2) {
    return `${labels[0]} ve ${labels[1]}`;
  }

  return `${labels.slice(0, -1).join(", ")} ve ${
    labels[labels.length - 1]
  }`;
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPublishedSymbolSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const symbol = getPublishedSymbolBySlug(slug);

  if (!symbol) {
    return {};
  }

  return {
    title: `${symbol.title} Rüya Sembolü Kaynakları`,
    description:
      `${symbol.title} rüya sembolü içeriğinde kullanılan psikolojik, kuramsal ve geleneksel kaynaklar.`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function SymbolSourcesPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const symbol = getPublishedSymbolBySlug(slug);

  if (!symbol) {
    notFound();
  }

  const limitedEvidenceLanes =
    symbol.limitedEvidenceLanes ?? [];

  const limitedEvidenceLabel =
    formatLimitedEvidenceLanes(
      limitedEvidenceLanes,
    );

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <header className="flex items-center justify-between py-6">
          <Link
            href="/"
            className="text-lg font-medium tracking-[0.28em] transition hover:opacity-70"
          >
            INUS
          </Link>

          <Link
            href="/ruyalar/semboller"
            className="text-sm text-[#625c54] transition hover:text-[#24221f]"
          >
            Rüya Sembolleri
          </Link>
        </header>

        <section className="pb-20 pt-12 sm:pt-20">
          <Link
            href={`/ruyalar/semboller/${symbol.slug}`}
            className="text-xs text-[#827a71] underline decoration-black/10 underline-offset-4"
          >
            ← {symbol.title} sembolüne dön
          </Link>

          <p className="mt-14 text-xs font-semibold tracking-[0.2em] text-[#8a8278]">
            KAYNAKLAR VE REFERANSLAR
          </p>

          <h1 className="mt-5 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
            {symbol.title}
            <br />
            kaynakları.
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#69635c]">
            Ana sembol sayfasındaki psikolojik, kuramsal ve geleneksel
            perspektiflerin hazırlanmasında kullanılan referanslar burada
            toplu olarak gösterilir.
          </p>

          {limitedEvidenceLanes.length > 0 && (
            <aside id="yaklasim-notu" className="mt-8 max-w-2xl scroll-mt-6 border-l border-[#b9b0a6] pl-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a8278]">
                * KAYNAK VE YAKLAŞIM NOTU
              </p>

              <p className="mt-3 text-sm leading-7 text-[#706961]">
                {limitedEvidenceLabel} kapsamında aktarılan yorumlar,
                belirtilen kaynakların kendi kuramsal, kültürel veya geleneksel
                bağlamında değerlendirilmelidir. Bu yorumlar, bilimsel olarak
                kanıtlanmış ve herkes için geçerli rüya anlamları olarak
                sunulmaz. Kaynakların hangi açıklamalar için kullanıldığı
                aşağıdaki kaynak notlarında belirtilir.
              </p>
            </aside>
          )}

          {symbol.sources?.length > 0 ? (
            <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
              {symbol.sources.map((source, index) => (
                <article
                  key={`${source.title}-${index}`}
                  className="grid gap-4 py-7 md:grid-cols-[55px_1fr]"
                >
                  <span className="text-xs text-[#aaa198]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2 className="text-lg font-medium">
                      {source.title}
                    </h2>

                    {(source.author ||
                      source.publication ||
                      source.year) && (
                      <p className="mt-1 text-xs text-[#918980]">
                        {[
                          source.author,
                          source.publication,
                          source.year,
                        ]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    )}

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#706961]">
                      {source.relevance}
                    </p>

                    {source.url && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block break-all text-xs underline decoration-black/20 underline-offset-4"
                      >
                        Kaynağa git ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-14 border-y border-black/10 py-8 text-sm leading-7 text-[#706961]">
              Bu sembol için gösterilebilecek kaynak bulunmuyor.
            </p>
          )}
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#d9d2c9] py-7 text-xs text-[#91887e] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-medium tracking-[0.28em] text-[#24221f]">
            INUS
          </span>

          <div className="flex flex-wrap gap-5">
            <Link href="/ruyalar">Rüyalar</Link>
            <Link href="/ruyalar/semboller">
              Rüya Sembolleri
            </Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
            <Link href="/bize-ulasin">Bize Ulaşın</Link>
            <Link href="/gizlilik">Gizlilik</Link>
            <Link href="/kullanim-kosullari">
              Kullanım Koşulları
            </Link>
          </div>

        </footer>
      </div>
    </main>
  );
}
