import { useParams } from 'react-router';
import type { Route } from './+types/services.$slug';
import { seo } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import { ServiceDetail } from '@/components/service/detail';

export function meta({ matches, location, params }: Route.MetaArgs) {
	const service = getServiceBySlug(params.slug);
	if (!service) {
		return seo({ matches, location }, {
			title: 'Service not found — Codelaro',
			description: 'The requested service could not be found.',
			noindex: true,
		});
	}
	return seo({ matches, location }, {
		title: `${service.title} — Codelaro`,
		description: service.summary,
		path: `/services/${service.slug}`,
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: service.title,
			description: service.summary,
			provider: {
				'@type': 'Organization',
				name: 'Codelaro',
			},
		},
	});
}

export function loader({ params }: Route.LoaderArgs) {
	if (!getServiceBySlug(params.slug)) {
		throw new Response('Service not found', { status: 404 });
	}
	return { slug: params.slug };
}

export default function ServicePage() {
	const { slug } = useParams();
	const service = getServiceBySlug(slug ?? '');
	if (!service) return null;
	return <ServiceDetail service={service} />;
}
