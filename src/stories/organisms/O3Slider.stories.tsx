import type { Meta, StoryObj } from "@storybook/react";
import { O3Slider, O3SliderProps } from "@organisms/O3Slider";
import { accessoriesMock } from "@data/mock/accessories";

const slides = accessoriesMock.slice(0, 3).map(({ name, slug, variants }) => {
  return {
    headline: name,
    description: "Description",
    eyebrow: "Eyebrow",
    ctaLabel: "Ver más",
    slug,
    image: variants[0].images[0].url,
    alt: name,
    overlay: true,
  };
});

export default {
  title: "Organisms/O3Slider",
  component: O3Slider,
} as Meta;

type Story = StoryObj<typeof O3Slider>;

export const Default: Story = {
  args: {
    slides,
    options: {
      pagination: true,
      arrows: true,
      slidesPerView: 1,
      classList: {
        container: "w-full",
        slide: "h-[450px]",
      },
    },
  },
  render: (props: O3SliderProps) => <O3Slider {...props} />,
};

export const SliderWithItems: Story = {
  args: {
    slides,
    options: {
      pagination: true,
      arrows: true,
      slidesPerView: 3,
      classList: {
        container: "w-full",
        slide: "h-[450px]",
      },
    },
  },
  render: (props: O3SliderProps) => <O3Slider {...props} />,
};
