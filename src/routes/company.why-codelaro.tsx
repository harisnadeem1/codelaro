import type { Route } from './+types/company.why-codelaro';
import { seo } from '@/lib/seo';
import { CompanyNav } from '@/components/company/company-nav';
import { WhyHero } from '@/components/company/why-hero';
import { WhyReasons } from '@/components/company/why-reasons';
import { CtaSection } from '@/components/cta-section';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Why Codelaro — A Technology Partner',
		description:
			'Business-first thinking, scalable engineering, transparent collaboration, quality-driven delivery, end-to-end capabilities and long-term support — six reasons teams choose Codelaro.',
		path: '/company/why-codelaro',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'AboutPage',
			name: 'Why Codelaro',
			description:
				'The principles that make Codelaro a different kind of technology partner.',
		},
	});
}

export default function WhyCodelaroPage() {
	return (
		<main>
			<WhyHero />
			<CompanyNav />
			<WhyReasons />
			<CtaSection />
		</main>
	);
}
