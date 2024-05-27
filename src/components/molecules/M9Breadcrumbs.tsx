import { A1Link } from "@atoms/A1Link";

export type Breadcrumb = {
  label: string;
  url: string;
};

export type M9BreadcrumbsProps = {
  links: Breadcrumb[];
};

export const M9Breadcrumbs = ({ links }: M9BreadcrumbsProps) => {
  return (
    <nav>
      <ul className="flex items-center space-x-2 text-sm">
        {links.map((link, index) => (
          <li key={`breadcrumb-item-${index}`}>
            <span className={`${index === 0 ? "hidden" : "mr-2"}`}>/</span>
            <A1Link
              label={link.label}
              url={link.url}
              classList="text-gray-500 hover:text-gray-700"
            />
          </li>
        ))}

        <li className="space-x-2">
          <span>/</span>
          <span className="text-gray-500">Seleccioná tu versión</span>
        </li>
      </ul>
    </nav>
  );
};
