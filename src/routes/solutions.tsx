import type { Route } from './+types/solutions';
import { seo, siteOriginFrom } from '@/lib/seo';
import { SOLUTIONS } from '@/data/solutions';
import { SolutionsOverviewHero } from '@/components/solutions/overview-hero';
import { SolutionsOverviewGrid } from '@/components/solutions/overview-grid';
import { SolutionsOverviewApproach } from '@/components/solutions/overview-approach';
import { SolutionsOverviewCta } from '@/components/solutions/overview-cta';

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	return seo({ matches, location }, {
		title: 'Solutions — Codelaro',
		description:
			'Eight outcome-led solutions: MVP & startup launch, automation, digital transformation, legacy modernization, AI, e-commerce, team extension and scaling.',
		path: '/solutions',
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'CollectionPage',
				name: 'Codelaro Solutions',
				description:
					'Outcome-led software solutions from Codelaro — built around business results, not feature checklists.',
			},
			{
				'@context': 'https://schema.org',
				'@type': 'ItemList',
				itemListElement: SOLUTIONS.map((solution, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					name: solution.title,
					url: `${origin}/solutions/${solution.slug}`,
				})),
			},
		],
	});
}

export default function SolutionsOverviewPage() {
	return (
		<main>
			<SolutionsOverviewHero />
			<SolutionsOverviewGrid />
			<SolutionsOverviewApproach />
			<SolutionsOverviewCta />
		</main>
	);
}
