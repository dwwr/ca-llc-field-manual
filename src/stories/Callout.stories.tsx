import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Callout } from "@/components/callout";

const meta = {
  title: "Guide/Callout",
  component: Callout,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Note: Story = {
  args: {
    tone: "note",
    title: "Budget trailer bills",
    children:
      "Confirm anything after 2026 on the FTB page before you rely on it.",
  },
};

export const Warn: Story = {
  args: {
    tone: "warn",
    title: "SOS and FTB are different buildings",
    children:
      "Paying the $800 does not file the Statement of Information. Each agency can suspend you independently.",
  },
};

export const Official: Story = {
  args: {
    tone: "official",
    title: "Where the state wants you",
    children:
      "Formations go through the Secretary of State. The $800 and Form 568 go to the Franchise Tax Board.",
  },
};
