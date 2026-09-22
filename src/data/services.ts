import type { LucideIcon } from 'lucide-react';
import {
	BarChart3,
	BrainCircuit,
	Cloud,
	Code2,
	CreditCard,
	Layers,
	LifeBuoy,
	PenTool,
	Rocket,
	ShoppingBag,
	Smartphone,
	Workflow,
} from 'lucide-react';

export type ServiceSpan = 'featured' | 'wide' | 'standard';

export interface ServiceUseCase {
	title: string;
	description: string;
}

export interface ServiceApproachStep {
	phase: string;
	title: string;
	description: string;
}

export interface ServiceFaqItem {
	question: string;
	answer: string;
}

export interface Service {
	slug: string;
	title: string;
	/** Concise one-line description shown on the bento card. */
	tagline: string;
	/** Longer intro for the dedicated service page. */
	summary: string;
	/** Capability bullets for the dedicated service page. */
	capabilities: string[];
	icon: LucideIcon;
	span: ServiceSpan;
	/** Accent treatment — teal-tinted featured tile. */
	accent?: boolean;
	/** Editorial overview paragraphs for the service page. */
	overview: string[];
	/** Business use cases / benefits. */
	useCases: ServiceUseCase[];
	/** Development approach steps. */
	approach: ServiceApproachStep[];
	/** Technologies relevant to this service. */
	technologies: string[];
	/** Related solution slugs. */
	relatedSolutions: string[];
	/** Related industry slugs. */
	relatedIndustries: string[];
	/** Service-specific FAQ. */
	faq: ServiceFaqItem[];
}

export const SERVICES: Service[] = [
	{
		slug: 'web-development',
		title: 'Web Development',
		tagline: 'High-performance websites, portals and web applications engineered to scale.',
		summary:
			'We build fast, accessible and search-friendly web products — from marketing sites to complex internal portals — on a modern, type-safe stack.',
		capabilities: [
			'Responsive, accessible interfaces with a tuned Core Web Vitals profile',
			'Server-rendered and static architectures for speed and SEO',
			'Component design systems and headless CMS integration',
			'Performance budgets, monitoring and continuous optimisation',
		],
		icon: Code2,
		span: 'featured',
		overview: [
			'The web is where your customers, partners and team meet your product. We engineer web experiences that load fast, rank well and stay maintainable as the business grows — not just visually polished, but structurally sound.',
			'From server-rendered marketing sites that convert to complex authenticated portals, we work across the full spectrum of modern web architecture. Every build is type-safe, component-driven and measured against real performance budgets from day one.',
		],
		useCases: [
			{
				title: 'Marketing & brand sites',
				description:
					'Fast, content-rich websites that tell your story and convert visitors — wired to a CMS your team can update without engineering.',
			},
			{
				title: 'Customer & partner portals',
				description:
					'Authenticated, role-aware portals where users manage accounts, data and workflows in a secure, responsive interface.',
			},
			{
				title: 'Internal tools & dashboards',
				description:
					'Operations dashboards and admin consoles that turn scattered data into clear, actionable views for your team.',
			},
			{
				title: 'Progressive web apps',
				description:
					'Installable, offline-capable web apps that deliver app-like experiences without the app-store overhead.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Architecture & stack',
				description:
					'We choose the rendering strategy — SSR, SSG or SPA — that fits your content, traffic and SEO needs, then define the component and data layer.',
			},
			{
				phase: '02',
				title: 'Design system',
				description:
					'A typed, documented component library ensures every screen is consistent, accessible and fast to build on as the product grows.',
			},
			{
				phase: '03',
				title: 'Build & integrate',
				description:
					'We ship in vertical slices, integrating your CMS, APIs and analytics early so each release is real and measurable.',
			},
			{
				phase: '04',
				title: 'Optimise & ship',
				description:
					'Performance budgets, Core Web Vitals checks and accessibility audits run on every change before it reaches production.',
			},
		],
		technologies: ['React', 'TypeScript', 'React Router', 'Tailwind CSS', 'Vite', 'Headless CMS'],
		relatedSolutions: ['digital-transformation', 'ecommerce-transformation', 'scaling-optimization'],
		relatedIndustries: ['ecommerce-retail', 'professional-services', 'real-estate'],
		faq: [
			{
				question: 'Do you rebuild existing websites or work with what we have?',
				answer:
					'Both. We frequently audit and improve existing sites — lifting performance, accessibility and SEO without a full rewrite — and we also build new sites from scratch when the current one has reached its limits. A short audit tells us which path is right for you.',
			},
			{
				question: 'Can our team update content after launch?',
				answer:
					'Yes. We integrate a headless CMS your non-technical team can manage confidently, with structured content models, preview workflows and role-based publishing. You stay in control of day-to-day content without engineering involvement.',
			},
			{
				question: 'How do you ensure the site stays fast over time?',
				answer:
					'We set performance budgets and run Core Web Vitals checks on every change, with monitoring in place after launch. Performance is treated as a feature, not a one-time task — so the site holds its speed as content and traffic grow.',
			},
		],
	},
	{
		slug: 'custom-software-development',
		title: 'Custom Software Development',
		tagline: 'Purpose-built platforms engineered around your exact business logic.',
		summary:
			'When off-the-shelf falls short, we design and build tailored software that fits your workflows, data and growth plans — without the bloat.',
		capabilities: [
			'Domain modelling and architecture for complex workflows',
			'Multi-tenant, role-based platforms with audit trails',
			'Legacy modernisation without disrupting the business',
			'Long-term maintainability and clear documentation',
		],
		icon: Layers,
		span: 'wide',
		overview: [
			'Generic software forces your business to adapt to it. Custom software adapts to your business. When your workflows, data or scale outgrow what off-the-shelf tools can do, we build the platform that fits — precisely, without the bloat of features you will never use.',
			'Our custom builds start from your domain, not a template. We model the real workflows, design the data layer around your business rules, and engineer for the way your team and customers actually work — then keep it maintainable for the long haul.',
		],
		useCases: [
			{
				title: 'Bespoke operational platforms',
				description:
					'End-to-end systems that replace spreadsheets, email chains and disconnected tools with one source of truth.',
			},
			{
				title: 'Multi-tenant SaaS foundations',
				description:
					'Platforms that serve many customers from one codebase, with tenant isolation, billing and administration built in.',
			},
			{
				title: 'Workflow & approval engines',
				description:
					'Configurable processes with role-based permissions, audit trails and automated routing for compliance-heavy work.',
			},
			{
				title: 'Data-heavy internal systems',
				description:
					'Applications that model complex relationships and rules, with the performance to handle real volumes of data.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Discovery & domain modelling',
				description:
					'We map your workflows, business rules and data relationships, then model the domain that the software will be built on.',
			},
			{
				phase: '02',
				title: 'Architecture design',
				description:
					'We design a layered, testable architecture — data, domain, services and interface — that stays clean as features and users grow.',
			},
			{
				phase: '03',
				title: 'Iterative build',
				description:
					'We ship in working slices, validating each against real workflows so the software stays aligned with the business throughout.',
			},
			{
				phase: '04',
				title: 'Handover & support',
				description:
					'Clear documentation, onboarding and a support path mean your team can operate and extend the platform confidently after launch.',
			},
		],
		technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Docker'],
		relatedSolutions: ['digital-transformation', 'legacy-modernization', 'business-process-automation'],
		relatedIndustries: ['professional-services', 'logistics-transportation', 'financial-services-fintech'],
		faq: [
			{
				question: 'How is custom software different from buying an off-the-shelf product?',
				answer:
					'Off-the-shelf software serves many businesses generically, so you adapt your workflows to it. Custom software is built around your exact processes, data and rules — no unused features, no awkward workarounds, and full ownership of the roadmap. The trade-off is upfront investment, which pays off as you scale.',
			},
			{
				question: 'Do we own the code and intellectual property?',
				answer:
					'Yes. You own the source code and intellectual property for the software we build. We deliver documented, maintainable code that your team can operate and extend — you are never locked into us for changes or hosting.',
			},
			{
				question: 'How do you keep a custom build maintainable long-term?',
				answer:
					'We build on a clean, layered architecture with automated tests, clear documentation and consistent conventions. The goal is a codebase any competent engineer can pick up — including your own team — not one that only we can touch.',
			},
		],
	},
	{
		slug: 'mobile-app-development',
		title: 'Mobile App Development',
		tagline: 'Native and cross-platform apps for iOS and Android.',
		summary:
			'We ship polished mobile experiences that feel native on every device — one codebase or platform-specific, depending on your needs.',
		capabilities: [
			'iOS, Android and cross-platform (React Native) delivery',
			'Offline-first sync and reliable background tasks',
			'App Store and Play Store submission support',
			'Crash analytics, performance and release tooling',
		],
		icon: Smartphone,
		span: 'standard',
		overview: [
			'Mobile is where your customers live. We build apps that feel native on every device — smooth, responsive and reliable — whether that means a single cross-platform codebase or platform-specific builds tuned to iOS and Android individually.',
			'Beyond the interface, we engineer the parts users never see: offline-first data sync, dependable background tasks, push notifications and crash monitoring. The result is an app that holds up in the real world, not just on a fast connection.',
		],
		useCases: [
			{
				title: 'Customer-facing apps',
				description:
					'Engaging mobile experiences that keep your brand in your customers’ pockets — from commerce to content to services.',
			},
			{
				title: 'Field & workforce apps',
				description:
					'Offline-capable tools for teams on the move — inspections, deliveries, surveys — that sync reliably when connectivity returns.',
			},
			{
				title: 'Companion apps',
				description:
					'Mobile extensions of your web platform that keep users engaged between sessions with notifications and quick actions.',
			},
			{
				title: 'IoT & hardware-connected apps',
				description:
					'Apps that pair with devices over Bluetooth or network — control panels, monitoring dashboards and configuration tools.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Platform strategy',
				description:
					'We help you choose between cross-platform efficiency and native performance based on your audience, budget and feature needs.',
			},
			{
				phase: '02',
				title: 'UX & interaction design',
				description:
					'We design for thumbs, gestures and small screens — native patterns on each platform, with accessibility built in from the start.',
			},
			{
				phase: '03',
				title: 'Build & offline engineering',
				description:
					'We build the interface and the data layer together, with offline-first sync, background tasks and push notifications wired in early.',
			},
			{
				phase: '04',
				title: 'Release & iterate',
				description:
					'We handle store submission, set up crash and performance monitoring, and ship updates through a controlled release pipeline.',
			},
		],
		technologies: ['React Native', 'iOS', 'Android', 'TypeScript', 'Expo', 'Push Notifications'],
		relatedSolutions: ['mvp-startup-launch', 'ecommerce-transformation', 'team-extension'],
		relatedIndustries: ['logistics-transportation', 'travel-hospitality', 'healthcare'],
		faq: [
			{
				question: 'Cross-platform or native — which should we choose?',
				answer:
					'It depends on your priorities. Cross-platform (one codebase for iOS and Android) is faster and cheaper to build and maintain, and is the right call for most business apps. Native is better when you need peak performance, deep platform integration or the latest OS features. We help you decide based on your product, not a default.',
			},
			{
				question: 'Can you handle App Store and Play Store submission?',
				answer:
					'Yes. We prepare store listings, assets, privacy disclosures and build configurations, then manage the submission and review process. We also set up the release pipeline so future updates ship smoothly without re-learning the process each time.',
			},
			{
				question: 'What happens when users are offline or on a weak connection?',
				answer:
					'We build offline-first where it matters — the app keeps working without a connection and syncs data reliably when it returns. We handle conflict resolution, background sync and graceful degradation so the experience stays solid in real-world conditions.',
			},
		],
	},
	{
		slug: 'saas-development',
		title: 'SaaS Development',
		tagline: 'From MVP to multi-tenant scale, end to end.',
		summary:
			'We turn product ideas into subscription SaaS platforms — billing, onboarding, multi-tenancy and analytics built in from day one.',
		capabilities: [
			'Multi-tenant architecture and tenant isolation',
			'Subscription billing, plans and usage metering',
			'Onboarding flows and self-serve administration',
			'Instrumented funnels, retention and growth analytics',
		],
		icon: Rocket,
		span: 'standard',
		overview: [
			'A SaaS product is more than a web app with a login. It is a multi-tenant system with billing, onboarding, administration and growth instrumentation — all of which have to be right from the start, because retrofitting them is painful and risky.',
			'We build SaaS platforms with the foundations baked in: tenant isolation, subscription billing, role-based access, self-serve administration and the analytics that let you learn from real usage. You launch with a product that is ready to charge, scale and grow.',
		],
		useCases: [
			{
				title: 'Vertical SaaS platforms',
				description:
					'Industry-specific software that solves a focused problem for a defined audience — built to charge from day one.',
			},
			{
				title: 'B2B workflow tools',
				description:
					'Subscription platforms that teams adopt, configure and administer themselves, with usage-based or seat-based pricing.',
			},
			{
				title: 'Marketplace & two-sided platforms',
				description:
					'SaaS that connects multiple user types — with split flows, billing and role-aware experiences for each side.',
			},
			{
				title: 'API-first products',
				description:
					'Platforms exposed as APIs with developer onboarding, usage metering and billing tied to consumption.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Product & pricing model',
				description:
					'We define the tenant model, plans, billing structure and key funnels — the decisions that are expensive to change later.',
			},
			{
				phase: '02',
				title: 'Multi-tenant architecture',
				description:
					'We engineer tenant isolation, authentication, role-based access and the data layer that keeps customers separate and secure.',
			},
			{
				phase: '03',
				title: 'Build the core product',
				description:
					'We ship the features that deliver value, with onboarding, billing and administration integrated rather than bolted on.',
			},
			{
				phase: '04',
				title: 'Instrument & launch',
				description:
					'We wire funnels, retention and usage analytics so you can learn from real customers and iterate toward growth.',
			},
		],
		technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Multi-tenant DB'],
		relatedSolutions: ['mvp-startup-launch', 'scaling-optimization', 'payment-integration'],
		relatedIndustries: ['startups-technology', 'professional-services', 'financial-services-fintech'],
		faq: [
			{
				question: 'Can you build just the MVP, or do we need the full platform?',
				answer:
					'We can start with a focused MVP that proves demand — but we build it on a multi-tenant architecture with billing and auth ready, so you do not have to rebuild those foundations when you scale. The MVP is lean, not structurally fragile.',
			},
			{
				question: 'Which billing and subscription model should we use?',
				answer:
					'That depends on your product. We help you choose between flat plans, seat-based, usage-based or hybrid pricing, then implement it with a provider like Stripe. We build the model to be flexible, so you can change plans and pricing without re-engineering.',
			},
			{
				question: 'How do you handle multi-tenant data isolation?',
				answer:
					'We design the data layer so each tenant’s data is isolated at the architecture level — whether through row-level security, separate schemas or dedicated databases, depending on your scale and compliance needs. Security and isolation are designed in, not added later.',
			},
		],
	},
	{
		slug: 'ai-automation',
		title: 'AI & Automation',
		tagline: 'Applied AI, intelligent agents and workflow automation that compound.',
		summary:
			'We embed practical AI into your product and operations — copilots, document processing, agents and automations that remove manual work.',
		capabilities: [
			'LLM-powered copilots, search and retrieval (RAG)',
			'Agents and workflow automation across your stack',
			'Document, image and data extraction pipelines',
			'Evaluation, guardrails and cost observability',
		],
		icon: BrainCircuit,
		span: 'wide',
		accent: true,
		overview: [
			'AI is most valuable when it removes real work. We focus on applied AI — copilots that help your team move faster, agents that handle multi-step tasks, retrieval that makes your knowledge searchable, and automations that connect your tools without manual glue.',
			'Every AI feature we ship is measured: evaluated for quality, guarded against failure, and observed for cost. We build AI that is dependable in production, not just impressive in a demo — with the guardrails and observability that keep it trustworthy as it scales.',
		],
		useCases: [
			{
				title: 'AI copilots & assistants',
				description:
					'In-product assistants that draft, summarise, answer and recommend — grounded in your data so responses are accurate and useful.',
			},
			{
				title: 'Document & data extraction',
				description:
					'Pipelines that read invoices, contracts, forms and images, turning unstructured documents into structured, usable data.',
			},
			{
				title: 'Knowledge search & RAG',
				description:
					'Retrieval systems that let users and teams find answers across your documents, wikis and data — cited and trustworthy.',
			},
			{
				title: 'Workflow agents',
				description:
					'Agents that carry out multi-step tasks across your tools — with human checkpoints where judgement is needed.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Opportunity mapping',
				description:
					'We identify where AI creates measurable value — not novelty — and prioritise the use cases worth building first.',
			},
			{
				phase: '02',
				title: 'Prototype & evaluate',
				description:
					'We build a working prototype and evaluate it against real examples, tuning prompts, retrieval and guardrails until quality holds.',
			},
			{
				phase: '03',
				title: 'Productionise',
				description:
					'We integrate the AI into your product or operations with monitoring, fallbacks and cost controls — built to run reliably.',
			},
			{
				phase: '04',
				title: 'Monitor & improve',
				description:
					'We track quality, cost and usage, and iterate on prompts, retrieval and guardrails as your data and needs evolve.',
			},
		],
		technologies: ['OpenAI', 'LLM Agents', 'RAG', 'Vector Search', 'n8n', 'Python'],
		relatedSolutions: ['ai-transformation', 'business-process-automation', 'scaling-optimization'],
		relatedIndustries: ['startups-technology', 'professional-services', 'healthcare'],
		faq: [
			{
				question: 'How do you make sure AI responses are accurate?',
				answer:
					'We ground responses in your data using retrieval (RAG), evaluate outputs against real examples, and add guardrails that catch errors before they reach users. Quality is measured continuously, not assumed — and we build in fallbacks so the system fails gracefully rather than confidently wrong.',
			},
			{
				question: 'Can AI integrate with the tools we already use?',
				answer:
					'Yes. We connect AI to your existing systems — CRM, docs, databases, APIs — so it works with your real data and workflows. The goal is AI that fits into how you already operate, not a separate tool your team has to learn from scratch.',
			},
			{
				question: 'How do you control AI costs as usage grows?',
				answer:
					'We build with cost observability from the start — tracking token usage, model calls and spend per feature. We use caching, model tiering and prompt efficiency to keep costs predictable, and we will flag cheaper alternatives as the landscape evolves.',
			},
		],
	},
	{
		slug: 'ecommerce-development',
		title: 'E-commerce Development',
		tagline: 'Storefronts and marketplaces built to convert.',
		summary:
			'We build commerce experiences that load fast, convert well and scale through peak — from headless storefronts to multi-vendor marketplaces.',
		capabilities: [
			'Headless and composable commerce architecture',
			'Conversion-focused product, cart and checkout flows',
			'Inventory, catalog and multi-vendor management',
			'Performance tuning for peak traffic events',
		],
		icon: ShoppingBag,
		span: 'standard',
		overview: [
			'In commerce, speed is revenue. A slow checkout costs sales; a clunky catalog costs trust. We build storefronts and marketplaces that load fast, guide customers smoothly to purchase, and hold up when traffic spikes — engineered around conversion, not just appearance.',
			'From headless storefronts on composable architecture to multi-vendor marketplaces with complex catalog and inventory needs, we cover the full commerce stack. Every flow — product, cart, checkout, account — is tuned to remove friction and lift conversion.',
		],
		useCases: [
			{
				title: 'Headless storefronts',
				description:
					'Fast, flexible storefronts decoupled from the commerce backend — giving you design freedom and performance at scale.',
			},
			{
				title: 'Multi-vendor marketplaces',
				description:
					'Platforms where many sellers list and sell — with vendor onboarding, split payouts, catalog and order management.',
			},
			{
				title: 'Subscription & recurring commerce',
				description:
					'Recurring-order stores with subscription plans, billing cycles and customer self-service for pauses and changes.',
			},
			{
				title: 'B2B commerce portals',
				description:
					'Quote-driven, account-based commerce with custom pricing, bulk ordering and customer-specific catalogs.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Commerce strategy',
				description:
					'We define the catalog model, checkout flow, payment and shipping setup, and the architecture — headless or traditional — that fits your scale.',
			},
			{
				phase: '02',
				title: 'Storefront & UX',
				description:
					'We design and build conversion-focused product, search, cart and checkout experiences, optimised for speed and mobile.',
			},
			{
				phase: '03',
				title: 'Integrate & automate',
				description:
					'We connect inventory, payments, shipping, tax and analytics so orders flow end to end without manual handling.',
			},
			{
				phase: '04',
				title: 'Optimise for peak',
				description:
					'We load-test and tune for traffic spikes, with caching, CDN and monitoring so the store stays fast when it matters most.',
			},
		],
		technologies: ['Shopify', 'WooCommerce', 'Headless Commerce', 'Stripe', 'React', 'CDN'],
		relatedSolutions: ['ecommerce-transformation', 'payment-integration', 'scaling-optimization'],
		relatedIndustries: ['ecommerce-retail', 'startups-technology', 'logistics-transportation'],
		faq: [
			{
				question: 'Headless commerce or a platform like Shopify — which is right?',
				answer:
					'For most stores, a well-tuned platform like Shopify is faster to launch and easier to operate. Headless makes sense when you need deep customisation, complex catalog logic, or performance and design control that a hosted platform cannot give you. We help you choose based on your actual needs, not trends.',
			},
			{
				question: 'Can you build a marketplace with multiple sellers?',
				answer:
					'Yes. We build multi-vendor marketplaces with seller onboarding, vendor dashboards, split payouts, commission management and unified catalog and order views. The complexity of marketplaces is in the operations layer, and we engineer that deliberately rather than bolting it on.',
			},
			{
				question: 'How do you keep the store fast during sales and peaks?',
				answer:
					'We architect for peaks from the start — CDN, caching, image optimisation and a checkout that does not block on slow calls. We load-test before major events and monitor during them, so the store stays responsive when traffic surges.',
			},
		],
	},
	{
		slug: 'payment-integration',
		title: 'Payment Integration',
		tagline: 'Secure, compliant checkout and recurring billing.',
		summary:
			'We integrate and build payment flows that are secure, reliable and compliant — one-time, recurring and marketplace payouts.',
		capabilities: [
			'Stripe, PayPal and regional gateway integration',
			'Recurring billing, subscriptions and invoicing',
			'PCI-aware flows, tokenisation and fraud tooling',
			'Multi-currency and marketplace split payouts',
		],
		icon: CreditCard,
		span: 'standard',
		overview: [
			'Payments are where trust meets engineering. A checkout that fails, leaks data or mishandles a refund damages the business far beyond the transaction. We build payment flows that are secure, reliable and compliant — designed to handle money correctly under every condition.',
			'From one-time checkout to recurring subscriptions, multi-currency sales to marketplace split payouts, we integrate the right providers and build the flows around them. Security, compliance and error handling are engineered in, not added as an afterthought.',
		],
		useCases: [
			{
				title: 'Checkout & one-time payments',
				description:
					'Smooth, secure checkout flows that accept cards and local methods, with tokenisation and fraud protection built in.',
			},
			{
				title: 'Subscriptions & recurring billing',
				description:
					'Recurring billing with plan management, proration, dunning and customer self-service for upgrades and cancellations.',
			},
			{
				title: 'Marketplace split payouts',
				description:
					'Multi-party payments that route funds to sellers, take platform fees and handle compliance for marketplace models.',
			},
			{
				title: 'Invoicing & B2B payments',
				description:
					'Quote-to-cash flows with invoicing, net terms, multi-currency and reconciliation tied to your accounting.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Provider & flow design',
				description:
					'We choose the right providers for your markets and model, then design the payment flow — checkout, billing, payouts — end to end.',
			},
			{
				phase: '02',
				title: 'Secure integration',
				description:
					'We integrate with PCI-aware patterns — tokenisation, server-side handling, no raw card data — and wire fraud and 3DS tooling.',
			},
			{
				phase: '03',
				title: 'Edge cases & reliability',
				description:
					'We handle the hard parts: retries, idempotency, webhooks, refunds, failed payments and reconciliation — so money is never lost or double-charged.',
			},
			{
				phase: '04',
				title: 'Compliance & monitoring',
				description:
					'We document the compliance posture, set up transaction monitoring and alerts, and ensure the flow stays healthy at scale.',
			},
		],
		technologies: ['Stripe', 'PayPal', 'Webhooks', 'Tokenisation', '3D Secure', 'Multi-currency'],
		relatedSolutions: ['saas-development', 'ecommerce-transformation', 'payment-integration'],
		relatedIndustries: ['financial-services-fintech', 'ecommerce-retail', 'startups-technology'],
		faq: [
			{
				question: 'Which payment providers do you work with?',
				answer:
					'We integrate Stripe, PayPal and regional gateways, and we can work with specialised providers for specific markets or methods. The choice depends on your customers’ locations, currencies and payment preferences — we recommend based on coverage and cost, not habit.',
			},
			{
				question: 'How do you handle payment security and compliance?',
				answer:
					'We build PCI-aware flows using tokenisation and server-side handling, so raw card data never touches your infrastructure. We wire 3D Secure, fraud tooling and secure webhooks, and document the compliance posture so you know exactly where you stand.',
			},
			{
				question: 'What about failed payments, refunds and edge cases?',
				answer:
					'These are the parts that matter most. We engineer idempotent operations, retry logic, webhook reconciliation, refund and dispute handling, and dunning for failed recurring charges — so money is handled correctly even when things go wrong.',
			},
		],
	},
	{
		slug: 'api-system-integration',
		title: 'API & System Integration',
		tagline: 'Connect systems, data and third-party services reliably.',
		summary:
			'We design APIs and integrations that keep your systems in sync — secure, documented and observable, with resilient error handling.',
		capabilities: [
			'ReST and GraphQL API design and versioning',
			'CRM, ERP and third-party service integration',
			'Event-driven sync and idempotent webhooks',
			'Observability, retries and failure recovery',
		],
		icon: Workflow,
		span: 'wide',
		overview: [
			'Modern businesses run on many systems, and the seams between them are where data gets lost, processes break and teams lose trust. We design APIs and integrations that keep your systems reliably in sync — so the right data is in the right place at the right time.',
			'Whether connecting a CRM to your product, syncing an ERP with your storefront, or building the API that partners build on, we engineer integrations that are secure, documented and observable. Resilience is built in: retries, idempotency and clear failure recovery, not fragile point-to-point glue.',
		],
		useCases: [
			{
				title: 'CRM & marketing integration',
				description:
					'Sync customer data, events and segments between your product and CRM so sales and marketing work from the same truth.',
			},
			{
				title: 'ERP & operations sync',
				description:
					'Connect orders, inventory and finance systems so operations run on accurate, up-to-date data without manual entry.',
			},
			{
				title: 'Public & partner APIs',
				description:
					'Documented, versioned APIs that partners and customers build on — with auth, rate limiting and clear contracts.',
			},
			{
				title: 'Event-driven automation',
				description:
					'Webhooks and event streams that trigger workflows across systems in real time, with reliable delivery and retries.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Map the systems',
				description:
					'We map the systems, data flows and events involved, identifying the contracts, directions and failure points that matter.',
			},
			{
				phase: '02',
				title: 'Design the contracts',
				description:
					'We design clean, versioned API contracts — ReST or GraphQL — with auth, error shapes and documentation that partners can trust.',
			},
			{
				phase: '03',
				title: 'Build resilient sync',
				description:
					'We implement integrations with idempotency, retries, dead-letter handling and reconciliation — so sync survives failures.',
			},
			{
				phase: '04',
				title: 'Observe & operate',
				description:
					'We add logging, metrics and alerts so you can see sync health, catch issues early and recover from failures confidently.',
			},
		],
		technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'Node.js', 'Message Queues', 'OAuth'],
		relatedSolutions: ['business-process-automation', 'digital-transformation', 'legacy-modernization'],
		relatedIndustries: ['logistics-transportation', 'financial-services-fintech', 'professional-services'],
		faq: [
			{
				question: 'Can you integrate the specific tools we already use?',
				answer:
					'In most cases, yes. We work with common CRM, ERP, marketing and operations platforms, and we can build against any system that exposes an API or supports webhooks. If a system has no integration surface, we find a reliable path — whether that is a database sync, file exchange or a custom adapter.',
			},
			{
				question: 'How do you keep integrations from breaking silently?',
				answer:
					'Silent failures are the classic integration problem. We build with idempotent operations, retries with backoff, dead-letter queues and reconciliation checks — plus monitoring and alerts that surface failures immediately. You know when a sync breaks, and it recovers instead of corrupting data.',
			},
			{
				question: 'Do you design APIs for external partners and developers?',
				answer:
					'Yes. We design documented, versioned APIs with authentication, rate limiting and clear error contracts that partners can build on confidently. We treat the API as a product — with the stability and documentation that external consumers expect.',
			},
		],
	},
	{
		slug: 'ui-ux-design',
		title: 'UI/UX Design',
		tagline: 'Product design systems people love to use.',
		summary:
			'We design intuitive, on-brand product experiences — from research and flows to design systems that scale with your team.',
		capabilities: [
			'Discovery, user flows and interaction design',
			'Scalable design systems and component libraries',
			'Prototyping, usability testing and iteration',
			'Accessibility and responsive design standards',
		],
		icon: PenTool,
		span: 'standard',
		overview: [
			'Great products feel effortless. That feeling is not accidental — it comes from understanding the people who use the product, designing clear flows, and building a system that stays consistent as it grows. We design experiences that are intuitive, accessible and genuinely pleasant to use.',
			'Our design work spans the full arc: discovery and research, user flows and interaction design, visual systems and component libraries, prototyping and testing. The output is not just screens — it is a scalable design system your team can build on, grounded in real user needs.',
		],
		useCases: [
			{
				title: 'Product UX & flows',
				description:
					'End-to-end experience design — onboarding, core workflows and navigation — that guides users clearly to their goals.',
			},
			{
				title: 'Design systems',
				description:
					'Typed, documented component libraries that keep every screen consistent and let your team build faster without design drift.',
			},
			{
				title: 'Interface & visual design',
				description:
					'On-brand, polished interfaces with a clear visual language — typography, colour, spacing and motion that feel like your product.',
			},
			{
				title: 'Research & usability testing',
				description:
					'Discovery, prototyping and testing with real users to validate decisions before engineering invests in building them.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Discovery & research',
				description:
					'We learn who uses the product, what they are trying to do, and where the current experience gets in their way.',
			},
			{
				phase: '02',
				title: 'Flows & structure',
				description:
					'We design the user flows, information architecture and interaction patterns that make the product clear and efficient.',
			},
			{
				phase: '03',
				title: 'Visual & system design',
				description:
					'We craft the visual language and build a documented component system that scales across the product and team.',
			},
			{
				phase: '04',
				title: 'Prototype & test',
				description:
					'We prototype and test with real users, then iterate — so the design is validated before engineering builds it.',
			},
		],
		technologies: ['Figma', 'Design Systems', 'Prototyping', 'Accessibility', 'User Flows', 'Design Tokens'],
		relatedSolutions: ['mvp-startup-launch', 'digital-transformation', 'ecommerce-transformation'],
		relatedIndustries: ['startups-technology', 'ecommerce-retail', 'education-elearning'],
		faq: [
			{
				question: 'Do you design and build, or just design?',
				answer:
					'Both. We can design the experience and hand off a production-ready system to your engineers, or design and build it end to end with our engineering team. When we design and build together, the design system translates directly into code — no loss in translation.',
			},
			{
				question: 'Can you work with our existing design system?',
				answer:
					'Yes. We can extend and refine an existing design system, fill its gaps, and ensure it is documented and consistent — or audit it and recommend improvements. We adapt to your design language rather than imposing our own, unless you want a fresh start.',
			},
			{
				question: 'How do you make sure designs are accessible?',
				answer:
					'Accessibility is part of our design process, not a final check. We design for contrast, keyboard navigation, screen readers and responsive behaviour from the start, and we test against WCAG standards. Accessible design is better design for everyone.',
			},
		],
	},
	{
		slug: 'cloud-devops',
		title: 'Cloud & DevOps',
		tagline: 'Cloud architecture, CI/CD and reliable infrastructure.',
		summary:
			'We build and operate cloud infrastructure that is secure, automated and cost-efficient — with CI/CD that ships safely and often.',
		capabilities: [
			'Cloud architecture on AWS, GCP and Azure',
			'Infrastructure as code and CI/CD pipelines',
			'Containerisation, orchestration and autoscaling',
			'Observability, alerting and cost optimisation',
		],
		icon: Cloud,
		span: 'standard',
		overview: [
			'Reliable software runs on reliable infrastructure. We architect and operate cloud environments that are secure, automated and cost-efficient — so your product stays up, ships often, and does not surprise you with a bill at the end of the month.',
			'From infrastructure as code and CI/CD pipelines to container orchestration and observability, we cover the full DevOps stack. The goal is infrastructure you can trust: changes ship safely, failures are caught early, and costs stay predictable as you scale.',
		],
		useCases: [
			{
				title: 'Cloud architecture & migration',
				description:
					'Designing or migrating cloud environments on AWS, GCP or Azure — secure, scalable and built around your workload.',
			},
			{
				title: 'CI/CD & release pipelines',
				description:
					'Automated build, test and deploy pipelines that let your team ship safely and often, with rollback when needed.',
			},
			{
				title: 'Containerisation & orchestration',
				description:
					'Docker and orchestration setups that make deployments reproducible, scalable and resilient to failure.',
			},
			{
				title: 'Observability & cost control',
				description:
					'Monitoring, alerting and cost optimisation so you see problems early and keep cloud spend predictable.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Architecture & audit',
				description:
					'We design or audit your cloud architecture — security, scaling, redundancy and cost — against your workload and growth.',
			},
			{
				phase: '02',
				title: 'Infrastructure as code',
				description:
					'We define infrastructure in code — reproducible, versioned and reviewable — so environments are consistent and safe to change.',
			},
			{
				phase: '03',
				title: 'CI/CD & automation',
				description:
					'We build pipelines that test, build and deploy automatically, with checks and rollback that make frequent releases safe.',
			},
			{
				phase: '04',
				title: 'Observe & optimise',
				description:
					'We set up monitoring, alerting and cost dashboards, then tune the infrastructure for performance and spend over time.',
			},
		],
		technologies: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
		relatedSolutions: ['scaling-optimization', 'legacy-modernization', 'digital-transformation'],
		relatedIndustries: ['startups-technology', 'financial-services-fintech', 'logistics-transportation'],
		faq: [
			{
				question: 'Which cloud provider should we use?',
				answer:
					'It depends on your workload, team familiarity, compliance needs and cost. AWS, GCP and Azure each suit different situations, and we work across all three. We recommend based on your specific requirements — and we avoid locking you into services that make leaving expensive.',
			},
			{
				question: 'Can you improve our existing infrastructure without a full rebuild?',
				answer:
					'Yes. We frequently audit existing setups and improve them incrementally — adding CI/CD, observability, cost controls or security hardening without a risky big-bang migration. We meet your infrastructure where it is and improve it deliberately.',
			},
			{
				question: 'How do you keep cloud costs under control?',
				answer:
					'We build with cost visibility from the start — right-sized resources, autoscaling, budget alerts and regular reviews. We flag waste, recommend savings plans or reserved capacity where it makes sense, and keep spend predictable rather than letting it creep up unnoticed.',
			},
		],
	},
	{
		slug: 'data-analytics',
		title: 'Data & Analytics',
		tagline: 'Pipelines, warehouses and dashboards that drive decisions.',
		summary:
			'We turn raw data into trustworthy, decision-grade insight — pipelines, warehouses and dashboards your whole team can rely on.',
		capabilities: [
			'ETL/ELT pipelines and data warehousing',
			'Metrics layers and governed self-serve analytics',
			'Executive dashboards and reporting automation',
			'Data quality, lineage and governance',
		],
		icon: BarChart3,
		span: 'wide',
		overview: [
			'Data only creates value when your team trusts it and can act on it. We build the pipelines, warehouses and dashboards that turn raw data into decision-grade insight — trustworthy, governed and accessible to the people who need it, not locked behind a data team queue.',
			'From ETL pipelines and warehouse modelling to metrics layers and executive dashboards, we cover the full analytics stack. We focus on data quality and governance, so the numbers your team sees are consistent, documented and reliable enough to make real decisions on.',
		],
		useCases: [
			{
				title: 'Data pipelines & warehousing',
				description:
					'ETL/ELT pipelines that consolidate data from your systems into a clean, modelled warehouse ready for analysis.',
			},
			{
				title: 'Executive & operational dashboards',
				description:
					'Clear dashboards that surface the metrics leadership and teams need — automated, refreshed and reliable.',
			},
			{
				title: 'Self-serve analytics',
				description:
					'Governed metrics layers and tools that let your team explore data safely without breaking definitions or trust.',
			},
			{
				title: 'Reporting automation',
				description:
					'Automated reports and alerts that replace manual spreadsheet work and keep stakeholders informed on schedule.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Data audit & modelling',
				description:
					'We audit your data sources and model the warehouse — defining the entities, metrics and relationships that analytics will build on.',
			},
			{
				phase: '02',
				title: 'Pipelines & quality',
				description:
					'We build reliable pipelines with quality checks, lineage and monitoring — so data lands clean, on time and traceable.',
			},
			{
				phase: '03',
				title: 'Metrics & dashboards',
				description:
					'We define governed metrics and build dashboards that answer the real questions your team and leadership ask.',
			},
			{
				phase: '04',
				title: 'Adopt & govern',
				description:
					'We document definitions, train your team and put governance in place so the analytics stay trustworthy as they scale.',
			},
		],
		technologies: ['PostgreSQL', 'Python', 'ETL/ELT', 'Data Warehousing', 'Dashboards', 'SQL'],
		relatedSolutions: ['ai-transformation', 'scaling-optimization', 'digital-transformation'],
		relatedIndustries: ['financial-services-fintech', 'ecommerce-retail', 'logistics-transportation'],
		faq: [
			{
				question: 'We have data everywhere — can you consolidate it?',
				answer:
					'Yes. That is a core part of what we do. We build pipelines that pull data from your various systems — product database, CRM, marketing tools, spreadsheets — into a single modelled warehouse where it is clean, consistent and ready to analyse. You stop chasing data across tools and start asking questions of one source of truth.',
			},
			{
				question: 'How do you ensure the numbers are trustworthy?',
				answer:
					'We build data quality checks into the pipelines, document metric definitions in a governed layer, and maintain lineage so every number is traceable to its source. Trust is the whole point — if your team does not believe the dashboard, the analytics are useless. We engineer for reliability, not just visuals.',
			},
			{
				question: 'Can our team explore the data themselves?',
				answer:
					'Yes. We set up governed self-serve analytics with documented metrics and the right tools, so your team can answer their own questions safely — without breaking definitions or needing a data engineer for every chart. We balance freedom with governance so exploration does not erode trust.',
			},
		],
	},
	{
		slug: 'maintenance-support',
		title: 'Maintenance & Support',
		tagline: 'Ongoing care, monitoring and continuous improvement.',
		summary:
			'We keep your products healthy after launch — monitoring, security patches, performance and incremental improvements under a clear SLA.',
		capabilities: [
			'Proactive monitoring, alerts and incident response',
			'Security patches and dependency upkeep',
			'Performance tuning and technical debt reduction',
			'Clear SLAs with a dedicated support channel',
		],
		icon: LifeBuoy,
		span: 'wide',
		overview: [
			'Launch is the start, not the end. Software that is not maintained slowly degrades — security holes appear, dependencies go stale, performance drifts and small issues compound into outages. We keep your products healthy after launch, so they stay secure, fast and reliable over time.',
			'Our maintenance covers proactive monitoring, security patching, performance tuning and incremental improvements — all under a clear SLA with a dedicated support channel. You get a long-term technology partner keeping the product healthy, not a team that disappears after go-live.',
		],
		useCases: [
			{
				title: 'Ongoing product maintenance',
				description:
					'Keeping a launched product healthy — monitoring, patches, fixes and small improvements on a steady cadence.',
			},
			{
				title: 'Monitoring & incident response',
				description:
					'Proactive monitoring with alerts and a response process, so issues are caught and fixed before users notice.',
			},
			{
				title: 'Security & dependency upkeep',
				description:
					'Staying ahead of vulnerabilities and stale dependencies with timely patches and a clear security posture.',
			},
			{
				title: 'Performance & tech debt',
				description:
					'Continuous performance tuning and deliberate tech debt reduction so the product stays fast and maintainable.',
			},
		],
		approach: [
			{
				phase: '01',
				title: 'Audit & baseline',
				description:
					'We audit the product’s health — security, performance, dependencies and tech debt — and baseline its current state.',
			},
			{
				phase: '02',
				title: 'Monitoring & SLA',
				description:
					'We set up monitoring, alerts and a support channel with a clear SLA, so issues are caught and responded to promptly.',
			},
			{
				phase: '03',
				title: 'Patch & maintain',
				description:
					'We apply security patches, update dependencies and fix issues on a steady cadence, keeping the product secure and stable.',
			},
			{
				phase: '04',
				title: 'Improve & report',
				description:
					'We tune performance, reduce tech debt and share regular health reports so you always know how the product is doing.',
			},
		],
		technologies: ['Monitoring', 'Alerting', 'CI/CD', 'Security Patching', 'Performance Tuning', 'SLAs'],
		relatedSolutions: ['scaling-optimization', 'team-extension', 'legacy-modernization'],
		relatedIndustries: ['startups-technology', 'financial-services-fintech', 'healthcare'],
		faq: [
			{
				question: 'Do you only maintain products you built?',
				answer:
					'No. We maintain and support products built by other teams too. We start with a codebase and architecture audit to understand the product and its health, then take on ongoing care — fixing issues, patching security and improving performance. We are comfortable inheriting code we did not write.',
			},
			{
				question: 'What does your SLA cover?',
				answer:
					'Our SLA defines response times for issues by severity, uptime monitoring, a dedicated support channel and a regular maintenance cadence for patches and improvements. The exact terms are tailored to your product’s criticality — we agree on what matters before we start, so expectations are clear.',
			},
			{
				question: 'Can you handle emergencies and incidents?',
				answer:
					'Yes. We set up monitoring that catches issues early and a response process for incidents when they happen. You have a direct channel to reach us, and we work to resolve problems quickly and communicate clearly throughout — then follow up to prevent recurrence.',
			},
		],
	},
];

export function getServiceBySlug(slug: string): Service | undefined {
	return SERVICES.find((service) => service.slug === slug);
}
