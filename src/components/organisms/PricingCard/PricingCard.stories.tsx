import type { Meta, StoryObj } from "@storybook/react";

import PricingCard, { PlanInfo } from "./PricingCard";

const meta = {
  title: "Molecules/PricingCard",
  component: PricingCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const testCardInfo: PlanInfo = {
  title: "Professional",
  subtitle:
    "Ideal for individuals who need advanced features and tools for client work.",
  price: 25,
  features: [
    { featureText: "20,000+ of PNG & SVG graphics", available: true },
    { featureText: "Access to 100 million stock images", available: true },
    { featureText: "Upload custom icons and fonts", available: true },
    { featureText: "Unlimited Sharing", available: true },
    { featureText: "Upload graphics & video in up to 4k", available: true },
    { featureText: "Unlimited Projects", available: true },
    { featureText: "Instant Access to our design system", available: false },
    { featureText: "Create teams to collaborate on designs", available: false },
  ],
};

export const PricingCardPrimary: Story = {
  args: {
    level: "primary",
    planInfo: testCardInfo,
  },
};
export const PricingCardSecondary: Story = {
  args: {
    level: "secondary",
    planInfo: testCardInfo,
  },
};
