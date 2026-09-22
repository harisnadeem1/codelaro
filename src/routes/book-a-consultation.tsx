import type { Route } from './+types/book-a-consultation';
import { seo } from '@/lib/seo';
import { ConsultationHero, ConsultationScheduler } from '@/components/consultation/consultation-scheduler';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Book a Consultation — Codelaro',
		description:
			'Book a free 30-minute consultation with the Codelaro team. Pick a time that works for you and let’s map the fastest route from idea to launch to growth.',
		path: '/book-a-consultation',
	});
}

export default function BookConsultationPage() {
	return (
		<main>
			<ConsultationHero />
			<ConsultationScheduler />
		</main>
	);
}
