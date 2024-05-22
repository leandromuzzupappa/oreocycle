"use client";

import { useEffect, useState } from "react";
import { O2ArticleCards, O2ArticleCardsProps } from "@organisms/O2ArticleCards";
import { getBlog } from "@services/get-blog";

export const T2HomeBlog = () => {
  const [posts, setPosts] = useState<O2ArticleCardsProps["cards"]>([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const posts = await getBlog();
      const postsData = posts.slice(0, 3).map(({ headline, image, url }) => {
        return {
          description: headline,
          ctaLabel: "Leer más",
          slug: url,
          image,
          alt: headline,
          lazy: true,
          overlay: {
            show: true,
            color: "#000",
            opacity: 0.7,
          },
        };
      });

      setPosts(postsData);
    };

    getBlogPosts();
  }, []);

  return (
    <>
      <O2ArticleCards
        headline="Expresate"
        description="En nuestra tienda puedes encontrar una amplia selección de ropa motorista confeccionada por las mejores marcas del sector."
        cards={posts}
      />
    </>
  );
};
