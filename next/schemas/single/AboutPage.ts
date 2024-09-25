import { z } from "zod";
import { imageSchema } from "../Image";

export const imageTimelineSchema = z.object({
  Date: z.date(),
  Image: imageSchema,
  __component: z.string(),
});

export const textTimelineSchema = z.object({
  Date: z.date(),
  Title: z.string(),
  Description: z.string(),
  __component: z.string(),
});

export const timelineElementSchema = z.union([
  imageTimelineSchema,
  textTimelineSchema,
]);

export type ImageTimelineElement = z.infer<typeof imageTimelineSchema>;
export type TextTimelineElement = z.infer<typeof textTimelineSchema>;
export type TimelineElement = z.infer<typeof timelineElementSchema>;

export const aboutPageSchema = z.object({
  Subtitle: z.string(),
  Values: z.array(
    z.object({
      Name: z.string(),
      ValueDescription: z.string(),
      ExpandedDescription: z.string(),
    }),
  ),
  Timeline: z.array(z.any()),
});

export type AboutPage = z.infer<typeof aboutPageSchema>;
