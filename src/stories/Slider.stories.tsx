import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const meta = {
  title: "UI/Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <div className="w-80 space-y-3">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [180000],
    min: 0,
    max: 600000,
    step: 5000,
  },
};

export const WithLabel: Story = {
  render: () => (
    <>
      <div className="flex items-baseline justify-between">
        <Label>Deductible expenses</Label>
        <span className="font-mono text-sm tabular-nums">15%</span>
      </div>
      <Slider defaultValue={[15]} min={0} max={50} step={1} />
    </>
  ),
};
