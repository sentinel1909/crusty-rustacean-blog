// Astro configuration

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  outDir: "./server/dist",
  integrations: [tailwind()]
});