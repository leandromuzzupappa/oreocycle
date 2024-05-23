import {
  ArrowRightIcon,
  CategoryIcon,
  DateIcon,
  EngineIcon,
  MapIcon,
  RulerIcon,
  SearchIcon,
  ShoppingCartIcon,
  SimpliMuvLogo,
  SliderArrowLeft,
  SliderArrowRight,
  TimeIcon,
} from "./icons";

type IconProps = {
  name: IconNames;
  classList?: string;
  selfRef?: React.RefObject<HTMLSpanElement>;
  label?: string;
};

export const A2Icon = ({ name, classList = "", selfRef, label }: IconProps) => {
  const IconComponent = iconList[name as keyof typeof iconList];

  return (
    <span
      ref={selfRef}
      className={classList}
      {...(label ? { "aria-label": label } : {})}
    >
      <IconComponent />
    </span>
  );
};

export enum IconNames {
  ARROW_RIGHT_ICON = "arrow-right",
  CATEGORY_ICON = "category",
  DATE_ICON = "date",
  ENGINE_ICON = "engine",
  MAP_ICON = "map",
  RULER_ICON = "ruler",
  SEARCH_ICON = "search",
  SHOPPING_CART_ICON = "shopping-cart",
  SIMPLI_LOGO = "simpli-logo",
  SLIDER_ARROW_LEFT = "slider-arrow-left",
  SLIDER_ARROW_RIGHT = "slider-arrow-right",
  TIME_ICON = "time",
}

export const iconList = {
  [IconNames.ARROW_RIGHT_ICON]: ArrowRightIcon,
  [IconNames.CATEGORY_ICON]: CategoryIcon,
  [IconNames.DATE_ICON]: DateIcon,
  [IconNames.ENGINE_ICON]: EngineIcon,
  [IconNames.MAP_ICON]: MapIcon,
  [IconNames.RULER_ICON]: RulerIcon,
  [IconNames.SEARCH_ICON]: SearchIcon,
  [IconNames.SHOPPING_CART_ICON]: ShoppingCartIcon,
  [IconNames.SIMPLI_LOGO]: SimpliMuvLogo,
  [IconNames.SLIDER_ARROW_LEFT]: SliderArrowLeft,
  [IconNames.SLIDER_ARROW_RIGHT]: SliderArrowRight,
  [IconNames.TIME_ICON]: TimeIcon,
};
