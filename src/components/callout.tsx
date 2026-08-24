import { AlertTriangle, Info, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const styles = {
  note: {
    wrap: "border-border bg-card",
    icon: Info,
    iconClass: "text-primary",
  },
  warn: {
    wrap: "border-primary/30 bg-[oklch(0.96_0.03_55)]",
    icon: AlertTriangle,
    iconClass: "text-primary",
  },
  official: {
    wrap: "border-[oklch(0.45_0.06_250/0.25)] bg-[oklch(0.96_0.02_250)]",
    icon: Landmark,
    iconClass: "text-[oklch(0.4_0.08_250)]",
  },
} as const;

export function Callout({
  tone = "note",
  title,
  children,
}: {
  tone?: keyof typeof styles;
  title?: string;
  children: React.ReactNode;
}) {
  const s = styles[tone];
  const Icon = s.icon;
  return (
    <aside
      className={cn(
        "my-6 flex gap-3 rounded-xl border px-4 py-3.5 text-sm leading-relaxed",
        s.wrap
      )}
    >
      <Icon className={cn("mt-0.5 size-4 shrink-0", s.iconClass)} aria-hidden />
      <div className="space-y-1">
        {title ? (
          <p className="font-heading text-[0.95rem] font-semibold tracking-tight text-foreground">
            {title}
          </p>
        ) : null}
        <div className="text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p+p]:mt-2">
          {children}
        </div>
      </div>
    </aside>
  );
}
