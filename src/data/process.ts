export type ProcessStep = {
	title: string;
	description: string;
	phase: 'code' | 'launch' | 'grow';
};

export const PROCESS_STEPS: ProcessStep[] = [
	{
		title: 'Discover',
		description:
			'We uncover your goals, users, challenges and constraints so we can solve the right problem from the start.',
		phase: 'code',
	},
	{
		title: 'Strategize',
		description:
			'We turn what we learn into a focused roadmap, defining priorities, architecture and the clearest path forward.',
		phase: 'code',
	},
	{
		title: 'Design',
		description:
			'We shape the product experience, from user flows and interfaces to the systems that bring everything together.',
		phase: 'code',
	},
	{
		title: 'Build',
		description:
			'We engineer the product with clean, maintainable foundations, continuous review and quality built into the process.',
		phase: 'launch',
	},
	{
		title: 'Launch',
		description:
			'We prepare, deploy and monitor your product carefully so it reaches production smoothly and confidently.',
		phase: 'launch',
	},
	{
		title: 'Grow',
		description:
			'After launch, we learn from real usage, improve what matters and evolve the product as your business grows.',
		phase: 'grow',
	},
];