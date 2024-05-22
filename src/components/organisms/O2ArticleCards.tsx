import { M2Card, M2CardProps } from "@molecules/M2Card";

export type O2ArticleCardsProps = {
  headline: string;
  description: string;
  cards: M2CardProps[];
};

export const O2ArticleCards = ({
  headline,
  description,
  cards = [],
}: O2ArticleCardsProps) => {
  return (
    <section className="">
      <h2 className="mb-4 text-3xl font-bold text-black">{headline}</h2>
      <p className="mb-11 text-base font-medium text-secondary-lightest">
        {description}
      </p>

      {cards.length >= 0 ? (
        <ul className="grid w-full gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={`o2-item-${card.slug}`}>
              <M2Card {...card} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </section>
  );
};
