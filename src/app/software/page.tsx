import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";
import { guideMetadata } from "@/lib/seo";

export const metadata = guideMetadata("/software", COPY.software);

export default function SoftwarePage() {
  return <GuidePage page={COPY.software} path="/software" />;
}
