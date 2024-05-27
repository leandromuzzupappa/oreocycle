import type { Meta, StoryObj } from "@storybook/react";
import { O1Header } from "@organisms/O1Header";

export default {
  title: "Organisms/O1Header",
  component: O1Header,
} as Meta;

type Story = StoryObj<typeof O1Header>;

export const Default: Story = {
  render: () => <O1Header />,
};
