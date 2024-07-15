import { z } from "zod";

export const projectsPageSchema = z.object({
  Subtitle: z.string(),
  BackgroundImage: z.any(),
});

export type ProjectsPage = z.infer<typeof projectsPageSchema>;
