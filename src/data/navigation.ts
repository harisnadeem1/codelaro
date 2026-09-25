import type { LucideIcon } from 'lucide-react';
import {
	Boxes,
	BrainCircuit,
	Briefcase,
	BriefcaseBusiness,
	Building2,
	ChartNoAxesCombined,
	Cloud,
	Code2,
	CreditCard,
	Gauge,
	GraduationCap,
	Headset,
	HeartPulse,
	Landmark,
	Layers,
	Mail,
	MonitorCog,
	PenTool,
	Plane,
	Rocket,
	ShieldCheck,
	ShoppingBag,
	ShoppingCart,
	Smartphone,
	Store,
	Truck,
	Users,
	Wand2,
	Workflow,
} from 'lucide-react';

export interface MegaMenuLink {
	label: string;
	href: string;
	description: string;
	icon: LucideIcon;
}

export interface MegaMenu {
	links: MegaMenuLink[];
	featured?: {
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
	menu: {
		links: [
			{
				label: 'Web Development',
				href: '/services/web-development',
				description: 'High-performance websites and web applications.',
				icon: Code2,
			},
			{
				label: 'Custom Software Development',
				href: '/services/custom-software-development',
				description: 'Purpose-built software for your business.',
				icon: MonitorCog,
			},
			{
				label: 'Mobile App Development',
				href: '/services/mobile-app-development',
				description: 'Native and cross-platform mobile applications.',
				icon: Smartphone,
			},
			{
				label: 'SaaS Development',
				href: '/services/saas-development',
				description: 'Scalable SaaS platforms and applications.',
				icon: Layers,
			},
			{
				label: 'AI & Automation',
				href: '/services/ai-automation',
				description: 'AI solutions and intelligent automation.',
				icon: BrainCircuit,
			},
			{
				label: 'E-commerce Development',
				href: '/services/ecommerce-development',
				description: 'High-converting online stores and marketplaces.',
				icon: ShoppingCart,
			},
			{
				label: 'Payment Integration',
				href: '/services/payment-integration',
				description: 'Secure payment gateways and billing.',
				icon: CreditCard,
			},
			{
				label: 'API & System Integration',
				href: '/services/api-system-integration',
				description: 'Reliable API and third-party integrations.',
				icon: Workflow,
			},
			{
				label: 'UI/UX Design',
				href: '/services/ui-ux-design',
				description: 'Modern and intuitive product experiences.',
				icon: PenTool,
			},
			{
				label: 'Cloud & DevOps',
				href: '/services/cloud-devops',
				description: 'Cloud infrastructure and deployment.',
				icon: Cloud,
			},
			{
				label: 'Data & Analytics',
				href: '/services/data-analytics',
				description: 'Data pipelines and business intelligence.',
				icon: ChartNoAxesCombined,
			},
			{
				label: 'Maintenance & Support',
				href: '/services/maintenance-support',
				description: 'Continuous monitoring and technical support.',
				icon: Headset,
			},
		],

		featured: {
			title: 'Have a project in mind?',
			description: "Let's discuss how we can bring your ideas to life.",
			cta: 'Discuss Your Project',
			href: '/contact',
		},
	},
},
{
	label: 'Solutions',
	href: '/solutions',

	menu: {
		links: [
			{
				label: 'MVP & Startup Launch',
				href: '/solutions/mvp-startup-launch',
				description: 'Validate and ship in weeks, not quarters.',
				icon: Rocket,
			},
			{
				label: 'Business Process Automation',
				href: '/solutions/business-process-automation',
				description: 'Remove manual work and reclaim operating hours.',
				icon: Workflow,
			},
			{
				label: 'Digital Transformation',
				href: '/solutions/digital-transformation',
				description: 'Modernize how the business operates end to end.',
				icon: Wand2,
			},
			{
				label: 'Legacy Software Modernization',
				href: '/solutions/legacy-modernization',
				description: 'Rescue critical systems without starting from zero.',
				icon: Boxes,
			},
			{
				label: 'AI Transformation',
				href: '/solutions/ai-transformation',
				description: 'Put AI to work on real business problems.',
				icon: BrainCircuit,
			},
			{
				label: 'E-commerce Transformation',
				href: '/solutions/ecommerce-transformation',
				description: 'Grow revenue with a store that converts.',
				icon: ShoppingBag,
			},
			{
				label: 'Team Extension',
				href: '/solutions/team-extension',
				description: 'Add senior capacity that integrates instantly.',
				icon: Users,
			},
			{
				label: 'Software Scaling & Optimization',
				href: '/solutions/scaling-optimization',
				description: 'Make a working product ready for real growth.',
				icon: Gauge,
			},
		],
	},
},
{
	label: 'Industries',
	href: '/industries',

	menu: {
		links: [
			{
				label: 'Financial Services & FinTech',
				href: '/industries/financial-services-fintech',
				description: 'Secure, compliant platforms for money in motion.',
				icon: Landmark,
			},
			{
				label: 'E-commerce & Retail',
				href: '/industries/ecommerce-retail',
				description: 'Storefronts and operations that convert and scale.',
				icon: Store,
			},
			{
				label: 'Healthcare',
				href: '/industries/healthcare',
				description: 'Patient-first software that meets clinical standards.',
				icon: HeartPulse,
			},
			{
				label: 'Education & E-learning',
				href: '/industries/education-elearning',
				description: 'Learning experiences that keep students engaged.',
				icon: GraduationCap,
			},
			{
				label: 'Real Estate',
				href: '/industries/real-estate',
				description: 'Property platforms that connect buyers and agents.',
				icon: Building2,
			},
			{
				label: 'Professional Services',
				href: '/industries/professional-services',
				description: 'Tools that bill, schedule and deliver work.',
				icon: BriefcaseBusiness,
			},
			{
				label: 'Logistics & Transportation',
				href: '/industries/logistics-transportation',
				description: 'Visibility and control across every shipment.',
				icon: Truck,
			},
			{
				label: 'Travel & Hospitality',
				href: '/industries/travel-hospitality',
				description: 'Booking and guest experiences that feel effortless.',
				icon: Plane,
			},
			{
				label: 'Startups & Technology',
				href: '/industries/startups-technology',
				description: 'From zero to scale with senior engineering.',
				icon: Rocket,
			},
		],
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
