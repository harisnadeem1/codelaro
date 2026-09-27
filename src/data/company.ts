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
        'We exist to turn ambitious ideas into meaningful digital solutions. By combining thoughtful design, modern software engineering and a deep understanding of business needs, we help companies solve complex challenges and create lasting value.',

    mission:
        'Our mission is to empower businesses through custom software development, innovative technology and transparent collaboration. We focus on delivering reliable, scalable digital products that solve real problems and support long-term business growth.',

    vision:
        'To become a trusted global technology partner, helping businesses of all sizes transform ambitious ideas into impactful digital products through innovation, engineering excellence and lasting partnerships.',

    philosophy: [
        {
            word: 'Code',
            description:
                'Great software begins with understanding the problem. We combine strategic thinking, thoughtful design and modern engineering to develop secure, scalable and maintainable digital products. Every technical decision is guided by your business goals and the needs of your users.',
        },
        {
            word: 'Launch',
            description:
                'Building great software is only the beginning. We bring digital products to life through structured development, thorough testing and carefully planned deployment. Our focus is on delivering reliable solutions that are ready for real users and real business challenges.',
        },
        {
            word: 'Grow',
            description:
                'Technology should evolve alongside your ambitions. We help businesses improve performance, introduce new capabilities and scale their digital products as their needs change. Through continuous improvement and long-term collaboration, we build technology designed for what comes next.',
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
