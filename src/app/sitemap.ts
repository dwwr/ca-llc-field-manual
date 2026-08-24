import type { MetadataRoute } from "next";
import { COPY } from "@/lib/copy";
import { absoluteUrl, SITE_ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(`${COPY.site.dateModified}T00:00:00.000Z`),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
