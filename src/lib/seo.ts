/**
 * Central SEO helper for Codelaro.
 *
 * Generates:
 * - Page title
 * - Meta description
 * - Canonical URL
 * - Robots directives
 * - Open Graph metadata
 * - X / Twitter Card metadata
 * - JSON-LD structured data
 *
 * The root loader publishes the site's public origin. This helper reads that
 * origin from route matches so canonical URLs, Open Graph URLs and social
 * images can always be emitted as absolute URLs.
 */

import type { MetaDescriptor } from 'react-router';

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type RouteMatchLike =
	| {
			id: string;
			loaderData: unknown;
	  }
	| undefined;

export type SeoArgs = {
	matches: readonly RouteMatchLike[];

	location: {
		pathname: string;
	};
};

export type SeoInput = {
	/**
	 * Unique page title.
	 *
	 * Aim for roughly 50–60 characters where practical.
	 */
	title: string;

	/**
	 * Unique page description.
	 *
	 * Aim for roughly 120–160 characters where practical.
	 */
	description: string;

	/**
	 * Canonical pathname.
	 *
	 * Only provide this when the canonical URL should differ from the
	 * currently rendered pathname.
	 *
	 * Example:
	 * path: '/services/web-development'
	 */
	path?: string;

	/**
	 * Social sharing image.
	 *
	 * Can be:
	 * /og/home.png
	 *
	 * or:
	 * https://example.com/image.png
	 */
	image?: string;

	/**
	 * Accessible description for the social image.
	 */
	imageAlt?: string;

	/**
	 * Open Graph content type.
	 *
	 * Use "article" for articles / insights.
	 * Everything else should normally remain "website".
	 */
	type?: 'website' | 'article';

	/**
	 * Prevent the page from appearing in search results.
	 *
	 * Crawlers can still follow links on the page.
	 */
	noindex?: boolean;

	/**
	 * Prevent crawlers from following links.
	 *
	 * This should rarely be necessary.
	 */
	nofollow?: boolean;

	/**
	 * Schema.org structured data.
	 *
	 * Accepts either one object or multiple JSON-LD blocks.
	 */
	jsonLd?: object | object[];
};

/* -------------------------------------------------------------------------- */
/*                              Site Constants                                */
/* -------------------------------------------------------------------------- */

const ROOT_ROUTE_ID = 'root';

const SITE_NAME = 'Codelaro';

const DEFAULT_IMAGE_ALT =
	'Codelaro — Software Development & AI Solutions';

const DEFAULT_LOCALE = 'en_US';

/* -------------------------------------------------------------------------- */
/*                              Origin Helpers                                */
/* -------------------------------------------------------------------------- */

/**
 * Reads the site's public origin from the root route loader.
 */
export const siteOriginFrom = (
	matches: readonly RouteMatchLike[],
): string => {
	const root = matches.find(
		(match) => match?.id === ROOT_ROUTE_ID,
	);

	const origin = (
		root?.loaderData as
			| {
					origin?: string;
			  }
			| undefined
	)?.origin;

	return origin?.replace(/\/+$/, '') ?? '';
};

/**
 * Converts a relative URL/path into an absolute URL.
 *
 * Absolute HTTP(S) URLs are returned unchanged.
 */
export const absoluteUrl = (
	origin: string,
	target: string,
): string => {
	if (/^https?:\/\//i.test(target)) {
		return target;
	}

	const normalizedTarget = target.startsWith('/')
		? target
		: `/${target}`;

	return `${origin}${normalizedTarget}`;
};

/* -------------------------------------------------------------------------- */
/*                           Canonical Normalization                          */
/* -------------------------------------------------------------------------- */

/**
 * Normalizes paths for canonical URLs.
 *
 * Homepage:
 * /
 *
 * Internal page:
 * /services
 *
 * Trailing slashes are removed from internal pages so:
 *
 * /services/
 *
 * becomes:
 *
 * /services
 */
function normalizePath(path: string): string {
	if (!path || path === '/') {
		return '/';
	}

	const normalized = path.startsWith('/')
		? path
		: `/${path}`;

	return normalized.replace(/\/+$/, '');
}

/* -------------------------------------------------------------------------- */
/*                               SEO Builder                                  */
/* -------------------------------------------------------------------------- */

export function seo(
	{ matches, location }: SeoArgs,
	input: SeoInput,
): MetaDescriptor[] {
	const origin = siteOriginFrom(matches);

	const canonicalPath = normalizePath(
		input.path ?? location.pathname,
	);

	const canonical = origin
		? absoluteUrl(origin, canonicalPath)
		: '';

	const imageUrl =
		origin && input.image
			? absoluteUrl(origin, input.image)
			: input.image ?? '';

	const imageAlt =
		input.imageAlt ?? DEFAULT_IMAGE_ALT;

	/* ---------------------------------------------------------------------- */
	/* Robots                                                                 */
	/* ---------------------------------------------------------------------- */

	const robots: string[] = [];

	if (input.noindex) {
		robots.push('noindex');
	} else {
		robots.push('index');
	}

	if (input.nofollow) {
		robots.push('nofollow');
	} else {
		robots.push('follow');
	}

	if (!input.noindex) {
		robots.push(
			'max-image-preview:large',
			'max-snippet:-1',
			'max-video-preview:-1',
		);
	}

	/* ---------------------------------------------------------------------- */
	/* Base Metadata                                                          */
	/* ---------------------------------------------------------------------- */

	const tags: MetaDescriptor[] = [
		{
			title: input.title,
		},

		{
			name: 'description',
			content: input.description,
		},

		{
			name: 'robots',
			content: robots.join(', '),
		},

		/* ------------------------------------------------------------------ */
		/* Open Graph                                                        */
		/* ------------------------------------------------------------------ */

		{
			property: 'og:title',
			content: input.title,
		},

		{
			property: 'og:description',
			content: input.description,
		},

		{
			property: 'og:type',
			content: input.type ?? 'website',
		},

		{
			property: 'og:site_name',
			content: SITE_NAME,
		},

		{
			property: 'og:locale',
			content: DEFAULT_LOCALE,
		},

		/* ------------------------------------------------------------------ */
		/* X / Twitter                                                       */
		/* ------------------------------------------------------------------ */

		{
			name: 'twitter:card',
			content: imageUrl
				? 'summary_large_image'
				: 'summary',
		},

		{
			name: 'twitter:title',
			content: input.title,
		},

		{
			name: 'twitter:description',
			content: input.description,
		},
	];

	/* ---------------------------------------------------------------------- */
	/* Canonical + Open Graph URL                                             */
	/* ---------------------------------------------------------------------- */

	if (canonical) {
		tags.push(
			{
				tagName: 'link',
				rel: 'canonical',
				href: canonical,
			},
			{
				property: 'og:url',
				content: canonical,
			},
		);
	}

	/* ---------------------------------------------------------------------- */
	/* Social Image                                                          */
	/* ---------------------------------------------------------------------- */

	if (imageUrl) {
		tags.push(
			{
				property: 'og:image',
				content: imageUrl,
			},

			{
				property: 'og:image:alt',
				content: imageAlt,
			},

			{
				name: 'twitter:image',
				content: imageUrl,
			},

			{
				name: 'twitter:image:alt',
				content: imageAlt,
			},
		);
	}

	/* ---------------------------------------------------------------------- */
	/* JSON-LD                                                               */
	/* ---------------------------------------------------------------------- */

	const jsonLdBlocks = input.jsonLd
		? Array.isArray(input.jsonLd)
			? input.jsonLd
			: [input.jsonLd]
		: [];

	for (const block of jsonLdBlocks) {
		tags.push({
			'script:ld+json': block,
		});
	}

	return tags;
}