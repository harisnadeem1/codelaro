import type { Route } from './+types/terms';
import { seo } from '@/lib/seo';
import { TERMS_OF_SERVICE } from '@/data/legal';
import { LegalLayout } from '@/components/legal/legal-layout';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Terms & Conditions — Codelaro',
		description:
			'The terms that govern use of the Codelaro website and the basis on which we provide our services. A professional, editable structure — not final legal advice.',
		path: '/terms',
	});
}

export default function TermsPage() {
	return <LegalLayout document={TERMS_OF_SERVICE} />;
}
