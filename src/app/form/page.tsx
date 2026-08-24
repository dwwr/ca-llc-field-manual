import { Callout } from "@/components/callout";
import { FormationChecklist } from "@/components/formation-checklist";
import { H2, H3, GuideShell } from "@/components/guide-shell";
import { OfficialLink, PageLink } from "@/components/links";
import { LINKS } from "@/lib/links";

const TOC = [
  { id: "sequence", label: "The sequence" },
  { id: "checklist", label: "Interactive checklist" },
  { id: "name", label: "Name and agent" },
  { id: "articles", label: "Articles of Organization" },
  { id: "oa", label: "Operating agreement" },
  { id: "ein-bank", label: "EIN and bank" },
  { id: "soi", label: "Statement of Information" },
  { id: "local", label: "City and county" },
  { id: "after", label: "Then you can invoice" },
];

export default function FormPage() {
  return (
    <GuideShell
      kicker="Formation"
      title="How to actually open the LLC"
      lede="A California single-member consulting LLC is a weekend of paperwork if you file online yourself. The work is not the $70 form. The work is the operating agreement, the bank, the city tax, and remembering the $800."
      toc={TOC}
    >
      <H2 id="sequence">The sequence</H2>
      <ol>
        <li>Search the name on bizfile. Decide member-managed vs manager-managed.</li>
        <li>Pick an agent for service of process with a California street address.</li>
        <li>
          File Articles of Organization online — $70.{" "}
          <OfficialLink href={LINKS.bizfile.href}>bizfile Online</OfficialLink>.
        </li>
        <li>Sign an operating agreement dated the formation date.</li>
        <li>
          Get a free EIN.{" "}
          <OfficialLink href={LINKS.ein.href}>IRS EIN application</OfficialLink>.
        </li>
        <li>Open a business checking account. Move no personal cash in casually.</li>
        <li>File the initial Statement of Information within 90 days — $20.</li>
        <li>
          Pay the $800 to FTB with{" "}
          <OfficialLink href={LINKS.ftbLlc.href}>voucher 3522</OfficialLink> by
          the 15th day of the 4th month after SOS filing.
        </li>
        <li>
          Check <OfficialLink href={LINKS.calgold.href}>CalGOLD</OfficialLink>{" "}
          and your city finance portal for a local business tax.
        </li>
        <li>Insurance, MSA/SOW templates, W-9, bookkeeping. Then invoice.</li>
      </ol>
      <Callout tone="official" title="Where the state wants you">
        Formations go through the Secretary of State. The $800 and Form 568 go
        to the Franchise Tax Board. They do not talk to each other. Paying one
        does not notify the other.
      </Callout>

      <H2 id="checklist">Interactive checklist</H2>
      <p>
        Check items off as you finish them. Progress stays in this browser.
      </p>
      <FormationChecklist />

      <H2 id="name">Name and agent</H2>
      <H3>Name</H3>
      <p>
        Search existing names on bizfile before you get attached to a brand.
        SOS only checks distinguishability in its own database — not USPTO
        trademarks and not domain names. Do both searches yourself.
      </p>
      <ul>
        <li>
          Must contain Limited Liability Company, LLC, or L.L.C. (
          <OfficialLink href={LINKS.nameRules.href}>§ 17701.08</OfficialLink>
          ).
        </li>
        <li>
          Cannot include bank, trust, trustee, incorporated, inc., corporation,
          corp., insurer, or insurance company.
        </li>
        <li>
          Optional name reservation is $10 if you are waiting on a bank or a
          cofounder. Most people just file.
        </li>
        <li>
          If you want to invoice as “Reyes.dev” while the legal name is
          “Reyes Engineering LLC,” file a fictitious business name in the
          county where you operate. That is a county clerk process, not SOS,
          and often requires a newspaper publication.
        </li>
      </ul>
      <H3>Agent for service of process</H3>
      <p>
        Someone the sheriff can find if you are sued. Two options:
      </p>
      <ul>
        <li>
          <strong>You.</strong> Must be a California resident with a street
          address (not a P.O. box). That address is a public record. Using a
          home address is legal and common; it also publishes where you live.
        </li>
        <li>
          <strong>A registered corporate agent</strong> that has a 1505
          filing with SOS. Typically $50–$300 a year. Useful if you do not
          want your apartment on the internet, or you travel.
        </li>
      </ul>
      <p>
        You must have the corporation’s consent before listing them. Do not
        invent a CT Corporation number.
      </p>

      <H2 id="articles">Articles of Organization</H2>
      <p>
        File{" "}
        <OfficialLink href={LINKS.llc1Pdf.href}>Form LLC-1</OfficialLink>{" "}
        online. Paper mail is slower and, for many filers, no longer the path
        SOS wants. The form asks for:
      </p>
      <ul>
        <li>LLC name.</li>
        <li>Principal office street address and mailing address.</li>
        <li>Agent.</li>
        <li>
          Management: member-managed (you run it) or manager-managed (you
          appoint a manager — used in multi-member deals). Solo consultants
          almost always choose <strong>member-managed</strong>.
        </li>
        <li>Organizer signature — that can be you.</li>
      </ul>
      <p>
        Purpose can be the statutory default: “to engage in any lawful act or
        activity.” You do not need to describe “software consulting” on the
        Articles. Save the NAICS code (often 541511 custom programming or
        541512 systems design) for the EIN form, bank, and city license.
      </p>
      <p>
        Standard processing is a few business days. Same-day SOS “preclearance”
        runs hundreds of dollars. You do not need it unless a closing depends
        on a file-stamped copy this afternoon.
      </p>
      <p>
        Optional certified copy is $5. Banks sometimes ask for it. Download
        the file-stamped PDF from bizfile first; that is usually enough.
      </p>

      <H2 id="oa">Operating agreement</H2>
      <p>
        California recognizes oral and implied operating agreements. Banks,
        the IRS, and anyone trying to pierce the veil want a{" "}
        <strong>written</strong> one. It is not filed with SOS.
      </p>
      <p>A single-member agreement should at least:</p>
      <ul>
        <li>State that you are the sole member and 100% owner.</li>
        <li>State member-managed.</li>
        <li>Authorize opening accounts and signing contracts.</li>
        <li>Say how profits are allocated (to you) and how you take draws.</li>
        <li>Cover what happens on death or incapacity — successor member.</li>
        <li>
          Confirm the LLC may elect S corporation status later without
          rewriting the whole thing.
        </li>
      </ul>
      <p>
        Do not copy a multi-member Delaware template and leave “Units” and
        “Board” in it. A California business attorney can produce a clean
        solo agreement for a few hundred dollars. That is a better spend than
        a formation mill.
      </p>

      <H2 id="ein-bank">EIN and bank</H2>
      <p>
        Apply for an EIN only on IRS.gov. You will choose “LLC” and “one
        member,” responsible party = you, start date = SOS file date. Print
        the CP 575 / confirmation. There is no fee.
      </p>
      <p>
        Take to the bank: Articles, EIN letter, operating agreement, your
        driver’s license. Some banks also want the Statement of Information
        once it exists. Open checking first; a business savings or brokerage
        can wait. Get a debit card in the LLC name. Pay AWS, Cursor, and
        health insurance (if you deduct it) from this account.
      </p>
      <Callout tone="warn" title="Commingling is how veils get pierced">
        Paying a client invoice into your personal Venmo, then “owing”
        the LLC, is how you look like a sole proprietor in court. Route every
        dollar through the LLC account. Pay yourself with a labeled transfer.
      </Callout>

      <H2 id="soi">Statement of Information</H2>
      <p>
        Form LLC-12, $20, within 90 days of formation, then every two years
        in a six-month window tied to the anniversary month. It lists
        addresses, members/managers, agent, and a business description.
        Late: $250 penalty, assessed by FTB on SOS’s behalf. Calendar it.
        bizfile will sometimes email; do not rely on the email.
      </p>

      <H2 id="local">City and county</H2>
      <p>
        There is no California statewide business license.{" "}
        <OfficialLink href={LINKS.calgold.href}>CalGOLD</OfficialLink> points
        at state permits (you likely need none for pure consulting). Cities
        are another story:
      </p>
      <ul>
        <li>
          <strong>San Francisco</strong> — Business Registration with the
          Treasurer & Tax Collector, plus a gross-receipts tax that is not
          optional once you are over small-business thresholds.
        </li>
        <li>
          <strong>Los Angeles</strong> — Business Tax Registration Certificate.
          First-year relief sometimes exists; do not assume.
        </li>
        <li>
          <strong>San Jose, Oakland, Sacramento, San Diego</strong> — each has
          its own registration and often a tax on gross receipts or payroll.
        </li>
        <li>
          Home occupation permits and HOA rules if you see clients at the
          house (most engineers never do).
        </li>
      </ul>
      <p>
        If you live in one city and your “office” is a WeWork in another, ask
        the city finance departments which one taxes you. Getting this wrong
        is a classic surprise bill.
      </p>

      <H2 id="after">Then you can invoice</H2>
      <p>
        Send a W-9 with the LLC name and EIN (not your SSN). Sign MSAs as
        “Reyes Engineering LLC, by Derek Warner-Reyes, Member.” Put the legal
        name on the invoice footer with the California address.
      </p>
      <p>
        Next:{" "}
        <PageLink href="/taxes">what you will owe the FTB and IRS</PageLink>{" "}
        and{" "}
        <PageLink href="/software">how software is treated</PageLink>.
      </p>
    </GuideShell>
  );
}
