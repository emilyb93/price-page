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

export const FeatureAvailableDefault: Story = {
  args: {
    ...testFeatures[0],
    isHover: false,
  },
};
export const FeatureUnavailableDefault: Story = {
  args: {
    ...testFeatures[1],
    isHover: false,
  },
};
export const FeatureAvailableFocus: Story = {
  args: {
    ...testFeatures[0],
    isHover: true,
  },
};
export const FeatureUnavailableFocus: Story = {
  args: {
    ...testFeatures[1],
    isHover: true,
  },
};
