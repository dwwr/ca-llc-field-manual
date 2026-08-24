import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";
import { guideMetadata } from "@/lib/seo";

export const metadata = guideMetadata("/taxes", COPY.taxes);

export default function TaxesPage() {
  return <GuidePage page={COPY.taxes} path="/taxes" />;
}
