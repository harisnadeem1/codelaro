import type { Route } from './+types/company.careers';
import { seo } from '@/lib/seo';
import { CompanyNav } from '@/components/company/company-nav';
import { CareersHero } from '@/components/company/careers-hero';
import { CareersValues } from '@/components/company/careers-values';
import { CareersListings } from '@/components/company/careers-listings';
import { CtaSection } from '@/components/cta-section';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Careers — Codelaro',
		description:
			'Build your career at Codelaro. Senior engineers, designers and product minds, remote-first. Open roles appear here when available — we never list invented vacancies.',
		path: '/company/careers',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'AboutPage',
			name: 'Careers at Codelaro',
			description:
				'How we work at Codelaro and where real open roles appear when available.',
		},
	});
}

export default function CareersPage() {
	return (
		<main>
			<CareersHero />
			<CompanyNav />
			<CareersValues />
			<CareersListings />
			<CtaSection
				eyebrow="Join us"
				title={
					<>
						Think you would fit? <span className="text-brand">Let’s talk.</span>
					</>
				}
				subtitle="We are always interested in senior engineers, designers and product minds who align with how we work. Send an open application and we will read it."
			/>
		</main>
	);
}
