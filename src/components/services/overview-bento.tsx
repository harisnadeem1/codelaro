import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

import { SERVICES, type Service } from '@/data/services';

/* -------------------------------------------------------------------------- */
/* Service Card                                                               */
/* -------------------------------------------------------------------------- */

function ServiceCard({ service }: { service: Service }) {
	const Icon = service.icon;

	return (
		<Link
			to={`/services/${service.slug}`}
			className="
				group flex h-full min-w-0 flex-col
				rounded-2xl border border-slate-200/80
				bg-white p-6
				transition-all duration-300
				hover:-translate-y-1
				hover:border-brand/35
				hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.15)]
				focus-visible:outline-2
				focus-visible:outline-offset-2
				focus-visible:outline-brand
				motion-reduce:transform-none
				sm:p-7
			"
		>
			{/* Icon and Title */}

			<div className="flex items-center gap-3.5">
				<div
					className="
						grid h-9 w-9 shrink-0
						place-items-center rounded-xl
						border border-slate-200
						bg-slate-50 text-navy
						transition-colors duration-300
						group-hover:border-brand/20
						group-hover:bg-brand/[0.08]
						group-hover:text-brand
					"
				>
					<Icon
						className="h-4 w-4"
						strokeWidth={1.7}
						aria-hidden="true"
					/>
				</div>

				<h3
					className="
						min-w-0 font-display
						text-[15px] font-semibold
						leading-snug tracking-tight
						text-navy
						sm:text-[16px]
					"
				>
					{service.title}
				</h3>
			</div>

			{/* Description */}

			<p
				className="
					mt-5 text-[14px]
					leading-[1.75]
					text-slate-500
				"
			>
				{service.tagline}
			</p>

			{/* Footer */}

			<div className="mt-auto flex items-center justify-start gap-3 pt-4">
				<span className="text-[13px] font-semibold text-navy transition-colors duration-300 group-hover:text-brand-700">
					Explore Service
				</span>

				<span
					className="
		
		"
				>
					<ArrowUpRight
						className="
				h-4 w-4
				transition-transform duration-300
				group-hover:translate-x-0.5
				group-hover:-translate-y-0.5
			"
						aria-hidden="true"
					/>
				</span>
			</div>
		</Link>
	);
}

/* -------------------------------------------------------------------------- */
/* Services Overview                                                          */
/* -------------------------------------------------------------------------- */

export function ServicesOverviewBento() {
	const [showAll, setShowAll] = useState(false);

	const visibleServices = SERVICES.slice(0, 6);
	const remainingServices = SERVICES.slice(6);

	const hasMoreServices = remainingServices.length > 0;

	const gridClasses = `
		grid grid-cols-1 gap-4
		sm:grid-cols-2 sm:gap-5
		lg:grid-cols-3 lg:gap-3
	`;

	return (
		<section
			id="services-list"
			aria-labelledby="services-heading"
			className="
				relative scroll-mt-24
				bg-[#F8FAFC]
				py-20 sm:py-24 lg:py-20
			"
		>
			
			{/* Existing anchor compatibility */}

			<span
				id="all-services"
				aria-hidden="true"
				className="absolute top-0 scroll-mt-24"
			/>

			<div className="mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* Section Header */}

			<div className="mx-auto flex max-w-4xl flex-col items-center text-center">
	{/* Eyebrow */}
	<div className="mb-6 flex items-center justify-center gap-3">
		<span className="h-px w-8 bg-brand" />

		<p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700">
			What We Do
		</p>

		<span className="h-px w-8 bg-brand" />
	</div>

	{/* Heading */}
	<h2
		id="services-heading"
		className="
			font-display
			text-[34px] font-semibold
			leading-[1.14]
			tracking-[-0.045em]
			text-navy
			sm:text-[42px]
			lg:text-[48px]
		"
	>
		Technology expertise
		<br className="hidden sm:block" />{' '}
		<span className="text-brand">
			for every ambition.
		</span>
	</h2>
</div>

				{/* Initially visible services */}

				<div className={`mt-12 sm:mt-14 ${gridClasses}`}>
					{visibleServices.map((service) => (
						<ServiceCard
							key={service.slug}
							service={service}
						/>
					))}
				</div>

				{/* Additional Services */}

				{hasMoreServices && (
					<>
						<div
							id="additional-services"
							className={
								showAll
									? `mt-4 sm:mt-5 lg:mt-3 ${gridClasses}`
									: 'hidden'
							}
						>
							{remainingServices.map((service) => (
								<ServiceCard
									key={service.slug}
									service={service}
								/>
							))}
						</div>

						{/* View More / Show Less */}

						<div className="mt-10 flex justify-center sm:mt-12">
							<button
								type="button"
								onClick={() => setShowAll((prev) => !prev)}
								aria-expanded={showAll}
								aria-controls="additional-services"
								className="
									group inline-flex
									min-h-[48px]
									items-center justify-center
									gap-3
									rounded-xl
									border border-slate-200
									bg-white
									px-7 py-3
									font-display
									text-[14px] font-semibold
									text-navy
									transition-all duration-300
									hover:border-brand/40
									hover:bg-brand/[0.04]
									hover:shadow-md
									hover:shadow-navy/[0.04]
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
								"
							>
								<span>
									{showAll
										? 'Show Less'
										: 'View More Services'}
								</span>

								<ChevronDown
									aria-hidden="true"
									className={`
										h-4 w-4 text-brand
										transition-transform duration-300
										${showAll ? 'rotate-180' : ''}
										${!showAll ? 'group-hover:translate-y-0.5' : ''}
									`}
									strokeWidth={2}
								/>
							</button>
						</div>
					</>
				)}
			</div>
		</section>
	);
}