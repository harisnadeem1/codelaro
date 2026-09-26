import type { Route } from './+types/solutions';

import { seo, siteOriginFrom } from '@/lib/seo';
import { SOLUTIONS } from '@/data/solutions';

import { SolutionsOverviewHero } from '@/components/solutions/overview-hero';
import { SolutionsOverviewGrid } from '@/components/solutions/overview-grid';
import { SolutionsOverviewApproach } from '@/components/solutions/overview-approach';
import { SolutionsOverviewCta } from '@/components/solutions/overview-cta';

/* -------------------------------------------------------------------------- */
/* SEO Metadata                                                               */
/* -------------------------------------------------------------------------- */

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);

	const pageUrl = `${origin}/solutions`;

	return seo(
		{ matches, location },
		{
			title: 'Custom Software & Digital Solutions | Codelaro',

			description:
				'Explore Codelaro’s tailored software solutions, from startup launches and AI automation to digital transformation. Built to solve real business challenges.',

			path: '/solutions',

			jsonLd: [
				{
					'@context': 'https://schema.org',
					'@type': 'CollectionPage',

					'@id': `${pageUrl}#webpage`,

					name: 'Custom Software & Digital Solutions | Codelaro',

					description:
						'Explore tailored software and digital solutions designed to help businesses launch, innovate, and scale.',

					url: pageUrl,

					inLanguage: 'en',

					mainEntity: {
						'@id': `${pageUrl}#solutions-list`,
					},
				},

				{
					'@context': 'https://schema.org',
					'@type': 'ItemList',

					'@id': `${pageUrl}#solutions-list`,

					name: 'Codelaro Software Solutions',

					numberOfItems: SOLUTIONS.length,

					itemListElement: SOLUTIONS.map(
						(solution, index) => ({
							'@type': 'ListItem',

							position: index + 1,

							name: solution.title,

							url: `${pageUrl}/${solution.slug}`,
						})
					),
				},
			],
		}
	);
}

/* -------------------------------------------------------------------------- */
/* Solutions Overview                                                         */
/* -------------------------------------------------------------------------- */

export default function SolutionsOverviewPage() {
	return (
		<main id="main-content">
			<SolutionsOverviewHero />

			<SolutionsOverviewGrid />

			<SolutionsOverviewApproach />

			<SolutionsOverviewCta />
		</main>
	);
}