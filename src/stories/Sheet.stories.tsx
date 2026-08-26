import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const meta = {
  title: "UI/Sheet",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open menu</Button>} />
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="font-heading">Sections</SheetTitle>
          <SheetDescription>
            Same sheet pattern as the mobile site header.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-2 pb-6">
          <a className="rounded-lg px-3 py-2 hover:bg-muted" href="/should-you">
            Should you?
          </a>
          <a className="rounded-lg px-3 py-2 hover:bg-muted" href="/form">
            Form it
          </a>
          <a className="rounded-lg px-3 py-2 hover:bg-muted" href="/taxes">
            Taxes
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  ),
};
