import type { Industry } from '@/data/industries';
import { IndustryHero } from '@/components/industry/industry-hero';
import { IndustryChallenges } from '@/components/industry/industry-challenges';
import { IndustryServices } from '@/components/industry/industry-services';
import { IndustryTechnology } from '@/components/industry/industry-technology';
import { IndustryWork } from '@/components/industry/industry-work';
import { IndustryRelated } from '@/components/industry/industry-related';
import { IndustryCta } from '@/components/industry/industry-cta';

export function IndustryDetail({ industry }: { industry: Industry }) {
	return (
		<main>
			<IndustryHero industry={industry} />
			<IndustryChallenges industry={industry} />
			<IndustryServices industry={industry} />
			<IndustryTechnology industry={industry} />
			<IndustryWork industry={industry} />
			<IndustryRelated current={industry} />
			<IndustryCta industry={industry} />
		</main>
	);
}
