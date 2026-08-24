"use client";

import { useEffect } from "react";
import { COPY } from "@/lib/copy";
import { getAdsenseClient, getAdsenseSlot } from "@/lib/site";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export function AdSlot() {
  const client = getAdsenseClient();
  const slot = getAdsenseSlot();

  useEffect(() => {
    if (!client || !slot) {
      return;
    }
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense throws if the slot is already filled during hot reload.
    }
  }, [client, slot]);

  if (!client || !slot) {
    return null;
  }

  return (
    <aside className="not-prose my-8" aria-label={COPY.site.adLabel}>
      <p className="mb-2 text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
        {COPY.site.adLabel}
      </p>
      <ins
        className="adsbygoogle block overflow-hidden rounded-xl border border-border bg-card"
        style={{ display: "block", minHeight: 90 }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
