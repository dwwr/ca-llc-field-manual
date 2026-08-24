import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";
import { guideMetadata } from "@/lib/seo";

export const metadata = guideMetadata("/privacy", COPY.privacy);

export default function PrivacyPage() {
  return <GuidePage page={COPY.privacy} path="/privacy" ads={false} />;
}
