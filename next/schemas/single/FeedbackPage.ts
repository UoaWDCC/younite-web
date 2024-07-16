import { z } from "zod";

export const feedbackPageSchema = z.object({
  QuestionAnswer: z.array(
    z.object({
      Question: z.string(),
      Answer: z.string(),
    })
  ),
});

export type FeedbackPage = z.infer<typeof feedbackPageSchema>;
