import type { Meta, StoryObj } from "@storybook/react";
import { A1Link } from "@atoms/A1Link";

import "@assets/styles/globals.css";

export default {
  title: "Atoms/A1Link",
  component: A1Link,
  argTypes: {
    label: { control: "text" },
    url: { control: "text" },
    newTab: { control: "boolean" },
    classList: { control: "text" },
    children: { control: "text" },
  },
} as Meta<typeof A1Link>;

type Story = StoryObj<typeof A1Link>;

export const Default: Story = {
  args: {
    label: "Pepitos",
    url: "/",
  },
};

export const NewTab: Story = {
  args: {
    label: "Pepitos",
    url: "/",
    newTab: true,
  },
};
