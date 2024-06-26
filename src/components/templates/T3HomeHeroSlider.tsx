import { O3Slider, O3OptionsType } from "@organisms/O3Slider";
import { CategoryEnum } from "@data/types/product";

export const T3HomeHeroSlider = () => {
  const sliderData = [
    {
      headline: "Limited Time Offer",
      description: "Get 20% off on all products",
      eyebrow: "Sale",
      ctaLabel: "Shop Now",
      slug: `/${CategoryEnum.MOTORCYCLES}`,
      image: "/images/ultimate-motorcycle.jpg",
      alt: "Ultimate Motorcycle",
      overlay: { show: true, color: "#000", opacity: 0.2 },
    },
    {
      headline: "New Arrivals",
      description: "Check out our latest products",
      eyebrow: "New",
      ctaLabel: "Shop Now",
      slug: `/${CategoryEnum.MOTORCYCLES}`,
      image: "/images/five-reason.jpg",
      alt: "Ultimate Motorcycle",
      overlay: { show: true, color: "#000", opacity: 0.2 },
    },
    {
      headline: "Best Sellers",
      description: "Our most popular products",
      eyebrow: "Popular",
      ctaLabel: "Shop Now",
      slug: `/${CategoryEnum.MOTORCYCLES}`,
      image: "/images/issuu.jpg",
      alt: "Ultimate Motorcycle",
      overlay: { show: true, color: "#000", opacity: 0.2 },
    },
  ];

  const options: O3OptionsType = {
    classList: {
      container: "",
      slide: "h-[450px]",
    },
    arrows: true,
    pagination: true,
  };

  return <O3Slider id="home-banner" slides={sliderData} options={options} />;
};
