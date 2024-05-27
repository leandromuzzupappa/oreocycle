import type { Meta, StoryObj } from "@storybook/react";
import { M4SliderArrow, M4SliderArrowProps } from "@molecules/M4SliderArrow";

import "@assets/styles/globals.css";

export default {
  title: "Molecules/M4SliderArrow",
  component: M4SliderArrow,
  argTypes: {
    classList: { control: "text" },
    disabled: { control: "boolean" },
    direction: { control: "radio" },
    onClick: { action: "clicked" },
  },
} as Meta;

type Story = StoryObj<typeof M4SliderArrow>;

export const Default: Story = {
  args: {
    disabled: false,
    direction: "next",
  },
  render: (props: M4SliderArrowProps) => (
    <div>
      <M4SliderArrow {...props} />
    </div>
  ),
};
