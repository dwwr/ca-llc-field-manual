import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { GuideShell, H2, H3 } from "@/components/guide-shell";
import { COPY } from "@/lib/copy";

const meta = {
  title: "Guide/GuideShell",
  component: GuideShell,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof GuideShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    kicker: "Formation",
    title: "How to actually open the LLC",
    lede: "A California single-member consulting LLC is a weekend of paperwork if you file online yourself.",
    disclaimer: COPY.site.disclaimer,
    onThisPage: COPY.site.onThisPage,
    toc: [
      { id: "sequence", label: "The sequence" },
      { id: "name", label: "Name and agent" },
    ],
    children: (
      <>
        <H2 id="sequence">The sequence</H2>
        <p>Search the name, pick an agent, file Articles, get an EIN.</p>
        <H3>Name</H3>
        <p>Must include LLC, L.L.C., or Limited Liability Company.</p>
      </>
    ),
  },
};
