import { useLoaderData } from 'react-router';

import type { Route } from './+types/services.$slug';

import { seo } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import { ServiceDetail } from '@/components/service/detail';

/* -------------------------------------------------------------------------- */
/* SEO                                                                        */
/* -------------------------------------------------------------------------- */

export function meta({ matches, location, params }: Route.MetaArgs) {
	const service = getServiceBySlug(params.slug);

	if (!service) {
		return seo(
			{ matches, location },
			{
				title: 'Service Not Found | Codelaro',
				description: 'The requested service could not be found.',
				noindex: true,
			},
		);
	}

	return seo(
		{ matches, location },
		{
			title: `${service.title} | Codelaro`,
			description: service.summary,
			path: `/services/${service.slug}`,
			jsonLd: {
				'@context': 'https://schema.org',
				'@type': 'Service',
				name: service.title,
				description: service.summary,
				url: `https://codelaro.com/services/${service.slug}`,
				provider: {
					'@type': 'Organization',
					name: 'Codelaro',
					url: 'https://codelaro.com',
				},
			},
		},
	);
}

/* -------------------------------------------------------------------------- */
/* Loader                                                                     */
/* -------------------------------------------------------------------------- */

export function loader({ params }: Route.LoaderArgs) {
	const service = getServiceBySlug(params.slug);

	if (!service) {
		throw new Response('Service not found', {
			status: 404,
		});
	}

	return { slug: service.slug };
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function ServicePage() {
	const { slug } = useLoaderData<typeof loader>();

	const service = getServiceBySlug(slug);

	if (!service) return null;

	return <ServiceDetail service={service} />;
}