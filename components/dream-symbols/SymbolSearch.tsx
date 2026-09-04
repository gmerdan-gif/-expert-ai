"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function normalizeSearchValue(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

type SymbolSearchItem = {
  slug: string;
  title: string;
  shortDescription: string;
};

type Props = {
  symbols: SymbolSearchItem[];
};

export default function SymbolSearch({ symbols }: Props) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = normalizeSearchValue(query.trim());

    if (!normalized) {
      return [];
    }

    return symbols
      .map((symbol) => {
        const normalizedTitle = normalizeSearchValue(symbol.title);
        const normalizedSlug = normalizeSearchValue(symbol.slug);

        let rank = Number.POSITIVE_INFINITY;

        if (
          normalizedTitle === normalized ||
          normalizedSlug === normalized
        ) {
          rank = 0;
        } else if (
          normalizedTitle.startsWith(normalized) ||
          normalizedSlug.startsWith(normalized)
        ) {
          rank = 1;
        } else if (
          normalizedTitle.includes(normalized) ||
          normalizedSlug.includes(normalized)
        ) {
          rank = 2;
        }

        return {
          symbol,
          rank,
        };
      })
      .filter(({ rank }) => Number.isFinite(rank))
      .sort((a, b) => {
        if (a.rank !== b.rank) {
          return a.rank - b.rank;
        }

        return a.symbol.title.localeCompare(
          b.symbol.title,
          "tr-TR",
        );
      })
      .slice(0, 8)
      .map(({ symbol }) => symbol);
  }, [query, symbols]);

  return (
    <section aria-label="Rüya sembolü arama">
      <label
        htmlFor="symbol-search"
        className="sr-only"
      >
        Rüya sembolü ara
      </label>

      <div className="relative">
        <input
          id="symbol-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rüyanda gördüğün bir şeyi ara..."
          autoComplete="off"
          className="w-full border-b border-black/25 bg-transparent py-5 pr-12 text-xl tracking-[-0.02em] text-[#24221f] outline-none placeholder:text-[#9a9288] focus:border-black md:text-2xl"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-xl text-[#777067]"
        >
          ↗
        </span>
      </div>

      {query.trim() && (
        <div className="border-b border-black/10">
          {results.length > 0 ? (
            <div className="divide-y divide-black/10">
              {results.map((symbol) => (
                <Link
                  key={symbol.slug}
                  href={`/ruyalar/semboller/${symbol.slug}`}
                  className="grid gap-2 py-5 transition-opacity hover:opacity-60 md:grid-cols-[180px_1fr]"
                >
                  <span className="font-medium">
                    {symbol.title}
                  </span>

                  <span className="line-clamp-2 text-sm leading-6 text-[#777067]">
                    {symbol.shortDescription}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-7 text-sm leading-6 text-[#777067]">
              Bu ifadeyle eşleşen yayınlanmış bir sembol bulunamadı.
            </div>
          )}
        </div>
      )}
    </section>
  );
}
