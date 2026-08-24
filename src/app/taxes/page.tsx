import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";

export const metadata = {
  title: COPY.taxes.metaTitle,
};

export default function TaxesPage() {
  return <GuidePage page={COPY.taxes} />;
}
