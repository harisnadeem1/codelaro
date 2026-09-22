export interface CategorizedFaqItem {
	question: string;
	answer: string;
}

export interface FaqCategory {
	slug: string;
	label: string;
	description: string;
	items: CategorizedFaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
	{
		slug: 'getting-started',
		label: 'Getting started',
		description: 'How engagements begin and what to expect from the first conversation.',
		items: [
			{
				question: 'How do we start a project with Codelaro?',
				answer:
					'Start with a free consultation — tell us about your goals, current state and constraints. We follow up with a short discovery, then share a tailored roadmap, scope and approach. There is no obligation at the consultation stage; it is simply the fastest way to find out whether we are the right fit.',
			},
			{
				question: 'What information should I prepare before reaching out?',
				answer:
					'A short summary of what you want to build, who it is for, and any constraints around timeline or budget. If you have an existing product, codebase or brief, sharing it helps — but it is not required. We can work from a one-paragraph idea or a detailed specification.',
			},
			{
				question: 'Is the first consultation really free?',
				answer:
					'Yes. The initial consultation is a conversation, not a sales pitch, and there is no charge or obligation. If we are a good fit, we move into a short paid discovery only when you are ready to go deeper.',
			},
		],
	},
	{
		slug: 'projects-and-scope',
		label: 'Projects & scope',
		description: 'What we build, how engagements are shaped, and how scope is managed.',
		items: [
			{
				question: 'What types of projects does Codelaro take on?',
				answer:
					'We build web platforms, mobile apps, SaaS products, e-commerce stores, AI and automation systems, and custom software. Engagements range from a focused MVP to a multi-month platform build or a long-term dedicated team. If your project needs senior engineering across design, build and scale, it fits our work.',
			},
			{
				question: 'How long does a typical project take?',
				answer:
					'It depends entirely on scope. A focused MVP can reach a first release in a matter of weeks, while a complex platform or multi-tenant SaaS product usually spans several months. After a short discovery conversation we share a tailored roadmap with realistic milestones — we do not promise fixed timelines before understanding the work.',
			},
			{
				question: 'Can you work with our existing software or codebase?',
				answer:
					'Absolutely. We frequently audit, extend and modernize existing codebases — adding features, improving performance, hardening security or re-platforming onto a modern stack. We start with a codebase and architecture review so changes are deliberate and low-risk, not disruptive rewrites.',
			},
			{
				question: 'Do you work with startups and established businesses?',
				answer:
					'Both. For startups we move fast — scoping lean, shipping an MVP and iterating on real usage. For established businesses we modernize legacy systems, automate operations and scale products that have outgrown their first build. The common thread is senior, outcome-driven engineering.',
			},
		],
	},
	{
		slug: 'collaboration',
		label: 'Collaboration',
		description: 'How we work with your team across locations, time zones and tools.',
		items: [
			{
				question: 'Can we collaborate if we are in a different country or time zone?',
				answer:
					'Yes. Codelaro is an international team and most of our engagements are remote-first. We align on overlap hours, keep progress visible in shared tools, and communicate asynchronously with regular syncs. We have shipped products for teams across many time zones.',
			},
			{
				question: 'How will we stay informed about progress?',
				answer:
					'You always know where things stand. We work in shared project tools, hold regular syncs, and keep documentation and decisions visible. You get clear milestones, demos at each stage, and a direct line to the team — not a filtered report once a month.',
			},
			{
				question: 'Can Codelaro integrate with our existing team?',
				answer:
					'Yes. We can embed alongside your in-house engineers, designers and product managers, follow your processes, and hand off cleanly. Team extension engagements are built around complementing your team rather than replacing it.',
			},
		],
	},
	{
		slug: 'pricing-and-engagement',
		label: 'Pricing & engagement',
		description: 'How engagements are structured and priced.',
		items: [
			{
				question: 'How is pricing structured?',
				answer:
					'Engagements are typically fixed-scope for a defined milestone, or a dedicated team on a monthly basis for ongoing work. The right model depends on how well-defined the work is. We share a clear proposal with pricing after discovery — we do not quote before understanding the scope.',
			},
			{
				question: 'Do you offer ongoing maintenance and support?',
				answer:
					'Yes. We offer ongoing maintenance, monitoring, security patching, performance tuning and incremental improvements under a clear SLA with a dedicated support channel. Keeping your product healthy after go-live is part of being a long-term technology partner, not a separate afterthought.',
			},
			{
				question: 'What happens after launch?',
				answer:
					'Launch is a milestone, not the end. We help you monitor real usage, prioritize what to build next, and keep the product healthy. Many engagements continue into a growth phase where we iterate based on what users actually do.',
			},
		],
	},
	{
		slug: 'security-and-ip',
		label: 'Security & IP',
		description: 'How we protect your data, code and intellectual property.',
		items: [
			{
				question: 'Who owns the code and intellectual property?',
				answer:
					'You do. Code, designs and intellectual property created for your project belong to you, and we transfer ownership as part of the engagement. We are happy to sign an NDA before detailed discussions.',
			},
			{
				question: 'How do you handle security and data protection?',
				answer:
					'Security is built into how we work — secure coding practices, dependency management, access controls and regular reviews. For projects handling sensitive data we align on the specific requirements early so the right controls are in place from the start.',
			},
		],
	},
];

export const ALL_CATEGORIZED_QUESTIONS = FAQ_CATEGORIES.flatMap((category) =>
	category.items.map((item) => ({ ...item, category: category.label })),
);
