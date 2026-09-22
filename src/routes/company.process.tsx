import type { Route } from './+types/company.process';
import { seo } from '@/lib/seo';
import { CompanyNav } from '@/components/company/company-nav';
import { ProcessHero } from '@/components/company/process-hero';
import { ProcessJourney } from '@/components/company/process-journey';
import { CtaSection } from '@/components/cta-section';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Our Process — Codelaro',
		description:
			'Discover → Strategize → Design → Code → Launch → Grow. Six disciplined stages grouped into three movements that define every Codelaro engagement.',
		path: '/company/process',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'AboutPage',
			name: 'Our Process — Codelaro',
			description:
				'The connected journey from first idea to lasting growth: Discover, Strategize, Design, Code, Launch, Grow.',
		},
	});
}

export default function ProcessPage() {
	return (
		<main>
			<ProcessHero />
			<CompanyNav />
			<ProcessJourney />
			<CtaSection />
		</main>
	);
}
