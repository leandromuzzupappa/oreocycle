"use server";
import { endpoints } from "@config/endpoints";
import { coreMock } from "@data/mock/core";
import { Core, Menu } from "@data/types/core";

export const getCore = async (): Promise<Core> => {
  if (process.env.DEBUG == "true") return coreMock;

  try {
    const coreData = fetch(endpoints.config, {
      headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
    });

    const data: Core = await coreData.then((res) => res.json());
    data.header.menu = sanitizeMenuItems(data.header.menu);

    return data;
  } catch (error) {
    console.log("Cannot get the core data, retrieving local data instead");
    return coreMock;
  }
};

const sanitizeMenuItems = (menuData: Menu[]) => {
  return menuData.filter(({ slug }) => {
    // Filter out simpli homepage from cateogries using slug
    return slug !== "SimpliMuv";
  });
};
