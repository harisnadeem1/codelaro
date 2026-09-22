import type { LucideIcon } from 'lucide-react';
import {
	Code2,
	Server,
	Smartphone,
	Database,
	Cloud,
	BrainCircuit,
	ShoppingBag,
	Workflow,
} from 'lucide-react';

export interface TechCategory {
	slug: string;
	title: string;
	description: string;
	icon: LucideIcon;
	technologies: string[];
}

export const TECH_CATEGORIES: TechCategory[] = [
	{
		slug: 'frontend',
		title: 'Frontend',
		description:
			'Fast, accessible, type-safe interfaces with a tuned Core Web Vitals profile.',
		icon: Code2,
		technologies: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
	},
	{
		slug: 'backend',
		title: 'Backend',
		description:
			'Robust APIs and services engineered for reliability, security and scale.',
		icon: Server,
		technologies: ['Node.js', 'Express', 'Python', 'REST APIs'],
	},
	{
		slug: 'mobile',
		title: 'Mobile',
		description:
			'Native-feeling iOS and Android apps from a single, maintainable codebase.',
		icon: Smartphone,
		technologies: ['React Native', 'iOS', 'Android'],
	},
	{
		slug: 'databases',
		title: 'Databases',
		description:
			'Modelled, indexed and governed data layers that hold up under real load.',
		icon: Database,
		technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
	},
	{
		slug: 'cloud-devops',
		title: 'Cloud & DevOps',
		description:
			'Automated, observable infrastructure that ships safely and often.',
		icon: Cloud,
		technologies: ['Nginx', 'Linux', 'Docker', 'CI/CD'],
	},
	{
		slug: 'ai-automation',
		title: 'AI & Automation',
		description:
			'Practical AI, agents and automations that remove manual work.',
		icon: BrainCircuit,
		technologies: ['OpenAI', 'n8n', 'RAG', 'LLM Agents'],
	},
	{
		slug: 'ecommerce',
		title: 'E-commerce',
		description:
			'Storefronts and marketplaces built to convert and scale through peak.',
		icon: ShoppingBag,
		technologies: ['Shopify', 'WooCommerce', 'Headless Commerce'],
	},
	{
		slug: 'integrations',
		title: 'Integrations',
		description:
			'Connect systems, data and third-party services reliably and observably.',
		icon: Workflow,
		technologies: ['REST APIs', 'Webhooks', 'n8n', 'Third-party APIs'],
	},
];
