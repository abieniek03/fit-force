import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ef233c",
        secondary: "#2b2d42",
        accent: "#fff",
        background: "#fff",
        content: "#1e1e1e",
        error: "#b91c1c",
      },
    },
  },
  plugins: [],
};
export default config;
