import type { Meta, StoryObj } from "@storybook/react";
import { M8SocialLinks, M8SocialLinksProps } from "@molecules/M8SocialLinks";

export default {
  title: "Molecules/M8SocialLinks",
  component: M8SocialLinks,
} as Meta;

type Story = StoryObj<typeof M8SocialLinks>;

export const Default: Story = {
  args: {
    hideLabel: true,
  },
  render: (props: M8SocialLinksProps) => <M8SocialLinks {...props} />,
};
