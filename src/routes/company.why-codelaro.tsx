import type { Route } from './+types/company.why-codelaro';
import { seo } from '@/lib/seo';
import { CompanyNav } from '@/components/company/company-nav';
import { WhyHero } from '@/components/company/why-hero';
import { WhyReasons } from '@/components/company/why-reasons';
import { CtaSection } from '@/components/cta-section';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Why Codelaro | Your Software Development Partner',

			description:
				'Discover why businesses choose Codelaro for custom software development, scalable engineering and AI solutions. Explore our approach to quality, collaboration and long-term support.',

			path: '/company/why-codelaro',

			jsonLd: {
				'@context': 'https://schema.org',
				'@type': 'AboutPage',

				name: 'Why Choose Codelaro',

				url: 'https://codelaro.com/company/why-codelaro',

				description:
					'Explore Codelaro’s approach to custom software development, scalable architecture, transparent collaboration, quality-driven delivery and long-term technology partnerships.',

				about: {
					'@type': 'Organization',
					name: 'Codelaro',
					url: 'https://codelaro.com',
					description:
						'Codelaro provides custom software development, web development and AI-powered solutions for businesses.',
					slogan: 'Code. Launch. Grow.',
				},

				inLanguage: 'en',
			},
		},
	);
}
export default function WhyCodelaroPage() {
	return (
		<main>
			<WhyHero />
			<WhyReasons />
			<CtaSection background="white" />
		</main>
	);
}
