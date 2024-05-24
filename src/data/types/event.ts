import { FeatureType } from "@molecules/M5ProductCard";

export type Event = {
  headline: string;
  image: string;
  url: string;
  location: string;
  price: number;
  features: FeatureType[];
};
