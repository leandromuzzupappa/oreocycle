import type { Meta, StoryObj } from "@storybook/react";
import { M2Card, M2CardProps } from "@molecules/M2Card";

import "@assets/styles/globals.css";

export default {
  title: "Molecules/M2Card",
  component: M2Card,
  argTypes: {
    classList: { control: "text" },
    headline: { control: "text" },
    description: { control: "text" },
    eyebrow: { control: "text" },
    ctaLabel: { control: "text" },
    slug: { control: "text" },
    image: { control: "text" },
    alt: { control: "text" },
    lazy: { control: "boolean" },
    overlay: { control: "object" },
  },
} as Meta;

type Story = StoryObj<typeof M2Card>;

export const Default: Story = {
  args: {
    headline: "Headline",
    description: "Description",
    eyebrow: "Eyebrow",
    ctaLabel: "CTA Label",
    slug: "/",
    image: "/images/he-1.jpg",
    alt: "Alt",
    lazy: false,
    overlay: false,
  },
  render: (props: M2CardProps) => (
    <div style={{ width: "20vw" }}>
      <M2Card {...props} />
    </div>
  ),
};

export const WithOverlay: Story = {
  args: {
    headline: "Headline",
    description: "Description",
    eyebrow: "Eyebrow",
    ctaLabel: "CTA Label",
    slug: "/",
    image: "/images/he-1.jpg",
    alt: "Alt",
    lazy: false,
    overlay: { show: true, color: "#000", opacity: 0.7 },
  },
  render: (props: M2CardProps) => (
    <div style={{ width: "20vw" }}>
      <M2Card {...props} />
    </div>
  ),
};

export const DescriptionCTA: Story = {
  args: {
    description: "Description",
    ctaLabel: "CTA Label",
    slug: "/",
    image: "/images/he-1.jpg",
    alt: "Alt",
    lazy: false,
    overlay: false,
  },
  render: (props: M2CardProps) => (
    <div style={{ width: "20vw" }}>
      <M2Card {...props} />
    </div>
  ),
};
