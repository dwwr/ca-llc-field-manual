import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const meta = {
  title: "UI/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-56 space-y-2">
      <Label htmlFor="agent">Registered agent</Label>
      <Select defaultValue="0">
        <SelectTrigger id="agent" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Yourself (free)</SelectItem>
          <SelectItem value="125">Commercial (~$125/yr)</SelectItem>
          <SelectItem value="300">Premium (~$300/yr)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
