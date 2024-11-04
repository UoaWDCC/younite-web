import { z } from "zod";
import { imageSchema, optionalImageSchema } from "../Image";

// Values

const valueSchema = z.object({
  Name: z.string(),
  CardDescription: z.string(),
  CardImage: optionalImageSchema,
  PopupDescription: z.string(),
  PopupImage: imageSchema,
});

export type Value = z.infer<typeof valueSchema>;

// Timeline

const imageTimelineSchema = z.object({
  Date: z.coerce.date(),
  Image: imageSchema,
  __component: z.string(),
});

const textTimelineSchema = z.object({
  Date: z.coerce.date(),
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

// Whole page

export const aboutPageSchema = z.object({
  Subtitle: z.string(),
  Values: z.array(valueSchema),
  Timeline: z.array(timelineElementSchema),
});

export type AboutPage = z.infer<typeof aboutPageSchema>;
