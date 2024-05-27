import type { Meta, StoryObj } from "@storybook/react";
import { M6TextContent, M6TextContentProps } from "@molecules/M6TextContent";

export default {
  title: "Molecules/M6TextContent",
  component: M6TextContent,
} as Meta;

type Story = StoryObj<typeof M6TextContent>;

export const Default: Story = {
  args: {
    headline: "Headline",
    description: "Description",
    eyebrow: "Eyebrow",
    align: "left",
  },
  render: (props: M6TextContentProps) => <M6TextContent {...props} />,
};
