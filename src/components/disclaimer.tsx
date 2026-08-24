import { Scale } from "lucide-react";

export function Disclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <p
      className={
        compact
          ? "text-xs leading-relaxed text-muted-foreground"
          : "flex gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm leading-relaxed text-muted-foreground"
      }
    >
      {!compact ? (
        <Scale className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
      ) : null}
      <span>
        This is a practical briefing compiled from California SOS, FTB, CDTFA,
        IRS, and SSA publications as of August 2026. It is not legal, tax, or
        insurance advice. Filing fees and tax rules change. Confirm figures on
        the official sites before you pay or elect anything, and talk to a
        California CPA and business attorney about your facts.
      </span>
    </p>
  );
}
