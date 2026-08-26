import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "UI/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Reyes Engineering LLC" },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="llc-name">LLC legal name</Label>
      <Input id="llc-name" defaultValue="Reyes Engineering LLC" />
    </div>
  ),
};

export const Invalid: Story = {
  args: {
    placeholder: "Required",
    "aria-invalid": true,
  },
};
