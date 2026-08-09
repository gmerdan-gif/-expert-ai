"use client";

import { useState } from "react";

export default function Home() {
  const [dream, setDream] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showHow, setShowHow] = useState(false);

  async function analyzeDream() {
    if (!dream.trim() || loading) return;

    setLoading(true);
    setResult("");

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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Analiz başarısız.");
      }

      setResult(data.dream || "Bir sonuç alınamadı.");
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
        <header className="flex items-center justify-between py-7">
          <button
            onClick={() => {
              setShowHow(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-medium tracking-[0.28em]"
          >
            ONEIROS
          </button>

          <button
            onClick={() => setShowHow((value) => !value)}
            className="text-sm tracking-wide text-[#5d5851] transition hover:text-[#24221f]"
          >
            Nasıl çalışır
          </button>
        </header>

        {/* HOW IT WORKS */}
        {showHow && (
          <section className="mb-10 rounded-3xl border border-[#d8d0c5] bg-[#eee8df] px-6 py-8 sm:px-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#81786e]">
                  ONEIROS
                </p>

                <h2 className="mb-4 text-2xl font-light sm:text-3xl">
                  Rüyanın izini sür.
                </h2>

                <p className="leading-7 text-[#625c54]">
                  Rüyanı kendi kelimelerinle anlat. ONEIROS, rüyanın
                  sembollerini, duygularını ve anlatısındaki ilişkileri
                  Jungcu analitik psikoloji çerçevesinde inceler.
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
            <section className="flex flex-col items-center pt-16 text-center sm:pt-24">

              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
                RÜYA ANALİZİ
              </p>

              <h1 className="text-5xl font-light tracking-[0.18em] sm:text-7xl">
                ONEIROS
              </h1>

              <p className="mt-5 text-lg font-light tracking-wide text-[#686158] sm:text-xl">
                Rüyalarının anlattığı yolu bul.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#817970] sm:text-base">
                Rüyanda gördüklerin tesadüf değildi. Sembollerin ve
                duyguların işaret ettiği anlamın izini sür.
              </p>

              {/* DREAM + SIDE AD */}
              <div className="mt-12 flex w-full max-w-5xl flex-col gap-5 lg:flex-row lg:items-stretch">

                {/* DREAM CARD */}
                <div className="w-full lg:flex-1">
                  <div className="rounded-[28px] border border-[#d9d1c7] bg-[#faf8f4] p-2 shadow-[0_20px_60px_rgba(70,60,50,0.06)]">

                    <textarea
                      value={dream}
                      onChange={(e) => setDream(e.target.value)}
                      placeholder="Rüyanı anlat..."
                      className="min-h-[270px] w-full resize-none rounded-[22px] bg-transparent px-6 py-6 text-base leading-7 text-[#302d29] outline-none placeholder:text-[#aaa198] sm:min-h-[300px] sm:px-8 sm:py-8"
                    />

                    <div className="flex items-center justify-between border-t border-[#e5ded5] px-4 py-4 sm:px-6">
                      <span className="text-xs text-[#aaa198]">
                        {dream.length > 0
                          ? `${dream.length} karakter`
                          : " "}
                      </span>

                      <button
                        onClick={analyzeDream}
                        disabled={!dream.trim() || loading}
                        className="rounded-full bg-[#292621] px-6 py-3 text-sm text-white transition hover:bg-[#403b35] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        {loading
                          ? "Rüyan inceleniyor..."
                          : "Rüyamı Analiz Et"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* SIDE AD */}
                <aside className="flex min-h-[120px] w-full items-center justify-center rounded-[28px] border border-dashed border-[#d8d0c5] text-xs tracking-wide text-[#aaa198] lg:w-[280px]">
                  Reklam alanı
                </aside>
              </div>

              {/* RESULT */}
              {result && (
                <section className="mt-10 w-full max-w-5xl rounded-[28px] border border-[#d9d1c7] bg-[#faf8f4] p-7 text-left shadow-[0_20px_60px_rgba(70,60,50,0.05)] sm:p-10">

                  <div className="mb-7 flex items-center gap-3">
                    <div className="h-px w-8 bg-[#9b9186]" />

                    <span className="text-xs uppercase tracking-[0.25em] text-[#81786e]">
                      Rüyanın yorumu
                    </span>
                  </div>

                  <div className="whitespace-pre-wrap text-[15px] leading-8 text-[#454039]">
                    {result}
                  </div>
                </section>
              )}

              {/* BOTTOM AD */}
              <section className="mt-10 mb-8 flex h-20 w-full max-w-5xl items-center justify-center rounded-2xl border border-dashed border-[#d8d0c5] text-xs tracking-wide text-[#aaa198]">
                Reklam alanı
              </section>

            </section>

            {/* FOOTER */}
            <footer className="pb-7 text-center text-xs text-[#aaa198]">
              ONEIROS · Jungcu rüya analizi
            </footer>
          </>
        )}
      </div>
    </main>
  );
}