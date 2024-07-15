import { z } from "zod";
import { memberSchema } from "./Member";

export const roleSectionSchema = z.object({
  SectionName: z.string(),
  Description: z.string(),
  Members: z.array(memberSchema),
});

export type RoleSection = z.infer<typeof roleSectionSchema>;
