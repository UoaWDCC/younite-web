import { z } from "zod";

export const projectSchema = z.object({
	slug: z.string(),
	title: z.string(),
	Date: z.any(),
	image: z.any(),
	blocks: z.array(z.any()),
	Description: z.string(),
});
