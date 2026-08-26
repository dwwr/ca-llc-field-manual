import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "UI/Separator",
  component: Separator,
  decorators: [
    (Story) => (
      <div className="w-72 space-y-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <>
      <p className="text-sm">Articles + Statement of Information</p>
      <Separator />
      <p className="text-sm">Annual LLC tax (FTB 3522)</p>
    </>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-3">
      <span className="text-sm">SOS</span>
      <Separator orientation="vertical" />
      <span className="text-sm">FTB</span>
      <Separator orientation="vertical" />
      <span className="text-sm">IRS</span>
    </div>
  ),
};
