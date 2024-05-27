export type M6TextContentProps = {
  headline: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center" | "right";
};

export const M6TextContent = ({
  headline,
  description,
  eyebrow,
  align = "left",
}: M6TextContentProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase text-purple ${alignClass}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`mb-4 text-3xl font-bold text-black ${alignClass}`}>
        {headline}
      </h2>
      {description && (
        <p
          className={`mb-11 w-full text-pretty text-base font-medium text-secondary-lightest ${align === "center" ? `${alignClass} mx-auto lg:w-[530px]` : `${alignClass}`} `}
        >
          {description}
        </p>
      )}
    </>
  );
};
