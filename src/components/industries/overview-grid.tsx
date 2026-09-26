import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

import { INDUSTRIES } from '@/data/industries';

/* -------------------------------------------------------------------------- */
/* Industry Card                                                              */
/* -------------------------------------------------------------------------- */

function IndustryCard({
	industry,
}: {
	industry: (typeof INDUSTRIES)[number];
}) {
	const Icon = industry.icon;

	return (
		<li className="h-full min-w-0">
			<Link
				to={`/industries/${industry.slug}`}
				aria-label={`Explore ${industry.title}`}
				className="
    group relative
    flex h-full min-h-[230px]
    flex-col
    overflow-hidden
    rounded-[22px]
    border border-slate-200/80
    bg-[#fefeff]
    p-6
    transition-all duration-300

    hover:-translate-y-1
    hover:border-brand/30
    hover:bg-[#F8FAFC]
    hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.12)]

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-brand
    focus-visible:ring-offset-4

    sm:min-h-[250px]
    sm:p-7
"
			>
				{/* ====================================================== */}
				{/* Icon and industry name                                 */}
				{/* ====================================================== */}

				<div className="flex items-center gap-4">
					{/* Industry icon */}

					<div
						className="
    flex h-12 w-12
    shrink-0 items-center justify-center
    rounded-xl
    border border-brand/15
    bg-brand/[0.08]
    text-brand
    transition-all duration-300

    group-hover:border-brand
    group-hover:bg-brand
    group-hover:text-white
"
					>
						<Icon
							className="h-[22px] w-[22px]"
							strokeWidth={1.7}
							aria-hidden="true"
						/>
					</div>

					{/* Industry title */}

					<h3
						className="
							font-display
							text-[18px]
							font-semibold
							leading-[1.3]
							tracking-[-0.025em]
							text-navy

							sm:text-[20px]
						"
					>
						{industry.title}
					</h3>
				</div>

				{/* ====================================================== */}
				{/* Description                                            */}
				{/* ====================================================== */}

				<p
					className="
						mt-6
						max-w-[360px]
						text-[13px]
						leading-[1.85]
						text-navy/85

						sm:text-[14px]
					"
				>
					{industry.tagline}
				</p>

				{/* ====================================================== */}
				{/* Bottom action                                          */}
				{/* ====================================================== */}

				<div
					className="
						mt-auto
						flex items-center
						border-t border-navy/15
						pt-5
					"
				>
					<span
						className="
							inline-flex
							items-center gap-2
							font-display
							text-[14px]
							font-semibold
							text-navy
							transition-colors duration-300

							group-hover:text-brand-700
						"
					>
						Explore industry

						<ArrowUpRight
							className="
								h-4 w-4
								transition-transform duration-300

								group-hover:-translate-y-0.5
								group-hover:translate-x-0.5
							"
							strokeWidth={1.8}
							aria-hidden="true"
						/>
					</span>
				</div>
			</Link>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Industries Overview Grid                                                   */
/* -------------------------------------------------------------------------- */

export function IndustriesOverviewGrid() {
	return (
		<section
			id="industries-grid"
			aria-labelledby="industries-grid-heading"
			className="
				relative
				scroll-mt-24
				bg-white
			"
		>
			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5 py-20
					sm:px-8
					md:py-20
					lg:py-20
				"
			>
				{/* ====================================================== */}
				{/* Section heading                                        */}
				{/* ====================================================== */}

				<div
					className="
						grid items-end
						gap-7
						lg:grid-cols-12
						lg:gap-12
					"
				>
					{/* Left */}

					<div className="lg:col-span-7">
						<div className="flex items-center gap-3">
							<span
								className="h-px w-7 bg-brand"
								aria-hidden="true"
							/>

							<p
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.22em]
									text-brand-700
								"
							>
								Industries we serve
							</p>
						</div>

						<h2
							id="industries-grid-heading"
							className="
								mt-6
								max-w-[740px]
								font-display
								text-[clamp(2rem,3.6vw,3.5rem)]
								font-semibold
								leading-[1.08]
								tracking-[-0.04em]
								text-navy
							"
						>
							Built for the way
							<br />

							<span className="text-slate-400">
								your industry works.
							</span>
						</h2>
					</div>

					{/* Right */}

					<div className="lg:col-span-5 lg:pb-2">
						<p
							className="
								max-w-[450px]
								text-[15px]
								leading-[1.9]
								text-slate-500

								sm:text-[16px]
							"
						>
							Every industry operates differently.
							Explore how we approach custom software
							development to address sector-specific
							challenges, streamline operations and
							support business growth.
						</p>
					</div>
				</div>

				{/* ====================================================== */}
				{/* Industry Grid                                          */}
				{/* ====================================================== */}

				<ul
					className="
						mt-12
						grid
						auto-rows-fr
						grid-cols-1
						items-stretch
						gap-4

						sm:grid-cols-2

						lg:mt-16
						lg:grid-cols-3
						lg:gap-4
					"
				>
					{INDUSTRIES.map((industry) => (
						<IndustryCard
							key={industry.slug}
							industry={industry}
						/>
					))}
				</ul>

				{/* ====================================================== */}
				{/* Bottom supporting section                              */}
				{/* ====================================================== */}

				<div
					className="
						mt-16
						flex flex-col
						gap-5
						border-t border-navy/[0.09]
						pt-7

						sm:flex-row
						sm:items-center
						sm:justify-between
					"
				>
					<div className="flex items-center gap-3">
						<div
							className="
								flex h-10 w-10
								shrink-0
								items-center justify-center
								rounded-xl
								border border-brand/15
								bg-brand/[0.065]
								text-brand
							"
						>
							<ArrowUpRight
								className="h-[18px] w-[18px]"
								strokeWidth={1.8}
								aria-hidden="true"
							/>
						</div>

						<p
							className="
								max-w-md
								text-[13px]
								leading-relaxed
								text-slate-500
							"
						>
							Don't see your industry?{' '}

							<span className="font-semibold text-navy">
								We can explore your requirements together.
							</span>
						</p>
					</div>

					<Link
						to="/contact"
						className="
							group
							inline-flex
							items-center gap-2
							self-start
							font-display
							text-[16px]
							font-semibold
							text-navy
							transition-colors duration-300

							hover:text-brand-700

							focus-visible:rounded-sm
							focus-visible:outline-2
							focus-visible:outline-offset-4
							focus-visible:outline-brand

							sm:self-auto
						"
					>
						Discuss your requirements

						<ArrowUpRight
							className="
								h-4 w-4
								text-brand
								transition-transform duration-300

								group-hover:-translate-y-0.5
								group-hover:translate-x-0.5
							"
							aria-hidden="true"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}