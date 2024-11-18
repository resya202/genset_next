import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tealGreen: "#018E75",
        dimGray: "#575D5B",
        tanOrange: "#CF9667",
        primaryOrange: "#F7CB6F",
        primaryWhite: "#F5EFE4",
        primaryBlack: "#2E312F",
        primaryDarkBlue: {
          DEFAULT: "#2C2E35",
          50: "#F7F8F8",
          100: "#EDEDF1",
          200: "#D8DADF",
          300: "#B5B9C4",
          400: "#8D94A3",
          500: "#6F7788",
          600: "#595F70",
          700: "#494E5B",
          800: "#3F434D",
          900: "#373A43",
          950: "#2C2E35",
        }
      },
    },
  },
  plugins: [
    scrollbar,
  ],
} satisfies Config;
