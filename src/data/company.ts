export type CompanyValue = {
	title: string;
	description: string;
};

export type CareerListing = {
	/** Editable placeholder — replace with a real open role when available. */
	team: string;
	role: string;
	location: string;
	type: string;
};

/**
 * About Codelaro — purpose, mission, vision and the Code. Launch. Grow.
 * philosophy. No invented founding story, team size or statistics.
 */
export const ABOUT = {
	purpose:
		'We exist to help ambitious teams turn ideas into digital products that move their business forward — engineered with care, delivered with discipline and built to last.',
	mission:
		'To be the technology partner that businesses trust to design, build and scale the software that matters most to their growth.',
	vision:
		'A world where every ambitious team has access to senior engineering and product thinking — regardless of where they are or what they are building.',
	philosophy: [
		{
			word: 'Code',
			description:
				'We start with disciplined engineering. Clean architecture, sensible abstractions and tested code on foundations that hold up under real load and future change. Quality is built in, not bolted on.',
		},
		{
			word: 'Launch',
			description:
				'We ship with confidence. Automated pipelines, monitoring and a rollout plan that de-risks release — so the product reaches real users safely and the team learns from real usage, not assumptions.',
		},
		{
			word: 'Grow',
			description:
				'We stay after go-live. We measure, iterate and scale the product with the business — evolving features, performance and architecture as the market and the team grow.',
		},
	],
};

/**
 * Why Codelaro — the six reasons that define how we work. Reused from the
 * homepage REASONS data; this file holds the page-level framing only.
 */
export const WHY_FRAMING = {
	lead: 'We bring the mindset, discipline and breadth of a full technology team — invested in your outcome long after the first release ships.',
};

/**
 * Careers — values that describe how we work, plus a placeholder structure for
 * future job listings. No invented vacancies, benefits, employee testimonials
 * or team size.
 */
export const CAREER_VALUES: CompanyValue[] = [
	{
		title: 'Senior by default',
		description:
			'We hire experienced engineers, designers and product minds and trust them to own outcomes. You will work alongside people who have shipped real software, not just studied it.',
	},
	{
		title: 'Remote-first, outcome-led',
		description:
			'We work remotely across time zones and measure contribution by impact, not hours or visibility. Clear communication and written reasoning matter more than being online at the same moment.',
	},
	{
		title: 'Craft is non-negotiable',
		description:
			'We care about how things are built. Clean code, good architecture, accessibility and performance are part of the job — not nice-to-haves traded away for speed.',
	},
	{
		title: 'Business-first thinking',
		description:
			'Every engineer here understands that software serves a business outcome. We work backwards from the result, not from a technology checklist.',
	},
	{
		title: 'Always learning',
		description:
			'The landscape moves fast. We invest in staying current — through real projects, deliberate learning time and honest knowledge sharing across the team.',
	},
	{
		title: 'Direct and transparent',
		description:
			'We say what we think, share progress openly and challenge ideas on their merits. No politics, no posturing — just honest collaboration toward a shared goal.',
	},
];

/**
 * Placeholder job listings. Replace with real open roles when available.
 * Kept empty by design so the page never advertises invented vacancies.
 */
export const CAREER_LISTINGS: CareerListing[] = [];
