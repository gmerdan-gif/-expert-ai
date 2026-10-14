import OpenAI from "openai";
import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { neon } from "@neondatabase/serverless";
import crypto from "crypto";
import { systemPrompt } from "@/lib/dream-analysis/prompt";
import { checkedAnalysisDeltas } from "@/lib/dream-analysis/response";
import { parseDreamInput } from "@/lib/dream-analysis/input";
import { createDreamResponseFormat, streamDreamResponse } from "@/lib/dream-analysis/structured";
import { selectDreamNumbers } from "@/lib/dream-analysis/numbers";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const redis = Redis.fromEnv();

const sql = neon(process.env.DATABASE_URL!);

/*
 * 1. IP RATE LIMIT
 * Aynı IP'den maksimum 5 analiz / 10 dakika.
 */
const dreamRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  prefix: "inus:dream-analysis",
});

/*
 * 2. GLOBAL RATE LIMIT
 * Tüm kullanıcılar toplamında maksimum 100 analiz / 10 dakika.
 *
 * Bu aynı zamanda OpenAI maliyetini koruyan
 * ikinci önemli katmandır.
 */
const globalDreamRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "10 m"),
  analytics: true,
  prefix: "inus:dream-analysis-global",
});

/*
 * Aynı rüyanın 30 dakika içinde tekrar
 * OpenAI'ye gönderilmesini engeller.
 */
const DUPLICATE_DREAM_COOLDOWN = 30 * 60;

function normalizeDream(dream: string) {
  return dream
    .normalize("NFKC")
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ");
}

function getDreamHash(dream: string) {
  return crypto
    .createHash("sha256")
    .update(normalizeDream(dream), "utf8")
    .digest("hex");
}

/*
 * DB log helper
 *
 * DB yazma hatası analiz isteğini bozmaz.
 */
async function saveDreamLog(data: {
  dream?: string | null;
  analysis?: string | null;
  dreamHash?: string | null;
  language?: string | null;
  ipAddress?: string | null;
  email?: string | null;
  status: string;
  errorType?: string | null;
  errorMessage?: string | null;
}) {
  try {
    await sql`
      INSERT INTO dream_analyses (
        dream,
        analysis,
        dream_hash,
        language,
        ip_address,
        email,
        status,
        error_type,
        error_message
      )
      VALUES (
        ${data.dream ?? null},
        ${data.analysis ?? null},
        ${data.dreamHash ?? null},
        ${data.language ?? null},
        ${data.ipAddress ?? null},
        ${data.email ?? null},
        ${data.status},
        ${data.errorType ?? null},
        ${data.errorMessage ?? null}
      )
    `;
  } catch (error) {
    console.error("Database logging error:", error);
  }
}

export async function POST(request: Request) {
  let dream: string | undefined;
  let language = "tr";
  let realIp = "unknown";
  let dreamHash: string | undefined;

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "İstek okunamadı. Lütfen tekrar deneyin." }, { status: 400 });
    }
    const input = parseDreamInput(body);
    if (!input.ok) {
      return NextResponse.json({ error: input.error }, { status: 400 });
    }
    dream = input.dream;
    language = input.language;

    const forwardedFor = request.headers.get("x-forwarded-for");

    realIp =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    /*
     * 1. IP RATE LIMIT
     */
    const { success, limit, remaining, reset } =
      await dreamRateLimit.limit(realIp);

    if (!success) {
      await saveDreamLog({
        dream,
        language,
        ipAddress: realIp,
        status: "rate_limited",
        errorType: "ip_rate_limit",
        errorMessage: "IP rate limit exceeded.",
      });

      return NextResponse.json(
        {
          error:
            "Çok fazla analiz isteği gönderdiniz. Lütfen biraz sonra tekrar deneyin.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": reset.toString(),
          },
        }
      );
    }

    /*
     * 2. DUPLICATE DREAM PROTECTION
     */
    dreamHash = getDreamHash(dream);

    const duplicateKey = `inus:dream-duplicate:${dreamHash}`;

    const duplicate = await redis.get(duplicateKey);

    if (duplicate) {
      await saveDreamLog({
        dream,
        dreamHash,
        language,
        ipAddress: realIp,
        status: "duplicate",
        errorType: "duplicate_dream",
        errorMessage:
          "Dream was already analyzed within the cooldown period.",
      });

      return NextResponse.json(
        {
          error:
            "Bu rüya kısa süre önce analiz edildi. Aynı rüyayı tekrar analiz etmek için biraz bekleyin.",
        },
        {
          status: 429,
        }
      );
    }

    /*
     * 3. GLOBAL RATE LIMIT
     */
    const {
      success: globalSuccess,
      limit: globalLimit,
      remaining: globalRemaining,
      reset: globalReset,
    } = await globalDreamRateLimit.limit("global");

    if (!globalSuccess) {
      await saveDreamLog({
        dream,
        dreamHash,
        language,
        ipAddress: realIp,
        status: "rate_limited",
        errorType: "global_rate_limit",
        errorMessage: "Global rate limit exceeded.",
      });

      return NextResponse.json(
        {
          error:
            "INUS şu anda yoğun. Lütfen birkaç dakika sonra tekrar deneyin.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": globalLimit.toString(),
            "X-RateLimit-Remaining": globalRemaining.toString(),
            "X-RateLimit-Reset": globalReset.toString(),
          },
        }
      );
    }

    /*
     * Aynı rüyanın 30 dakika içinde tekrar
     * OpenAI'ye gönderilmesini engelle.
     */
    await redis.set(duplicateKey, "1", {
      ex: DUPLICATE_DREAM_COOLDOWN,
    });

    /*
     * 4. OPENAI
     */
    const selectedNumbers = selectDreamNumbers();
    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions: systemPrompt,
      input: JSON.stringify({ language, dream, selectedNumbers }),
      text: { format: createDreamResponseFormat(selectedNumbers) },
      stream: true,
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        let accumulated = "";

        try {
          for await (const delta of streamDreamResponse(checkedAnalysisDeltas(response), selectedNumbers)) {
            accumulated += delta;
            controller.enqueue(encoder.encode(delta));
          }

          /*
           * Kullanıcıya stream tamamen gönderildikten sonra
           * başarılı analizi DB'ye kaydet.
           *
           * DB problemi kullanıcıya gösterilmez.
           */
          await saveDreamLog({
            dream,
            analysis: accumulated,
            dreamHash,
            language,
            ipAddress: realIp,
            email: null,
            status: "success",
          });

          controller.close();
        } catch (error) {
          console.error("Streaming error:", error);

          /*
           * OpenAI streaming sırasında hata verirse
           * rüyayı tekrar deneyebilmek için duplicate kilidini kaldır.
           */
          await redis.del(duplicateKey);

          /*
           * Streaming sırasında OpenAI hatası olursa
           * hatayı DB'ye logla.
           */
          await saveDreamLog({
            dream,
            analysis: accumulated || null,
            dreamHash,
            language,
            ipAddress: realIp,
            email: null,
            status: "error",
            errorType: "streaming_error",
            errorMessage:
              error instanceof Error
                ? error.message
                : "Unknown streaming error.",
          });

          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Dream analysis error:", error);

    /*
     * OpenAI / server tarafında stream başlamadan hata oluşursa
     * duplicate kilidini kaldır.
     */
    if (dreamHash) {
      await redis.del(`inus:dream-duplicate:${dreamHash}`);
    }

    /*
     * OpenAI / server tarafında stream başlamadan hata oluşursa
     * DB'ye logla.
     */
    await saveDreamLog({
      dream: dream ?? null,
      language,
      ipAddress: realIp,
      dreamHash: dreamHash ?? null,
      email: null,
      status: "error",
      errorType: "analysis_error",
      errorMessage:
        error instanceof Error
          ? error.message
          : "Unknown dream analysis error.",
    });

    return NextResponse.json(
      {
        error: "Analiz başlatılamadı. Lütfen tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}
