"use client";

import { useEffect, useState } from "react";
import { O2ArticleCards, O2ArticleCardsProps } from "@organisms/O2ArticleCards";
import { getProducts } from "@services/get-products";
import { CategoryEnum } from "@data/types/product";

export const T1HomeAccessories = () => {
  const [accessories, setAccessories] = useState<O2ArticleCardsProps["cards"]>(
    [],
  );

  useEffect(() => {
    const getAccessories = async () => {
      const products = await getProducts(CategoryEnum.ACCESSORIES);
      const cards = products.slice(0, 3).map(({ name, slug, variants }) => {
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

      setAccessories(cards);
    };

    getAccessories();
  }, []);

  return (
    <>
      <O2ArticleCards
        headline="Accesorios"
        description="¡Elige el producto que mejor se adapte a ti y a tu estilo!"
        cards={accessories}
      />
    </>
  );
};
