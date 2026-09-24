import { Link } from 'react-router';
import {
	ArrowRight,
	ArrowUpRight,
	BrainCircuit,
	Code2,
	Layers,
	Rocket,
	ShoppingBag,
	Smartphone,
	type LucideIcon,
} from 'lucide-react';

/* ---------- Homepage services ---------- */

type HomeService = {
	slug: string;
	title: string;
	tagline: string;
	icon: LucideIcon;
};

const HOME_SERVICES: HomeService[] = [
	{
		slug: 'web-development',
		title: 'Web Development',
		tagline:
			'High-performance websites and web applications built with modern technologies, responsive design and SEO-focused architecture.',
		icon: Code2,
	},
	{
		slug: 'custom-software-development',
		title: 'Custom Software Development',
		tagline:
			'Purpose-built software that streamlines complex operations, connects business systems and adapts to your evolving requirements.',
		icon: Layers,
	},
	{
		slug: 'mobile-app-development',
		title: 'Mobile App Development',
		tagline:
			'Intuitive iOS and Android applications engineered for seamless user experiences, reliable performance and long-term scalability.',
		icon: Smartphone,
	},
	{
		slug: 'saas-development',
		title: 'SaaS Development',
		tagline:
			'End-to-end SaaS product development, from MVP architecture and subscription systems to secure, scalable cloud-based platforms.',
		icon: Rocket,
	},
	{
		slug: 'ai-automation',
		title: 'AI & Automation',
		tagline:
			'Intelligent AI integrations and workflow automation that eliminate repetitive tasks, connect applications and improve operational efficiency.',
		icon: BrainCircuit,
	},
	{
		slug: 'ecommerce-development',
		title: 'E-commerce Development',
		tagline:
			'Custom e-commerce websites and scalable online stores featuring secure payment integrations, streamlined shopping experiences and powerful functionality.',
		icon: ShoppingBag,
	},
];


/* ---------- Service card ---------- */

function ServiceCard({
	service,
	index,
}: {
	service: HomeService;
	index: number;
}) {
	const Icon = service.icon;

	return (
		<Link
			to={`/services/${service.slug}`}
			aria-label={`Learn more about ${service.title}`}
			className="
				group relative flex min-h-[270px] flex-col
				overflow-hidden 
				border border-slate-200/80
				bg-[#F8FAFC] p-6
				transition-all duration-300
				hover:-translate-y-1
				hover:border-brand/30
				hover:bg-white
				hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)]
				focus-visible:outline focus-visible:outline-2
				focus-visible:outline-offset-4 focus-visible:outline-brand
				sm:p-7
				motion-reduce:transform-none
			"
		>
			{/* Animated top accent */}
			<div
				aria-hidden="true"
				className="
					pointer-events-none absolute inset-x-0 top-0
					h-[2px] origin-left scale-x-0 bg-brand
					transition-transform duration-500
					group-hover:scale-x-100
					motion-reduce:transition-none
				"
			/>

			{/* Subtle background glow */}
			<div
				aria-hidden="true"
				className="
					pointer-events-none absolute
					-right-16 -top-16 h-40 w-40
					rounded-full bg-brand/0 blur-3xl
					transition-colors duration-500
					group-hover:bg-brand/[0.05]
				"
			/>

			{/* Card number */}
			<div className="relative flex justify-end">
				<span
					aria-hidden="true"
					className="
						text-[11px] font-semibold
						tabular-nums tracking-[0.16em]
						text-slate-400
						transition-colors duration-300
						group-hover:text-brand-700
					"
				>
					{String(index + 1).padStart(2, '0')}
				</span>
			</div>

			{/* Icon and title */}
			<div className="relative mt-1 flex items-center gap-4">
				<span
					className="
						grid h-12 w-12 shrink-0 place-items-center
						rounded-xl border border-slate-200
						bg-white text-navy shadow-sm
						transition-all duration-300
						group-hover:border-brand/25
						group-hover:bg-brand/[0.06]
					"
				>
					<Icon
						className="h-5 w-5"
						strokeWidth={1.7}
						aria-hidden="true"
					/>
				</span>

				<h3
					className="
						font-display text-xl font-semibold
						tracking-tight text-navy
					"
				>
					{service.title}
				</h3>
			</div>

			{/* Service description */}
			<p
				className="
					relative mt-5 max-w-md
					text-[15px] leading-7
					text-slate-600
				"
			>
				{service.tagline}
			</p>

			{/* Card footer */}
			<div className="relative mt-auto pt-7">
				<div
					className="
						flex items-center justify-between
						border-t border-slate-200/80 pt-4
					"
				>
					<span
						className="
							text-[14px] font-semibold
							text-slate-500
							transition-colors duration-300
							group-hover:text-navy
						"
					>
						Explore service
					</span>

					<span
						className="
							grid h-9 w-9 place-items-center
							rounded-full border border-slate-200
							bg-white text-navy
							transition-all duration-300
							group-hover:border-brand
							group-hover:bg-brand
							group-hover:text-white
						"
					>
						<ArrowUpRight
							className="
								h-4 w-4
								transition-transform duration-300
								group-hover:translate-x-0.5
								group-hover:-translate-y-0.5
							"
							strokeWidth={1.8}
							aria-hidden="true"
						/>
					</span>
				</div>
			</div>
		</Link>
	);
}


/* ---------- Services section ---------- */

export function Services() {
	return (
		<section
			id="services"
			aria-labelledby="services-heading"
			className="relative isolate scroll-mt-24 overflow-hidden bg-white"
		>


			{/* Restrained background texture; not essential to the content. */}
			<div aria-hidden="true" className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-blueprint-grid opacity-[0.12] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
				<div className="absolute -right-44 top-0 h-80 w-80 rounded-full bg-brand/[0.035] blur-[100px]" />
			</div>



			<div
				className="
					relative mx-auto w-full max-w-8xl
					px-5 py-20
					sm:px-8
					md:py-20
					lg:py-20
				"
			>
				{/* Header */}
				<div className="relative">
					<div className="mx-auto max-w-3xl text-center">
						<div className="flex items-center justify-center gap-3">
							<span className="h-px w-7 bg-brand" />

							<p
								className="
					text-[11px] font-bold uppercase
					tracking-[0.22em] text-brand-700
				"
							>
								What we do
							</p>

							<span className="h-px w-7 bg-brand" />
						</div>

						<h2
							id="services-heading"
							className="
				mt-6 font-display
				text-[2.2rem] font-semibold
				leading-[1.08]
				tracking-[-0.025em]
				text-navy
				sm:text-4xl
				md:text-[3rem]
			"
						>
							Everything you need to

							<span className="block  text-slate-400 ">
								build what's next.
							</span>
						</h2>

						<p
							className="
				mx-auto mt-6 max-w-2xl
				text-[15px] leading-7
				text-slate-600
				sm:text-base
			"
						>
							From websites and mobile applications to custom
							software, SaaS platforms and AI automation, we
							build digital products designed around your
							business and built to grow.
						</p>
					</div>

					{/* View all services — top right */}
					<Link
    to="/services"
    aria-label="View all Codelaro software development services"
    className="
        group absolute right-0 top-0
        hidden items-center gap-2.5
        rounded-xl
        border border-slate-200/80
        bg-white px-4 py-2.5
        text-[15px] font-semibold text-navy
        shadow-sm
        transition-all duration-300
        hover:border-slate-300
        hover:bg-slate-50
        lg:inline-flex
    "
>
    View all Services

    <ArrowUpRight
        className="
            h-4 w-4
            transition-all duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-brand
        "
        strokeWidth={2}
        aria-hidden="true"
    />
</Link>
				</div>

				{/* Services grid */}
				<div
					className="
						mt-14 grid grid-cols-1
						sm:grid-cols-2
						lg:mt-16
						lg:grid-cols-3
					"
				>
					{HOME_SERVICES.map((service, index) => (
						<ServiceCard
							key={service.slug}
							service={service}
							index={index}
						/>
					))}
				</div>

				{/* Tablet/mobile all-services CTA */}
				<div className="mt-8 flex justify-center lg:hidden">
					<Link
						to="/services"
						className="
							group inline-flex items-center gap-2
							text-[14px] font-semibold
							text-navy transition-colors
							hover:text-brand-700
						"
					>
						Explore all services

						<ArrowRight
							className="
								h-4 w-4 text-brand
								transition-transform duration-300
								group-hover:translate-x-1
							"
							aria-hidden="true"
						/>
					</Link>
				</div>

				{/* Bottom CTA */}
				<div
					className="
						mt-14 flex flex-col
						items-center justify-between
						gap-6 border-t border-slate-200
						pt-8
						sm:flex-row
					"
				>
					<div>
						<p className="font-display text-lg font-semibold text-navy">
							Have something specific in mind?
						</p>

						<p className="mt-1 text-[14px] text-slate-500">
							Tell us what you're planning and we'll help you
							find the right approach.
						</p>
					</div>

					<Link
						to="/contact"
						aria-label="Talk to a Codelaro development expert"
						className="
        group inline-flex shrink-0
        items-center gap-3
        rounded-xl
        border 
        bg-navy-800 px-4 py-2.5
        text-[16px] font-semibold text-white
        shadow-sm
        transition-all duration-300
        hover:bg-navy-900
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-brand
		hover:-translate-y-0.5
    "
					>
						Tell us What you Need

						<ArrowUpRight
							className="
            h-4 w-4
            transition-all duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-brand
        "
							strokeWidth={2}
							aria-hidden="true"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}