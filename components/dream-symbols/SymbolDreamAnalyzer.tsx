"use client";

import { useState } from "react";

export function SymbolDreamAnalyzer({ symbolTitle }: { symbolTitle: string }) {
  const [dream, setDream] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

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

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        accumulated += decoder.decode(value, { stream: true });
        setResult(accumulated);
      }

      accumulated += decoder.decode();
      setResult(accumulated);
    } catch (error) {
      setResult(
        error instanceof Error
          ? error.message
          : "Analiz sırasında bir hata oluştu."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mb-14">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
          RÜYANIZI ANLATIN
        </p>

        <h2 className="mt-3 text-2xl font-light sm:text-3xl">
          {symbolTitle} rüyanızda ne anlatıyor olabilir?
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#686158]">
          {symbolTitle} sembolünü nasıl gördüğünüzü, rüyada neler olduğunu ve
          ne hissettiğinizi kendi kelimelerinizle anlatın. INUS, rüyanın
          tamamını ve kişisel bağlamını birlikte değerlendirir.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#d9d1c7] bg-[#faf8f4] p-2 shadow-[0_20px_60px_rgba(70,60,50,0.06)]">
        <textarea
          value={dream}
          onChange={(event) => setDream(event.target.value)}
          disabled={loading}
          placeholder={`${symbolTitle} rüyanızda nasıl ortaya çıktı? Rüyanızı anlatın...`}
          className="min-h-[190px] w-full resize-none rounded-[22px] bg-transparent px-5 py-5 text-base leading-7 text-[#302d29] outline-none placeholder:text-[#aaa198] disabled:opacity-70 sm:min-h-[215px] sm:px-7 sm:py-6"
        />

        <div className="flex items-center justify-between border-t border-[#e5ded5] px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            {dream.length > 0 && !loading && (
              <button
                type="button"
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
            type="button"
            onClick={analyzeDream}
            disabled={!dream.trim() || loading}
            className="rounded-full bg-[#292621] px-6 py-3 text-sm text-white transition hover:bg-[#403b35] disabled:cursor-not-allowed disabled:opacity-30"
          >
            {loading ? "Rüyan inceleniyor..." : "Rüyamı Yorumla"}
          </button>
        </div>
      </div>

      {loading && (
        <section className="mt-5 rounded-[22px] border border-[#ddd5cb] bg-[#eee9e1] px-6 py-5">
          <div className="flex items-center gap-3 text-sm text-[#686158]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#686158]" />
            Rüyan inceleniyor...
          </div>
        </section>
      )}

      {result && !loading && (
        <section className="mt-7 rounded-[28px] border border-[#d9d1c7] bg-[#faf8f4] px-7 py-8 sm:px-10 sm:py-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            RÜYANIN YORUMU
          </p>

          <div className="mt-5 whitespace-pre-wrap text-[15px] leading-8 text-[#454039]">
            {result}
          </div>
        </section>
      )}
    </section>
  );
}
