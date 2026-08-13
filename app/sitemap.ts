import type { MetadataRoute } from "next";

const baseUrl = "https://in-us.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/ruyalar",
    "/ruyalar/ruya-nedir",
    "/ruyalar/ruya-sembolleri",
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
