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

/* -------------------------------------------------------------------------- */
/*                                    SEO                                     */
/* -------------------------------------------------------------------------- */

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Codelaro | Software Development & AI Solutions',

			description:
				'Codelaro builds websites, web and mobile apps, custom software, cloud solutions and AI automation for businesses and ambitious teams worldwide.',

			jsonLd: {
				'@context': 'https://schema.org',

				'@graph': [
					/* ---------------------------------------------------------- */
					/* Organization                                               */
					/* ---------------------------------------------------------- */

					{
						'@type': 'Organization',
						'@id': 'https://codelaro.com/#organization',

						name: 'Codelaro',
						alternateName: 'Codelaro Software Development',

						url: 'https://codelaro.com/',

						logo: {
							'@type': 'ImageObject',
							'@id': 'https://codelaro.com/#logo',
							url: 'https://codelaro.com/logo/codelaro_png/logo_navy.png',
							contentUrl:
								'https://codelaro.com/logo/codelaro_png/logo_navy.png',
							caption: 'Codelaro',
						},

						image: {
							'@id': 'https://codelaro.com/#logo',
						},

						slogan: 'Code. Launch. Grow.',

						description:
							'Codelaro is a software development and technology company building websites, web and mobile applications, custom software, cloud solutions and AI-powered automation.',

						areaServed: {
							'@type': 'Place',
							name: 'Worldwide',
						},

						knowsAbout: [
							'Web Development',
							'Web Application Development',
							'Mobile App Development',
							'Custom Software Development',
							'Artificial Intelligence',
							'AI Automation',
							'Cloud Solutions',
							'E-commerce Development',
							'API Development',
							'Software Engineering',
						],
					},

					/* ---------------------------------------------------------- */
					/* Website                                                    */
					/* ---------------------------------------------------------- */

					{
						'@type': 'WebSite',
						'@id': 'https://codelaro.com/#website',

						url: 'https://codelaro.com/',
						name: 'Codelaro',

						description:
							'Codelaro provides software development, web and mobile applications, custom software, cloud solutions and AI automation.',

						publisher: {
							'@id': 'https://codelaro.com/#organization',
						},

						inLanguage: 'en',
					},

					/* ---------------------------------------------------------- */
					/* Homepage                                                   */
					/* ---------------------------------------------------------- */

					{
						'@type': 'WebPage',
						'@id': 'https://codelaro.com/#webpage',

						url: 'https://codelaro.com/',

						name: 'Codelaro | Software Development & AI Solutions',

						description:
							'Codelaro builds websites, web and mobile apps, custom software, cloud solutions and AI automation for businesses and ambitious teams worldwide.',

						isPartOf: {
							'@id': 'https://codelaro.com/#website',
						},

						about: {
							'@id': 'https://codelaro.com/#organization',
						},

						primaryImageOfPage: {
							'@id': 'https://codelaro.com/#logo',
						},

						inLanguage: 'en',
					},

					/* ---------------------------------------------------------- */
					/* Services                                                   */
					/* ---------------------------------------------------------- */

					{
						'@type': 'ItemList',
						'@id': 'https://codelaro.com/#services',

						name: 'Codelaro Software Development Services',

						description:
							'Software development and technology services offered by Codelaro.',

						numberOfItems: 6,

						itemListElement: [
							{
								'@type': 'ListItem',
								position: 1,

								item: {
									'@type': 'Service',

									name: 'Web Development',

									description:
										'Modern, responsive and scalable websites built for businesses and growing brands.',

									provider: {
										'@id':
											'https://codelaro.com/#organization',
									},

									areaServed: 'Worldwide',
								},
							},

							{
								'@type': 'ListItem',
								position: 2,

								item: {
									'@type': 'Service',

									name: 'Web Application Development',

									description:
										'Custom web applications designed around business requirements, workflows and users.',

									provider: {
										'@id':
											'https://codelaro.com/#organization',
									},

									areaServed: 'Worldwide',
								},
							},

							{
								'@type': 'ListItem',
								position: 3,

								item: {
									'@type': 'Service',

									name: 'Mobile App Development',

									description:
										'Mobile applications built for modern digital products, businesses and platforms.',

									provider: {
										'@id':
											'https://codelaro.com/#organization',
									},

									areaServed: 'Worldwide',
								},
							},

							{
								'@type': 'ListItem',
								position: 4,

								item: {
									'@type': 'Service',

									name: 'Custom Software Development',

									description:
										'Custom software solutions engineered around specific business processes, requirements and workflows.',

									provider: {
										'@id':
											'https://codelaro.com/#organization',
									},

									areaServed: 'Worldwide',
								},
							},

							{
								'@type': 'ListItem',
								position: 5,

								item: {
									'@type': 'Service',

									name: 'AI & Automation',

									description:
										'AI-powered applications, integrations and automation designed to improve business workflows and productivity.',

									provider: {
										'@id':
											'https://codelaro.com/#organization',
									},

									areaServed: 'Worldwide',
								},
							},

							{
								'@type': 'ListItem',
								position: 6,

								item: {
									'@type': 'Service',

									name: 'Cloud Solutions',

									description:
										'Cloud infrastructure, deployment and scalable technology solutions for modern digital products.',

									provider: {
										'@id':
											'https://codelaro.com/#organization',
									},

									areaServed: 'Worldwide',
								},
							},
						],
					},
				],
			},
		},
	);
}

/* -------------------------------------------------------------------------- */
/*                                  Homepage                                  */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
	return (
		<main>
			<Hero />

			<Credibility />

			<Services />

			<Solutions />

			{/* <Industries /> */}

			{/* <Work /> */}

			<WhyCodelaro />

			<Process />

			{/* <TechnologyExpertise /> */}

			<Faq />

			<FinalCta />
		</main>
	);
}