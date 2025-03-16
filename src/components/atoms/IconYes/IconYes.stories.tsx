import type { Meta, StoryObj } from "@storybook/react";

import IconYes from "./IconYes";

const meta = {
  title: "Atoms/IconYes",
  component: IconYes,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof IconYes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconYesDefault: Story = {};
