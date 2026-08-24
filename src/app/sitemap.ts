import type { MetadataRoute } from "next";
import { COPY } from "@/lib/copy";
import { absoluteUrl, SITE_ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: COPY.site.dateModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
