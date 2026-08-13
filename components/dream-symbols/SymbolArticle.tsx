import Link from "next/link";
import type { DreamSymbol } from "@/data/dream-symbols";

type SymbolArticleProps = {
  symbol: DreamSymbol;
  relatedSymbols: DreamSymbol[];
};

export function SymbolArticle({ symbol, relatedSymbols }: SymbolArticleProps) {
  return (
    <>
      <section className="mb-10 rounded-[28px] bg-[#292621] px-7 py-9 text-white sm:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#aaa49c]">
          KISA CEVAP
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d4cec5]">
          {symbol.shortDescription}
        </p>
        <p className="mt-4 max-w-3xl text-xs leading-6 text-[#aaa49c]">
          Bu sayfa kesin teşhis, gelecek tahmini veya evrensel anlam iddiası
          taşımaz. Rüyanın kişisel bağlamı her zaman belirleyicidir.
        </p>
      </section>

      <section className="mb-14 border-y border-[#ddd5cc] py-8 sm:mb-16 sm:py-9">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
              INUS
            </p>
            <h2 className="mt-3 text-2xl font-light sm:text-3xl">
              Bu sembol senin rüyanda ne anlatıyor olabilir?
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#686158]">
              Hazır anlamlara bağlı kalmadan, rüyanın tamamını ve kişisel
              çağrışımlarını birlikte inceleyelim.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#292621] px-6 py-3 text-sm text-white transition hover:bg-[#3a3630]"
          >
            Rüyamı analiz et →
          </Link>
        </div>
      </section>

      <article className="rounded-[30px] border border-[#d9d1c7] bg-[#faf8f4] px-7 py-10 sm:px-12 sm:py-14">
        <div className="space-y-12 text-[15px] leading-8 text-[#454039]">
          <SymbolListSection
            emoji="🟢"
            title="Olumlu çağrışımlar"
            items={symbol.positiveAssociations}
          />
          <SymbolListSection
            emoji="🔴"
            title="Zorlayıcı çağrışımlar"
            items={symbol.challengingAssociations}
          />
          <SymbolListSection
            emoji="🟡"
            title="Bağlama göre değişen anlamlar"
            items={symbol.contextDependentAssociations}
          />

          <SymbolTextSection emoji="🧠" title="Modern psikoloji">
            {symbol.psychology}
          </SymbolTextSection>
          <SymbolTextSection emoji="🌙" title="Jungcu yaklaşım">
            {symbol.jungian}
          </SymbolTextSection>
          <SymbolTextSection emoji="🕌" title="İslami geleneklerde">
            {symbol.islamicTradition}
          </SymbolTextSection>
          <SymbolTextSection emoji="✝️" title="Hristiyan geleneklerinde">
            {symbol.christianTraditions}
          </SymbolTextSection>
          <SymbolTextSection emoji="✡️" title="Yahudi geleneklerinde">
            {symbol.jewishTraditions}
          </SymbolTextSection>
          <SymbolTextSection emoji="☸️" title="Budist ve Doğu yaklaşımlarında">
            {symbol.buddhistEasternApproaches}
          </SymbolTextSection>
          <SymbolTextSection emoji="✨" title="Modern spiritüel yaklaşımlarda">
            {symbol.spiritualApproaches}
          </SymbolTextSection>

          <section>
            <h2 className="text-2xl font-normal">
              📊 Yaklaşımların karşılaştırması
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#d9d1c7] text-left">
                    <th className="pb-3 pr-4 font-medium text-[#454039]">
                      Yaklaşım
                    </th>
                    <th className="pb-3 pr-4 font-medium text-[#454039]">
                      Olası yorum
                    </th>
                    <th className="pb-3 font-medium text-[#454039]">
                      Yorum türü
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {symbol.comparisonTable.map((row) => (
                    <tr
                      key={`${row.approach}-${row.type}`}
                      className="border-b border-[#e8e2d9]"
                    >
                      <td className="py-3 pr-4 align-top text-[#625c54]">
                        {row.approach}
                      </td>
                      <td className="py-3 pr-4 align-top text-[#625c54]">
                        {row.interpretation}
                      </td>
                      <td className="py-3 align-top text-[#8a8177]">
                        {row.type}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <SymbolTextSection
            emoji="🤝"
            title="Farklı yaklaşımların ortaklaştığı noktalar"
          >
            {symbol.commonGround}
          </SymbolTextSection>
          <SymbolTextSection emoji="⚡" title="Yaklaşımlar nerede ayrılıyor?">
            {symbol.differences}
          </SymbolTextSection>
          <SymbolTextSection emoji="" title="INUS'un tarafsız değerlendirmesi">
            {symbol.inusAssessment}
          </SymbolTextSection>

          <section>
            <h2 className="text-2xl font-normal">
              Rüyadaki ayrıntı neden önemli?
            </h2>
            <p className="mt-5">
              Aynı sembol farklı rüya senaryolarında farklı anlamlar taşıyabilir.
              Aşağıdaki varyasyonlar yorumu etkileyebilir:
            </p>
            <ul className="mt-5 space-y-2 pl-5">
              {symbol.commonVariations.map((variation) => (
                <li key={variation}>• {variation}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <section className="py-16 sm:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
          SIK SORULAN SORULAR
        </p>
        <h2 className="mt-4 text-3xl font-light">Sık sorulan sorular</h2>
        <div className="mt-8 space-y-4">
          {symbol.faq.map((item) => (
            <article
              key={item.question}
              className="rounded-[24px] border border-[#d9d1c7] bg-[#faf8f4] p-6"
            >
              <h3 className="text-lg font-normal">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#686158]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
          KAYNAKLAR
        </p>
        <h2 className="mt-4 text-3xl font-light">Kaynaklar</h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#686158]">
          Aşağıdaki kaynaklar gerçek ve doğrulanabilir akademik veya
          geleneksel referanslardır. Bilimsel iddialar ampirik araştırmalara;
          dini/kültürel iddialar ilgili geleneklerin kaynaklarına dayanır.
        </p>
        <div className="mt-8 space-y-5">
          {symbol.sources.map((source) => (
            <article
              key={source.title}
              className="rounded-2xl border border-[#ddd5cb] bg-[#faf8f4] p-6"
            >
              <p className="text-sm font-medium text-[#454039]">
                {source.authors}
              </p>
              <p className="mt-1 text-sm leading-7 text-[#625c54]">
                <em>{source.title}</em>
              </p>
              {source.journal && (
                <p className="mt-1 text-xs text-[#8a8177]">{source.journal}</p>
              )}
              {source.detail && (
                <p className="mt-2 text-xs text-[#aaa198]">{source.detail}</p>
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

      {relatedSymbols.length > 0 && (
        <section className="pb-16 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            İLGİLİ SEMBOLLER
          </p>
          <h2 className="mt-4 text-3xl font-light">Benzer rüya sembolleri</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {relatedSymbols.map((related) => (
              <Link
                key={related.slug}
                href={`/ruyalar/semboller/${related.slug}`}
                className="block rounded-[24px] border border-[#d9d1c7] bg-[#faf8f4] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(70,60,50,0.06)]"
              >
                <h3 className="text-lg font-normal">
                  Rüyada {related.title} görmek
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

function SymbolListSection({
  emoji,
  title,
  items,
}: {
  emoji: string;
  title: string;
  items: string[];
}) {
  return (
    <section>
      <h2 className="text-2xl font-normal">
        {emoji} {title}
      </h2>
      <ul className="mt-5 space-y-2 pl-5">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}

function SymbolTextSection({
  emoji,
  title,
  children,
}: {
  emoji: string;
  title: string;
  children: string;
}) {
  return (
    <section>
      <h2 className="text-2xl font-normal">
        {emoji ? `${emoji} ` : ""}
        {title}
      </h2>
      <p className="mt-5">{children}</p>
    </section>
  );
}
