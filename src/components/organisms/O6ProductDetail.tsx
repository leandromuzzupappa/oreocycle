"use client";

import { useProductDetails } from "@hooks/useProductDetails";
import { Product, Variant } from "@data/types/product";
import { useState } from "react";

export type O6ProductDetailProps = {
  product: Product;
  category: string;
  slug: string;
  search: string;
};

export type PriceProps = {
  price: number;
  installments: string;
};

export const O6ProductDetail = ({ product }: O6ProductDetailProps) => {
  const { getPrice, getPriceInInstallments } = useProductDetails({
    product,
    category: "",
    slug: "",
    uuid: "",
  });

  return (
    <>
      <h1 className="text-2xl font-bold">{product?.name}</h1>
      <Price
        price={getPrice()}
        installments={`${getPriceInInstallments(24)} Monthly for 24 mon.*`}
      />
      <hr className="border-[#D5D5D5]" />

      <h4>Elegí tu versión</h4>
      <div>
        <ul>
          {product.variants.map((variant) => (
            <li key={variant.uuid}>
              <VariantItem variant={variant} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Price = ({ price, installments }: PriceProps) => {
  return (
    <p className="flex flex-col gap-2 text-xl font-bold text-[#626262]">
      ${price}
      <span className="text-sm font-normal">OR</span> ${installments}
    </p>
  );
};

const VariantItem = ({ variant }: { variant: Variant }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className={`${selected ? "border-purple" : "border-[#D5D5D5]"} flex items-center gap-4 rounded-lg border border-purple px-8 py-4`}
      onClick={() => setSelected(!selected)}
    >
      <div className="text-left">
        <h5 className="justify-star mb-3 flex flex-wrap items-center gap-4">
          <span className="text-xl font-bold text-[#180A2A]">
            {variant.name}
          </span>
          <div className="relative flex items-center gap-2 rounded-full border-2 border-[#EDEDED] pr-4">
            <span
              className="block h-8 w-8 rounded-full bg-black bg-opacity-50"
              style={{ backgroundColor: "red" }}
            ></span>
            <span className="text-sm text-secondary-disabled">Rojo</span>
          </div>
        </h5>
        <p className="text-sm text-[#9a9a9a]">
          Motor: {variant.details.motors[0].value}
        </p>
        <p className="text-sm text-[#9a9a9a]">
          Potencia: {variant.details.features[0].value}
        </p>
      </div>
      <div className="">
        <p className="text-xl font-bold text-[#180A2A]">
          ${variant.prices[0].amount}
        </p>
      </div>
    </button>
  );
};
