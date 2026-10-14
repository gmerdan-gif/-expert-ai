"use client";

import AdSlot from "@/components/ads/AdSlot";
import { parseDreamResponse, type DreamMeta } from "@/lib/dream-analysis/response";

import { useEffect, useState } from "react";

const analysisStatuses = [
  "Rüya alındı",
  "Rüyanın yapısı inceleniyor",
  "Öne çıkan ayrıntılar değerlendiriliyor",
  "Duygular ve ilişkiler aranıyor",
  "Yorum oluşturuluyor",
];

function formatResult(text: string) {
  const lines = text.split("\n");

  return lines.map((line, index) => {
    const headingMatch = line.match(/^#{1,6}\s+(.+)$/);

    if (headingMatch) {
      const title = headingMatch[1]
        .replace("Psikolojik açıdan", "Psikolojik açıdan")
        .trim();

      return (
        <h3
          key={index}
          className="mb-4 mt-8 text-sm font-medium uppercase tracking-[0.18em] text-[#81786e] first:mt-0"
        >
          {title}
        </h3>
      );
    }

    return (
      <span key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    );
  });
}

export default function Home() {
  const [dream, setDream] = useState("");
  const [result, setResult] = useState("");
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showHow, setShowHow] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const [dreamMeta, setDreamMeta] = useState<DreamMeta | null>(null);

  useEffect(() => {
    if (!loading) return;

    setStatusIndex(0);

    const interval = setInterval(() => {
      setStatusIndex((current) =>
        Math.min(current + 1, analysisStatuses.length - 1)
      );
    }, 1600);

    return () => clearInterval(interval);
  }, [loading]);

  async function analyzeDream() {
    if (!dream.trim() || loading) return;

    setLoading(true);
    setResult("");
    setAnalysisError(null);
    setDreamMeta(null);
    setStatusIndex(0);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dream: dream.trim(),
          language: "tr",
        }),
      });

      if (!response.ok) {
        let message = "Analiz başarısız.";

        try {
          const data = await response.json();
          message = data?.error || message;
        } catch {
          // Varsayılan hata mesajını kullan.
        }

        throw new Error(message);
      }

      if (!response.body) {
        throw new Error("Analiz yanıtı alınamadı.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let raw = "";
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          raw += decoder.decode(value, { stream: true });
          const parsed = parseDreamResponse(raw);
          setDreamMeta(parsed.meta);
          setResult(parsed.text);
        }
        raw += decoder.decode();
        const parsed = parseDreamResponse(raw);
        if (!parsed.text) {
          throw new Error("Yorum alınamadı. Lütfen tekrar deneyin.");
        }
        setDreamMeta(parsed.meta);
        setResult(parsed.text);
      } finally {
        reader.releaseLock();
      }

      setStatusIndex(analysisStatuses.length - 1);
    } catch (error) {
      console.error(error);

      setResult("");
      setDreamMeta(null);
      setAnalysisError(
        error instanceof Error
          ? (error instanceof TypeError ? "Bağlantı kesildi. Lütfen tekrar deneyin." : error.message)
          : "Analiz tamamlanamadı. Lütfen tekrar deneyin."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 sm:px-8">

        {/* HEADER */}
        <header className="flex items-center justify-between py-5 sm:py-6">
          <button
            onClick={() => {
              setShowHow(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-medium tracking-[0.28em]"
          >
            INUS
          </button>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setShowHow((value) => !value)}
              className="cursor-pointer text-sm tracking-wide text-[#5d5851] transition hover:text-[#24221f]"
            >
              Nasıl çalışır
            </button>

            <span className="text-[#c8c0b6]">·</span>

            <a
              href="/ruyalar/semboller"
              className="text-sm tracking-wide text-[#5d5851] transition hover:text-[#24221f]"
            >
              Rüya Sembolleri
            </a>
          </div>
        </header>

        {/* HOW IT WORKS */}
        {showHow && (
          <article>
            <section className="pb-14 pt-14 sm:pb-20 sm:pt-20">
              <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                <div>
                  <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                    NASIL ÇALIŞIR?
                  </p>

                  <h1 className="max-w-xl text-[48px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[64px] md:text-[76px]">
                    Rüyanı
                    <br />
                    hatırladığın
                    <br />
                    gibi anlat.
                  </h1>
                </div>

                <div className="flex flex-col justify-end">
                  <p className="max-w-2xl text-[16px] leading-8 text-[#625c54]">
                    Mükemmel hatırlaman ya da sembolleri tek tek açıklaman
                    gerekmez. Hatırladığın olayları, insanları, yerleri ve
                    hislerini kendi kelimelerinle anlatman yeterli.
                  </p>

                  <div className="mt-10">
                    <button
                      type="button"
                      onClick={() => setShowHow(false)}
                      className="inline-flex cursor-pointer items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]"
                    >
                      Rüyanı anlat
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                DÖRT ADIMDA
              </p>

              <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                Rüyanı tek bir anlama indirgemeden ele al.
              </h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Rüyanı anlat",
                    body:
                      "Hatırladığın kadarını yaz. Nerede olduğun, kimlerin olduğu, ne yaşandığı ve sende kalan his gibi ayrıntılar rüyanın bağlamını anlamamıza yardımcı olur.",
                  },
                  {
                    number: "02",
                    title: "Rüyanın bütününe bakalım",
                    body:
                      "INUS yalnızca “yılan”, “ev” ya da “diş” gibi tek tek sembollerden hazır anlamlar çıkarmaz. Sembolleri; olaylar, duygular, insanlar ve rüyanın bütünü içinde ele alır.",
                  },
                  {
                    number: "03",
                    title: "Farklı perspektiflerden düşün",
                    body:
                      "Rüyanı psikolojik ve Jungçu yaklaşımlar başta olmak üzere, uygun olduğunda farklı kültürel perspektiflerle değerlendiren bir yorum alırsın. Bu perspektifler birbirine karıştırılmadan kendi bağlamlarında ele alınır.",
                  },
                  {
                    number: "04",
                    title: "Kendi bağlantılarını fark et",
                    body:
                      "Ortaya çıkan yorum tek bir “doğru anlam” iddiası taşımaz. Amaç, rüyandaki ayrıntılarla kendi yaşam bağlamın arasında düşünmeye değer bağlantılar kurmana yardımcı olmaktır.",
                  },
                ].map((step) => (
                  <section
                    key={step.number}
                    className="flex min-h-[260px] flex-col justify-between rounded-xl border border-[#d9d1c7] bg-[#faf8f4] p-7 sm:p-8"
                  >
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#81786e]">
                      {step.number}
                    </p>

                    <div className="mt-12">
                      <h3 className="text-2xl font-light tracking-[-0.025em]">
                        {step.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#625c54]">
                        {step.body}
                      </p>
                    </div>
                  </section>
                ))}
              </div>
            </section>

            <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
              <h2 className="text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                İçerikler nasıl hazırlanıyor?
              </h2>
              <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-[#625c54]">
                <p>
                  Rüya sembolü içeriklerinin araştırma ve taslak aşamasında yapay
                  zekâ desteği kullanılır. Yayına hazırlama sürecinde insan
                  editörler metinleri inceler ve düzenler; kullanılan kaynaklar
                  da insan editör kontrolünden geçer. Kaynakları, sembol
                  sayfalarındaki kaynak bağlantısından inceleyebilirsin.
                </p>
                <p>
                  Rüyanı yazarak aldığın kişisel yorum ise yapay zekâ tarafından
                  oluşturulur; her yanıt gösterilmeden önce bir insan editör
                  tarafından incelenmez. Yorumlar tanı veya gelecek öngörüsü
                  sunmaz; kendi deneyimin üzerine düşünmene yardımcı olur.
                </p>
                <a href="/hakkimizda#icerik-yontemi" className="inline-flex min-h-11 items-center underline underline-offset-4">
                  İçerik hazırlama yöntemimizi incele
                </a>
              </div>
            </section>

            <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
              <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
                <div>
                  <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                    NE BEKLEMELİSİN?
                  </p>

                  <h2 className="max-w-md text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                    Bir cevap değil, düşünmek için bir çerçeve.
                  </h2>
                </div>

                <div className="max-w-2xl">
                  <div className="rounded-xl border border-[#ddd5cb] bg-[#eee8df] px-7 py-7 sm:px-8">
                    <p className="text-[15px] leading-8 text-[#5f5952]">
                      Kesin tabirler, tanı veya gelecek tahmini değil. Rüyana
                      bağlam içinde bakmanın bir yolu.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex justify-end border-t border-[#d9d2c9] py-14 sm:py-16">
              <button
                type="button"
                onClick={() => setShowHow(false)}
                className="inline-flex cursor-pointer items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]"
              >
                Rüyanı anlat
                <span aria-hidden="true">→</span>
              </button>
            </section>
          </article>
        )}

        {/* HOME */}
        {!showHow && (
          <>
            <section className="flex flex-col items-center pt-5 text-center sm:pt-8">

              {/* HERO */}
              <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#8a8177]">
                RÜYANI ANLAT
              </p>

              <h1 className="text-4xl font-light tracking-[0.16em] sm:text-5xl">
                <span aria-hidden="true">INUS</span>
                <span className="sr-only">
                  INUS — Psikolojik Rüya Yorumu ve Rüya Analizi
                </span>
              </h1>

              <p className="mt-3 text-lg font-light tracking-wide text-[#686158] sm:text-xl">
                Neden tam da bu rüya?
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#817970] sm:text-[15px]">
                Rüyanı yalnızca tek bir sembole indirgemeden ele al. INUS;
                gördüklerini, hissettiklerini ve rüyanın bağlamını psikolojik,
                Jungçu ve farklı kültürel perspektiflerle birlikte
                değerlendirir.
              </p>

              {/* DREAM CARD */}
              <div className="mt-7 w-full max-w-5xl">
                <div className="rounded-[28px] border border-[#d9d1c7] bg-[#faf8f4] p-2 shadow-[0_20px_60px_rgba(70,60,50,0.06)]">

                  <label
                    htmlFor="dream-input"
                    className="block px-5 pb-1 pt-4 text-[11px] uppercase tracking-[0.22em] text-[#81786e] sm:px-7"
                  >
                    Rüyanı hatırladığın gibi anlat.
                  </label>

                  <textarea
                    id="dream-input"
                    value={dream}
                    onChange={(e) => setDream(e.target.value)}
                    disabled={loading}
                    placeholder="Neredeydin, kimler vardı, ne oldu ve sende nasıl bir his bıraktı? Hatırladığın kadarı yeterli."
                    className="min-h-[190px] w-full resize-none rounded-[22px] bg-transparent px-5 py-5 text-base leading-7 text-[#302d29] outline-none placeholder:text-[#aaa198] disabled:opacity-70 sm:min-h-[215px] sm:px-7 sm:py-6"
                  />

                  <div className="flex items-center justify-between border-t border-[#e5ded5] px-4 py-3.5 sm:px-6">
                    <div className="flex items-center gap-3">
                      {dream.length > 0 && !loading && (
                        <button
                          onClick={() => {
                            setDream("");
                            setResult("");
                          }}
                          className="text-xs text-[#9a9187] transition hover:text-[#454039]"
                        >
                          Temizle
                        </button>
                      )}

                      <span className="text-xs text-[#aaa198]">
                        {dream.length > 0 ? `${dream.length} karakter` : " "}
                      </span>
                    </div>

                    <button
                      onClick={analyzeDream}
                      disabled={!dream.trim() || loading}
                      className="rounded-full bg-[#292621] px-6 py-3 text-sm text-white transition hover:bg-[#403b35] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      {loading
                        ? "Rüyan inceleniyor..."
                        : "Rüyamı yorumla"}
                    </button>
                  </div>
                </div>
              </div>

              {/* ANALYSIS STATUS */}
              {loading && (
                <section className="mt-7 w-full max-w-5xl rounded-[22px] border border-[#ddd5cb] bg-[#eee9e1] px-6 py-5 text-left">
                  <div className="flex items-center gap-3">

                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8d8479] opacity-50" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#8d8479]" />
                    </span>

                    <span className="text-sm text-[#625c54]">
                      {analysisStatuses[statusIndex]}
                      <span className="inline-block w-5 text-left">
                        ...
                      </span>
                    </span>
                  </div>

                  <div className="mt-4 h-px w-full overflow-hidden bg-[#d8d0c5]">
                    <div
                      className="h-full bg-[#8d8479] transition-all duration-1000"
                      style={{
                        width: `${((statusIndex + 1) / analysisStatuses.length) * 100}%`,
                      }}
                    />
                  </div>
                </section>
              )}

              {/* RESULT */}
              {analysisError && (
                <p role="alert" className="mt-6 text-sm leading-7 text-[#625c54]">
                  {analysisError}
                </p>
              )}

              {result && (
                <section className="mt-8 w-full max-w-5xl rounded-[28px] border border-[#d9d1c7] bg-[#faf8f4] p-7 text-left shadow-[0_20px_60px_rgba(70,60,50,0.05)] sm:p-10">

                  {/* RESULT HEADER */}
                  <div className="mb-7 flex items-center gap-3">
                    <div className="h-px w-8 bg-[#9b9186]" />

                    <span className="text-xs uppercase tracking-[0.25em] text-[#81786e]">
                      Rüyanın yorumu
                    </span>
                  </div>

                  {/* COMPLETE NARRATIVE INCLUDING THE PRACTICAL CONCLUSION */}
                  <div className="text-[15px] leading-8 text-[#454039]">
                    {formatResult(result)}
                  </div>

                  {/* LUCKY NUMBERS */}
                  {dreamMeta && dreamMeta.luckyNumbers && dreamMeta.luckyNumbers.length > 0 && (
                    <div className="mt-8 overflow-hidden rounded-[22px] border border-[#e2dbd2] bg-[#f3eee7]">

                      <div className="border-b border-[#ded6cc] px-6 py-5">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a8177]">
                          ✨ Rüyanızın şanslı sayıları
                        </p>
                      </div>

                      <div className="grid grid-cols-3 divide-x divide-[#ded6cc]">
                        {dreamMeta.luckyNumbers.map((item) => (
                          <div
                            key={item.number}
                            className="flex min-h-[115px] flex-col items-center justify-center px-3 py-5 text-center"
                          >
                            <span className="text-[28px] font-medium tracking-tight text-[#403b35]">
                              {item.number}
                            </span>

                            <div className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1 text-[11px] text-[#8a8177]">
                              {item.themes.map((theme, index) => (
                                <span key={`${item.number}-${theme}`}>
                                  {theme}
                                  {index < item.themes.length - 1 && (
                                    <span className="ml-2 text-[#aaa198]">
                                      ·
                                    </span>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}

                  {/* THEMES + DIRECTION */}
                  {dreamMeta && (
                    <div className="mt-5 overflow-hidden rounded-[22px] border border-[#e2dbd2] bg-[#f3eee7]">

                      <div className="grid grid-cols-1 divide-y divide-[#ded6cc] sm:grid-cols-2 sm:divide-x sm:divide-y-0">

                        {/* THEMES */}
                        <div className="px-6 py-5">
                          <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#8a8177]">
                            Baskın temalar
                          </p>

                          <div className="flex flex-wrap gap-x-2 gap-y-1 text-[14px] text-[#403b35]">
                            {dreamMeta.themes.map((theme, index) => (
                              <span key={theme}>
                                {theme}
                                {index < dreamMeta.themes.length - 1 && (
                                  <span className="ml-2 text-[#aaa198]">
                                    ·
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* DIRECTION */}
                        <div className="px-6 py-5">
                          <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#8a8177]">
                            Rüyanın ana yönü
                          </p>

                          <p className="text-[14px] leading-6 text-[#403b35]">
                            {dreamMeta.direction}
                          </p>
                        </div>

                      </div>
                    </div>
                  )}

                  {dreamMeta?.insights && (
                    <div className="mt-8 border-t border-[#e5ded5] pt-7">
                      <div className="mb-7 flex items-center gap-3">
                        <div className="h-px w-8 bg-[#9b9186]" />
                        <h2 className="text-xs uppercase tracking-[0.25em] text-[#81786e]">
                          Rüyanın sende açığa çıkardıkları
                        </h2>
                      </div>
                      <div className="space-y-6">
                        {dreamMeta.insights.map((insight, index) => (
                          <div key={`${index}-${insight.title}`}>
                            <h3 className="mb-2 text-base font-medium text-[#403b35]">
                              {insight.title}
                            </h3>
                            <p className="text-[15px] leading-8 text-[#454039]">
                              {insight.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </section>
              )}

            </section>

            {result && !loading && (
              <div className="w-full">
                <AdSlot placement="home-after-analysis" />
              </div>
            )}

            <section className="w-full border-t border-[#d9d2c9] py-12 text-center sm:py-14">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                RÜYA SEMBOLLERİ
              </p>

              <h2 className="text-3xl font-light tracking-[-0.025em] text-[#302d29] sm:text-4xl">
                Rüyanda ne gördün?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#746d64]">
                Rüyanda öne çıkan bir sembolü psikolojik, Jungçu ve farklı
                kültürel perspektiflerden inceleyebilirsin.
              </p>

              <a
                href="/ruyalar/semboller"
                className="mt-7 inline-flex items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]"
              >
                Sembollere göz at
                <span aria-hidden="true">→</span>
              </a>
            </section>


          </>
        )}
      </div>
    </main>
  );
}
