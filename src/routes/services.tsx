import type { Route } from './+types/services';
import { seo, siteOriginFrom } from '@/lib/seo';
import { SERVICES } from '@/data/services';
import { ServicesOverviewHero } from '@/components/services/overview-hero';
import { ServicesOverviewBento } from '@/components/services/overview-bento';
import { ServicesOverviewApproach } from '@/components/services/overview-approach';
import { ServicesOverviewCta } from '@/components/services/overview-cta';

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	return seo({ matches, location }, {
		title: 'Services — Codelaro',
		description:
			'Twelve disciplines under one senior team: web, mobile, SaaS, custom software, AI, e-commerce, payments, APIs, design, cloud, data and ongoing support.',
		path: '/services',
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'CollectionPage',
				name: 'Codelaro Services',
				description:
					'End-to-end software development and technology services from Codelaro.',
			},
			{
				'@context': 'https://schema.org',
				'@type': 'ItemList',
				itemListElement: SERVICES.map((service, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					name: service.title,
					url: `${origin}/services/${service.slug}`,
				})),
			},
		],
	});
}

export default function ServicesOverviewPage() {
	return (
		<main>
			<ServicesOverviewHero />
			<ServicesOverviewBento />
			<ServicesOverviewApproach />
			<ServicesOverviewCta />
		</main>
	);
}
