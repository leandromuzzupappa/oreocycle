import { A2Icon, IconNames } from "@atoms/A2Icon";

export type M4SliderArrowProps = {
  classList?: string;
  disabled: boolean;
  children?: React.ReactNode;
  direction: "next" | "prev";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const M4SliderArrow = ({
  classList,
  children,
  direction = "next",
  ...restProps
}: M4SliderArrowProps) => {
  return (
    <button
      className={`${classList} dsa relative w-10 ${restProps.disabled ? "cursor-not-allowed opacity-50" : ""}`}
      type="button"
      {...restProps}
    >
      <A2Icon
        name={
          direction === "next"
            ? IconNames.SLIDER_ARROW_RIGHT
            : IconNames.SLIDER_ARROW_LEFT
        }
      />
      {children}
    </button>
  );
};
