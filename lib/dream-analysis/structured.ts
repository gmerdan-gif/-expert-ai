import { isDreamMeta, META_START, META_END } from "./response";

const text = { type: "string", minLength: 1 };
const list = (items: object, minItems: number, maxItems: number) => ({ type: "array", items, minItems, maxItems });
const object = (properties: Record<string, object>) => ({
  type: "object", properties, required: Object.keys(properties), additionalProperties: false,
});

// Decode only the first narrative string, holding incomplete JSON escapes back.
export function partialNarrative(raw: string): string {
  const start = /^\s*\{\s*"kind"\s*:\s*"(?:dream|non_dream)"\s*,\s*"narrative"\s*:\s*"/.exec(raw);
  if (!start) return "";
  let text = "";
  for (let i = start[0].length; i < raw.length; i++) {
    const ch = raw[i];
    if (ch === '"') break;
    if (ch !== "\\") { text += ch; continue; }
    if (i + 1 >= raw.length) break;
    const size = raw[i + 1] === "u" ? 6 : 2;
    if (i + size > raw.length) break;
    try { text += JSON.parse('"' + raw.slice(i, i + size) + '"'); }
    catch { break; }
    i += size - 1;
  }
  // Never encode half a surrogate pair as a replacement character.
  if (/[\uD800-\uDBFF]$/.test(text)) text = text.slice(0, -1);
  return text;
}

export async function* streamDreamResponse(deltas: AsyncIterable<string>, selectedNumbers?: readonly number[]) {
  let raw = "";
  let sent = "";
  for await (const delta of deltas) {
    raw += delta;
    const narrative = partialNarrative(raw);
    if (!narrative.startsWith(sent)) throw new Error("Yorum akışı bozuldu.");
    if (narrative.length > sent.length) yield narrative.slice(sent.length);
    sent = narrative;
  }
  const serialized = serializeDreamResponse(raw, selectedNumbers);
  const complete = JSON.parse(raw);
  if (!complete.narrative.startsWith(sent)) throw new Error("Yorum akışı bozuldu.");
  if (complete.narrative.length > sent.length) yield complete.narrative.slice(sent.length);
  if (complete.kind === "dream") {
    yield serialized.slice(0, serialized.indexOf(META_END) + META_END.length);
  }
}

export const dreamResponseFormat = {
  type: "json_schema" as const,
  name: "dream_analysis",
  strict: true,
  schema: object({
    kind: { type: "string", enum: ["dream", "non_dream"] },
    narrative: text,
    themes: list(text, 1, 3),
    direction: text,
    luckyNumbers: list(object({ number: { type: "integer", minimum: 1, maximum: 99 }, themes: list(text, 2, 3) }), 3, 3),
    insights: list(object({ title: text, text }), 1, 3),
  }),
};

function validateSelection(numbers: readonly number[]) {
  if (numbers.length !== 3 || new Set(numbers).size !== 3 ||
    numbers.some(number => !Number.isInteger(number) || number < 1 || number > 99)) {
    throw new Error("Geçersiz sayı seçimi.");
  }
}

export function createDreamResponseFormat(selectedNumbers: readonly number[]) {
  validateSelection(selectedNumbers);
  const items = object({
    number: { type: "integer", enum: [...selectedNumbers] },
    themes: list(text, 2, 3),
  });
  return {
    ...dreamResponseFormat,
    schema: {
      ...dreamResponseFormat.schema,
      properties: {
        ...dreamResponseFormat.schema.properties,
        luckyNumbers: list(items, 3, 3),
      },
    },
  };
}

// Adapt a validated model response to the existing browser protocol in one call.
export function serializeDreamResponse(raw: string, selectedNumbers?: readonly number[]): string {
  const value = JSON.parse(raw);
  if (!value || typeof value.narrative !== "string" || !value.narrative.trim()) {
    throw new Error("Yorum metni eksik.");
  }
  const narrative: string = value.narrative;
  if (value.kind === "non_dream") return narrative;
  if (value.kind !== "dream" || !isDreamMeta(value) ||
    !Array.isArray(value.insights) || value.insights.length < 1 || value.insights.length > 3 ||
    !value.insights.every((item: { title?: unknown; text?: unknown } | null) => item &&
      typeof item.title === "string" && item.title.trim() && typeof item.text === "string" && item.text.trim())) {
    throw new Error("Yorumun bölümleri tamamlanamadı.");
  }
  if (selectedNumbers) {
    validateSelection(selectedNumbers);
    if (!value.luckyNumbers.every((item, index) => item.number === selectedNumbers[index])) {
      // Never attach an explanation to a replacement number after generation.
      throw new Error("Yorumun sayıları doğrulanamadı.");
    }
  }
  const { themes, direction, luckyNumbers, insights } = value;
  return `${META_START}${JSON.stringify({ themes, direction, luckyNumbers, insights })}${META_END}\n${narrative}`;
}
