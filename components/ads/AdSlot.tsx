"use client";

import { useEffect, useRef } from "react";

export type AdPlacement =
  | "home-after-analysis"
  | "symbol-hub-after-featured"
  | "symbol-after-perspectives"
  | "symbol-before-faq";

type AdSlotProps = {
  placement: AdPlacement;
  className?: string;
};

const CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

const SLOT_IDS: Record<AdPlacement, string | undefined> = {
  "home-after-analysis":
    process.env.NEXT_PUBLIC_ADSENSE_HOME_AFTER_ANALYSIS,

  "symbol-hub-after-featured":
    process.env.NEXT_PUBLIC_ADSENSE_SYMBOL_HUB_AFTER_FEATURED,

  "symbol-after-perspectives":
    process.env.NEXT_PUBLIC_ADSENSE_SYMBOL_AFTER_PERSPECTIVES,

  "symbol-before-faq":
    process.env.NEXT_PUBLIC_ADSENSE_SYMBOL_BEFORE_FAQ,
};

export default function AdSlot({
  placement,
  className = "",
}: AdSlotProps) {
  const initialized = useRef(false);

  const slotId = SLOT_IDS[placement];

  const isProduction =
    process.env.NODE_ENV === "production";

  useEffect(() => {
    if (!isProduction) {
      return;
    }

    if (!CLIENT_ID || !slotId) {
      return;
    }

    if (initialized.current) {
      return;
    }

    try {
      const adWindow = window as typeof window & {
        adsbygoogle?: Array<Record<string, unknown>>;
      };

      adWindow.adsbygoogle =
        adWindow.adsbygoogle || [];

      adWindow.adsbygoogle.push({});
      initialized.current = true;
    } catch (error) {
      console.error(
        `[INUS AdSlot] AdSense initialization failed for ${placement}`,
        error,
      );
    }
  }, [isProduction, placement, slotId]);

  if (!isProduction) {
    return (
      <div
        data-ad-placement={placement}
        className={`my-10 flex min-h-[120px] items-center justify-center border-y border-[#d9d2c9] text-[10px] uppercase tracking-[0.28em] text-[#9a9288] ${className}`}
      >
        Advertisement
      </div>
    );
  }

  if (!CLIENT_ID || !slotId) {
    return null;
  }

  return (
    <div
      data-ad-placement={placement}
      className={`my-10 min-h-[120px] ${className}`}
    >
      <ins
        className="adsbygoogle block"
        style={{
          display: "block",
        }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
