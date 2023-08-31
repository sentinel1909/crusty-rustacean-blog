// import utilities from 'astro:content'

import { defineCollection, z } from "astro:content";

// define collections

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedDate: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

// export a collections object to register the collections

export const collections = {
  blog: blogCollection,
};
