import { GuideShell, H2 } from "@/components/guide-shell";
import { OfficialLink } from "@/components/links";
import { LINKS } from "@/lib/links";

export const metadata = {
  title: "Official links",
};

export default function ResourcesPage() {
  return (
    <GuideShell
      kicker="Sources"
      title="Go to the agencies, not the ads"
      lede="Every figure in this manual traces to a state or federal page. Formation mills will rank above these in search. Bookmark the official ones."
    >
      <H2 id="list">Primary sources</H2>
      <ul className="not-prose mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {Object.values(LINKS).map((item) => (
          <li key={item.href} className="px-4 py-3">
            <OfficialLink href={item.href} className="font-medium">
              {item.label}
            </OfficialLink>
            <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
          </li>
        ))}
      </ul>
      <div className="prose-manual">
        <H2 id="people">Humans worth paying</H2>
        <p>
          After you have formed: a California CPA who actually files 568s
          (not only 1040s), and a business attorney for the MSA if you are
          signing anything with uncapped indemnity or a large IP assignment.
          Payroll, if you elect S corp, is a specialist product — Gusto,
          Rippling, and peers exist because EDD notices are not a hobby.
        </p>
        <p>
          This site will not refer you to a mill. If a homepage leads with
          “form your LLC in 10 minutes for $39 plus state fees,” keep
          scrolling to bizfile.
        </p>
      </div>
    </GuideShell>
  );
}
