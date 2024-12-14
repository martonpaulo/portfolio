import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
          dark: "#0a0a0a",
        },
        foreground: {
          DEFAULT: "#171717",
          dark: "#ededed",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
