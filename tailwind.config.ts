import type { Config } from "tailwindcss";

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
        primaryDarkBlue: "#2C2E35"
      },
    },
  },
  plugins: [],
} satisfies Config;
