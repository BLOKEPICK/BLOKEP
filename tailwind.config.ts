import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0a0000",
          text: "#313131",
          subtle: "#888888",
          border: "#dedede",
          footerBg: "#111111",
          footerBorder: "#212121",
          footerText: "#a8a8a8",
          accent: "#6eb48c"
        }
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.06)",
      }
    },
  },
  plugins: [],
};
export default config;
