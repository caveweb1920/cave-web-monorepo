import type { Config } from "tailwindcss";
import cavePreset from "@cave-web/ui/tailwind.config"; // shared design tokens

const config: Config = {
  presets: [cavePreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
