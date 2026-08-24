export const SITE_ROUTES = [
  { path: "/", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/should-you", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/form", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/taxes", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/software", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/compliance", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/resources", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/about", changeFrequency: "yearly" as const, priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.3 },
];

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:43123";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (path === "/") {
    return base;
  }
  return `${base}${path}`;
}

const ADSENSE_CLIENT = /^ca-pub-\d+$/;
const GA_ID = /^(G|GT|GTM|AW)-[A-Z0-9]+$/i;

export function getAdsenseClient(): string | undefined {
  const value = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();
  return value && ADSENSE_CLIENT.test(value) ? value : undefined;
}

export function getAdsenseSlot(): string | undefined {
  const value = process.env.NEXT_PUBLIC_ADSENSE_SLOT?.trim();
  return value && /^\d+$/.test(value) ? value : undefined;
}

export function getGaId(): string | undefined {
  const value = process.env.NEXT_PUBLIC_GA_ID?.trim();
  return value && GA_ID.test(value) ? value : undefined;
}

export function getGscVerification(): string | undefined {
  const value = process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim();
  return value || undefined;
}

export function getContactEmail(): string | undefined {
  const value = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? value : undefined;
}
