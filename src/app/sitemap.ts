import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://descomplicacomliz.com.br/",
      changeFrequency: "monthly",
      priority: 1,
      lastModified: new Date().toISOString(),
    },
  ];
}

