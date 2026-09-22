import type { Route } from './+types/work';
import { seo, siteOriginFrom } from '@/lib/seo';
import { WORK_PROJECTS } from '@/data/work';
import { WorkOverviewHero } from '@/components/work/overview-hero';
import { WorkOverviewShowcase } from '@/components/work/overview-showcase';
import { CtaSection } from '@/components/cta-section';

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	return seo({ matches, location }, {
		title: 'Work & Case Studies — Codelaro',
		description:
			'Selected engagements across web, mobile, cloud and AI. Each case study covers context, challenge, approach, solution, technology and verified outcomes.',
		path: '/work',
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'CollectionPage',
				name: 'Codelaro Work & Case Studies',
				description:
					'Selected software development engagements and case studies from Codelaro.',
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
	});
}

export default function WorkPage() {
	return (
		<main>
			<WorkOverviewHero />
			<WorkOverviewShowcase />
			<CtaSection />
		</main>
	);
}
