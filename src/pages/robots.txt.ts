import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://jerzyjasinski.pl');

  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      `Sitemap: ${new URL('/sitemap.xml', baseUrl).toString()}`,
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
};
