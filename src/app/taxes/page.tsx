import { Callout } from "@/components/callout";
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
import { LINKS } from "@/lib/links";
import { FTB_LLC_FEE_BRACKETS, formatUsd } from "@/lib/fees";

export const metadata = {
  title: "Taxes",
};

const TOC = [
  { id: "default", label: "Default: disregarded" },
  { id: "eight", label: "The $800" },
  { id: "fee", label: "Gross-receipts LLC fee" },
  { id: "federal", label: "Federal income and SE tax" },
  { id: "pit", label: "California personal income tax" },
  { id: "scorp", label: "S corporation election" },
  { id: "pte", label: "PTE elective tax" },
  { id: "qbi", label: "QBI (federal only)" },
  { id: "estimates", label: "Quarterly estimates" },
  { id: "sales", label: "Sales tax is usually not yours" },
];

export default function TaxesPage() {
  return (
    <GuideShell
      kicker="Taxes"
      title="What you will actually pay"
      lede="A California single-member LLC does not replace your 1040. It adds an $800 franchise tax, a possible gross-receipts fee, a Form 568 information return, and — if you elect S corporation status — payroll and a 1.5% entity tax. Income tax still lands on you."
      toc={TOC}
    >
      <H2 id="default">Default: disregarded</H2>
      <p>
        One owner, no election: the IRS treats the LLC as a disregarded
        entity. Profit and expenses go on Schedule C of your Form 1040.
        Self-employment tax is computed on Schedule SE. You issue yourself no
        W-2.
      </p>
      <p>
        California follows the federal classification. You still file{" "}
        <strong>Form 568</strong> (Limited Liability Company Return of Income)
        and pay the LLC tax/fee even though the income is already on your
        personal California return (Form 540, Schedule CA). Form 568 is an
        entity return, not a substitute for 540.
      </p>
      <p>
        Multi-member LLCs default to partnership taxation (Form 1065 federally,
        still 568 in California). That is a different briefing. If you add a
        spouse as a member, talk to a CPA before you do it — community property
        and partnership status interact.
      </p>

      <H2 id="eight">The $800</H2>
      <p>
        Every LLC organized in California, or doing business here, pays an
        annual tax of $800. Official source:{" "}
        <OfficialLink href={LINKS.ftbLlc.href}>
          FTB LLC page
        </OfficialLink>
        , last updated March 5, 2026.
      </p>
      <ul>
        <li>
          First payment: 15th day of the 4th month after you file with SOS.
          Form in June → due mid-September. Pay with FTB 3522 or Web Pay.
        </li>
        <li>
          Later years (calendar year): April 15, every year, until you cancel.
        </li>
        <li>
          You owe it at $0 revenue. You owe it if you forgot the LLC existed.
        </li>
        <li>
          The 2021–2023 first-year waiver (AB 85) is finished. LLCs formed in
          2024, 2025, or 2026 pay year one.
        </li>
        <li>
          If you cancel with SOS within 12 months of organizing, FTB says the
          first-year $800 can be avoided. Do not form “just in case.”
        </li>
      </ul>
      <p>
        Forming late in the year stacks two $800 payments in the following
        spring. The estimator on the{" "}
        <PageLink href="/">briefing</PageLink> flags that.
      </p>
      <Callout tone="note" title="Budget trailer bills">
        In 2026 the Legislature discussed cutting the first-year tax for
        entities formed in 2027–2029. Do not plan a 2026 formation around a
        future cut. Confirm anything after 2026 on the FTB page before you
        rely on it.
      </Callout>

      <H2 id="fee">Gross-receipts LLC fee</H2>
      <p>
        Separate from the $800. If California total income — a gross-receipts
        concept, not profit — is $250,000 or more, you also pay:
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>California total income</TableHead>
              <TableHead className="text-right">Annual LLC fee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {FTB_LLC_FEE_BRACKETS.map((row) => (
              <TableRow key={row.fee + row.min}>
                <TableCell>
                  {row.max === Infinity
                    ? `${formatUsd(row.min)} and up`
                    : `${formatUsd(row.min)} – ${formatUsd(row.max)}`}
                </TableCell>
                <TableCell className="text-right font-mono">
                  {formatUsd(row.fee)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p>
        Estimate and pay with FTB 3536 by the 15th day of the 6th month
        (June 15 for a calendar-year LLC). Reconcile on Form 568. Underpaying
        the estimate can draw a penalty.
      </p>
      <p>
        “Total income” is not “I netted $80k after AWS.” High billings with
        high contractor costs can still trip $250k. If you are near a cliff,
        accelerating or deferring invoices can be worth a CPA hour.
      </p>
      <p>
        LLCs that elect to be taxed as corporations{" "}
        <strong>do not pay this fee</strong>. They pay corporation tax instead
        (for an S corp, 1.5% of net, minimum $800).
      </p>

      <H2 id="federal">Federal income and self-employment tax</H2>
      <p>
        Disregarded LLC profit is self-employment income. 2026 rates:
      </p>
      <ul>
        <li>
          Social Security 12.4% on net earnings from self-employment, up to the{" "}
          <OfficialLink href={LINKS.ssaWageBase.href}>
            $184,500 wage base
          </OfficialLink>
          .
        </li>
        <li>Medicare 2.9% on all net earnings (no cap).</li>
        <li>
          Additional Medicare 0.9% on earnings above $200,000 single /
          $250,000 married filing jointly.
        </li>
        <li>
          SE tax is computed on 92.35% of net profit. Half of SE tax is
          deductible for income tax.
        </li>
      </ul>
      <p>
        Ordinary federal income tax then applies to taxable income at 2026
        brackets. Software consulting is ordinary income, not capital gain,
        unless you sell the company.
      </p>

      <H2 id="pit">California personal income tax</H2>
      <p>
        California taxes your LLC profit on Form 540. Marginal rates run from
        low single digits up to 12.3%, plus the 1.1% mental-health tax on
        taxable income over $1 million. There is no state self-employment tax,
        but there is also no state QBI deduction — California does not conform
        to IRC § 199A.
      </p>
      <p>
        If you perform services from California, the income is California
        source even if the client sits in New York. If you move mid-year or
        work from another state, apportionment gets technical; do not guess.
      </p>

      <H2 id="scorp">S corporation election</H2>
      <p>
        An LLC may elect S corporation status with IRS Form 2553. California
        generally follows. You then:
      </p>
      <ul>
        <li>Pay yourself a reasonable W-2 salary.</li>
        <li>
          Run payroll: withholding, FICA (12.4% SS split employer/employee +
          2.9% Medicare), FUTA, California PIT withholding, EDD unemployment
          and employment training tax.
        </li>
        <li>
          Take remaining profit as distributions, which are not subject to SE
          tax or FICA. That is the entire federal play.
        </li>
        <li>
          File Form 1120-S federally and Form 100S in California. Pay the
          greater of $800 or <strong>1.5% of California S corp net income</strong>.
        </li>
        <li>Skip the LLC gross-receipts fee.</li>
      </ul>
      <Callout tone="warn" title="Reasonable salary is not a decoration">
        The IRS has decades of cases against consultants who paid themselves
        $24,000 and took $200,000 of distributions. For a hands-on engineer
        who is the product, salary is often the majority of profit, not a
        token. A payroll service and a CPA opinion are part of the cost. Below
        roughly $80k–$100k of steady profit, the $800 / 1.5%, payroll, workers’
        comp questions, and extra returns often eat the FICA savings.
      </Callout>
      <p>
        File 2553 by March 15 of the year you want the election, or within
        75 days of formation for a new entity. Late elections are possible
        under relief procedures; do not assume.
      </p>
      <p>
        Once you have a W-2, you are an employer. Read{" "}
        <OfficialLink href={LINKS.edd.href}>EDD payroll</OfficialLink> and{" "}
        <OfficialLink href={LINKS.dirWc.href}>
          workers’ compensation
        </OfficialLink>
        . Officer exemptions exist on paper and fail in practice more often
        than internet forums admit.
      </p>

      <H2 id="pte">Pass-through entity elective tax</H2>
      <p>
        California lets qualifying partnerships and S corporations pay a 9.3%
        entity-level tax so owners can deduct state tax federally above the
        SALT cap. Official:{" "}
        <OfficialLink href={LINKS.ftbPte.href}>FTB PTE page</OfficialLink>.
        Extended through taxable years beginning before 2031.
      </p>
      <p>
        <strong>
          A disregarded single-member LLC cannot make the election.
        </strong>{" "}
        You need partnership or S corp tax status. The June 15 prepayment is
        the greater of $1,000 or 50% of last year’s PTE tax. From 2026, missing
        it no longer voids the election but haircuts each owner’s credit by
        12.5% of their share of the shortfall.
      </p>
      <p>
        This is a high-income planning tool, not a year-one move. If you are
        in the top California brackets, ask a CPA whether S corp + PTE beats
        disregarded + SE tax in your actual return, not a Twitter thread.
      </p>

      <H2 id="qbi">QBI (federal only)</H2>
      <p>
        IRC § 199A lets you deduct up to 20% of qualified business income on
        the federal return. California does not allow it. For 2026 the
        deduction is easier below about $201,750 taxable income single /
        $403,500 joint (thresholds are inflation-adjusted — verify annually).
      </p>
      <p>
        Specified service trades or businesses (SSTBs), including consulting,
        lose QBI above the phaseout. Custom software development is often{" "}
        <em>not</em> an SSTB; “IT strategy consulting” often is. The line is
        advice versus delivering a program. Do not decide this from a blog.
        If you are near the threshold, classification is real money.
      </p>
      <p>
        QBI does not reduce self-employment tax. An S corp salary also changes
        the QBI math (W-2 wages can help the wage limit above the threshold).
      </p>

      <H2 id="estimates">Quarterly estimates</H2>
      <p>
        The $800 is not your only prepayment. If you expect to owe $1,000+ of
        federal tax, pay 1040-ES quarterly (generally April 15, June 15,
        September 15, January 15). California has its own 540-ES. Underpayment
        penalties are how freelancers meet the FTB.
      </p>
      <p>
        A workable habit: every time a client pays, move 30–40% of the net
        into a separate savings account titled to the LLC (or a tax reserve
        you do not touch). Adjust after the first year when you know your
        effective rate.
      </p>
      <p>Annual California LLC calendar (calendar-year filer):</p>
      <ul>
        <li>April 15 — $800 (FTB 3522) and usually Form 568 / 540.</li>
        <li>June 15 — LLC fee estimate (3536) if you will clear $250k.</li>
        <li>June 15 — PTE first payment, if you are eligible and electing.</li>
        <li>Statement of Information — every two years, $20.</li>
      </ul>

      <H2 id="sales">Sales tax is usually not yours</H2>
      <p>
        Custom software and professional programming services are generally{" "}
        <strong>not</strong> subject to California sales tax. Prewritten
        (“canned”) software, software on tangible media, and some SaaS-adjacent
        transfers can be. Details live on the{" "}
        <PageLink href="/software">selling code</PageLink> page with Regulation
        1502.
      </p>
      <p>
        Do not collect tax “just in case.” Do not ignore it if you start
        selling a downloadable product. Wrong collection is as painful as
        failing to collect.
      </p>
    </GuideShell>
  );
}
