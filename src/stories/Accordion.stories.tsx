import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="articles">
        <AccordionTrigger>Articles of Organization</AccordionTrigger>
        <AccordionContent>
          File Form LLC-1 online for $70. Member-managed is the usual choice for a
          solo consultant.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="soi">
        <AccordionTrigger>Statement of Information</AccordionTrigger>
        <AccordionContent>
          $20 within 90 days of formation, then every two years. Late: $250.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="ftb">
        <AccordionTrigger>Annual LLC tax</AccordionTrigger>
        <AccordionContent>
          $800 to the FTB every year, even at $0 revenue, until you cancel.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
