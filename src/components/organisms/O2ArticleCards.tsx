import { M2Card, M2CardProps } from "@molecules/M2Card";

type O2ArticleCardsProps = {
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
      <h2>{headline}</h2>
      <p>{description}</p>

      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            <M2Card {...card} />
          </li>
        ))}
      </ul>
    </section>
  );
};
