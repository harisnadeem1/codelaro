import type { Route } from './+types/sitemap.xml';
import { siteOrigin } from '@/lib/site-origin.server';
import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';
import { INDUSTRIES } from '@/data/industries';
import { WORK_PROJECTS } from '@/data/work';

type SitemapEntry = {
	path: string;
	lastmod?: string;
};

const STATIC_PATHS = [
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
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

function toLoc(origin: string, path: string): string {
	return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}

function serializeSitemap(origin: string, entries: SitemapEntry[]): string {
	const urls = entries
		.map(entry => {
			const loc = escapeXml(toLoc(origin, entry.path));
			const lastmod = entry.lastmod
				? `\n\t\t<lastmod>${escapeXml(entry.lastmod)}</lastmod>`
				: '';

			return `\t<url>\n\t\t<loc>${loc}</loc>${lastmod}\n\t</url>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/**
 * Public dynamic URLs (blog posts, PDPs, articles).
 * Return `{ path, lastmod }` in the same change that adds a collection.
 * Return `[]` only while the site has no public records; clear those URLs
 * again in the same change that removes the collection.
 */
async function getDynamicEntries(): Promise<SitemapEntry[]> {
	const services = SERVICES.map((service) => ({ path: `/services/${service.slug}` }));
	const solutions = SOLUTIONS.map((solution) => ({ path: `/solutions/${solution.slug}` }));
	const industries = INDUSTRIES.map((industry) => ({ path: `/industries/${industry.slug}` }));
	const caseStudies = WORK_PROJECTS.map((project) => ({ path: `/work/${project.slug}` }));

	return [...services, ...solutions, ...industries, ...caseStudies];
}

export async function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);
	const entries: SitemapEntry[] = [
		...STATIC_PATHS.map(path => ({ path })),
		...(await getDynamicEntries()),
	];

	return new Response(serializeSitemap(origin, entries), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
			'Access-Control-Allow-Origin': '*',
		},
	});
}
