import Link from "next/link";
import { Disclaimer } from "@/components/disclaimer";
import type { LegalNavItem } from "@/lib/copy";

export function SiteFooter({
  disclaimer,
  note,
  legal,
  legalAria,
}: {
  disclaimer: string;
  note: string;
  legal: LegalNavItem[];
  legalAria: string;
}) {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6">
        <Disclaimer text={disclaimer} compact />
        <p className="text-xs text-muted-foreground">{note}</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label={legalAria}>
          {legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-muted-foreground underline-offset-3 hover:text-foreground hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
