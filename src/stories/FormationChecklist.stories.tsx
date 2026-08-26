import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormationChecklist } from "@/components/formation-checklist";
import { COPY } from "@/lib/copy";

const meta = {
  title: "Guide/FormationChecklist",
  component: FormationChecklist,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FormationChecklist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: COPY.checklist.slice(0, 4),
    ui: COPY.checklistUi,
  },
};
