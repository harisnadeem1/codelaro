import { Link } from 'react-router';

import {
	ArrowUpRight,
	Code2,
	Layers3,
	Building2,
	Quote,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type Stat = {
	value: string;
	label: string;
};

type ExploreItem = {
	number: string;
	eyebrow: string;
	title: string;
	description: string;
	href: string;
	linkLabel: string;
	icon: LucideIcon;
};

type Testimonial = {
	name: string;
	role: string;
	quote: string;
	highlight: string;
};

/* -------------------------------------------------------------------------- */
/* Statistics                                                                 */
/* -------------------------------------------------------------------------- */

/*
 * Replace these example figures with verified statistics before publishing.
 * Attribute pre-company freelance achievements to Codelaro's founder.
 */

const STATS: Stat[] = [
	{
		value: '80+',
		label: 'Projects Delivered',
	},
	{
		value: '3+',
		label: 'Years of Experience',
	},
	{
		value: '30+',
		label: 'Happy Clients',
	},
	{
		value: '8+',
		label: 'Countries Served',
	},
];

/* -------------------------------------------------------------------------- */
/* Explore Codelaro                                                           */
/* -------------------------------------------------------------------------- */

const EXPLORE_ITEMS: ExploreItem[] = [
	{
		number: '01',
		eyebrow: 'WHAT WE DO',
		title: 'Our Services',
		description:
			'Explore our software development services, from custom web and mobile applications to AI automation, cloud infrastructure, and ongoing technical support.',
		href: '/services',
		linkLabel: 'Explore Services',
		icon: Code2,
	},
	{
		number: '02',
		eyebrow: 'HOW WE SOLVE',
		title: 'Our Solutions',
		description:
			'Discover tailored technology solutions designed to launch digital products, streamline business operations, modernize systems, and support sustainable growth.',
		href: '/solutions',
		linkLabel: 'Explore Solutions',
		icon: Layers3,
	},
	{
		number: '03',
		eyebrow: 'WHO WE HELP',
		title: 'Industries',
		description:
			'See how we apply modern technology and practical engineering to address the unique challenges of startups, established businesses, and different industries.',
		href: '/industries',
		linkLabel: 'Explore Industries',
		icon: Building2,
	},
];

/* -------------------------------------------------------------------------- */
/* Testimonials                                                               */
/* -------------------------------------------------------------------------- */

/*
 * These are illustrative drafts, not verified client statements.
 * Replace each quote with the client's actual, approved testimonial.
 * Do not publish fabricated reviews or unverified client identities.
 *
 * Work completed before Codelaro was established should be
 * attributed to the founder rather than the company.
 */

const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Alex Klarman',
        role: 'Owner, Libenly',
        quote:
            "We had a pretty clear idea of what we wanted for Libenly, but turning that into a working platform was another story. Codelaro helped us bring everything together, handled the technical challenges, and was open to changes throughout development. Really pleased with how things turned out.",
        highlight: 'Platform Development',
    },
    {
        name: 'Gian Kom',
        role: 'Owner, Markefy & Ronin System',
        quote:
            "What I like about working with Codelaro is that I don't have to explain every little technical detail. They understand what I'm trying to build and often come back with ideas I hadn't considered. We've worked together on different projects, and having that kind of technical support makes a real difference.",
        highlight: 'SaaS Development',
    },
    {
        name: 'Tanner',
        role: 'Client',
        quote:
            "Honestly, the whole process was much easier than I expected. The team at Codelaro took the time to understand what I needed and helped figure out the best way to approach it. There were a few adjustments along the way, but everything was handled smoothly. Very happy with the experience.",
        highlight: 'AI & Automation',
    },
];
/* -------------------------------------------------------------------------- */
/* Shared Section Heading                                                     */
/* -------------------------------------------------------------------------- */

function SectionEyebrow({
	children,
	light = false,
}: {
	children: React.ReactNode;
	light?: boolean;
}) {
	return (
		<div className="flex items-center gap-3">
			<span
				aria-hidden="true"
				className="h-px w-8 shrink-0 bg-brand"
			/>

			<span
				className={`
					font-mono
					text-[11px]
					font-semibold
					uppercase
					tracking-[0.2em]
					${light ? 'text-white/65' : 'text-brand-700'}
				`}
			>
				{children}
			</span>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Statistics Band                                                            */
/* -------------------------------------------------------------------------- */

function StatsBand() {
	return (
		<div
			aria-label="Company statistics"
			className="
				relative
				isolate
				overflow-hidden
				rounded-[24px]
				bg-navy
				px-6
				py-9
				sm:rounded-[28px]
				sm:px-8
				sm:py-11
				lg:px-12
				lg:py-12
			"
		>
			{/* Decorative Background */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					-right-20
					-top-32
					h-72
					w-72
					rounded-full
					bg-brand/[0.08]
					blur-[90px]
				"
			/>

			{/* Statistics */}

			<dl
				className="
					relative
					grid
					grid-cols-2
					gap-x-6
					gap-y-10
					md:grid-cols-4
					md:gap-x-0
					md:gap-y-0
				"
			>
				{STATS.map((stat, index) => (
					<div
						key={stat.label}
						className={`
							relative
							min-w-0
							${index !== 0
								? 'md:border-l md:border-white/15 md:pl-8 lg:pl-12'
								: ''
							}
						`}
					>
						<dd
							className="
								font-display
								text-[clamp(2.5rem,4vw,4rem)]
								font-bold
								leading-none
								tracking-[-0.055em]
								text-white
							"
						>
							{stat.value}
						</dd>

						<dt
							className="
								mt-3
								text-[14px]
								font-medium
								leading-relaxed
								text-slate-300
								sm:text-base
							"
						>
							{stat.label}
						</dt>
					</div>
				))}
			</dl>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Explore Card                                                               */
/* -------------------------------------------------------------------------- */

function ExploreCard({
	item,
}: {
	item: ExploreItem;
}) {
	const Icon = item.icon;

	return (
		<Link
			to={item.href}
			aria-label={item.linkLabel}
			className="
				group
				relative
				isolate
				flex
				h-full
				min-w-0
				flex-col
				overflow-hidden
				rounded-[24px]
				border
				border-navy/[0.08]
				bg-white
				p-6
				transition-[border-color,background-color,box-shadow,transform]
				duration-300

				hover:-translate-y-1
				hover:border-brand/35
				hover:bg-[#F2FAF9]
				hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.16)]

				focus-visible:outline-none
				focus-visible:ring-2
				focus-visible:ring-brand
				focus-visible:ring-offset-4

				motion-reduce:transform-none
				motion-reduce:transition-none

				sm:rounded-[28px]
				sm:p-8
				lg:p-9
			"
		>
			{/* Background Decoration */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					-right-24
					-top-24
					h-64
					w-64
					rounded-full
					bg-brand/[0.035]
					blur-3xl
					transition-colors
					duration-300
					group-hover:bg-brand/[0.08]
				"
			/>

			{/* Decorative Corner Lines */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					right-0
					top-0
					h-28
					w-28
					opacity-40

					[background-image:linear-gradient(to_right,rgba(24,188,183,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,188,183,0.10)_1px,transparent_1px)]
					[background-size:20px_20px]

					[mask-image:linear-gradient(to_bottom_left,black,transparent_80%)]
				"
			/>

			{/* Card Header */}

			<div
				className="
					relative
					flex
					items-start
					justify-between
					gap-4
				"
			>
				{/* Icon */}

				<div
					className="
						flex
						h-14
						w-14
						shrink-0
						items-center
						justify-center
						rounded-2xl
						border
						border-brand/15
						bg-brand/[0.07]
						text-brand
						transition-[background-color,border-color,transform]
						duration-300

						group-hover:scale-105
						group-hover:border-brand/25
						group-hover:bg-brand/[0.12]

						motion-reduce:transform-none
					"
				>
					<Icon
						className="h-6 w-6"
						strokeWidth={1.7}
						aria-hidden="true"
					/>
				</div>

				{/* Number */}

				<span
					className="
						font-mono
						text-[12px]
						font-semibold
						tracking-[0.15em]
						text-slate-300
					"
				>
					{item.number}
				</span>
			</div>

			{/* Content */}

			<div className="relative mt-9 flex flex-1 flex-col">
				{/* Eyebrow */}

				<p
					className="
						font-mono
						text-[11px]
						font-semibold
						uppercase
						tracking-[0.18em]
						text-brand-700
					"
				>
					{item.eyebrow}
				</p>

				{/* Title */}

				<h3
					className="
						mt-3
						font-display
						text-[clamp(1.45rem,2vw,1.85rem)]
						font-semibold
						leading-tight
						tracking-[-0.035em]
						text-navy
					"
				>
					{item.title}
				</h3>

				{/* Description */}

				<p
					className="
						mt-4
						max-w-[440px]
						text-[14px]
						leading-[1.85]
						text-slate-500
						sm:text-[15px]
					"
				>
					{item.description}
				</p>

				{/* CTA */}

				<div
					className="
						mt-auto
						flex
						items-center
						justify-between
						gap-4
						pt-9
					"
				>
					<span
						className="
							font-display
							text-[14px]
							font-semibold
							text-navy
							transition-colors
							duration-300
							group-hover:text-brand-700
						"
					>
						{item.linkLabel}
					</span>

					<span
						className="
							flex
							h-11
							w-11
							shrink-0
							items-center
							justify-center
							rounded-full
							bg-navy
							text-white
							transition-[background-color,transform]
							duration-300

							group-hover:-translate-y-0.5
							group-hover:translate-x-0.5
							group-hover:bg-brand

							motion-reduce:transform-none
						"
					>
						<ArrowUpRight
							className="h-5 w-5"
							strokeWidth={1.8}
							aria-hidden="true"
						/>
					</span>
				</div>
			</div>
		</Link>
	);
}

/* -------------------------------------------------------------------------- */
/* Explore Codelaro                                                           */
/* -------------------------------------------------------------------------- */

function ExploreSection() {
	return (
		<div
			className="
				py-16
				sm:py-20
				lg:py-24
			"
		>
			{/* Section Header */}

			<div
				className="
					mb-10
					flex
					flex-col
					gap-5
					md:mb-12
					md:flex-row
					md:items-end
					md:justify-between
				"
			>
				<div className="max-w-2xl">
					<SectionEyebrow>
						Explore Codelaro
					</SectionEyebrow>

					<h2
						id="explore-codelaro-heading"
						className="
							mt-5
							font-display
							text-[clamp(2rem,3.5vw,3.5rem)]
							font-bold
							leading-[1.12]
							tracking-[-0.04em]
							text-navy
						"
					>
						Find the right path
						<br className="hidden sm:block" />{' '}
						for your <span className="text-slate-400">next move.</span>
					</h2>
				</div>

				<p
					className="
						max-w-[400px]
						text-[15px]
						leading-[1.85]
						text-slate-500
					"
				>
					Explore our software development services,
					business solutions, and industry expertise
					to discover how we can help bring your
					ideas to life.
				</p>
			</div>

			{/* Cards */}

			<nav
				aria-labelledby="explore-codelaro-heading"
				className="
					grid
					gap-5
					md:grid-cols-3
					lg:gap-6
				"
			>
				{EXPLORE_ITEMS.map((item) => (
					<ExploreCard
						key={item.href}
						item={item}
					/>
				))}
			</nav>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Testimonial Card                                                           */
/* -------------------------------------------------------------------------- */

function TestimonialCard({
	item,
}: {
	item: Testimonial;
}) {
	return (
		<article
			className="
				group
				relative
				flex
				h-full
				min-w-0
				flex-col
				overflow-hidden
				rounded-[24px]
				border
				border-white/10
				bg-white/[0.05]
				p-6
				backdrop-blur-sm
				transition-[background-color,border-color,transform]
				duration-300

				hover:-translate-y-1
				hover:border-brand/35
				hover:bg-white/[0.07]

				motion-reduce:transform-none

				sm:p-7
			"
		>
		
			{/* Review */}

			<blockquote
				className="
					mt-0
					flex-1
					text-base
					leading-[1.85]
					text-slate-100
				"
			>
				“{item.quote}”
			</blockquote>

			{/* Divider */}

			<div
				aria-hidden="true"
				className="
					mt-5
					h-px
					w-full
					bg-white/10
				"
			/>

			{/* Client Information */}

			<div className="mt-5">
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        {/* Client Name */}
        <h3 className="font-display text-[14px] font-semibold tracking-tight text-white">
            {item.name}
        </h3>

        {/* Highlight */}
        <span className="text-[12px] font-medium text-brand">
            {item.highlight}
        </span>
    </div>

    {/* Client Role */}
    <p className="mt-1 text-[12px] text-slate-300">
        {item.role}
    </p>
</div>
		</article>
	);
}

/* -------------------------------------------------------------------------- */
/* Client Testimonials                                                        */
/* -------------------------------------------------------------------------- */

function TestimonialsSection() {
	return (
		<div
			className="
				relative
				isolate
				overflow-hidden
				rounded-[28px]
				bg-navy
				px-6
				py-10
				text-white

				sm:rounded-[32px]
				sm:px-8
				sm:py-12

				lg:px-10
				lg:py-14

				xl:px-14
			"
		>
			{/* Background Gradient */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					inset-0
					bg-[linear-gradient(90deg,rgba(24,188,183,0.06),transparent_40%,rgba(24,188,183,0.04))]
				"
			/>

			{/* Decorative Glows */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					-left-20
					top-0
					h-72
					w-72
					rounded-full
					bg-brand/10
					blur-3xl
				"
			/>

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					-right-16
					top-0
					h-72
					w-72
					rounded-full
					bg-brand/10
					blur-3xl
				"
			/>

			{/* Content */}

			<div className="relative">
				{/* Section Header */}

				<div className="mb-10 max-w-3xl lg:mb-12">
					<SectionEyebrow light>
						Client Voices
					</SectionEyebrow>

					<h2
						id="client-voices-heading"
						className="
							mt-5
							font-display
							text-[clamp(2rem,4vw,2.5rem)]
							font-semibold
							leading-[1.08]
							tracking-[-0.04em]
							text-white
						"
					>
						Partnerships built on{' '}
						 <span className="text-brand">Quality and Trust.</span>
					</h2>

					
				</div>

				{/* Testimonial Cards */}

				<div
					className={`
						grid
						gap-5
						${TESTIMONIALS.length >= 3
							? 'lg:grid-cols-3'
							: 'lg:grid-cols-2'
						}
					`}
				>
					{TESTIMONIALS.map((item) => (
						<TestimonialCard
							key={item.name}
							item={item}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Main Section                                                               */
/* -------------------------------------------------------------------------- */

export function ClientVoicesSection() {
	return (
		<section
			id="client-voices"
			aria-label="Explore Codelaro and client experiences"
			className="
				relative
				overflow-hidden
				bg-white
				py-16
				sm:py-20
				lg:py-20
			"
		>
			<div
				className="
					mx-auto
					w-full
					max-w-9xl
					px-5
					sm:px-8
				"
			>
				{/* 1. Statistics */}

				<StatsBand />

				{/* 2. Explore Services, Solutions & Industries */}

				<ExploreSection />

				{/* 3. Client Testimonials */}

				<TestimonialsSection />
			</div>
		</section>
	);
}