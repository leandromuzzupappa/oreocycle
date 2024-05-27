"use client";

import { useEffect, useState } from "react";
import { A1Link } from "@atoms/A1Link";
import { A2Icon, IconNames } from "@atoms/A2Icon";
import { M8SocialLinks } from "./M8SocialLinks";
import { getCore } from "@/services/get-core";
import { Menu } from "@data/types/core";

export const M1HeaderNav = () => {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      const coreData = await getCore();
      if (!coreData) return;
      const menu = coreData.header.menu.map((item) => {
        if (item.slug === "accesories") {
          item.label = "Accessories";
          item.slug = "accessories";
        }

        return item;
      });

      setMenuItems(menu);
    };

    getdata();
  }, []);

  const onMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartButton = () => {
    return (
      <button className="flex align-middle">
        <A2Icon
          name={IconNames.SHOPPING_CART_ICON}
          classList="hover:text-primary mr-2"
          label="Shopping cart"
        />
        <p className="lg:hidden">Cart (1)</p>
      </button>
    );
  };

  const menuMobile = () => {
    const beforeClass =
      "absolute top-0 left-0 w-screen h-screen bg-white -z-10";

    return (
      <nav
        className={`top fixed left-0 top-0 flex h-dvh w-screen flex-col items-stretch pt-[75px] text-center lg:hidden ${beforeClass}`}
      >
        <ul className="space-y-4 border-t-2 border-[#D5D5D5] py-14">
          {menuItems.map(({ label, slug, newTab }) => (
            <li key={`header-link-${slug}`}>
              <A1Link label={label} url={"/" + slug} newTab={newTab} />
            </li>
          ))}
        </ul>

        <div className="cart flex justify-center border-t-2 border-[#D5D5D5] pt-14">
          {cartButton()}
        </div>

        <div className="header-social absolute inset-x-0 bottom-[15%] border-t-2 border-[#D5D5D5] pt-8">
          <div className="scale-[1.5]">
            <M8SocialLinks />
          </div>
        </div>
      </nav>
    );
  };

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex gap-4">
          {menuItems.map(({ label, slug, newTab }) => (
            <li key={`header-link-${slug}`} className="hover:text-primary">
              <A1Link label={label} url={"/" + slug} newTab={newTab} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-actions">
        <ul className=" flex gap-4">
          <li className="hover:text-primary">
            <button className="flex align-middle">
              <A2Icon
                name={IconNames.SEARCH_ICON}
                classList="hover:text-primary mr-2"
              />
              <small className="hidden lg:block">Search</small>
            </button>
          </li>
          <li className="hidden lg:block">{cartButton()}</li>
          <li>
            <button onClick={onMenuOpen}>
              <A2Icon
                name={isMenuOpen ? IconNames.CLOSE_ICON : IconNames.MENU_ICON}
                classList="hover:text-primary lg:hidden"
                label="Open menu"
              />
            </button>
          </li>
        </ul>
      </div>

      {isMenuOpen && menuMobile()}
    </>
  );
};
