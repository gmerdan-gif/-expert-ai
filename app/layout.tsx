import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.in-us.app"),

  title: {
    default: "INUS — Psikolojik Rüya Yorumu ve Analizi",
    template: "%s | INUS",
  },

  description:
    "Rüyanı kendi kelimelerinle anlat. INUS, psikolojik bir yaklaşımla rüyandaki sembolleri, duyguları ve ilişkileri kişisel bir perspektiften yorumlar.",

  alternates: {
    canonical: "https://www.in-us.app/",
  },

  openGraph: {
    type: "website",
    url: "https://www.in-us.app",
    siteName: "INUS",
    title: "INUS — Psikolojik Rüya Yorumu ve Analizi",
    description:
      "Rüyandaki sembolleri, duyguları ve ilişkileri kişisel bir perspektiften keşfet.",
    locale: "tr_TR",
  },

  twitter: {
    card: "summary",
    title: "INUS — Psikolojik Rüya Yorumu ve Analizi",
    description:
      "Rüyanı kendi kelimelerinle anlat. INUS, rüyanı psikolojik bir perspektiften yorumlar.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.in-us.app/#website",
                  "url": "https://www.in-us.app/",
                  "name": "INUS",
                  "description":
                    "Psikolojik rüya yorumu ve rüya analizi platformu.",
                  "inLanguage": "tr-TR"
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.in-us.app/#organization",
                  "name": "INUS",
                  "url": "https://www.in-us.app/"
                }
              ]
            })
          }}
        />

        <link rel="apple-touch-icon" href="/icon.png" />
        <meta
          name="google-adsense-account"
          content="ca-pub-5926030217948912"
        />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5926030217948912"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}