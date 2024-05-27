import type { Meta, StoryObj } from "@storybook/react";
import { O4Footer } from "@organisms/O4Footer";

export default {
  title: "Organisms/O4Footer",
  component: O4Footer,
} as Meta;

type Story = StoryObj<typeof O4Footer>;

export const Default: Story = {
  args: {},
  render: () => <O4Footer />,
};
