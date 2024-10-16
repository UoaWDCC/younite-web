import { z } from "zod";

export const footerSchema = z.object({
  logoSection: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
    }),
  ),
  logo: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
    }),
  ),
  CreditsPrivacy: z.string()
});

export type HeaderType = z.infer<typeof footerSchema>;