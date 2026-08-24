import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";
import { guideMetadata } from "@/lib/seo";

export const metadata = guideMetadata("/resources", COPY.resources);

export default function ResourcesPage() {
  return <GuidePage page={COPY.resources} path="/resources" />;
}
