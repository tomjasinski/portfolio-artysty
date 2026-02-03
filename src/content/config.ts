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
  type: 'data',
  schema: ({ image }) => z.object({
    tytul: z.string(),
    rok: z.number(),
    typ: z.enum(['indywidualna', 'zbiorowa']),
    opis: z.string().optional().nullable(),
    opis_pelny: z.string().optional().nullable(),
    linki_media: z.array(z.string().url()).optional().nullable(),
    zdjecia: z.array(image()).optional().nullable(),
    folder_zdjec: z.string().optional().nullable(),
  }),
});

export const collections = { obrazy, wystawy };
