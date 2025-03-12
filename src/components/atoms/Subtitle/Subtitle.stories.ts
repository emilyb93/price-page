import type { Meta, StoryObj } from "@storybook/react";

import Subtitle from "./Subtitle";

const meta = {
  title: "Atoms/Subtitle",
  component: Subtitle,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubtitleFullScreen: Story = {};
