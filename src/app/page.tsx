import { HomeView } from "@/components/content";
import { COPY } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata(
    "/",
    COPY.site.metaTitle,
    COPY.home.metaDescription,
    "website"
  ),
  title: { absolute: COPY.site.metaTitle },
};

export default function HomePage() {
  return <HomeView />;
}
