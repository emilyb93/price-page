import type { Meta, StoryObj } from "@storybook/react";

import PriceText from "./PriceText";

const meta = {
  title: "Atoms/PriceText",
  component: PriceText,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PriceText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PriceTextDefault: Story = {
  args: {
    price: 25,
  },
};
