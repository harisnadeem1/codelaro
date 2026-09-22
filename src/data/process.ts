export type ProcessStep = {
	number: string;
	title: string;
	description: string;
	/** Which part of Code. Launch. Grow. this step belongs to. */
	phase: 'code' | 'launch' | 'grow';
};

export const PROCESS_STEPS: ProcessStep[] = [
	{
		number: '01',
		title: 'Discover',
		description:
			'We immerse in your business, users and constraints to understand the real problem before proposing a solution.',
		phase: 'code',
	},
	{
		number: '02',
		title: 'Strategize',
		description:
			'We define scope, architecture and a roadmap that balances speed, budget and long-term scalability.',
		phase: 'code',
	},
	{
		number: '03',
		title: 'Design',
		description:
			'We craft the experience — flows, interfaces and systems — validated against your goals before a line of production code.',
		phase: 'code',
	},
	{
		number: '04',
		title: 'Code',
		description:
			'We build with disciplined engineering: clean, tested and reviewed code on a foundation that scales.',
		phase: 'launch',
	},
	{
		number: '05',
		title: 'Launch',
		description:
			'We ship to production with confidence — automated pipelines, monitoring and a rollout plan that de-risks release.',
		phase: 'launch',
	},
	{
		number: '06',
		title: 'Grow',
		description:
			'We measure, iterate and scale — evolving the product with your business long after go-live.',
		phase: 'grow',
	},
];
