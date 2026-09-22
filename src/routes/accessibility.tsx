import type { Route } from './+types/accessibility';
import { seo } from '@/lib/seo';
import { ACCESSIBILITY_STATEMENT } from '@/data/legal';
import { LegalLayout } from '@/components/legal/legal-layout';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Accessibility — Codelaro',
		description:
			'Codelaro’s commitment to making our website accessible to everyone, including people with disabilities. A working statement that evolves with our site.',
		path: '/accessibility',
	});
}

export default function AccessibilityPage() {
	return <LegalLayout document={ACCESSIBILITY_STATEMENT} />;
}
