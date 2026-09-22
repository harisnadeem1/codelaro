import {
	ArrowDownRight,
	ArrowRight,
	Braces,
	Rocket,
	TrendingUp,
} from 'lucide-react';

import {
	PROCESS_STEPS,
	type ProcessStep,
} from '@/data/process';

import { cn } from '@/lib/utils';

/* =========================================================
   Types
========================================================= */

type Phase = ProcessStep['phase'];

type PhaseConfig = {
	label: string;
	kicker: string;
	title: string;
	description: string;
	icon: typeof Braces;
};

/* =========================================================
   Phase content
========================================================= */

const PHASES: Record<Phase, PhaseConfig> = {
	code: {
		label: 'Code',
		kicker: 'Shape the right product',
		title: 'Turn the idea into a strong foundation.',
		description:
			'We remove uncertainty before development gets expensive — understanding the problem, defining the direction and shaping the experience.',
		icon: Braces,
	},

	launch: {
		label: 'Launch',
		kicker: 'Build with confidence',
		title: 'Move from direction to a product ready for the real world.',
		description:
			'We engineer, refine and release with quality built into the process, so launch feels deliberate rather than rushed.',
		icon: Rocket,
	},

	grow: {
		label: 'Grow',
		kicker: 'Keep moving forward',
		title: 'Launch is where the next chapter begins.',
		description:
			'Real products evolve. We use what happens after launch to improve, adapt and help the product grow alongside your business.',
		icon: TrendingUp,
	},
};

const PHASE_ORDER: Phase[] = [
	'code',
	'launch',
	'grow',
];

/* =========================================================
   Individual process item
========================================================= */

function ProcessItem({
	step,
}: {
	step: ProcessStep;
}) {
	return (
		<div
			className="
				group relative
				border-t border-white/10
				py-5
				first:border-t-0
				first:pt-0
				last:pb-0
			"
		>
			<div
				className="
					grid gap-3
					sm:grid-cols-[minmax(130px,0.42fr)_1fr]
					sm:gap-8
				"
			>
				<h3
					className="
						font-display
						text-[1.05rem]
						font-semibold
						tracking-[-0.02em]
						text-white
						transition-colors
						duration-300
						group-hover:text-brand
					"
				>
					{step.title}
				</h3>

				<p
					className="
						max-w-xl
						text-[15px]
						leading-6
						text-slate-400
					"
				>
					{step.description}
				</p>
			</div>
		</div>
	);
}

/* =========================================================
   Code phase
========================================================= */

function CodePhase() {
	const steps = PROCESS_STEPS.filter(
		(step) => step.phase === 'code',
	);

	const phase = PHASES.code;
	const Icon = phase.icon;

	return (
		<article
			aria-labelledby="process-code-heading"
			className="
				relative
				overflow-hidden
				rounded-[2rem]
				border border-white/[0.08]
				bg-white/[0.035]
				px-6 py-8
				shadow-[0_30px_80px_-45px_rgba(0,0,0,0.55)]
				backdrop-blur-sm
				sm:px-8 sm:py-10
				lg:px-10 lg:py-12
			"
		>
			{/* Decorative glow */}
			<div
				aria-hidden="true"
				className="
					absolute
					-right-24 -top-24
					h-80 w-80
					rounded-full
					bg-brand/[0.08]
					blur-[80px]
				"
			/>

			{/* Architectural corner */}
			<div
				aria-hidden="true"
				className="
					absolute
					bottom-0 right-0
					h-48 w-48
					border-l border-t
					border-white/[0.04]
				"
			/>

			<div
				className="
					relative z-10
					grid gap-12
					lg:grid-cols-12
					lg:gap-16
				"
			>
				{/* Phase introduction */}
				<div className="lg:col-span-5">
					<div
						className="
							flex items-center
							justify-between
							gap-5
						"
					>
						<span
							className="
								grid h-11 w-11
								place-items-center
								rounded-xl
								border border-white/10
								bg-white/[0.05]
								text-brand
							"
						>
							<Icon
								className="h-5 w-5"
								strokeWidth={1.7}
								aria-hidden="true"
							/>
						</span>

						<span
							className="
								font-mono
								text-[12px]
								font-medium uppercase
								tracking-[0.2em]
								text-brand
							"
						>
							{phase.kicker}
						</span>
					</div>

					<p
						className="
							mt-10
							font-display
							text-[3rem]
							font-semibold
							leading-none
							tracking-[-0.055em]
							text-white
							sm:text-[3.75rem]
							lg:text-[4.5rem]
						"
					>
						{phase.label}
						<span className="text-brand">.</span>
					</p>

					<h3
						id="process-code-heading"
						className="
							mt-5 max-w-md
							font-display
							text-xl
							font-semibold
							leading-snug
							tracking-[-0.025em]
							text-white
							sm:text-2xl
						"
					>
						{phase.title}
					</h3>

					<p
						className="
							mt-4 max-w-md
							text-[16px]
							leading-6
							text-slate-400
						"
					>
						{phase.description}
					</p>
				</div>

				{/* Code steps */}
				<div
					className="
						lg:col-span-7
						lg:border-l
						lg:border-white/10
						lg:pl-10
					"
				>
					{steps.map((step) => (
						<ProcessItem
							key={step.title}
							step={step}
						/>
					))}
				</div>
			</div>
		</article>
	);
}

/* =========================================================
   Launch phase
========================================================= */

function LaunchPhase() {
	const steps = PROCESS_STEPS.filter(
		(step) => step.phase === 'launch',
	);

	const phase = PHASES.launch;
	const Icon = phase.icon;

	return (
		<article
			aria-labelledby="process-launch-heading"
			className="
				relative
				grid gap-10
				border-b border-white/10
				px-1 py-14
				md:grid-cols-12
				md:gap-12
				lg:py-20
			"
		>
			{/* Phase label */}
			<div className="md:col-span-4">
				<div className="flex items-center gap-4">
					<span
						className="
							grid h-10 w-10
							place-items-center
							rounded-full
							border border-white/10
							bg-white/[0.05]
							text-brand
						"
					>
						<Icon
							className="h-[18px] w-[18px]"
							strokeWidth={1.7}
							aria-hidden="true"
						/>
					</span>

					<span
						className="
							text-[12px]
							font-medium uppercase
							tracking-[0.2em]
							text-slate-400
						"
					>
						{phase.kicker}
					</span>
				</div>

				<p
					className="
						mt-8
						font-display
						text-[3rem]
						font-semibold
						leading-none
						tracking-[-0.055em]
						text-white
						sm:text-[3.75rem]
						lg:text-[4.5rem]
					"
				>
					{phase.label}
					<span className="text-brand">.</span>
				</p>
			</div>

			{/* Main content */}
			<div className="md:col-span-8">
				<h3
					id="process-launch-heading"
					className="
						max-w-2xl
						font-display
						text-2xl
						font-semibold
						leading-tight
						tracking-[-0.035em]
						text-white
						sm:text-3xl
					"
				>
					{phase.title}
				</h3>

				<p
					className="
						mt-4 max-w-2xl
						text-[16px]
						leading-6
						text-slate-400
					"
				>
					{phase.description}
				</p>

				{/* Launch steps */}
				<div
					className="
						mt-9
						grid gap-x-10 gap-y-6
						sm:grid-cols-2
					"
				>
					{steps.map((step) => (
						<div
							key={step.title}
							className="
								group
								border-t border-white/10
								pt-5
							"
						>
							<div
								className="
									flex items-start
									justify-between
									gap-4
								"
							>
								<h3
									className="
										font-display
										text-lg
										font-semibold
										tracking-[-0.02em]
										text-white
										transition-colors
										duration-300
										group-hover:text-brand
									"
								>
									{step.title}
								</h3>

								<ArrowDownRight
									className="
										mt-1 h-4 w-4
										shrink-0
										text-slate-500
										transition-all
										duration-300
										group-hover:translate-x-0.5
										group-hover:translate-y-0.5
										group-hover:text-brand
									"
									aria-hidden="true"
								/>
							</div>

							<p
								className="
									mt-3
									text-[15px]
									leading-6
									text-slate-400
								"
							>
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</article>
	);
}

/* =========================================================
   Grow phase
========================================================= */

function GrowPhase() {
	const step = PROCESS_STEPS.find(
		(item) => item.phase === 'grow',
	);

	const phase = PHASES.grow;
	const Icon = phase.icon;

	if (!step) return null;

	return (
		<article
			aria-labelledby="process-grow-heading"
			className="
				relative
				grid gap-10
				overflow-hidden
				py-14
				md:grid-cols-12
				md:items-end
				md:gap-12
				lg:py-20
			"
		>
			{/* Main statement */}
			<div className="md:col-span-8">
				<div className="flex items-center gap-4">
					<span
						className="
							grid h-10 w-10
							place-items-center
							rounded-full
							border border-brand/20
							bg-brand/[0.07]
							text-brand
						"
					>
						<Icon
							className="h-[18px] w-[18px]"
							strokeWidth={1.7}
							aria-hidden="true"
						/>
					</span>

					<span
						className="
							text-[12px]
							font-medium uppercase
							tracking-[0.2em]
							text-brand
						"
					>
						{phase.kicker}
					</span>
				</div>

				<p
					className="
						mt-8
						font-display
						text-[3rem]
						font-semibold
						leading-none
						tracking-[-0.055em]
						text-white
						sm:text-[3.75rem]
						lg:text-[4.5rem]
					"
				>
					{phase.label}
					<span className="text-brand">.</span>
				</p>

				<h3
					id="process-grow-heading"
					className="
						mt-5 max-w-2xl
						font-display
						text-2xl
						font-semibold
						leading-tight
						tracking-[-0.035em]
						text-white
						sm:text-3xl
					"
				>
					{phase.title}
				</h3>
			</div>

			{/* Grow description */}
			<div
				className="
					md:col-span-4
					md:border-l
					md:border-white/10
					md:pl-8
				"
			>
				<p
					className="
						text-[15px]
						leading-7
						text-slate-400
					"
				>
					{step.description}
				</p>

				<div
					className="
						mt-7
						flex items-center
						gap-3
						text-[13px]
						font-semibold
						text-white
					"
				>
					<span>
						Build. Learn. Improve.
					</span>

					<ArrowRight
						className="h-4 w-4 text-brand"
						aria-hidden="true"
					/>
				</div>
			</div>
		</article>
	);
}

/* =========================================================
   Process section
========================================================= */

export function Process() {
	return (
		<section
			id="process"
			aria-labelledby="process-heading"
			className="
				relative
				scroll-mt-24
				overflow-hidden
				bg-navy
			"
		>
			{/* =====================================================
			    Background
			===================================================== */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
					overflow-hidden
				"
			>
				{/* Dark blueprint */}
				<div
					className="
						absolute inset-0
						bg-blueprint-grid-dark
						opacity-50
						[mask-image:linear-gradient(to_bottom,black,transparent_90%)]
					"
				/>

				{/* Left glow */}
				<div
					className="
						absolute
						-left-40 top-1/3
						h-96 w-96
						rounded-full
						bg-brand/[0.07]
						blur-[100px]
					"
				/>

				{/* Right glow */}
				<div
					className="
						absolute
						-right-48 bottom-20
						h-[28rem] w-[28rem]
						rounded-full
						bg-brand/[0.045]
						blur-[120px]
					"
				/>

				{/* Subtle large brand word */}
				<p
					className="
						absolute
						-right-8 top-10
						select-none
						font-display
						text-[8rem]
						font-bold
						leading-none
						tracking-[-0.07em]
						text-white/[0.018]
						lg:text-[13rem]
					"
				>
					BUILD
				</p>
			</div>

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5
					py-20
					sm:px-8
					md:py-24
					lg:py-28
				"
			>
				{/* =================================================
				    Introduction
				================================================= */}

				<div
					className="
						grid gap-8
						lg:grid-cols-12
						lg:items-end
						lg:gap-12
					"
				>
					<div className="lg:col-span-7">
						<div className="flex items-center gap-3">
							<span
								aria-hidden="true"
								className="h-px w-8 bg-brand"
							/>

							<p
								className="
									text-[11px]
									font-bold uppercase
									tracking-[0.22em]
									text-brand
								"
							>
								How we work
							</p>
						</div>

						<h2
							id="process-heading"
							className="
								mt-5 max-w-3xl
								font-display
								text-[2.5rem]
								font-semibold
								leading-[1.02]
								tracking-[-0.045em]
								text-white
								sm:text-[3rem]
								md:text-[3.4rem]
								lg:text-[3.75rem]
							"
						>
							From an idea worth building
							<span className="text-slate-400">
								{' '}
								to a product ready to grow.
							</span>
						</h2>
					</div>

					<div
						className="
							lg:col-span-5
							lg:pb-1
						"
					>
						<p
							className="
								max-w-lg
								text-[15px]
								leading-7
								text-slate-400
								sm:text-base
							"
						>
							Our process brings strategy,
							design, software engineering and
							continuous improvement together
							without adding unnecessary
							complexity.
						</p>
					</div>
				</div>

				{/* =================================================
				    Phase navigation
				================================================= */}

				<div
					className="
						mt-12
						flex flex-wrap
						items-center
						gap-x-4 gap-y-2
						border-t border-white/10
						pt-5
						md:mt-16
					"
				>
					{PHASE_ORDER.map((phase, index) => (
						<div
							key={phase}
							className="flex items-center gap-4"
						>
							<span
								className={cn(
									`
										text-[13px]
										font-semibold uppercase
										tracking-[0.18em]
									`,
									index === 0
										? 'text-brand'
										: 'text-slate-400',
								)}
							>
								{PHASES[phase].label}
							</span>

							{index <
								PHASE_ORDER.length - 1 && (
								<ArrowRight
									className="
										h-3.5 w-3.5
										text-brand/60
									"
									aria-hidden="true"
								/>
							)}
						</div>
					))}
				</div>

				{/* =================================================
				    Process phases
				================================================= */}

				<div className="mt-8">
					<CodePhase />

					<LaunchPhase />

					<GrowPhase />
				</div>

				{/* =================================================
				    Closing brand statement
				================================================= */}

				<div
					className="
						flex flex-col
						gap-5
						border-t border-white/10
						pt-8
						sm:flex-row
						sm:items-center
						sm:justify-between
					"
				>
					<p
						className="
							text-[12px]
							font-medium
							text-slate-500
						"
					>
						One connected process.
						One accountable technology partner.
					</p>

					<div
						className="
							flex items-center
							gap-3
							font-display
							text-lg
							font-semibold
							tracking-[-0.02em]
							text-white
						"
					>
						<span>
							Code<span className="text-brand">.</span>
						</span>

						<span>
							Launch<span className="text-brand">.</span>
						</span>

						<span>
							Grow<span className="text-brand">.</span>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}