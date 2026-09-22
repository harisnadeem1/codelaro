import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { Credibility } from '@/components/home/credibility';
import { Services } from '@/components/home/services';
import { Solutions } from '@/components/home/solutions';
import { Industries } from '@/components/home/industries';
import { Work } from '@/components/home/work';
import { WhyCodelaro } from '@/components/home/why-codelaro';
import { Process } from '@/components/home/process';
import { TechnologyExpertise } from '@/components/home/technology-expertise';
import { Faq } from '@/components/home/faq';
import { FinalCta } from '@/components/home/final-cta';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Codelaro — Code. Launch. Grow.',
		description:
			'Codelaro is an international software development and technology company. We design, build and scale web, mobile, cloud and AI products for ambitious teams worldwide.',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Codelaro',
			slogan: 'Code. Launch. Grow.',
			description:
				'International software development and technology company building web, mobile, cloud and AI products.',
		},
	});
}

export default function HomePage() {
	return (
		<main>
			<Hero />
			<Credibility />
			<Services />
			<Solutions />
			<Industries />
			<Work />
			<WhyCodelaro />
			<Process />
			<TechnologyExpertise />
			<Faq />
			<FinalCta />
		</main>
	);
}
