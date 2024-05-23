import Link from "next/link";

type A1LinkProps = {
  label: string;
  url: string;
  newTab?: boolean;
  classList?: string;
  children?: React.ReactNode;
};

export const A1Link = ({
  label,
  url,
  newTab,
  children,
  classList,
}: A1LinkProps) => {
  return (
    <Link
      className={`hover:text-primary ${classList}`}
      href={url}
      {...(newTab ? { target: "_blank" } : {})}
    >
      <span className="link-label relative z-10">{label}</span>
      {children && children}
    </Link>
  );
};
