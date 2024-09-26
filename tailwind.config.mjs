import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#7fd8ec",
  600: "#007385",
  900: "#003943",
  950: "#002931",
};
const gray = {
  100: "#f5f6f8",
  200: "#eceef1",
  300: "#c0c2c6",
  400: "#888b94",
  500: "#555860",
  700: "#35383f",
  800: "#24272d",
  900: "#17181b",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
