import type { Meta, StoryObj } from "@storybook/react";

import GetStartedButton from "./GetStartedButton";

const meta = {
  title: "Atoms/GetStartedButton",
  component: GetStartedButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof GetStartedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GetStartedButtonDefault: Story = {
  args: {
    setPeriod: () => {},
  },
};
