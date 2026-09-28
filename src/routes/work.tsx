import type { Route } from './+types/work';

import { seo, siteOriginFrom } from '@/lib/seo';

import { WORK_PROJECTS } from '@/data/work';

import { WorkOverviewHero } from '@/components/work/overview-hero';
import { WorkOverviewShowcase } from '@/components/work/overview-showcase';
import { BeyondTheBuild } from '@/components/work/beyond-the-build';

import { CtaSection } from '@/components/cta-section';

/* -------------------------------------------------------------------------- */
/* SEO                                                                        */
/* -------------------------------------------------------------------------- */

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);

	return seo(
		{ matches, location },
		{
			title: 'Software Development Projects & Case Studies | Codelaro',

			description:
				'Explore Codelaro’s software development projects and case studies. Discover our approach to building custom web platforms, digital products, and scalable software solutions.',

			path: '/work',

			jsonLd: [
				{
					'@context': 'https://schema.org',
					'@type': 'CollectionPage',
					name: 'Codelaro Software Development Projects & Case Studies',
					description:
						'Explore selected software development projects, digital products, and case studies presented by Codelaro.',
					url: `${origin}/work`,
				},
				{
					'@context': 'https://schema.org',
					'@type': 'ItemList',
					itemListElement: WORK_PROJECTS.map((project, i) => ({
						'@type': 'ListItem',
						position: i + 1,
						name: project.title,
						url: `${origin}/work/${project.slug}`,
					})),
				},
			],
		},
	);
}

/* -------------------------------------------------------------------------- */
/* Work Page                                                                  */
/* -------------------------------------------------------------------------- */

export default function WorkPage() {
	return (
		<main>
			<WorkOverviewHero />

			<WorkOverviewShowcase />

			<BeyondTheBuild />

			<CtaSection />
		</main>
	);
}