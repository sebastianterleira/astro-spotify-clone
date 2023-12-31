import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  output: "server",
  adapter: vercel(),
  prefetch: {
    prefetchAll: false,
  },
  image: {
    domains: ["mosaic.scdn.co"],
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
});
