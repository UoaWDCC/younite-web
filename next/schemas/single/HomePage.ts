import { z } from "zod";

export const homePageSchema = z.object({
  heroParagraph: z.string(),
  blob1: z.string(),
  blob2: z.string(),
  blob3: z.string(),
  textWithImage: z.any(),
});

export type HomePage = z.infer<typeof homePageSchema>;
