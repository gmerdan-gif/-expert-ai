import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ruyalar/semboller/dans",
        destination: "/ruyalar/semboller/dans-etmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/kosu",
        destination: "/ruyalar/semboller/kosmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/melek-gormek",
        destination: "/ruyalar/semboller/melek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/yetel-kurs-okumak",
        destination: "/ruyalar/semboller/ayetel-kursi-okumak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/alyans_takmak",
        destination: "/ruyalar/semboller/alyans-takmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/olum_haberi_almak",
        destination: "/ruyalar/semboller/olum-haberi-almak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/ayakkabi_giymek",
        destination: "/ruyalar/semboller/ayakkabi-giymek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/cicek_toplamak",
        destination: "/ruyalar/semboller/cicek-toplamak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/gokkusagi_gormek",
        destination: "/ruyalar/semboller/gokkusagi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/birini_beklemek",
        destination: "/ruyalar/semboller/beklemek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/turuncu_gormek",
        destination: "/ruyalar/semboller/turuncu-renk",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/resim_gormek",
        destination: "/ruyalar/semboller/resim",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/mahkeme_gormek",
        destination: "/ruyalar/semboller/mahkeme",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/silah_gormek",
        destination: "/ruyalar/semboller/silah",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
