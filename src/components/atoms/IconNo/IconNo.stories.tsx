import type { Meta, StoryObj } from "@storybook/react";

import IconNo from "./IconNo";

const meta = {
  title: "Atoms/IconNo",
  component: IconNo,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof IconNo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconNoDefault: Story = {};
