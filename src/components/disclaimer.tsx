import { Scale } from "lucide-react";

export function Disclaimer({
  text,
  compact = false,
}: {
  text: string;
  compact?: boolean;
}) {
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
      <span>{text}</span>
    </p>
  );
}
