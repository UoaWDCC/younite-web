import { z } from "zod";
import { imageSchema } from "../Image";

const valueSchema = z.object({
  Name: z.string(),
  ValueDescription: z.string(),
  Image: imageSchema,
  ExpandedDescription: z.string(),
  ExpandedImage: imageSchema,
});

export type Value = z.infer<typeof valueSchema>;

const imageTimelineSchema = z.object({
  Date: z.date(),
  Image: imageSchema,
  __component: z.string(),
});

const textTimelineSchema = z.object({
  Date: z.date(),
  Title: z.string(),
  Description: z.string(),
  __component: z.string(),
});

const timelineElementSchema = z.union([
  imageTimelineSchema,
  textTimelineSchema,
]);

export type ImageTimelineElement = z.infer<typeof imageTimelineSchema>;
export type TextTimelineElement = z.infer<typeof textTimelineSchema>;
export type TimelineElement = z.infer<typeof timelineElementSchema>;

export const aboutPageSchema = z.object({
  Subtitle: z.string(),
  Values: z.array(valueSchema),
  Timeline: z.array(timelineElementSchema),
});

export type AboutPage = z.infer<typeof aboutPageSchema>;
