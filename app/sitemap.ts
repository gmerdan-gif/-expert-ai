import type { MetadataRoute } from "next";
import { getAllDreamSymbols } from "@/data/dream-symbols";

const baseUrl = "https://in-us.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/ruyalar",
    "/ruyalar/ruya-nedir",
    "/ruyalar/ruya-sembolleri",
    "/ruyalar/semboller",
    "/ruyalar/kabuslar",
    "/ruyalar/neden-ruya-goruruz",
    "/ruyalar/ruyalar-neden-unutulur",
    "/ruyalar/ruyalar-ve-bellek",
    "/ruyalar/ruyalar-ve-duygular",
    "/ruyalar/tekrarlayan-ruyalar",
    "/hakkimizda",
    "/bize-ulasin",
    "/gizlilik",
    "/kullanim-kosullari",
  ];

  const symbolRoutes = getAllDreamSymbols().map(
    (symbol) => `/ruyalar/semboller/${symbol.slug}`,
  );

  return [...staticRoutes, ...symbolRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
