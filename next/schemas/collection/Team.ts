import { z } from "zod";

export const memberSchema = z.object({
  Name: z.string(),
  Role: z.string(),
  About: z.string(),
  funFact: z.nullable(z.string()),
  Photo: z.any(),
});

export type Member = z.infer<typeof memberSchema>;

export const roleSectionSchema = z.object({
  SectionName: z.string(),
  Description: z.string(),
  Members: z.array(memberSchema),
});

export type RoleSection = z.infer<typeof roleSectionSchema>;


export const teamSchema = z.object({
  description: z.string(),
  teamPhoto: z.any(),
  CommitteeYear: z.number(),
  Chairs: z.array(memberSchema),
  RoleSection: z.array(roleSectionSchema),
});

export type Team = z.infer<typeof teamSchema>;
