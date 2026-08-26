import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="font-heading text-xl">
          What California will charge you
        </CardTitle>
        <CardDescription>
          Rough entity-level cost for a California-resident solo engineer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-heading text-3xl font-semibold tracking-tight tabular-nums">
          $890
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Year-one SOS filings + $800 franchise tax
        </p>
      </CardContent>
    </Card>
  ),
};
