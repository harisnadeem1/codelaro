import type { Route } from './+types/company';
import { seo } from '@/lib/seo';
import { AboutHero } from '@/components/company/about-hero';
import { AboutMission } from '@/components/company/about-mission';
import { AboutPhilosophy } from '@/components/company/about-philosophy';
import { AboutStory } from '@/components/company/about-story';
import { CtaSection } from '@/components/cta-section';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'About Codelaro | Software Development & AI Solutions',

			description:
				'Learn about Codelaro, a software development company building custom software, web applications and AI-powered solutions. Discover our mission, vision and approach.',

			path: '/company',

			jsonLd: {
				'@context': 'https://schema.org',
				'@type': 'AboutPage',

				name: 'About Codelaro | Software Development Company',

				url: 'https://codelaro.com/company',

				description:
					'Discover Codelaro, a software development company delivering custom software, web development and AI-powered solutions. Explore our mission, vision and development philosophy.',

				about: {
					'@type': 'Organization',
					name: 'Codelaro',
					url: 'https://codelaro.com',
					description:
						'Codelaro develops custom software, modern web applications and AI-powered solutions for businesses.',
					slogan: 'Code. Launch. Grow.',
				},

				inLanguage: 'en',
			},
		},
	);
}

export default function CompanyPage() {
	return (
		<main>
			<AboutHero />
			<AboutMission />
			<AboutPhilosophy />
			<AboutStory />
			<CtaSection background="off-white" />
		</main>
	);
}
