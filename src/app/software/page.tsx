import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";

export const metadata = {
  title: COPY.software.metaTitle,
};

export default function SoftwarePage() {
  return <GuidePage page={COPY.software} />;
}
