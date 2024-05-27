"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { M5ProductCard, M5ProductCardProps } from "@molecules/M5ProductCard";
import { M7TextBanner } from "@molecules/M7TextBanner";
import { getProducts, Category } from "@services/get-products";
import { mockFeaturesProductFeatures } from "@data/mock/motocycleFeatures";
import {
  swatchesMock,
  swatchesMockWithOne,
} from "@data/mock/motocycleSwatches";

enum GalleryVariant {
  motorcycles = "full",
  accessories = "minimal",
}

export const O5Gallery = () => {
  const pathname = usePathname();

  const [products, setProducts] = useState<M5ProductCardProps[]>([]);

  useEffect(() => {
    if (!pathname) return;

    const category = pathname.replace("/", "") as Category;

    const fetchData = async () => {
      const products = await getProducts(category as Category);
      if (!products) return;

      const gallery: M5ProductCardProps[] = products.map((product) => {
        const isOnSale = Math.random() > 0.9;
        const badge = Math.random() > 0.9 ? "Novedad" : undefined;
        const features = mockFeaturesProductFeatures;
        features[0].value = product.variants[0].details.motors[0].value;

        const swatches =
          Math.random() > 0.77 ? swatchesMock : swatchesMockWithOne;

        return {
          variant: GalleryVariant[category],
          name: product.name,
          image: product.variants[0].images[0].formats?.thumbnail?.url || "",
          price: product.variants[0].prices[0].amount,
          priceCurrency: product.variants[0].prices[0].currency,
          pickupPoint: product.seller.name,
          features,
          isOnSale,
          badge,
          swatches,
          link: `${category}/${product.slug}?uuid=${product.uuid}`,
          classList: "border-2",
        };
      });

      setProducts(gallery);
    };

    fetchData();
  }, [pathname]);

  return (
    <section>
      <M7TextBanner headline={`Lorem Ipsum ${pathname}`} align="center" />
      <div className="grid content-start gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((props, index) => (
          <M5ProductCard
            key={`gallery-prod-${index}`}
            {...props}
            classList="border-[#ebebeb] bg-white lg:mx-3 overflow-hidden rounded-lg h-full w-full"
          />
        ))}
      </div>
    </section>
  );
};
