import type { Route } from './+types/industries';
import { seo, siteOriginFrom } from '@/lib/seo';
import { INDUSTRIES } from '@/data/industries';
import { IndustriesOverviewHero } from '@/components/industries/overview-hero';
import { IndustriesOverviewGrid } from '@/components/industries/overview-grid';
import { IndustriesOverviewApproach } from '@/components/industries/overview-approach';
import { IndustriesOverviewCta } from '@/components/industries/overview-cta';

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	return seo({ matches, location }, {
		title: 'Industries — Codelaro',
		description:
			'Nine industries we serve with domain-first software: fintech, retail, healthcare, education, real estate, professional services, logistics, travel and startups.',
		path: '/industries',
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'CollectionPage',
				name: 'Codelaro Industries',
				description:
					'Domain-first software development across the sectors Codelaro serves.',
			},
			{
				'@context': 'https://schema.org',
				'@type': 'ItemList',
				itemListElement: INDUSTRIES.map((industry, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					name: industry.title,
					url: `${origin}/industries/${industry.slug}`,
				})),
			},
		],
	});
}

export default function IndustriesOverviewPage() {
	return (
		<main>
			<IndustriesOverviewHero />
			<IndustriesOverviewGrid />
			<IndustriesOverviewApproach />
			<IndustriesOverviewCta />
		</main>
	);
}
