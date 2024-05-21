import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "Dark-cyan": "hsl(185, 75%, 39%)",
        "Very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "Dark-grayish-blue": "hsl(227, 10%, 46%)",
        "Darkg-rayish": "hsl(0, 0%, 59%)",
      },
    },
    backgroundImage: {
      "dasktop-top": "url(/images/bg-pattern-top.svg)",
      "dasktop-bottom":"url(/images/bg-pattern-top.svg)",
      "card":"url(/images/bg-pattern-card.svg)",
    },
  },
  plugins: [],
};
export default config;
