import { Disclaimer } from "@/components/disclaimer";

export function SiteFooter({
  disclaimer,
  note,
}: {
  disclaimer: string;
  note: string;
}) {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6">
        <Disclaimer text={disclaimer} compact />
        <p className="text-xs text-muted-foreground">{note}</p>
      </div>
    </footer>
  );
}
