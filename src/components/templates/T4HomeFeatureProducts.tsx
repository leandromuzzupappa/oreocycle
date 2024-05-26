"use client";
import { useEffect, useState } from "react";
import { A4SliderSlide } from "@atoms/A4SliderSlide";
import { M5ProductCard, M5ProductCardCTAProps } from "@molecules/M5ProductCard";
import { M6TextContent } from "@molecules/M6TextContent";
import { O3Slider, O3OptionsType } from "@organisms/O3Slider";
import { getProducts } from "@services/get-products";
import { CategoryEnum } from "@data/types/product";

export const T4HomeFeatureProducts = () => {
  const [sliderData, setSliderData] = useState<M5ProductCardCTAProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(CategoryEnum.MOTORCYCLES);
      const banProducts = [
        "Interceptor 650 Standard",
        "Continental GT 650 Standard",
      ];
      const data = products.filter(
        ({ name, seller }) =>
          seller.name === "Lema Motors" && !banProducts.includes(name),
      );

      const sliderData: M5ProductCardCTAProps[] = data.map(
        ({ name, variants, slug }) => ({
          variant: "CTA",
          name,
          image: variants[0].images[0].formats?.thumbnail?.url || "",
          link: `/${slug}`,
        }),
      );

      setSliderData(sliderData);
    };

    fetchData();
  }, []);

  const options: O3OptionsType = {
    classList: {
      container: "w-full",
      slide: "h-[450px]",
    },
    arrows: true,
    pagination: true,
    loop: true,
    slidesPerView: 4,
    align: "start",
  };

  return (
    <section className="w-full py-16 text-center">
      <M6TextContent
        headline="Conoce a la Familia Meteor"
        description="Sapien, duis commodo risus molestie pulvinar sit id id. Malesuada quam leo, quis venenatis integer pellentesque mauris."
        align="center"
      />

      <O3Slider options={options}>
        {sliderData.map((props, index) => (
          <A4SliderSlide key={index}>
            <M5ProductCard {...props} classList="border-0" />
          </A4SliderSlide>
        ))}
      </O3Slider>
    </section>
  );
};
