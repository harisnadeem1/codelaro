import type { Route } from './+types/cookie-policy';
import { seo } from '@/lib/seo';
import { COOKIE_POLICY } from '@/data/legal';
import { LegalLayout } from '@/components/legal/legal-layout';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Cookie Policy — Codelaro',
		description:
			'How Codelaro uses cookies and similar technologies on this website, and how you can manage them. A professional, editable structure — not final legal advice.',
		path: '/cookie-policy',
	});
}

export default function CookiePolicyPage() {
	return <LegalLayout document={COOKIE_POLICY} />;
}
