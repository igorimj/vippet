import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada em pelagem, água de banho e ervas calmantes
        clay: {
          50: "#fbf6f1",
          100: "#f5e9de",
          200: "#e8cfb6",
          300: "#d9b18a",
          400: "#c68f5f",
          500: "#a8703f",
          600: "#8a5730",
          700: "#6d4426",
          800: "#4f321d",
          900: "#332015",
        },
        sage: {
          50: "#f2f6f1",
          100: "#e1ebde",
          200: "#c4d8bd",
          300: "#a2c096",
          400: "#7ea56e",
          500: "#5f8a4f",
          600: "#4a6d3e",
          700: "#3a5631",
          800: "#293c22",
          900: "#1b2716",
        },
        ink: "#1f2420",
        cream: "#faf7f2",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
