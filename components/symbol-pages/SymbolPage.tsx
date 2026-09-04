import Link from "next/link";

import AdSlot from "@/components/ads/AdSlot";

import type {
  SymbolContent,
} from "@/data/symbol-system/schema/symbol-schema";

type SymbolPageProps = {
  symbol: SymbolContent;
};

function lowerTr(value: string) {
  return value.toLocaleLowerCase("tr-TR");
}

function capitalizeTr(value: string) {
  if (!value) return value;

  return (
    value.charAt(0).toLocaleUpperCase("tr-TR") +
    value.slice(1)
  );
}

function rawSymbolName(title: string) {
  return title
    .replace(/^rüyada\s+/i, "")
    .replace(/\s+görmek$/i, "")
    .trim();
}

function dreamHeading(title: string) {
  const clean = title.trim();

  if (/^rüyada\s+/i.test(clean)) {
    return clean;
  }

  const lower = lowerTr(clean);

  if (
    lower.endsWith("mak") ||
    lower.endsWith("mek") ||
    lower.includes("olduğunu görmek")
  ) {
    return `Rüyada ${lower}`;
  }

  return `Rüyada ${lower} görmek`;
}

export function SymbolPage({
  symbol,
}: SymbolPageProps) {
  const rawName = rawSymbolName(symbol.title);
  const name = capitalizeTr(rawName);

  const positiveAssociations =
    symbol.positiveAssociations ?? [];

  const perspectives = [
    {
      label: "Modern psikoloji",
      content: symbol.psychology,
    },
    {
      label: "Jungçu yaklaşım",
      content: symbol.jungian,
    },
    {
      label: "İslami geleneklerde",
      content: symbol.islamicTradition,
    },
    {
      label: "Hristiyan geleneklerinde",
      content: symbol.christianTraditions,
    },
    {
      label: "Yahudi geleneklerinde",
      content: symbol.jewishTraditions,
    },
    {
      label: "Budist ve Doğu yaklaşımlarında",
      content: symbol.buddhistEasternApproaches,
    },
    {
      label: "Spiritüel yaklaşımlarda",
      content: symbol.spiritualApproaches,
    },
  ].filter(
    (item) =>
      typeof item.content === "string" &&
      item.content.trim().length > 0,
  );

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="text-lg font-medium tracking-[0.28em] text-[#24221f] transition hover:opacity-70"
            >
              INUS
            </Link>

            <nav className="hidden items-center gap-7 text-sm text-[#625c54] md:flex">
              <Link
                href="/ruyalar"
                className="transition hover:text-[#24221f]"
              >
                Rüyalar
              </Link>

              <Link
                href="/ruyalar/semboller"
                className="transition hover:text-[#24221f]"
              >
                Rüya Sembolleri
              </Link>

              <Link
                href={`/ruyalar/semboller/${symbol.slug}/kaynaklar`}
                className="transition hover:text-[#24221f]"
              >
                Kaynaklar
              </Link>
            </nav>
          </div>

          <div className="hidden items-center gap-7 text-sm text-[#625c54] md:flex">
            <Link
              href="/hakkimizda"
              className="transition hover:text-[#24221f]"
            >
              Hakkımızda
            </Link>
          </div>
        </header>

        <article>
          <section className="pb-11 pt-8 sm:pb-14 sm:pt-12">
            <div className="max-w-3xl">
              <h1 className="text-[40px] font-light leading-[1.08] tracking-[-0.035em] sm:text-[48px]">
                {dreamHeading(symbol.title)}
              </h1>

              <div className="mt-6 max-w-2xl text-[16px] leading-8 text-[#5f5952]">
                {symbol.shortDescription}
              </div>
            </div>
          </section>

          {positiveAssociations.length > 0 && (
            <section className="border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                İLK BAKIŞTA
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                {name} hangi temalarla ilişkilendiriliyor?
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {positiveAssociations.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="rounded-xl border border-[#ddd5cb] bg-[#faf8f4] px-6 py-5"
                  >
                    <p className="text-[15px] leading-7 text-[#454039]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="border-t border-[#d9d2c9] py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                  SEMBOLÜN ÖTESİNDE
                </p>

                <h2 className="text-3xl font-light tracking-[-0.025em]">
                  Peki senin rüyanda ne oldu?
                </h2>

                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#625c54]">
                  Aynı sembol, iki rüyada bambaşka bir yerde durabilir.
                  Kimler vardı, ne oldu, ne hissettin ve{" "}
                  {lowerTr(rawName)} rüyanın içinde nasıl ortaya çıktı?
                  INUS rüyanı bu bağlamla birlikte ele alır.
                </p>
              </div>

              <div className="lg:text-right">
                <Link
                  href="/"
                  className="inline-flex items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]"
                >
                  Rüyanı anlat
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>

          {perspectives.length > 0 && (
            <section className="border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                FARKLI PERSPEKTİFLER
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                {name} farklı yaklaşımlarda nasıl ele alınıyor?
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#746d64]">
                Psikolojik yaklaşımlar, Jungçu yorumlar ve kültürel ya da
                geleneksel kaynaklar aynı türden bilgi sunmaz. Aşağıdaki
                perspektifleri kendi çerçeveleri içinde ayrı ayrı ele
                alıyoruz.
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {perspectives.map((item) => (
                  <section
                    key={item.label}
                    className="rounded-xl border border-[#ddd5cb] bg-[#faf8f4] px-6 py-6"
                  >
                    <h3 className="mb-4 text-[15px] font-medium">
                      {item.label}
                    </h3>

                    <div className="text-[14px] leading-7 text-[#625c54]">
                      {item.content}
                    </div>
                  </section>
                ))}
              </div>
            </section>
          )}

          <AdSlot placement="symbol-after-perspectives" />

          {(symbol.commonGround || symbol.differences) && (
            <section className="border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                KARŞILAŞTIRMA
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                Nerede yakınlaşıyor, nerede ayrılıyorlar?
              </h2>

              <div className="mt-7 grid overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4] md:grid-cols-2 md:divide-x md:divide-[#ded6cc]">
                {symbol.commonGround && (
                  <div className="px-7 py-6">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#81786e]">
                      YAKINLAŞAN NOKTALAR
                    </p>

                    <div className="text-[14px] leading-7 text-[#625c54]">
                      {symbol.commonGround}
                    </div>
                  </div>
                )}

                {symbol.differences && (
                  <div className="border-t border-[#ded6cc] px-7 py-6 md:border-t-0">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#81786e]">
                      AYRILAN NOKTALAR
                    </p>

                    <div className="text-[14px] leading-7 text-[#625c54]">
                      {symbol.differences}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {symbol.inusAssessment && (
            <section className="border-t border-[#d9d2c9] py-10">
              <div className="rounded-xl border border-[#ddd5cb] bg-[#eee8df] px-8 py-8">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                  INUS DEĞERLENDİRMESİ
                </p>

                <h2 className="text-3xl font-light tracking-[-0.025em]">
                  {name} rüyasına bağlam içinde bakmak
                </h2>

                <div className="mt-5 max-w-4xl text-[15px] leading-8 text-[#5f5952]">
                  {symbol.inusAssessment}
                </div>
              </div>
            </section>
          )}

          {symbol.commonVariations?.length > 0 && (
            <section className="border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                RÜYANIN AYRINTILARI
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                {name} rüyaları nasıl değişebilir?
              </h2>

              <div className="mt-7 overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
                {symbol.commonVariations.map(
                  (variation, index) => (
                    <div
                      key={`${variation.title}-${index}`}
                      className="grid gap-3 border-b border-[#e1dad1] px-6 py-4 last:border-b-0 sm:grid-cols-[0.28fr_0.68fr] sm:gap-6"
                    >
                      <h3 className="text-[14px] font-medium">
                        {variation.title}
                      </h3>

                      <p className="text-[13px] leading-6 text-[#625c54]">
                        {variation.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>
          )}

          <AdSlot placement="symbol-before-faq" />

          {symbol.faq?.length > 0 && (
            <section className="border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                MERAK EDİLENLER
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                {name} rüyaları hakkında sık sorulan sorular
              </h2>

              <div className="mt-7 overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
                {symbol.faq.map((item, index) => (
                  <details
                    key={`${item.question}-${index}`}
                    className="group border-b border-[#e1dad1] last:border-b-0"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-4 text-[14px]">
                      <span>{item.question}</span>

                      <span className="text-lg font-light transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <div className="max-w-3xl px-6 pb-5 text-[13px] leading-6 text-[#625c54]">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="border-t border-[#d9d2c9] py-10">
            <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                  KAYNAKLAR
                </p>

                <h2 className="text-3xl font-light tracking-[-0.025em]">
                  Bu içerik hangi kaynaklara dayanıyor?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#746d64]">
                  Bu sayfadaki psikolojik, teorik ve geleneksel
                  perspektifler hazırlanırken yararlanılan temel
                  kaynakları ayrı bir sayfada inceleyebilirsin.
                </p>
              </div>

              <Link
                href={`/ruyalar/semboller/${symbol.slug}/kaynaklar`}
                className="inline-flex items-center gap-4 border-b border-[#81786e] pb-1 text-sm"
              >
                Tüm kaynakları görüntüle
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </article>

        <footer className="flex flex-col gap-4 border-t border-[#d9d2c9] py-7 text-xs text-[#91887e] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-medium tracking-[0.28em] text-[#24221f]">
            INUS
          </span>

          <div className="flex flex-wrap gap-5">
            <Link href="/ruyalar">Rüyalar</Link>

            <Link href="/ruyalar/semboller">
              Rüya Sembolleri
            </Link>

            <Link
              href={`/ruyalar/semboller/${symbol.slug}/kaynaklar`}
            >
              Kaynaklar
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
