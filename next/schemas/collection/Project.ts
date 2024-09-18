import { z } from "zod";
import { imageSchema } from "../Image";

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  Date: z.coerce.date(),
  image: imageSchema,
  Description: z.string(),
});

export type ProjectType = z.infer<typeof projectSchema>;
