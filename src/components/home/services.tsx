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
			'Fast, responsive and SEO-ready websites and web applications built to create better user experiences and support business growth.',
		icon: Code2,
	},
	{
		slug: 'custom-software-development',
		title: 'Custom Software Development',
		tagline:
			'Tailored software solutions built around your workflows, operations and business goals — designed to solve problems generic tools cannot.',
		icon: Layers,
	},
	{
		slug: 'mobile-app-development',
		title: 'Mobile App Development',
		tagline:
			'Intuitive and reliable mobile applications for iOS and Android, built to deliver seamless experiences wherever your users are.',
		icon: Smartphone,
	},
	{
		slug: 'saas-development',
		title: 'SaaS Development',
		tagline:
			'Scalable SaaS platforms built from idea to launch, with the architecture, subscriptions and product foundations needed for long-term growth.',
		icon: Rocket,
	},
	{
		slug: 'ai-automation',
		title: 'AI & Automation',
		tagline:
			'Practical AI solutions and intelligent automation that reduce repetitive work, connect workflows and help your team operate more efficiently.',
		icon: BrainCircuit,
	},
	{
		slug: 'ecommerce-development',
		title: 'E-commerce Development',
		tagline:
			'High-performance online stores and marketplaces built to simplify buying, integrate operations and support growth as demand increases.',
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
				group relative flex min-h-[250px] flex-col
				overflow-hidden border border-slate-200/80
				bg-white p-6
				transition-all duration-300
				hover:-translate-y-1
				hover:border-slate-300
				hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.22)]
				sm:p-7
			"
		>
			{/* Hover glow */}
			<div
				className="
					pointer-events-none absolute
					-right-16 -top-16 h-40 w-40
					rounded-full bg-brand/0 blur-3xl
					transition-colors duration-500
					group-hover:bg-brand/[0.08]
				"
			/>

			{/* Number */}
			<div className="relative flex justify-end">
				<span
					className="
						text-[10px] font-semibold
						tabular-nums tracking-[0.16em]
						text-slate-300
						transition-colors duration-300
						group-hover:text-brand
					"
				>
					{String(index + 1).padStart(2, '0')}
				</span>
			</div>

			{/* Icon + title */}
			<div className="relative mt-0 flex items-center gap-4">
				<span
					className="
						grid h-11 w-11 shrink-0 place-items-center
						rounded-xl bg-slate-50
						text-navy ring-1 ring-slate-200/80
						transition-all duration-300
						group-hover:text-brand
						group-hover:ring-brand
					"
				>
					<Icon
						className="h-[19px] w-[19px]"
						strokeWidth={1.8}
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

			{/* Tagline */}
			<p
				className="
					relative mt-5 max-w-md
					text-[15px] leading-6
					text-slate-500
				"
			>
				{service.tagline}
			</p>

			{/* Footer */}
			<div className="relative mt-auto pt-7">
				<div className="flex items-center justify-between border-t border-slate-100 pt-4">
					<span
						className="
							text-[14px] font-semibold
							text-slate-400
							transition-colors duration-300
							group-hover:text-navy
						"
					>
						Explore service
					</span>

					<span
						className="
							grid h-8 w-8 place-items-center
							rounded-full border border-slate-200
							text-slate-400
							transition-all duration-300
							group-hover:border-brand
							group-hover:text-brand
						"
					>
						<ArrowUpRight
							className="
								h-3.5 w-3.5
								transition-transform duration-300
								group-hover:translate-x-0.5
								group-hover:-translate-y-0.5
							"
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
			className="relative overflow-hidden bg-[#F8FAFC]"
		>
			{/* Background */}
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-[0.13]" />

			<div
				className="
					pointer-events-none absolute
					left-1/2 top-0
					h-[300px] w-[700px]
					-translate-x-1/2
					rounded-full bg-brand/[0.045]
					blur-[100px]
				"
			/>

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
			<span className="block text-brand">
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

		View all Services
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
						className="
							group inline-flex h-12 shrink-0
							items-center justify-center gap-2
							rounded-xl bg-navy px-6
							
							text-[16px] font-semibold text-white
							shadow-lg shadow-navy/15
							transition-all duration-300
							hover:-translate-y-0.5
							hover:bg-navy-800
							hover:shadow-xl hover:shadow-navy/20
							active:translate-y-0
							active:scale-[0.98]
						"
					>
						Talk to an Expert

						<ArrowUpRight
							className="
								h-4 w-4
								transition-transform duration-300
								group-hover:translate-x-0.5
								group-hover:-translate-y-0.5
							"
							aria-hidden="true"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}