import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#f2f2f2",
      black: "#020000",
      white: "#ffffff",
      "primary-dark": "#f44336",
      "primary-disabled": "#efaca9",
      primary: "#DA291C",
      "secondary-dark": "#000000",
      "secondary-lightest": "#9d9d9d",
      "secondary-disabled": "#6e6e6e",
      secondary: "#2F2F2F",
      "success-lightest": "#d1fae5",
      "success-dark": "#166534",
      success: "#15803d",
      info: "#4e98d4",
      danger: "#dc2626",
      purple: "#903DF7",
      purpleDark: "#180A2A",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
