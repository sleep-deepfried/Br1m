import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero": "url('/images/hero-bg.svg')",

      },
      fontFamily:{
        
      },
      colors:{
        gray: "#3B3840",
        footer:"#0D1117",
        "hero-text":"#8B949E",
        "feed-navbar": "#DEDEDE",
        "feed-sidebar": "#F6F6F6",
        "feed-main":"#FAFAFA",
        "feed-category":"#eae8ed",
        "twiitter": '#000000',
        "instagram": '#EF5060'

      }
    },
  },
  plugins: [],
};
export default config;
