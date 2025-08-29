// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/astro-start/",
  site: "https://certinax.github.io/astro-start/",
  integrations: [mdx(), sitemap()],
});
