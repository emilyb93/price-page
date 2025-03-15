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

export const IconNoDefault: Story = {
  args: {
    isHover: false,
  },
  render: (args) => {
    return (
      <div className="bg-violet-100 dark:bg-gray-700 w-10 h-10 flex items-center justify-center">
        <IconNo {...args} />
      </div>
    );
  },
};
export const IconNoFocus: Story = {
  args: {
    isHover: true,
  },
  render: (args) => {
    return (
      <div className="bg-violet-700 w-10 h-10 flex items-center justify-center">
        <IconNo {...args} />
      </div>
    );
  },
};
