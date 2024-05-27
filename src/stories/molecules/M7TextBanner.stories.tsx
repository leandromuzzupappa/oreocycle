import type { Meta, StoryObj } from "@storybook/react";
import { M7TextBanner, M7TextBannerProps } from "@molecules/M7TextBanner";

export default {
  title: "Molecules/M7TextBanner",
  component: M7TextBanner,
} as Meta;

type Story = StoryObj<typeof M7TextBanner>;

export const Default: Story = {
  args: {
    headline: "Headline",
    linkLabel: "Link Label",
    link: "/",
    align: "left",
  },
  render: (props: M7TextBannerProps) => <M7TextBanner {...props} />,
};
