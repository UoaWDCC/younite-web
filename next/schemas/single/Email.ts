import { z } from "zod";

export const emailSchema = z.object({
  name: z.string(),
  senderEmail: z.string().email(),
  body: z.string(),
});

