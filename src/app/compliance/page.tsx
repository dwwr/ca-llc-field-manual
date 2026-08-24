import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";
import { guideMetadata } from "@/lib/seo";

export const metadata = guideMetadata("/compliance", COPY.compliance);

export default function CompliancePage() {
  return <GuidePage page={COPY.compliance} path="/compliance" />;
}
