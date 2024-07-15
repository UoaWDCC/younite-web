import { z } from "zod";

export const headerSchema = z.object({
  Logo: z.any(),
  navigation: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
    })
  ),
});

export type Header = z.infer<typeof headerSchema>;