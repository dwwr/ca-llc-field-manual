import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Disclaimer } from "@/components/disclaimer";
import { COPY } from "@/lib/copy";

const meta = {
  title: "Guide/Disclaimer",
  component: Disclaimer,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Disclaimer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: COPY.site.disclaimer },
};

export const Compact: Story = {
  args: { text: COPY.site.disclaimer, compact: true },
};
