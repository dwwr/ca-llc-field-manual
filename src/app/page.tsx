import Link from "next/link";
import { CostEstimator } from "@/components/cost-estimator";
import { Disclaimer } from "@/components/disclaimer";
import { OfficialLink, PageLink } from "@/components/links";
import { LINKS } from "@/lib/links";
import { NAV } from "@/lib/nav";
import { ArrowRight } from "lucide-react";

const STATS = [
  {
    k: "$70",
    l: "to exist",
    d: "Articles of Organization, Form LLC-1, Secretary of State. Online at bizfile.",
  },
  {
    k: "$800",
    l: "every year",
    d: "Minimum franchise tax to the FTB, even at $0 revenue. First-year waiver ended after 2023.",
  },
  {
    k: "$20",
    l: "then biennial",
    d: "Statement of Information within 90 days, then every two years. Miss it: $250 penalty.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
        California · 2026 briefing
      </p>
      <h1 className="font-heading mt-3 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl">
        Opening a California LLC to sell your software engineering.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
        You are not required to form an LLC to freelance. Forming one in this
        state is cheap to file and expensive to keep. The LLC does not change
        how your profit is taxed unless you later elect S corporation status.
        It can wall off some lawsuit risk if you actually treat it as a
        company.
      </p>

      <div className="mt-6 max-w-2xl">
        <Disclaimer />
      </div>

      <dl className="mt-10 grid gap-3 sm:grid-cols-3">
        {STATS.map((s) => (
          <div
            key={s.l}
            className="rounded-xl border border-border bg-card px-4 py-4"
          >
            <dt className="font-heading text-3xl font-semibold tracking-tight">
              {s.k}
            </dt>
            <dd className="mt-1 text-sm font-medium">{s.l}</dd>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.d}
            </dd>
          </div>
        ))}
      </dl>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          The 90-second answer
        </h2>
        <div className="prose-manual mt-4 max-w-3xl">
          <p>
            If you live and work in California and you bill companies for
            custom software — staff-aug, product engineering, architecture,
            code review — a{" "}
            <strong>California single-member LLC taxed as a disregarded
            entity</strong>{" "}
            is the usual first entity. You file online, get an EIN, open a
            bank account, write an operating agreement, and send clients a W-9
            in the LLC’s name.
          </p>
          <p>
            Do <strong>not</strong> form in Delaware, Wyoming, or Nevada
            because a blog said it is cheaper. If you live here, California
            still wants the $800 and a foreign-LLC registration on top of the
            other state’s fees. That is the most expensive “hack” in this
            business.
          </p>
          <p>
            Software engineering is not a California licensed profession. You
            do not need a professional LLC, a contractor’s license, or a
            CSBPE. You likely do not collect sales tax on custom development.
            You still need a city business tax in most places you work from,
            contracts that assign IP correctly, and insurance if anyone
            enterprise-shaped is going to sign.
          </p>
          <p>
            Stay a sole proprietor (Schedule C under your SSN) only if revenue
            is small, you have little personal wealth to protect, and no
            client is asking for an entity. The $800 is a real cost. Once
            you are billing mid five figures or you own a house, the liability
            wall is usually worth it.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          Run the numbers
        </h2>
        <p className="mt-2 mb-6 max-w-2xl text-muted-foreground">
          Entity cost is not income tax. This estimates SOS fees, the $800,
          the gross-receipts LLC fee, and — if you toggle it — California S
          corp tax plus federal payroll tax versus self-employment tax.
        </p>
        <CostEstimator />
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          Read the rest in order
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {NAV.filter((n) => n.href !== "/").map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="group flex h-full items-start justify-between gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40"
              >
                <span>
                  <span className="font-medium">{n.label}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {n.blurb}
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
          File it yourself
        </h2>
        <p>
          You do not need LegalZoom, Incfile, or a registered-agent mill to
          form a California LLC. The state built{" "}
          <OfficialLink href={LINKS.bizfile.href}>
            bizfile Online
          </OfficialLink>{" "}
          for this. A formation mill charges $300–$800 to type the same
          form and then upsells annual “compliance.” Pay the state $70, write
          your own operating agreement (or have a lawyer review a draft), and
          put the rest toward a CPA conversation about S corps once you are
          consistently clearing roughly $80k–$100k of profit.
        </p>
        <p>
          Next:{" "}
          <PageLink href="/should-you">whether you should form at all</PageLink>
          , then{" "}
          <PageLink href="/form">the filing sequence</PageLink>.
        </p>
      </section>
    </div>
  );
}
