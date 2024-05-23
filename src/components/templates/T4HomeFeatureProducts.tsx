"use client";
/* import { useEffect, useState } from "react";
import { A4SliderSlide } from "@atoms/A4SliderSlide"; */
import { M5ProductCard } from "@molecules/M5ProductCard";
/* import { O3Slider, O3OptionsType } from "@organisms/O3Slider";
import { getProducts } from "@services/get-products";
import { CategoryEnum } from "@data/types/product"; */

export const T4HomeFeatureProducts = () => {
  /* const [sliderData, setSliderData] = useState([]);

  const options: O3OptionsType = {
    classList: {
      container: "border w-full",
      slide: "h-[450px]",
    },
    arrows: true,
    pagination: true,
    loop: true,
    slidesPerView: 4,
    align: "start",
  }; */

  return (
    <section className="w-full py-8">
      {/* <O3Slider options={options}>
        <A4SliderSlide>
          <M5ProductCard />
        </A4SliderSlide>
        <A4SliderSlide>
          <M5ProductCard />
        </A4SliderSlide>
        <A4SliderSlide>
          <M5ProductCard />
        </A4SliderSlide>
        <A4SliderSlide>
          <M5ProductCard />
        </A4SliderSlide>
        <A4SliderSlide>
          <M5ProductCard />
        </A4SliderSlide>
      </O3Slider> */}

      <M5ProductCard
        variant="full"
        name="Pepitos"
        image="https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c94a96bb_0597_4243_a2cc_e73293c98e8b_e91e3683a9.webp"
      />
    </section>
  );
};
