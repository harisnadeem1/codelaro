import type { Route } from './+types/thank-you';
import { seo } from '@/lib/seo';
import { ThankYou } from '@/components/thank-you';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Thank You — Codelaro',
		description: 'Your message has been received. Our team will reply within one business day.',
		path: '/thank-you',
		noindex: true,
	});
}

export default function ThankYouPage() {
	return <ThankYou />;
}
