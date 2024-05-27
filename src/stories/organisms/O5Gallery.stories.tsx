import type { Meta, StoryObj } from "@storybook/react";
import { O5Gallery, O5GalleryProps } from "@organisms/O5Gallery";

export default {
  title: "Organisms/O5Gallery",
  component: O5Gallery,
} as Meta;

type Story = StoryObj<typeof O5Gallery>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/accessories",
      },
    },
  },
  render: () => <O5Gallery />,
};
