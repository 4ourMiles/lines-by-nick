import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/pay", "/__forms.html"] }],
    sitemap: "https://lbn.design/sitemap.xml",
  };
}
