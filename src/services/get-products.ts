"use server";
import { endpoints } from "@config/endpoints";
import { accessoriesMock } from "@data/mock/accessories";
import { motocyclesMock } from "@data/mock/motocycles";
import { Product } from "@data/types/product";

type Category = "accessories" | "motocycles";

export const getProducts = async (category: Category): Promise<Product[]> => {
  try {
    if (!category) throw new Error("Category is required");
    if (!endpoints[category]) throw new Error("Category is not valid");

    if (process.env.DEBUG == "true")
      return category === "accessories" ? accessoriesMock : motocyclesMock;

    const productData = fetch(endpoints[category], {
      headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
    });

    const products: Product[] = await productData.then((res) => res.json());

    return products;
  } catch (error) {
    if (process.env.DEBUG == "true")
      console.log("Error getting products: ", { error, category });

    console.log("Cannot get the products data, retrieving local data instead");
    return category === "accessories" ? accessoriesMock : motocyclesMock;
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
    const productData = fetch(`${endpoints[category]}?uuid=${id}`, {
      headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
    });

    const product: Product = await productData.then((res) => res.json());

    return product;
  } catch (error) {
    if (process.env.DEBUG == "true")
      console.log("Error getting product by id: ", {
        error,
        id,
        category,
      });

    console.log("Cannot get the product data, retrieving local data instead");
    return category === "accessories"
      ? accessoriesMock.find((product) => product.uuid === id)
      : motocyclesMock.find((product) => product.uuid === id);
  }
};
