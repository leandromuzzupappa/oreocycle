"use client";
import { useEffect, useState } from "react";
import { A4SliderSlide } from "@atoms/A4SliderSlide";
import { M5ProductCard, M5ProductCardProps } from "@molecules/M5ProductCard";
import { M6TextContent } from "@molecules/M6TextContent";
import { O3Slider, O3OptionsType } from "@organisms/O3Slider";
import { getEvents } from "@services/get-events";

export const T5HomeEvents = () => {
  const [sliderData, setSliderData] = useState<M5ProductCardProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const events = await getEvents();
      const sliderData: M5ProductCardProps[] = events.map(
        ({ headline, image, url, features, location, price }) => ({
          variant: "full",
          name: headline,
          image,
          link: url,
          features,
          pickupPoint: location,
          price,
        }),
      );

      setSliderData(sliderData);
    };

    getData();
  }, []);

  const options: O3OptionsType = {
    classList: {
      container: "w-full gap-4",
      slide: "",
    },
    arrows: true,
    pagination: true,
    loop: true,
    slidesPerView: 4,
    align: "start",
  };

  const beforeClasses =
    "before:bg-[#F7F7F7] before:absolute before:top-0 before:left-0 before:w-screen before:h-full before:left-[50%] before:-translate-x-2/4 before:-z-10";

  return (
    <section
      className={`relative my-12 w-full py-16 text-center ${beforeClasses}`}
    >
      <M6TextContent
        eyebrow="Eventos"
        headline="Para el camino"
        align="center"
      />

      <O3Slider options={options}>
        {sliderData.map((props, index) => (
          <A4SliderSlide key={index}>
            <M5ProductCard
              {...props}
              classList="border-[#ebebeb] bg-white mx-3 overflow-hidden rounded-lg h-full"
            />
          </A4SliderSlide>
        ))}
      </O3Slider>
    </section>
  );
};
