import type { Route } from './+types/faq';
import { seo } from '@/lib/seo';
import { FAQ_CATEGORIES } from '@/data/faq-categories';
import { FaqPage } from '@/components/faq-page/faq-page';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'FAQ — Codelaro',
		description:
			'Frequently asked questions about working with Codelaro — getting started, projects and scope, collaboration, pricing and engagement, and security and IP.',
		path: '/faq',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: FAQ_CATEGORIES.flatMap((category) =>
				category.items.map((item) => ({
					'@type': 'Question',
					name: item.question,
					acceptedAnswer: { '@type': 'Answer', text: item.answer },
				})),
			),
		},
	});
}

export default function FaqRoutePage() {
	return <FaqPage />;
}
