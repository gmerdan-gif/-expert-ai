import type { DreamSymbol } from "./dream-symbols";

const STOP_WORDS = new Set([
  "rüyada", "ruyada", "görmek", "gormek", "görme", "gorme", "görür", "gorur",
  "gibi", "ve", "veya", "ile", "bir", "birçok", "bircok", "olan", "olarak",
  "için", "icin", "bağlı", "bagli", "kişinin", "kisinin", "kişisel", "kisisel",
  "ilişki", "iliski", "ilişkili", "iliskili", "teması", "temasi",
  "temaları", "temalari", "çağrışım", "cagrisim", "çağrışımları",
  "cagrisimlari", "anlam", "anlamı", "anlami", "farklı", "farkli",
  "farklıdır", "farklidir", "bağlam", "baglam", "bağlama", "baglama",
  "durum", "durumu", "rüyanın", "ruyanin", "rüyadaki", "ruyadaki",
  "yaklaşım", "yaklasim", "yaklaşımlar", "yaklasimlar",
  "sembol", "sembolik", "yorum", "yorumlar", "yorumlanabilir",
  "genel", "kişiden", "kisiden", "kişiye", "kisiye",
  "gelenek", "geleneksel", "araştırma", "arastirma",
  "psikoloji", "psikolojik", "modern", "yaşam", "yasam", "hayat",
]);

const BOILERPLATE_WORDS = new Set([
  "jung", "jungcu", "jungc",
  "blagrove", "schredl", "domhoff",
  "islam", "hristiyan", "yahudi", "talmud",
  "budizm", "budist", "dini", "gelenekler",
  "spirituel", "kulturel", "metinsel",
  "felsefesinde", "sembolizminde",
  "literatur", "literaturunde",
  "kaynak", "kaynaklar", "kaynaklarda",
  "arastirma", "arastirmalar", "raporlanan",
  "cerceve", "cerceveler", "cercevelerde",
  "yaklasim", "yaklasimda", "yaklasimlar",
  "yaklasımda", "yaklaşımlarda",
  "genellikle", "degisir", "degisebilir",
  "farklilik", "farklilasir",
  "olabilir", "olmak", "olmasi", "olarak",
  "edebilir", "kullanilir", "kullanir",
  "kullanmak", "tasir", "tasiyabilir",
  "sunabilir", "vurgular", "vurgularken",
  "iliskilendirilebilir", "iliskilendirilir",
  "degerlendirilebilir",
  "okunabilir", "gorulebilir", "gosterir",
  "gosterebilir", "gosterebilecegin",
  "dogrulanmis", "ampirik", "bilimsel",
  "evrensel", "kesin", "kesinlik",
  "hukum", "iddia", "edilmemeli",
  "sinirli", "sinirlandirilmali",
  "bagimsiz", "karsilik", "yoktur",
  "ruya", "ruyada", "rüya",
  "uyanık", "uyanik", "uyaniklik",
  "bilinc", "bilincdisi", "bilincdısı", "psike",
  "metafor", "ifade", "tema", "temalar",
  "icerik", "icerigi", "surec", "surecler",
  "karsilasma", "karsilasmak",
  "karsilasir", "karsilasabilir",
  "değerlendirilebilir",
  "farkli", "farkl", "degil",
  "aynı", "ayni", "ancak",
  "birlikte", "sekillerde",
  "anlamlarla", "cagrısımlarla",
  "baglantili", "baglantıl",
  "yasamındak", "butunundek",

  // Veri setindeki akademik / boilerplate kalıntıları
  "2010", "2019", "2003",
  "icerig", "icerigi", "icerigine",
  "sureklilik", "sureclerle",
  "bilincdis", "bilincdısı", "bilincdasi",
  "kisin", "yasamdak", "ruyas",
  "anlama", "hang", "biri", "belir",
  "oldug", "ifades", "olabilecegin",
  "arastırmalarında", "cagrısımlar",
  "temaların", "cercevelere", "dayanır",
  "populer", "gecerl", "sezgi",
  "sezgisel", "dogru", "degil",
]);

const GENERIC_WORDS = new Set([
  "kontrol", "belirsizlik", "farkındalık", "farkindalik",
  "kaygı", "kaygi", "korku", "duygu", "duygusal",
  "değişim", "degisim", "gelişim", "gelisim",
  "gerilim", "güç", "guc", "kişilik", "kisilik",
  "deneyim", "deneyimler", "yaşamda", "yasamda",
  "hayatta", "gerçek", "gercek", "yeni",
  "başlangıç", "baslangic", "süreç", "surec",
  "hissetmek", "hissi", "hissetme", "hissedilen",
  "karşılaşmak", "karsilasmak",
  "yaklaşmak", "yaklasmak",
  "ilgili", "olmak", "olması", "olmasi",
  "bulmak", "kullanmak", "kurmak",
  "etkileşim", "etkilesim",
]);

type WeightedProfile = {
  title: Set<string>;
  variations: Set<string>;
  positive: Set<string>;
  challenging: Set<string>;
  context: Set<string>;
  jungian: Set<string>;
  psychology: Set<string>;
};

type ProfileField = keyof WeightedProfile;

const FIELD_WEIGHTS: Record<ProfileField, number> = {
  title: 8,
  variations: 4,
  positive: 1.5,
  challenging: 1.5,
  context: 0,
  jungian: 0,
  psychology: 0,
};

function normalizeText(text: string): string {
  return text
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9çğıöşü\s]/gi, " ");
}

function normalizeWord(word: string): string {
  let value = word.trim();

  if (value.length < 4) return "";

  const suffixes = [
    "larindan", "lerinden",
    "lardan", "lerden",
    "ların", "lerin", "ları", "leri",
    "sıyla", "siyle", "uyla", "iyle",
    "unun", "inin", "ının", "ünün",
    "undan", "inden", "ından", "ünden",
    "sunu", "sini", "sına", "sine", "sünü",
    "dır", "dir", "dur", "dür",
    "tır", "tir", "tur", "tür",
    "dan", "den", "tan", "ten",
    "yla", "yle",
    "yı", "yi", "yu", "yü",
    "ın", "in", "un", "ün",
    "ı", "i", "u", "ü",
  ];

  for (const suffix of suffixes) {
    if (
      value.length - suffix.length >= 4 &&
      value.endsWith(suffix)
    ) {
      value = value.slice(0, -suffix.length);
      break;
    }
  }

  return value;
}

function tokenize(text: string): Set<string> {
  return new Set(
    normalizeText(text)
      .split(/\s+/)
      .map(normalizeWord)
      .filter(
        (word) =>
          word.length >= 4 &&
          !STOP_WORDS.has(word) &&
          !BOILERPLATE_WORDS.has(word) &&
          !GENERIC_WORDS.has(word),
      ),
  );
}

export function buildProfile(
  symbol: DreamSymbol,
): WeightedProfile {
  return {
    title: tokenize(symbol.title),

    variations: tokenize(
      symbol.commonVariations.join(" "),
    ),

    positive: tokenize(
      symbol.positiveAssociations.join(" "),
    ),

    challenging: tokenize(
      symbol.challengingAssociations.join(" "),
    ),

    context: tokenize(
      symbol.contextDependentAssociations.join(" "),
    ),

    jungian: tokenize(symbol.jungian),

    psychology: tokenize(symbol.psychology),
  };
}

function intersection(
  a: Set<string>,
  b: Set<string>,
): string[] {
  const result: string[] = [];

  for (const token of a) {
    if (b.has(token)) {
      result.push(token);
    }
  }

  return result;
}

function buildDocumentFrequency(
  profiles: Map<string, WeightedProfile>,
): Map<string, number> {
  const frequency = new Map<string, number>();

  for (const profile of profiles.values()) {
    const seen = new Set<string>();

    for (const field of Object.keys(FIELD_WEIGHTS) as ProfileField[]) {
      if (FIELD_WEIGHTS[field] <= 0) continue;

      for (const token of profile[field]) {
        seen.add(token);
      }
    }

    for (const token of seen) {
      frequency.set(
        token,
        (frequency.get(token) ?? 0) + 1,
      );
    }
  }

  return frequency;
}

function idf(
  token: string,
  documentCount: number,
  documentFrequency: Map<string, number>,
): number {
  const df = documentFrequency.get(token) ?? 0;

  if (df === 0) return 1;

  /*
   * Kontrollü IDF:
   *
   * Nadir kavramlar değerli,
   * veri setinin büyük bölümünde görülen kavramlar ise
   * ilişki skorunu şişirmemeli.
   */
  const raw = Math.log(
    (documentCount + 1) / (df + 1),
  ) + 1;

  /*
   * Tek bir nadir kelimenin skoru patlatmasını önlüyoruz.
   */
  return Math.min(raw, 3);
}

export function calculateSimilarity(
  a: WeightedProfile,
  b: WeightedProfile,
  documentCount = 1,
  documentFrequency = new Map<string, number>(),
): {
  score: number;
  matches: string[];
} {
  const matches = new Set<string>();

  const titleMatches = intersection(
    a.title,
    b.title,
  );

  /*
   * Otomatik ilişkinin tek güvenilir yapısal sinyali
   * şu aşamada ortak başlık kelimesidir.
   *
   * Common variations kullanılmıyor çünkü veri setindeki
   * variation cümleleri büyük ölçüde aynı şablonlardan
   * oluşturulmuş durumda:
   *
   * "X ile karşılaşmak"
   * "X görmekten korkmak"
   * "X ile bir yere gitmek"
   *
   * Bu nedenle karşılaşmak / korkmak / gitmek gibi
   * kelimeler yanlış pozitifler üretiyor.
   */
  if (titleMatches.length === 0) {
    return {
      score: 0,
      matches: [],
    };
  }

  /*
   * Aynı title kelimesi doğrudan güçlü ilişki sinyalidir.
   *
   * Örnek:
   *   Araba ↔ Oyuncak Araba
   *   Bebek ↔ Oyuncak Bebek
   *   Bebek ↔ Bebek Arabası
   */
  let score = 0;

  for (const token of titleMatches) {
    matches.add(token);

    score += 10;

    /*
     * Nadir başlık kelimelerine küçük bir ek ağırlık.
     */
    score +=
      2 *
      idf(
        token,
        documentCount,
        documentFrequency,
      );
  }

  return {
    score,
    matches: [...matches],
  };
}

export function buildRelatedSymbolMap(
  symbols: DreamSymbol[],
  limit = 4,
): Map<string, string[]> {
  const profiles = new Map<string, WeightedProfile>();

  for (const symbol of symbols) {
    profiles.set(
      symbol.slug,
      buildProfile(symbol),
    );
  }

  const documentFrequency =
    buildDocumentFrequency(profiles);

  const result = new Map<string, string[]>();

  for (const symbol of symbols) {
    const profile =
      profiles.get(symbol.slug)!;

    /*
     * MANUAL RELATIONS
     *
     * Eğer sembolün relatedSlugs alanı varsa,
     * otomatik algoritma bunun üzerine yazmaz.
     */
    const manual = symbol.relatedSlugs ?? [];

    if (manual.length > 0) {
      const validManual = manual
        .filter(
          (slug) =>
            slug !== symbol.slug &&
            profiles.has(slug),
        )
        .slice(0, limit);

      result.set(
        symbol.slug,
        validManual,
      );

      continue;
    }

    const candidates = symbols
      .filter(
        (candidate) =>
          candidate.slug !== symbol.slug,
      )
      .map((candidate) => {
        const candidateProfile =
          profiles.get(candidate.slug)!;

        const similarity =
          calculateSimilarity(
            profile,
            candidateProfile,
            symbols.length,
            documentFrequency,
          );

        return {
          slug: candidate.slug,
          score: similarity.score,
          matches: similarity.matches,
        };
      })
      .filter(
        (candidate) =>
          candidate.score > 0 &&
          candidate.matches.length > 0,
      )
      .sort(
        (a, b) => b.score - a.score,
      )
      .slice(0, limit);

    result.set(
      symbol.slug,
      candidates.map(
        (candidate) => candidate.slug,
      ),
    );
  }

  return result;
}

export function debugRelatedSymbols(
  symbols: DreamSymbol[],
  limit = 15,
) {
  const profiles = new Map<string, WeightedProfile>();

  for (const symbol of symbols) {
    profiles.set(symbol.slug, buildProfile(symbol));
  }

  const documentFrequency = buildDocumentFrequency(profiles);
  const totalDocuments = profiles.size;

  const result = new Map<string, string[]>();

  for (const symbol of symbols) {
    const profile = profiles.get(symbol.slug);

    if (!profile) continue;

    const candidates = symbols
      .filter(
        (candidate) =>
          candidate.slug !== symbol.slug &&
          !(symbol.relatedSlugs ?? []).includes(candidate.slug),
      )
      .map((candidate) => {
        const candidateProfile = profiles.get(candidate.slug);

        if (!candidateProfile) {
          return {
            slug: candidate.slug,
            title: candidate.title,
            score: 0,
            matches: [],
          };
        }

        const similarity = calculateSimilarity(
          profile,
          candidateProfile,
          totalDocuments,
          documentFrequency,
        );

        return {
          slug: candidate.slug,
          title: candidate.title,
          score: similarity.score,
          matches: similarity.matches,
        };
      })
      .filter(
        (candidate) =>
          candidate.score > 0 &&
          candidate.matches.length > 0,
      )
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    result.set(
      symbol.slug,
      candidates.map(
        (candidate) => candidate.slug,
      ),
    );
  }

  return result;
}
