"use client";

import { useEffect, useMemo, useState } from "react";
import { CHECKLIST } from "@/lib/checklist-data";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const STORAGE_KEY = "ca-llc-field-manual-checklist-v1";

export function FormationChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done, hydrated]);

  const completed = CHECKLIST.filter((item) => done[item.id]).length;
  const pct = useMemo(
    () => Math.round((completed / CHECKLIST.length) * 100),
    [completed]
  );

  return (
    <div className="not-prose space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold">
            {hydrated ? `${completed} of ${CHECKLIST.length} complete` : "Loading…"}
          </p>
          <p className="text-sm text-muted-foreground">
            Saved in this browser only. Not sent anywhere.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDone({})}
          disabled={!hydrated || completed === 0}
        >
          Reset
        </Button>
      </div>
      <Progress value={hydrated ? pct : 0} />
      <ol className="space-y-3">
        {CHECKLIST.map((item, index) => {
          const checked = Boolean(done[item.id]);
          return (
            <li
              key={item.id}
              className="rounded-xl border border-border bg-card p-4"
            >
              <label className="flex cursor-pointer gap-3">
                <Checkbox
                  className="mt-1"
                  checked={checked}
                  onCheckedChange={(v) =>
                    setDone((prev) => ({ ...prev, [item.id]: Boolean(v) }))
                  }
                />
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={
                        checked
                          ? "font-medium text-muted-foreground line-through"
                          : "font-medium"
                      }
                    >
                      {item.title}
                    </span>
                    <span className="text-[11px] tracking-wide text-primary uppercase">
                      {item.when}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-3"
                    >
                      Open official site
                      <ExternalLink className="size-3.5" />
                    </a>
                  ) : null}
                </span>
              </label>
            </li>
          );
        })}
      </ol>
      {hydrated && completed === 0 ? (
        <p className="text-sm text-muted-foreground">
          Nothing checked yet. Start with the name search — filing under a
          colliding name just bounces.
        </p>
      ) : null}
    </div>
  );
}
