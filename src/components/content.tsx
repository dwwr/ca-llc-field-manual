import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Callout } from "@/components/callout";
import { CostEstimator } from "@/components/cost-estimator";
import { Disclaimer } from "@/components/disclaimer";
import { FormationChecklist } from "@/components/formation-checklist";
import { H2, H3, GuideShell } from "@/components/guide-shell";
import { OfficialLink, PageLink } from "@/components/links";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { COPY, type Block, type GuideCopy } from "@/lib/copy";
import { FTB_LLC_FEE_BRACKETS, formatUsd } from "@/lib/fees";
import { interpolate } from "@/lib/utils";
import { LINKS } from "@/lib/links";

const TOKEN =
  /\[([^\]]+)\]\((official:[\w]+|page:[^)]+|https?:[^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;

export function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) {
      nodes.push(text.slice(last, index));
    }

    if (match[1] && match[2]) {
      const label = match[1];
      const target = match[2];
      if (target.startsWith("official:")) {
        const item = LINKS[target.slice("official:".length) as keyof typeof LINKS];
        nodes.push(
          <OfficialLink key={key++} href={item.href}>
            {label}
          </OfficialLink>
        );
      } else if (target.startsWith("page:")) {
        nodes.push(
          <PageLink key={key++} href={target.slice("page:".length)}>
            {label}
          </PageLink>
        );
      } else {
        nodes.push(
          <OfficialLink key={key++} href={target}>
            {label}
          </OfficialLink>
        );
      }
    } else if (match[3]) {
      nodes.push(<strong key={key++}>{match[3]}</strong>);
    } else if (match[4]) {
      nodes.push(<em key={key++}>{match[4]}</em>);
    }

    last = index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return <>{nodes}</>;
}

function LlcFeeTable() {
  const labels = COPY.llcFeeTable;
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{labels.incomeHeader}</TableHead>
            <TableHead className="text-right">{labels.feeHeader}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {FTB_LLC_FEE_BRACKETS.map((row) => (
            <TableRow key={row.fee + row.min}>
              <TableCell>
                {row.max === Infinity
                  ? interpolate(labels.andUp, { min: formatUsd(row.min) })
                  : interpolate(labels.range, {
                      min: formatUsd(row.min),
                      max: formatUsd(row.max),
                    })}
              </TableCell>
              <TableCell className="text-right font-mono">
                {formatUsd(row.fee)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function LinksList() {
  return (
    <ul className="not-prose mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
      {Object.values(LINKS).map((item) => (
        <li key={item.href} className="px-4 py-3">
          <OfficialLink href={item.href} className="font-medium">
            {item.label}
          </OfficialLink>
          <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
        </li>
      ))}
    </ul>
  );
}

export function BlockList({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <H2 key={block.id} id={block.id}>
                {block.text}
              </H2>
            );
          case "h3":
            return <H3 key={`h3-${index}`}>{block.text}</H3>;
          case "p":
            return (
              <p key={`p-${index}`}>
                <RichText text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={`ul-${index}`}>
                {block.items.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={`ol-${index}`}>
                {block.items.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <Callout key={`callout-${index}`} tone={block.tone} title={block.title}>
                <RichText text={block.text} />
              </Callout>
            );
          case "table":
            return (
              <div
                key={`table-${index}`}
                className="not-prose my-6 overflow-x-auto rounded-xl border border-border"
              >
                <Table>
                  <TableHeader>
                    <TableRow>
                      {block.headers.map((header, i) => (
                        <TableHead
                          key={header}
                          className={
                            block.numericColumns?.includes(i) ? "text-right" : undefined
                          }
                        >
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {block.rows.map((row) => (
                      <TableRow key={row[0]}>
                        {row.map((cell, i) => (
                          <TableCell
                            key={`${row[0]}-${i}`}
                            className={
                              i === 0 && block.headerColumn
                                ? "font-medium"
                                : block.numericColumns?.includes(i)
                                  ? "text-right font-mono"
                                  : undefined
                            }
                          >
                            <RichText text={cell} />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            );
          case "checklist":
            return (
              <FormationChecklist
                key={`checklist-${index}`}
                items={COPY.checklist}
                ui={COPY.checklistUi}
              />
            );
          case "llcFeeTable":
            return <LlcFeeTable key={`llc-fee-${index}`} />;
          case "linksList":
            return <LinksList key={`links-${index}`} />;
        }
      })}
    </>
  );
}

export function GuidePage({ page }: { page: GuideCopy }) {
  return (
    <GuideShell
      kicker={page.kicker}
      title={page.title}
      lede={page.lede}
      toc={page.toc}
      disclaimer={COPY.site.disclaimer}
      onThisPage={COPY.site.onThisPage}
    >
      <BlockList blocks={page.blocks} />
    </GuideShell>
  );
}

export function HomeView() {
  const { home, site, nav, estimator } = COPY;
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
        {home.kicker}
      </p>
      <h1 className="font-heading mt-3 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl">
        {home.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
        {home.lede}
      </p>

      <div className="mt-6 max-w-2xl">
        <Disclaimer text={site.disclaimer} />
      </div>

      <dl className="mt-10 grid gap-3 sm:grid-cols-3">
        {home.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card px-4 py-4"
          >
            <dt className="font-heading text-3xl font-semibold tracking-tight">
              {stat.value}
            </dt>
            <dd className="mt-1 text-sm font-medium">{stat.label}</dd>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {stat.detail}
            </dd>
          </div>
        ))}
      </dl>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          {home.ninetySecondsTitle}
        </h2>
        <div className="prose-manual mt-4 max-w-3xl">
          {home.ninetySeconds.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          {home.estimatorTitle}
        </h2>
        <p className="mt-2 mb-6 max-w-2xl text-muted-foreground">
          {home.estimatorLede}
        </p>
        <CostEstimator copy={estimator} />
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          {home.readRestTitle}
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {nav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full items-start justify-between gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40"
                >
                  <span>
                    <span className="font-medium">{item.label}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {item.blurb}
                    </span>
                  </span>
                  <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section className="prose-manual mt-16 max-w-3xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          {home.fileYourselfTitle}
        </h2>
        {home.fileYourself.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </section>
    </div>
  );
}
