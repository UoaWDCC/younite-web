import { z } from "zod";

const imageFormatSchema = z.object({
  name: z.string(),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  path: z.string().nullable(),
  width: z.number(),
  height: z.number(),
  size: z.number(),
  url: z.string(),
});

export type ImageFormat = z.infer<typeof imageFormatSchema>;

export const imageSchema = z.object({
  data: z.object({
    attributes: z.object({
      name: z.string(),
      alternativeText: z.string().nullable(),
      caption: z.string().nullable(),
      width: z.number(),
      height: z.number(),
      formats: z.object({
        large: imageFormatSchema.optional(),
        medium: imageFormatSchema.optional(),
        small: imageFormatSchema.optional(),
        thumbnail: imageFormatSchema.optional(),
      }),
      hash: z.string(),
      ext: z.string(),
      mime: z.string(),
      size: z.number(),
      url: z.string(),
      previewUrl: z.string().nullable(),
      provider: z.string(),
      provider_metadata: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  }).nullable(),
});

export type ImageType = z.infer<typeof imageSchema>;
