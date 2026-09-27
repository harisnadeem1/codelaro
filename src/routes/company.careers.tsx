import type { Route } from './+types/company.careers';

import { seo } from '@/lib/seo';

import { CareersHero } from '@/components/company/careers-hero';
import { CareersValues } from '@/components/company/careers-values';
import { CareersListings } from '@/components/company/careers-listings';
import { CtaSection } from '@/components/cta-section';

/* -------------------------------------------------------------------------- */
/* SEO Metadata                                                               */
/* -------------------------------------------------------------------------- */

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Careers at Codelaro | Join Our Software Development Team',

			description:
				'Explore careers at Codelaro. Discover our engineering culture, collaborative approach, professional values and available opportunities in software development, design and technology.',

			path: '/company/careers',

			jsonLd: {
				'@context': 'https://schema.org',

				'@type': 'CollectionPage',

				name: 'Careers at Codelaro',

				url: 'https://codelaro.com/company/careers',

				description:
					'Learn about careers at Codelaro, our approach to collaboration and professional development, and current opportunities in software engineering, design and technology.',

				about: {
					'@type': 'Organization',

					name: 'Codelaro',

					url: 'https://codelaro.com',

					slogan: 'Code. Launch. Grow.',
				},

				isPartOf: {
					'@type': 'WebSite',

					name: 'Codelaro',

					url: 'https://codelaro.com',
				},

				inLanguage: 'en',
			},
		},
	);
}

/* -------------------------------------------------------------------------- */
/* Careers Page                                                               */
/* -------------------------------------------------------------------------- */

export default function CareersPage() {
	return (
		<main>
			<CareersHero />

			<CareersListings />



			<CareersValues />


			<CtaSection
				background="white"
				eyebrow="Connect With Codelaro"
				title={
					<>
						Your next chapter
						<br />
						<span className="text-brand">
							could start here.
						</span>
					</>
				}
				subtitle="Interested in building meaningful digital products? Explore career opportunities at Codelaro and discover how your skills could contribute to our growing technology company."
			/>
		</main>
	);
}