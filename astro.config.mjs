// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

// https://astro.build/config
export default defineConfig({
  base: isGitHubPages ? "/astro-start" : "",
  site: isGitHubPages
    ? "https://certinax.github.io/astro-start/"
    : "http://localhost:4321",
  integrations: [mdx(), sitemap()],
});
