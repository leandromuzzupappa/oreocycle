import type { Meta, StoryObj } from "@storybook/react";
import { O2ArticleCards, O2ArticleCardsProps } from "@organisms/O2ArticleCards";
import { accessoriesMock } from "@data/mock/accessories";

const cards = accessoriesMock.slice(0, 3).map(({ name, slug, variants }) => {
  return {
    headline: name,
    ctaLabel: "Ver más",
    slug,
    image: variants[0].images[0].url,
    alt: name,
    lazy: true,
    overlay: true,
  };
});

export default {
  title: "Organisms/O2ArticleCards",
  component: O2ArticleCards,
} as Meta;

type Story = StoryObj<typeof O2ArticleCards>;

export const Default: Story = {
  args: {
    headline: "Headline",
    description: "Description",
    cards,
  },
  render: (props: O2ArticleCardsProps) => <O2ArticleCards {...props} />,
};
