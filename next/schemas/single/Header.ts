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

export type HeaderType = z.infer<typeof headerSchema>;