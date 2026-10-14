const supportedLanguages = new Set(["tr", "en", "de", "fr", "es", "it", "pt", "ar", "ru"]);

export function parseDreamInput(body: unknown):
  | { ok: true; dream: string; language: string }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Lütfen rüyanı yaz." };
  const value = body as Record<string, unknown>;
  if (typeof value.dream !== "string" || !value.dream.trim()) {
    return { ok: false, error: "Lütfen rüyanı yaz." };
  }
  const dream = value.dream.trim();
  if (dream.length > 6000) {
    return { ok: false, error: "Rüya çok uzun. Lütfen biraz kısaltarak tekrar deneyin." };
  }
  return {
    ok: true,
    dream,
    language: typeof value.language === "string" && supportedLanguages.has(value.language)
      ? value.language : "tr",
  };
}
