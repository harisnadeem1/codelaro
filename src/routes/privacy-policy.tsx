import type { Route } from './+types/privacy-policy';
import { seo } from '@/lib/seo';
import { PRIVACY_POLICY } from '@/data/legal';
import { LegalLayout } from '@/components/legal/legal-layout';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Privacy Policy — Codelaro',
		description:
			'How Codelaro handles information in connection with our website and services. A professional, editable policy structure — not final legal advice.',
		path: '/privacy-policy',
	});
}

export default function PrivacyPolicyPage() {
	return <LegalLayout document={PRIVACY_POLICY} />;
}
