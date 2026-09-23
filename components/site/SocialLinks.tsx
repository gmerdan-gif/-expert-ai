import Link from "next/link";
import { SOCIAL_PROFILES } from "@/lib/site/social";

const profiles = [
  { key: "instagram", label: "Instagram" },
  { key: "youtube", label: "YouTube" },
  { key: "x", label: "X" },
  { key: "tiktok", label: "TikTok" },
] as const;

type SocialPlatform = (typeof profiles)[number]["key"];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
      fill="currentColor"
    >
      {platform === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.5" cy="6.5" r="1.1" />
        </>
      )}
      {platform === "youtube" && (
        <>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
        </>
      )}
      {platform === "x" && (
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.9-9L2 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.6 3.9H5.8L17.8 20Z" />
      )}
      {platform === "tiktok" && (
        <path d="M16.7 0c.4 3.4 2.3 5.4 5.6 5.6v3.8a9.6 9.6 0 0 1-5.6-1.6v7.8c0 9.9-10.8 13-15.1 5.9-2.8-4.6-1.1-12.6 7.8-13v4c-.7.1-1.4.2-2.1.4-2 .7-3.1 2-2.8 4.4.6 4.5 8.4 5.8 7.7-3V0h4.5Z" transform="translate(2 1) scale(.85)" />
      )}
    </svg>
  );
}

export function SocialLinks() {
  return (
    <div className="bg-[#f5f1ea] text-[#454039]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <nav aria-label="Site bilgileri ve yardım" className="flex flex-wrap justify-center gap-x-5 gap-y-1 border-t border-[#d9d2c9] py-4 text-sm">
          {[
            ["/ruyalar", "Rüya rehberi"],
            ["/ruyalar/semboller", "Rüya sembolleri"],
            ["/hakkimizda", "Hakkımızda"],
            ["/bize-ulasin", "Bize ulaşın"],
            ["/gizlilik", "Gizlilik"],
            ["/kullanim-kosullari", "Kullanım koşulları"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="inline-flex min-h-11 items-center rounded px-2 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2">
              {label}
            </Link>
          ))}
        </nav>
        <nav
          aria-label="INUS sosyal medya hesapları"
          className="border-t border-[#d9d2c9] py-6 sm:flex sm:items-center sm:justify-between sm:gap-6"
        >
          <p className="mb-3 text-sm text-[#625c54] sm:mb-0">INUS’u takip et</p>
          <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            {profiles.map(({ key, label }) => (
              <li key={key}>
                <a
                  href={SOCIAL_PROFILES[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}: INUS (yeni sekmede açılır)`}
                  className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[#e9e2d8] hover:text-[#24221f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#625c54]"
                >
                  <SocialIcon platform={key} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
