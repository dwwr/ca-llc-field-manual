import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { ThirdPartyScripts } from "@/components/third-party-scripts";
import { TooltipProvider } from "@/components/ui/tooltip";
import { COPY } from "@/lib/copy";
import { rootMetadata, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = rootMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={websiteJsonLd()} />
        <TooltipProvider>
          <SiteHeader nav={COPY.nav} site={COPY.site} />
          <main className="flex-1">{children}</main>
          <SiteFooter
            disclaimer={COPY.site.disclaimer}
            note={COPY.site.footerNote}
            legal={COPY.site.legalNav}
            legalAria={COPY.site.footerLegalAria}
          />
        </TooltipProvider>
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
