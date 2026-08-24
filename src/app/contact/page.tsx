import { GuidePage } from "@/components/content";
import { COPY } from "@/lib/copy";
import { guideMetadata } from "@/lib/seo";
import { getContactEmail } from "@/lib/site";
import { interpolate } from "@/lib/utils";

export const metadata = guideMetadata("/contact", COPY.contact);

export default function ContactPage() {
  const email = getContactEmail();
  return (
    <GuidePage
      page={{
        ...COPY.contact,
        blocks: [
          ...COPY.contact.blocks,
          {
            type: "p",
            text: email
              ? interpolate(COPY.contactUi.emailLine, { email })
              : COPY.contactUi.noEmailLine,
          },
          { type: "p", text: COPY.contactUi.githubLine },
        ],
      }}
      path="/contact"
      ads={false}
    />
  );
}
