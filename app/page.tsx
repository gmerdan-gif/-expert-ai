"use client";

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
  const [loading, setLoading] = useState(false);
  const [showHow, setShowHow] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  type DreamMeta = {
    themes: string[];
    direction: string;
    luckyNumbers: {
      number: number;
      themes: string[];
    }[];
  };

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

      let accumulated = "";
      let streamBuffer = "";
      let metaParsed = false;

      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        streamBuffer += decoder.decode(value, { stream: true });

        // Metadata bloğunu stream'in kaç parçaya bölündüğünden
        // bağımsız olarak yakala.
        if (!metaParsed) {
          const metaStart = streamBuffer.indexOf("__ONEIROS_META__");
          const metaEnd = streamBuffer.indexOf("__ONEIROS_META_END__");

          if (
            metaStart !== -1 &&
            metaEnd !== -1 &&
            metaEnd > metaStart
          ) {
            const jsonStart =
              metaStart + "__ONEIROS_META__".length;

            const jsonText = streamBuffer
              .slice(jsonStart, metaEnd)
              .trim();

            try {
              const parsedMeta = JSON.parse(jsonText);

              if (
                parsedMeta &&
                Array.isArray(parsedMeta.themes) &&
                typeof parsedMeta.direction === "string" &&
                Array.isArray(parsedMeta.luckyNumbers)
              ) {
                setDreamMeta(parsedMeta);
                metaParsed = true;
              }
            } catch (error) {
              console.error("ONEIROS metadata parse error:", error);
            }

            // Metadata'yı stream'den tamamen çıkar.
            streamBuffer = streamBuffer.slice(
              metaEnd + "__ONEIROS_META_END__".length
            );
          }

          // Metadata henüz tamamlanmadıysa hiçbir şeyi
          // kullanıcıya render etme.
          if (!metaParsed) {
            continue;
          }
        }

        // Metadata çıkarıldıktan sonra yalnızca gerçek
        // rüya yorumunu result'a aktar.
        if (streamBuffer) {
          accumulated += streamBuffer;
          streamBuffer = "";

          // Metadata herhangi bir nedenle result'a sızarsa temizle.
          const cleanResult = accumulated
            .replace(
              /__ONEIROS_META__[\\s\\S]*?__ONEIROS_META_END__/g,
              ""
            )
            .trim();

          setResult(cleanResult);
        }
      }

      // Stream'in sonundaki olası UTF-8 karakterlerini tamamla.
      streamBuffer += decoder.decode();

      if (metaParsed && streamBuffer) {
        accumulated += streamBuffer;

        const cleanResult = accumulated
          .replace(
            /__ONEIROS_META__[\\s\\S]*?__ONEIROS_META_END__/g,
            ""
          )
          .trim();

        setResult(cleanResult);
      }

      setStatusIndex(analysisStatuses.length - 1);
    } catch (error) {
      console.error(error);

      setResult(
        error instanceof Error
          ? error.message
          : "Bir hata oluştu. Lütfen tekrar deneyin."
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
              className="text-sm tracking-wide text-[#5d5851] transition hover:text-[#24221f]"
            >
              Nasıl çalışır
            </button>

            <span className="text-[#c8c0b6]">·</span>

            <a
              href="/ruyalar"
              className="text-sm tracking-wide text-[#5d5851] transition hover:text-[#24221f]"
            >
              Rüya Kütüphanesi
            </a>
          </div>
        </header>

        {/* HOW IT WORKS */}
        {showHow && (
          <section className="mb-8 rounded-3xl border border-[#d8d0c5] bg-[#eee8df] px-6 py-7 sm:px-10">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#81786e]">
                  INUS
                </p>

                <h2 className="mb-4 text-2xl font-light sm:text-3xl">
                  Rüyanın izini sür.
                </h2>

                <p className="leading-7 text-[#625c54]">
                  Rüyanı kendi kelimelerinle anlat. INUS, rüyanın
                  sembollerini, duygularını ve anlatısındaki ilişkileri
                  psikolojik bir çerçevede inceler.
                </p>

                <p className="mt-4 leading-7 text-[#625c54]">
                  Buradaki yorumlar kesin doğrular ya da gelecek
                  öngörüleri değildir. Amaç, rüyanın sende uyandırdığı
                  anlamları keşfetmek ve farklı bakış açıları sunmaktır.
                </p>
              </div>

              <button
                onClick={() => setShowHow(false)}
                className="shrink-0 rounded-full border border-[#bdb4a8] px-5 py-2.5 text-sm transition hover:bg-[#e4ddd3]"
              >
                Ana Sayfa
              </button>
            </div>
          </section>
        )}

        {/* HOME */}
        {!showHow && (
          <>
            <section className="flex flex-col items-center pt-5 text-center sm:pt-8">

              {/* HERO */}
              <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#8a8177]">
                RÜYA YORUMU
              </p>

              <h1 className="text-4xl font-light tracking-[0.16em] sm:text-5xl">
                <span aria-hidden="true">INUS</span>
                <span className="sr-only">
                  INUS — Psikolojik Rüya Yorumu ve Rüya Analizi
                </span>
              </h1>

              <p className="mt-3 text-lg font-light tracking-wide text-[#686158] sm:text-xl">
                Rüyalarının anlattığı yolu bul.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#817970] sm:text-[15px]">
                Rüyanı kendi kelimelerinle anlat. INUS, psikolojik bir
                yaklaşımla rüyandaki sembolleri, duyguları ve ilişkileri
                rüyayı gören kişinin perspektifinden yorumlar.
              </p>

              {/* DREAM CARD */}
              <div className="mt-7 w-full max-w-5xl">
                <div className="rounded-[28px] border border-[#d9d1c7] bg-[#faf8f4] p-2 shadow-[0_20px_60px_rgba(70,60,50,0.06)]">

                  <textarea
                    value={dream}
                    onChange={(e) => setDream(e.target.value)}
                    disabled={loading}
                    placeholder="Rüyanı anlat..."
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
                        : "Rüyamı Yorumla"}
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
              {result && (
                <section className="mt-8 w-full max-w-5xl rounded-[28px] border border-[#d9d1c7] bg-[#faf8f4] p-7 text-left shadow-[0_20px_60px_rgba(70,60,50,0.05)] sm:p-10">

                  {/* RESULT HEADER */}
                  <div className="mb-7 flex items-center gap-3">
                    <div className="h-px w-8 bg-[#9b9186]" />

                    <span className="text-xs uppercase tracking-[0.25em] text-[#81786e]">
                      Rüyanın yorumu
                    </span>
                  </div>

                  {/* FIRST PARAGRAPH + CONCLUSION */}
                  {(() => {
                    const paragraphs = result
                      .split(/\n\s*\n/)
                      .map((p) => p.trim())
                      .filter(Boolean);

                    const firstParagraph = paragraphs[0] || "";
                    const conclusionParagraph =
                      paragraphs.length > 1 ? paragraphs[paragraphs.length - 1] : "";

                    return (
                      <>
                        {firstParagraph && (
                          <div className="text-[15px] leading-8 text-[#454039]">
                            {formatResult(firstParagraph)}
                          </div>
                        )}

                        {conclusionParagraph &&
                          conclusionParagraph !== firstParagraph && (
                            <div className="mt-5 text-[15px] leading-8 text-[#454039]">
                              {formatResult(conclusionParagraph)}
                            </div>
                          )}
                      </>
                    );
                  })()}

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

                  {/* REMAINING ANALYSIS */}
                  {(() => {
                    const paragraphs = result
                      .split(/\n\s*\n/)
                      .map((p) => p.trim())
                      .filter(Boolean);

                    const middleAnalysis = paragraphs
                      .slice(1, -1)
                      .filter(
                        (p) =>
                          p.trim().toLowerCase() !==
                          "rüyanın sende açığa çıkardıkları"
                      )
                      .join("\n\n");

                    if (!middleAnalysis) {
                      return null;
                    }

                    return (
                      <>
                        <div className="mt-8 flex items-center gap-3">
                          <div className="h-px w-8 bg-[#9b9186]" />

                          <span className="text-xs uppercase tracking-[0.25em] text-[#81786e]">
                            Rüyanın sende açığa çıkardıkları
                          </span>
                        </div>

                        <div className="mt-7 text-[15px] leading-8 text-[#454039]">
                          {formatResult(middleAnalysis)}
                        </div>
                      </>
                    );
                  })()}

                </section>
              )}

            </section>

            {/* FOOTER */}
            <footer className="pb-5 pt-8 text-center text-xs text-[#aaa198]">

              <a
                href="/ruyalar"
                className="transition hover:text-[#686158]"
              >
                Rüyalar
              </a>

              <span className="mx-2">·</span>

              <a
                href="/ruyalar/semboller"
                className="transition hover:text-[#686158]"
              >
                Rüya Sembolleri
              </a>

              <span className="mx-2">·</span>

              <a
                href="/hakkimizda"
                className="transition hover:text-[#686158]"
              >
                Hakkımızda
              </a>

              <span className="mx-2">·</span>

              <a
                href="/bize-ulasin"
                className="transition hover:text-[#686158]"
              >
                Bize Ulaşın
              </a>

              <span className="mx-2">·</span>

              <a
                href="/gizlilik"
                className="transition hover:text-[#686158]"
              >
                Gizlilik
              </a>

              <span className="mx-2">·</span>

              <a
                href="/kullanim-kosullari"
                className="transition hover:text-[#686158]"
              >
                Kullanım Koşulları
              </a>

            </footer>
          </>
        )}
      </div>
    </main>
  );
}