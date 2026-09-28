import type { LoaderFunctionArgs } from 'react-router';

import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';
import { INDUSTRIES } from '@/data/industries';

import { siteOrigin } from '@/lib/site-origin.server';

const STATIC_ROUTES = [
    '/',
    '/services',
    '/solutions',
    '/industries',
    '/work',
    '/company',
    '/company/why-codelaro',
    '/company/process',
    '/company/careers',
    '/insights',
    '/contact',
    '/start-a-project',
    '/book-a-consultation',
    '/faq',
    '/privacy-policy',
    '/terms',
    '/cookie-policy',
    '/accessibility',
];

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function normalizeOrigin(origin: string): string {
    return origin.replace(/\/+$/, '');
}

function generateSitemap(
    origin: string,
    routes: string[]
): string {
    const urls = [...new Set(routes)];

    const entries = urls
        .map((path) => {
            const url = `${origin}${path}`;

            return [
                '  <url>',
                `    <loc>${escapeXml(url)}</loc>`,
                '  </url>',
            ].join('\n');
        })
        .join('\n');

    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        entries,
        '</urlset>',
    ].join('\n');
}

export function loader({
    request,
}: LoaderFunctionArgs) {
    const origin = normalizeOrigin(
        siteOrigin(request)
    );

    const serviceRoutes = SERVICES.map(
        ({ slug }) => `/services/${slug}`
    );

    const solutionRoutes = SOLUTIONS.map(
        ({ slug }) => `/solutions/${slug}`
    );

    const industryRoutes = INDUSTRIES.map(
        ({ slug }) => `/industries/${slug}`
    );

    const routes = [
        ...STATIC_ROUTES,
        ...serviceRoutes,
        ...solutionRoutes,
        ...industryRoutes,
    ];

    const sitemap = generateSitemap(
        origin,
        routes
    );

    return new Response(sitemap, {
        status: 200,
        headers: {
            'Content-Type':
                'application/xml; charset=utf-8',

            'Cache-Control':
                'public, max-age=3600, s-maxage=3600',
        },
    });
}