import type { LucideIcon } from 'lucide-react';
import {
	Boxes,
	BrainCircuit,
	Gauge,
	Rocket,
	ShoppingBag,
	Users,
	Wand2,
	Workflow,
} from 'lucide-react';

export interface SolutionJourneyStep {
	phase: string;
	title: string;
	description: string;
}

export interface SolutionFaqItem {
	question: string;
	answer: string;
}

export interface Solution {
	slug: string;
	title: string;
	/** One-line outcome statement shown in the navigator. */
	outcome: string;
	/** Short explanation revealed in the detail panel. */
	explanation: string;
	/** Relevant capabilities that map to this outcome. */
	capabilities: string[];
	icon: LucideIcon;
	/** The business challenge this solution addresses. */
	challenge: string[];
	/** How Codelaro approaches the problem. */
	approach: string[];
	/** Implementation journey — the path from start to outcome. */
	journey: SolutionJourneyStep[];
	/** Related service slugs. */
	relatedServices: string[];
	/** Related industry slugs. */
	relatedIndustries: string[];
	/** Solution-specific FAQ. */
	faq: SolutionFaqItem[];
}

export const SOLUTIONS: Solution[] = [
	{
		slug: 'mvp-startup-launch',
		title: 'MVP & Startup Launch',
		outcome: 'Validate and ship in weeks, not quarters.',
		explanation:
			'We turn raw ideas into a market-ready product fast — defining scope, designing the core experience and engineering a lean MVP that proves demand without burning runway.',
		capabilities: [
			'Discovery & product scoping',
			'Rapid UX & UI design',
			'Lean full-stack engineering',
			'Launch, analytics & iteration loop',
		],
		icon: Rocket,
		challenge: [
			'Founders face a narrow window: prove the market before the runway runs out. Build too much and you burn cash on assumptions that may be wrong; build too little and the product never feels credible enough to test real demand.',
			'Most early teams do not yet have a senior product and engineering bench in place, and the gap between a promising idea and a working, testable product is exactly where ventures stall — not for lack of vision, but for lack of focused execution.',
		],
		approach: [
			'We compress that gap. Codelaro pairs product thinking with senior engineering so the first release is lean but structurally sound — a real product that validates demand without mortgaging the future.',
			'We help you decide what to build first, design the core experience around the one job that matters, and ship a working MVP on an architecture that scales when traction arrives — so a successful test becomes a head start, not a rebuild.',
		],
		journey: [
			{
				phase: '01',
				title: 'Discovery & scoping',
				description:
					'We pressure-test the idea, define the riskiest assumptions and scope the smallest product that can prove them — a clear, prioritised build plan, not a wishlist.',
			},
			{
				phase: '02',
				title: 'Design the core experience',
				description:
					'We design the one flow that delivers the core value, with a polished, on-brand interface that feels credible to early users from the first session.',
			},
			{
				phase: '03',
				title: 'Build the lean MVP',
				description:
					'We engineer the MVP on a scalable foundation — type-safe, tested and deployed through CI/CD — so the product is real, reliable and ready for users.',
			},
			{
				phase: '04',
				title: 'Launch, measure & iterate',
				description:
					'We ship to real users with analytics wired in, then learn from behaviour and iterate — turning the MVP into a feedback engine that guides what to build next.',
			},
		],
		relatedServices: ['web-development', 'mobile-app-development', 'ui-ux-design', 'saas-development'],
		relatedIndustries: ['startups-technology', 'ecommerce-retail', 'professional-services'],
		faq: [
			{
				question: 'How fast can we ship an MVP?',
				answer:
					'Typical MVPs ship in 4–10 weeks depending on scope. We start with a focused discovery to define the smallest credible product, then build in vertical slices so you see working software early. Speed comes from scope discipline and senior execution, not cutting corners on the foundations.',
			},
			{
				question: 'What if our idea is still rough?',
				answer:
					'That is the right place to start. Part of the engagement is helping you sharpen the idea — identifying the core value, the riskiest assumptions and the audience to test with. You do not need a finished spec; you need a clear hypothesis, and we help you build the product that tests it.',
			},
			{
				question: 'Will we have to rebuild after launch?',
				answer:
					'No. We build the MVP on a scalable architecture — the same patterns we use for production platforms — so traction becomes a head start rather than a rewrite. The product grows by adding features, not by tearing down foundations.',
			},
		],
	},
	{
		slug: 'business-process-automation',
		title: 'Business Process Automation',
		outcome: 'Remove manual work and reclaim operating hours.',
		explanation:
			'We map repetitive workflows and replace them with reliable automations — connecting your tools, routing data and letting your team focus on work that actually grows the business.',
		capabilities: [
			'Workflow mapping & audit',
			'Integration & data routing',
			'Custom automation engineering',
			'Monitoring & exception handling',
		],
		icon: Workflow,
		challenge: [
			'As a business grows, the manual workarounds that once worked become the bottleneck. Data is re-keyed between tools, approvals sit in inboxes, and skilled people spend their hours on copy-paste and reconciliation instead of the work they were hired for.',
			'The cost is rarely visible on a single invoice — it hides in slow turnaround, human error, and capacity that never scales. Left unaddressed, manual processes quietly cap how much the operation can grow without adding headcount.',
		],
		approach: [
			'We start from the workflow, not the tool. Codelaro maps the real process end to end, identifies the steps that are repetitive and rule-based, and replaces them with reliable automations that connect your existing systems.',
			'Where off-the-shelf automation fits, we use it; where the logic is specific to your business, we engineer it. Every automation is observable and handles exceptions gracefully — so it removes work without creating a new class of silent failures to babysit.',
		],
		journey: [
			{
				phase: '01',
				title: 'Workflow audit',
				description:
					'We map the processes that drain time, quantify the manual effort and error rate, and prioritise the automations with the highest payback.',
			},
			{
				phase: '02',
				title: 'Integration & data routing',
				description:
					'We connect the systems involved and design how data moves between them — securely, with clear ownership and no fragile point-to-point glue.',
			},
			{
				phase: '03',
				title: 'Automation engineering',
				description:
					'We build the automations with idempotency, retries and clear failure handling — reliable in production, not just impressive in a demo.',
			},
			{
				phase: '04',
				title: 'Monitoring & exceptions',
				description:
					'We add visibility and alerts so exceptions surface immediately, with a clear path for humans to handle the cases automation should not.',
			},
		],
		relatedServices: ['api-system-integration', 'ai-automation', 'custom-software-development', 'data-analytics'],
		relatedIndustries: ['logistics-transportation', 'professional-services', 'financial-services-fintech'],
		faq: [
			{
				question: 'Which tools do you automate with?',
				answer:
					'We work with both automation platforms (n8n, Zapier-style tools) and custom code, depending on the complexity and specificity of the workflow. For standard integrations a platform is faster and easier to maintain; for business-specific logic we engineer a custom automation. We recommend based on the workflow, not a default.',
			},
			{
				question: 'What happens when an automation fails?',
				answer:
					'Every automation we ship has monitoring, alerts and a defined exception path. Failures surface immediately rather than corrupting data silently, and the cases that genuinely need human judgement are routed to a person. The goal is to remove routine work, not to automate decisions that should stay with your team.',
			},
			{
				question: 'Can you automate processes across systems that do not have APIs?',
				answer:
					'In most cases, yes. We find a reliable path — whether that is a database sync, scheduled file exchange, screen-level integration or a custom adapter. If a system truly has no integration surface, we will tell you honestly and discuss alternatives rather than build something fragile.',
			},
		],
	},
	{
		slug: 'digital-transformation',
		title: 'Digital Transformation',
		outcome: 'Modernize how the business operates end to end.',
		explanation:
			'We help traditional organisations move online with confidence — replacing paper, spreadsheets and siloed tools with connected digital systems your people actually want to use.',
		capabilities: [
			'Digital strategy & roadmap',
			'Platform & portal development',
			'Change-ready UX adoption',
			'Secure cloud migration',
		],
		icon: Wand2,
		challenge: [
			'Traditional organisations often run on a patchwork of paper, spreadsheets, email and ageing software. Each works in isolation, none talk to each other, and the result is slow service, duplicated effort and decisions made on information that is already out of date.',
			'Transformation fails most often not for technical reasons but because the people who have to use the new systems are left behind. A platform nobody adopts is a costly shelf-ornament, and the disruption of switching is real.',
		],
		approach: [
			'We treat transformation as a business change programme with software at its centre — not a software project with change as an afterthought. Codelaro builds the strategy, the platforms and the adoption into one connected effort.',
			'We design systems your people actually want to use, migrate to the cloud securely, and phase the rollout so the business keeps running throughout. Adoption is designed in from the start, so the new way of working takes hold rather than being resisted.',
		],
		journey: [
			{
				phase: '01',
				title: 'Strategy & roadmap',
				description:
					'We assess where the business is today, define the target digital state, and sequence the changes into a roadmap that delivers value early without overwhelming the organisation.',
			},
			{
				phase: '02',
				title: 'Platform & portal development',
				description:
					'We build the connected platforms and portals that replace siloed tools — designed around real workflows and the people who run them.',
			},
			{
				phase: '03',
				title: 'Secure cloud migration',
				description:
					'We move data and systems to the cloud securely and in phases, keeping the business operational throughout and protecting what matters.',
			},
			{
				phase: '04',
				title: 'Adoption & change',
				description:
					'We onboard teams, document the new ways of working and support adoption — so the transformation sticks rather than stalling at go-live.',
			},
		],
		relatedServices: ['web-development', 'custom-software-development', 'cloud-devops', 'ui-ux-design'],
		relatedIndustries: ['professional-services', 'real-estate', 'education-elearning'],
		faq: [
			{
				question: 'How do you avoid disrupting the business during transformation?',
				answer:
					'We phase the rollout so the organisation keeps running throughout. Each phase delivers a working, adopted piece before the next begins, and we run old and new in parallel where needed. The goal is continuous operation, not a risky big-bang switch.',
			},
			{
				question: 'Do you handle the strategy as well as the build?',
				answer:
					'Yes. Transformation is a business change programme, not just a build, so we cover the strategy, roadmap, platform development, cloud migration and adoption as one connected effort. You can also engage us for strategy alone if you have a build team in place.',
			},
			{
				question: 'What if our team is not technical?',
				answer:
					'That is common and entirely fine. We design for adoption first — interfaces your team can use confidently — and we handle the technical complexity. Training, documentation and support are part of the engagement, not an extra.',
			},
		],
	},
	{
		slug: 'legacy-modernization',
		title: 'Legacy Software Modernization',
		outcome: 'Rescue critical systems without starting from zero.',
		explanation:
			'We re-engineer aging software onto a modern, maintainable stack — preserving business logic and data while removing the risk, cost and friction of fragile legacy infrastructure.',
		capabilities: [
			'Codebase & architecture audit',
			'Incremental re-platforming',
			'Data migration & integrity',
			'Performance & security hardening',
		],
		icon: Boxes,
		challenge: [
			'Critical business software often outlives the team that built it and the stack it runs on. The code is fragile, documentation is sparse, and every change carries risk — yet the business depends on it completely, so it cannot simply be switched off.',
			'The temptation is a full rewrite, but rewrites are where projects go to die: they take too long, rediscover forgotten business rules the hard way, and deliver nothing until the end. Meanwhile the legacy system keeps degrading.',
		],
		approach: [
			'We modernise incrementally, not in a risky big-bang. Codelaro audits the existing system, extracts the real business logic, and re-platforms piece by piece — so the business keeps running on working software throughout.',
			'We preserve data integrity and harden security and performance as we go, replacing fragile infrastructure with a maintainable stack your team can confidently extend. The result is a system rescued, not gambled on.',
		],
		journey: [
			{
				phase: '01',
				title: 'Codebase & architecture audit',
				description:
					'We assess the legacy system — its real behaviour, hidden business rules, risks and dependencies — and map a modernization path that protects what matters.',
			},
			{
				phase: '02',
				title: 'Incremental re-platforming',
				description:
					'We replace the system piece by piece on a modern stack, keeping the old and new working in parallel so the business never stops.',
			},
			{
				phase: '03',
				title: 'Data migration & integrity',
				description:
					'We migrate data with integrity checks and reconciliation, so nothing is lost or corrupted in the move to the new system.',
			},
			{
				phase: '04',
				title: 'Performance & security hardening',
				description:
					'We harden the modernised system for performance and security, then hand over a codebase your team can maintain and extend.',
			},
		],
		relatedServices: ['custom-software-development', 'cloud-devops', 'api-system-integration', 'maintenance-support'],
		relatedIndustries: ['financial-services-fintech', 'logistics-transportation', 'healthcare'],
		faq: [
			{
				question: 'Do we have to rewrite everything from scratch?',
				answer:
					'No — and a full rewrite is usually the riskiest option. We modernise incrementally, re-platforming piece by piece while the old system keeps running. You get working improvements early, and the business logic is preserved rather than rediscovered the hard way.',
			},
			{
				question: 'How do you protect our data during migration?',
				answer:
					'We migrate data with integrity checks, reconciliation and parallel running so discrepancies surface immediately. Nothing is cut over until the new system is proven against the old. Data integrity is the non-negotiable in any modernization we run.',
			},
			{
				question: 'Can you modernize software you did not build?',
				answer:
					'Yes — most modernization work starts with code we inherited. We begin with a thorough audit to understand the real behaviour, hidden rules and risks before touching anything. We are comfortable with unfamiliar, undocumented codebases.',
			},
		],
	},
	{
		slug: 'ai-transformation',
		title: 'AI Transformation',
		outcome: 'Put AI to work on real business problems.',
		explanation:
			'We identify where AI creates measurable value, then build and ship it — from intelligent assistants and document processing to predictive features woven into your product.',
		capabilities: [
			'AI opportunity mapping',
			'LLM & agent integration',
			'Custom model pipelines',
			'Evaluation & guardrails',
		],
		icon: BrainCircuit,
		challenge: [
			'Every business is being told to "do AI", but most AI initiatives stall because they chase the technology rather than a problem. Pilots impress in demos but never reach production, costs spiral without clear returns, and trust erodes when outputs are confidently wrong.',
			'The gap between an interesting AI demo and an AI feature that reliably creates value — accurate, guarded, cost-controlled and genuinely useful — is wide, and it is where most organisations need help.',
		],
		approach: [
			'We start from the business problem, not the model. Codelaro maps where AI creates measurable value, prioritises the use cases worth building, and ships them with the evaluation and guardrails that make them dependable in production.',
			'Every AI feature we build is measured for quality, observed for cost, and engineered to fail gracefully. We build AI that earns trust by being reliable — not AI that is merely impressive until it breaks.',
		],
		journey: [
			{
				phase: '01',
				title: 'Opportunity mapping',
				description:
					'We identify where AI creates measurable value — not novelty — and prioritise the use cases worth building first, tied to real business outcomes.',
			},
			{
				phase: '02',
				title: 'Prototype & evaluate',
				description:
					'We build a working prototype and evaluate it against real examples, tuning prompts, retrieval and guardrails until quality holds up.',
			},
			{
				phase: '03',
				title: 'Productionise',
				description:
					'We integrate the AI into your product or operations with monitoring, fallbacks and cost controls — built to run reliably, not just to demo.',
			},
			{
				phase: '04',
				title: 'Monitor & improve',
				description:
					'We track quality, cost and usage, and iterate as your data and needs evolve — so the AI keeps earning its place rather than drifting.',
			},
		],
		relatedServices: ['ai-automation', 'data-analytics', 'custom-software-development', 'api-system-integration'],
		relatedIndustries: ['startups-technology', 'professional-services', 'healthcare'],
		faq: [
			{
				question: 'How do we know if AI is actually worth it for us?',
				answer:
					'We start with opportunity mapping — identifying where AI creates measurable value versus where it is novelty. If a use case does not tie to a real business outcome, we will say so. You get a prioritised, honest assessment of where AI pays off before you invest in building.',
			},
			{
				question: 'How do you keep AI from being confidently wrong?',
				answer:
					'We ground responses in your data with retrieval, evaluate outputs against real examples, and add guardrails that catch errors before users see them. Quality is measured continuously, and the system fails gracefully rather than guessing. Trust is engineered, not assumed.',
			},
			{
				question: 'Can you work with our existing data and tools?',
				answer:
					'Yes. We connect AI to your real systems — databases, documents, APIs — so it works with the data and workflows you already have. The goal is AI that fits into how you operate, not a separate tool your team has to learn from scratch.',
			},
		],
	},
	{
		slug: 'ecommerce-transformation',
		title: 'E-commerce Transformation',
		outcome: 'Grow revenue with a store that converts.',
		explanation:
			'We rebuild online commerce around the customer — faster storefronts, smoother checkout and connected back-office operations that scale with demand and season peaks.',
		capabilities: [
			'Storefront & checkout design',
			'Payment & inventory integration',
			'Conversion & performance tuning',
			'Omnichannel operations',
		],
		icon: ShoppingBag,
		challenge: [
			'Online stores lose revenue in the gaps customers fall through: slow pages, clunky checkout, stock that does not sync across channels, and back-office work that cannot keep up when traffic spikes. Each friction point is a lost sale, and together they cap how much the business can grow.',
			'Growth exposes the cracks. A storefront that worked at low volume buckles under peak demand, and disconnected operations turn a successful campaign into a fulfilment crisis. Scaling commerce is as much an engineering problem as a merchandising one.',
		],
		approach: [
			'We rebuild commerce around the customer and engineer it for scale. Codelaro designs fast, conversion-focused storefronts and checkouts, then connects inventory, payments and operations so the whole system holds up under peak.',
			'From headless storefronts to multi-vendor marketplaces, we tune every flow — product, cart, checkout, fulfilment — to remove friction and lift conversion, while architecting the infrastructure to stay fast when traffic surges.',
		],
		journey: [
			{
				phase: '01',
				title: 'Commerce strategy',
				description:
					'We define the catalog model, checkout flow, payment and shipping setup, and the architecture — headless or platform — that fits your scale and channels.',
			},
			{
				phase: '02',
				title: 'Storefront & checkout',
				description:
					'We design and build conversion-focused product, search, cart and checkout experiences, optimised for speed and mobile.',
			},
			{
				phase: '03',
				title: 'Connect operations',
				description:
					'We integrate inventory, payments, shipping and tax so orders flow end to end without manual handling across every channel.',
			},
			{
				phase: '04',
				title: 'Optimise for peak',
				description:
					'We load-test and tune for traffic spikes, with caching, CDN and monitoring so the store stays fast and reliable when it matters most.',
			},
		],
		relatedServices: ['ecommerce-development', 'payment-integration', 'web-development', 'data-analytics'],
		relatedIndustries: ['ecommerce-retail', 'startups-technology', 'logistics-transportation'],
		faq: [
			{
				question: 'Should we replatform or improve what we have?',
				answer:
					'It depends on how far the current store is from where you need to be. We often improve existing storefronts — lifting speed, checkout and conversion without a full replatform — and we replatform when the foundations have genuinely run out. A short audit tells us which path is right for you.',
			},
			{
				question: 'Can you handle multi-channel and marketplace selling?',
				answer:
					'Yes. We connect inventory and orders across channels so stock stays accurate and fulfilment stays reliable whether sales come from your store, marketplaces or wholesale. Omnichannel operations are engineered deliberately, not bolted on.',
			},
			{
				question: 'How do you protect revenue during peak events?',
				answer:
					'We architect for peaks from the start — CDN, caching, image optimisation and a checkout that does not block on slow calls. We load-test before major events and monitor during them, so the store stays responsive when traffic surges rather than costing you sales.',
			},
		],
	},
	{
		slug: 'team-extension',
		title: 'Team Extension',
		outcome: 'Add senior capacity that integrates instantly.',
		explanation:
			'We embed experienced engineers and designers into your existing team — adopting your stack, standards and cadence to accelerate delivery without the hiring overhead.',
		capabilities: [
			'Vetted senior specialists',
			'Stack-aligned onboarding',
			'Async & sync collaboration',
			'Knowledge transfer & docs',
		],
		icon: Users,
		challenge: [
			'Growing teams hit a familiar wall: the work outpaces the people, hiring senior talent takes months, and the cost of a wrong hire is high. Projects slip not because the plan is wrong but because there is not enough experienced capacity to execute it.',
			'Bringing in help creates its own friction if the new people need weeks to learn the stack, the standards and the way the team works. Help that slows you down while it ramps up is barely help at all.',
		],
		approach: [
			'We embed senior engineers and designers who integrate from day one. Codelaro specialists adopt your stack, your standards and your cadence — working as part of your team rather than a separate island beside it.',
			'We collaborate in your tools and rituals, communicate clearly across time zones, and transfer knowledge as we go — so the capacity we add accelerates delivery now and leaves your team stronger after we step back.',
		],
		journey: [
			{
				phase: '01',
				title: 'Scope & match',
				description:
					'We understand your stack, standards and the gap to fill, then match you with senior specialists who fit the work and the team.',
			},
			{
				phase: '02',
				title: 'Stack-aligned onboarding',
				description:
					'We onboard fast — adopting your tools, conventions and rituals — so we are contributing to real work within days, not weeks.',
			},
			{
				phase: '03',
				title: 'Embedded delivery',
				description:
					'We work as part of your team, in your cadence, shipping alongside your engineers and designers with clear async and sync communication.',
			},
			{
				phase: '04',
				title: 'Knowledge transfer',
				description:
					'We document what we build and transfer knowledge to your team, so the capacity we added leaves your team stronger after we step back.',
			},
		],
		relatedServices: ['web-development', 'mobile-app-development', 'cloud-devops', 'custom-software-development'],
		relatedIndustries: ['startups-technology', 'professional-services', 'financial-services-fintech'],
		faq: [
			{
				question: 'How quickly can you add people to our team?',
				answer:
					'Typically within one to two weeks of scoping. We match you with senior specialists who already know the kind of stack and work you have, so onboarding is fast. You get experienced capacity quickly without the months a direct hire takes.',
			},
			{
				question: 'Do your engineers work in our tools and process?',
				answer:
					'Yes. We adopt your stack, standards, tools and rituals — working as part of your team, not a separate one. The goal is to accelerate your delivery in your way, not to impose a different process you then have to reconcile.',
			},
			{
				question: 'What happens to the knowledge when the engagement ends?',
				answer:
					'Knowledge transfer is built in, not an afterthought. We document what we build, work in the open with your team, and hand over cleanly — so the capacity we added leaves your team stronger rather than dependent on us.',
			},
		],
	},
	{
		slug: 'scaling-optimization',
		title: 'Software Scaling & Optimization',
		outcome: 'Make a working product ready for real growth.',
		explanation:
			'We harden and optimise products that have outgrown their first build — improving architecture, performance and reliability so the software holds up as usage and teams expand.',
		capabilities: [
			'Architecture & scaling review',
			'Performance & cost optimization',
			'Reliability & observability',
			'CI/CD & release maturity',
		],
		icon: Gauge,
		challenge: [
			'A product that succeeded at launch often starts to fail at scale. The architecture that was right for early users buckles under real load, performance drifts, costs climb unpredictably, and the codebase that was easy to change becomes hard to change safely.',
			'Growth exposes the shortcuts that were reasonable at the start. Without deliberate hardening, the product that won you customers becomes the thing that loses them — slow, fragile and expensive to evolve just when momentum matters most.',
		],
		approach: [
			'We harden and optimise without a risky rewrite. Codelaro reviews the architecture, performance and reliability of products that have outgrown their first build, then improves them deliberately — so the software scales with the business.',
			'We tackle architecture, performance, cost, reliability and release maturity together, with observability throughout — so you can see the system is healthy, ship changes safely, and keep costs predictable as usage grows.',
		],
		journey: [
			{
				phase: '01',
				title: 'Architecture & scaling review',
				description:
					'We review the architecture, performance and reliability against your growth trajectory, and identify what will break first as usage and teams expand.',
			},
			{
				phase: '02',
				title: 'Performance & cost optimization',
				description:
					'We optimise the bottlenecks that hurt users and the costs that hurt the business — measurably, with before-and-after evidence.',
			},
			{
				phase: '03',
				title: 'Reliability & observability',
				description:
					'We add monitoring, alerting and resilience so the system stays healthy and failures are caught and fixed before users notice.',
			},
			{
				phase: '04',
				title: 'CI/CD & release maturity',
				description:
					'We mature the release pipeline so your team can ship safely and often, with tests and rollback that make frequent changes low-risk.',
			},
		],
		relatedServices: ['cloud-devops', 'data-analytics', 'api-system-integration', 'maintenance-support'],
		relatedIndustries: ['startups-technology', 'financial-services-fintech', 'ecommerce-retail'],
		faq: [
			{
				question: 'How do we know if our product needs scaling work?',
				answer:
					'The signs are usually visible: slowing performance under load, rising cloud costs, releases that feel risky, or a codebase that is hard to change safely. We start with a review that tells you exactly what will break first as you grow, so you can fix it before it costs you users.',
			},
			{
				question: 'Do we need to rewrite to scale?',
				answer:
					'Rarely. Most scaling work is targeted hardening — fixing the specific bottlenecks in architecture, performance and reliability — rather than a rewrite. We improve the system deliberately and measure the results, so you scale without the risk and cost of starting over.',
			},
			{
				question: 'Can you reduce our cloud costs?',
				answer:
					'Yes — cost optimisation is usually part of scaling work. We right-size resources, add autoscaling, eliminate waste and recommend savings where it makes sense, with visibility into spend so it stays predictable rather than creeping up unnoticed.',
			},
		],
	},
];

export function getSolutionBySlug(slug: string): Solution | undefined {
	return SOLUTIONS.find((solution) => solution.slug === slug);
}
