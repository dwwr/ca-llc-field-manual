"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  MONTHS,
  estimate,
  formatUsd,
  llcGrossReceiptsFee,
} from "@/lib/fees";
import { Callout } from "@/components/callout";

function firstValue(v: number | readonly number[]) {
  return Array.isArray(v) ? (v[0] ?? 0) : v;
}

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

export function CostEstimator() {
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
          <CardTitle className="font-heading text-xl">
            What California will charge you
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Rough entity-level cost for a California-resident solo engineer
            billing clients. Income tax on the profit still sits on your 1040
            and 540 either way.
          </p>
        </CardHeader>
        <CardContent className="space-y-7">
          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <Label htmlFor="gross">Expected California-source receipts</Label>
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
            <p className="text-xs text-muted-foreground">
              Gross receipts the FTB uses for the LLC fee — generally your
              California-source billings, not profit.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <Label htmlFor="exp">Deductible expenses</Label>
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
              <Label>Formation month (2026)</Label>
              <Select
                value={String(month)}
                onValueChange={(v) => setMonth(Number(v))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MONTHS.map((name, i) => (
                    <SelectItem key={name} value={String(i)}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Registered agent</Label>
              <Select
                value={String(agent)}
                onValueChange={(v) => setAgent(Number(v))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Yourself (free)</SelectItem>
                  <SelectItem value="125">Commercial (~$125/yr)</SelectItem>
                  <SelectItem value="300">Premium (~$300/yr)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <label className="flex items-start gap-3 text-sm">
            <Checkbox
              checked={sCorp}
              onCheckedChange={(v) => setSCorp(Boolean(v))}
              className="mt-0.5"
            />
            <span>
              <span className="font-medium">Model an S corporation election</span>
              <span className="mt-0.5 block text-muted-foreground">
                Pays a reasonable W-2 salary; leftover profit as distributions.
                California then charges 1.5% of S corp net income (minimum $800)
                instead of the LLC gross-receipts fee.
              </span>
            </span>
          </label>

          {sCorp ? (
            <div className="space-y-3 rounded-lg border border-border bg-muted/40 p-4">
              <div className="flex items-baseline justify-between">
                <Label htmlFor="sal">Reasonable salary</Label>
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
                A common starting point for a hands-on consultant is about 50–60%
                of profit ({formatUsd(defaultSalary)} here). Too low and the IRS
                recharacterizes distributions as wages.
              </p>
            </div>
          ) : null}
        </CardContent>
      </Card>

      <div className="space-y-4 lg:sticky lg:top-20 h-fit">
        <Card className="shadow-none ring-1 ring-primary/20">
          <CardHeader className="pb-2">
            <p className="text-[11px] font-medium tracking-[0.16em] text-primary uppercase">
              Year-one entity cost
            </p>
            <p className="font-heading text-4xl font-semibold tracking-tight tabular-nums">
              {formatUsd(result.yearOneEntityCost)}
            </p>
            <p className="text-sm text-muted-foreground">
              SOS filings + California entity tax
              {sCorp ? " (S corp 1.5% / $800)" : " ($800 + LLC fee if any)"}
            </p>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <Row
              label="Articles + first Statement of Information"
              value={formatUsd(70 + 20)}
              muted
            />
            {agent > 0 ? (
              <Row label="Registered agent" value={formatUsd(agent)} muted />
            ) : null}
            {sCorp ? (
              <Row
                label="CA S corp tax (greater of $800 or 1.5%)"
                value={formatUsd(result.sCorpTax)}
              />
            ) : (
              <>
                <Row label="Annual LLC tax (FTB 3522)" value={formatUsd(800)} />
                <Row
                  label={
                    llcFeeAtGross
                      ? "LLC fee (gross receipts)"
                      : "LLC fee (under $250k)"
                  }
                  value={formatUsd(result.llcFee)}
                />
              </>
            )}
            <Separator className="my-2" />
            <Row
              label="Each later year (approx.)"
              value={formatUsd(result.ongoingEntityCost)}
            />
            <Row
              label="First $800 due"
              value={result.firstDue.label.replace(", 2026", "").replace(", 2027", " ’27")}
              muted
            />
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Payroll / SE tax (federal)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <Row label="Net profit modeled" value={formatUsd(result.profit)} />
            {sCorp ? (
              <Row
                label="Employer + employee FICA on salary"
                value={formatUsd(result.payrollTax)}
              />
            ) : (
              <Row
                label="Self-employment tax (15.3% on 92.35%)"
                value={formatUsd(result.seTax)}
              />
            )}
            <p className="pt-1 text-xs leading-relaxed text-muted-foreground">
              {sCorp
                ? "S corp savings only exist on profit above a defensible salary. Add a payroll service ($40–$80/mo), EDD registration, and usually workers’ compensation. This card does not include those."
                : "Self-employment tax is the 12.4% Social Security + 2.9% Medicare levy on net earnings. Half is deductible on the 1040. An LLC taxed as a disregarded entity does not reduce this."}
            </p>
          </CardContent>
        </Card>
      </div>

      {gross === 0 ? (
        <Callout tone="note" title="Empty year">
          With $0 receipts you still owe the $70 filing fee, $20 Statement of
          Information, and $800 annual tax — about $890 to exist, then $800
          every year until you cancel with the Secretary of State.
        </Callout>
      ) : null}

      {result.twoPayments ? (
        <div className="lg:col-span-2">
          <Callout tone="warn" title="Two $800 bills close together">
            Forming in {MONTHS[month]} means the first-year tax is due{" "}
            {result.firstDue.label}, and the second-year tax is due April 15 of
            that same calendar year. Budget $1,600 to FTB in a short window, not
            one $800.
          </Callout>
        </div>
      ) : null}

      {result.nextFeeCliff && gross >= 200000 && !sCorp ? (
        <div className="lg:col-span-2">
          <Callout tone="note" title="Gross-receipts cliff">
            At {formatUsd(result.nextFeeCliff.at)} of California total income
            the LLC fee jumps by {formatUsd(result.nextFeeCliff.extra)}. The
            fee is based on receipts, not profit — a high-bill, high-expense
            year can still trigger it. An S corp election replaces this fee
            with the 1.5% income tax.
          </Callout>
        </div>
      ) : null}
    </div>
  );
}
