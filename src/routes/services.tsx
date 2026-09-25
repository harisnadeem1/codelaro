import type { Route } from './+types/services';

import { seo, siteOriginFrom } from '@/lib/seo';
import { SERVICES } from '@/data/services';

import { ServicesOverviewHero } from '@/components/services/overview-hero';
import { ServicesOverviewBento } from '@/components/services/overview-bento';
import { ServicesOverviewApproach } from '@/components/services/overview-approach';
import { ServicesOverviewCta } from '@/components/services/overview-cta';
import { ServicesOverviewIntro } from '@/components/services/overview-intro';

/* -------------------------------------------------------------------------- */
/* SEO                                                                        */
/* -------------------------------------------------------------------------- */

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);

	const pageUrl = `${origin}/services`;

	const title =
		'Software Development & Technology Services | Codelaro';

	const description =
		'Explore Codelaro’s software development services, including web and mobile development, custom software, AI automation, cloud solutions and more.';

	const servicesList = SERVICES.map((service, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: service.title,
		url: `${origin}/services/${service.slug}`,
	}));

	return seo(
		{ matches, location },
		{
			title,
			description,
			path: '/services',

			jsonLd: {
				'@context': 'https://schema.org',

				'@graph': [
					{
						'@type': 'CollectionPage',
						'@id': `${pageUrl}#webpage`,

						name: title,
						description,

						url: pageUrl,

						inLanguage: 'en',

						mainEntity: {
							'@id': `${pageUrl}#services`,
						},
					},

					{
						'@type': 'ItemList',
						'@id': `${pageUrl}#services`,

						name: 'Codelaro Software Development Services',

						numberOfItems: SERVICES.length,

						itemListElement: servicesList,
					},
				],
			},
		},
	);
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function ServicesOverviewPage() {
	return (
		<main id="main-content">
			<ServicesOverviewHero />

			<ServicesOverviewIntro />


			<ServicesOverviewBento />

			<ServicesOverviewApproach />

			<ServicesOverviewCta />
		</main>
	);
}