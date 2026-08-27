import Link from "next/link";
import type { DreamSymbol } from "@/data/dream-symbols";
import { SymbolDreamAnalyzer } from "./SymbolDreamAnalyzer";

import { dreamPhrase } from "@/data/dream-phrase";

type SymbolArticleProps = {
  symbol: DreamSymbol;
  relatedSymbols: DreamSymbol[];
};

export function SymbolArticle({
  symbol,
  relatedSymbols,
}: SymbolArticleProps) {
  const phrase = dreamPhrase(symbol.title);

  return (
    <>
      {/* INTRO */}
      <section className="mb-10">
        <p className="max-w-3xl text-base leading-8 text-[#686158]">
          <span className="font-medium text-[#454039]">
            {phrase} ne anlama gelir?
          </span>{" "}
          Bazen rüyada gördüğümüz bir şey, göründüğünden çok daha fazlasını
          anlatıyor olabilir. Bir sembolün şekli kadar, onun rüyada nasıl ortaya
          çıktığı, ona ne yaptığınız ve o sırada ne hissettiğiniz de önemlidir.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-8 text-[#686158]">
          {symbol.title} rüyanızda yalnızca bir görüntü müydü, yoksa dikkatinizi
          özellikle ona çeken bir şey mi vardı? Aşağıda bu sembolün farklı
          psikolojik, Jungcu, dini ve spiritüel yaklaşımlardaki olası
          çağrışımlarını bulabilirsiniz.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-8 text-[#686158]">
          <span className="font-medium text-[#625c54]">
            Asıl ipucu ise rüyanın kendisinde olabilir.
          </span>{" "}
          Çünkü aynı sembol, farklı bir rüyada bambaşka bir hikâye anlatabilir.
        </p>
      </section>

      {/* ANA ANLAM */}
      <section className="mb-12">
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <MeaningCard
            emoji="🟢"
            title="Olumlu çağrışımlar"
            items={symbol.positiveAssociations}
          />

          <MeaningCard
            emoji="🔴"
            title="Zorlayıcı çağrışımlar"
            items={symbol.challengingAssociations}
          />
        </div>
      </section>

      {/* BAĞLAMA GÖRE */}
      <section className="mb-12">
        <div className="rounded-[28px] border border-[#d9d1c7] bg-[#faf8f4] px-6 py-7 sm:px-9 sm:py-9">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            RÜYANIN BAĞLAMI
          </p>

          <h2 className="mt-3 text-2xl font-light sm:text-3xl">
            {symbol.title} rüyanızda nasıl karşınıza çıktı?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#686158]">
            Aynı sembol, rüyadaki olaylara ve hislerinize göre bambaşka
            çağrışımlar taşıyabilir. Aşağıdaki sorular bunu anlamaya yardımcı
            olabilir.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {symbol.contextDependentAssociations.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-[#eee9e1] px-4 py-3 text-sm leading-6 text-[#514b44]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GERÇEK RÜYA ANALİZİ */}
      <section className="mb-16">
        <SymbolDreamAnalyzer symbolTitle={symbol.title} />
      </section>

      {/* PSİKOLOJİK / KÜLTÜREL YAKLAŞIMLAR */}
      <section className="mb-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            FARKLI PERSPEKTİFLER
          </p>

          <h2 className="mt-3 text-3xl font-light sm:text-4xl">
            {symbol.title} rüyası farklı yaklaşımlarda nasıl ele alınır?
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PerspectiveCard
            emoji="🧠"
            title="Modern psikoloji"
            text={symbol.psychology}
          />

          <PerspectiveCard
            emoji="🌙"
            title="Jungcu yaklaşım"
            text={symbol.jungian}
          />

          <PerspectiveCard
            emoji="🕌"
            title="İslami geleneklerde"
            text={symbol.islamicTradition}
          />

          <PerspectiveCard
            emoji="✝️"
            title="Hristiyan geleneklerinde"
            text={symbol.christianTraditions}
          />

          <PerspectiveCard
            emoji="✡️"
            title="Yahudi geleneklerinde"
            text={symbol.jewishTraditions}
          />

          <PerspectiveCard
            emoji="☸️"
            title="Budist ve Doğu yaklaşımlarında"
            text={symbol.buddhistEasternApproaches}
          />

          <PerspectiveCard
            emoji="✨"
            title="Modern spiritüel yaklaşımlarda"
            text={symbol.spiritualApproaches}
          />
        </div>
      </section>

      {/* KARŞILAŞTIRMA */}
      <section className="mb-16">
        <div className="mb-7">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            KARŞILAŞTIRMA
          </p>

          <h2 className="mt-3 text-3xl font-light">
            Yaklaşımlar arasındaki farklar
          </h2>
        </div>

        <div className="space-y-3">
          {symbol.comparisonTable.map((row) => (
            <div
              key={`${row.approach}-${row.type}`}
              className="grid grid-cols-[minmax(100px,0.7fr)_1.5fr] gap-4 rounded-[22px] border border-[#ddd5cc] bg-[#faf8f4] p-5 sm:grid-cols-[1fr_2fr_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-[#454039]">
                  {row.approach}
                </p>
              </div>

              <div>
                <p className="text-sm leading-6 text-[#625c54]">
                  {row.interpretation}
                </p>
              </div>

              <div className="hidden sm:block">
                <p className="text-xs leading-5 text-[#8a8177]">
                  {row.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORTAK NOKTALAR */}
      <section className="mb-5">
        <InfoSection
          emoji="🤝"
          title="Farklı yaklaşımların ortaklaştığı noktalar"
          text={symbol.commonGround}
        />
      </section>

      <section className="mb-5">
        <InfoSection
          emoji="⚡"
          title="Yaklaşımlar nerede ayrılıyor?"
          text={symbol.differences}
        />
      </section>

      <section className="mb-16">
        <div className="rounded-[28px] bg-[#292621] px-7 py-8 text-white sm:px-10 sm:py-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
            INUS'UN TARAFSIZ DEĞERLENDİRMESİ
          </p>

          <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#d4cec5]">
            {symbol.inusAssessment}
          </p>
        </div>
      </section>

      {/* VARYASYONLAR */}
      <section className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
          RÜYA SENARYOLARI
        </p>

        <h2 className="mt-3 text-3xl font-light">
          Rüyadaki ayrıntı neden önemli?
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-[#686158]">
          Aynı sembol farklı rüya senaryolarında farklı anlamlar taşıyabilir.{" "}
          {phrase} ile ne yaptığınız, sembolün nasıl göründüğü ve o sırada ne
          hissettiğiniz yorumu değiştirebilir.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {symbol.commonVariations.map((variation) => (
            <div
              key={variation}
              className="rounded-[20px] border border-[#ddd5cc] bg-[#faf8f4] px-5 py-4 text-sm text-[#514b44]"
            >
              {variation}
            </div>
          ))}
        </div>
      </section>

      {/* ALT CTA */}
      <section className="mb-16 rounded-[30px] border border-[#d9d1c7] bg-[#eee9e1] px-7 py-9 sm:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
          KENDİ RÜYAN
        </p>

        <h2 className="mt-3 text-3xl font-light">
          Sadece {symbol.title.toLocaleLowerCase("tr-TR")} değil, rüyanın
          tamamını yorumlat.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#686158]">
          Sembolün tek başına ne anlama geldiğinden daha önemlisi, onu senin
          rüyanda neyin çevrelediğidir. Olayları, duyguları ve kişisel
          çağrışımlarını birlikte değerlendirelim.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-[#292621] px-7 py-3 text-sm text-white transition hover:bg-[#3a3630]"
        >
          Rüyamı yorumlat →
        </Link>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
          SIK SORULAN SORULAR
        </p>

        <h2 className="mt-3 text-3xl font-light">
          {symbol.title} rüyası hakkında
        </h2>

        <div className="mt-7 space-y-3">
          {symbol.faq.map((item) => (
            <article
              key={item.question}
              className="rounded-[22px] border border-[#d9d1c7] bg-[#faf8f4] p-6"
            >
              <h3 className="text-base font-medium text-[#454039]">
                {item.question}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#686158]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* KAYNAKLAR */}
      <section className="pb-16 sm:pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
          KAYNAKLAR
        </p>

        <h2 className="mt-3 text-3xl font-light">
          Kaynaklar ve referanslar
        </h2>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#686158]">
          Bu sayfadaki bilimsel, psikolojik ve kültürel çerçeveler ilgili
          kaynaklar üzerinden değerlendirilmelidir. Hiçbir sembol yorumu
          kişisel bağlamdan bağımsız kesin bir sonuç olarak ele alınmamalıdır.
        </p>

        <div className="mt-7 space-y-4">
          {symbol.sources.map((source) => (
            <article
              key={source.title}
              className="rounded-[22px] border border-[#ddd5cc] bg-[#faf8f4] p-6"
            >
              <p className="text-sm font-medium text-[#454039]">
                {source.authors}
              </p>

              <p className="mt-1 text-sm leading-7 text-[#625c54]">
                <em>{source.title}</em>
              </p>

              {source.journal && (
                <p className="mt-1 text-xs text-[#8a8177]">
                  {source.journal}
                </p>
              )}

              {source.detail && (
                <p className="mt-2 text-xs text-[#aaa198]">
                  {source.detail}
                </p>
              )}

              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-[#625c54] underline underline-offset-4 hover:text-[#24221f]"
                >
                  Kaynağı görüntüle →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* RELATED */}
      {relatedSymbols.length > 0 && (
        <section className="pb-16 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            İLGİLİ SEMBOLLER
          </p>

          <h2 className="mt-3 text-3xl font-light">
            Benzer rüya sembolleri
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {relatedSymbols.map((related) => (
              <Link
                key={related.slug}
                href={`/ruyalar/semboller/${related.slug}`}
                className="block rounded-[24px] border border-[#d9d1c7] bg-[#faf8f4] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(70,60,50,0.06)]"
              >
                <h3 className="text-lg font-normal">
                  {dreamPhrase(related.title)}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#686158]">
                  {related.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function MeaningCard({
  emoji,
  title,
  items,
}: {
  emoji: string;
  title: string;
  items: string[];
}) {
  return (
    <section className="min-w-0 rounded-[24px] border border-[#ddd5cc] bg-[#faf8f4] p-4 sm:p-6">
      <h2 className="text-base font-medium leading-6 sm:text-xl">
        <span>{emoji}</span>{" "}
        {title}
      </h2>

      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-xs leading-5 text-[#625c54] sm:text-sm sm:leading-6"
          >
            • {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function PerspectiveCard({
  emoji,
  title,
  text,
}: {
  emoji: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#ddd5cc] bg-[#faf8f4] p-6">
      <h3 className="text-lg font-medium">
        <span>{emoji}</span>{" "}
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[#625c54]">
        {text}
      </p>
    </article>
  );
}

function InfoSection({
  emoji,
  title,
  text,
}: {
  emoji: string;
  title: string;
  text: string;
}) {
  return (
    <section className="rounded-[24px] border border-[#ddd5cc] bg-[#faf8f4] p-6 sm:p-7">
      <h2 className="text-2xl font-light">
        {emoji} {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-[#625c54]">
        {text}
      </p>
    </section>
  );
}