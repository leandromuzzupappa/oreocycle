export type Product = {
  name: string;
  type: Brand;
  uid: null;
  seller: Seller;
  slug: string;
  metadata: null;
  uuid: string;
  brand: Brand;
  used: boolean;
  featured: boolean;
  favourite: boolean;
  links: unknown[];
  seo: null;
  images: unknown[];
  categories: Category[];
  accessories: unknown[];
  services: unknown[];
  similar_to: unknown[];
  tags: unknown[];
  variants: Variant[];
};

export type Brand = {
  name: string;
  uuid: string;
};

export type Category = {
  name: string;
  locale: string;
  uuid: string;
};

export type Seller = {
  name: string;
  uuid: string;
  metadata: null;
};

export type Variant = {
  name: string;
  slug: null;
  uid: null;
  externalId: string;
  uuid: string;
  used: null;
  featured: boolean;
  favourite: boolean;
  main: boolean;
  metadata: null;
  links: unknown[];
  seo: null;
  images: Image[];
  prices: Price[];
  details: Details;
  tags: unknown[];
  stock: number;
};

export type Details = {
  years: BodyType[];
  body_types: BodyType[];
  features: BodyType[];
  motors: BodyType[];
  fuel_types: BodyType[];
  doors: BodyType[];
  transmissions: BodyType[];
  testdrive: BodyType[];
  description: BodyType[];
  kilometers: BodyType[];
};

export type BodyType = {
  value: string;
  description: null;
  extra: null;
};

export type Image = {
  id: number;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  data: Data;
  type: string;
  uuid: null;
};

export type Data = {
  view_type: string;
};

export type Formats = {
  thumbnail?: Thumbnail;
  small?: Thumbnail;
};

export type Thumbnail = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};

export type Price = {
  amount: number;
  currency: string;
  purpose: string;
  uuid: string;
};
