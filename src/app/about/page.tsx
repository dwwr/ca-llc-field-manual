import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";
import { guideMetadata } from "@/lib/seo";

export const metadata = guideMetadata("/about", COPY.about);

export default function AboutPage() {
  return <GuidePage page={COPY.about} path="/about" ads={false} />;
}
