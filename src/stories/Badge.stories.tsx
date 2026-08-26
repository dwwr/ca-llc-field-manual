import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@/components/ui/badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  args: {
    children: "FTB",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary", children: "SOS" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "CDTFA" },
};

export const Row: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>$800</Badge>
      <Badge variant="secondary">Form 568</Badge>
      <Badge variant="outline">bizfile</Badge>
      <Badge variant="destructive">Suspended</Badge>
    </div>
  ),
};
