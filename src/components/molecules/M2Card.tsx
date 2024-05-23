import Image from "next/image";
import { M3CTA } from "@molecules/M3CTA";

export type M2CardProps = {
  classlist?: string;
  headline?: string;
  description?: string;
  eyebrow?: string;
  ctaLabel?: string;
  slug?: string;
  image: string;
  alt?: string;
  lazy?: boolean;
  overlay?: boolean | { show: boolean; color: string; opacity: number };
};

export const M2Card = ({
  classlist,
  headline,
  description,
  eyebrow,
  ctaLabel,
  slug,
  image,
  alt = "",
  lazy = false,
  overlay = false,
}: M2CardProps) => {
  return (
    <article
      className={`${classlist ?? ""} relative aspect-square overflow-hidden rounded-lg`}
    >
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          layout="fill"
          objectFit="cover"
          priority={false}
        />

        {overlay && (
          <div
            className="overlay z-1 absolute inset-0 bg-[#000]"
            style={{
              opacity: typeof overlay === "object" ? overlay.opacity : ".2",
            }}
          />
        )}
      </div>
      <div className="content-data absolute bottom-0 w-full px-7 pb-7 text-white">
        {eyebrow && (
          <small className="eyebrow uppercase text-[#FFC107]">{eyebrow}</small>
        )}
        {headline && (
          <h2 className="headline mb-4 text-balance text-2xl font-bold">
            {headline}
          </h2>
        )}
        {description && <p className="description mb-4">{description}</p>}
        {ctaLabel && slug && <M3CTA label={ctaLabel} url={slug} />}
      </div>
    </article>
  );
};
