import { Product } from "@data/types/product";

export type UseProductDetailsType = {
  product: Product;
  category: string;
  slug: string;
  uuid: string;
};

export const useProductDetails = ({
  product,
  category,
  slug,
}: UseProductDetailsType) => {
  const breadcrumbsLinks = [
    { label: "Home", url: "/" },
    { label: category, url: `/${category}` },
    { label: product.name, url: `/${category}/${slug}` },
  ];

  const sliderOptions = {
    classList: {
      container: "border border-[#EDEDED] rounded-lg",
      slide: "h-[450px] ",
    },
    arrows: true,
    arrowsWithin: true,
    pagination: true,
    loop: true,
  };

  const sliderImages = product.variants[0].images.map((image) => {
    return {
      image: image.url,
      alt: product.name,
    };
  });

  const getPrice = () => {
    return product.variants[0].prices[0].amount;
  };

  const getPriceInInstallments = (installments: number) => {
    const installment = getPrice() / installments;
    return parseFloat(installment.toFixed(2));
  };

  const getVariantsWithName = () => {
    return product.variants.map((variant) => {
      return { ...variant, productName: product.name };
    });
  };

  return {
    breadcrumbsLinks,
    sliderConfig: { slides: sliderImages, options: sliderOptions },
    getPrice,
    getPriceInInstallments,
    getVariantsWithName,
  };
};
