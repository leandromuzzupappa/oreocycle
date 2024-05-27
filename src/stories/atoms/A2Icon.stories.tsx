import type { Meta, StoryObj } from "@storybook/react";
import { A2Icon, IconNames, iconList } from "@atoms/A2Icon";

import "@assets/styles/globals.css";

/* name, classList = "", selfRef, label */

export default {
  title: "Atoms/A2Icon",
  component: A2Icon,
  argTypes: {
    label: { control: "text" },
    name: { control: "select", options: Object.keys(iconList) },
    classList: { control: "text" },
    selfRef: { control: "check" },
  },
} as Meta<typeof A2Icon>;

type Story = StoryObj<typeof A2Icon>;

export const Default: Story = {
  args: {
    label: "Simpli",
    name: IconNames.SIMPLI_LOGO,
  },
};
