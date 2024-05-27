import type { Meta, StoryObj } from "@storybook/react";
import { M5ProductCard, M5ProductCardProps } from "@molecules/M5ProductCard";
import { mockFeaturesProductFeatures } from "@data/mock/motocycleFeatures";
import {
  swatchesMock,
  swatchesMockWithOne,
} from "@data/mock/motocycleSwatches";

export default {
  title: "Molecules/M5ProductCard",
  component: M5ProductCard,
} as Meta;

type Story = StoryObj<typeof M5ProductCard>;

export const Default: Story = {
  args: {
    variant: "CTA",
    name: "Product Name",
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c50994cc_18d1_4776_87d4_7f17e0b118d5_a90073aca6.webp",
    link: "/",
  },
  render: (props: M5ProductCardProps) => (
    <div style={{ width: "20vw" }}>
      <M5ProductCard {...props} />
    </div>
  ),
};

export const CTA: Story = {
  args: {
    variant: "CTA",
    name: "Product Name",
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c50994cc_18d1_4776_87d4_7f17e0b118d5_a90073aca6.webp",
    link: "/",
  },
  render: (props: M5ProductCardProps) => (
    <div style={{ width: "20vw" }}>
      <M5ProductCard {...props} />
    </div>
  ),
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    name: "Product Name",
    price: 5000000,
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c50994cc_18d1_4776_87d4_7f17e0b118d5_a90073aca6.webp",
    link: "/",
  },
  render: (props: M5ProductCardProps) => (
    <div style={{ width: "20vw" }}>
      <M5ProductCard {...props} />
    </div>
  ),
};

export const Full: Story = {
  args: {
    variant: "full",
    name: "Product Name",
    price: 5000000,
    priceDiscounted: 4000000,
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c50994cc_18d1_4776_87d4_7f17e0b118d5_a90073aca6.webp",
    link: "/",
    pickupPoint: "Pickup Point",
    features: mockFeaturesProductFeatures,
    swatches: swatchesMock,
  },
  render: (props: M5ProductCardProps) => (
    <div style={{ width: "20vw" }}>
      <M5ProductCard {...props} />
    </div>
  ),
};

export const OnSale: Story = {
  args: {
    variant: "full",
    name: "Product Name",
    price: 5000000,
    priceDiscounted: 4000000,
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c50994cc_18d1_4776_87d4_7f17e0b118d5_a90073aca6.webp",
    link: "/",
    pickupPoint: "Pickup Point",
    features: mockFeaturesProductFeatures,
    swatches: swatchesMock,
    isOnSale: true,
  },
  render: (props: M5ProductCardProps) => (
    <div style={{ width: "20vw" }}>
      <M5ProductCard {...props} />
    </div>
  ),
};

export const WithBadge: Story = {
  args: {
    variant: "full",
    name: "Product Name",
    price: 5000000,
    priceDiscounted: 4000000,
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c50994cc_18d1_4776_87d4_7f17e0b118d5_a90073aca6.webp",
    link: "/",
    pickupPoint: "Pickup Point",
    features: mockFeaturesProductFeatures,
    swatches: swatchesMock,
    badge: "Badge",
  },
  render: (props: M5ProductCardProps) => (
    <div style={{ width: "20vw" }}>
      <M5ProductCard {...props} />
    </div>
  ),
};

export const WithSingleSwatch: Story = {
  args: {
    variant: "full",
    name: "Product Name",
    price: 5000000,
    priceDiscounted: 4000000,
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c50994cc_18d1_4776_87d4_7f17e0b118d5_a90073aca6.webp",
    link: "/",
    pickupPoint: "Pickup Point",
    features: mockFeaturesProductFeatures,
    swatches: swatchesMockWithOne,
  },
  render: (props: M5ProductCardProps) => (
    <div style={{ width: "20vw" }}>
      <M5ProductCard {...props} />
    </div>
  ),
};
