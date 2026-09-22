import type { LucideIcon } from 'lucide-react';
import {
	BrainCircuit,
	Cloud,
	Code2,
	Compass,
	PenTool,
	Rocket,
	TrendingUp,
} from 'lucide-react';

export interface InsightCategory {
	slug: string;
	label: string;
	description: string;
	icon: LucideIcon;
}

export interface InsightArticle {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	/** ISO date string — editable placeholder until real content is published. */
	publishedAt: string;
	/** Estimated read time in minutes. */
	readTime: number;
	author: string;
	/** Marks the article as a sample/placeholder until real content is published. */
	placeholder: boolean;
	/** Accent label shown on the card, e.g. "Engineering", "AI". */
	tag: string;
}

export const INSIGHT_CATEGORIES: InsightCategory[] = [
	{
		slug: 'engineering',
		label: 'Engineering',
		description: 'Architecture, patterns and the craft of building software that lasts.',
		icon: Code2,
	},
	{
		slug: 'ai',
		label: 'AI & Automation',
		description: 'Applied AI, agents and workflow automation for real business problems.',
		icon: BrainCircuit,
	},
	{
		slug: 'product',
		label: 'Product',
		description: 'Strategy, validation and the decisions that shape what gets built.',
		icon: Compass,
	},
	{
		slug: 'cloud',
		label: 'Cloud & DevOps',
		description: 'Infrastructure, reliability and shipping with confidence.',
		icon: Cloud,
	},
	{
		slug: 'design',
		label: 'Design',
		description: 'Product design systems and experiences people love to use.',
		icon: PenTool,
	},
	{
		slug: 'business',
		label: 'Business',
		description: 'How technology moves a business forward — outcomes over features.',
		icon: TrendingUp,
	},
];

/**
 * Sample article placeholders. These are NOT real published content — they
 * illustrate the publication layout and are replaced with real articles as
 * they are written. Each is clearly marked `placeholder: true`.
 */
export const INSIGHT_ARTICLES: InsightArticle[] = [
	{
		slug: 'building-for-scale-from-day-one',
		title: 'Building for scale from day one',
		excerpt:
			'How the architectural decisions you make in week one shape what your product can become in year three — and where to spend the effort early.',
		category: 'engineering',
		publishedAt: '2026-09-12T09:00:00.000Z',
		readTime: 8,
		author: 'Codelaro Team',
		placeholder: true,
		tag: 'Engineering',
	},
	{
		slug: 'putting-ai-to-work-on-real-problems',
		title: 'Putting AI to work on real problems',
		excerpt:
			'A practical framework for choosing where AI creates leverage in your business — and where it is the wrong tool for the job.',
		category: 'ai',
		publishedAt: '2026-09-05T09:00:00.000Z',
		readTime: 7,
		author: 'Codelaro Team',
		placeholder: true,
		tag: 'AI',
	},
	{
		slug: 'the-mvp-that-does-not-lie',
		title: 'The MVP that does not lie',
		excerpt:
			'Why the smallest useful version of your product is the fastest way to learn what is actually worth building next.',
		category: 'product',
		publishedAt: '2026-08-28T09:00:00.000Z',
		readTime: 6,
		author: 'Codelaro Team',
		placeholder: true,
		tag: 'Product',
	},
	{
		slug: 'shipping-with-confidence',
		title: 'Shipping with confidence',
		excerpt:
			'A pragmatic approach to CI/CD, observability and release safety that grows with your team instead of slowing it down.',
		category: 'cloud',
		publishedAt: '2026-08-20T09:00:00.000Z',
		readTime: 9,
		author: 'Codelaro Team',
		placeholder: true,
		tag: 'Cloud',
	},
	{
		slug: 'design-systems-that-survive-growth',
		title: 'Design systems that survive growth',
		excerpt:
			'How a small set of well-chosen patterns keeps your product coherent as new screens, features and teams arrive.',
		category: 'design',
		publishedAt: '2026-08-14T09:00:00.000Z',
		readTime: 7,
		author: 'Codelaro Team',
		placeholder: true,
		tag: 'Design',
	},
	{
		slug: 'outcomes-over-features',
		title: 'Outcomes over features',
		excerpt:
			'Why the teams that win measure the result they created — not the number of features they shipped.',
		category: 'business',
		publishedAt: '2026-08-06T09:00:00.000Z',
		readTime: 5,
		author: 'Codelaro Team',
		placeholder: true,
		tag: 'Business',
	},
	{
		slug: 'when-to-modernize-and-when-to-rebuild',
		title: 'When to modernize and when to rebuild',
		excerpt:
			'A decision framework for legacy systems — and why the honest answer is usually somewhere in between.',
		category: 'engineering',
		publishedAt: '2026-07-30T09:00:00.000Z',
		readTime: 8,
		author: 'Codelaro Team',
		placeholder: true,
		tag: 'Engineering',
	},
	{
		slug: 'automation-that-actually-saves-time',
		title: 'Automation that actually saves time',
		excerpt:
			'The unglamorous workflows where automation pays back fastest — and how to spot them in your own operations.',
		category: 'ai',
		publishedAt: '2026-07-22T09:00:00.000Z',
		readTime: 6,
		author: 'Codelaro Team',
		placeholder: true,
		tag: 'AI',
	},
	{
		slug: 'from-idea-to-launch-in-weeks',
		title: 'From idea to launch in weeks',
		excerpt:
			'What a focused, disciplined path from first conversation to first release actually looks like in practice.',
		category: 'product',
		publishedAt: '2026-07-15T09:00:00.000Z',
		readTime: 7,
		author: 'Codelaro Team',
		placeholder: true,
		tag: 'Product',
	},
];

export const FEATURED_ARTICLE = INSIGHT_ARTICLES[0];
export const LATEST_ARTICLES = INSIGHT_ARTICLES.slice(1);

export function getInsightArticlesByCategory(slug: string): InsightArticle[] {
	if (slug === 'all') return INSIGHT_ARTICLES;
	return INSIGHT_ARTICLES.filter((article) => article.category === slug);
}
