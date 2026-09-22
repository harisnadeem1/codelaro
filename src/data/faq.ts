export interface FaqItem {
	question: string;
	answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
	{
		question: 'What types of projects does Codelaro take on?',
		answer:
			'We build web platforms, mobile apps, SaaS products, e-commerce stores, AI and automation systems, and custom software. Engagements range from a focused MVP to a multi-month platform build or a long-term dedicated team. If your project needs senior engineering across design, build and scale, it fits our work.',
	},
	{
		question: 'Do you work with startups and established businesses?',
		answer:
			'Both. For startups we move fast — scoping lean, shipping an MVP and iterating on real usage. For established businesses we modernize legacy systems, automate operations and scale products that have outgrown their first build. The common thread is senior, outcome-driven engineering.',
	},
	{
		question: 'How long does a typical project take?',
		answer:
			'It depends entirely on scope. A focused MVP can reach a first release in a matter of weeks, while a complex platform or multi-tenant SaaS product usually spans several months. After a short discovery conversation we share a tailored roadmap with realistic milestones — we do not promise fixed timelines before understanding the work.',
	},
	{
		question: 'Can we collaborate if we are in a different country or time zone?',
		answer:
			'Yes. Codelaro is an international team and most of our engagements are remote-first. We align on overlap hours, keep progress visible in shared tools, and communicate asynchronously with regular syncs. We have shipped products for teams across many time zones.',
	},
	{
		question: 'Can you work with our existing software or codebase?',
		answer:
			'Absolutely. We frequently audit, extend and modernize existing codebases — adding features, improving performance, hardening security or re-platforming onto a modern stack. We start with a codebase and architecture review so changes are deliberate and low-risk, not disruptive rewrites.',
	},
	{
		question: 'Do you provide maintenance and support after launch?',
		answer:
			'Yes. We offer ongoing maintenance, monitoring, security patching, performance tuning and incremental improvements under a clear SLA with a dedicated support channel. Keeping your product healthy after go-live is part of being a long-term technology partner, not a separate afterthought.',
	},
	{
		question: 'How do we start a project with Codelaro?',
		answer:
			'Start with a free consultation — tell us about your goals, current state and constraints. We follow up with a short discovery, then share a tailored roadmap, scope and approach. There is no obligation at the consultation stage; it is simply the fastest way to find out whether we are the right fit.',
	},
];
