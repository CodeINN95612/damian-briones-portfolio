// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://damianbriones.dev",
  prefetch: true,

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      // Outfit is a variable font, so one file covers the whole weight range.
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      // Also variable; it tops out at 800.
      weights: ["100 800"],
      styles: ["normal"],
      // Without this Astro assumes sans-serif and falls back to Arial.
      fallbacks: ["monospace"],
      subsets: ["latin", "latin-ext"],
    },
  ],

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite",
    },
    fallback: {
      en: "es",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});