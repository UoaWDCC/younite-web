import { z } from "zod";

// What it was before:
export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  Date: z.any(),
  image: z.any(),
  blocks: z.array(z.any()),
  Description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;


// Changing it for us: removing slug, date, and blocks? Add signup url and link
// What does blocks do im not sure, ask someone lol
export const projectModalSchema = z.object({
  title: z.string(),
  image: z.any(),
  description: z.string(),
  signupurl: z.array(z.string()),
  signuptext: z.array(z.string())
});

export type ProjectModalType = z.infer<typeof projectModalSchema>;

