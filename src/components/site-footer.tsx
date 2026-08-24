import { Disclaimer } from "@/components/disclaimer";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6">
        <Disclaimer compact />
        <p className="text-xs text-muted-foreground">
          Figures checked against California Franchise Tax Board LLC guidance
          (updated March 5, 2026), Secretary of State Form LLC-1, CDTFA
          Regulation 1502, and the SSA 2026 contribution and benefit base.
        </p>
      </div>
    </footer>
  );
}
