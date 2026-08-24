import type { Metadata } from "next";
import { COPY, type GuideCopy } from "@/lib/copy";
import { absoluteUrl, getGscVerification, getSiteUrl } from "@/lib/site";

export function rootMetadata(): Metadata {
  const url = getSiteUrl();
  const verification = getGscVerification();

  return {
    metadataBase: new URL(url),
    title: {
      default: COPY.site.metaTitle,
      template: COPY.site.metaTitleTemplate,
    },
    description: COPY.site.metaDescription,
    applicationName: COPY.site.headerName,
    authors: [{ name: "", url: COPY.site.githubUrl }],
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: COPY.site.headerName,
      title: COPY.site.metaTitle,
      description: COPY.site.metaDescription,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: COPY.site.metaTitle,
      description: COPY.site.metaDescription,
    },
    robots: { index: true, follow: true },
    verification: verification ? { google: verification } : undefined,
  };
}

export function pageMetadata(
  path: string,
  title: string,
  description: string,
  type: "website" | "article" = "article",
): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function guideMetadata(path: string, page: GuideCopy): Metadata {
  return pageMetadata(path, page.metaTitle, page.metaDescription);
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COPY.site.headerName,
    url: getSiteUrl(),
    description: COPY.site.metaDescription,
    inLanguage: "en-US",
  };
}

export function articleJsonLd(path: string, page: GuideCopy) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: page.title,
    description: page.metaDescription,
    datePublished: COPY.site.datePublished,
    dateModified: COPY.site.dateModified,
    author: {
      "@type": "Person",
      name: "",
    },
    publisher: {
      "@type": "Person",
      name: "",
    },
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: "en-US",
  };
}
