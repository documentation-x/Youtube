import { defineCollection, z } from 'astro:content';

const strategyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const youtubeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const contentHubCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const leadOptimizationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const sopsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['YouTube', 'Content Hub', 'Lead Management', 'Analytics', 'General']).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    project: z.string(),
    date: z.coerce.date(),
    result: z.enum(['성공', '실패', '진행중']),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'strategy': strategyCollection,
  'youtube-seo': youtubeCollection,
  'youtube-analytics': youtubeCollection,
  'content-hub-setup': contentHubCollection,
  'content-hub-automation': contentHubCollection,
  'lead-cro': leadOptimizationCollection,
  'lead-forms': leadOptimizationCollection,
  'sops': sopsCollection,
  'case-studies': caseStudiesCollection,
};
