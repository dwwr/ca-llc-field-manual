import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

const meta = {
  title: "UI/Progress",
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <Progress value={42} />,
};

export const WithLabel: Story = {
  render: () => (
    <Progress value={75}>
      <ProgressLabel>Formation checklist</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
};

export const Empty: Story = {
  render: () => <Progress value={0} />,
};
