import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "@/components/ui/checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const WithLabel: Story = {
  render: () => (
    <label className="flex cursor-pointer items-center gap-2 text-sm">
      <Checkbox defaultChecked />
      <span>Model an S corporation election</span>
    </label>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, defaultChecked: true },
};
