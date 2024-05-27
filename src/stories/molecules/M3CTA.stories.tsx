import type { Meta, StoryObj } from "@storybook/react";
import { M3CTA, M3CTAProps } from "@molecules/M3CTA";

import "@assets/styles/globals.css";

export default {
  title: "Molecules/M3CTA",
  component: M3CTA,
  argTypes: {
    label: { control: "text" },
    url: { control: "text" },
    classList: { control: "text" },
  },
} as Meta;

type Story = StoryObj<typeof M3CTA>;

export const Default: Story = {
  args: {
    label: "CTA Label",
    url: "/",
  },
  render: (props: M3CTAProps) => (
    <div>
      <M3CTA {...props} />
    </div>
  ),
};
