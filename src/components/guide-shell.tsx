import Link from "next/link";
import { Disclaimer } from "@/components/disclaimer";
import type { TocItem } from "@/lib/copy";

export function GuideShell({
  kicker,
  title,
  lede,
  toc,
  disclaimer,
  onThisPage,
  ad,
  children,
}: {
  kicker?: string;
  title: string;
  lede: string;
  toc?: TocItem[];
  disclaimer: string;
  onThisPage: string;
  ad?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_14rem]">
      <article className="min-w-0">
        {kicker ? (
          <p className="mb-2 text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {lede}
        </p>
        <div className="mt-6">
          <Disclaimer text={disclaimer} />
        </div>
        {ad}
        <div className="prose-manual mt-10">{children}</div>
      </article>
      {toc && toc.length > 0 ? (
        <aside className="hidden lg:block">
          <nav
            className="sticky top-20 space-y-3"
            aria-label={onThisPage}
          >
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {onThisPage}
            </p>
            <ol className="space-y-1.5 border-l border-border pl-3">
              {toc.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="text-[13px] leading-snug text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      ) : (
        <div className="hidden lg:block" />
      )}
    </div>
  );
}

export function H2({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="font-heading mt-14 scroll-mt-24 text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading mt-8 text-lg font-semibold tracking-tight">
      {children}
    </h3>
  );
}
