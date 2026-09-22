import { useParams } from 'react-router';
import type { Route } from './+types/work.$slug';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { getProjectBySlug } from '@/data/work';
import { CaseStudyDetail } from '@/components/case-study/detail';

export function meta({ matches, location, params }: Route.MetaArgs) {
	const project = getProjectBySlug(params.slug);
	if (!project) {
		return seo({ matches, location }, {
			title: 'Case study not found — Codelaro',
			description: 'The requested case study could not be found.',
			noindex: true,
		});
	}
	const origin = siteOriginFrom(matches);
	const url = absoluteUrl(origin, `/work/${project.slug}`);
	return seo({ matches, location }, {
		title: `${project.title} — Case Study | Codelaro`,
		description: project.description,
		path: `/work/${project.slug}`,
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: project.title,
				description: project.description,
				url,
				author: { '@type': 'Organization', name: 'Codelaro' },
				publisher: { '@type': 'Organization', name: 'Codelaro' },
			},
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl(origin, '/') },
					{ '@type': 'ListItem', position: 2, name: 'Work', item: absoluteUrl(origin, '/work') },
					{ '@type': 'ListItem', position: 3, name: project.title, item: url },
				],
			},
		],
	});
}

export function loader({ params }: Route.LoaderArgs) {
	if (!getProjectBySlug(params.slug)) {
		throw new Response('Case study not found', { status: 404 });
	}
	return { slug: params.slug };
}

export default function CaseStudyPage() {
	const { slug } = useParams();
	const project = getProjectBySlug(slug ?? '');
	if (!project) return null;
	return <CaseStudyDetail project={project} />;
}
