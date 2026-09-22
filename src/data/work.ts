export type CaseStudyApproach = {
	phase: string;
	title: string;
	description: string;
};

export type CaseStudyFeature = {
	title: string;
	description: string;
};

export type CaseStudyTechGroup = {
	category: string;
	items: string[];
};

export type CaseStudyVisual = {
	/** Editable placeholder caption shown under the visual. */
	caption: string;
	alt: string;
	/** Layout slot the visual occupies in the gallery. */
	aspect: 'wide' | 'tall' | 'square';
};

export type CaseStudyOutcome = {
	/** Editable placeholder — replace with a verified, sourced metric. */
	metric: string;
	label: string;
	note: string;
};

export type WorkProject = {
	id: string;
	slug: string;
	category: string;
	title: string;
	services: string[];
	technologies: string[];
	description: string;
	/** Placeholder — replace with the real project screenshot. */
	screenshotAlt: string;
	/** Case-study detail page content — all editable placeholders. */
	context: string[];
	challenge: string[];
	objectives: string[];
	approach: CaseStudyApproach[];
	solution: string[];
	keyFeatures: CaseStudyFeature[];
	technologyStack: CaseStudyTechGroup[];
	productVisuals: CaseStudyVisual[];
	outcomes: CaseStudyOutcome[];
};

/**
 * Selected work showcases. These are editable placeholders: no clients,
 * results or statistics are invented. Replace `title`, `category`, lists,
 * detail copy and the screenshots with real project information when available.
 */
export const WORK_PROJECTS: WorkProject[] = [
	{
		id: 'project-01',
		slug: 'web-platform',
		category: 'Web Platform',
		title: 'Project title goes here',
		services: ['Web Development', 'UI/UX Design', 'Cloud & DevOps'],
		technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
		description:
			'A short description of the project, the challenge it addressed and the outcome it delivered. Replace this placeholder copy with the real story once the case study is ready.',
		screenshotAlt: 'Project screenshot placeholder',
		context: [
			'Describe the client, their market and the situation that led to the engagement. Who were they, what did they do, and what stage was the business at when the project began?',
			'Outline the existing systems, team and constraints in play. This sets the scene for the challenge and makes the solution understandable to a reader who does not know the business.',
		],
		challenge: [
			'State the core problem in business terms — what was broken, missing, expensive or risky. Keep it specific to this engagement rather than generic.',
			'Note any constraints that shaped the work: timeline, budget, legacy systems, compliance, team capacity or technical limits that had to be respected.',
		],
		objectives: [
			'Define the primary business outcome the project targeted.',
			'List the measurable goals that would make the engagement a success.',
			'Note any secondary objectives — capabilities, foundations or learnings — that mattered beyond the headline result.',
		],
		approach: [
			{
				phase: '01',
				title: 'Discover',
				description:
					'How the team immersed in the problem — research, stakeholder conversations and technical audit — before committing to a direction.',
			},
			{
				phase: '02',
				title: 'Strategize',
				description:
					'The scope, architecture and roadmap chosen, and why it balanced speed, budget and long-term scalability for this specific situation.',
			},
			{
				phase: '03',
				title: 'Build',
				description:
					'How the product was engineered in working slices — the cadence, decisions and trade-offs that kept delivery aligned to the objectives.',
			},
			{
				phase: '04',
				title: 'Ship & grow',
				description:
					'How the release was de-risked and what happened after launch — measurement, iteration and the path from go-live to lasting value.',
			},
		],
		solution: [
			'Describe what was actually built — the product, its architecture and the key decisions behind it. Lead with the shape of the solution, then the reasoning.',
			'Explain how the solution fits the client’s real workflows and constraints, and why the chosen approach was better than the obvious alternatives.',
		],
		keyFeatures: [
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
		],
		technologyStack: [
			{ category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
			{ category: 'Backend', items: ['Node.js', 'REST API'] },
			{ category: 'Data', items: ['PostgreSQL'] },
			{ category: 'Infrastructure', items: ['AWS', 'Docker', 'CI/CD'] },
		],
		productVisuals: [
			{
				caption: 'Primary product view — replace with the real screenshot.',
				alt: 'Product screenshot placeholder',
				aspect: 'wide',
			},
			{
				caption: 'Detail or secondary screen.',
				alt: 'Product screenshot placeholder',
				aspect: 'tall',
			},
			{
				caption: 'Dashboard or analytics view.',
				alt: 'Product screenshot placeholder',
				aspect: 'square',
			},
		],
		outcomes: [
			{
				metric: '—',
				label: 'Headline result',
				note: 'Replace with a verified, sourced metric once the case study is ready. Do not publish invented statistics.',
			},
			{
				metric: '—',
				label: 'Operational improvement',
				note: 'Replace with a verified, sourced metric once the case study is ready. Do not publish invented statistics.',
			},
			{
				metric: '—',
				label: 'Scale or adoption',
				note: 'Replace with a verified, sourced metric once the case study is ready. Do not publish invented statistics.',
			},
		],
	},
	{
		id: 'project-02',
		slug: 'mobile-api',
		category: 'Mobile & API',
		title: 'Project title goes here',
		services: ['Mobile App Development', 'API & System Integration', 'Maintenance & Support'],
		technologies: ['React Native', 'Go', 'Kubernetes', 'GCP'],
		description:
			'A short description of the project, the challenge it addressed and the outcome it delivered. Replace this placeholder copy with the real story once the case study is ready.',
		screenshotAlt: 'Project screenshot placeholder',
		context: [
			'Describe the client, their market and the situation that led to the engagement. Who were they, what did they do, and what stage was the business at when the project began?',
			'Outline the existing systems, team and constraints in play. This sets the scene for the challenge and makes the solution understandable to a reader who does not know the business.',
		],
		challenge: [
			'State the core problem in business terms — what was broken, missing, expensive or risky. Keep it specific to this engagement rather than generic.',
			'Note any constraints that shaped the work: timeline, budget, legacy systems, compliance, team capacity or technical limits that had to be respected.',
		],
		objectives: [
			'Define the primary business outcome the project targeted.',
			'List the measurable goals that would make the engagement a success.',
			'Note any secondary objectives — capabilities, foundations or learnings — that mattered beyond the headline result.',
		],
		approach: [
			{
				phase: '01',
				title: 'Discover',
				description:
					'How the team immersed in the problem — research, stakeholder conversations and technical audit — before committing to a direction.',
			},
			{
				phase: '02',
				title: 'Strategize',
				description:
					'The scope, architecture and roadmap chosen, and why it balanced speed, budget and long-term scalability for this specific situation.',
			},
			{
				phase: '03',
				title: 'Build',
				description:
					'How the product was engineered in working slices — the cadence, decisions and trade-offs that kept delivery aligned to the objectives.',
			},
			{
				phase: '04',
				title: 'Ship & grow',
				description:
					'How the release was de-risked and what happened after launch — measurement, iteration and the path from go-live to lasting value.',
			},
		],
		solution: [
			'Describe what was actually built — the product, its architecture and the key decisions behind it. Lead with the shape of the solution, then the reasoning.',
			'Explain how the solution fits the client’s real workflows and constraints, and why the chosen approach was better than the obvious alternatives.',
		],
		keyFeatures: [
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
		],
		technologyStack: [
			{ category: 'Mobile', items: ['React Native', 'iOS', 'Android'] },
			{ category: 'Backend', items: ['Go', 'REST API'] },
			{ category: 'Data', items: ['PostgreSQL'] },
			{ category: 'Infrastructure', items: ['GCP', 'Kubernetes', 'CI/CD'] },
		],
		productVisuals: [
			{
				caption: 'Primary product view — replace with the real screenshot.',
				alt: 'Product screenshot placeholder',
				aspect: 'wide',
			},
			{
				caption: 'Detail or secondary screen.',
				alt: 'Product screenshot placeholder',
				aspect: 'tall',
			},
			{
				caption: 'Dashboard or analytics view.',
				alt: 'Product screenshot placeholder',
				aspect: 'square',
			},
		],
		outcomes: [
			{
				metric: '—',
				label: 'Headline result',
				note: 'Replace with a verified, sourced metric once the case study is ready. Do not publish invented statistics.',
			},
			{
				metric: '—',
				label: 'Operational improvement',
				note: 'Replace with a verified, sourced metric once the case study is ready. Do not publish invented statistics.',
			},
			{
				metric: '—',
				label: 'Scale or adoption',
				note: 'Replace with a verified, sourced metric once the case study is ready. Do not publish invented statistics.',
			},
		],
	},
	{
		id: 'project-03',
		slug: 'ai-automation',
		category: 'AI & Automation',
		title: 'Project title goes here',
		services: ['AI & Automation', 'Custom Software Development', 'Data & Analytics'],
		technologies: ['Python', 'OpenAI', 'FastAPI', 'Snowflake'],
		description:
			'A short description of the project, the challenge it addressed and the outcome it delivered. Replace this placeholder copy with the real story once the case study is ready.',
		screenshotAlt: 'Project screenshot placeholder',
		context: [
			'Describe the client, their market and the situation that led to the engagement. Who were they, what did they do, and what stage was the business at when the project began?',
			'Outline the existing systems, team and constraints in play. This sets the scene for the challenge and makes the solution understandable to a reader who does not know the business.',
		],
		challenge: [
			'State the core problem in business terms — what was broken, missing, expensive or risky. Keep it specific to this engagement rather than generic.',
			'Note any constraints that shaped the work: timeline, budget, legacy systems, compliance, team capacity or technical limits that had to be respected.',
		],
		objectives: [
			'Define the primary business outcome the project targeted.',
			'List the measurable goals that would make the engagement a success.',
			'Note any secondary objectives — capabilities, foundations or learnings — that mattered beyond the headline result.',
		],
		approach: [
			{
				phase: '01',
				title: 'Discover',
				description:
					'How the team immersed in the problem — research, stakeholder conversations and technical audit — before committing to a direction.',
			},
			{
				phase: '02',
				title: 'Strategize',
				description:
					'The scope, architecture and roadmap chosen, and why it balanced speed, budget and long-term scalability for this specific situation.',
			},
			{
				phase: '03',
				title: 'Build',
				description:
					'How the product was engineered in working slices — the cadence, decisions and trade-offs that kept delivery aligned to the objectives.',
			},
			{
				phase: '04',
				title: 'Ship & grow',
				description:
					'How the release was de-risked and what happened after launch — measurement, iteration and the path from go-live to lasting value.',
			},
		],
		solution: [
			'Describe what was actually built — the product, its architecture and the key decisions behind it. Lead with the shape of the solution, then the reasoning.',
			'Explain how the solution fits the client’s real workflows and constraints, and why the chosen approach was better than the obvious alternatives.',
		],
		keyFeatures: [
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
			{
				title: 'Feature name',
				description:
					'What this part of the product does and the problem it solves for the user or the business.',
			},
		],
		technologyStack: [
			{ category: 'AI', items: ['OpenAI', 'RAG', 'Vector Search'] },
			{ category: 'Backend', items: ['Python', 'FastAPI'] },
			{ category: 'Data', items: ['Snowflake', 'ETL'] },
			{ category: 'Infrastructure', items: ['Docker', 'CI/CD', 'Monitoring'] },
		],
		productVisuals: [
			{
				caption: 'Primary product view — replace with the real screenshot.',
				alt: 'Product screenshot placeholder',
				aspect: 'wide',
			},
			{
				caption: 'Detail or secondary screen.',
				alt: 'Product screenshot placeholder',
				aspect: 'tall',
			},
			{
				caption: 'Dashboard or analytics view.',
				alt: 'Product screenshot placeholder',
				aspect: 'square',
			},
		],
		outcomes: [
			{
				metric: '—',
				label: 'Headline result',
				note: 'Replace with a verified, sourced metric once the case study is ready. Do not publish invented statistics.',
			},
			{
				metric: '—',
				label: 'Operational improvement',
				note: 'Replace with a verified, sourced metric once the case study is ready. Do not publish invented statistics.',
			},
			{
				metric: '—',
				label: 'Scale or adoption',
				note: 'Replace with a verified, sourced metric once the case study is ready. Do not publish invented statistics.',
			},
		],
	},
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
	return WORK_PROJECTS.find((project) => project.slug === slug);
}
