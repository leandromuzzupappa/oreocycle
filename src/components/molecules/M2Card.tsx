import Image from "next/image";

export type M2CardProps = {
  headline?: string;
  description?: string;
  eyebrow?: string;
  ctaLabel?: string;
  image: string;
  alt?: string;
  lazy?: boolean;
};

export const M2Card = ({
  headline,
  description,
  eyebrow,
  ctaLabel,
  image,
  alt = "",
  lazy = false,
}: M2CardProps) => {
  return (
    <article>
      <div className="content-image">
        <Image
          src={image}
          alt={alt}
          width={400}
          height={400}
          layout="responsive"
          loading={lazy ? "lazy" : "eager"}
        />
      </div>
      <div className="content-data">
        {eyebrow && <small className="eyebrow">{eyebrow}</small>}
        {headline && <h2 className="headline">{headline}</h2>}
        {description && <p className="description">{description}</p>}
        {ctaLabel && (
          <a href="#" className="cta">
            {ctaLabel}
          </a>
        )}
      </div>
    </article>
  );
};
