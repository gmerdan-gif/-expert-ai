import Link from "next/link";

import AdSlot from "@/components/ads/AdSlot";
import { dreamPhrase } from "@/lib/symbols/dream-title";

import type {
  SymbolContent,
  LimitedEvidenceLane,
} from "@/data/symbol-system/schema/symbol-schema";

type RelatedSymbol = Pick<
  SymbolContent,
  "slug" | "title"
>;

type SymbolPageProps = {
  symbol: SymbolContent;
  relatedSymbols?: RelatedSymbol[];
};

function lowerTr(value: string) {
  return value.toLocaleLowerCase("tr-TR");
}

function rawSymbolName(title: string) {
  return title
    .replace(/^rüyada\s+/i, "")
    .replace(/\s+görmek$/i, "")
    .trim();
}

function dreamHeading(title: string) {
  return dreamPhrase(title);
}

export function SymbolPage({
  symbol,
  relatedSymbols = [],
}: SymbolPageProps) {
  const rawName = rawSymbolName(symbol.title);

  const positiveAssociations =
    symbol.positiveAssociations ?? [];

  const perspectives = [
    {
      label: "Modern psikoloji",
      lane: "psychology" as LimitedEvidenceLane,
      content: symbol.psychology,
    },
    {
      label: "Jungçu yaklaşım",
      lane: "jungian" as LimitedEvidenceLane,
      content: symbol.jungian,
    },
    {
      label: "İslami geleneklerde",
      lane: "islamic" as LimitedEvidenceLane,
      content: symbol.islamicTradition,
    },
    {
      label: "Hristiyan geleneklerinde",
      lane: "christian" as LimitedEvidenceLane,
      content: symbol.christianTraditions,
    },
    {
      label: "Yahudi geleneklerinde",
      lane: "jewish" as LimitedEvidenceLane,
      content: symbol.jewishTraditions,
    },
    {
      label: "Budist ve Doğu yaklaşımlarında",
      lane: "buddhist-eastern" as LimitedEvidenceLane,
      content: symbol.buddhistEasternApproaches,
    },
    {
      label: "Spiritüel yaklaşımlarda",
      lane: "spiritual" as LimitedEvidenceLane,
      content: symbol.spiritualApproaches,
    },
  ].filter(
    (item) =>
      typeof item.content === "string" &&
      item.content.trim().length > 0,
  );

  const sectionLinks = [
    { id: "temalar", label: "Temalar", visible: positiveAssociations.length > 0 },
    { id: "yaklasimlar", label: "Yaklaşımlar", visible: perspectives.length > 0 },
    { id: "karsilastirma", label: "Karşılaştırma", visible: Boolean(symbol.commonGround || symbol.differences) },
    { id: "baglam", label: "Bağlam", visible: Boolean(symbol.inusAssessment) },
    { id: "ayrintilar", label: "Rüyanın ayrıntıları", visible: symbol.commonVariations?.length > 0 },
    { id: "sorular", label: "Sorular", visible: symbol.faq?.length > 0 },
    { id: "ilgili-semboller", label: "İlgili semboller", visible: relatedSymbols.length > 0 },
    { id: "kaynaklar", label: "Kaynaklar", visible: true },
  ].filter((section) => section.visible);

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

            <nav aria-label="Ana gezinme" className="hidden items-center gap-7 text-sm text-[#625c54] md:flex">
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
          <details className="group relative md:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 rounded-lg border border-[#d9d2c9] px-4 text-sm text-[#454039] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#625c54] [&::-webkit-details-marker]:hidden">
              Menü
              <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <nav
              aria-label="Mobil ana gezinme"
              className="absolute right-0 top-full z-20 mt-2 w-[min(18rem,calc(100vw-2.5rem))] rounded-xl border border-[#d9d2c9] bg-[#faf8f4] p-2"
            >
              {[
                { href: "/ruyalar", label: "Rüyalar" },
                { href: "/ruyalar/semboller", label: "Rüya Sembolleri" },
                { href: `/ruyalar/semboller/${symbol.slug}/kaynaklar`, label: "Kaynaklar" },
                { href: "/hakkimizda", label: "Hakkımızda" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-11 items-center rounded-lg px-4 py-3 text-base text-[#454039] hover:bg-[#eee8df] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#625c54]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </header>

        <article className="min-w-0 [overflow-wrap:anywhere]">
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

          <nav aria-label="Bu sayfadaki bölümler" className="mb-8 border-t border-[#d9d2c9] pt-5">
            <p className="mb-2 text-sm font-medium text-[#625c54]">Bu sayfada</p>
            <ul className="flex flex-wrap gap-x-2 gap-y-1">
              {sectionLinks.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm text-[#454039] underline decoration-[#b9b0a6] underline-offset-4 hover:bg-[#eee8df] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#625c54]"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {positiveAssociations.length > 0 && (
            <section id="temalar" className="scroll-mt-6 border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                İLK BAKIŞTA
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                Hangi temalarla ilişkilendiriliyor?
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

          {perspectives.length > 0 && (
            <section id="yaklasimlar" className="scroll-mt-6 border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                FARKLI PERSPEKTİFLER
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                Farklı yaklaşımlarda nasıl ele alınıyor?
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
                    className="rounded-xl border border-[#ddd5cb] bg-[#faf8f4] px-5 py-6 sm:px-6"
                  >
                    <h3 className="mb-4 text-[15px] font-medium">
                      {item.label}
                      {symbol.limitedEvidenceLanes?.includes(item.lane) && (
                        <sup className="ml-1">
                          <Link
                            href={`/ruyalar/semboller/${symbol.slug}/kaynaklar#yaklasim-notu`}
                            aria-label={`${item.label}: kaynak ve yaklaşım dipnotunu oku`}
                            className="inline-flex min-h-6 min-w-6 items-center justify-center rounded underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2"
                          >
                            *
                          </Link>
                        </sup>
                      )}
                    </h3>

                    <div className="text-base leading-7 text-[#625c54] sm:text-[14px]">
                      {item.content}
                    </div>
                  </section>
                ))}
              </div>
            </section>
          )}

          <AdSlot placement="symbol-after-perspectives" />

          {(symbol.commonGround || symbol.differences) && (
            <section id="karsilastirma" className="scroll-mt-6 border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                KARŞILAŞTIRMA
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                Nerede yakınlaşıyor, nerede ayrılıyorlar?
              </h2>

              <div className="mt-7 grid overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4] md:grid-cols-2 md:divide-x md:divide-[#ded6cc]">
                {symbol.commonGround && (
                  <div className="px-5 py-6 sm:px-7">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#81786e]">
                      YAKINLAŞAN NOKTALAR
                    </p>

                    <div className="text-base leading-7 text-[#625c54] sm:text-[14px]">
                      {symbol.commonGround}
                    </div>
                  </div>
                )}

                {symbol.differences && (
                  <div className="border-t border-[#ded6cc] px-5 py-6 sm:px-7 md:border-t-0">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#81786e]">
                      AYRILAN NOKTALAR
                    </p>

                    <div className="text-base leading-7 text-[#625c54] sm:text-[14px]">
                      {symbol.differences}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {symbol.inusAssessment && (
            <section id="baglam" className="scroll-mt-6 border-t border-[#d9d2c9] py-10">
              <div className="rounded-xl border border-[#ddd5cb] bg-[#eee8df] px-5 py-6 sm:px-8 sm:py-8">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                  INUS DEĞERLENDİRMESİ
                </p>

                <h2 className="text-3xl font-light tracking-[-0.025em]">
                  Rüyaya bağlam içinde bakmak
                </h2>

                <div className="mt-5 max-w-4xl text-[15px] leading-8 text-[#5f5952]">
                  {symbol.inusAssessment}
                </div>
              </div>
            </section>
          )}

          {symbol.commonVariations?.length > 0 && (
            <section id="ayrintilar" className="scroll-mt-6 border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                RÜYANIN AYRINTILARI
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                Rüyanın ayrıntıları anlamı nasıl değiştirebilir?
              </h2>

              <div className="mt-7 overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
                {symbol.commonVariations.map(
                  (variation, index) => (
                    <div
                      key={`${variation.title}-${index}`}
                      className="grid gap-3 border-b border-[#e1dad1] px-5 py-4 last:border-b-0 sm:px-6 sm:grid-cols-[0.28fr_0.68fr] sm:gap-6"
                    >
                      <h3 className="text-base font-medium sm:text-[14px]">
                        {variation.title}
                      </h3>

                      <p className="text-base leading-7 text-[#625c54] sm:text-[13px] sm:leading-6">
                        {variation.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>
          )}

          <AdSlot placement="symbol-before-faq" />

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

          {symbol.faq?.length > 0 && (
            <section id="sorular" className="scroll-mt-6 border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                MERAK EDİLENLER
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                Sık sorulan sorular
              </h2>

              <div className="mt-7 overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
                {symbol.faq.map((item, index) => (
                  <details
                    key={`${item.question}-${index}`}
                    className="group border-b border-[#e1dad1] last:border-b-0"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#625c54] sm:gap-6 sm:px-6 sm:text-[14px]">
                      <span>{item.question}</span>

                      <span className="text-lg font-light transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <div className="max-w-3xl px-5 pb-5 text-base sm:px-6 leading-7 text-[#625c54] sm:text-[13px] sm:leading-6">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {relatedSymbols.length > 0 && (
            <section id="ilgili-semboller" className="scroll-mt-6 border-t border-[#d9d2c9] py-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                KEŞFET
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em]">
                İlgili rüya sembolleri
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#746d64]">
                Bu sembolle doğrudan ilişkili diğer rüya
                sembollerini keşfedebilirsin.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {relatedSymbols.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/ruyalar/semboller/${related.slug}`}
                    className="inline-flex items-center gap-3 rounded-full border border-[#d4ccc2] bg-[#faf8f4] px-5 py-3 text-sm text-[#4f4942] transition hover:border-[#9e9489] hover:text-[#24221f]"
                  >
                    {related.title}
                    <span
                      aria-hidden="true"
                      className="text-[#91887e]"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section id="kaynaklar" className="scroll-mt-6 border-t border-[#d9d2c9] py-10">
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
              <Link
                href="/hakkimizda#icerik-yontemi"
                className="mt-3 inline-flex min-h-11 items-center text-sm text-[#625c54] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                İçerik hazırlama yöntemi
              </Link>
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

            <Link href="/gizlilik">
              Gizlilik
            </Link>

            <Link href="/kullanim-kosullari">
              Kullanım Koşulları
            </Link>
          </div>

        </footer>
      </div>
    </main>
  );
}
