import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";
import { guideMetadata } from "@/lib/seo";

export const metadata = guideMetadata("/should-you", COPY.shouldYou);

export default function ShouldYouPage() {
  return <GuidePage page={COPY.shouldYou} path="/should-you" />;
}
