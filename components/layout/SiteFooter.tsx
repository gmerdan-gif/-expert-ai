import Link from "next/link";

const footerLinks = [
  { href: "/ruyalar", label: "Rüyalar" },
  { href: "/ruyalar/semboller", label: "Rüya Sembolleri" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/bize-ulasin", label: "Bize Ulaşın" },
  { href: "/gizlilik", label: "Gizlilik" },
  { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
];

export default function SiteFooter() {
  return (
    <footer className="flex flex-col gap-5 border-t border-[#d9d2c9] py-7 text-xs text-[#91887e] sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        scroll={true}
        className="w-fit font-medium tracking-[0.28em] text-[#24221f] transition hover:opacity-60"
      >
        INUS
      </Link>

      <nav
        aria-label="Alt menü"
        className="flex flex-wrap gap-x-5 gap-y-3"
      >
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            scroll={true}
            className="transition hover:text-[#24221f]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
