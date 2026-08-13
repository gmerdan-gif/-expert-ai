"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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
    const normalized = query
      .trim()
      .toLocaleLowerCase("tr-TR");

    if (!normalized) return [];

    return symbols
      .filter((symbol) => {
        const title = symbol.title.toLocaleLowerCase("tr-TR");
        const description = symbol.shortDescription.toLocaleLowerCase("tr-TR");

        return (
          title.includes(normalized) ||
          description.includes(normalized)
        );
      })
      .slice(0, 8);
  }, [query, symbols]);

  return (
    <section
      aria-label="Rüya sembolü arama"
      className="pb-16"
    >
      <label htmlFor="symbol-search" className="sr-only">
        Rüya sembolü ara
      </label>

      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#91897f]"
        >
          ⌕
        </span>

        <input
          id="symbol-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Bir rüya sembolü ara..."
          autoComplete="off"
          className="w-full rounded-[22px] border border-[#d9d1c7] bg-[#faf8f4] px-14 py-5 text-base text-[#24221f] outline-none transition placeholder:text-[#a39b92] focus:border-[#aaa096] focus:ring-2 focus:ring-[#ddd5cc]"
        />
      </div>

      {query.trim() && (
        <div className="mt-4 space-y-3">
          {results.length > 0 ? (
            results.map((symbol) => (
              <Link
                key={symbol.slug}
                href={`/ruyalar/semboller/${symbol.slug}`}
                className="block rounded-[22px] border border-[#ddd5cc] bg-[#faf8f4] px-6 py-5 transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(70,60,50,0.06)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-normal">
                    {symbol.title}
                  </h2>

                  <span className="shrink-0 text-sm text-[#716960]">
                    İncele →
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-[#756e66]">
                  {symbol.shortDescription}
                </p>
              </Link>
            ))
          ) : (
            <div className="rounded-[22px] border border-[#ddd5cc] bg-[#faf8f4] px-6 py-5">
              <p className="text-sm text-[#756e66]">
                Bu sembolü henüz sözlüğümüzde bulamadık.
              </p>

              <Link
                href="/"
                className="mt-3 inline-block text-sm text-[#4e4943] underline underline-offset-4"
              >
                Rüyanı anlat ve birlikte inceleyelim →
              </Link>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
