import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SiteFooter } from "@/components/site-footer";
import { COPY } from "@/lib/copy";

const meta = {
  title: "Chrome/SiteFooter",
  component: SiteFooter,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disclaimer: COPY.site.disclaimer,
    note: COPY.site.footerNote,
    legal: COPY.site.legalNav,
    legalAria: COPY.site.footerLegalAria,
  },
};
