import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";

export const metadata = {
  title: COPY.resources.metaTitle,
};

export default function ResourcesPage() {
  return <GuidePage page={COPY.resources} />;
}
