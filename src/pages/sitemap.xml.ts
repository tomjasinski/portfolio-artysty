import type { APIRoute } from 'astro';

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/obrazy/', priority: '0.9' },
  { path: '/wystawy/', priority: '0.8' },
  { path: '/o-mnie/', priority: '0.7' },
  { path: '/filmy/', priority: '0.6' },
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://jerzyjasinski.pl');
  const urls = routes
    .map(({ path, priority }) => {
      const loc = escapeXml(new URL(path, baseUrl).toString());

      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        '    <changefreq>monthly</changefreq>',
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return new Response(
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      urls,
      '</urlset>',
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
