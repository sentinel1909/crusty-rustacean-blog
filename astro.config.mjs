// Astro configuration

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  outDir: "server/dist",
  integrations: [tailwind(), react()],
  site: "https://blog.crusty-rustacean.dev",
});
