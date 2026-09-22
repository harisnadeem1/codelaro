import type { LucideIcon } from 'lucide-react';
import {
	Boxes,
	BrainCircuit,
	Briefcase,
	Building2,
	Cloud,
	Code2,
	GraduationCap,
	HeartPulse,
	Landmark,
	Mail,
	PenTool,
	Rocket,
	ShieldCheck,
	ShoppingBag,
	Smartphone,
	Store,
	Truck,
	Wand2,
} from 'lucide-react';

export interface MegaMenuLink {
	label: string;
	href: string;
	description: string;
	icon: LucideIcon;
}

export interface MegaMenu {
	links: MegaMenuLink[];
	featured: {
		title: string;
		description: string;
		cta: string;
		href: string;
	};
}

export interface NavItem {
	label: string;
	href: string;
	menu?: MegaMenu;
	/** Tailwind width class for the desktop dropdown panel */
	panelWidth?: string;
}

export const NAV_ITEMS: NavItem[] = [
	{
		label: 'Services',
		href: '/services',
		panelWidth: 'w-[640px]',
		menu: {
			links: [
				{
					label: 'Web Development',
					href: '/services/web-development',
					description: 'High-performance websites, portals and web applications.',
					icon: Code2,
				},
				{
					label: 'Mobile Development',
					href: '/services/mobile-app-development',
					description: 'Native and cross-platform apps for iOS and Android.',
					icon: Smartphone,
				},
				{
					label: 'Cloud & DevOps',
					href: '/services/cloud-devops',
					description: 'Cloud architecture, CI/CD and reliable infrastructure.',
					icon: Cloud,
				},
				{
					label: 'UI/UX Design',
					href: '/services/ui-ux-design',
					description: 'Product design systems people love to use.',
					icon: PenTool,
				},
				{
					label: 'AI & Automation',
					href: '/services/ai-automation',
					description: 'Applied AI, agents and workflow automation.',
					icon: BrainCircuit,
				},
				{
					label: 'View all services',
					href: '/services',
					description: 'Twelve disciplines, one senior team — end to end.',
					icon: ShieldCheck,
				},
			],
			featured: {
				title: 'Not sure where to start?',
				description: 'Tell us about your goals — we will map the fastest route to launch.',
				cta: 'Book a free consultation',
				href: '#contact',
			},
		},
	},
	{
		label: 'Solutions',
		href: '/solutions',
		panelWidth: 'w-[640px]',
		menu: {
			links: [
				{
					label: 'MVP & Startup Launch',
					href: '/solutions/mvp-startup-launch',
					description: 'Validate and ship in weeks, not quarters.',
					icon: Rocket,
				},
				{
					label: 'Digital Transformation',
					href: '/solutions/digital-transformation',
					description: 'Modernize how the business operates end to end.',
					icon: Wand2,
				},
				{
					label: 'AI Transformation',
					href: '/solutions/ai-transformation',
					description: 'Put AI to work on real business problems.',
					icon: BrainCircuit,
				},
				{
					label: 'Legacy Modernization',
					href: '/solutions/legacy-modernization',
					description: 'Rescue critical systems without starting from zero.',
					icon: Boxes,
				},
				{
					label: 'E-commerce Transformation',
					href: '/solutions/ecommerce-transformation',
					description: 'Grow revenue with a store that converts.',
					icon: ShoppingBag,
				},
				{
					label: 'View all solutions',
					href: '/solutions',
					description: 'Eight outcome-led solutions, one senior team.',
					icon: ShieldCheck,
				},
			],
			featured: {
				title: 'Built around the outcome',
				description: 'We work backwards from the result you need — not a feature checklist.',
				cta: 'Explore all solutions',
				href: '/solutions',
			},
		},
	},
	{
		label: 'Industries',
		href: '/industries',
		panelWidth: 'w-[640px]',
		menu: {
			links: [
				{
					label: 'Fintech',
					href: '/industries/financial-services-fintech',
					description: 'Payments, banking and compliance-ready platforms.',
					icon: Landmark,
				},
				{
					label: 'Healthcare',
					href: '/industries/healthcare',
					description: 'Secure patient-facing and clinical software.',
					icon: HeartPulse,
				},
				{
					label: 'Retail & E-commerce',
					href: '/industries/ecommerce-retail',
					description: 'Omnichannel experiences that grow revenue.',
					icon: Store,
				},
				{
					label: 'Logistics',
					href: '/industries/logistics-transportation',
					description: 'Tracking, routing and supply-chain visibility.',
					icon: Truck,
				},
				{
					label: 'Education',
					href: '/industries/education-elearning',
					description: 'Learning platforms and campus technology.',
					icon: GraduationCap,
				},
				{
					label: 'Real Estate',
					href: '/industries/real-estate',
					description: 'PropTech for listings, valuation and management.',
					icon: Building2,
				},
			],
			featured: {
				title: 'Domain expertise included',
				description: 'Teams that already speak your industry’s language.',
				cta: 'Explore all industries',
				href: '/industries',
			},
		},
	},
	{ label: 'Work', href: '/work' },
	{
		label: 'Company',
		href: '/company',
		panelWidth: 'w-[440px]',
		menu: {
			links: [
				{
					label: 'About Codelaro',
					href: '/company',
					description: 'Our purpose, mission, vision and philosophy.',
					icon: Building2,
				},
				{
					label: 'Why Codelaro',
					href: '/company/why-codelaro',
					description: 'What makes us a different kind of partner.',
					icon: ShieldCheck,
				},
				{
					label: 'Our Process',
					href: '/company/process',
					description: 'Discover → Strategize → Design → Code → Launch → Grow.',
					icon: Rocket,
				},
				{
					label: 'Careers',
					href: '/company/careers',
					description: 'Build your career at Codelaro.',
					icon: Briefcase,
				},
				{
					label: 'Contact',
					href: '/contact',
					description: 'Talk to our team — we reply within a day.',
					icon: Mail,
				},
			],
			featured: {
				title: 'We are hiring',
				description: 'Senior engineers, designers and product minds — remote-first.',
				cta: 'View open roles',
				href: '/company/careers',
			},
		},
	},
	{ label: 'Insights', href: '/insights' },
];
