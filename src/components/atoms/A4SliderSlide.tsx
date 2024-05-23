type A4SliderSlideProps = {
  classList?: string;
  children: React.ReactNode;
};

export const A4SliderSlide = ({ classList, children }: A4SliderSlideProps) => {
  return (
    <div
      className={`slider-slide ${classList ?? ""} flex-0 w-full min-w-0 flex-none`}
    >
      {children}
    </div>
  );
};
