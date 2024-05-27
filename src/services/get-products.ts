"use server";
import { endpoints } from "@config/endpoints";
import { accessoriesMock } from "@data/mock/accessories";
import { motocyclesMock } from "@data/mock/motocycles";
import { Product } from "@data/types/product";

export type Category = "accessories" | "motorcycles";

export const getProducts = async (category: Category): Promise<Product[]> => {
  try {
    if (!category) throw new Error("Category is required");
    if (!endpoints[category]) throw new Error("Category is not valid");

    if (process.env.DEBUG == "true")
      return category === "accessories" ? accessoriesMock : motocyclesMock;

    const productData = fetch(endpoints.base + endpoints[category], {
      headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
    });

    const products = await (await productData).json();
    return products;
  } catch (error) {
    if (process.env.DEBUG == "true")
      console.log("Error getting products: ", { error, category });

    console.log("Cannot get the products data, retrieving local data instead");
    return [];
  }
};

export const getProductById = async ({
  id,
  category,
}: {
  id: string;
  category: Category;
}): Promise<Product | undefined> => {
  if (!category || !id) throw new Error("Category and ID are required");
  if (!endpoints[category]) throw new Error("Category is not valid");

  if (process.env.DEBUG == "true")
    return category === "accessories"
      ? accessoriesMock.find((product) => product.uuid === id)
      : motocyclesMock.find((product) => product.uuid === id);

  try {
    const productData = fetch(
      `${endpoints.base + endpoints[category]}?uuid=${id}`,
      {
        headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
      },
    );

    const product = await (await productData).json();

    if (!product) throw new Error("Product not found");

    return product;
  } catch (error) {
    if (process.env.DEBUG == "true")
      console.log("Error getting product by id: ", {
        error,
        id,
        category,
      });

    console.log("Cannot get the product data, retrieving local data instead");
    return undefined;
  }
};

export const getProductBySlug = async ({
  slug,
  category,
}: {
  slug: string;
  category: Category;
}): Promise<Product | undefined> => {
  if (!category || !slug) throw new Error("Category and Slug are required");
  if (!endpoints[category]) throw new Error("Category is not valid");

  if (process.env.DEBUG == "true")
    return category === "accessories"
      ? accessoriesMock.find((product) => product.slug === slug)
      : motocyclesMock.find((product) => product.slug === slug);

  try {
    const productData = getProducts(category).then((products) => {
      return products.find((product) => product.slug === slug);
    });

    if (!productData) throw new Error("Product not found");

    return productData;
  } catch (error) {
    if (process.env.DEBUG == "true")
      console.log("Error getting product by slug: ", {
        error,
        slug,
        category,
      });

    console.log("Cannot get the product data, retrieving local data instead");
    return undefined;
  }
};
