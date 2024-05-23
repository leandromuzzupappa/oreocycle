"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { A3SliderPaginationButton } from "@atoms/A3SliderPaginationButton";
import { M2Card } from "@molecules/M2Card";
import { M4SliderArrow } from "@molecules/M4SliderArrow";
import { usePrevNextButtons } from "@hooks/useSliderButtons";
import { useSliderPagination } from "@hooks/useSliderPagination";

export type O3OptionsType = EmblaOptionsType & {
  classList?: { container: string; slide: string };
  pagination?: boolean;
  arrows?: boolean;
};

type O3SliderProps = {
  slides: {
    headline: string;
    description: string;
    eyebrow: string;
    ctaLabel: string;
    slug: string;
    image: string;
    alt: string;
    overlay: boolean | { show: boolean; color: string; opacity: number };
  }[];
  options: O3OptionsType;
};

export const O3Slider = ({ slides, options }: O3SliderProps) => {
  const { classList, pagination, arrows } = options;

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useSliderPagination(emblaApi);

  return (
    <div className="slider relative w-full">
      <div
        className={`slider-viewport ${classList?.container ?? ""} overflow-hidden`}
        ref={emblaRef}
      >
        <div className="slider-container backface-hidden touch-action-pan-y touch-action-pinch-zoom ml-neg-slide-spacing flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slider-slider ${classList?.slide ?? ""} flex-0 w-full min-w-0 flex-none`}
            >
              <M2Card {...slide} classlist="w-full h-full" />
            </div>
          ))}
        </div>
      </div>

      {arrows && (
        <div className="slider-controls text-purple absolute top-[50%] z-10 hidden w-full justify-between lg:flex">
          <M4SliderArrow
            direction="prev"
            classList="-left-20"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <M4SliderArrow
            direction="next"
            classList="-right-20"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      )}

      {pagination && (
        <div className="slider-pagination flex w-full justify-center gap-4 p-3">
          {scrollSnaps.map((_, index) => (
            <A3SliderPaginationButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              classList={`w-10 h-2 rounded-full ${index === selectedIndex ? "bg-purple" : "bg-secondary-lightest"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
