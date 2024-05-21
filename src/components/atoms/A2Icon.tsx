import { SearchIcon } from "./icons";

type IconProps = {
  name: IconNames;
  classList?: string;
  selfRef?: React.RefObject<HTMLSpanElement>;
};

export const A2Icon = ({ name, classList = "", selfRef }: IconProps) => {
  const IconComponent = iconList[name as keyof typeof iconList];

  return (
    <span
      ref={selfRef}
      className={`${classList} relative inline-block transition duration-100 ease-in-out`}
    >
      <IconComponent />
    </span>
  );
};

export enum IconNames {
  SEARCH_ICON = "search",
}

export const iconList = {
  [IconNames.SEARCH_ICON]: SearchIcon,
};
