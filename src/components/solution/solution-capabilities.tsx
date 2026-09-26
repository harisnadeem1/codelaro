import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

import type { Solution } from '@/data/solutions';

/* -------------------------------------------------------------------------- */
/* Capability Item                                                            */
/* -------------------------------------------------------------------------- */

function CapabilityItem({
	capability,
	index,
}: {
	capability: string;
	index: number;
}) {
	return (
		<li
			className="
				group relative
				border-b border-navy/[0.09]
				py-7
				first:border-t
				sm:py-9
			"
		>
			<div className="flex items-start gap-5 sm:gap-7">
				{/* Number */}

				<span className="mt-1 shrink-0 font-mono text-[11px] font-semibold tracking-wider text-brand">
					{String(index + 1).padStart(2, '0')}
				</span>

				{/* Capability */}

				<p
					className="
						flex-1 font-display
						text-[18px] font-medium
						leading-[1.45]
						tracking-[-0.02em]
						text-navy
						transition-colors duration-300
						group-hover:text-brand-700
						sm:text-[21px]
					"
				>
					{capability}
				</p>

				{/* Decorative arrow */}

				<ArrowUpRight
					aria-hidden="true"
					className="
						mt-1 h-5 w-5 shrink-0
						text-slate-300
						transition-all duration-300
						group-hover:-translate-y-0.5
						group-hover:translate-x-0.5
						group-hover:text-brand
					"
					strokeWidth={1.5}
				/>
			</div>

			{/* Animated underline */}

			<div
				aria-hidden="true"
				className="
					absolute bottom-[-1px] left-0
					h-px w-0 bg-brand
					transition-all duration-500
					group-hover:w-full
				"
			/>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Solution Capabilities                                                      */
/* -------------------------------------------------------------------------- */

export function SolutionCapabilities({
	solution,
}: {
	solution: Solution;
}) {
	const Icon = solution.icon;

	return (
		<section
			id="solution-capabilities"
			aria-labelledby="solution-capabilities-heading"
			className="relative bg-white py-20 sm:py-20 lg:py-20"
		>
			<div className="mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* Main layout */}

				<div
					className="
						grid items-start gap-12
						lg:grid-cols-[0.85fr_1fr]
						lg:gap-24
					"
				>
					{/* Sticky left section */}

					<div className="lg:sticky lg:top-28 lg:self-start">
						<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
							Capabilities involved
						</p>

					<h2
    id="solution-capabilities-heading"
    className="
        mt-6 font-display
        text-[2.2rem] font-semibold
        leading-[1.08]
        tracking-[-0.025em]
        text-navy
        md:text-[3rem]
    "
>
    The Expertise behind
    <br />
    <span className="text-brand">
        Every Solution.
    </span>
</h2>

						<p className="mt-6 max-w-md text-[15px] leading-[1.85] text-slate-500 sm:text-[17px]">
							Every solution combines the right technical
							capabilities, carefully selected to address
							your specific business requirements.
						</p>

						{/* Expertise indicator */}

						<div
							className="
								mt-10 inline-flex items-center gap-3
								rounded-full
								border border-brand/15
								bg-brand/[0.04]
								px-4 py-2.5
							"
						>
							<span className="h-2 w-2 rounded-full bg-brand" />

							<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
								Integrated capabilities
							</span>
						</div>
					</div>

					{/* Right: capabilities directory */}

					<ol className="w-full">
						{solution.capabilities.map((capability, index) => (
							<CapabilityItem
								key={`${index}-${capability}`}
								capability={capability}
								index={index}
							/>
						))}
					</ol>
				</div>

				{/* ---------------------------------------------------------- */}
				{/* Integrated delivery footer                                 */}
				{/* ---------------------------------------------------------- */}

				<div
					className="
						mt-20
						flex flex-col gap-6
						border-t border-navy/10
						pt-8
						sm:flex-row
						sm:items-center
						sm:justify-between
						lg:mt-28
					"
				>
					{/* Left statement */}

					<div className="flex items-center gap-4">
						<div
							className="
								grid h-11 w-11
								shrink-0 place-items-center
								rounded-xl
								bg-brand/[0.07]
								text-brand
							"
						>
							<Icon
								aria-hidden="true"
								className="h-5 w-5"
								strokeWidth={1.7}
							/>
						</div>

						<div>
							<p className="font-display text-[15px] font-semibold text-navy">
								One coordinated approach
							</p>

							<p className="mt-1 text-[13px] leading-relaxed text-slate-500">
								Every capability works toward your
								desired business outcome.
							</p>
						</div>
					</div>

					{/* Contact CTA */}

					<Link
						to="/contact"
						aria-label={`Discuss your ${solution.title} project with Codelaro`}
						className="
							group inline-flex min-h-12
							w-fit shrink-0
							items-center justify-center gap-3
							rounded-xl
							bg-brand px-6 py-3
							font-display text-[16px]
							font-semibold text-white
							transition-all duration-300
							hover:bg-brand-600
							hover:shadow-lg
							hover:shadow-brand/20
							active:scale-[0.98]
							focus-visible:outline
							focus-visible:outline-2
							focus-visible:outline-offset-4
							focus-visible:outline-brand
						"
					>
						Discuss Your Project

						<ArrowUpRight
							aria-hidden="true"
							className="
								h-4 w-4
								transition-transform duration-300
								group-hover:translate-x-0.5
								group-hover:-translate-y-0.5
							"
							strokeWidth={1.8}
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}