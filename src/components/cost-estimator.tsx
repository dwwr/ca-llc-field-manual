"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { cn, interpolate } from "@/lib/utils";
import {
  FTB,
  MONTHS,
  SOS,
  estimate,
  formatUsd,
  llcGrossReceiptsFee,
} from "@/lib/fees";
import { Callout } from "@/components/callout";
import type { EstimatorCopy } from "@/lib/copy";

function firstValue(v: number | readonly number[]) {
  return Array.isArray(v) ? (v[0] ?? 0) : v;
}

const selectClass = cn(
  "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
);

function Row({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-sm">
      <span className={muted ? "text-muted-foreground" : ""}>{label}</span>
      <span className="font-mono tabular-nums">{value}</span>
    </div>
  );
}

export function CostEstimator({ copy }: { copy: EstimatorCopy }) {
  const [gross, setGross] = useState(180_000);
  const [expensePct, setExpensePct] = useState(15);
  const [month, setMonth] = useState(0);
  const [sCorp, setSCorp] = useState(false);
  const [salary, setSalary] = useState(96_000);
  const [agent, setAgent] = useState(0);

  const result = useMemo(
    () =>
      estimate({
        gross,
        expenseRate: expensePct / 100,
        formationMonth: month,
        sCorp,
        salary,
        registeredAgent: agent,
      }),
    [gross, expensePct, month, sCorp, salary, agent]
  );

  const defaultSalary = Math.round(Math.min(result.profit * 0.55, 140_000));
  const llcFeeAtGross = llcGrossReceiptsFee(gross);

  return (
    <div className="not-prose grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <Card className="shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="font-heading text-xl">{copy.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{copy.lede}</p>
        </CardHeader>
        <CardContent className="space-y-7">
          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <Label htmlFor="gross">{copy.grossLabel}</Label>
              <span className="font-mono text-sm tabular-nums">
                {formatUsd(gross)}
              </span>
            </div>
            <Slider
              id="gross"
              min={0}
              max={600000}
              step={5000}
              value={[gross]}
              onValueChange={(v) => setGross(firstValue(v))}
            />
            <p className="text-xs text-muted-foreground">{copy.grossHint}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <Label htmlFor="exp">{copy.expensesLabel}</Label>
              <span className="font-mono text-sm tabular-nums">
                {expensePct}% · {formatUsd(gross * (expensePct / 100))}
              </span>
            </div>
            <Slider
              id="exp"
              min={0}
              max={50}
              step={1}
              value={[expensePct]}
              onValueChange={(v) => setExpensePct(firstValue(v))}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="month">{copy.formationMonthLabel}</Label>
              <select
                id="month"
                className={selectClass}
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
              >
                {MONTHS.map((name, i) => (
                  <option key={name} value={i}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="agent">{copy.registeredAgentLabel}</Label>
              <select
                id="agent"
                className={selectClass}
                value={agent}
                onChange={(e) => setAgent(Number(e.target.value))}
              >
                {copy.registeredAgentOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Separator />

          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-muted/30 p-3 text-sm">
            <Checkbox
              checked={sCorp}
              onCheckedChange={(v) => setSCorp(v === true)}
              className="mt-0.5"
            />
            <span>
              <span className="font-medium">{copy.sCorpLabel}</span>
              <span className="mt-0.5 block text-muted-foreground">
                {copy.sCorpHint}
              </span>
            </span>
          </label>

          {sCorp ? (
            <div className="space-y-3 rounded-lg border border-border bg-muted/40 p-4">
              <div className="flex items-baseline justify-between">
                <Label htmlFor="sal">{copy.salaryLabel}</Label>
                <span className="font-mono text-sm tabular-nums">
                  {formatUsd(Math.min(salary, result.profit))}
                </span>
              </div>
              <Slider
                id="sal"
                min={0}
                max={Math.max(1000, Math.round(result.profit))}
                step={1000}
                value={[Math.min(salary, Math.max(0, result.profit))]}
                onValueChange={(v) => setSalary(firstValue(v))}
              />
              <p className="text-xs text-muted-foreground">
                {interpolate(copy.salaryHint, { salary: formatUsd(defaultSalary) })}
              </p>
            </div>
          ) : null}
        </CardContent>
      </Card>

      <div className="space-y-4 lg:sticky lg:top-20 h-fit">
        <Card className="shadow-none ring-1 ring-primary/20">
          <CardHeader className="pb-2">
            <p className="text-[11px] font-medium tracking-[0.16em] text-primary uppercase">
              {copy.yearOneKicker}
            </p>
            <p className="font-heading text-4xl font-semibold tracking-tight tabular-nums">
              {formatUsd(result.yearOneEntityCost)}
            </p>
            <p className="text-sm text-muted-foreground">
              {copy.yearOneSub}
              {sCorp ? copy.yearOneSubSCorp : copy.yearOneSubLlc}
            </p>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <Row
              label={copy.articlesRow}
              value={formatUsd(SOS.articlesOfOrganization + SOS.statementOfInformation)}
              muted
            />
            {agent > 0 ? (
              <Row label={copy.agentRow} value={formatUsd(agent)} muted />
            ) : null}
            {sCorp ? (
              <Row
                label={copy.sCorpTaxRow}
                value={formatUsd(result.sCorpTax)}
              />
            ) : (
              <>
                <Row
                  label={copy.llcTaxRow}
                  value={formatUsd(FTB.annualFranchiseTax)}
                />
                <Row
                  label={llcFeeAtGross ? copy.llcFeeRow : copy.llcFeeUnderRow}
                  value={formatUsd(result.llcFee)}
                />
              </>
            )}
            <Separator className="my-2" />
            <Row
              label={copy.laterYearRow}
              value={formatUsd(result.ongoingEntityCost)}
            />
            <Row
              label={copy.firstDueRow}
              value={result.firstDue.label.replace(", 2026", "").replace(", 2027", " ’27")}
              muted
            />
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{copy.payrollTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <Row label={copy.netProfitRow} value={formatUsd(result.profit)} />
            {sCorp ? (
              <Row label={copy.ficaRow} value={formatUsd(result.payrollTax)} />
            ) : (
              <Row label={copy.seTaxRow} value={formatUsd(result.seTax)} />
            )}
            <p className="pt-1 text-xs leading-relaxed text-muted-foreground">
              {sCorp ? copy.payrollNoteSCorp : copy.payrollNoteSe}
            </p>
          </CardContent>
        </Card>
      </div>

      {gross === 0 ? (
        <Callout tone="note" title={copy.emptyYearTitle}>
          {copy.emptyYearBody}
        </Callout>
      ) : null}

      {result.twoPayments ? (
        <div className="lg:col-span-2">
          <Callout tone="warn" title={copy.twoPaymentsTitle}>
            {interpolate(copy.twoPaymentsBody, {
              month: MONTHS[month],
              firstDue: result.firstDue.label,
            })}
          </Callout>
        </div>
      ) : null}

      {result.nextFeeCliff && gross >= 200000 && !sCorp ? (
        <div className="lg:col-span-2">
          <Callout tone="note" title={copy.cliffTitle}>
            {interpolate(copy.cliffBody, {
              at: formatUsd(result.nextFeeCliff.at),
              extra: formatUsd(result.nextFeeCliff.extra),
            })}
          </Callout>
        </div>
      ) : null}
    </div>
  );
}
