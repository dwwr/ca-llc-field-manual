import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";

export const metadata = {
  title: COPY.compliance.metaTitle,
};

export default function CompliancePage() {
  return <GuidePage page={COPY.compliance} />;
}
