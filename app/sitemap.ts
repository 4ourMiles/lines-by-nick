import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lbn.design";
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/start-a-project`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.6 },
  ];
}
