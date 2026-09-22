import type { Route } from './+types/insights';
import { seo } from '@/lib/seo';
import { InsightsHero } from '@/components/insights/insights-hero';
import { InsightsFeatured, InsightsLatest } from '@/components/insights/insights-featured';
import { InsightsCategories } from '@/components/insights/insights-categories';
import { CtaSection } from '@/components/cta-section';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Insights — Codelaro',
		description:
			'Notes on engineering, AI, product, cloud and the business of building software — practical perspectives from a senior team that ships.',
		path: '/insights',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'Blog',
			name: 'Codelaro Insights',
			description:
				'Notes on engineering, AI, product, cloud and the business of building software.',
		},
	});
}

export default function InsightsPage() {
	return (
		<main>
			<InsightsHero />
			<InsightsFeatured />
			<InsightsLatest />
			<InsightsCategories />
			<CtaSection
				eyebrow="Stay in the loop"
				title={
					<>
						Building something? <span className="text-brand">Let’s talk.</span>
					</>
				}
				subtitle="Insights are one thing — applying them to your product is another. Tell us about your goals and we will map the fastest route from idea to launch to growth."
			/>
		</main>
	);
}
