import type { Meta, StoryObj } from "@storybook/react";

import Feature from "./Feature";

const meta = {
  title: "Molecules/Feature",
  component: Feature,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

const testFeatures = [
  { text: "20,000+ of PNG and SVG graphics", available: true },
  { text: "Upload custom icons and fonts", available: false },
];

export const FeatureAvailable: Story = {
  args: {
    ...testFeatures[0],
  },
};
export const FeatureUnavailable: Story = {
  args: {
    ...testFeatures[1],
  },
};
