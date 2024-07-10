import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "barlow": ["var(--font-barlow)"],
        "barlow_condensed": ["var(--font-barlow-condensed)"],
        "bellefair": ["var(--bellefair)"]
      },
      screens: {
        'xl': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
