export const endpoints = {
  base:
    process.env.BASE_ENDPOINT ||
    "https://nathan.tasa.develop.simplitec.io/webhook/simplimuv",
  config: "/config",
  createLead: "/createlead",
  accessories: "/products/accessories",
  motocycles: "/products/motorcycles",
};
