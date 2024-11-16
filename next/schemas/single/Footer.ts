import { z } from "zod";

export const footerSchema = z.object({
  logoSection: z.array(
    z.object({
      url: z.string(),
      title: z.string(),
      image: z.any(),
    }),
  ),
  younite: z.object({
      url: z.string(),
      title: z.string(),
    }),
  CreditsPrivacy: z.string(),
});

export type FooterType = z.infer<typeof footerSchema>;