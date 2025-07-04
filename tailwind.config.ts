import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0072CE",
        "brand-dark": "#004F9E",
        "brand-light": "#E2F0FF",
        accent: "#F7931D",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["DM Sans", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
