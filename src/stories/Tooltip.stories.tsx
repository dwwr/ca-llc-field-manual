import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const meta = {
  title: "UI/Tooltip",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex justify-center p-8">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger
        render={<Button variant="outline">Hover me</Button>}
      />
      <TooltipContent>First $800 is due the 15th of month 4</TooltipContent>
    </Tooltip>
  ),
};
