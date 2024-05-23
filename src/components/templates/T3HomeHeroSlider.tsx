import { O3Slider, O3OptionsType } from "@organisms/O3Slider";

export const T3HomeHeroSlider = () => {
  const sliderData = [
    {
      headline: "Limited Time Offer",
      description: "Get 20% off on all products",
      eyebrow: "Sale",
      ctaLabel: "Shop Now",
      slug: "/shop",
      image: "/images/ultimate-motorcycle.jpg",
      alt: "Ultimate Motorcycle",
      overlay: { show: true, color: "#000", opacity: 0.2 },
    },
    {
      headline: "New Arrivals",
      description: "Check out our latest products",
      eyebrow: "New",
      ctaLabel: "Shop Now",
      slug: "/shop",
      image: "/images/five-reason.jpg",
      alt: "Ultimate Motorcycle",
      overlay: { show: true, color: "#000", opacity: 0.2 },
    },
    {
      headline: "Best Sellers",
      description: "Our most popular products",
      eyebrow: "Popular",
      ctaLabel: "Shop Now",
      slug: "/shop",
      image: "/images/issuu.jpg",
      alt: "Ultimate Motorcycle",
      overlay: { show: true, color: "#000", opacity: 0.2 },
    },
  ];

  const options: O3OptionsType = {
    classList: {
      container: "",
      slide: "w-full h-[450px]",
    },
    arrows: true,
    pagination: true,
  };

  return <O3Slider slides={sliderData} options={options} />;
};
