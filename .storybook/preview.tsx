import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "manual",
      values: [{ name: "manual", value: "oklch(0.965 0.012 85)" }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
