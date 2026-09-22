import { useParams } from 'react-router';
import type { Route } from './+types/industries.$slug';
import { seo } from '@/lib/seo';
import { getIndustryBySlug } from '@/data/industries';
import { IndustryDetail } from '@/components/industry/detail';

export function meta({ matches, location, params }: Route.MetaArgs) {
	const industry = getIndustryBySlug(params.slug);
	if (!industry) {
		return seo({ matches, location }, {
			title: 'Industry not found — Codelaro',
			description: 'The requested industry could not be found.',
			noindex: true,
		});
	}
	return seo({ matches, location }, {
		title: `${industry.title} — Codelaro`,
		description: industry.description,
		path: `/industries/${industry.slug}`,
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: `${industry.title} Software Development`,
			description: industry.description,
			provider: {
				'@type': 'Organization',
				name: 'Codelaro',
			},
		},
	});
}

export function loader({ params }: Route.LoaderArgs) {
	if (!getIndustryBySlug(params.slug)) {
		throw new Response('Industry not found', { status: 404 });
	}
	return { slug: params.slug };
}

export default function IndustryPage() {
	const { slug } = useParams();
	const industry = getIndustryBySlug(slug ?? '');
	if (!industry) return null;
	return <IndustryDetail industry={industry} />;
}
