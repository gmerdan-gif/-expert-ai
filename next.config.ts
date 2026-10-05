import type { NextConfig } from "next";
import symbolRedirects from "./lib/symbols/redirects.json";

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(symbolRedirects).map(([source, destination]) => ({
      source: `/ruyalar/semboller/${encodeURIComponent(source)}`,
      destination: `/ruyalar/semboller/${destination}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
