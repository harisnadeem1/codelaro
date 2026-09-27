import type { Route } from './+types/company.process';
import { seo } from '@/lib/seo';
import { ProcessHero } from '@/components/company/process-hero';
import { ProcessJourney } from '@/components/company/process-journey';
import { CtaSection } from '@/components/cta-section';
import { ProcessCollaboration } from '@/components/company/process-collaboration';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Our Software Development Process | Codelaro',

			description:
				'Explore Codelaro’s software development process, from discovery and strategy to design, development, deployment and ongoing improvement. See how we bring digital products to life.',

			path: '/company/process',

			jsonLd: {
				'@context': 'https://schema.org',
				'@type': 'AboutPage',

				name: 'Our Software Development Process | Codelaro',

				url: 'https://codelaro.com/company/process',

				description:
					'Discover how Codelaro approaches custom software development through discovery, strategic planning, product design, engineering, deployment and continuous improvement.',

				about: {
					'@type': 'Thing',
					name: 'Software Development Process',
					description:
						'Codelaro’s approach to planning, designing, developing, launching and improving custom software and digital products.',
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
export default function ProcessPage() {
	return (
		<main>
			<ProcessHero />
			<ProcessJourney />
			<ProcessCollaboration />
			<CtaSection background="white"/>
		</main>
	);
}
