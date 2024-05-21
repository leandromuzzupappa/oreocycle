"use client";

import { useEffect, useState } from "react";
import { A1Link } from "@atoms/A1Link";
import { A2Icon, IconNames } from "@atoms/A2Icon";
import { getCore } from "@/services/get-core";
import { Menu } from "@data/types/core";

export const M1HeaderNav = () => {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);

  useEffect(() => {
    const getdata = async () => {
      getCore().then((data) => setMenuItems(data.header.menu));
    };

    getdata();
  }, []);

  return (
    <>
      <nav>
        <ul className=" flex gap-4">
          {menuItems.map(({ label, slug, newTab }) => (
            <li key={`header-link-${slug}`} className="hover:text-primary">
              <A1Link label={label} url={slug} newTab={newTab} />
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <ul className=" flex gap-4">
          <li className="hover:text-primary">
            <button>Login</button>
          </li>
          <li className="hover:text-primary">
            <button>
              <A2Icon
                name={IconNames.SEARCH_ICON}
                classList="hover:text-primary"
              />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
