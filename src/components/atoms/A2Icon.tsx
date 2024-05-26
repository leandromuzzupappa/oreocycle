import {
  ArrowRightIcon,
  CategoryIcon,
  CloseIcon,
  DateIcon,
  EngineIcon,
  FacebookIcon,
  InstagramIcon,
  MapIcon,
  MenuIcon,
  RulerIcon,
  SearchIcon,
  ShoppingCartIcon,
  SimpliMuvLogo,
  SliderArrowLeft,
  SliderArrowRight,
  TimeIcon,
  TwitterIcon,
  YoutubeIcon,
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
  CLOSE_ICON = "close",
  DATE_ICON = "date",
  ENGINE_ICON = "engine",
  FACEBOOK_ICON = "facebook",
  INSTAGRAM_ICON = "instagram",
  MAP_ICON = "map",
  MENU_ICON = "menu",
  RULER_ICON = "ruler",
  SEARCH_ICON = "search",
  SHOPPING_CART_ICON = "shopping-cart",
  SIMPLI_LOGO = "simpli-logo",
  SLIDER_ARROW_LEFT = "slider-arrow-left",
  SLIDER_ARROW_RIGHT = "slider-arrow-right",
  TIME_ICON = "time",
  TWITTER_ICON = "twitter",
  YOUTUBE_ICON = "youtube",
}

export const iconList = {
  [IconNames.ARROW_RIGHT_ICON]: ArrowRightIcon,
  [IconNames.CATEGORY_ICON]: CategoryIcon,
  [IconNames.CLOSE_ICON]: CloseIcon,
  [IconNames.DATE_ICON]: DateIcon,
  [IconNames.ENGINE_ICON]: EngineIcon,
  [IconNames.FACEBOOK_ICON]: FacebookIcon,
  [IconNames.INSTAGRAM_ICON]: InstagramIcon,
  [IconNames.MAP_ICON]: MapIcon,
  [IconNames.MENU_ICON]: MenuIcon,
  [IconNames.RULER_ICON]: RulerIcon,
  [IconNames.SEARCH_ICON]: SearchIcon,
  [IconNames.SHOPPING_CART_ICON]: ShoppingCartIcon,
  [IconNames.SIMPLI_LOGO]: SimpliMuvLogo,
  [IconNames.SLIDER_ARROW_LEFT]: SliderArrowLeft,
  [IconNames.SLIDER_ARROW_RIGHT]: SliderArrowRight,
  [IconNames.TIME_ICON]: TimeIcon,
  [IconNames.TWITTER_ICON]: TwitterIcon,
  [IconNames.YOUTUBE_ICON]: YoutubeIcon,
};
