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

const TOC = [
  { id: "why", label: "What an LLC actually does" },
  { id: "compare", label: "The real menu" },
  { id: "when", label: "When it is worth $800" },
  { id: "when-not", label: "When to wait" },
  { id: "delaware", label: "The Delaware / Wyoming trap" },
  { id: "pllc", label: "You are not a PLLC" },
  { id: "ab5", label: "AB 5 still applies" },
];

export default function ShouldYouPage() {
  return (
    <GuideShell
      kicker="Entity choice"
      title="Should you even form an LLC?"
      lede="An LLC is a liability wrapper and a filing with the Secretary of State. It is not a tax shelter, a contractor-status badge, or a way to skip California. For a solo engineer the question is almost always: sole proprietor, California LLC, or California LLC that later elects S corporation."
      toc={TOC}
    >
      <H2 id="why">What an LLC actually does</H2>
      <p>
        A limited liability company is a legal person separate from you. If
        the company is sued over work it contracted to do, creditors of the
        company are supposed to stop at the company’s assets — cash, equipment,
        receivables — and not your house, personal brokerage, or wages from a
        W-2 job. That is the whole product.
      </p>
      <p>It only holds if you treat the company as a company:</p>
      <ul>
        <li>Contracts and invoices in the LLC’s legal name.</li>
        <li>A dedicated bank account. No mixing rent and Stripe payouts.</li>
        <li>A written operating agreement, even as the only member.</li>
        <li>Enough insurance that a claim does not immediately empty the box.</li>
        <li>
          You do not personally guarantee everything (some landlords and card
          issuers will still make you).
        </li>
      </ul>
      <p>
        An LLC does <em>not</em> protect you from your own malpractice in the
        way people hope. If you personally commit fraud, or you are negligent
        as the engineer who wrote the code, plaintiffs often name you anyway.
        Professional liability insurance is the actual control for that. The
        LLC still helps with contract disputes, unpaid vendors, and “the
        company” being the named party on the MSA.
      </p>
      <p>
        For federal tax, a single-member LLC is a{" "}
        <strong>disregarded entity</strong> by default. Profit hits Schedule C
        of your Form 1040, the same as a sole proprietor. You still pay
        self-employment tax. California follows that classification. The LLC
        adds the $800 annual tax and, above $250,000 of California total
        income, a gross-receipts fee. See{" "}
        <PageLink href="/taxes">Taxes</PageLink>.
      </p>

      <H2 id="compare">The real menu</H2>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vehicle</TableHead>
              <TableHead>Liability</TableHead>
              <TableHead>CA entity tax</TableHead>
              <TableHead>When engineers use it</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Sole proprietor</TableCell>
              <TableCell>None. You are the business.</TableCell>
              <TableCell>$0 entity tax. Income tax + SE tax.</TableCell>
              <TableCell>Side work, first clients, testing the market.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CA LLC (disregarded)</TableCell>
              <TableCell>Yes, if you respect the veil.</TableCell>
              <TableCell>$800 + LLC fee over $250k receipts.</TableCell>
              <TableCell>Default for a solo consultancy.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CA LLC + S corp election</TableCell>
              <TableCell>Same LLC shield.</TableCell>
              <TableCell>
                Greater of $800 or 1.5% of S corp net. No LLC fee. Payroll
                instead of SE tax on salary.
              </TableCell>
              <TableCell>
                Sustained profit roughly $80k–$100k+ and a CPA who will run
                payroll.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">C corporation</TableCell>
              <TableCell>Yes.</TableCell>
              <TableCell>
                8.84% CA franchise tax on net, min $800. Double tax on
                dividends.
              </TableCell>
              <TableCell>
                Venture-backed product companies. Almost never a solo
                contractor.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">DE / WY LLC</TableCell>
              <TableCell>Yes, in that state.</TableCell>
              <TableCell>
                Still $800 in CA as a foreign LLC, plus home-state fees.
              </TableCell>
              <TableCell>A California resident should not do this.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <H2 id="when">When it is worth $800</H2>
      <ul>
        <li>
          You have savings, equity in a home, or a spouse’s income you do not
          want sitting next to client work.
        </li>
        <li>
          A client’s vendor form asks for an EIN, insurance certificate, and
          “legal entity name.” Many procurement teams will not pay a human
          being’s SSN.
        </li>
        <li>
          You might hire a contractor, take on a partner, or sell a small
          product later. Starting as an LLC is cheaper than converting later
          in a hurry.
        </li>
        <li>
          You want a clean books trail for a mortgage, visa, or future S corp
          election.
        </li>
      </ul>

      <H2 id="when-not">When to wait</H2>
      <ul>
        <li>
          You have not landed a paid client. Do not pay $800 to a dormant
          company. You can still buy a domain and write a one-pager.
        </li>
        <li>
          This is a three-month moonlighting gig while you have a W-2 with
          indemnification and no personal assets of note. A sole prop plus a
          contract is enough for many people.
        </li>
        <li>
          You are about to leave California. Forming here and then moving does
          not turn the lights off — you must cancel with SOS and file a final
          568 or you will keep getting billed $800.
        </li>
      </ul>
      <Callout tone="warn" title="Cancelling is a filing, not a vibe">
        Closing the bank account does not stop the tax. File a short-form
        cancellation (SOS LLC-4/7) and a final FTB return. If you cancel
        within 12 months of organizing, FTB says you can avoid the first-year
        $800 — useful if you formed by mistake.
      </Callout>

      <H2 id="delaware">The Delaware / Wyoming trap</H2>
      <p>
        Delaware is designed for venture corporations with out-of-state
        investors and Delaware Chancery Court. Wyoming markets anonymity.
        Neither helps a person who lives in Oakland and Slacks with a client
        in Austin.
      </p>
      <p>
        California’s “doing business” definition is aggressive. Living here,
        working here, or having a client who receives the benefit of your
        services here is enough. A 2025 Office of Tax Appeals decision
        confirmed you can owe the $800 even when you miss the bright-line
        sales/property/payroll thresholds, if you are simply transacting for
        profit in the state.
      </p>
      <p>If you form elsewhere and then work from California you typically:</p>
      <ol>
        <li>Pay the other state’s formation and annual report.</li>
        <li>
          Register as a <em>foreign</em> LLC with California SOS (another
          filing fee).
        </li>
        <li>Pay California’s $800 and file Form 568 anyway.</li>
        <li>
          Maintain two registered agents and two sets of records. Gain nothing
          on income tax.
        </li>
      </ol>
      <p>
        Form in California. If you later raise institutional money for a
        product company, a lawyer will tell you whether to flip into a
        Delaware C corp. That is a different business.
      </p>

      <H2 id="pllc">You are not a PLLC</H2>
      <p>
        California restricts LLCs for some licensed professions (law, medicine,
        accountancy, architecture, and similar). Software engineering is not
        on that list. You file a regular LLC. Do not put “Professional” or
        “P.C.” in the name. Do not imply you are a licensed engineer with
        “P.E.” unless you actually are.
      </p>
      <p>
        Name rules live in{" "}
        <OfficialLink href={LINKS.nameRules.href}>
          Corporations Code § 17701.08
        </OfficialLink>
        : the words Limited Liability Company, LLC, or L.L.C. must appear;
        bank, trust, incorporated, and insurance are banned.
      </p>

      <H2 id="ab5">AB 5 still applies</H2>
      <p>
        Forming an LLC does not make you a lawful independent contractor under
        California’s ABC test. Your <em>client</em> still has to classify you
        correctly. Many software consultancies rely on the business-to-business
        exception (Labor Code § 2776): you are a bona fide business, you have
        a contract, you have a business license, you can work for others, you
        provide your own tools, and you actually behave like a vendor.
      </p>
      <p>
        If one FAANG-shaped client is 95% of your revenue, sets your hours, and
        hands you a laptop, an LLC letterhead will not save them — or you —
        in an audit. Diversify clients. Use your own equipment. Invoice
        milestones, not a weekly timesheet that looks like payroll.
      </p>
      <p>
        Continue to{" "}
        <PageLink href="/form">how to file</PageLink> if you are forming.
      </p>
    </GuideShell>
  );
}
