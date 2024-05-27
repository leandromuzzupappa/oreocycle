import { getProducts, getProductById } from "@services/get-products";
import { motocyclesMock } from "@data/mock/motocycles";
import { accessoriesMock } from "@data/mock/accessories";
import { CategoryEnum } from "@data/types/product";

describe("get product data", () => {
  const bikeID = "e5bbdf04-1380-4ac3-9e6b-8d96be3ed40d";
  const accessoryID = "a58becb1-9580-411e-a4c5-9cc9af1c2f7f";
  afterEach(() => {
    jest.clearAllMocks();
    process.env.DEBUG = "false";
  });

  it("should return the mock data if DEBUG is true", async () => {
    process.env.DEBUG = "true";

    const data = await getProducts(CategoryEnum.MOTORCYCLES);
    expect(data).toEqual(motocyclesMock);
  });

  it("should return the motocycles data", async () => {
    process.env.DEBUG = "true";

    const data = await getProducts(CategoryEnum.MOTORCYCLES);
    expect(data).toEqual(motocyclesMock);
  });

  it("should return an error if the category is not found", async () => {
    process.env.DEBUG = "true";

    try {
      await getProducts("invalid" as CategoryEnum);
    } catch (error) {
      expect(error).toEqual(new Error("Category is not valid"));
    }
  });

  it("should return an error if the category is not provided", async () => {
    try {
      // @ts-expect-error: Testing missing parameter
      await getProducts();
    } catch (error) {
      expect(error).toEqual(new Error("Category is required"));
    }
  });

  // Get product by ID
  it("should return the motocycle by id", async () => {
    process.env.DEBUG = "true";

    const data = await getProductById({
      id: bikeID,
      category: CategoryEnum.MOTORCYCLES,
    });
    expect(data).toEqual(motocyclesMock[0]);
  });

  it("should return the accessory by id", async () => {
    process.env.DEBUG = "true";

    const data = await getProductById({
      id: accessoryID,
      category: CategoryEnum.ACCESSORIES,
    });
    expect(data).toEqual(accessoriesMock[0]);
  });

  it("should return undefined if the product is not found", async () => {
    process.env.DEBUG = "true";

    const data = await getProductById({
      id: "invalid",
      category: CategoryEnum.MOTORCYCLES,
    });
    expect(data).toBeUndefined();
  });

  it("should return an error if the category is not found", async () => {
    process.env.DEBUG = "true";

    try {
      await getProductById({ id: bikeID, category: "invalid" as CategoryEnum });
    } catch (error) {
      expect(error).toEqual(new Error("Category is not valid"));
    }
  });
});
