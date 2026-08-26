import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border border-border">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Vehicle</TableHead>
          <TableHead>CA entity tax</TableHead>
          <TableHead>When engineers use it</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Sole proprietor</TableCell>
          <TableCell>$0 entity tax</TableCell>
          <TableCell>Side work, first clients</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">CA LLC (disregarded)</TableCell>
          <TableCell>$800 + LLC fee over $250k</TableCell>
          <TableCell>Default for a solo consultancy</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">CA LLC + S corp</TableCell>
          <TableCell>Greater of $800 or 1.5%</TableCell>
          <TableCell>Sustained profit ~$80k–$100k+</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
