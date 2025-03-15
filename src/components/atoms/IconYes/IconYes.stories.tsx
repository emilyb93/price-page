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

export const IconYesDefault: Story = {
  args: {
    isHover: false,
  },
  render: (args) => {
    return (
      <div className="bg-violet-100 dark:bg-gray-700 w-10 h-10 flex items-center justify-center">
        <IconYes {...args} />
      </div>
    );
  },
};
export const IconYesFocus: Story = {
  args: {
    isHover: true,
  },
  render: (args) => {
    return (
      <div className="bg-violet-700 w-10 h-10 flex items-center justify-center">
        <IconYes {...args} />
      </div>
    );
  },
};
