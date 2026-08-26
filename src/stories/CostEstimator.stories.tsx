import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CostEstimator } from "@/components/cost-estimator";
import { COPY } from "@/lib/copy";

const meta = {
  title: "Guide/CostEstimator",
  component: CostEstimator,
  parameters: { layout: "padded" },
} satisfies Meta<typeof CostEstimator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { copy: COPY.estimator },
};
