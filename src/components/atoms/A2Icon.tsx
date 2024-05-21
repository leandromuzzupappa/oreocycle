import { SearchIcon, SimpliMuvLogo, ShoppingCartIcon } from "./icons";

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
      className={`${classList} relative inline-block transition duration-100 ease-in-out`}
      {...(label ? { "aria-label": label } : {})}
    >
      <IconComponent />
    </span>
  );
};

export enum IconNames {
  SEARCH_ICON = "search",
  SIMPLI_LOGO = "simpli-logo",
  SHOPPING_CART_ICON = "shopping-cart",
}

export const iconList = {
  [IconNames.SEARCH_ICON]: SearchIcon,
  [IconNames.SIMPLI_LOGO]: SimpliMuvLogo,
  [IconNames.SHOPPING_CART_ICON]: ShoppingCartIcon,
};
