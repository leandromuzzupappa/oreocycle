import Link from "next/link";

type A1LinkProps = {
  label: string;
  url: string;
  newTab?: boolean;
};

export const A1Link = ({ label, url, newTab }: A1LinkProps) => {
  return (
    <Link
      className="hover:text-primary"
      href={url}
      {...(newTab ? { target: "_blank" } : {})}
    >
      {label}
    </Link>
  );
};
