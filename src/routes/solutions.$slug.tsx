import { useParams } from 'react-router';
import type { Route } from './+types/solutions.$slug';
import { seo } from '@/lib/seo';
import { getSolutionBySlug } from '@/data/solutions';
import { SolutionDetail } from '@/components/solution/detail';

export function meta({ matches, location, params }: Route.MetaArgs) {
	const solution = getSolutionBySlug(params.slug);
	if (!solution) {
		return seo({ matches, location }, {
			title: 'Solution not found — Codelaro',
			description: 'The requested solution could not be found.',
			noindex: true,
		});
	}
	return seo({ matches, location }, {
		title: `${solution.title} — Codelaro`,
		description: solution.explanation,
		path: `/solutions/${solution.slug}`,
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: solution.title,
			description: solution.explanation,
			provider: {
				'@type': 'Organization',
				name: 'Codelaro',
			},
		},
	});
}

export function loader({ params }: Route.LoaderArgs) {
	if (!getSolutionBySlug(params.slug)) {
		throw new Response('Solution not found', { status: 404 });
	}
	return { slug: params.slug };
}

export default function SolutionPage() {
	const { slug } = useParams();
	const solution = getSolutionBySlug(slug ?? '');
	if (!solution) return null;
	return <SolutionDetail solution={solution} />;
}
