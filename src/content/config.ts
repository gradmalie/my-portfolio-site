import { defineCollection, z } from 'astro:content';

// Portfolio collection schema
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    personas: z.array(z.string()),
    painPoints: z.array(z.string()),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

// Export collections
export const collections = {
  'portfolio': portfolioCollection,
  'blog': blogCollection,
};