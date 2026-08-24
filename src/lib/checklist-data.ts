export type ChecklistItem = {
  id: string;
  title: string;
  detail: string;
  when: string;
  href?: string;
};

export const CHECKLIST: ChecklistItem[] = [
  {
    id: "name",
    title: "Search and lock a distinguishable LLC name",
    detail:
      "Must include LLC, L.L.C., or Limited Liability Company. Cannot use bank, trust, corp, or insurance. Search bizfile before you file. Optional $10 name reservation.",
    when: "Before filing",
    href: "https://bizfileonline.sos.ca.gov/",
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
    href: "https://bizfileonline.sos.ca.gov/",
  },
  {
    id: "oa",
    title: "Sign a written operating agreement",
    detail:
      "California does not require you to file it, but banks, the IRS, and veil-piercing analysis all want a written agreement — even for a single-member LLC. Date it as of formation. Keep it with your records.",
    when: "Week 1",
  },
  {
    id: "ein",
    title: "Get a free EIN from the IRS",
    detail:
      "Apply at IRS.gov. You need it for a business bank account, Form 568, and W-9s. Ignore any site that charges for this.",
    when: "Week 1",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
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
    href: "https://bizfileonline.sos.ca.gov/",
  },
  {
    id: "ftb800",
    title: "Pay the $800 annual LLC tax (FTB 3522)",
    detail:
      "Due the 15th day of the 4th month after you file with the SOS, then every year by April 15 for a calendar-year LLC. The 2021–2023 first-year waiver is gone. You owe this even with $0 revenue until you cancel the LLC.",
    when: "15th day of 4th month",
    href: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/",
  },
  {
    id: "local",
    title: "Pull city/county licenses on CalGOLD",
    detail:
      "California has no statewide general business license. San Francisco, Los Angeles, San Jose, Oakland, and others each collect their own tax or registration. A home-office permit may also apply.",
    when: "Before you invoice from that city",
    href: "https://www.calgold.ca.gov/",
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
