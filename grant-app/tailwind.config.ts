import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgb(var(--bg-primary) / <alpha-value>)",
        soft: "rgb(var(--bg-soft) / <alpha-value>)",
        "text-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "text-soft": "rgb(var(--bg-soft) / <alpha-value>)",
        "color-action": "rgb(var(--color-action) / <alpha-value>)",
        "color-action-2": "rgb(var(--color-action-2) / <alpha-value>)",
        "color-action-unsafe": "rgb(var(--color-action-unsafe) / <alpha-value>)",
        "color-primary-hover": "rgb(var(--color-primary-hover) / <alpha-value>)",
        "color-secondary-hover": "rgb(var(--color-secondary-hover) / <alpha-value>)",
      }
    }
  },
  plugins: [],
};
export default config;
