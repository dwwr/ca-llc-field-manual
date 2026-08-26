import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OfficialLink, PageLink } from "@/components/links";
import { LINKS } from "@/lib/links";

const meta = {
  title: "Guide/Links",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const OfficialAndPage: Story = {
  render: () => (
    <p className="text-sm leading-relaxed">
      File at{" "}
      <OfficialLink href={LINKS.bizfile.href}>{LINKS.bizfile.label}</OfficialLink>
      , then read{" "}
      <PageLink href="/taxes">Taxes</PageLink>.
    </p>
  ),
};
