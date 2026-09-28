import type { Route } from './+types/insights';
import { seo } from '@/lib/seo';
import { InsightsHero } from '@/components/insights/insights-hero';
import { InsightsFeatured, InsightsLatest } from '@/components/insights/insights-featured';
import { InsightsCategories } from '@/components/insights/insights-categories';
import { CtaSection } from '@/components/cta-section';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Software Development & AI Insights | Codelaro',

			description:
				'Explore expert insights on software development, artificial intelligence, cloud engineering, SaaS and digital transformation from Codelaro.',

			path: '/insights',

			jsonLd: {
				'@context': 'https://schema.org',
				'@type': 'Blog',

				

				name: 'Codelaro Insights',

				url: 'https://codelaro.com/insights',

				description:
					'Explore practical insights, engineering perspectives and industry trends in software development, artificial intelligence, cloud computing, SaaS and digital transformation.',

				inLanguage: 'en',

				publisher: {
					'@type': 'Organization',
					name: 'Codelaro',
					url: 'https://codelaro.com',
				},

				about: [
					{ '@type': 'Thing', name: 'Software Development' },
					{ '@type': 'Thing', name: 'Artificial Intelligence' },
					{ '@type': 'Thing', name: 'Cloud Computing' },
					{ '@type': 'Thing', name: 'SaaS Development' },
					{ '@type': 'Thing', name: 'Digital Transformation' },
					{ '@type': 'Thing', name: 'Web Development' },
				],
			},
		}
	);
}

export default function InsightsPage() {
	return (
		<main>
			<InsightsHero />
			<InsightsFeatured />
			<InsightsLatest />
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
