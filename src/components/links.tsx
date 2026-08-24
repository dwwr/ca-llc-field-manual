import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function OfficialLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-1 underline decoration-primary/40 underline-offset-3 hover:decoration-primary",
        className
      )}
    >
      {children}
      <ExternalLink className="size-3.5 shrink-0 opacity-70" aria-hidden />
    </a>
  );
}

export function PageLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="underline decoration-primary/40 underline-offset-3 hover:decoration-primary">
      {children}
    </Link>
  );
}
