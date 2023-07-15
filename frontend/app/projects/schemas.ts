import { z } from "zod";

export const projectSchema = z.object({
	slug: z.string(),
	title: z.string(),
	image: z.any(),
	blocks: z.array(z.any()),
});
