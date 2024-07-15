import { z } from "zod";

export const memberSchema = z.object({
  Name: z.string(),
  Role: z.string(),
  About: z.string(),
  funFact: z.nullable(z.string()),
  Photo: z.any(),
});

export type Member = z.infer<typeof memberSchema>;