import { A1Link } from "@atoms/A1Link";

export type M7TextBannerProps = {
  headline: string;
  linkLabel?: string;
  link?: string;
  classList?: string;
  align?: "left" | "center" | "right";
};

export const M7TextBanner = ({
  headline,
  linkLabel,
  link,
  classList,
  align = "left",
}: M7TextBannerProps) => {
  const alignClassMap = {
    left: "lg:justify-start",
    center: "lg:justify-center",
    right: "lg:justify-end",
  };

  return (
    <section
      className={`newsletter relative mb-12 flex w-full flex-wrap items-center justify-center gap-4 py-16 ${alignClassMap[align]} ${classList || ""}`}
    >
      <h2 className="max-w-[600px] text-center text-3xl font-bold leading-relaxed text-white lg:text-left">
        {headline}
      </h2>

      {linkLabel && link && (
        <A1Link
          url={link}
          label={linkLabel}
          classList="relative border-2 py-4 px-8 rounded-lg text-white font-semibold hover:text-white [&>.a1]:hover:-translate-y-[45%] [&>.a1]:hover:scale-[12] [&>.a1]:hover:bg-purple [&>.a1]:hover:bg-purple [&>.a1]:hover:h-3 overflow-hidden"
        >
          <div className="a1 transition-translate -z-1 absolute left-[50%] size-5 max-w-[624px] -translate-x-[50%] translate-y-[110%] rounded-full bg-purpleDark duration-500 ease-in-out"></div>
        </A1Link>
      )}

      <div className="absolute left-0 left-[50%] top-0 -z-10 h-full w-screen -translate-x-2/4 overflow-hidden bg-[#E1CDFD]">
        <div className="a1 absolute left-[12%] top-[30%] h-[283px] w-full max-w-[624px] scale-[1.2] rounded-full bg-[#903DF7] opacity-50 blur-3xl"></div>
        <div className="a1 absolute left-[55%] top-[0%] h-[303px] w-full max-w-[624px] rotate-12 scale-[1.2] rounded-full bg-[#E75C49] opacity-40 blur-3xl"></div>
      </div>
    </section>
  );
};
