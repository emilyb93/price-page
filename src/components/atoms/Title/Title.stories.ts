import type { Meta, StoryObj } from "@storybook/react";

import Title from "./Title";

const meta = {
  title: "Atoms/Title",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleFullScreen: Story = {};
