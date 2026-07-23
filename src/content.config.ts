import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Entry ids are locale-prefixed by the directory layout: "es/hello-world",
// "en/hello-world". Both languages share a slug, so the id is `${lang}/${slug}`.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog };
