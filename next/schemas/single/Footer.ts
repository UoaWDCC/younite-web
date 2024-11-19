import { z } from "zod";
import { imageSchema } from "../Image";

export const footerSchema = z.object({
  topFooter: z.array(
    z.object({
      url: z.string(),
      image: imageSchema,
    }),
  ),
  logoSection: z.array(
    z.object({
      url: z.string(),
      title: z.string(),
      image: imageSchema,
    }),
  ),
  younite: z.object({
    url: z.string(),
    title: z.string(),
  }),
  CreditsPrivacy: z.string(),
});

export type FooterType = z.infer<typeof footerSchema>;