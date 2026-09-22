import { data } from 'react-router';
import type { Route } from './+types/$';
import { seo } from '@/lib/seo';
import { NotFound } from '@/components/not-found';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Page not found — Codelaro',
		description: 'The page you are looking for may have moved or no longer exists.',
		noindex: true,
	});
}

// Render the branded not-found component but with a real 404 status code.
export function loader() {
	return data(null, { status: 404 });
}

export default function SplatPage() {
	return <NotFound />;
}
