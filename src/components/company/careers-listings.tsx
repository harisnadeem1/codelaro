import {
	ArrowUpRight,
	BriefcaseBusiness,
	Mail,
	Sparkles,
} from 'lucide-react';
import { Link } from 'react-router';

export function CareersListings() {
	return (
		<section
			id="open-positions"
			aria-labelledby="careers-listings-heading"
			className="
				relative isolate
				scroll-mt-24
				overflow-hidden
				bg-navy
				py-20
				sm:py-20
				lg:py-20
			"
		>
			{/* Background */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
			>
				{/* Subtle grid */}
				<div className="absolute inset-0 bg-blueprint-grid-dark opacity-[0.15]" />

				{/* Atmospheric lighting */}
				<div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-brand/[0.065] blur-[110px]" />

				<div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-brand/[0.045] blur-[120px]" />
			</div>

			{/* Main container */}
			<div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* -------------------------------------------------- */}
				{/* Section introduction                               */}
				{/* -------------------------------------------------- */}

				<div
					className="
						flex flex-col
						justify-between
						gap-7
						border-b border-white/10
						pb-9
						sm:flex-row
						sm:items-end
					"
				>
					<div>
						{/* Eyebrow */}
						<div className="mb-5 flex items-center gap-3">
							<span className="h-2 w-2 rotate-45 bg-brand" />

							<span
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.22em]
									text-brand
								"
							>
								Career Opportunities
							</span>

							<span className="h-px w-9 bg-brand/40" />
						</div>

						<h2
							id="careers-listings-heading"
							className="
								font-display
								text-[clamp(2.2rem,3.8vw,4rem)]
								font-semibold
								leading-[1.12]
								tracking-[-0.045em]
								text-white
							"
						>
							Explore opportunities
							<br />

							<span className="text-brand">
								at Codelaro.
							</span>
						</h2>
					</div>

					{/* Availability indicator */}
					<div
						className="
							inline-flex w-fit
							shrink-0 items-center
							gap-2.5
							rounded-full
							border border-white/15
							bg-white/[0.045]
							px-4 py-2.5
						"
					>
						<span className="relative flex h-2 w-2">
							<span className="h-2 w-2 rounded-full bg-slate-400" />
						</span>

						<span
							className="
								font-mono
								text-[11px]
								font-medium
								text-slate-300
							"
						>
							0 Open Positions
						</span>
					</div>
				</div>

				{/* -------------------------------------------------- */}
				{/* Empty state                                        */}
				{/* -------------------------------------------------- */}

				<div
					className="
						relative mx-auto
						flex max-w-[760px]
						flex-col items-center
						py-10
						text-center
						sm:py-14
					"
				>
					{/* Illustration */}
					
					{/* Status */}
					<div
						className="
							mb-6 mt-4
							inline-flex items-center
							gap-2
							rounded-full
							border border-brand/20
							bg-brand/[0.08]
							px-4 py-2
						"
					>
						<span className="h-1.5 w-1.5 rounded-full bg-brand" />

						<span
							className="
								font-mono
								text-[10px]
								font-semibold uppercase
								tracking-[0.15em]
								text-brand
							"
						>
							No Current Vacancies
						</span>
					</div>

					{/* Heading */}
					<h3
						className="
							max-w-[650px]
							font-display
							text-[clamp(1.8rem,3vw,3rem)]
							font-semibold
							leading-[1.2]
							tracking-[-0.035em]
							text-white
						"
					>
						No open roles right now.
						<br />

						<span className="text-slate-400">
							Let's stay connected.
						</span>
					</h3>

					{/* Description */}
					<p
						className="
							mx-auto mt-6
							max-w-5xl
							text-[14px]
							leading-[1.9]
							text-slate-400
							sm:text-[16px]
						"
					>
						We're not currently recruiting for any
						specific positions. However, if you're
						interested in future software development,
						design, or technology opportunities at
						Codelaro, you're welcome to introduce
						yourself through an open application.
					</p>

					{/* Actions */}
					<div
						className="
							mt-9
							flex w-full flex-col
							items-center justify-center
							gap-3
							sm:w-auto
							sm:flex-row
						"
					>
						{/* Primary CTA */}
<Link
    to="/contact"
    className="
        group
        inline-flex h-[52px]
        w-full items-center
        justify-center gap-3
        rounded-xl
        bg-brand
        px-7
        font-display
        text-[16px]
        font-semibold
        text-white
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-brand-600
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-brand
        sm:w-auto
    "
>
    Send an Open Application

    <ArrowUpRight
        className="
            h-[17px] w-[17px]
            transition-transform duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
        "
        aria-hidden="true"
    />
</Link>
					</div>

					{/* Additional information */}
					<p
						className="
							mt-6
							max-w-[460px]
							text-[12px]
							leading-relaxed
							text-slate-500
						"
					>
						Include a short introduction, your area of
						expertise, and a link to your portfolio or CV.
						An open application does not guarantee a
						future position or response.
					</p>
				</div>

				{/* -------------------------------------------------- */}
				{/* Bottom brand signature                            */}
				{/* -------------------------------------------------- */}

				<div
					className="
						flex flex-col
						justify-between
						gap-4
						border-t border-white/10
						pt-7
						sm:flex-row
						sm:items-center
					"
				>
					<p
						className="
							font-display
							text-[13px]
							font-medium
							text-slate-400
							sm:text-[14px]
						"
					>
						Interested in being part of what
						we're building?
					</p>

					<span
						className="
							font-mono
							text-[10px]
							font-semibold
							uppercase
							tracking-[0.17em]
							text-brand
						"
					>
						Code. Launch. Grow.
					</span>
				</div>
			</div>
		</section>
	);
}