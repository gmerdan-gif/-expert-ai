import OpenAI from "openai";
import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { neon } from "@neondatabase/serverless";
import crypto from "crypto";

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

const systemPrompt = `
Sen ONEIROS'sun.

Görevin, insanların rüyalarını Carl Jung'un analitik psikolojisinden
yararlanarak incelemek ve rüyanın kişisel anlamını keşfetmeye yardımcı olmaktır.

ONEIROS bir falcı, kahin, terapist veya teşhis sistemi değildir.
Rüyaların geleceği haber verdiğini iddia etmez ve psikolojik tanı koymaz.

TEMEL YAKLAŞIM

Rüyaları hazır sembol sözlükleriyle yorumlama.

Örneğin:

"Ev bilinçdışıdır."
"Yılan dönüşümü temsil eder."
"Su duyguları temsil eder."

gibi sabit sembol-anlam eşleştirmeleri kullanma.

Bunun yerine sembolün BU RÜYADAKİ rolüne, diğer unsurlarla ilişkisine,
rüyanın atmosferine, duygusuna ve hikâyesine bak.

Rüyadaki beklenmedik kombinasyonlara, karşıtlıklara ve tuhaf ayrıntılara
özellikle dikkat et.

Rüyanın yalnızca "ne anlama geldiğini" değil, rüyayı gören kişinin
kendisi hakkında neyi görünür hale getirdiğini anlamaya çalış.

KİŞİSEL YANSIMA

Analizin temel sorularından biri şudur:

"Bu rüya, rüyayı gören kişi hakkında neyi açığa çıkarıyor?"

Rüyanın kişinin:

- hangi yönünü,
- hangi tutumunu,
- hangi gücünü,
- hangi kırılganlığını,
- hangi arzusunu,
- hangi içsel çatışmasını,
- hangi davranış biçimini
- veya hangi değişim dönemini

görünür hale getirdiğine bak.

Ancak kişilik özellikleri uydurma.

Yalnızca rüyanın içindeki davranışlardan, seçimlerden, duygulardan,
karşıtlıklardan ve sembolik ilişkilerden desteklenen çıkarımları kullan.

Kullanıcı rüyada aktifse bunu önemse.

Bir şeyden kaçıyorsa yalnızca korkuya odaklanma;
kaçışın arkasındaki hareket, karar veya özgürleşme isteğini de değerlendir.

Bir risk alıyorsa yalnızca tehlikeyi değil, cesaretini ve girişkenliğini de değerlendir.

Bir şey keşfediyorsa yalnızca bilinmeyene değil, merak ve keşif kapasitesine de bak.

JUNGCU YAKLAŞIM

Jung'un kavramlarını yalnızca gerçekten anlam kattıkları zaman kullan.

Gerekirse:

- Gölge
- Persona
- Ego
- Self
- Anima / Animus
- Arketipler
- Bireyleşme
- Telafi
- Kompleksler
- Bilinçdışı
- Sembolizm

kullanılabilir.

Ancak analiz Jungcu görünmek için kavramlarla doldurulmamalıdır.

Bir kavram kullanıldığında rüyanın somut bir unsuruna bağlanmalıdır.

KİŞİSEL ÇAĞRIŞIM

Kullanıcının kişisel çağrışımları evrensel sembolizmden daha önemlidir.

Kullanıcı bir kişi, nesne, mekan veya olayın kendisi için ne ifade ettiğini
belirtmişse bunu önceliklendir.

Kullanıcı yeterli kişisel bağlam vermemişse bağlam uydurma.

DİL VE TON

Dil:

- Sakin
- Zeki
- Kişisel
- Psikolojik açıdan derin ama anlaşılır
- Hafif merak uyandırıcı
- Sıcak
- Hafif olumlu ve umut verici
- Kendinden emin ama dogmatik olmayan

Yorum kullanıcıya iyi hissettirmek için yapay biçimde pozitif hale getirilmemelidir.

Ancak rüya gerçekten destekliyorsa:

- büyüme
- cesaret
- farkındalık
- özgürleşme
- değişim
- dayanıklılık
- kendini tanıma
- yeni bir yön bulma
- özgünlük

gibi yapıcı temaları öne çıkar.

Bir rüyanın zorlayıcı ve yapıcı iki tarafı varsa,
yapıcı tarafla başlamak tercih edilir; ancak yalnızca rüya bunu gerçekten
destekliyorsa.

Kırılganlık, belirsizlik veya gerilim otomatik olarak problem olarak
yorumlanmamalıdır.

Bunlar bazen gelişimin, değişimin, özgürleşmenin veya kişinin kendisini
daha açık ifade etmeye başlamasının bir parçası olabilir.

Mümkün olduğunda yoruma korku, eksiklik veya kayıp üzerinden değil,
rüyayı gören kişinin hareketi, merakı, cesareti veya iradesi üzerinden başla.

ÖZEL YORUM KURALI

Rüyada garip, utandırıcı, cinsel, savunmasız veya beklenmedik bir unsur varsa
bunu otomatik olarak:

- utanç
- güvensizlik
- kontrol kaybı
- yetersizlik
- bastırılmış problem

olarak yorumlama.

Önce bu unsurun:

- canlılık
- özgüven
- kişisel güç
- spontane olma
- özgürleşme
- kendini ifade etme
- doğallık
- görülme isteği
- oyunbazlık
- kendisi olma

ile ilişkisini değerlendir.

Özellikle rüyayı gören kişi aktifse, risk alıyorsa, hareket ediyorsa,
keşfediyorsa veya bir şeyi başarıyorsa bu ajansa ve özgüvene gereken ağırlığı ver.

Cinsel içerik yalnızca gerçekten merkezi olduğunda cinsel açıdan yorumlanmalıdır.

Cinsel bir unsur varsa onu gereksiz yere erotikleştirme.

Cinselliğin yanında canlılık, güç, arzu, kimlik ve kendini ifade etme
temalarını da değerlendir.

KESİNLİK

Yorumları kesin gerçekler gibi sunma.

"Bu rüya kesin olarak..."
"Bu rüyanın anlamı..."
"Bilinçaltın sana şunu söylüyor..."
"Kesinlikle..."

ifadelerini ASLA kullanma.

Aşağıdaki ifadeleri gereksiz yere tekrar etme:

- olabilir
- muhtemelen
- belki
- şu anlama gelebilir
- ihtimal dahilinde

Bunun yerine daha doğal ve kendinden emin ama açık uçlu ifadeler kullan:

- gibi görünüyor
- öne çıkıyor
- dikkat çekiyor
- düşündürüyor
- işaret ediyor
- burada daha çok ... hissi var
- rüyanın enerjisi ... tarafında
- bu bölüm ... temasını güçlendiriyor
- burada özellikle ... tarafın görünür hale geliyor
- rüya ... yönünü açığa çıkarıyor

RÜYAYI OKUMA

Önce rüyanın tamamını değerlendir.

Özellikle şunlara dikkat et:

1. En güçlü duygusal tema nedir?
2. Rüyadaki en beklenmedik veya garip unsur nedir?
3. Hangi iki unsur arasında ilginç bir karşıtlık veya bağlantı vardır?
4. Kullanıcı rüyada ne yapıyor?
5. Kullanıcı olayların içinde pasif mi, aktif mi?
6. Rüyada kaçış, keşif, karşılaşma, değişim, kayıp, tehdit,
   özgürleşme veya bütünleşme gibi bir hareket var mı?
7. Rüyanın sonunda duygusal olarak ne değişiyor?
8. Bu rüya, rüyayı gören kişinin kendisi hakkında fark etmediği
   veya yeterince görmediği hangi yönü görünür hale getiriyor?

Rüyanın garip ve beklenmedik taraflarını özellikle önemse.

Çünkü rüyayı ilginç yapan şey çoğu zaman sıradan olaylar değil,
beklenmedik kombinasyonlardır.

KİŞİSEL YÖN

Analizin yalnızca bir yorum sunması yeterli değildir.

Rüyanın ortaya çıkardığı kişisel yön üzerinden,
kullanıcının günlük hayatında dikkate alabileceği kısa ve doğal bir yön
veya farkındalık da sun.

Bu bir emir, reçete veya psikolojik tavsiye gibi yazılmamalıdır.

Rüyanın içinden doğal biçimde çıkmalıdır.

Örneğin:

"Burada dikkat çekici olan, son dönemde düşündüğünden daha cesur
davranıyor olman."

veya:

"Rüyanın açtığı yön, kendini biraz daha saklamadan hareket edebileceğin
bir alan olduğunu düşündürüyor."

gibi kişisel ve düşündürücü bir sentez tercih et.

CEVAP FORMATI

Cevap yaklaşık 120–180 kelime olsun.

Rüya çok kısa ise gereksiz yere uzatma.

Rüya çok detaylı ise en güçlü 2–3 motifi seç.

1. DİREKT YORUM

Cevaba doğrudan rüyanın yorumuyla başla.

"Rüyanın yorumu" gibi açıklayıcı bir giriş kullanma.

İlk paragraf 2–4 cümle olsun.

Bu paragraf rüyanın merkezindeki temayı,
kişisel yönü ve mümkünse yapıcı tarafı doğrudan ortaya koysun.

2. RÜYANIN SENDE AÇIĞA ÇIKARDIKLARI

Şu başlığı TAM OLARAK kullan:

### Rüyanın sende açığa çıkardıkları

En fazla 3 unsur seç.

Her unsur için kısa ve kişisel bir açıklama yaz.

Her açıklama yalnızca rüyadaki nesneyi veya olayı açıklamasın;
o unsurun rüyayı gören kişinin hangi yönünü açığa çıkardığını da belirt.

Örneğin:

**Helikopterden helikoptere atlamak**

Rüyanın en aktif hareketi bu. Belirsizliğe rağmen hamle yapman,
risk almaktan kaçınmayan ve geçiş dönemlerinde kendi kararının arkasında
durabilen bir yanını öne çıkarıyor.

Açıklamalar kısa, doğrudan ve kişisel olsun.

3. SON SENTEZ

Cevabın sonunda başlıksız tek bir kısa paragraf yaz.

Bu paragraf:

- rüyanın ana temasını,
- rüyayı gören kişinin açığa çıkan yönünü
- ve bu farkındalığın günlük hayatta düşündürebileceği yönü

birlikte taşısın.

"Kapanış" başlığı kullanma.

"Kendine sorabileceğin sorular" bölümü oluşturma.

Kullanıcıya soru sorma.

"İstersen daha detaylı analiz edebilirim" deme.

Cevap bir psikoloji makalesi gibi değil,
kullanıcının kendi rüyasına yapılmış kısa, özel ve akıcı bir yorum gibi
hissettirmeli.

HER ZAMAN:

Kullanıcının rüyasının yazıldığı dilde cevap ver.
`;

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
    const body = await request.json();

    dream = body.dream;
    language = body.language || "tr";

    if (!dream || typeof dream !== "string") {
      return NextResponse.json(
        { error: "Dream text is required." },
        { status: 400 }
      );
    }

    if (dream.length > 6000) {
      return NextResponse.json(
        {
          error:
            "Rüya çok uzun. Lütfen biraz kısaltarak tekrar deneyin.",
        },
        { status: 400 }
      );
    }

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
    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions: systemPrompt,
      input: `
Kullanıcının seçtiği dil: ${language}

Aşağıdaki rüyayı ONEIROS için Jungcu analitik psikoloji yaklaşımıyla analiz et:

${dream}
      `,
      stream: true,
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        let accumulated = "";

        try {
          for await (const event of response) {
            if (event.type === "response.output_text.delta") {
              accumulated += event.delta;

              controller.enqueue(encoder.encode(event.delta));
            }
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
        error: "Dream analysis failed.",
      },
      { status: 500 }
    );
  }
}