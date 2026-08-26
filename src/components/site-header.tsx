"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import type { NavItem, SiteCopy } from "@/lib/copy";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const storybookCtaClass =
  "rounded-full bg-amber-300 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-amber-200";

export function SiteHeader({
  nav,
  site,
}: {
  nav: NavItem[];
  site: Pick<
    SiteCopy,
    | "headerName"
    | "headerTagline"
    | "menuAria"
    | "openMenu"
    | "mobileNavAria"
    | "storybookCta"
    | "storybookHref"
  >;
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-baseline gap-2.5">
          <span className="font-heading text-lg font-semibold tracking-tight">
            {site.headerName}
          </span>
          <span className="hidden truncate text-xs text-muted-foreground sm:inline">
            {site.headerTagline}
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label={site.menuAria}
          >
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-[13px] transition-colors",
                    active
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={site.storybookHref} className={cn(storybookCtaClass, "ml-2")}>
              {site.storybookCta}
            </a>
          </nav>
          <Sheet>
            <SheetTrigger className="inline-flex size-8 items-center justify-center rounded-lg border border-border lg:hidden">
              <Menu className="size-4" />
              <span className="sr-only">{site.openMenu}</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-heading">{site.menuAria}</SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 px-2 pb-6"
                aria-label={site.mobileNavAria}
              >
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 hover:bg-muted"
                  >
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.blurb}
                    </div>
                  </Link>
                ))}
                <a
                  href={site.storybookHref}
                  className={cn(storybookCtaClass, "mt-3 self-start")}
                >
                  {site.storybookCta}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
