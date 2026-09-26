import { ArrowUpRight, Check, MoveUpRight, Target } from 'lucide-react';

import type { Solution } from '@/data/solutions';

/* -------------------------------------------------------------------------- */
/* Execution Module                                                           */
/* -------------------------------------------------------------------------- */

function ExecutionModule({
	paragraph,
	index,
	isFeatured,
}: {
	paragraph: string;
	index: number;
	isFeatured: boolean;
}) {
	return (
		<article
			className={`
				group relative isolate
				flex min-h-[270px] flex-col
				overflow-hidden rounded-[24px]
				border
				p-7
				transition-all duration-500
				hover:-translate-y-1
				sm:p-9
				${
					isFeatured
						? `
							border-brand/30
							bg-gradient-to-br
							from-[#193E49]
							via-[#17313E]
							to-[#142839]
							lg:col-span-7
							lg:min-h-[360px]
						`
						: `
							border-white/[0.09]
							bg-white/[0.035]
							hover:border-brand/25
							hover:bg-white/[0.055]
							lg:col-span-5
						`
				}
			`}
		>
			{/* Technical background */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none absolute inset-0
					opacity-[0.035]
					[background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
					[background-size:35px_35px]
				"
			/>

			{/* Decorative number */}

			<div
				aria-hidden="true"
				className={`
					pointer-events-none
					absolute -bottom-12 -right-3
					select-none
					font-display
					text-[180px]
					font-bold
					leading-none
					tracking-[-0.1em]
					transition-transform
					duration-700
					group-hover:-translate-y-3
					${
						isFeatured
							? 'text-brand/[0.075]'
							: 'text-white/[0.025]'
					}
				`}
			>
				{String(index + 1).padStart(2, '0')}
			</div>

			{/* Ambient lighting */}

			{isFeatured && (
				<div
					aria-hidden="true"
					className="
						pointer-events-none
						absolute -right-20 -top-24
						h-72 w-72
						rounded-full
						bg-brand/[0.12]
						blur-[90px]
					"
				/>
			)}

			{/* Top row */}

			<div className="relative flex items-start justify-between gap-5">
				<div className="flex items-center gap-3">
					<div
						className={`
							grid h-11 w-11
							place-items-center
							rounded-xl
							border
							font-mono
							text-[13px]
							font-semibold
							${
								isFeatured
									? 'border-brand/30 bg-brand/15 text-brand'
									: 'border-white/10 bg-white/[0.05] text-white/70'
							}
						`}
					>
						{String(index + 1).padStart(2, '0')}
					</div>

					<div>
						<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
							Execution
						</p>

						<p className="mt-1 font-mono text-[10px] uppercase tracking-[0.13em] text-slate-500">
							Module {String(index + 1).padStart(2, '0')}
						</p>
					</div>
				</div>

				<div
					className="
						grid h-10 w-10
						shrink-0 place-items-center
						rounded-full
						border border-white/10
						text-slate-500
						transition-all duration-300
						group-hover:rotate-45
						group-hover:border-brand/30
						group-hover:text-brand
					"
				>
					<ArrowUpRight
						aria-hidden="true"
						className="h-4 w-4"
					/>
				</div>
			</div>

			{/* Module content */}

			<div className="relative mt-auto pt-14">
				<div
					className={`
						mb-6 h-px
						${
							isFeatured
								? 'w-16 bg-brand/60'
								: 'w-10 bg-white/20'
						}
					`}
				/>

				<p
					className={`
						max-w-xl
						font-display
						font-medium
						leading-[1.75]
						tracking-[-0.015em]
						text-white
						${
							isFeatured
								? 'text-[19px] sm:text-[22px]'
								: 'text-[16px] sm:text-[18px]'
						}
					`}
				>
					{paragraph}
				</p>
			</div>

			{/* Bottom animated accent */}

			<div
				aria-hidden="true"
				className="
					absolute bottom-0 left-0
					h-[2px] w-0
					bg-brand
					transition-all duration-700
					group-hover:w-full
				"
			/>
		</article>
	);
}

/* -------------------------------------------------------------------------- */
/* Outcome Statement                                                          */
/* -------------------------------------------------------------------------- */

function OutcomeStatement({ outcome }: { outcome: string }) {
	return (
		<div
			className="
				relative isolate
				mt-5
				overflow-hidden
				rounded-[26px]
				border border-brand/25
				bg-[#17363D]
				px-7 py-10
				sm:px-10
				lg:px-14
				lg:py-14
			"
		>
			{/* Background details */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -right-32 -top-40
					h-[450px] w-[450px]
					rounded-full
					bg-brand/[0.12]
					blur-[110px]
				"
			/>

			<div
				aria-hidden="true"
				className="
					pointer-events-none absolute inset-0
					opacity-[0.045]
					[background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
					[background-size:45px_45px]
				"
			/>

			{/* Content */}

			<div
				className="
					relative
					grid items-center
					gap-10
					lg:grid-cols-[0.4fr_1fr_auto]
					lg:gap-14
				"
			>
				{/* Label */}

				<div>
					<div
						className="
							grid h-14 w-14
							place-items-center
							rounded-2xl
							border border-brand/30
							bg-brand/10
							text-brand
						"
					>
						<Target
							className="h-6 w-6"
							strokeWidth={1.5}
						/>
					</div>

					<p
						className="
							mt-5
							font-mono
							text-[11px]
							font-semibold
							uppercase
							tracking-[0.2em]
							text-brand
						"
					>
						The intended outcome
					</p>
				</div>

				{/* Main statement */}

				<div className="lg:border-l lg:border-white/15 lg:pl-12">
					<p
						className="
							max-w-3xl
							font-display
							text-[clamp(1.4rem,2.3vw,2.7rem)]
							font-semibold
							leading-[1.4]
							tracking-[-0.035em]
							text-white
						"
					>
						{outcome}
					</p>

					<div className="mt-7 flex items-center gap-2.5">
						<Check
							className="h-4 w-4 shrink-0 text-brand"
							strokeWidth={2}
						/>

						<p className="text-[12px] leading-relaxed text-slate-400">
							An approach aligned with your business objectives.
						</p>
					</div>
				</div>

				{/* Decorative arrow */}

				<div
					aria-hidden="true"
					className="
						hidden h-16 w-16
						place-items-center
						rounded-full
						border border-brand/30
						text-brand
						lg:grid
					"
				>
					<MoveUpRight className="h-6 w-6" strokeWidth={1.4} />
				</div>
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Solution Approach                                                          */
/* -------------------------------------------------------------------------- */

export function SolutionApproach({
	solution,
}: {
	solution: Solution;
}) {
	return (
		<section
			id="solution-approach"
			aria-labelledby="solution-approach-heading"
			className="
				relative isolate
				overflow-hidden
				bg-navy
				py-20
				text-white
				sm:py-20
				lg:py-20
			"
		>
			{/* Background atmosphere */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -left-64 top-0
					h-[650px] w-[650px]
					rounded-full
					bg-brand/[0.035]
					blur-[130px]
				"
			/>

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -right-64 bottom-0
					h-[600px] w-[600px]
					rounded-full
					bg-brand/[0.025]
					blur-[130px]
				"
			/>

			<div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
				{/* -------------------------------------------------------------- */}
				{/* Introduction                                                   */}
				{/* -------------------------------------------------------------- */}

				{/* Minimal Approach Introduction */}

<div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
	{/* Eyebrow */}
	<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
		The Codelaro Approach
	</p>

	{/* Heading */}
	<h2
	id="solution-approach-heading"
	className="
		mt-6 font-display
		text-[2.2rem] font-semibold
		leading-[1.08]
		tracking-[-0.025em]
		text-white
		sm:text-4xl
		md:text-[3rem]
	"
>
	Designed to{' '}
	<span className="text-slate-400">
		Move You Forward.
	</span>
</h2>

	{/* Description */}
	<p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.85] text-slate-400 sm:text-[17px]">
		Our approach combines strategy, engineering and focused
		execution to deliver solutions tailored to your business goals.
	</p>
</div>
				{/* -------------------------------------------------------------- */}
				{/* Blueprint top bar                                              */}
				{/* -------------------------------------------------------------- */}

				<div
					className="
						mb-5
						flex flex-wrap
						items-center
						justify-between
						gap-4
						border-y border-white/10
						py-5
					"
				>
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-1.5">
							<span className="h-2 w-2 rounded-full bg-brand" />
							<span className="h-2 w-2 rounded-full bg-brand/40" />
							<span className="h-2 w-2 rounded-full bg-brand/15" />
						</div>

						<p
							className="
								font-mono
								text-[10px]
								font-semibold
								uppercase
								tracking-[0.18em]
								text-slate-400
							"
						>
							Our execution framework
						</p>
					</div>

					<p
						className="
							font-mono
							text-[10px]
							uppercase
							tracking-[0.14em]
							text-slate-500
						"
					>
						{String(solution.approach.length).padStart(2, '0')}{' '}
						Execution modules
					</p>
				</div>

				{/* -------------------------------------------------------------- */}
				{/* Asymmetric execution grid                                      */}
				{/* -------------------------------------------------------------- */}

				<div className="grid gap-5 lg:grid-cols-12">
					{solution.approach.map((paragraph, index) => {
						/*
						 * Alternate between large and smaller modules.
						 * Keeps the layout flexible regardless of
						 * the number of approach paragraphs.
						 */

						const isFeatured = index % 4 === 0 || index % 4 === 3;

						return (
							<ExecutionModule
								key={index}
								paragraph={paragraph}
								index={index}
								isFeatured={isFeatured}
							/>
						);
					})}
				</div>

				{/* -------------------------------------------------------------- */}
				{/* Outcome banner                                                 */}
				{/* -------------------------------------------------------------- */}

				<OutcomeStatement outcome={solution.outcome} />

				{/* -------------------------------------------------------------- */}
				{/* Bottom statement                                               */}
				{/* -------------------------------------------------------------- */}

				<div
					className="
						mt-10
						flex flex-wrap
						items-center
						justify-between
						gap-5
						border-t border-white/10
						pt-7
					"
				>
					<p
						className="
							font-mono
							text-[10px]
							font-medium
							uppercase
							tracking-[0.17em]
							text-slate-500
						"
					>
						Codelaro / Code. Launch. Grow.
					</p>

					<div className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-brand" />

						<p className="text-[12px] font-medium text-slate-400">
							Thoughtful strategy. Purposeful execution.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}