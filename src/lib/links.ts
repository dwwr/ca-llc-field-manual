export const LINKS = {
  bizfile: {
    href: "https://bizfileonline.sos.ca.gov/",
    label: "bizfile Online",
    note: "File Articles of Organization, Statement of Information, and name searches.",
  },
  sosLlc: {
    href: "https://www.sos.ca.gov/business-programs/business-entities/forms",
    label: "SOS business entity forms",
    note: "Official LLC forms and fee list.",
  },
  llc1Pdf: {
    href: "https://bpd.cdn.sos.ca.gov/llc/forms/llc-1.pdf",
    label: "Form LLC-1 (PDF)",
    note: "Articles of Organization. $70 filing fee printed on the form.",
  },
  ftbLlc: {
    href: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/",
    label: "FTB: Limited liability company",
    note: "$800 annual tax, LLC fee table, Form 568, due dates. Updated March 5, 2026.",
  },
  ftb3522: {
    href: "https://www.ftb.ca.gov/forms/search/",
    label: "FTB forms search (3522, 3536, 568)",
    note: "Pay the $800 with FTB 3522. Estimate the LLC fee with FTB 3536.",
  },
  ftbPte: {
    href: "https://www.ftb.ca.gov/file/business/credits/pass-through-entity-elective-tax/index.html",
    label: "FTB: PTE elective tax",
    note: "9.3% entity-level election. Disregarded single-member LLCs do not qualify.",
  },
  ein: {
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
    label: "IRS EIN application",
    note: "Free. Do not pay a third-party site for an EIN.",
  },
  form2553: {
    href: "https://www.irs.gov/forms-pubs/about-form-2553",
    label: "IRS Form 2553",
    note: "S corporation election. California generally follows the federal classification.",
  },
  cdtfa1502: {
    href: "https://cdtfa.ca.gov/lawguides/vol1/sutr/1502.html",
    label: "CDTFA Regulation 1502",
    note: "Computers, programs, and data processing — the sales-tax rule for software.",
  },
  rtc60109: {
    href: "https://cdtfa.ca.gov/lawguides/vol1/sutl/6010-9.html",
    label: "R&TC § 6010.9",
    note: "Custom computer programs are not a “sale” for California sales tax.",
  },
  calgold: {
    href: "https://www.calgold.ca.gov/",
    label: "CalGOLD",
    note: "State permit assistant. City and county licenses are not one statewide license.",
  },
  ssaWageBase: {
    href: "https://www.ssa.gov/oact/cola/cbb.html",
    label: "SSA contribution and benefit base",
    note: "2026 Social Security wage base is $184,500.",
  },
  nameRules: {
    href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CORP&sectionNum=17701.08",
    label: "Corporations Code § 17701.08",
    note: "LLC name must include LLC / L.L.C. / Limited Liability Company.",
  },
  corpCodeLlc: {
    href: "https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?tocCode=CORP&division=3.&title=2.6.",
    label: "California RULLCA (Corp. Code Title 2.6)",
    note: "The statute that governs California LLCs.",
  },
  edd: {
    href: "https://edd.ca.gov/en/payroll_taxes/",
    label: "EDD payroll taxes",
    note: "Required if you pay W-2 wages, including to yourself as an S corporation officer.",
  },
  dirWc: {
    href: "https://www.dir.ca.gov/dwc/employers.html",
    label: "DIR workers’ compensation",
    note: "Usually required once you have employees. Officer/member exclusions are narrow.",
  },
} as const;

/** Aliases used by some pages. */
export const LINKS_WITH_ALIASES = LINKS;
