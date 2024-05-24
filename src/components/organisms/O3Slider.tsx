"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { A3SliderPaginationButton } from "@atoms/A3SliderPaginationButton";
import { A4SliderSlide } from "@atoms/A4SliderSlide";
import { M2Card } from "@molecules/M2Card";
import { M4SliderArrow } from "@molecules/M4SliderArrow";
import { usePrevNextButtons } from "@hooks/useSliderButtons";
import { useSliderPagination } from "@hooks/useSliderPagination";

export type O3OptionsType = EmblaOptionsType & {
  classList?: { container: string; slide: string };
  pagination?: boolean;
  arrows?: boolean;
  slidesPerView?: number;
};

type O3SliderProps = {
  children?: React.ReactNode;
  id?: string;
  slides?: {
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

export const O3Slider = ({
  children,
  id = `slider-1`,
  slides,
  options,
}: O3SliderProps) => {
  const hasSlides = slides && slides.length > 0;

  const { classList, pagination, arrows, slidesPerView = 1 } = options;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useSliderPagination(emblaApi);

  const handleSlidePerView = (): string => {
    if (slidesPerView <= 1) return "w-full";

    const lgSizes = [
      "",
      "",
      "[&>.slider-slide]:lg:w-1/2",
      "[&>.slider-slide]:lg:w-1/3",
      "[&>.slider-slide]:lg:w-1/4",
      "[&>.slider-slide]:lg:w-1/5",
      "[&>.slider-slide]:lg:w-1/6",
    ];

    const i = slidesPerView <= 6 ? slidesPerView : lgSizes.length - 1;

    return `[&>.slider-slide]:md:w-1/2 ${lgSizes[i]}`;
  };

  const renderSlides = () => {
    if (hasSlides) {
      return slides.map((slide, index) => (
        <A4SliderSlide key={id + index} classList={classList?.slide ?? ""}>
          <M2Card {...slide} classlist="w-full h-full" />
        </A4SliderSlide>
      ));
    }

    return children;
  };

  return (
    <div className="slider relative w-full" data-test-id={id}>
      <div
        className={`slider-viewport ${classList?.container ?? ""} overflow-hidden`}
        ref={emblaRef}
      >
        <div
          className={`slider-container backface-hidden touch-action-pan-y touch-action-pinch-zoom ml-neg-slide-spacing flex ${handleSlidePerView()}`}
        >
          {renderSlides()}
        </div>
      </div>

      {arrows && (
        <div className="slider-controls absolute top-[50%] z-10 hidden w-full -translate-y-2/4 justify-between text-purple lg:flex">
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
        <div className="slider-pagination flex w-full justify-center gap-4 p-6">
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
