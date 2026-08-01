import type { MetadataRoute } from "next";
import { CONTENT_UPDATED_AT, absoluteUrl, siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        absoluteUrl(siteConfig.images.og),
        absoluteUrl(siteConfig.images.portraitFallback),
      ],
    },
  ];
}
