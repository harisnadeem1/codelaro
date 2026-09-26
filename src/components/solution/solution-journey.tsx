import { ArrowUpRight, Flag } from 'lucide-react';
import type { Solution } from '@/data/solutions';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type JourneyStep = Solution['journey'][number];

/* -------------------------------------------------------------------------- */
/* Journey Milestone                                                          */
/* -------------------------------------------------------------------------- */

function JourneyMilestone({
	step,
	index,
}: {
	step: JourneyStep;
	index: number;
}) {
	const isEven = index % 2 === 0;

	return (
		<li
			className={`
				group relative flex min-w-0 flex-col
				${isEven ? 'lg:flex-col-reverse' : ''}
			`}
		>
			{/* Milestone card */}

			<div
				className="
					relative
					overflow-hidden
					rounded-[20px]
					border border-white/10
					bg-[#19263B]
					p-6
					shadow-[0_15px_45px_-25px_rgba(0,0,0,0.25)]
					transition-all duration-500
					hover:-translate-y-1
					hover:border-brand/40
					hover:bg-[#1C2B40]
					hover:shadow-[0_20px_50px_-25px_rgba(24,188,183,0.15)]
					motion-reduce:transform-none
					sm:p-7
				"
			>
				{/* Header */}

				<div className="flex items-center justify-between gap-4">
					<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-brand">
						Milestone {String(index + 1).padStart(2, '0')}
					</span>

					<ArrowUpRight
						aria-hidden="true"
						className="
							h-4 w-4
							text-slate-500
							transition-all duration-300
							group-hover:-translate-y-0.5
							group-hover:translate-x-0.5
							group-hover:text-brand
						"
					/>
				</div>

				{/* Title */}

				<h3
					className="
						mt-5
						font-display
						text-[19px]
						font-semibold
						leading-[1.3]
						tracking-[-0.025em]
						text-white
					"
				>
					{step.title}
				</h3>

				{/* Description */}

				<p
					className="
						mt-3
						text-[13px]
						leading-[1.85]
						text-slate-400
						sm:text-[14px]
					"
				>
					{step.description}
				</p>

				{/* Bottom accent */}

				<div
					aria-hidden="true"
					className="
						mt-7
						h-[2px] w-10
						rounded-full
						bg-brand/40
						transition-all duration-500
						group-hover:w-20
						group-hover:bg-brand
					"
				/>
			</div>

			{/* Desktop timeline connector */}

			<div
				className="
					relative hidden h-24
					items-center justify-center
					lg:flex
				"
				aria-hidden="true"
			>
				{/* Vertical connector */}

				<div
					className="
						absolute left-1/2 top-0
						h-full w-px
						-translate-x-1/2
						bg-gradient-to-b
						from-brand/10
						via-brand/40
						to-brand/10
					"
				/>

				{/* Milestone node */}

				<div
					className="
						relative z-10
						grid h-12 w-12
						place-items-center
						rounded-full
						border-[5px] border-navy
						bg-brand
						shadow-[0_0_0_1px_rgba(24,188,183,0.3),0_8px_25px_rgba(24,188,183,0.15)]
						transition-transform duration-300
						group-hover:scale-110
					"
				>
					<span className="font-mono text-[12px] font-bold text-navy">
						{step.phase}
					</span>
				</div>
			</div>

			{/* Mobile milestone */}

			<div
				className="
					absolute -left-[54px] top-1
					hidden h-9 w-9
					place-items-center
					rounded-full
					border-4 border-navy
					bg-brand text-navy
					max-lg:grid
				"
				aria-hidden="true"
			>
				<span className="font-mono text-[10px] font-bold">
					{step.phase}
				</span>
			</div>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Solution Journey                                                           */
/* -------------------------------------------------------------------------- */

export function SolutionJourney({
	solution,
}: {
	solution: Solution;
}) {
	return (
		<section
			id="solution-journey"
			aria-labelledby="solution-journey-heading"
			className="
				relative isolate overflow-hidden
				bg-navy
				py-20 text-white
				sm:py-20
				lg:py-20
			"
		>
			{/* Subtle ambient lighting */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -right-40 top-0
					h-[500px] w-[500px]
					rounded-full
					bg-brand/[0.05]
					blur-[120px]
				"
			/>

			<div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* ---------------------------------------------------------- */}
				{/* Section introduction                                       */}
				{/* ---------------------------------------------------------- */}

				<div className="mx-auto max-w-3xl text-center">
					<p
						className="
							font-mono text-[11px]
							font-semibold uppercase
							tracking-[0.22em]
							text-brand
						"
					>
						Implementation journey
					</p>

					<h2
						id="solution-journey-heading"
						className="
							mt-6 font-display
							text-[2.2rem] font-semibold
							leading-[1.08]
							tracking-[-0.025em]
							text-white
							md:text-[3rem]
						"
					>
						From strategy to{' '}
						<span className="text-slate-400">
							successful delivery.
						</span>
					</h2>

					<p
						className="
							mx-auto mt-6 max-w-xl
							text-[15px] leading-[1.85]
							text-slate-400
							sm:text-[17px]
						"
					>
						A clear implementation process that transforms
						your objectives into practical, scalable
						and measurable results.
					</p>
				</div>

				{/* ---------------------------------------------------------- */}
				{/* Desktop horizontal roadmap                                 */}
				{/* ---------------------------------------------------------- */}

				<div className="relative mt-20 hidden lg:block">

					{/* Central timeline */}

					<div
						aria-hidden="true"
						className="
							absolute inset-x-0 top-1/2
							h-px -translate-y-1/2
							bg-gradient-to-r
							from-brand/10
							via-brand/50
							to-brand/10
						"
					/>

					{/* Journey steps */}

					<ol
						className="relative grid gap-5 xl:gap-7"
						style={{
							gridTemplateColumns: `repeat(${solution.journey.length}, minmax(0, 1fr))`,
						}}
					>
						{solution.journey.map((step, index) => (
							<JourneyMilestone
								key={`${step.phase}-${index}`}
								step={step}
								index={index}
							/>
						))}
					</ol>
				</div>

				{/* ---------------------------------------------------------- */}
				{/* Mobile and tablet roadmap                                  */}
				{/* ---------------------------------------------------------- */}

				<div className="relative mx-auto mt-14 max-w-2xl pl-14 lg:hidden">

					{/* Vertical timeline */}

					<div
						aria-hidden="true"
						className="
							absolute bottom-8
							left-[17px] top-5
							w-px
							bg-gradient-to-b
							from-brand/60
							via-brand/30
							to-transparent
						"
					/>

					<ol className="space-y-5">
						{solution.journey.map((step, index) => (
							<JourneyMilestone
								key={`${step.phase}-${index}`}
								step={step}
								index={index}
							/>
						))}
					</ol>
				</div>

				{/* ---------------------------------------------------------- */}
				{/* Completion statement                                       */}
				{/* ---------------------------------------------------------- */}

				<div
					className="
						mx-auto mt-16
						flex max-w-2xl
						flex-col items-center
						gap-3 text-center
						lg:mt-24
					"
				>
					<div
						className="
							grid h-11 w-11
							place-items-center
							rounded-full
							border border-brand/25
							bg-brand/10
							text-brand
						"
					>
						<Flag
							aria-hidden="true"
							className="h-5 w-5"
							strokeWidth={1.7}
						/>
					</div>

					<p className="font-display text-[15px] font-semibold text-white">
						From the first conversation to the final delivery.
					</p>

					<p className="text-[13px] leading-relaxed text-slate-400">
						Every milestone is aligned with your business objectives.
					</p>
				</div>

			</div>
		</section>
	);
}