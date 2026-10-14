export type DreamMeta = {
  themes: string[];
  direction: string;
  luckyNumbers: { number: number; themes: string[] }[];
  insights?: { title: string; text: string }[];
};

export const META_START = "__ONEIROS_META__";
export const META_END = "__ONEIROS_META_END__";

function isTextList(value: unknown, min: number, max: number): value is string[] {
  return Array.isArray(value) && value.length >= min && value.length <= max &&
    value.every((item) => typeof item === "string" && item.trim().length > 0);
}

export function isDreamMeta(value: unknown): value is DreamMeta {
  if (!value || typeof value !== "object") return false;
  const meta = value as Record<string, unknown>;
  return isTextList(meta.themes, 1, 3) &&
    typeof meta.direction === "string" && meta.direction.trim().length > 0 &&
    Array.isArray(meta.luckyNumbers) && meta.luckyNumbers.length === 3 &&
    new Set(meta.luckyNumbers.map((item: { number?: unknown } | null) => item?.number)).size === 3 &&
    meta.luckyNumbers.every((item: unknown) => {
      if (!item || typeof item !== "object") return false;
      const number = item as Record<string, unknown>;
      return typeof number.number === "number" && Number.isInteger(number.number) &&
        number.number >= 1 && number.number <= 99 && isTextList(number.themes, 2, 3);
    });
}

// Parse the accumulated stream: delimiters and JSON may span arbitrary chunks.
// Invalid metadata must not hide the accompanying interpretation.
export function parseDreamResponse(raw: string): { text: string; meta: DreamMeta | null } {
  let text = "";
  let cursor = 0;
  let meta: DreamMeta | null = null;
  while (cursor < raw.length) {
    const start = raw.indexOf(META_START, cursor);
    if (start === -1) {
      text += raw.slice(cursor);
      break;
    }
    text += raw.slice(cursor, start);
    const end = raw.indexOf(META_END, start + META_START.length);
    // Never expose unfinished JSON or an unfinished metadata block.
    if (end === -1) break;
    try {
      const candidate: unknown = JSON.parse(raw.slice(start + META_START.length, end).trim());
      if (meta === null && isDreamMeta(candidate)) {
        // Optional scene notes must not invalidate otherwise usable metadata.
        const { insights, ...base } = candidate;
        meta = base;
        if (Array.isArray(insights) && insights.length > 0 && insights.length <= 3 &&
          insights.every((item) => item && typeof item.title === "string" && item.title.trim() &&
            typeof item.text === "string" && item.text.trim())) {
          meta.insights = insights;
        }
      }
    } catch {
      // Retain plain text even if this optional presentation block is malformed.
    }
    cursor = end + META_END.length;
  }
  text = text.replaceAll(META_END, "");
  // Hold back a delimiter prefix at the end of a chunk (or truncated response).
  for (let length = META_START.length - 1; length > 0; length--) {
    if (text.endsWith(META_START.slice(0, length))) {
      text = text.slice(0, -length);
      break;
    }
  }
  return { text: text.trim(), meta };
}

type AnalysisEvent = {
  type: string;
  delta?: string;
  response?: { status?: string };
};

export async function* checkedAnalysisDeltas(events: AsyncIterable<AnalysisEvent>) {
  let raw = "";
  let completed = false;
  for await (const event of events) {
    if (event.type === "response.failed" || event.type === "response.incomplete" || event.type === "error") {
      throw new Error("Analiz tamamlanamadı. Lütfen tekrar deneyin.");
    }
    if (event.type === "response.completed") {
      completed = event.response?.status === "completed";
    }
    if (event.type === "response.output_text.delta" && typeof event.delta === "string") {
      raw += event.delta;
      yield event.delta;
    }
  }
  if (!completed || !parseDreamResponse(raw).text) {
    throw new Error("Analiz yanıtı tamamlanamadı. Lütfen tekrar deneyin.");
  }
}
