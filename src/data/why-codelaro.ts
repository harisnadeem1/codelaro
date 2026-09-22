export type Reason = {
	number: string;
	title: string;
	description: string;
};

export const REASONS: Reason[] = [
	{
		number: '01',
		title: 'Business-first thinking',
		description:
			'Every decision starts from your goals, market and constraints — not from a technology checklist. We engineer for outcomes that matter to your business.',
	},
	{
		number: '02',
		title: 'Scalable engineering',
		description:
			'Architecture designed to grow with you. Clean foundations, sensible abstractions and patterns that hold up under real load and future change.',
	},
	{
		number: '03',
		title: 'Transparent collaboration',
		description:
			'Clear communication, visible progress and no black boxes. You always know what is being built, why, and what comes next.',
	},
	{
		number: '04',
		title: 'Quality-driven delivery',
		description:
			'Thorough reviews, automated tests and disciplined process. Quality is built in, not bolted on at the end of a sprint.',
	},
	{
		number: '05',
		title: 'End-to-end capabilities',
		description:
			'Strategy, design, engineering, cloud and AI under one roof. One accountable partner from first sketch to production and beyond.',
	},
	{
		number: '06',
		title: 'Long-term support',
		description:
			'We stay after launch. Maintenance, evolution and scaling support keep your product healthy as your business grows.',
	},
];
