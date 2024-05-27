import type { Meta, StoryObj } from "@storybook/react";
import { M1HeaderNav } from "@molecules/M1HeaderNav";

import "@assets/styles/globals.css";

export default {
  title: "Molecules/M1HeaderNav",
  component: M1HeaderNav,
} as Meta;

type Story = StoryObj<typeof M1HeaderNav>;

export const Default: Story = {
  render: () => (
    <div className="fixed z-20 flex w-full justify-between gap-4 px-8 py-6 align-middle">
      <M1HeaderNav />
    </div>
  ),
};
