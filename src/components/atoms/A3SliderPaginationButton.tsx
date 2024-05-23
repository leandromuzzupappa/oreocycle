type A3SliderPaginationButtonType = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  classList?: string;
};

export const A3SliderPaginationButton = ({
  children,
  classList,
  ...restProps
}: A3SliderPaginationButtonType) => {
  return (
    <button type="button" className={classList} {...restProps}>
      {children}
    </button>
  );
};
