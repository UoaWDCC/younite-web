import { z } from "zod";
import { memberSchema } from "../components/Member";
import { roleSectionSchema } from "../components/RoleSection";

export const teamSchema = z.object({
  description: z.string(),
  teamPhoto: z.any(),
  CommitteeYear: z.number(),
  Chairs: z.array(memberSchema),
  RoleSection: z.array(roleSectionSchema),
});

export type Team = z.infer<typeof teamSchema>;
