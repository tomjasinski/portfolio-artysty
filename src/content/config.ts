import { defineCollection, z } from 'astro:content';

const obrazy = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    tytul: z.string(),
    rok: z.number(),
    kategoria: z.string(),
    wymiary: z.string(), // np. "100x80 cm"
    technika: z.string(),
    obraz: image(),
  }),
});

const wystawy = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    tytul: z.string(),
    rok: z.number(),
    typ: z.enum(['indywidualna', 'zbiorowa']),
    miniatura: image().optional(),
    opis: z.string().optional(),
    zdjecia: z.array(image()).optional(),
    linki_media: z.array(z.string().url()).optional(),
  }),
});

export const collections = { obrazy, wystawy };
