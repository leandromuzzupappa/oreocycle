/* p/ Lenny del futuro:
 * [] mover los renders a componentes separados
 * [] crear un metodo o un hook para renderizar features segun el tipo
 * [] pedir logica para las cuotas, no creo el modulo porque no tiene sentido
 *    renderizar un string pelado
 *
 * p/ Simpli team -- Perdon por este NoMstruo
 */

import Link from "next/link";
import Image from "next/image";
import { A1Link } from "@atoms/A1Link";
import { A2Icon, IconNames } from "@atoms/A2Icon";
import { M3CTA } from "./M3CTA";

export type FeatureType = {
  type: "date" | "time" | "engine" | "category" | "height";
  value: string;
};

export type SwatchesType = {
  color: string;
  image: string;
  label: string;
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
  swatches?: SwatchesType[];
  link: string;
  classList?: string;
};

export interface M5ProductCardMinimalProps
  extends Omit<
    M5ProductCardProps,
    | "price"
    | "priceDiscounted"
    | "priceCurrency"
    | "pickupPoint"
    | "features"
    | "isOnSale"
    | "badge"
    | "swatches"
  > {}

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

// Mocks for testing
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

/* const mockFeaturesProductFeatures: FeatureType[] = [
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
]; */

/* const swatchesMock: SwatchesType[] = [
  {
    color: "#FF0000",
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c94a96bb_0597_4243_a2cc_e73293c98e8b_e91e3683a9.webp",
    label: "Fireball Red",
  },
  {
    color: "#0000FF",
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c94a96bb_0597_4243_a2cc_e73293c98e8b_e91e3683a9.webp",
    label: "Ocean Blue",
  },
  {
    color: "#000000",
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c94a96bb_0597_4243_a2cc_e73293c98e8b_e91e3683a9.webp",
    label: "Coal Black",
  },
]; */

/* const swatchesMockWithOne: SwatchesType[] = [
  {
    color: "#FF0000",
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c94a96bb_0597_4243_a2cc_e73293c98e8b_e91e3683a9.webp",
    label: "Fireball Red",
  },
]; */

export const M5ProductCard = ({
  variant = "minimal",
  name = "Heritage Classic",
  image = "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_c94a96bb_0597_4243_a2cc_e73293c98e8b_e91e3683a9.webp",
  price = 29000,
  priceDiscounted = 25000,
  priceCurrency = "ARG",
  pickupPoint = "Royal Enfield Vicente López",
  features,
  isOnSale = true,
  badge = "Novedad",
  swatches,
  link,
  classList,
}: M5ProductCardProps) => {
  const renderImage = () => {
    return (
      <div className="product-image">
        <Image
          src={image}
          alt={name}
          width={255}
          height={255}
          className={`mx-auto ${variant === "CTA" ? "mt-6" : ""}`}
        />
      </div>
    );
  };

  const renderName = () => {
    const minimalClasses =
      variant === "CTA" ? "absolute inset-x-0 top-0 p-4" : "";

    return (
      <h3
        className={`product-name w-full text-center text-2xl font-bold leading-tight ${minimalClasses}`}
      >
        {name}
      </h3>
    );
  };

  const renderPrice = () => {
    return (
      <p className="product-price flex items-center justify-center gap-2 text-center text-lg font-bold text-secondary-disabled">
        <small className="text-sm font-normal">{priceCurrency} </small>
        <span>${price.toLocaleString()}</span>

        {priceDiscounted && (
          <span className="font-normal text-secondary-disabled line-through">
            ${priceDiscounted.toLocaleString()}
          </span>
        )}
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

  const renderSwatches = () => {
    // No swatches on the api
    return (
      <div className="product-swatches">
        <ul className="flex justify-center">
          {swatches &&
            swatches.map(({ color, label }) => {
              return (
                <li
                  key={label}
                  className={`relative -top-2 -mx-2 flex items-center gap-2 rounded-full border-2 border-[#EDEDED] ${swatches.length === 1 ? "pr-4" : ""}`}
                >
                  <span
                    className="block h-8 w-8 rounded-full bg-black bg-opacity-50"
                    style={{ backgroundColor: color }}
                  ></span>
                  {swatches.length === 1 && (
                    <span className="text-sm font-semibold text-secondary-disabled">
                      {label}
                    </span>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    );
  };

  const renderCTA = () => {
    return (
      <div className="product-cta flex flex-col items-center justify-center gap-4">
        <M3CTA
          label="Descubrir más"
          url={link}
          classList="w-full gap-0 [&>.link-label]:mx-auto [&>.link-label]:left-2"
        />
        <A1Link label="Reservar" url="#" classList="text-[#903DF7]" />
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="product-data p-4">
        {variant === "full" && swatches && renderSwatches()}
        {renderName()}
        {variant !== "CTA" && renderPrice()}
        {variant === "full" && pickupPoint && renderPickupPoint()}
        {variant === "full" && features && renderFeatures()}
        {variant !== "CTA" && isOnSale && renderOnSale()}
        {variant !== "CTA" && badge && renderBadge()}
        {variant === "CTA" && renderCTA()}
      </div>
    );
  };

  const renderProduct = () => {
    return (
      <article
        className={`${classList} relative flex max-w-[300px] flex-col rounded-lg border border-[#b8b8b8]`}
      >
        {renderImage()}
        {renderContent()}
      </article>
    );
  };

  return (
    <>
      {variant === "CTA" ? (
        renderProduct()
      ) : (
        <Link href={link}>{renderProduct()}</Link>
      )}
    </>
  );
};
