import type { WorkProject } from '@/data/work';
import { CaseStudyHero } from '@/components/case-study/cs-hero';
import { CaseStudyContext } from '@/components/case-study/cs-context';
import { CaseStudyChallenge } from '@/components/case-study/cs-challenge';
import { CaseStudyApproach } from '@/components/case-study/cs-approach';
import { CaseStudySolution } from '@/components/case-study/cs-solution';
import { CaseStudyTechStack } from '@/components/case-study/cs-tech-stack';
import { CaseStudyVisuals } from '@/components/case-study/cs-visuals';
import { CaseStudyOutcomes } from '@/components/case-study/cs-outcomes';
import { CaseStudyRelated } from '@/components/case-study/cs-related';
import { CtaSection } from '@/components/cta-section';

export function CaseStudyDetail({ project }: { project: WorkProject }) {
	return (
		<main>
			<CaseStudyHero project={project} />
			<CaseStudyContext project={project} />
			<CaseStudyChallenge project={project} />
			<CaseStudyApproach project={project} />
			<CaseStudySolution project={project} />
			<CaseStudyVisuals project={project} />
			<CaseStudyTechStack project={project} />
			<CaseStudyOutcomes project={project} />
			<CaseStudyRelated current={project} />
			<CtaSection />
		</main>
	);
}
