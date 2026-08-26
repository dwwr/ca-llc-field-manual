import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="disregarded">
      <TabsList>
        <TabsTrigger value="disregarded">Disregarded</TabsTrigger>
        <TabsTrigger value="scorp">S corp</TabsTrigger>
      </TabsList>
      <TabsContent value="disregarded" className="mt-3 text-muted-foreground">
        Profit hits Schedule C. You still pay self-employment tax plus the $800.
      </TabsContent>
      <TabsContent value="scorp" className="mt-3 text-muted-foreground">
        Reasonable W-2 salary, distributions, and California 1.5% entity tax.
      </TabsContent>
    </Tabs>
  ),
};
