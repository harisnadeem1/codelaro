import type { LucideIcon } from 'lucide-react';
import {
	Briefcase,
	Building2,
	GraduationCap,
	HeartPulse,
	Landmark,
	Plane,
	Rocket,
	ShoppingBag,
	Truck,
} from 'lucide-react';

export interface IndustryChallenge {
	title: string;
	description: string;
}

export interface IndustryTechnology {
	title: string;
	description: string;
}

export interface Industry {
	slug: string;
	title: string;
	/** One-line positioning shown in the index. */
	tagline: string;
	/** Longer editorial description revealed in the detail panel. */
	description: string;
	/** What we deliver for this industry. */
	deliverables: string[];
	icon: LucideIcon;
	/** Intro framing the common digital challenges. */
	challengeIntro: string;
	/** Common digital challenges in this sector. */
	challengePoints: IndustryChallenge[];
	/** Applicable Codelaro service slugs. */
	applicableServices: string[];
	/** Applicable Codelaro solution slugs. */
	applicableSolutions: string[];
	/** Technology possibilities relevant to this industry. */
	technologyPossibilities: IndustryTechnology[];
	/** Related industry slugs for cross-linking. */
	relatedIndustries: string[];
}

export const INDUSTRIES: Industry[] = [
	{
		slug: 'financial-services-fintech',
		title: 'Financial Services & FinTech',
		tagline: 'Secure, compliant platforms for money in motion.',
		description:
			'We build fintech and banking-grade products where trust, security and regulatory compliance come first — from digital wallets and lending platforms to dashboards that make complex financial data legible.',
		deliverables: [
			'Digital wallets & payment platforms',
			'KYC, AML and compliance workflows',
			'Real-time reporting & analytics',
			'Secure, audit-ready architecture',
		],
		icon: Landmark,
		challengeIntro:
			'Financial software lives under pressures most products never face: money must move accurately, data must stay private, and every action must be traceable. The engineering challenges follow directly from those stakes.',
		challengePoints: [
			{
				title: 'Security & data protection',
				description:
					'Financial data is a permanent target. Platforms must protect sensitive information end to end, control access precisely, and keep an auditable trail of who did what and when.',
			},
			{
				title: 'Regulatory & compliance workflows',
				description:
					'KYC, AML and reporting obligations shape what the software must do. Workflows have to enforce compliance by design rather than rely on people remembering the rules.',
			},
			{
				title: 'Complex data made legible',
				description:
					'Transactions, balances, risk and exposure are inherently complex. The challenge is turning that data into clear views that customers and analysts can actually act on.',
			},
			{
				title: 'Reliability under trust',
				description:
					'When money is involved, downtime and errors erode trust immediately. The platform has to be reliable and handle edge cases — failed payments, retries, reconciliation — correctly.',
			},
		],
		applicableServices: ['payment-integration', 'custom-software-development', 'data-analytics', 'cloud-devops'],
		applicableSolutions: ['legacy-modernization', 'scaling-optimization', 'business-process-automation'],
		technologyPossibilities: [
			{
				title: 'Digital wallets & payment platforms',
				description:
					'Secure wallets, transfers and payment flows with tokenisation, multi-currency support and reliable transaction handling.',
			},
			{
				title: 'Compliance workflow engines',
				description:
					'KYC, AML and audit workflows enforced in software — with role-based permissions, routing and complete audit trails.',
			},
			{
				title: 'Real-time financial dashboards',
				description:
					'Legible views of transactions, balances and exposure — refreshed in real time and exportable for reporting.',
			},
			{
				title: 'Risk & decision analytics',
				description:
					'Data pipelines and models that surface risk, exposure and opportunity from transaction and customer data.',
			},
		],
		relatedIndustries: ['ecommerce-retail', 'startups-technology', 'professional-services'],
	},
	{
		slug: 'ecommerce-retail',
		title: 'E-commerce & Retail',
		tagline: 'Storefronts and operations that convert and scale.',
		description:
			'We help retailers grow online with fast storefronts, frictionless checkout and connected back-office tools — engineered to hold up through peak demand and across every sales channel.',
		deliverables: [
			'Headless storefronts & checkout',
			'Inventory & catalog management',
			'Omnichannel operations',
			'Conversion & performance tuning',
		],
		icon: ShoppingBag,
		challengeIntro:
			'In retail, every friction point is a lost sale and every peak event is a stress test. The digital challenges sit where customer experience meets operational scale.',
		challengePoints: [
			{
				title: 'Speed & conversion',
				description:
					'Slow pages and clunky checkout directly cost revenue. The storefront has to be fast on every device and guide customers smoothly from product to purchase.',
			},
			{
				title: 'Inventory across channels',
				description:
					'Stock must stay accurate across the web, marketplaces and physical stores. Disconnected inventory leads to overselling, missed sales and fulfilment failures.',
			},
			{
				title: 'Peak traffic resilience',
				description:
					'Sales, launches and seasons bring traffic spikes that break unprepared stores. The platform has to stay fast and reliable exactly when it matters most.',
			},
			{
				title: 'Connected back-office',
				description:
					'Orders, payments, shipping and tax have to flow end to end without manual handling, or growth turns into an operational crisis.',
			},
		],
		applicableServices: ['ecommerce-development', 'payment-integration', 'web-development', 'data-analytics'],
		applicableSolutions: ['ecommerce-transformation', 'scaling-optimization', 'mvp-startup-launch'],
		technologyPossibilities: [
			{
				title: 'Headless & composable storefronts',
				description:
					'Fast, flexible storefronts decoupled from the commerce backend — design freedom and performance at scale.',
			},
			{
				title: 'Omnichannel inventory sync',
				description:
					'Real-time stock across web, marketplaces and stores, with automated routing to the best fulfilment path.',
			},
			{
				title: 'Conversion-focused checkout',
				description:
					'Frictionless, mobile-optimised checkout with secure payments and abandoned-cart recovery.',
			},
			{
				title: 'Commerce analytics',
				description:
					'Clear views of conversion, cohorts and channel performance — so merchandising decisions rest on data.',
			},
		],
		relatedIndustries: ['logistics-transportation', 'startups-technology', 'financial-services-fintech'],
	},
	{
		slug: 'healthcare',
		title: 'Healthcare',
		tagline: 'Patient-first software that meets clinical standards.',
		description:
			'We design and build healthcare products that put patients and clinicians first — secure portals, scheduling, telehealth and records tooling built around privacy and clinical usability.',
		deliverables: [
			'Patient portals & scheduling',
			'Telehealth & remote monitoring',
			'HIPAA-aware data handling',
			'Clinician-friendly interfaces',
		],
		icon: HeartPulse,
		challengeIntro:
			'Healthcare software carries a duty most products do not: it handles sensitive patient information and supports real clinical decisions. The challenges follow from that responsibility.',
		challengePoints: [
			{
				title: 'Privacy & sensitive data',
				description:
					'Patient information must be protected to a high standard and handled with appropriate care. Data handling has to be designed for privacy from the start, not added later.',
			},
			{
				title: 'Clinical usability',
				description:
					'Clinicians work under time pressure in demanding environments. Interfaces have to be fast, clear and unambiguous — poor usability in healthcare has real consequences.',
			},
			{
				title: 'Access & engagement',
				description:
					'Patients span every age and comfort level with technology. Portals and tools have to be accessible and simple enough for everyone to use, not just the tech-confident.',
			},
			{
				title: 'Reliability of care-critical systems',
				description:
					'Scheduling, telehealth and records tools are relied upon for real care delivery. They have to be dependable when patients and clinicians need them.',
			},
		],
		applicableServices: ['web-development', 'mobile-app-development', 'custom-software-development', 'ui-ux-design'],
		applicableSolutions: ['digital-transformation', 'ai-transformation', 'legacy-modernization'],
		technologyPossibilities: [
			{
				title: 'Patient portals & scheduling',
				description:
					'Secure, accessible portals for appointments, records and communication — designed for patients of every comfort level.',
			},
			{
				title: 'Telehealth & remote monitoring',
				description:
					'Video consultations and remote data capture that extend care beyond the clinic, reliably and privately.',
			},
			{
				title: 'Privacy-aware data architecture',
				description:
					'Data handling designed for sensitivity from the start — access control, encryption and audit by default.',
			},
			{
				title: 'AI-assisted clinical support',
				description:
					'Grounded, guarded AI that assists with documentation, summarisation and triage — supporting clinicians, never replacing judgement.',
			},
		],
		relatedIndustries: ['education-elearning', 'professional-services', 'startups-technology'],
	},
	{
		slug: 'education-elearning',
		title: 'Education & E-learning',
		tagline: 'Learning experiences that keep students engaged.',
		description:
			'We create digital learning platforms that scale from classrooms to global cohorts — combining accessible content delivery, assessments and analytics into experiences learners actually finish.',
		deliverables: [
			'LMS & course platforms',
			'Interactive content & assessment',
			'Progress analytics & reporting',
			'Accessible, multi-device delivery',
		],
		icon: GraduationCap,
		challengeIntro:
			'Learning platforms fail when engagement drops and completion falls. The digital challenges are about holding attention and proving outcomes at scale.',
		challengePoints: [
			{
				title: 'Engagement & completion',
				description:
					'Online learners drop off easily. Content and interaction have to be designed to hold attention and guide learners through to completion, not just publish material.',
			},
			{
				title: 'Scale across cohorts',
				description:
					'Platforms must serve a single classroom and global cohorts alike — handling concurrency, content delivery and assessment at scale without degrading the experience.',
			},
			{
				title: 'Accessibility & multi-device',
				description:
					'Learners use whatever device they have. Experiences have to be accessible and consistent across phones, tablets and desktops, including for users with disabilities.',
			},
			{
				title: 'Measuring outcomes',
				description:
					'Institutions and instructors need to see progress and completion clearly. The platform has to turn activity into meaningful analytics, not just raw logs.',
			},
		],
		applicableServices: ['web-development', 'mobile-app-development', 'ui-ux-design', 'data-analytics'],
		applicableSolutions: ['digital-transformation', 'mvp-startup-launch', 'ai-transformation'],
		technologyPossibilities: [
			{
				title: 'LMS & course platforms',
				description:
					'Flexible learning platforms with structured courses, content delivery and instructor tooling — scalable from a class to a global cohort.',
			},
			{
				title: 'Interactive content & assessment',
				description:
					'Engaging lessons, quizzes and assignments that keep learners active and give immediate, useful feedback.',
			},
			{
				title: 'Progress analytics',
				description:
					'Clear views of engagement, progress and completion for learners, instructors and institutions.',
			},
			{
				title: 'Personalised learning paths',
				description:
					'Grounded AI that adapts content and practice to each learner — supporting mastery at the learner’s own pace.',
			},
		],
		relatedIndustries: ['healthcare', 'professional-services', 'startups-technology'],
	},
	{
		slug: 'real-estate',
		title: 'Real Estate',
		tagline: 'Property platforms that connect buyers and agents.',
		description:
			'We build property and real-estate products that make listings, search and transactions effortless — from portals with smart search to agent dashboards and document workflows.',
		deliverables: [
			'Property portals & smart search',
			'Agent & listing management',
			'Virtual tour & media integration',
			'Transaction & document workflows',
		],
		icon: Building2,
		challengeIntro:
			'Real estate is a search and trust business. Buyers need to find the right property fast; agents need to manage listings and transactions without drowning in paperwork.',
		challengePoints: [
			{
				title: 'Search that finds the right property',
				description:
					'Listings are only useful if buyers can find what they want. Search has to be fast, flexible and smart enough to surface relevant properties from large catalogs.',
			},
			{
				title: 'Rich media & virtual tours',
				description:
					'Property decisions depend on seeing the space. Platforms have to handle high-quality media and virtual tours smoothly without slowing the experience.',
			},
			{
				title: 'Listing & agent management',
				description:
					'Agents juggle many listings, enquiries and documents. The back-office tools have to make that manageable rather than add to the admin load.',
			},
			{
				title: 'Transaction & document workflows',
				description:
					'Buying and renting involves contracts, signatures and steps. The platform has to guide transactions securely without paperwork friction.',
			},
		],
		applicableServices: ['web-development', 'custom-software-development', 'ui-ux-design', 'api-system-integration'],
		applicableSolutions: ['digital-transformation', 'mvp-startup-launch', 'business-process-automation'],
		technologyPossibilities: [
			{
				title: 'Property portals with smart search',
				description:
					'Fast, flexible search over large listing catalogs — with filters, maps and recommendations that surface the right properties.',
			},
			{
				title: 'Virtual tour & media experiences',
				description:
					'High-quality photos, video and virtual tours delivered smoothly — so buyers can evaluate properties from anywhere.',
			},
			{
				title: 'Agent dashboards',
				description:
					'Tools to manage listings, enquiries and pipeline in one place — reducing admin and helping agents focus on closing.',
			},
			{
				title: 'Transaction & e-signature workflows',
				description:
					'Secure document workflows that guide transactions from offer to close, with signatures and audit trails.',
			},
		],
		relatedIndustries: ['professional-services', 'ecommerce-retail', 'startups-technology'],
	},
	{
		slug: 'professional-services',
		title: 'Professional Services',
		tagline: 'Tools that bill, schedule and deliver work.',
		description:
			'We build platforms for consultancies, agencies and service firms — client portals, project delivery, scheduling and billing that turn scattered operations into a single, reliable system.',
		deliverables: [
			'Client portals & collaboration',
			'Project & resource scheduling',
			'Time tracking & billing',
			'Knowledge & document management',
		],
		icon: Briefcase,
		challengeIntro:
			'Professional services firms sell expertise, but they run on scheduling, billing and documents. The digital challenges are about turning that operational complexity into a smooth system.',
		challengePoints: [
			{
				title: 'Scheduling & resource management',
				description:
					'People, projects and time are the core assets. Firms need clear visibility of who is on what, and scheduling that keeps utilisation high without overloading the team.',
			},
			{
				title: 'Time tracking & billing',
				description:
					'Revenue depends on accurate time and clean billing. Manual tracking and invoicing create leaks and friction that scale badly as the firm grows.',
			},
			{
				title: 'Client collaboration',
				description:
					'Clients expect transparency into work in progress. Portals and shared workspaces have to make collaboration easy without exposing the wrong things.',
			},
			{
				title: 'Knowledge & documents',
				description:
					'Firms accumulate proposals, deliverables and IP. Without a organised system, that knowledge is scattered and hard to reuse across engagements.',
			},
		],
		applicableServices: ['custom-software-development', 'web-development', 'api-system-integration', 'data-analytics'],
		applicableSolutions: ['business-process-automation', 'digital-transformation', 'team-extension'],
		technologyPossibilities: [
			{
				title: 'Client portals & collaboration',
				description:
					'Secure portals where clients track progress, share files and collaborate — with the right access for each relationship.',
			},
			{
				title: 'Project & resource scheduling',
				description:
					'Clear views of people, projects and time — so utilisation stays high and the team is not overloaded.',
			},
			{
				title: 'Time tracking & billing',
				description:
					'Accurate time capture flowing straight into invoicing — reducing leaks and removing manual reconciliation.',
			},
			{
				title: 'Knowledge & document management',
				description:
					'A organised home for proposals, deliverables and IP — searchable and reusable across engagements.',
			},
		],
		relatedIndustries: ['real-estate', 'financial-services-fintech', 'startups-technology'],
	},
	{
		slug: 'logistics-transportation',
		title: 'Logistics & Transportation',
		tagline: 'Visibility and control across every shipment.',
		description:
			'We engineer logistics software that tracks, routes and optimises the movement of goods — real-time fleet visibility, warehouse operations and integrations that keep supply chains moving.',
		deliverables: [
			'Shipment & fleet tracking',
			'Route optimization & planning',
			'Warehouse & inventory operations',
			'Carrier & partner integrations',
		],
		icon: Truck,
		challengeIntro:
			'Logistics runs on real-time visibility and tight coordination. The digital challenges are about knowing where everything is and moving it efficiently.',
		challengePoints: [
			{
				title: 'Real-time visibility',
				description:
					'Shipments, vehicles and inventory are constantly in motion. Operations teams need accurate, real-time visibility rather than end-of-day reports.',
			},
			{
				title: 'Routing & efficiency',
				description:
					'Fuel, time and capacity are expensive. Routes and loads have to be planned and optimised to keep costs down and service levels up.',
			},
			{
				title: 'System & partner integrations',
				description:
					'Logistics touches carriers, warehouses, ERPs and customers. Data has to flow reliably between all of them without manual re-entry.',
			},
			{
				title: 'Scale & reliability',
				description:
					'Operations run around the clock. The platform has to be reliable under continuous load and handle exceptions — delays, disruptions — gracefully.',
			},
		],
		applicableServices: ['custom-software-development', 'api-system-integration', 'mobile-app-development', 'cloud-devops'],
		applicableSolutions: ['business-process-automation', 'legacy-modernization', 'scaling-optimization'],
		technologyPossibilities: [
			{
				title: 'Shipment & fleet tracking',
				description:
					'Real-time visibility of shipments and vehicles — with status, ETA and exception alerts across the operation.',
			},
			{
				title: 'Route optimization',
				description:
					'Planning and optimisation of routes and loads to reduce cost and improve service levels.',
			},
			{
				title: 'Warehouse & inventory operations',
				description:
					'Tools for receiving, picking and stock control — with accurate, real-time inventory across sites.',
			},
			{
				title: 'Carrier & partner integrations',
				description:
					'Reliable data exchange with carriers, ERPs and customers — automated, with reconciliation and exception handling.',
			},
		],
		relatedIndustries: ['ecommerce-retail', 'travel-hospitality', 'professional-services'],
	},
	{
		slug: 'travel-hospitality',
		title: 'Travel & Hospitality',
		tagline: 'Booking and guest experiences that feel effortless.',
		description:
			'We build travel and hospitality products that turn booking, planning and on-site experiences into a seamless journey — from reservation engines to guest-facing apps and operations tooling.',
		deliverables: [
			'Booking & reservation engines',
			'Guest-facing mobile experiences',
			'Pricing & availability management',
			'Operations & staff tooling',
		],
		icon: Plane,
		challengeIntro:
			'Travel and hospitality live and die on experience. The digital challenges are about making booking effortless and the on-site journey seamless.',
		challengePoints: [
			{
				title: 'Booking that converts',
				description:
					'Booking is the moment of truth. The flow has to be fast, clear and trustworthy across devices, with real availability and no surprise friction at payment.',
			},
			{
				title: 'Dynamic pricing & availability',
				description:
					'Rates and availability change constantly with demand, season and inventory. Managing that manually is error-prone and leaves revenue on the table.',
			},
			{
				title: 'Guest experience journey',
				description:
					'The experience spans booking, arrival, stay and departure. Guests expect a connected journey, not disconnected touchpoints that make them repeat themselves.',
			},
			{
				title: 'Operations coordination',
				description:
					'Staff need to coordinate housekeeping, service and requests in real time. Without good tooling, the front-line experience suffers.',
			},
		],
		applicableServices: ['web-development', 'mobile-app-development', 'payment-integration', 'ui-ux-design'],
		applicableSolutions: ['mvp-startup-launch', 'digital-transformation', 'ecommerce-transformation'],
		technologyPossibilities: [
			{
				title: 'Booking & reservation engines',
				description:
					'Fast, trustworthy booking flows with real-time availability and secure payment — optimised for conversion on every device.',
			},
			{
				title: 'Guest-facing mobile apps',
				description:
					'Apps that guide the guest journey — from check-in to service requests — and keep the brand close throughout the stay.',
			},
			{
				title: 'Dynamic pricing & availability',
				description:
					'Automated rate and availability management that responds to demand and season — protecting revenue without manual effort.',
			},
			{
				title: 'Staff & operations tooling',
				description:
					'Real-time coordination of housekeeping, service and requests — so the front-line experience stays consistent.',
			},
		],
		relatedIndustries: ['logistics-transportation', 'ecommerce-retail', 'real-estate'],
	},
	{
		slug: 'startups-technology',
		title: 'Startups & Technology',
		tagline: 'From zero to scale with senior engineering.',
		description:
			'We partner with founders and tech teams to ship fast and scale clean — building MVPs, hardening early products and extending teams with senior engineers who have done it before.',
		deliverables: [
			'MVP design & engineering',
			'Scalable architecture from day one',
			'Team extension with senior talent',
			'Launch & growth instrumentation',
		],
		icon: Rocket,
		challengeIntro:
			'Startups operate under fixed runway and shifting assumptions. The digital challenges are about moving fast now without building a mess that slows you later.',
		challengePoints: [
			{
				title: 'Speed versus foundations',
				description:
					'Founders need to ship fast to validate, but shortcuts that become a rewrite later kill momentum. The challenge is moving quickly on a foundation that scales.',
			},
			{
				title: 'Senior capacity when hiring is slow',
				description:
					'Work outpaces the team long before hiring catches up. Startups need experienced capacity that integrates fast, not a long recruitment cycle.',
			},
			{
				title: 'Scaling without rewrites',
				description:
					'Traction exposes the limits of an early build. The product has to scale in usage and team size without forcing a costly ground-up rewrite.',
			},
			{
				title: 'Learning from real usage',
				description:
					'Startups win by learning fast. The product has to be instrumented from the start so decisions rest on real behaviour, not guesses.',
			},
		],
		applicableServices: ['web-development', 'mobile-app-development', 'cloud-devops', 'saas-development'],
		applicableSolutions: ['mvp-startup-launch', 'scaling-optimization', 'team-extension'],
		technologyPossibilities: [
			{
				title: 'Lean MVPs on scalable foundations',
				description:
					'Working MVPs shipped fast — on the same architecture patterns we use for production — so traction is a head start, not a rebuild.',
			},
			{
				title: 'Scalable architecture from day one',
				description:
					'Foundations that hold up as usage and teams grow — so you scale by adding features, not by tearing down what works.',
			},
			{
				title: 'Embedded senior teams',
				description:
					'Experienced engineers and designers who integrate with your team and cadence — accelerating delivery without the hiring overhead.',
			},
			{
				title: 'Growth instrumentation',
				description:
					'Analytics and funnels wired in from launch — so every decision about what to build next rests on real user behaviour.',
			},
		],
		relatedIndustries: ['financial-services-fintech', 'ecommerce-retail', 'healthcare'],
	},
];

export function getIndustryBySlug(slug: string): Industry | undefined {
	return INDUSTRIES.find((industry) => industry.slug === slug);
}
