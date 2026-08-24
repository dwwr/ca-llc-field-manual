import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";
import { guideMetadata } from "@/lib/seo";

export const metadata = guideMetadata("/form", COPY.form);

export default function FormPage() {
  return <GuidePage page={COPY.form} path="/form" />;
}
