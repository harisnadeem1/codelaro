import type { Solution } from '@/data/solutions';
import { SolutionHero } from '@/components/solution/solution-hero';
import { SolutionChallenge } from '@/components/solution/solution-challenge';
import { SolutionApproach } from '@/components/solution/solution-approach';
import { SolutionCapabilities } from '@/components/solution/solution-capabilities';
import { SolutionJourney } from '@/components/solution/solution-journey';
import { SolutionRelated } from '@/components/solution/solution-related';
import { SolutionFaq } from '@/components/solution/solution-faq';
import { SolutionCta } from '@/components/solution/solution-cta';

export function SolutionDetail({ solution }: { solution: Solution }) {
	return (
		<main>
			<SolutionHero solution={solution} />
			<SolutionChallenge solution={solution} />
			<SolutionApproach solution={solution} />
			<SolutionCapabilities solution={solution} />
			<SolutionJourney solution={solution} />
			<SolutionRelated current={solution} />
			<SolutionFaq solution={solution} />
			<SolutionCta solution={solution} />
		</main>
	);
}
