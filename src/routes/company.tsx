import type { Route } from './+types/company';
import { seo } from '@/lib/seo';
import { CompanyNav } from '@/components/company/company-nav';
import { AboutHero } from '@/components/company/about-hero';
import { AboutMission } from '@/components/company/about-mission';
import { AboutPhilosophy } from '@/components/company/about-philosophy';
import { CtaSection } from '@/components/cta-section';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'About Codelaro — Code. Launch. Grow.',
		description:
			'Codelaro is an international software development and technology company. Our purpose, mission, vision and the Code. Launch. Grow. philosophy behind every engagement.',
		path: '/company',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'AboutPage',
			name: 'About Codelaro',
			description:
				'Purpose, mission, vision and the Code. Launch. Grow. philosophy of Codelaro.',
		},
	});
}

export default function CompanyPage() {
	return (
		<main>
			<AboutHero />
			<CompanyNav />
			<AboutMission />
			<AboutPhilosophy />
			<CtaSection />
		</main>
	);
}
