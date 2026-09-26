import type { Route } from './+types/solutions.$slug';

import { seo } from '@/lib/seo';
import { getSolutionBySlug } from '@/data/solutions';
import { SolutionDetail } from '@/components/solution/detail';

/* -------------------------------------------------------------------------- */
/* SEO Helpers                                                                 */
/* -------------------------------------------------------------------------- */

function createMetaDescription(
	text: string,
	maxLength = 160
): string {
	const description = text.replace(/\s+/g, ' ').trim();

	if (description.length <= maxLength) {
		return description;
	}

	const truncated = description.slice(0, maxLength - 1);
	const lastSpace = truncated.lastIndexOf(' ');

	return (
		truncated
			.slice(0, lastSpace > 0 ? lastSpace : undefined)
			.replace(/[.,;:!?-]+$/, '') + '…'
	);
}

/* -------------------------------------------------------------------------- */
/* SEO Metadata                                                                */
/* -------------------------------------------------------------------------- */

export function meta({
	matches,
	location,
	params,
}: Route.MetaArgs) {
	const solution = getSolutionBySlug(params.slug);

	/* Invalid solution */

	if (!solution) {
		return seo(
			{ matches, location },
			{
				title: 'Solution Not Found | Codelaro',
				description:
					'The requested solution could not be found. Explore our digital solutions and software development services.',
				noindex: true,
			}
		);
	}

	/* Solution-specific SEO */

	const title = `${solution.title} | Codelaro`;

	const description = createMetaDescription(
		solution.explanation
	);

	const path = `/solutions/${solution.slug}`;

	return seo(
		{ matches, location },
		{
			title,
			description,
			path,

			/* Structured data */

			jsonLd: {
				'@context': 'https://schema.org',

				'@type': 'Service',

				name: solution.title,

				serviceType: solution.title,

				description: solution.explanation,

				provider: {
					'@type': 'Organization',
					name: 'Codelaro',
				},
			},
		}
	);
}

/* -------------------------------------------------------------------------- */
/* Loader                                                                      */
/* -------------------------------------------------------------------------- */

export function loader({ params }: Route.LoaderArgs) {
	const solution = getSolutionBySlug(params.slug);

	if (!solution) {
		throw new Response('Solution not found', {
			status: 404,
			statusText: 'Not Found',
		});
	}

	return {
		slug: solution.slug,
	};
}

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

export default function SolutionPage({
	loaderData,
}: Route.ComponentProps) {
	const solution = getSolutionBySlug(loaderData.slug);

	if (!solution) {
		throw new Response('Solution not found', {
			status: 404,
			statusText: 'Not Found',
		});
	}

	return <SolutionDetail solution={solution} />;
}