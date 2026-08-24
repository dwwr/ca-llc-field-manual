import { Callout } from "@/components/callout";
import { H2, H3, GuideShell } from "@/components/guide-shell";
import { OfficialLink, PageLink } from "@/components/links";
import { LINKS } from "@/lib/links";

export const metadata = {
  title: "Selling software work",
};

const TOC = [
  { id: "what", label: "What you are selling" },
  { id: "sales-tax", label: "Sales and use tax" },
  { id: "ip", label: "Intellectual property" },
  { id: "contracts", label: "Contracts that matter" },
  { id: "ab5", label: "AB 5 and clients" },
  { id: "insurance", label: "Insurance" },
  { id: "ops", label: "Day-to-day operations" },
];

export default function SoftwarePage() {
  return (
    <GuideShell
      kicker="The actual business"
      title="Selling your engineering through an LLC"
      lede="The LLC is the wrapper. The product is still your time, judgment, and code. California sales tax, copyright, contractor classification, and insurance are where software consultancies actually get hurt — not the $70 Articles."
      toc={TOC}
    >
      <H2 id="what">What you are selling</H2>
      <p>
        Most readers of this manual are selling <em>services</em>: design,
        implementation, review, staffing a gap on a product team. A smaller
        set also sell a product: a SaaS, a plugin, a downloadable tool, a
        training course. Tax and contract treatment split along that line.
      </p>
      <ul>
        <li>
          <strong>Time and custom work</strong> — billed hourly, weekly, or
          fixed-price against a SOW. This is a consultancy. Sales tax
          generally does not apply. IP must be assigned in writing or it stays
          with you under copyright’s default (you wrote it).
        </li>
        <li>
          <strong>A product many customers use</strong> — canned software,
          licenses, hosted apps. Different tax, different TOS, different
          insurance, and often a different entity conversation (sometimes a C
          corp if you raise). Do not mix both into one sloppy MSA.
        </li>
      </ul>
      <p>
        NAICS codes you will be asked for: 541511 (custom computer
        programming), 541512 (systems design), 541519 (other computer-related).
        Pick the one that matches the majority of revenue. City tax forms and
        banks care more than SOS does.
      </p>

      <H2 id="sales-tax">Sales and use tax</H2>
      <p>
        California taxes the retail sale of tangible personal property. It
        generally does not tax professional services. Software sits on the
        fault line. The statute and regulation:
      </p>
      <ul>
        <li>
          <OfficialLink href={LINKS.rtc60109.href}>
            Revenue & Taxation Code § 6010.9
          </OfficialLink>{" "}
          — “sale” does not include the design, development, writing, or
          transfer of a <em>custom computer program</em> (other than a basic
          operational program), in any form.
        </li>
        <li>
          <OfficialLink href={LINKS.cdtfa1502.href}>
            CDTFA Regulation 1502
          </OfficialLink>{" "}
          — computers, programs, and data processing. Custom vs prewritten,
          load-and-leave, remote access, maintenance, training.
        </li>
      </ul>
      <H3>Usually not taxable</H3>
      <ul>
        <li>
          Custom programs prepared to the special order of one customer,
          even if you reuse libraries and snippets. Transfer by git, tarball,
          or a USB stick does not make it taxable if it is custom.
        </li>
        <li>
          Separately stated charges for custom modifications to a prewritten
          program.
        </li>
        <li>
          True consulting, architecture, code review, and training not tied
          to a mandatory software sale.
        </li>
      </ul>
      <H3>Often taxable</H3>
      <ul>
        <li>
          Prewritten / canned software held for general sale — including
          something you originally built custom and then productized.
        </li>
        <li>
          Software delivered on tangible media (USB, disc) when it is
          prewritten.
        </li>
        <li>
          Bundled deals where the customer cannot buy the hardware or canned
          software without buying your “services,” and you did not separately
          state custom work. CDTFA has annotations on this exact fact pattern
          for computer consultants.
        </li>
        <li>
          Optional maintenance that includes updates to prewritten software
          can be taxable; optional unbundled consulting often is not. The
          invoices have to match the story.
        </li>
      </ul>
      <Callout tone="note" title="SaaS is fact-specific">
        California has spent years arguing about remotely accessed software.
        Hosted applications, digital goods, and “information services” are
        not one rule. If you sell a multi-tenant product for a monthly fee,
        get a CDTFA written opinion or a sales-tax specialist — do not copy a
        2014 blog. Custom one-off development billed to a single client is
        the clean case.
      </Callout>
      <p>
        You generally do <strong>not</strong> need a seller’s permit to only
        provide nontaxable custom programming. If you sell any taxable TPP
        (laptops you mark up, books, canned software, branded merch), you
        need a permit even if it is 2% of revenue. Register with CDTFA, do
        not with FTB.
      </p>
      <p>
        You still pay <em>use tax</em> when you buy equipment, SaaS, or tools
        from out-of-state sellers who did not collect California tax. That is
        on you as the buyer, reported on your California return or a CDTFA
        use-tax account.
      </p>

      <H2 id="ip">Intellectual property</H2>
      <p>
        Copyright in code you write vests in you (or the LLC, if the LLC is
        the author via work you make for the company) until you assign it.
        Clients often drop a one-page “all work product is our work made for
        hire.” California and federal work-for-hire rules are narrower than
        that sentence. If they want ownership, sign an assignment. If you
        want to keep your libraries, say so.
      </p>
      <ul>
        <li>
          <strong>Background IP</strong> — your snippets, templates, internal
          CLI, prior blog posts. License them; do not assign.
        </li>
        <li>
          <strong>Foreground IP</strong> — what you build under the SOW.
          Usually assigned on payment, not on kickoff.
        </li>
        <li>
          <strong>Open source</strong> — you cannot assign what you do not own.
          List third-party licenses. Do not drop a GPL component into a
          client’s proprietary product unless they agree.
        </li>
        <li>
          <strong>Trained models and prompts</strong> — say who owns outputs,
          whether client data may be used to train, and what happens to logs.
        </li>
      </ul>
      <p>
        Put the LLC on the copyright line and the GitHub org. Personal repos
        with client code are how NDAs get broken.
      </p>

      <H2 id="contracts">Contracts that matter</H2>
      <p>
        Do not start a repo on a handshake. The stack:
      </p>
      <ol>
        <li>
          <strong>Master services agreement</strong> — status (independent
          contractor), payment, IP, confidentiality, non-solicit (be careful;
          some California non-solicits are unenforceable), limitation of
          liability, insurance, termination.
        </li>
        <li>
          <strong>Statement of work</strong> — deliverables, dates, fees,
          assumptions, what “done” means. Change orders exist so scope creep
          has a price.
        </li>
        <li>
          <strong>W-9</strong> — LLC legal name, tax classification
          (disregarded / individual, or S corp once elected), EIN.
        </li>
      </ol>
      <p>Engineer-specific clauses worth fighting for:</p>
      <ul>
        <li>
          Liability cap at fees paid in the prior 12 months. Unlimited
          liability for a solo LLC is how you lose the house the LLC was
          meant to protect.
        </li>
        <li>
          No uncapped indemnity for IP unless you wrote it from scratch and
          were paid. Exclude open source and client-furnished material.
        </li>
        <li>
          Payment in 15 days, not “Net 90 because procurement.” Late interest
          is allowed; collections are cheaper than pride.
        </li>
        <li>
          You are not their employee. You use your own equipment. You may
          serve other clients. (This also feeds the AB 5 business-to-business
          exception.)
        </li>
      </ul>

      <H2 id="ab5">AB 5 and clients</H2>
      <p>
        Covered on{" "}
        <PageLink href="/should-you">Should you?</PageLink> because people
        form LLCs thinking it solves classification. It does not. The ABC
        test still applies. The business-to-business exception (Labor Code
        § 2776) is the usual path for a genuine consultancy: separate
        location or home office, business license, other clients or the
        ability to have them, your own tools, a contract in the business
        name.
      </p>
      <p>
        Some large companies will only engage you through a staffing firm
        (W-2) because their counsel will not sign up for ABC risk. That is a
        business decision, not a moral failing. You can still have an LLC
        for everyone else.
      </p>

      <H2 id="insurance">Insurance</H2>
      <p>
        Enterprise MSAs will demand a certificate of insurance. Typical ask:
      </p>
      <ul>
        <li>
          <strong>Professional liability / errors & omissions</strong> — the
          one that matters when your code ships a bug. Often $1M per
          occurrence. A few hundred to a couple thousand a year for a solo
          with clean work.
        </li>
        <li>
          <strong>General liability</strong> — slip-and-fall, not segfaults.
          Cheap. Often bundled. Clients still want it.
        </li>
        <li>
          <strong>Cyber / tech E&O</strong> — if you touch production data,
          PII, or HIPAA-adjacent systems. Sometimes folded into E&O.
        </li>
        <li>
          <strong>Workers’ compensation</strong> — required if you have
          employees. Some clients demand it even for a single-member LLC;
          you may need a policy or a legally valid exemption letter. See{" "}
          <OfficialLink href={LINKS.dirWc.href}>DIR</OfficialLink>.
        </li>
      </ul>
      <p>
        Name the client as additional insured when they ask and your policy
        allows it. Send the cert from the broker, not a Photoshop.
      </p>

      <H2 id="ops">Day-to-day operations</H2>
      <ul>
        <li>
          Invoice from the LLC. Accept ACH/wire to the LLC. Avoid payment
          apps tied only to your SSN.
        </li>
        <li>
          Track time or milestones well enough to defend a collections
          action and a tax audit.
        </li>
        <li>
          Deduct ordinary expenses: laptop depreciation or § 179, home office
          if it qualifies, software subscriptions, conference travel, a
          portion of health insurance if you are eligible for the
          self-employed deduction, retirement (SEP IRA or solo 401(k) — the
          latter needs a plan document, preferably before December).
        </li>
        <li>
          1099-NEC: if the LLC is disregarded, clients may 1099 you as an
          individual with the EIN or SSN depending on how they read the W-9.
          If you are an S corp, they generally should not 1099 you for
          services, but many still will. Keep the W-9 consistent.
        </li>
        <li>
          Do not hire employees “off the books.” California is not the state
          for that experiment.
        </li>
      </ul>
      <p>
        Stay in good standing:{" "}
        <PageLink href="/compliance">calendar and checklist</PageLink>.
      </p>
    </GuideShell>
  );
}
