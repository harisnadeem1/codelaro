import type { Route } from './+types/industries';
import { seo, siteOriginFrom } from '@/lib/seo';
import { INDUSTRIES } from '@/data/industries';
import { IndustriesOverviewHero } from '@/components/industries/overview-hero';
import { IndustriesOverviewGrid } from '@/components/industries/overview-grid';
import { IndustriesOverviewApproach } from '@/components/industries/overview-approach';
import { IndustriesOverviewCta } from '@/components/industries/overview-cta';

export function meta({ matches, location }: Route.MetaArgs) {
    const origin = siteOriginFrom(matches);

    const title =
        'Industries We Serve | Custom Software Development | Codelaro';

    const description =
        'Explore industry-specific software development by Codelaro. We build custom digital solutions for fintech, healthcare, retail, education, real estate, logistics and more.';

    return seo(
        { matches, location },
        {
            title,
            description,
            path: '/industries',
            jsonLd: [
                {
                    '@context': 'https://schema.org',
                    '@type': 'CollectionPage',
                    '@id': `${origin}/industries#webpage`,
                    name: 'Industries We Serve | Codelaro',
                    description,
                    url: `${origin}/industries`,
                    isPartOf: {
                        '@type': 'WebSite',
                        name: 'Codelaro',
                        url: origin,
                    },
                    mainEntity: {
                        '@id': `${origin}/industries#industry-list`,
                    },
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    '@id': `${origin}/industries#industry-list`,
                    name: 'Industries Served by Codelaro',
                    numberOfItems: INDUSTRIES.length,
                    itemListElement: INDUSTRIES.map(
                        (industry, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            name: industry.title,
                            url: `${origin}/industries/${industry.slug}`,
                        }),
                    ),
                },
            ],
        },
    );
}

export default function IndustriesOverviewPage() {
	return (
		<main>
			<IndustriesOverviewHero />
			<IndustriesOverviewGrid />
			<IndustriesOverviewApproach />
			<IndustriesOverviewCta />
		</main>
	);
}
