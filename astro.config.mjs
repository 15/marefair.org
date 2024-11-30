import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://2024.marefair.org",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    icon(),
  ],
  output: "hybrid",
  adapter: cloudflare({
    imageService: "compile",
  }),
  redirects: {
    '/schedule': '/schedule/friday',
  }
});
