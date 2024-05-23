/* p/ Lenny del futuro: mover los renders a componentes separados
 */

import Image from "next/image";
import { A2Icon, IconNames } from "@atoms/A2Icon";

type FeatureType = {
  type: "date" | "time" | "engine" | "category" | "height";
  value: string;
};

type M5ProductCardProps = {
  variant: "CTA" | "minimal" | "full";
  name: string;
  image: string;
  price?: number;
  priceDiscounted?: number;
  priceCurrency?: string;
  pickupPoint?: string;
  features?: FeatureType[];
  isOnSale?: boolean;
  badge?: string;
  swatches?: unknown[];
};

enum FeatureTypeIconMap {
  date = "DATE_ICON",
  time = "TIME_ICON",
  engine = "ENGINE_ICON",
  category = "CATEGORY_ICON",
  height = "RULER_ICON",
}

enum FeatureTypeNamesMap {
  date = "Fecha",
  time = "Duración",
  engine = "Motor",
  category = "Categoría",
  height = "Altura",
}

/* const mockFeaturesDateTime: FeatureType[] = [
  {
    type: "date",
    value: "15 de Marzo",
  },
  {
    type: "time",
    value: "2 Horas",
  },
]; */

const mockFeaturesProductFeatures: FeatureType[] = [
  {
    type: "engine",
    value: "500cc",
  },
  {
    type: "category",
    value: "Classic",
  },
  {
    type: "height",
    value: "1.2m",
  },
];

export const M5ProductCard = ({
  variant = "full",
  name = "Heritage Classic",
  image = "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c94a96bb_0597_4243_a2cc_e73293c98e8b_e91e3683a9.webp",
  price = 29000,
  priceDiscounted,
  priceCurrency = "ARG",
  pickupPoint = "Royal Enfield Vicente López",
  features = mockFeaturesProductFeatures,
  isOnSale = true,
  badge = "Novedad",
  swatches,
}: M5ProductCardProps) => {
  const renderImage = () => {
    return (
      <div className="product-image row-start-1 row-end-4 bg-[#ccc]">
        <Image
          src={image}
          alt={name}
          width={255}
          height={255}
          className="mx-auto"
        />
      </div>
    );
  };

  const renderName = () => {
    return (
      <h3 className="product-name w-full text-center text-2xl font-bold leading-tight">
        {name}
      </h3>
    );
  };

  const renderPrice = () => {
    return (
      <p className="product-price text-center  text-lg font-bold text-secondary-disabled">
        <small className="text-sm font-normal">{priceCurrency} </small>$
        {price.toLocaleString()}
      </p>
    );
  };

  const renderPickupPoint = () => {
    return (
      <p className="product-pickup-point flex items-center justify-center text-sm text-secondary-disabled">
        <A2Icon name={IconNames.MAP_ICON} classList="mr-2" />
        {pickupPoint}
      </p>
    );
  };

  const renderFeatures = () => {
    const border = (length: number, index: number) => {
      if (length === 2 && index === 0) return "border-r border-[#b8b8b8]";
      if (length === 3 && (index === 0 || index === 1))
        return "border-r border-[#b8b8b8]";
      else return "";
    };

    return (
      <ul className="product-features mt-4 flex justify-evenly rounded-lg border border-[#b8b8b8]">
        {features?.map(({ type, value }, index) => (
          <li
            key={`${type}-${value}-${index}`}
            className={`flex w-full flex-col items-center p-2 text-sm text-secondary-disabled ${border(features.length, index)}`}
          >
            <A2Icon
              name={
                IconNames[
                  FeatureTypeIconMap[
                    features[index].type
                  ] as keyof typeof IconNames
                ]
              }
              classList="text-purple scale-[1.3] my-1"
            />
            <span className="mt-1">{FeatureTypeNamesMap[type]}</span>
            <span className="text-secondary">{value}</span>
          </li>
        ))}
      </ul>
    );
  };

  const renderOnSale = () => {
    return (
      <div
        style={{ clipPath: "polygon(0% 0%, 0% 0%, 100% 0%, 100% 100%)" }}
        className="product-badge absolute -right-1 -top-1 h-20 w-20 rounded-lg bg-[#17A2B8] text-white"
      >
        <h6 className="absolute inset-y-0 right-5 top-3 origin-center rotate-45 text-sm uppercase">
          Oferta
        </h6>
      </div>
    );
  };

  const renderBadge = () => {
    return (
      <div className="product-badge absolute left-2 top-2 rounded-lg bg-[#ECDFFD] px-2 py-1 text-sm uppercase text-[#903DF7]">
        <h6>{badge}</h6>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="product-data row-span-3 p-4">
        {renderName()}
        {renderPrice()}
        {renderPickupPoint()}
        {renderFeatures()}
        {isOnSale && renderOnSale()}
        {badge && renderBadge()}
      </div>
    );
  };

  return (
    <article
      className="relative grid max-w-[300px] grid-rows-6 rounded-lg border border-[#b8b8b8]"
      data-variant={variant}
      data-priceDiscounted={priceDiscounted}
      data-swatches={swatches}
    >
      {renderImage()}
      {renderContent()}
    </article>
  );
};
