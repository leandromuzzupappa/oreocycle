import {
  ArrowRightIcon,
  SearchIcon,
  ShoppingCartIcon,
  SimpliMuvLogo,
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
  SEARCH_ICON = "search",
  SHOPPING_CART_ICON = "shopping-cart",
  SIMPLI_LOGO = "simpli-logo",
}

export const iconList = {
  [IconNames.ARROW_RIGHT_ICON]: ArrowRightIcon,
  [IconNames.SEARCH_ICON]: SearchIcon,
  [IconNames.SHOPPING_CART_ICON]: ShoppingCartIcon,
  [IconNames.SIMPLI_LOGO]: SimpliMuvLogo,
};
