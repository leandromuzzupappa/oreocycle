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

export type M5ProductCardProps = {
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

export type M5ProductCardCTAProps = {
  variant: "CTA";
  name: string;
  image: string;
  link: string;
  classList?: string;
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

export const M5ProductCard = ({
  variant = "minimal",
  name,
  image,
  price,
  priceDiscounted,
  priceCurrency = "ARG",
  pickupPoint,
  features,
  isOnSale = false,
  badge,
  swatches,
  link,
  classList,
}: M5ProductCardProps) => {
  const renderImage = () => {
    return (
      <div
        className={`product-image relative min-h-40 w-full overflow-hidden ${variant === "CTA" ? "mt-10" : ""}`}
      >
        <Image src={image} alt={name} fill={true} objectFit="cover" />
      </div>
    );
  };

  const renderName = () => {
    const minimalClasses =
      variant === "CTA" ? "absolute inset-x-0 top-0 p-4 text-lg" : "";

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

        {price && <span>${price.toLocaleString()}</span>}

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
      <p className="product-pickup-point my-1 flex items-center justify-center text-sm text-secondary-disabled">
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
      <ul className="product-features mt-auto flex justify-evenly rounded-lg border border-[#b8b8b8]">
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
      <div className="product-data flex h-full flex-col items-stretch p-4">
        {variant === "full" && swatches && renderSwatches()}
        {renderName()}
        {variant !== "CTA" && price && renderPrice()}
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
        className={`${classList} relative flex flex-col rounded-lg border border-[#b8b8b8]`}
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
