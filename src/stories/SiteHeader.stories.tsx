import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SiteHeader } from "@/components/site-header";
import { COPY } from "@/lib/copy";

const meta = {
  title: "Chrome/SiteHeader",
  component: SiteHeader,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nav: COPY.nav,
    site: COPY.site,
  },
};
