import {
	data,
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';

import stylesheet from '@/index.css?url';
import { siteOrigin } from '@/lib/site-origin.server';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

/* -------------------------------------------------------------------------- */
/*                                  Links                                     */
/* -------------------------------------------------------------------------- */

export const links: Route.LinksFunction = () => [
	/* Styles */
	{
		rel: 'stylesheet',
		href: stylesheet,
	},

	/* ---------------------------------------------------------------------- */
	/* Favicons                                                               */
	/* ---------------------------------------------------------------------- */

	/* Modern scalable master favicon */
	

	/* Traditional fallback */
	{
		rel: 'icon',
		type: 'image/x-icon',
		href: '/favicon_io/favicon.ico',
	},

	/* PNG favicon sizes */
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: '/favicon_io/favicon-16x16.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: '/favicon_io/favicon-32x32.png',
	},
	

	/* Apple */
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: '/favicon_io/apple-touch-icon.png',
	},

	/* PWA / Android */
	{
		rel: 'manifest',
		href: '/favicon_io/site.webmanifest',
	},

	/* ---------------------------------------------------------------------- */
	/* Fonts                                                                  */
	/* ---------------------------------------------------------------------- */

	{
	rel: 'preload',
	href: '/fonts/hikasami/Hikasami-VF.woff2',
	as: 'font',
	type: 'font/woff2',
	crossOrigin: 'anonymous',
},
{
	rel: 'preconnect',
	href: 'https://fonts.googleapis.com',
},
{
	rel: 'preconnect',
	href: 'https://fonts.gstatic.com',
	crossOrigin: 'anonymous',
},
{
	rel: 'stylesheet',
	href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap',
},
];

/* -------------------------------------------------------------------------- */
/*                              Global SEO                                    */
/* -------------------------------------------------------------------------- */

export const meta: Route.MetaFunction = () => {
	return [
		{
			title:
				'Codelaro | Web Development, Software & AI Solutions',
		},
		{
			name: 'description',
			content:
				'Codelaro builds modern websites, web applications, custom software, eCommerce solutions, and AI-powered automation for businesses ready to grow.',
		},

		/* Search engines */
		{
			name: 'robots',
			content:
				'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
		},

		{
			name: 'author',
			content: 'Codelaro',
		},

		{
			name: 'application-name',
			content: 'Codelaro',
		},

		{
			name: 'theme-color',
			content: '#0F172A',
		},

		/* Open Graph */
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:site_name',
			content: 'Codelaro',
		},
		{
			property: 'og:title',
			content:
				'Codelaro | Web Development, Software & AI Solutions',
		},
		{
			property: 'og:description',
			content:
				'Modern websites, custom software, web applications and AI-powered solutions built to help businesses launch and grow.',
		},
		{
			property: 'og:image',
			content: '/og-image.png',
		},
		{
			property: 'og:image:alt',
			content: 'Codelaro — Code. Launch. Grow.',
		},

		/* Twitter / X */
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			name: 'twitter:title',
			content:
				'Codelaro | Web Development, Software & AI Solutions',
		},
		{
			name: 'twitter:description',
			content:
				'Modern websites, custom software, web applications and AI-powered solutions built to help businesses launch and grow.',
		},
		{
			name: 'twitter:image',
			content: '/og-image.png',
		},
	];
};

/* -------------------------------------------------------------------------- */
/*                                  Loader                                    */
/* -------------------------------------------------------------------------- */

/**
 * Publishes the site's public origin, which `seo()` reads to build canonical and
 * `og:url` tags, and advertises the sitemap to crawlers that read response
 * headers rather than HTML.
 *
 * A `meta` export can only reach server data through `matches`, and the `headers`
 * export cannot see loader data at all, so both have to travel this way.
 */
export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);

	return data(
		{ origin },
		{
			headers: {
				Link: `<${origin}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
			},
		},
	);
}

/* -------------------------------------------------------------------------- */
/*                                  Headers                                   */
/* -------------------------------------------------------------------------- */

/**
 * A page route that exports `headers` replaces this one, so merge `parentHeaders`
 * there rather than returning only that route's own headers.
 */
export function headers({ loaderHeaders }: Route.HeadersArgs) {
	return loaderHeaders;
}

/* -------------------------------------------------------------------------- */
/*                                  Layout                                    */
/* -------------------------------------------------------------------------- */

export function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <Links />
                <Meta />
            </head>

            <body>
                <div id="root">{children}</div>

                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

/* -------------------------------------------------------------------------- */
/*                                    App                                     */
/* -------------------------------------------------------------------------- */

export default function App() {
	return (
		<div className="flex min-h-[100dvh] flex-col">
			<SiteHeader />

			<div className="flex-1">
				<Outlet />
			</div>

			<SiteFooter />
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/*                              Error Boundary                                */
/* -------------------------------------------------------------------------- */

export function ErrorBoundary({
	error,
}: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';

		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (
		import.meta.env.DEV &&
		error &&
		error instanceof Error
	) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main>
			<h1>{message}</h1>

			<p>{details}</p>

			{stack ? (
				<pre>
					<code>{stack}</code>
				</pre>
			) : null}
		</main>
	);
}