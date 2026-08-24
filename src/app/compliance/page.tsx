import { FormationChecklist } from "@/components/formation-checklist";
import { Callout } from "@/components/callout";
import { H2, GuideShell } from "@/components/guide-shell";
import { OfficialLink, PageLink } from "@/components/links";
import { LINKS } from "@/lib/links";

export const metadata = {
  title: "Stay in good standing",
};

const TOC = [
  { id: "calendar", label: "The calendar" },
  { id: "checklist", label: "Formation checklist" },
  { id: "suspended", label: "Suspension is a real status" },
  { id: "records", label: "Records" },
  { id: "close", label: "How to close it" },
  { id: "boi", label: "Beneficial ownership" },
];

export default function CompliancePage() {
  return (
    <GuideShell
      kicker="Compliance"
      title="How not to get suspended"
      lede="California will let the LLC go dormant, then bill you $800 a year plus penalties until someone notices. Good standing is a short list: Statement of Information, FTB tax, and a live agent. Miss those and you cannot sue, you cannot legally contract, and the name can walk away."
      toc={TOC}
    >
      <H2 id="calendar">The calendar</H2>
      <p>
        Put these on a calendar that is not your brain. Recurring, with
        alerts a month out.
      </p>
      <ul>
        <li>
          <strong>Formation + 90 days</strong> — initial Statement of
          Information, $20,{" "}
          <OfficialLink href={LINKS.bizfile.href}>bizfile</OfficialLink>.
        </li>
        <li>
          <strong>15th day of the 4th month after SOS filing</strong> — first
          $800, FTB 3522.{" "}
          <OfficialLink href={LINKS.ftbLlc.href}>FTB LLC</OfficialLink>.
        </li>
        <li>
          <strong>Every April 15</strong> (calendar-year LLC) — $800 again,
          Form 568, and your 540. Extension to file is not an extension to
          pay.
        </li>
        <li>
          <strong>Every June 15</strong> — LLC fee estimate (3536) if
          California total income will hit $250,000. PTE prepayment if you
          elect.
        </li>
        <li>
          <strong>Every two years</strong>, six-month window starting the
          anniversary month — Statement of Information, $20. Late: $250.
        </li>
        <li>
          <strong>Federal quarters</strong> — 1040-ES. California 540-ES on
          a similar cadence.
        </li>
        <li>
          <strong>City tax</strong> — SF, LA, and others have their own
          annual dates. Look them up once and copy them here.
        </li>
        <li>
          <strong>Insurance</strong> — renewal, and updated certs before MSA
          anniversaries.
        </li>
      </ul>
      <Callout tone="warn" title="SOS and FTB are different buildings">
        Paying the $800 does not file the Statement of Information. Filing
        the Statement does not pay the $800. Each agency can suspend you
        independently.
      </Callout>

      <H2 id="checklist">Formation checklist</H2>
      <p>
        Same list as{" "}
        <PageLink href="/form">Form it</PageLink>, kept here so you can
        actually use it after you close the tab.
      </p>
      <FormationChecklist />

      <H2 id="suspended">Suspension is a real status</H2>
      <p>
        If FTB suspends the LLC (unpaid tax) or SOS suspends it (missing
        Statement of Information), the company cannot bring a lawsuit in
        California, and counterparties can attack contracts. Banks get
        nervous. The name becomes available. Reviving means paying
        back-taxes, penalties, and sometimes a revival fee. It is always more
        expensive than the original $20 or $800.
      </p>
      <p>
        Check status on bizfile before a big contract. Search your file
        number. “Active” is the only word you want.
      </p>

      <H2 id="records">Records</H2>
      <p>
        Keep, indefinitely or at least seven years:
      </p>
      <ul>
        <li>File-stamped Articles and all Statements of Information.</li>
        <li>Operating agreement and any amendments.</li>
        <li>EIN letter.</li>
        <li>Bank statements and a general ledger (even a CSV).</li>
        <li>Signed MSAs, SOWs, change orders, and invoices.</li>
        <li>Insurance policies and certificates.</li>
        <li>Payroll records if you are an S corp.</li>
        <li>Tax returns: 1040, 540, 568, 1120-S, 100S as applicable.</li>
      </ul>
      <p>
        California does not require annual member minutes for an LLC, but a
        one-page annual consent (“member confirms the operating agreement,
        authorizes tax filings, elects to continue”) is cheap evidence that
        the company is not a drawer of receipts.
      </p>

      <H2 id="close">How to close it</H2>
      <ol>
        <li>Stop taking work in the LLC name. Finish or assign contracts.</li>
        <li>Pay final vendors. Collect final invoices. Zero the account.</li>
        <li>
          File a tax clearance / cancellation with SOS (LLC-4/7 short form if
          you qualify, otherwise the longer cancellation).
        </li>
        <li>
          File a final Form 568 with the “final” box checked, and a final
          540 if it is also your last year of the activity.
        </li>
        <li>Close the EIN account with IRS correspondence if they require it.</li>
        <li>Cancel city registrations and insurance.</li>
      </ol>
      <p>
        Until SOS and FTB both show cancelled, assume the $800 is still
        accruing. “I moved to Texas” is not a filing.
      </p>

      <H2 id="boi">Beneficial ownership reports</H2>
      <p>
        FinCEN’s Corporate Transparency Act beneficial-ownership reporting
        for domestic companies was sharply narrowed in 2025; as of 2026 most
        U.S.-formed LLCs are not expected to file BOI reports. This area
        moved fast. Check{" "}
        <OfficialLink href="https://www.fincen.gov/boi">
          fincen.gov/boi
        </OfficialLink>{" "}
        before you pay a compliance vendor for a CTA filing. Do not confuse
        it with California’s Statement of Information — that one you still
        file.
      </p>
    </GuideShell>
  );
}
