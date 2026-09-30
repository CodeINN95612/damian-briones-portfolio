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
    /** Mostly case studies; the rest are the occasional aside. */
    category: z
      .enum(["case-study", "project", "research", "personal"])
      .default("case-study"),
    /** Slug of the job this post came out of, e.g. "mikmak". Links the post
        and the job to each other. */
    experience: z.string().optional(),
  }),
});

// One file per job and language, same id scheme as the blog. Only the latest
// position is kept; the markdown body is the longer story for /experience.
const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    /** One line on what the business does, for the home page. */
    summary: z.string(),
    location: z.string(),
    /** "2019-09"; the day is ignored. */
    start: z.coerce.date(),
    /** Leave out for the current job. */
    end: z.coerce.date().optional(),
    /** The results to lead with: a short figure and what it means. */
    highlights: z
      .array(z.object({ metric: z.string(), label: z.string() }))
      .min(1)
      .max(3),
    stack: z.array(z.string()),
  }),
});

export const collections = { blog, experience };
