import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Storybook iframe build is for humans; keep crawlers on the guide.
      disallow: ["/storybook/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
