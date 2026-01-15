import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import {z} from 'astro/zod';

const stretches = defineCollection({
  loader: glob({ pattern: "**/*.json", base:"./src/data/stretches"}),
  schema: ({image}) => z.object({
    title: z.string(),
    preparation: z.string(),
    execution: z.string(),
    comments: z.string().optional(),
    example: image(),
    exampleAlt: z.string(),
    targets: z.array(z.string()),
  }),
});

export const collections = {stretches}
