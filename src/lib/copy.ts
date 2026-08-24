/** User-facing copy. Inline markup: **bold**, *italic*, [label](official:linkKey), [label](page:/path), [label](https://…). */

export type LinkKey = keyof typeof import("./links").LINKS;

export type NavItem = {
  href: string;
  label: string;
  blurb: string;
};

export type TocItem = {
  id: string;
  label: string;
};

export type ChecklistItem = {
  id: string;
  title: string;
  detail: string;
  when: string;
  link?: LinkKey;
};

export type CalloutTone = "note" | "warn" | "official";

export type Block =
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; tone: CalloutTone; title: string; text: string }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
      headerColumn?: boolean;
      numericColumns?: number[];
    }
  | { type: "checklist" }
  | { type: "llcFeeTable" }
  | { type: "linksList" };

export type GuideCopy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lede: string;
  toc?: TocItem[];
  blocks: Block[];
};

export type LegalNavItem = {
  href: string;
  label: string;
};

const site = {
  metaTitle: "California LLC Field Manual for software engineers",
  metaTitleTemplate: "%s · CA LLC Field Manual",
  metaDescription:
    "What it actually costs and requires to form a California LLC so you can bill for software engineering work — fees, taxes, sales tax, contracts, and the Delaware trap.",
  headerName: "CA LLC Field Manual",
  headerTagline: "for software engineers",
  ogAlt: "CA LLC Field Manual for software engineers",
  datePublished: "2026-08-01",
  dateModified: "2026-08-24",
  githubUrl: "https://github.com/dwwr/ca-llc-field-manual",
  menuAria: "Sections",
  openMenu: "Open menu",
  mobileNavAria: "Mobile",
  onThisPage: "On this page",
  adLabel: "Advertisement",
  disclaimer:
    "This is a practical briefing compiled from California SOS, FTB, CDTFA, IRS, and SSA publications as of August 2026. It is not legal, tax, or insurance advice. Filing fees and tax rules change. Confirm figures on the official sites before you pay or elect anything, and consult a California CPA or business attorney.",
  footerNote:
    "Figures checked against California Franchise Tax Board LLC guidance (updated March 5, 2026), Secretary of State Form LLC-1, CDTFA Regulation 1502, and the SSA 2026 contribution and benefit base.",
  footerLegalAria: "About and legal",
  legalNav: [
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
    { href: "/contact", label: "Contact" },
  ] satisfies LegalNavItem[],
};

const nav: NavItem[] = [
  { href: "/", label: "Briefing", blurb: "Clear advice." },
  {
    href: "/should-you",
    label: "Should you?",
    blurb: "LLC vs sole prop vs S corp vs Delaware.",
  },
  {
    href: "/form",
    label: "Form it",
    blurb: "Name, agent, Articles, EIN, bank, licenses.",
  },
  {
    href: "/taxes",
    label: "Taxes",
    blurb: "$800 tax, LLC fee, SE tax, S corp, PTE.",
  },
  {
    href: "/software",
    label: "Selling code",
    blurb: "Sales tax, IP, contracts, AB 5, insurance.",
  },
  {
    href: "/compliance",
    label: "Stay current",
    blurb: "Checklists, calendars, & compliance.",
  },
  {
    href: "/resources",
    label: "Official links",
    blurb: "SOS, FTB, IRS, CDTFA.",
  },
];

const checklistUi = {
  complete: "{completed} of {total} complete",
  loading: "Loading…",
  savedLocally: "Saved in your browser only. Not sent anywhere.",
  reset: "Reset",
  openOfficial: "Open official site",
  empty: "Nothing checked yet. Start with the name search.",
};

const checklist: ChecklistItem[] = [
  {
    id: "name",
    title: "Search and lock a distinguishable LLC name",
    detail:
      "Must include LLC, L.L.C., or Limited Liability Company. Cannot use bank, trust, corp, or insurance. Search bizfile before you file. Optional $10 name reservation.",
    when: "Before filing",
    link: "bizfile",
  },
  {
    id: "agent",
    title: "Name a California agent for service of process",
    detail:
      "A California adult (often you) with a street address, or a registered corporate agent. The individual’s name and address become a public record. No P.O. boxes.",
    when: "Before filing",
  },
  {
    id: "articles",
    title: "File Articles of Organization (LLC-1) — $70",
    detail:
      "File online at bizfile Online. Choose member-managed for a solo practice unless you have a reason not to. Processing is typically a few business days; same-day service costs hundreds extra and is rarely worth it.",
    when: "Day 0",
    link: "bizfile",
  },
  {
    id: "oa",
    title: "Sign a written operating agreement",
    detail:
      "California does not require you to file it- but banks, the IRS, and the inquisitive will all want a written agreement. Date it as of formation. Keep it with your records.",
    when: "Week 1",
  },
  {
    id: "ein",
    title: "Get a free EIN from the IRS",
    detail:
      "Apply at IRS.gov. You need it for a business bank account, Form 568, and W-9s. Ignore any site that charges for this.",
    when: "Week 1",
    link: "ein",
  },
  {
    id: "bank",
    title: "Open a dedicated business bank account",
    detail:
      "Bring Articles, EIN letter, operating agreement, and your ID. Commingling personal and LLC funds is the fastest way to lose limited liability. Pay yourself with documented draws or payroll — never a Venmo from the client to your personal account.",
    when: "Week 1–2",
  },
  {
    id: "soi",
    title: "File the initial Statement of Information — $20",
    detail:
      "Due within 90 days of formation (Form LLC-12), then every two years during the six-month window that starts on the anniversary month. Late penalty: $250, collected by the FTB.",
    when: "Within 90 days",
    link: "bizfile",
  },
  {
    id: "ftb800",
    title: "Pay the $800 annual LLC tax (FTB 3522)",
    detail:
      "Due the 15th day of the 4th month after you file with the SOS, then every year by April 15 for a calendar-year LLC. The 2021–2023 first-year waiver is gone. You owe this even with $0 revenue until you cancel the LLC.",
    when: "15th day of 4th month",
    link: "ftbLlc",
  },
  {
    id: "local",
    title: "Pull city/county licenses on CalGOLD",
    detail:
      "California has no statewide general business license. San Francisco, Los Angeles, San Jose, Oakland, and others each collect their own tax or registration. A home-office permit may also apply.",
    when: "Before you invoice from that city",
    link: "calgold",
  },
  {
    id: "insurance",
    title: "Buy professional liability (E&O) and general liability",
    detail:
      "Enterprise clients will ask for a certificate naming them as additional insured. Budget roughly $800–$2,500 a year for a solo consultant. Add cyber if you touch production data. Workers’ comp if you have employees.",
    when: "Before the first SOW",
  },
  {
    id: "contracts",
    title: "Template an MSA, SOW, and W-9",
    detail:
      "Cap liability at fees paid, assign IP only for work you are paid for, keep pre-existing tools as background IP, and never start work on a handshake. Give clients a W-9 in the LLC’s legal name and EIN.",
    when: "Before the first SOW",
  },
  {
    id: "books",
    title: "Stand up bookkeeping and quarterly estimates",
    detail:
      "Track every dollar in the LLC account. Set aside federal self-employment tax, federal income tax, and California income tax. Calendar Form 568, FTB 3522, and (if income will exceed $250,000) FTB 3536 by June 15.",
    when: "Ongoing",
  },
];

const estimator = {
  title: "What California will charge you",
  lede: "Rough entity-level cost for a California-resident solo engineer billing clients. Income tax on the profit still sits on your 1040 and 540 either way.",
  grossLabel: "Expected California-source receipts",
  grossHint:
    "Gross receipts the FTB uses for the LLC fee — generally your California-source billings, not profit.",
  expensesLabel: "Deductible expenses",
  formationMonthLabel: "Formation month (2026)",
  registeredAgentLabel: "Registered agent",
  registeredAgentOptions: [
    { value: 0, label: "Yourself (free)" },
    { value: 125, label: "Commercial (~$125/yr)" },
    { value: 300, label: "Premium (~$300/yr)" },
  ],
  sCorpLabel: "Model an S corporation election",
  sCorpHint:
    "Pays a reasonable W-2 salary; leftover profit as distributions. California then charges 1.5% of S corp net income (minimum $800) instead of the LLC gross-receipts fee.",
  salaryLabel: "Reasonable salary",
  salaryHint:
    "A common starting point for a hands-on consultant is about 50–60% of profit ({salary} here). Too low and the IRS recharacterizes distributions as wages.",
  yearOneKicker: "Year-one entity cost",
  yearOneSub: "SOS filings + California entity tax",
  yearOneSubSCorp: " (S corp 1.5% / $800)",
  yearOneSubLlc: " ($800 + LLC fee if any)",
  articlesRow: "Articles + first Statement of Information",
  agentRow: "Registered agent",
  sCorpTaxRow: "CA S corp tax (greater of $800 or 1.5%)",
  llcTaxRow: "Annual LLC tax (FTB 3522)",
  llcFeeRow: "LLC fee (gross receipts)",
  llcFeeUnderRow: "LLC fee (under $250k)",
  laterYearRow: "Each later year (approx.)",
  firstDueRow: "First $800 due",
  payrollTitle: "Payroll / SE tax (federal)",
  netProfitRow: "Net profit modeled",
  ficaRow: "Employer + employee FICA on salary",
  seTaxRow: "Self-employment tax (15.3% on 92.35%)",
  payrollNoteSCorp:
    "S corp savings only exist on profit above a defensible salary. Add a payroll service ($40–$80/mo), EDD registration, and usually workers’ compensation. This card does not include those.",
  payrollNoteSe:
    "Self-employment tax is the 12.4% Social Security + 2.9% Medicare levy on net earnings. Half is deductible on the 1040. An LLC taxed as a disregarded entity does not reduce this.",
  emptyYearTitle: "Empty year",
  emptyYearBody:
    "With $0 receipts you still owe the $70 filing fee, $20 Statement of Information, and $800 annual tax — about $890 to exist, then $800 every year until you cancel with the Secretary of State.",
  twoPaymentsTitle: "Two $800 bills close together",
  twoPaymentsBody:
    "Forming in {month} means the first-year tax is due {firstDue}, and the second-year tax is due April 15 of that same calendar year. Budget $1,600 to FTB in a short window, not one $800.",
  cliffTitle: "Gross-receipts cliff",
  cliffBody:
    "At {at} of California total income the LLC fee jumps by {extra}. The fee is based on receipts, not profit — a high-bill, high-expense year can still trigger it. An S corp election replaces this fee with the 1.5% income tax.",
};

const home = {
  metaDescription:
    "Costs, taxes, and the Delaware trap: a field manual for California software engineers deciding whether to form an LLC — $70 to file, $800 a year to keep.",
  kicker: "California · 2026 briefing",
  title: "Opening a California LLC to sell your software engineering.",
  lede: "You are not required to form an LLC to freelance. Forming one in this state is cheap to file and expensive to keep. The LLC does not change how your profit is taxed unless you later elect S corporation status. It can wall off some lawsuit risk if you actually treat it as a company.",
  stats: [
    {
      value: "$70",
      label: "to exist",
      detail:
        "Articles of Organization, Form LLC-1, Secretary of State. Online at bizfile.",
    },
    {
      value: "$800",
      label: "every year",
      detail:
        "Minimum franchise tax to the FTB, even at $0 revenue. First-year waiver ended after 2023.",
    },
    {
      value: "$20",
      label: "then biennial",
      detail:
        "Statement of Information within 90 days, then every two years. Miss it: $250 penalty.",
    },
  ],
  ninetySecondsTitle: "TL;DR:",
  ninetySeconds: [
    "If you live and work in California and you bill companies for custom software — staff-aug, product engineering, architecture, code review — a **California single-member LLC taxed as a disregarded entity** is the usual first entity. You file online, get an EIN, open a bank account, write an operating agreement, and send clients a W-9 in the LLC’s name.",
    "Do **not** form in Delaware, Wyoming, or Nevada because a blog said it is cheaper. If you live here, California still wants the $800 and a foreign-LLC registration on top of the other state’s fees.",
    "Software engineering is not a California licensed profession. You do not need a professional LLC, a contractor’s license, or a CSBPE. You likely do not collect sales tax on custom development. You still need a city business tax in most places you work from, contracts that assign IP correctly, and insurance if anyone enterprise-shaped is going to sign.",
    "Stay a sole proprietor (Schedule C under your SSN) only if revenue is small, you have little personal wealth to protect, and no client is asking for an entity. Once you are billing mid five figures or you own a house, then consider climbing the liability wall.",
  ],
  estimatorTitle: "Run the numbers",
  estimatorLede:
    "Entity cost is not income tax. This estimates SOS fees, the $800, the gross-receipts LLC fee, and — if you toggle it — California S corp tax plus federal payroll tax versus self-employment tax.",
  readRestTitle: "Read the rest in order",
  fileYourselfTitle: "File it yourself",
  fileYourself: [
    "You do not need LegalZoom, Incfile, or a registered-agent mill to form a California LLC. The state built [bizfile Online](official:bizfile) for this. A formation mill charges $300–$800 to type the same form and then upsells annual “compliance.” Pay the state $70, write your own operating agreement (or have a lawyer review a draft), and put the rest toward a CPA conversation about S corps once you are consistently clearing roughly $80k–$100k of profit.",
    "Next: [whether you should form at all](page:/should-you), then [the filing sequence](page:/form).",
  ],
};

const shouldYou = {
  metaTitle: "Should you form a California LLC?",
  metaDescription:
    "When a California LLC is worth the $800 annual tax for a software engineer, when to stay a sole proprietor, and why Delaware or Wyoming usually costs more if you live here.",
  kicker: "Entity choice",
  title: "Should you even form an LLC?",
  lede: "An LLC is a liability wrapper and a filing with the Secretary of State. It is not a tax shelter, a contractor-status badge, or a way to skip California. Your options for entity are: sole proprietor, California LLC, or California LLC that later elects S corporation.",
  toc: [
    { id: "why", label: "What an LLC actually does" },
    { id: "compare", label: "The real menu" },
    { id: "when", label: "When it is worth $800" },
    { id: "when-not", label: "When to wait" },
    { id: "delaware", label: "The Delaware / Wyoming trap" },
    { id: "pllc", label: "You are not a PLLC" },
    { id: "ab5", label: "AB 5 still applies" },
  ],
  blocks: [
    { type: "h2", id: "why", text: "What an LLC actually does" },
    {
      type: "p",
      text: "A limited liability company is a legal person separate from you. If the company is sued over work it contracted to do, creditors of the company are supposed to stop at the company’s assets — cash, equipment, receivables — and not your house, personal brokerage, or wages from a W-2 job.",
    },
    { type: "p", text: "It only holds if you treat the company as a company:" },
    {
      type: "ul",
      items: [
        "Contracts and invoices in the LLC’s legal name.",
        "A dedicated bank account. No mixing rent and Stripe payouts.",
        "A written operating agreement, even as the only member.",
        "Enough insurance that a claim does not immediately empty the box.",
        "You do not personally guarantee everything (some landlords and card issuers will still make you).",
      ],
    },
    {
      type: "p",
      text: "An LLC does *not* protect you from your own malpractice in the way people hope. If you personally commit fraud, or you are negligent as the engineer who wrote the code, plaintiffs often name you anyway. Professional liability insurance is the actual control for that. The LLC still helps with contract disputes, unpaid vendors, and “the company” being the named party on the MSA.",
    },
    {
      type: "p",
      text: "For federal tax, a single-member LLC is a **disregarded entity** by default. Profit hits Schedule C of your Form 1040, the same as a sole proprietor. You still pay self-employment tax. California follows that classification. The LLC adds the $800 annual tax and, above $250,000 of California total income, a gross-receipts fee. See [Taxes](page:/taxes).",
    },
    { type: "h2", id: "compare", text: "The real menu" },
    {
      type: "table",
      headerColumn: true,
      headers: [
        "Vehicle",
        "Liability",
        "CA entity tax",
        "When engineers use it",
      ],
      rows: [
        [
          "Sole proprietor",
          "None. You are the business.",
          "$0 entity tax. Income tax + SE tax.",
          "Side work, first clients, testing the market.",
        ],
        [
          "CA LLC (disregarded)",
          "Yes, if you respect the veil.",
          "$800 + LLC fee over $250k receipts.",
          "Default for a solo consultancy.",
        ],
        [
          "CA LLC + S corp election",
          "Same LLC shield.",
          "Greater of $800 or 1.5% of S corp net. No LLC fee. Payroll instead of SE tax on salary.",
          "Sustained profit roughly $80k–$100k+ and a CPA who will run payroll.",
        ],
        [
          "C corporation",
          "Yes.",
          "8.84% CA franchise tax on net, min $800. Double tax on dividends.",
          "Venture-backed product companies. Almost never a solo contractor.",
        ],
        [
          "DE / WY LLC",
          "Yes, in that state.",
          "Still $800 in CA as a foreign LLC, plus home-state fees.",
          "A California resident should not do this.",
        ],
      ],
    },
    { type: "h2", id: "when", text: "When it is worth $800" },
    {
      type: "ul",
      items: [
        "You have savings, equity in a home, or a spouse’s income you do not want sitting next to client work.",
        "A client’s vendor form asks for an EIN, insurance certificate, and “legal entity name.” Many procurement teams will not pay to a SSN.",
        "You might hire a contractor, take on a partner, or sell a small product later. Starting as an LLC is cheaper than converting later in a hurry.",
        "You want a clean books trail for a mortgage, visa, or future S corp election.",
      ],
    },
    { type: "h2", id: "when-not", text: "When to wait" },
    {
      type: "ul",
      items: [
        "You have not landed a paid client. Do not pay $800 to a dormant company. You can still buy a domain and write a one-pager.",
        "This is a three-month moonlighting gig while you have a W-2 with indemnification and no personal assets of note. A sole prop plus a contract is enough for many people.",
        "You are about to leave California. Forming here and then moving does not turn the lights off — you must cancel with SOS and file a final 568 or you will keep getting billed $800.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "Cancelling takes paperwork.",
      text: "Closing the bank account does not stop the tax. File a short-form cancellation (SOS LLC-4/7) and a final FTB return. If you cancel within 12 months of organizing, FTB says you can avoid the first-year $800.",
    },
    { type: "h2", id: "delaware", text: "The Delaware / Wyoming trap" },
    {
      type: "p",
      text: "Delaware is designed for venture corporations with out-of-state investors and Delaware Chancery Court. Wyoming markets anonymity. Neither helps a person who lives in Oakland and Slacks with a client in Austin.",
    },
    {
      type: "p",
      text: "California’s “doing business” definition is aggressive. Living here, working here, or having a client who receives the benefit of your services here is enough. A 2025 Office of Tax Appeals decision confirmed you can owe the $800 even when you miss the bright-line sales/property/payroll thresholds, if you are simply transacting for profit in the state.",
    },
    {
      type: "p",
      text: "If you form elsewhere and then work from California you typically:",
    },
    {
      type: "ol",
      items: [
        "Pay the other state’s formation and annual report.",
        "Register as a *foreign* LLC with California SOS (another filing fee).",
        "Pay California’s $800 and file Form 568 anyway.",
        "Maintain two registered agents and two sets of records. Gain nothing on income tax.",
      ],
    },
    {
      type: "p",
      text: "Form in California. If you later raise institutional money for a product company, a lawyer will tell you whether to flip into a Delaware C corp. That is a different business.",
    },
    { type: "h2", id: "pllc", text: "You are not a PLLC" },
    {
      type: "p",
      text: "California restricts LLCs for some licensed professions (law, medicine, accountancy, architecture, and similar). Software engineering is not on that list. You file a regular LLC. Do not put “Professional” or “P.C.” in the name. Do not imply you are a licensed engineer with “P.E.” unless you actually are.",
    },
    {
      type: "p",
      text: "Name rules live in [Corporations Code § 17701.08](official:nameRules): the words Limited Liability Company, LLC, or L.L.C. must appear; bank, trust, incorporated, and insurance are banned.",
    },
    { type: "h2", id: "ab5", text: "AB 5 still applies" },
    {
      type: "p",
      text: "Forming an LLC does not make you a lawful independent contractor under California’s ABC test. Your *client* still has to classify you correctly. Many software consultancies rely on the business-to-business exception (Labor Code § 2776): you are a bona fide business, you have a contract, you have a business license, you can work for others, you provide your own tools, and you actually behave like a vendor.",
    },
    {
      type: "p",
      text: "If one FAANG-shaped client is 95% of your revenue, sets your hours, and hands you a laptop, an LLC letterhead will not save them — or you — in an audit. Diversify clients. Use your own equipment. Invoice per milestones, not via timesheet.",
    },
    {
      type: "p",
      text: "Continue to [how to file](page:/form) if you are forming.",
    },
  ],
} satisfies GuideCopy;

const form = {
  metaTitle: "How to form a California LLC",
  metaDescription:
    "File Articles yourself on bizfile: name, agent, $70 LLC-1, EIN, bank, Statement of Information, city tax, and the $800 FTB payment — in order.",
  kicker: "Formation",
  title: "How to actually open the LLC",
  lede: "Filing a California single-member consulting LLC online can be done in a weekend. The hard part is preparing the operating agreement, setting up a business bank account, handling local taxes, and not forgetting the $800 annual fee.",
  toc: [
    { id: "sequence", label: "The sequence" },
    { id: "checklist", label: "Interactive checklist" },
    { id: "name", label: "Name and agent" },
    { id: "articles", label: "Articles of Organization" },
    { id: "oa", label: "Operating agreement" },
    { id: "ein-bank", label: "EIN and bank" },
    { id: "soi", label: "Statement of Information" },
    { id: "local", label: "City and county" },
    { id: "after", label: "Then you can invoice" },
  ],
  blocks: [
    { type: "h2", id: "sequence", text: "The sequence" },
    {
      type: "ol",
      items: [
        "Search the name on bizfile. Decide member-managed vs manager-managed.",
        "Pick an agent for service of process with a California street address.",
        "File Articles of Organization online — $70. [bizfile Online](official:bizfile).",
        "Sign an operating agreement dated the formation date.",
        "Get a free EIN. [IRS EIN application](official:ein).",
        "Open a business checking account. Move no personal cash in casually.",
        "File the initial Statement of Information within 90 days — $20.",
        "Pay the $800 to FTB with [voucher 3522](official:ftbLlc) by the 15th day of the 4th month after SOS filing.",
        "Check [CalGOLD](official:calgold) and your city finance portal for a local business tax.",
        "Insurance, MSA/SOW templates, W-9, bookkeeping. Then invoice.",
      ],
    },
    {
      type: "callout",
      tone: "official",
      title: "Where the state wants you",
      text: "Formations go through the Secretary of State. The $800 and Form 568 go to the Franchise Tax Board. They do not talk to each other. Paying one does not notify the other.",
    },
    { type: "h2", id: "checklist", text: "Interactive checklist" },
    {
      type: "p",
      text: "Check items off as you finish them. Progress stays in this browser.",
    },
    { type: "checklist" },
    { type: "h2", id: "name", text: "Name and agent" },
    { type: "h3", text: "Name" },
    {
      type: "p",
      text: "Search existing names on bizfile before you get attached to a brand. SOS only checks distinguishability in its own database — not USPTO trademarks and not domain names. Do both searches yourself.",
    },
    /////
    {
      type: "ul",
      items: [
        "Must contain Limited Liability Company, LLC, or L.L.C. ([§ 17701.08](official:nameRules)).",
        "Cannot include bank, trust, trustee, incorporated, inc., corporation, corp., insurer, or insurance company.",
        "Optional name reservation is $10 if you are waiting on a bank or a cofounder. Most people just file.",
        "If you want to invoice as “Smith.dev” while the legal name is “Smith Engineering LLC,” file a fictitious business name in the county where you operate. That is a county clerk process, not SOS, and often requires a newspaper publication.",
      ],
    },
    { type: "h3", text: "Agent for service of process" },
    {
      type: "p",
      text: "Someone the sheriff can find if you are sued. Two options:",
    },
    {
      type: "ul",
      items: [
        "**You.** Must be a California resident with a street address (not a P.O. box). That address is a public record. Using a home address is legal and common; it also publishes where you live.",
        "**A registered corporate agent** that has a 1505 filing with SOS. Typically $50–$300 a year. Useful if you do not want your apartment on the internet, or you travel.",
      ],
    },
    {
      type: "p",
      text: "You must have the corporation’s consent before listing them. Do not invent a CT Corporation number.",
    },
    { type: "h2", id: "articles", text: "Articles of Organization" },
    {
      type: "p",
      text: "File [Form LLC-1](official:llc1Pdf) online. Paper mail is slower and, for many filers, no longer the path SOS wants. The form asks for:",
    },
    {
      type: "ul",
      items: [
        "LLC name.",
        "Principal office street address and mailing address.",
        "Agent.",
        "Management: member-managed (you run it) or manager-managed (you appoint a manager — used in multi-member deals). Solo consultants almost always choose **member-managed**.",
        "Organizer signature — that can be you.",
      ],
    },
    {
      type: "p",
      text: "Purpose can be the statutory default: “to engage in any lawful act or activity.” You do not need to describe “software consulting” on the Articles. Save the NAICS code (often 541511 custom programming or 541512 systems design) for the EIN form, bank, and city license.",
    },
    {
      type: "p",
      text: "Standard processing is a few business days. Same-day SOS “preclearance” runs hundreds of dollars. You do not need it unless a closing depends on a file-stamped copy this afternoon.",
    },
    {
      type: "p",
      text: "Optional certified copy is $5. Banks sometimes ask for it. Download the file-stamped PDF from bizfile first; that is usually enough.",
    },
    { type: "h2", id: "oa", text: "Operating agreement" },
    {
      type: "p",
      text: "California recognizes oral and implied operating agreements. Banks, the IRS, and anyone trying to pierce the veil want a **written** one. It is not filed with SOS.",
    },
    { type: "p", text: "A single-member agreement should at least:" },
    {
      type: "ul",
      items: [
        "State that you are the sole member and 100% owner.",
        "State member-managed.",
        "Authorize opening accounts and signing contracts.",
        "Say how profits are allocated (to you) and how you take draws.",
        "Cover what happens on death or incapacity — successor member.",
        "Confirm the LLC may elect S corporation status later without rewriting the whole thing.",
      ],
    },
    {
      type: "p",
      text: "Do not copy a multi-member Delaware template and leave “Units” and “Board” in it. A California business attorney can produce a clean solo agreement for a few hundred dollars. That is a better spend than a formation mill.",
    },
    { type: "h2", id: "ein-bank", text: "EIN and bank" },
    {
      type: "p",
      text: "Apply for an EIN only on IRS.gov. You will choose “LLC” and “one member,” responsible party = you, start date = SOS file date. Print the CP 575 / confirmation. There is no fee.",
    },
    {
      type: "p",
      text: "Take to the bank: Articles, EIN letter, operating agreement, your driver’s license. Some banks also want the Statement of Information once it exists. Open checking first; a business savings or brokerage can wait. Get a debit card in the LLC name. Pay AWS, Cursor, and health insurance (if you deduct it) from this account.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "Commingling is how veils get pierced",
      text: "Paying a client invoice into your personal Venmo, then “owing” the LLC, is how you look like a sole proprietor in court. Route every dollar through the LLC account. Pay yourself with a labeled transfer.",
    },
    { type: "h2", id: "soi", text: "Statement of Information" },
    {
      type: "p",
      text: "Form LLC-12, $20, within 90 days of formation, then every two years in a six-month window tied to the anniversary month. It lists addresses, members/managers, agent, and a business description. Late: $250 penalty, assessed by FTB on SOS’s behalf. Calendar it. bizfile will sometimes email; do not rely on the email.",
    },
    { type: "h2", id: "local", text: "City and county" },
    {
      type: "p",
      text: "There is no California statewide business license. [CalGOLD](official:calgold) points at state permits (you likely need none for pure consulting). Cities are another story:",
    },
    {
      type: "ul",
      items: [
        "**San Francisco** — Business Registration with the Treasurer & Tax Collector, plus a gross-receipts tax that is not optional once you are over small-business thresholds.",
        "**Los Angeles** — Business Tax Registration Certificate. First-year relief sometimes exists; do not assume.",
        "**San Jose, Oakland, Sacramento, San Diego** — each has its own registration and often a tax on gross receipts or payroll.",
        "Home occupation permits and HOA rules if you see clients at the house (most engineers never do).",
      ],
    },
    {
      type: "p",
      text: "If you live in one city and your “office” is a WeWork in another, ask the city finance departments which one taxes you. Getting this wrong is a classic surprise bill.",
    },
    { type: "h2", id: "after", text: "Then you can invoice" },
    {
      type: "p",
      text: "Send a W-9 with the LLC name and EIN (not your SSN). Sign MSAs as “Smith Engineering LLC, by John Smith, Member.” Put the legal name on the invoice footer with the California address.",
    },
    {
      type: "p",
      text: "Next: [what you will owe the FTB and IRS](page:/taxes) and [how software is treated](page:/software).",
    },
  ],
} satisfies GuideCopy;

const taxes = {
  metaTitle: "California LLC taxes: $800, LLC fee, S corp",
  metaDescription:
    "The $800 franchise tax, gross-receipts LLC fee, self-employment tax, S corporation election, PTE tax, and QBI for a California single-member LLC.",
  kicker: "Taxes",
  title: "What you will actually pay",
  lede: "A California single-member LLC does not replace your 1040. It adds an $800 franchise tax, a possible gross-receipts fee, a Form 568 information return, and — if you elect S corporation status — payroll and a 1.5% entity tax. Income tax still lands on you.",
  toc: [
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
  ],
  blocks: [
    { type: "h2", id: "default", text: "Default: disregarded" },
    {
      type: "p",
      text: "One owner, no election: the IRS treats the LLC as a disregarded entity. Profit and expenses go on Schedule C of your Form 1040. Self-employment tax is computed on Schedule SE. You issue yourself no W-2.",
    },
    {
      type: "p",
      text: "California follows the federal classification. You still file **Form 568** (Limited Liability Company Return of Income) and pay the LLC tax/fee even though the income is already on your personal California return (Form 540, Schedule CA). Form 568 is an entity return, not a substitute for 540.",
    },
    {
      type: "p",
      text: "Multi-member LLCs default to partnership taxation (Form 1065 federally, still 568 in California). That is a different briefing. If you add a spouse as a member, talk to a CPA before you do it — community property and partnership status interact.",
    },
    { type: "h2", id: "eight", text: "The $800" },
    {
      type: "p",
      text: "Every LLC organized in California, or doing business here, pays an annual tax of $800. Official source: [FTB LLC page](official:ftbLlc), last updated March 5, 2026.",
    },
    {
      type: "ul",
      items: [
        "First payment: 15th day of the 4th month after you file with SOS. Form in June → due mid-September. Pay with FTB 3522 or Web Pay.",
        "Later years (calendar year): April 15, every year, until you cancel.",
        "You owe it at $0 revenue. You owe it if you forgot the LLC existed.",
        "The 2021–2023 first-year waiver (AB 85) is finished. LLCs formed in 2024, 2025, or 2026 pay year one.",
        "If you cancel with SOS within 12 months of organizing, FTB says the first-year $800 can be avoided. Do not form “just in case.”",
      ],
    },
    {
      type: "p",
      text: "Forming late in the year stacks two $800 payments in the following spring. The estimator on the [briefing](page:/) flags that.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Budget trailer bills",
      text: "In 2026 the Legislature discussed cutting the first-year tax for entities formed in 2027–2029. Do not plan a 2026 formation around a future cut. Confirm anything after 2026 on the FTB page before you rely on it.",
    },
    { type: "h2", id: "fee", text: "Gross-receipts LLC fee" },
    {
      type: "p",
      text: "Separate from the $800. If California total income — a gross-receipts concept, not profit — is $250,000 or more, you also pay:",
    },
    { type: "llcFeeTable" },
    {
      type: "p",
      text: "Estimate and pay with FTB 3536 by the 15th day of the 6th month (June 15 for a calendar-year LLC). Reconcile on Form 568. Underpaying the estimate can draw a penalty.",
    },
    {
      type: "p",
      text: "“Total income” is not “I netted $80k after AWS.” High billings with high contractor costs can still trip $250k. If you are near a cliff, accelerating or deferring invoices can be worth a CPA hour.",
    },
    {
      type: "p",
      text: "LLCs that elect to be taxed as corporations **do not pay this fee**. They pay corporation tax instead (for an S corp, 1.5% of net, minimum $800).",
    },
    {
      type: "h2",
      id: "federal",
      text: "Federal income and self-employment tax",
    },
    {
      type: "p",
      text: "Disregarded LLC profit is self-employment income. 2026 rates:",
    },
    {
      type: "ul",
      items: [
        "Social Security 12.4% on net earnings from self-employment, up to the [$184,500 wage base](official:ssaWageBase).",
        "Medicare 2.9% on all net earnings (no cap).",
        "Additional Medicare 0.9% on earnings above $200,000 single / $250,000 married filing jointly.",
        "SE tax is computed on 92.35% of net profit. Half of SE tax is deductible for income tax.",
      ],
    },
    {
      type: "p",
      text: "Ordinary federal income tax then applies to taxable income at 2026 brackets. Software consulting is ordinary income, not capital gain, unless you sell the company.",
    },
    { type: "h2", id: "pit", text: "California personal income tax" },
    {
      type: "p",
      text: "California taxes your LLC profit on Form 540. Marginal rates run from low single digits up to 12.3%, plus the 1.1% mental-health tax on taxable income over $1 million. There is no state self-employment tax, but there is also no state QBI deduction — California does not conform to IRC § 199A.",
    },
    {
      type: "p",
      text: "If you perform services from California, the income is California source even if the client sits in New York. If you move mid-year or work from another state, apportionment gets technical; do not guess.",
    },
    { type: "h2", id: "scorp", text: "S corporation election" },
    {
      type: "p",
      text: "An LLC may elect S corporation status with IRS Form 2553. California generally follows. You then:",
    },
    {
      type: "ul",
      items: [
        "Pay yourself a reasonable W-2 salary.",
        "Run payroll: withholding, FICA (12.4% SS split employer/employee + 2.9% Medicare), FUTA, California PIT withholding, EDD unemployment and employment training tax.",
        "Take remaining profit as distributions, which are not subject to SE tax or FICA. That is the entire federal play.",
        "File Form 1120-S federally and Form 100S in California. Pay the greater of $800 or **1.5% of California S corp net income**.",
        "Skip the LLC gross-receipts fee.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "Reasonable salary is not a decoration",
      text: "The IRS has decades of cases against consultants who paid themselves $24,000 and took $200,000 of distributions. For a hands-on engineer who is the product, salary is often the majority of profit, not a token. A payroll service and a CPA opinion are part of the cost. Below roughly $80k–$100k of steady profit, the $800 / 1.5%, payroll, workers’ comp questions, and extra returns often eat the FICA savings.",
    },
    {
      type: "p",
      text: "File 2553 by March 15 of the year you want the election, or within 75 days of formation for a new entity. Late elections are possible under relief procedures; do not assume.",
    },
    {
      type: "p",
      text: "Once you have a W-2, you are an employer. Read [EDD payroll](official:edd) and [workers’ compensation](official:dirWc). Officer exemptions exist on paper and fail in practice more often than internet forums admit.",
    },
    { type: "h2", id: "pte", text: "Pass-through entity elective tax" },
    {
      type: "p",
      text: "California lets qualifying partnerships and S corporations pay a 9.3% entity-level tax so owners can deduct state tax federally above the SALT cap. Official: [FTB PTE page](official:ftbPte). Extended through taxable years beginning before 2031.",
    },
    {
      type: "p",
      text: "**A disregarded single-member LLC cannot make the election.** You need partnership or S corp tax status. The June 15 prepayment is the greater of $1,000 or 50% of last year’s PTE tax. From 2026, missing it no longer voids the election but haircuts each owner’s credit by 12.5% of their share of the shortfall.",
    },
    {
      type: "p",
      text: "This is a high-income planning tool, not a year-one move. If you are in the top California brackets, ask a CPA whether S corp + PTE beats disregarded + SE tax in your actual return, not a Twitter thread.",
    },
    { type: "h2", id: "qbi", text: "QBI (federal only)" },
    {
      type: "p",
      text: "IRC § 199A lets you deduct up to 20% of qualified business income on the federal return. California does not allow it. For 2026 the deduction is easier below about $201,750 taxable income single / $403,500 joint (thresholds are inflation-adjusted — verify annually).",
    },
    {
      type: "p",
      text: "Specified service trades or businesses (SSTBs), including consulting, lose QBI above the phaseout. Custom software development is often *not* an SSTB; “IT strategy consulting” often is. The line is advice versus delivering a program. Do not decide this from a blog. If you are near the threshold, classification is real money.",
    },
    {
      type: "p",
      text: "QBI does not reduce self-employment tax. An S corp salary also changes the QBI math (W-2 wages can help the wage limit above the threshold).",
    },
    { type: "h2", id: "estimates", text: "Quarterly estimates" },
    {
      type: "p",
      text: "The $800 is not your only prepayment. If you expect to owe $1,000+ of federal tax, pay 1040-ES quarterly (generally April 15, June 15, September 15, January 15). California has its own 540-ES. Underpayment penalties are how freelancers meet the FTB.",
    },
    {
      type: "p",
      text: "A workable habit: every time a client pays, move 30–40% of the net into a separate savings account titled to the LLC (or a tax reserve you do not touch). Adjust after the first year when you know your effective rate.",
    },
    {
      type: "p",
      text: "Annual California LLC calendar (calendar-year filer):",
    },
    {
      type: "ul",
      items: [
        "April 15 — $800 (FTB 3522) and usually Form 568 / 540.",
        "June 15 — LLC fee estimate (3536) if you will clear $250k.",
        "June 15 — PTE first payment, if you are eligible and electing.",
        "Statement of Information — every two years, $20.",
      ],
    },
    { type: "h2", id: "sales", text: "Sales tax is usually not yours" },
    {
      type: "p",
      text: "Custom software and professional programming services are generally **not** subject to California sales tax. Prewritten (“canned”) software, software on tangible media, and some SaaS-adjacent transfers can be. Details live on the [selling code](page:/software) page with Regulation 1502.",
    },
    {
      type: "p",
      text: "Do not collect tax “just in case.” Do not ignore it if you start selling a downloadable product. Wrong collection is as painful as failing to collect.",
    },
  ],
} satisfies GuideCopy;

const software = {
  metaTitle: "California sales tax on custom software",
  metaDescription:
    "Sales tax, IP assignment, contracts, AB 5, and insurance for a California software engineering LLC selling custom development versus canned software.",
  kicker: "The actual business",
  title: "Selling your engineering through an LLC",
  lede: "The LLC is the wrapper. The product is still your time, judgment, and code. California sales tax, copyright, contractor classification, and insurance are where software consultancies actually get hurt — not the $70 Articles.",
  toc: [
    { id: "what", label: "What you are selling" },
    { id: "sales-tax", label: "Sales and use tax" },
    { id: "ip", label: "Intellectual property" },
    { id: "contracts", label: "Contracts that matter" },
    { id: "ab5", label: "AB 5 and clients" },
    { id: "insurance", label: "Insurance" },
    { id: "ops", label: "Day-to-day operations" },
  ],
  blocks: [
    { type: "h2", id: "what", text: "What you are selling" },
    {
      type: "p",
      text: "Most readers of this manual are selling *services*: design, implementation, review, staffing a gap on a product team. A smaller set also sell a product: a SaaS, a plugin, a downloadable tool, a training course. Tax and contract treatment split along that line.",
    },
    {
      type: "ul",
      items: [
        "**Time and custom work** — billed hourly, weekly, or fixed-price against a SOW. This is a consultancy. Sales tax generally does not apply. IP must be assigned in writing or it stays with you under copyright’s default (you wrote it).",
        "**A product many customers use** — canned software, licenses, hosted apps. Different tax, different TOS, different insurance, and often a different entity conversation (sometimes a C corp if you raise). Do not mix both into one sloppy MSA.",
      ],
    },
    {
      type: "p",
      text: "NAICS codes you will be asked for: 541511 (custom computer programming), 541512 (systems design), 541519 (other computer-related). Pick the one that matches the majority of revenue. City tax forms and banks care more than SOS does.",
    },
    { type: "h2", id: "sales-tax", text: "Sales and use tax" },
    {
      type: "p",
      text: "California taxes the retail sale of tangible personal property. It generally does not tax professional services. Software sits on the fault line. The statute and regulation:",
    },
    {
      type: "ul",
      items: [
        "[Revenue & Taxation Code § 6010.9](official:rtc60109) — “sale” does not include the design, development, writing, or transfer of a *custom computer program* (other than a basic operational program), in any form.",
        "[CDTFA Regulation 1502](official:cdtfa1502) — computers, programs, and data processing. Custom vs prewritten, load-and-leave, remote access, maintenance, training.",
      ],
    },
    { type: "h3", text: "Usually not taxable" },
    {
      type: "ul",
      items: [
        "Custom programs prepared to the special order of one customer, even if you reuse libraries and snippets. Transfer by git, tarball, or a USB stick does not make it taxable if it is custom.",
        "Separately stated charges for custom modifications to a prewritten program.",
        "True consulting, architecture, code review, and training not tied to a mandatory software sale.",
      ],
    },
    { type: "h3", text: "Often taxable" },
    {
      type: "ul",
      items: [
        "Prewritten / canned software held for general sale — including something you originally built custom and then productized.",
        "Software delivered on tangible media (USB, disc) when it is prewritten.",
        "Bundled deals where the customer cannot buy the hardware or canned software without buying your “services,” and you did not separately state custom work. CDTFA has annotations on this exact fact pattern for computer consultants.",
        "Optional maintenance that includes updates to prewritten software can be taxable; optional unbundled consulting often is not. The invoices have to match the story.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "SaaS is fact-specific",
      text: "California has spent years arguing about remotely accessed software. Hosted applications, digital goods, and “information services” are not one rule. If you sell a multi-tenant product for a monthly fee, get a CDTFA written opinion or a sales-tax specialist — do not copy a 2014 blog. Custom one-off development billed to a single client is the clean case.",
    },
    {
      type: "p",
      text: "You generally do **not** need a seller’s permit to only provide nontaxable custom programming. If you sell any taxable TPP (laptops you mark up, books, canned software, branded merch), you need a permit even if it is 2% of revenue. Register with CDTFA, do not with FTB.",
    },
    {
      type: "p",
      text: "You still pay *use tax* when you buy equipment, SaaS, or tools from out-of-state sellers who did not collect California tax. That is on you as the buyer, reported on your California return or a CDTFA use-tax account.",
    },
    { type: "h2", id: "ip", text: "Intellectual property" },
    {
      type: "p",
      text: "Copyright in code you write vests in you (or the LLC, if the LLC is the author via work you make for the company) until you assign it. Clients often drop a one-page “all work product is our work made for hire.” California and federal work-for-hire rules are narrower than that sentence. If they want ownership, sign an assignment. If you want to keep your libraries, say so.",
    },
    {
      type: "ul",
      items: [
        "**Background IP** — your snippets, templates, internal CLI, prior blog posts. License them; do not assign.",
        "**Foreground IP** — what you build under the SOW. Usually assigned on payment, not on kickoff.",
        "**Open source** — you cannot assign what you do not own. List third-party licenses. Do not drop a GPL component into a client’s proprietary product unless they agree.",
        "**Trained models and prompts** — say who owns outputs, whether client data may be used to train, and what happens to logs.",
      ],
    },
    {
      type: "p",
      text: "Put the LLC on the copyright line and the GitHub org. Personal repos with client code are how NDAs get broken.",
    },
    { type: "h2", id: "contracts", text: "Contracts that matter" },
    { type: "p", text: "Do not start a repo on a handshake. The stack:" },
    {
      type: "ol",
      items: [
        "**Master services agreement** — status (independent contractor), payment, IP, confidentiality, non-solicit (be careful; some California non-solicits are unenforceable), limitation of liability, insurance, termination.",
        "**Statement of work** — deliverables, dates, fees, assumptions, what “done” means. Change orders exist so scope creep has a price.",
        "**W-9** — LLC legal name, tax classification (disregarded / individual, or S corp once elected), EIN.",
      ],
    },
    { type: "p", text: "Engineer-specific clauses worth fighting for:" },
    {
      type: "ul",
      items: [
        "Liability cap at fees paid in the prior 12 months. Unlimited liability for a solo LLC is how you lose the house the LLC was meant to protect.",
        "No uncapped indemnity for IP unless you wrote it from scratch and were paid. Exclude open source and client-furnished material.",
        "Payment in 15 days, not “Net 90 because procurement.” Late interest is allowed; collections are cheaper than pride.",
        "You are not their employee. You use your own equipment. You may serve other clients. (This also feeds the AB 5 business-to-business exception.)",
      ],
    },
    { type: "h2", id: "ab5", text: "AB 5 and clients" },
    {
      type: "p",
      text: "Covered on [Should you?](page:/should-you) because people form LLCs thinking it solves classification. It does not. The ABC test still applies. The business-to-business exception (Labor Code § 2776) is the usual path for a genuine consultancy: separate location or home office, business license, other clients or the ability to have them, your own tools, a contract in the business name.",
    },
    {
      type: "p",
      text: "Some large companies will only engage you through a staffing firm (W-2) because their counsel will not sign up for ABC risk. That is a business decision, not a moral failing. You can still have an LLC for everyone else.",
    },
    { type: "h2", id: "insurance", text: "Insurance" },
    {
      type: "p",
      text: "Enterprise MSAs will demand a certificate of insurance. Typical ask:",
    },
    {
      type: "ul",
      items: [
        "**Professional liability / errors & omissions** — the one that matters when your code ships a bug. Often $1M per occurrence. A few hundred to a couple thousand a year for a solo with clean work.",
        "**General liability** — slip-and-fall, not segfaults. Cheap. Often bundled. Clients still want it.",
        "**Cyber / tech E&O** — if you touch production data, PII, or HIPAA-adjacent systems. Sometimes folded into E&O.",
        "**Workers’ compensation** — required if you have employees. Some clients demand it even for a single-member LLC; you may need a policy or a legally valid exemption letter. See [DIR](official:dirWc).",
      ],
    },
    {
      type: "p",
      text: "Name the client as additional insured when they ask and your policy allows it. Send the cert from the broker, not a Photoshop.",
    },
    { type: "h2", id: "ops", text: "Day-to-day operations" },
    {
      type: "ul",
      items: [
        "Invoice from the LLC. Accept ACH/wire to the LLC. Avoid payment apps tied only to your SSN.",
        "Track time or milestones well enough to defend a collections action and a tax audit.",
        "Deduct ordinary expenses: laptop depreciation or § 179, home office if it qualifies, software subscriptions, conference travel, a portion of health insurance if you are eligible for the self-employed deduction, retirement (SEP IRA or solo 401(k) — the latter needs a plan document, preferably before December).",
        "1099-NEC: if the LLC is disregarded, clients may 1099 you as an individual with the EIN or SSN depending on how they read the W-9. If you are an S corp, they generally should not 1099 you for services, but many still will. Keep the W-9 consistent.",
        "Do not hire employees “off the books.” California is not the state for that experiment.",
      ],
    },
    {
      type: "p",
      text: "Stay in good standing: [calendar and checklist](page:/compliance).",
    },
  ],
} satisfies GuideCopy;

const compliance = {
  metaTitle: "California LLC compliance calendar",
  metaDescription:
    "Statement of Information, the $800 FTB tax, suspension, records, and how to cancel a California LLC so it stops billing you.",
  kicker: "Compliance",
  title: "How not to get suspended",
  lede: "California will let the LLC go dormant, then bill you $800 a year plus penalties until someone notices. Good standing is a short list: Statement of Information, FTB tax, and a live agent. Miss those and you cannot sue, you cannot legally contract, and the name can walk away.",
  toc: [
    { id: "calendar", label: "The calendar" },
    { id: "checklist", label: "Formation checklist" },
    { id: "suspended", label: "Suspension is a real status" },
    { id: "records", label: "Records" },
    { id: "close", label: "How to close it" },
    { id: "boi", label: "Beneficial ownership" },
  ],
  blocks: [
    { type: "h2", id: "calendar", text: "The calendar" },
    {
      type: "p",
      text: "Put these on a calendar that is not your brain. Recurring, with alerts a month out.",
    },
    {
      type: "ul",
      items: [
        "**Formation + 90 days** — initial Statement of Information, $20, [bizfile](official:bizfile).",
        "**15th day of the 4th month after SOS filing** — first $800, FTB 3522. [FTB LLC](official:ftbLlc).",
        "**Every April 15** (calendar-year LLC) — $800 again, Form 568, and your 540. Extension to file is not an extension to pay.",
        "**Every June 15** — LLC fee estimate (3536) if California total income will hit $250,000. PTE prepayment if you elect.",
        "**Every two years**, six-month window starting the anniversary month — Statement of Information, $20. Late: $250.",
        "**Federal quarters** — 1040-ES. California 540-ES on a similar cadence.",
        "**City tax** — SF, LA, and others have their own annual dates. Look them up once and copy them here.",
        "**Insurance** — renewal, and updated certs before MSA anniversaries.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "SOS and FTB are different buildings",
      text: "Paying the $800 does not file the Statement of Information. Filing the Statement does not pay the $800. Each agency can suspend you independently.",
    },
    { type: "h2", id: "checklist", text: "Formation checklist" },
    {
      type: "p",
      text: "Same list as [Form it](page:/form), kept here so you can actually use it after you close the tab.",
    },
    { type: "checklist" },
    { type: "h2", id: "suspended", text: "Suspension is a real status" },
    {
      type: "p",
      text: "If FTB suspends the LLC (unpaid tax) or SOS suspends it (missing Statement of Information), the company cannot bring a lawsuit in California, and counterparties can attack contracts. Banks get nervous. The name becomes available. Reviving means paying back-taxes, penalties, and sometimes a revival fee. It is always more expensive than the original $20 or $800.",
    },
    {
      type: "p",
      text: "Check status on bizfile before a big contract. Search your file number. “Active” is the only word you want.",
    },
    { type: "h2", id: "records", text: "Records" },
    { type: "p", text: "Keep, indefinitely or at least seven years:" },
    {
      type: "ul",
      items: [
        "File-stamped Articles and all Statements of Information.",
        "Operating agreement and any amendments.",
        "EIN letter.",
        "Bank statements and a general ledger (even a CSV).",
        "Signed MSAs, SOWs, change orders, and invoices.",
        "Insurance policies and certificates.",
        "Payroll records if you are an S corp.",
        "Tax returns: 1040, 540, 568, 1120-S, 100S as applicable.",
      ],
    },
    {
      type: "p",
      text: "California does not require annual member minutes for an LLC, but a one-page annual consent (“member confirms the operating agreement, authorizes tax filings, elects to continue”) is cheap evidence that the company is not a drawer of receipts.",
    },
    { type: "h2", id: "close", text: "How to close it" },
    {
      type: "ol",
      items: [
        "Stop taking work in the LLC name. Finish or assign contracts.",
        "Pay final vendors. Collect final invoices. Zero the account.",
        "File a tax clearance / cancellation with SOS (LLC-4/7 short form if you qualify, otherwise the longer cancellation).",
        "File a final Form 568 with the “final” box checked, and a final 540 if it is also your last year of the activity.",
        "Close the EIN account with IRS correspondence if they require it.",
        "Cancel city registrations and insurance.",
      ],
    },
    {
      type: "p",
      text: "Until SOS and FTB both show cancelled, assume the $800 is still accruing. “I moved to Texas” is not a filing.",
    },
    { type: "h2", id: "boi", text: "Beneficial ownership reports" },
    {
      type: "p",
      text: "FinCEN’s Corporate Transparency Act beneficial-ownership reporting for domestic companies was sharply narrowed in 2025; as of 2026 most U.S.-formed LLCs are not expected to file BOI reports. This area moved fast. Check [fincen.gov/boi](https://www.fincen.gov/boi) before you pay a compliance vendor for a CTA filing. Do not confuse it with California’s Statement of Information — that one you still file.",
    },
  ],
} satisfies GuideCopy;

const resources = {
  metaTitle: "Official California LLC links",
  metaDescription:
    "Secretary of State, Franchise Tax Board, IRS, and CDTFA pages this manual cites — not formation-mill ads.",
  kicker: "Sources",
  title: "Go to the agencies, not the ads",
  lede: "Every figure in this manual traces to a state or federal page. Formation mills will rank above these in search. Bookmark the official ones.",
  blocks: [
    { type: "h2", id: "list", text: "Primary sources" },
    { type: "linksList" },
    { type: "h2", id: "people", text: "Humans worth paying" },
    {
      type: "p",
      text: "After you have formed: a California CPA who actually files 568s (not only 1040s), and a business attorney for the MSA if you are signing anything with uncapped indemnity or a large IP assignment. Payroll, if you elect S corp, is a specialist product — Gusto, Rippling, and peers exist because EDD notices are not a hobby.",
    },
    {
      type: "p",
      text: "This site will not refer you to a mill. If a homepage leads with “form your LLC in 10 minutes for $39 plus state fees,” keep scrolling to bizfile.",
    },
  ],
} satisfies GuideCopy;

const about = {
  metaTitle: "About",
  metaDescription:
    "Who writes the California LLC Field Manual, where the figures come from, and why this is not a law firm.",
  kicker: "About",
  title: "A field manual, not a law firm",
  lede: "This site exists so a California software engineer can decide whether to form an LLC, file it without a mill, and know what the $800 actually buys — without sitting through a webinar.",
  blocks: [
    { type: "h2", id: "who", text: "Who writes this" },
    {
      type: "p",
      text: "A software engineer in California. I am not a lawyer, a CPA, an enrolled agent, or a registered tax preparer. Nothing here is legal, tax, or insurance advice for your facts.",
    },
    { type: "h2", id: "sources", text: "Where the numbers come from" },
    {
      type: "p",
      text: "Fees, due dates, and tax rules are taken from California Secretary of State forms, Franchise Tax Board LLC guidance (updated March 5, 2026), CDTFA Regulation 1502, IRS publications, and the SSA 2026 contribution and benefit base. Last reviewed August 2026. Confirm them on the [official pages](page:/resources) before you pay or elect anything.",
    },
    {
      type: "p",
      text: "This site is not affiliated with the Secretary of State, the Franchise Tax Board, the IRS, CDTFA, or any formation mill.",
    },
    { type: "h2", id: "ads", text: "How the site stays up" },
    {
      type: "p",
      text: "Once Google approves the publisher account, display ads may appear. They are labeled. The manual still will not send you to LegalZoom. See [Privacy](page:/privacy) for cookies and opt-outs.",
    },
  ],
} satisfies GuideCopy;

const privacy = {
  metaTitle: "Privacy",
  metaDescription:
    "What this site stores in your browser, how Google ads and analytics work, and how to opt out of personalized ads in California.",
  kicker: "Privacy",
  title: "Privacy policy",
  lede: "This site does not have accounts. It does not want your Social Security number. A few third parties may still see that you visited, which is what this page is for.",
  blocks: [
    { type: "h2", id: "collect", text: "What we collect" },
    {
      type: "p",
      text: "The formation checklist is saved in your browser’s local storage. It never leaves your device. There is no login, mailing list, or server-side profile.",
    },
    {
      type: "p",
      text: "The host (Vercel) and the browser’s request itself produce ordinary technical logs — IP address, user agent, pages requested — used to run and debug the site. We do not sell those logs.",
    },
    { type: "h2", id: "ads", text: "Advertising (Google AdSense)" },
    {
      type: "p",
      text: "When ads are enabled, Google AdSense may use cookies and similar technology to show ads, measure them, and (unless you opt out) personalize them. Google’s policies: [Google Privacy](https://policies.google.com/privacy) and [how Google uses data on partner sites](https://policies.google.com/technologies/partner-sites).",
    },
    {
      type: "p",
      text: "Opt out of personalized Google ads at [adssettings.google.com](https://adssettings.google.com). California residents can also use the opt-out Google shows under US state regulations in AdSense Privacy & messaging. We do not sell personal information for money. Personalized advertising can still count as a “sale” or “sharing” under CCPA/CPRA; the Google controls are how you say no.",
    },
    { type: "h2", id: "analytics", text: "Analytics" },
    {
      type: "p",
      text: "If Google Analytics is configured, Google may collect usage data (pages viewed, approximate location, device) under [Google’s privacy policy](https://policies.google.com/privacy). We use it to see whether anyone is reading this, not to identify you.",
    },
    { type: "h2", id: "cookies", text: "Cookies" },
    {
      type: "p",
      text: "This site does not set first-party tracking cookies. Google may set cookies for ads or analytics when those products are on. You can block cookies in your browser; ads may still show, just less tailored.",
    },
    { type: "h2", id: "children", text: "Children" },
    {
      type: "p",
      text: "This manual is for adults forming a business. It is not directed at children under 13.",
    },
    { type: "h2", id: "changes", text: "Changes" },
    {
      type: "p",
      text: "If this policy changes, the date on this page will change. Last updated August 2026.",
    },
    { type: "h2", id: "contact", text: "Contact" },
    {
      type: "p",
      text: "Questions about privacy: [Contact](page:/contact).",
    },
  ],
} satisfies GuideCopy;

const contact = {
  metaTitle: "Contact",
  metaDescription:
    "Corrections and questions about the California LLC Field Manual. Not a place to get legal or tax advice.",
  kicker: "Contact",
  title: "Contact",
  lede: "Corrections to fees, links, or dates are welcome. Advice about your LLC is not something this inbox can give you.",
  blocks: [
    { type: "h2", id: "reach", text: "How to reach the author" },
    {
      type: "p",
      text: "If a figure looks wrong, or an official URL moved, say so. If you need an entity formed or a tax election, that is a California CPA and a business attorney — [official starting points](page:/resources).",
    },
  ],
} satisfies GuideCopy;

const contactUi = {
  emailLine:
    "Email [{email}](mailto:{email}). Do not send tax returns, EINs, or anything you would not put on a postcard.",
  githubLine:
    "You can also open an issue on [GitHub](https://github.com/dwwr/ca-llc-field-manual).",
  noEmailLine:
    "No public email is configured yet. Open an issue on [GitHub](https://github.com/dwwr/ca-llc-field-manual).",
};

const llcFeeTable = {
  incomeHeader: "California total income",
  feeHeader: "Annual LLC fee",
  range: "{min} – {max}",
  andUp: "{min} and up",
};

export const COPY = {
  site,
  nav,
  checklistUi,
  checklist,
  estimator,
  home,
  shouldYou,
  form,
  taxes,
  software,
  compliance,
  resources,
  about,
  privacy,
  contact,
  contactUi,
  llcFeeTable,
};

export type Copy = typeof COPY;
export type EstimatorCopy = typeof estimator;
export type SiteCopy = typeof site;
export type ChecklistUiCopy = typeof checklistUi;
