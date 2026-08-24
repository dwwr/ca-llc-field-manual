/** California LLC and related 2026 figures, sourced from FTB, SOS, and SSA. */

export const SOS = {
  articlesOfOrganization: 70,
  certifiedCopy: 5,
  nameReservation: 10,
  statementOfInformation: 20,
  statementOfInformationLatePenalty: 250,
} as const;

export const FTB = {
  annualFranchiseTax: 800,
  llcFeeTiers: [
    { min: 0, max: 249_999, fee: 0 },
    { min: 250_000, max: 499_999, fee: 900 },
    { min: 500_000, max: 999_999, fee: 2_500 },
    { min: 1_000_000, max: 4_999_999, fee: 6_000 },
    { min: 5_000_000, max: Infinity, fee: 11_790 },
  ],
  sCorpRate: 0.015,
} as const;

export const FEDERAL_2026 = {
  socialSecurityWageBase: 184_500,
  socialSecurityRateEmployee: 0.062,
  medicareRateEmployee: 0.0145,
  additionalMedicareRate: 0.009,
  additionalMedicareThresholdSingle: 200_000,
  seSocialSecurityRate: 0.124,
  seMedicareRate: 0.029,
  seNetEarningsFactor: 0.9235,
  qbiRate: 0.2,
  qbiThresholdSingle: 201_750,
} as const;

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function llcGrossReceiptsFee(californiaIncome: number): number {
  const n = Math.max(0, Math.round(californiaIncome));
  const tier = FTB.llcFeeTiers.find((t) => n >= t.min && n <= t.max);
  return tier?.fee ?? 0;
}

export function nextLlcFeeThreshold(californiaIncome: number): {
  at: number;
  extra: number;
} | null {
  const n = Math.max(0, Math.round(californiaIncome));
  const current = llcGrossReceiptsFee(n);
  const next = FTB.llcFeeTiers.find((t) => t.fee > current);
  if (!next) return null;
  return { at: next.min, extra: next.fee - current };
}

/** 15th day of the 4th month after the tax year begins (formation date for year one). */
export function firstFranchiseTaxDue(formationMonthIndex: number, formationYear = 2026): {
  monthIndex: number;
  year: number;
  label: string;
} {
  const dueMonth = (formationMonthIndex + 3) % 12;
  const year = formationYear + (formationMonthIndex + 3 >= 12 ? 1 : 0);
  return {
    monthIndex: dueMonth,
    year,
    label: `${MONTHS[dueMonth]} 15, ${year}`,
  };
}

export function subsequentFranchiseTaxDue(formationYear = 2026): string {
  return `April 15, ${formationYear + 1}`;
}

export function twoPaymentsCloseTogether(formationMonthIndex: number): boolean {
  const first = firstFranchiseTaxDue(formationMonthIndex);
  if (first.year === 2026) return false;
  // Second calendar-year payment is April 15 of the year after formation.
  // If first payment also falls in Jan–April of that year, cash is tight.
  return first.monthIndex <= 3;
}

export function formatUsd(n: number, digits = 0): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(n);
}

export const FTB_LLC_FEE_BRACKETS = FTB.llcFeeTiers;

export function selfEmploymentTax(netProfit: number): {
  socialSecurity: number;
  medicare: number;
  additionalMedicare: number;
  total: number;
  netEarnings: number;
} {
  const profit = Math.max(0, netProfit);
  const netEarnings = profit * FEDERAL_2026.seNetEarningsFactor;
  const socialSecurity =
    Math.min(netEarnings, FEDERAL_2026.socialSecurityWageBase) *
    FEDERAL_2026.seSocialSecurityRate;
  const medicare = netEarnings * FEDERAL_2026.seMedicareRate;
  const additionalMedicare =
    Math.max(0, netEarnings - FEDERAL_2026.additionalMedicareThresholdSingle) *
    FEDERAL_2026.additionalMedicareRate;
  return {
    socialSecurity,
    medicare,
    additionalMedicare,
    total: socialSecurity + medicare + additionalMedicare,
    netEarnings,
  };
}

export function employmentFica(wages: number): {
  employee: number;
  employer: number;
  additionalMedicare: number;
  total: number;
} {
  const w = Math.max(0, wages);
  const ss =
    Math.min(w, FEDERAL_2026.socialSecurityWageBase) *
    FEDERAL_2026.socialSecurityRateEmployee;
  const medicare = w * FEDERAL_2026.medicareRateEmployee;
  const additionalMedicare =
    Math.max(0, w - FEDERAL_2026.additionalMedicareThresholdSingle) *
    FEDERAL_2026.additionalMedicareRate;
  const employee = ss + medicare + additionalMedicare;
  const employer = ss + medicare;
  return { employee, employer, additionalMedicare, total: employee + employer };
}

export function californiaSCorpTax(netIncome: number): number {
  return Math.max(FTB.annualFranchiseTax, netIncome * FTB.sCorpRate);
}

export type EstimateInput = {
  gross: number;
  expenseRate: number;
  formationMonth: number;
  sCorp: boolean;
  salary: number;
  registeredAgent: number;
};

export type EstimateResult = {
  profit: number;
  firstYearSos: number;
  ongoingSosAnnualized: number;
  franchiseTax: number;
  llcFee: number;
  sCorpTax: number;
  payrollTax: number;
  seTax: number;
  entityTax: number;
  yearOneEntityCost: number;
  ongoingEntityCost: number;
  firstDue: ReturnType<typeof firstFranchiseTaxDue>;
  twoPayments: boolean;
  nextFeeCliff: ReturnType<typeof nextLlcFeeThreshold>;
};

export function estimate(input: EstimateInput): EstimateResult {
  const gross = Math.max(0, input.gross);
  const expenseRate = Math.min(0.8, Math.max(0, input.expenseRate));
  const profit = gross * (1 - expenseRate);
  const firstDue = firstFranchiseTaxDue(input.formationMonth);
  const twoPayments = twoPaymentsCloseTogether(input.formationMonth);
  const nextFeeCliff = nextLlcFeeThreshold(gross);

  const firstYearSos =
    SOS.articlesOfOrganization + SOS.statementOfInformation + input.registeredAgent;
  const ongoingSosAnnualized = SOS.statementOfInformation / 2 + input.registeredAgent;

  if (!input.sCorp) {
    const llcFee = llcGrossReceiptsFee(gross);
    const seTax = selfEmploymentTax(profit).total;
    const franchiseTax = FTB.annualFranchiseTax;
    const entityTax = franchiseTax + llcFee;
    return {
      profit,
      firstYearSos,
      ongoingSosAnnualized,
      franchiseTax,
      llcFee,
      sCorpTax: 0,
      payrollTax: 0,
      seTax,
      entityTax,
      yearOneEntityCost: firstYearSos + entityTax,
      ongoingEntityCost: ongoingSosAnnualized + entityTax,
      firstDue,
      twoPayments,
      nextFeeCliff,
    };
  }

  const salary = Math.min(Math.max(0, input.salary), profit);
  const sCorpNet = profit - salary;
  const sCorpTax = californiaSCorpTax(sCorpNet);
  const payrollTax = employmentFica(salary).total;
  const seTax = 0;
  const llcFee = 0;
  const franchiseTax = 0;
  const entityTax = sCorpTax;

  return {
    profit,
    firstYearSos,
    ongoingSosAnnualized,
    franchiseTax,
    llcFee,
    sCorpTax,
    payrollTax,
    seTax,
    entityTax,
    yearOneEntityCost: firstYearSos + entityTax,
    ongoingEntityCost: ongoingSosAnnualized + entityTax,
    firstDue,
    twoPayments,
    nextFeeCliff,
  };
}
