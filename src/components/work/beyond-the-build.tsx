import { Link } from 'react-router';
import {
	ArrowUpRight,
	ArrowRight,
	Braces,
	Check,
	CircleDot,
	GitBranch,
	Layers3,
	MousePointer2,
	MoveUpRight,
	Workflow,
	Zap,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Visual 01 — Product Thinking                                               */
/* -------------------------------------------------------------------------- */

function ProductVisual() {
	return (
		<div
			aria-hidden="true"
			className="relative flex h-[145px] w-full items-center justify-center overflow-hidden px-3"
		>
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-25" />

			{/* Responsive illustration container */}
			<div className="relative aspect-[240/120] w-full max-w-[240px]">
				{/* SVG Connections */}
				<svg
					className="pointer-events-none absolute inset-0 h-full w-full"
					viewBox="0 0 240 120"
					preserveAspectRatio="xMidYMid meet"
					fill="none"
					aria-hidden="true"
				>
					<path
						d="M45 30 H85 Q95 30 100 42 L110 60"
						stroke="#18BCB7"
						strokeWidth="1.5"
						strokeDasharray="4 4"
						strokeOpacity=".65"
					/>

					<path
						d="M45 90 H85 Q95 90 100 78 L110 60"
						stroke="#18BCB7"
						strokeWidth="1.5"
						strokeDasharray="4 4"
						strokeOpacity=".65"
					/>

					<path
						d="M110 60 H185"
						stroke="#18BCB7"
						strokeWidth="1.5"
						strokeOpacity=".75"
					/>

					<circle cx="110" cy="60" r="3" fill="#18BCB7" />

					<circle
						cx="155"
						cy="60"
						r="2.5"
						fill="#18BCB7"
						fillOpacity=".65"
					/>
				</svg>

				{/* First input node */}
				<div className="absolute left-[18.75%] top-[25%] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
					<CircleDot className="h-4 w-4 text-slate-500" />
				</div>

				{/* Second input node */}
				<div className="absolute left-[18.75%] top-[75%] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
					<GitBranch className="h-4 w-4 text-slate-500" />
				</div>

				{/* Central strategy node */}
				<div className="absolute left-[45.83%] top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 shadow-[0_0_30px_rgba(24,188,183,0.12)]">
					<Layers3 className="h-5 w-5 text-brand-700" />
				</div>

				{/* Output node */}
				<div className="absolute left-[77.08%] top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand/25 bg-white shadow-sm">
					<Check className="h-4 w-4 text-brand" />
				</div>

				{/* Labels */}
				<span className="absolute left-[45.83%] top-[80%] -translate-x-1/2 whitespace-nowrap font-mono text-[9px] font-medium uppercase tracking-wider text-slate-400">
					Strategy
				</span>

				<span className="absolute left-[77.08%] top-[80%] -translate-x-1/2 whitespace-nowrap font-mono text-[9px] font-medium uppercase tracking-wider text-brand-700">
					Aligned
				</span>
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Visual 02 — Engineering                                                    */
/* -------------------------------------------------------------------------- */

function EngineeringVisual() {
	const codeLines = [
		{
			number: '01',
			content: (
				<>
					<span className="text-brand-700">const</span>{' '}
					<span className="text-navy">solution</span>{' '}
					<span className="text-slate-400">= {'{'}</span>
				</>
			),
		},
		{
			number: '02',
			content: (
				<>
					<span className="text-slate-500">scalable:</span>{' '}
					<span className="text-brand-700">true,</span>
				</>
			),
			indent: true,
		},
		{
			number: '03',
			content: (
				<>
					<span className="text-slate-500">modular:</span>{' '}
					<span className="text-brand-700">true,</span>
				</>
			),
			indent: true,
		},
		{
			number: '04',
			content: (
				<>
					<span className="text-slate-500">reliable:</span>{' '}
					<span className="text-brand-700">true</span>
				</>
			),
			indent: true,
		},
		{
			number: '05',
			content: (
				<>
					<span className="text-slate-400">{'};'}</span>
					<span className="ml-1 inline-block h-2.5 w-px animate-pulse bg-brand motion-reduce:animate-none" />
				</>
			),
		},
	];

	return (
		<div
			aria-hidden="true"
			className="relative flex h-[145px] w-full items-center justify-center overflow-hidden px-2 sm:px-3"
		>
			{/* Background */}
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-25" />

			<div className="pointer-events-none absolute h-28 w-44 rounded-full bg-brand/[0.07] blur-2xl" />

			{/* Responsive illustration */}
			<div className="relative w-full max-w-[225px]">
				{/* Code editor */}
				<div
					className="
						relative w-full
						overflow-hidden rounded-xl
						border border-slate-200
						bg-white
						shadow-[0_12px_30px_-15px_rgba(15,23,42,0.2)]
						transition-all duration-500
						group-hover:border-brand/25
						group-hover:shadow-[0_16px_35px_-15px_rgba(24,188,183,0.15)]
					"
				>
					{/* Editor toolbar */}
					<div className="flex h-7 items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-3">
						<div className="flex shrink-0 items-center gap-1">
							<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
							<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
							<span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
						</div>

						<div className="flex min-w-0 items-center gap-1">
							<Braces className="h-2.5 w-2.5 shrink-0 text-brand" />

							<span className="truncate font-mono text-[8px] text-slate-400">
								architecture.ts
							</span>
						</div>
					</div>

					{/* Code content */}
					<div className="space-y-1.5 px-3 py-2.5 font-mono text-[9px] leading-[1.25]">
						{codeLines.map((line) => (
							<div
								key={line.number}
								className="flex min-w-0 items-center gap-2 whitespace-nowrap"
							>
								<span className="w-3 shrink-0 select-none text-slate-300">
									{line.number}
								</span>

								<div
									className={`min-w-0 ${
										line.indent ? 'pl-2.5' : ''
									}`}
								>
									{line.content}
								</div>
							</div>
						))}
					</div>

					{/* Editor status bar */}
					<div className="flex h-5 items-center justify-between border-t border-slate-100 bg-[#FBFCFD] px-3">
						<div className="flex items-center gap-1">
							<span className="h-1 w-1 rounded-full bg-brand" />

							<span className="font-mono text-[8px] text-slate-400">
								TypeScript
							</span>
						</div>

						<div className="flex items-center gap-1">
							<span className="h-1 w-1 rounded-full bg-brand" />

							<span className="font-mono text-[8px] text-brand-700">
								Ready
							</span>
						</div>
					</div>
				</div>

				{/* Subtle decorative accent */}
				<div
					className="
						pointer-events-none absolute
						-bottom-1.5 -right-1.5
						h-7 w-7
						rounded-br-xl
						border-b border-r border-brand/35
					"
				/>
			</div>
		</div>
	);
}
/* -------------------------------------------------------------------------- */
/* Visual 03 — User Experience                                                */
/* -------------------------------------------------------------------------- */

function ExperienceVisual() {
	return (
		<div
			aria-hidden="true"
			className="relative flex h-[145px] w-full items-center justify-center overflow-hidden px-2 sm:px-3"
		>
			{/* Background */}
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-25" />

			<div className="pointer-events-none absolute h-28 w-40 rounded-full bg-brand/[0.07] blur-2xl" />

			{/* Responsive visual container */}
			<div className="relative w-full max-w-[225px]">
				{/* Browser preview */}
				<div
					className="
						group/preview relative w-full
						overflow-hidden rounded-xl
						border border-slate-200
						bg-white
						shadow-[0_12px_30px_-15px_rgba(15,23,42,0.2)]
						transition-all duration-500
						group-hover:border-brand/25
						group-hover:shadow-[0_16px_35px_-15px_rgba(24,188,183,0.15)]
					"
				>
					{/* Browser toolbar */}
					<div className="flex h-7 items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-3">
						<div className="flex items-center gap-1">
							<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
							<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
							<span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
						</div>

						<div className="flex items-center gap-1 rounded border border-slate-200 bg-white px-2 py-0.5">
							<span className="h-1 w-1 rounded-full bg-brand" />
							<span className="font-mono text-[7px] text-slate-400">
								design.preview
							</span>
						</div>
					</div>

					{/* Website preview */}
					<div className="p-3">
						{/* Mini navigation */}
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-1.5">
								<div className="grid h-4 w-4 place-items-center rounded bg-brand/10">
									<Layers3 className="h-2.5 w-2.5 text-brand" />
								</div>

								<div className="h-1.5 w-9 rounded-full bg-navy/70" />
							</div>

							<div className="flex items-center gap-1.5">
								<span className="h-1 w-4 rounded bg-slate-200" />
								<span className="h-1 w-3 rounded bg-slate-200" />
								<span className="h-2.5 w-6 rounded-sm bg-brand/70" />
							</div>
						</div>

						{/* Hero layout */}
						<div className="mt-3 grid grid-cols-[1.15fr_0.85fr] gap-3">
							{/* Content */}
							<div className="min-w-0 space-y-1.5 pt-1">
								<div className="h-1 w-9 rounded-full bg-brand/70" />

								<div className="h-2 w-[94%] rounded bg-navy/80" />
								<div className="h-2 w-[72%] rounded bg-navy/80" />

								<div className="space-y-1 pt-1">
									<div className="h-1 w-full rounded bg-slate-200" />
									<div className="h-1 w-[87%] rounded bg-slate-200" />
									<div className="h-1 w-[65%] rounded bg-slate-200" />
								</div>

								<div className="pt-1">
									<div className="flex h-4 w-14 items-center justify-center rounded bg-brand shadow-sm">
										<ArrowUpRight className="h-2.5 w-2.5 text-white" />
									</div>
								</div>
							</div>

							{/* Product illustration */}
							<div className="relative flex min-h-[77px] items-center justify-center overflow-hidden rounded-lg border border-brand/10 bg-brand/[0.06]">
								<div className="absolute h-12 w-12 rotate-[-10deg] rounded-xl border border-brand/15 bg-brand/10" />

								<div className="absolute h-9 w-9 rotate-12 rounded-lg border border-brand/25 bg-white shadow-sm" />

								<div className="relative flex h-6 w-6 items-center justify-center rounded-md bg-brand/15">
									<MousePointer2 className="h-3 w-3 text-brand-700" />
								</div>

								<div className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(24,188,183,0.4)]" />
							</div>
						</div>
					</div>

					{/* Preview status */}
					<div className="flex h-6 items-center justify-between border-t border-slate-100 bg-[#FBFCFD] px-3">
						<div className="flex items-center gap-1.5">
							<span className="h-1.5 w-1.5 rounded-full bg-brand" />

							<span className="font-mono text-[8px] text-slate-500">
								Experience preview
							</span>
						</div>

						<span className="font-mono text-[8px] font-medium text-brand-700">
							UI / UX
						</span>
					</div>
				</div>

				{/* Decorative corner */}
				<div className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-7 w-7 rounded-br-xl border-b border-r border-brand/35" />
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Visual 04 — Built to Evolve                                                */
/* -------------------------------------------------------------------------- */

function EvolutionVisual() {
	return (
		<div
			aria-hidden="true"
			className="relative flex h-[145px] items-center justify-center overflow-hidden"
		>
			<div className="absolute inset-0 bg-blueprint-grid opacity-25" />

			<div className="relative flex w-[220px] items-center justify-center">
				{/* Connecting line */}
				<div className="absolute left-5 right-5 top-[33px] h-px bg-gradient-to-r from-slate-200 via-brand/50 to-brand" />

				{[
					{
						number: '01',
						label: 'Build',
						active: false,
					},
					{
						number: '02',
						label: 'Improve',
						active: false,
					},
					{
						number: '03',
						label: 'Scale',
						active: true,
					},
				].map((step) => (
					<div
						key={step.number}
						className="relative z-10 flex flex-1 flex-col items-center"
					>
						<div
							className={`
								flex h-11 w-11
								items-center justify-center
								rounded-xl border
								font-mono text-[11px]
								font-semibold
								transition-all duration-300
								${
									step.active
										? 'border-brand bg-brand text-white shadow-[0_0_25px_rgba(24,188,183,0.20)]'
										: 'border-slate-200 bg-white text-slate-500'
								}
							`}
						>
							{step.active ? (
								<MoveUpRight className="h-4 w-4" />
							) : (
								step.number
							)}
						</div>

						<span
							className={`mt-3 font-mono text-[10px] ${
								step.active
									? 'font-semibold text-brand-700'
									: 'text-slate-400'
							}`}
						>
							{step.label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Feature Data                                                               */
/* -------------------------------------------------------------------------- */

const FEATURES = [
	{
		number: '01',
		tag: 'STRATEGY',
		title: 'Product thinking',
		description:
			'Understanding the business challenge before choosing the technology. Every technical decision should support a meaningful objective.',
		Visual: ProductVisual,
	},
	{
		number: '02',
		tag: 'ENGINEERING',
		title: 'Built with intention',
		description:
			'Thoughtful architecture, maintainable code, and practical engineering decisions that balance immediate needs with future development.',
		Visual: EngineeringVisual,
	},
	{
		number: '03',
		tag: 'EXPERIENCE',
		title: 'Designed for people',
		description:
			'Intuitive interfaces and carefully considered user journeys that turn complex functionality into simple, useful experiences.',
		Visual: ExperienceVisual,
	},
	{
		number: '04',
		tag: 'EVOLUTION',
		title: 'Ready for what’s next',
		description:
			'Flexible foundations that make it easier to improve, extend, and adapt software as business requirements change.',
		Visual: EvolutionVisual,
	},
];

/* -------------------------------------------------------------------------- */
/* Feature Card                                                               */
/* -------------------------------------------------------------------------- */

function FeatureCard({
	feature,
}: {
	feature: (typeof FEATURES)[number];
}) {
	const Visual = feature.Visual;

	return (
		<article
			className="
				group relative flex h-full
				flex-col overflow-hidden
				rounded-[22px]
				border border-slate-200/80
				bg-white
				transition-all duration-500
				hover:-translate-y-1
				hover:border-brand/30
				hover:shadow-[0_20px_55px_-25px_rgba(15,23,42,0.15)]
				sm:rounded-[26px]
			"
		>
			{/* Technical visual */}
			<div className="relative overflow-hidden border-b border-slate-100 bg-[#FBFCFD] px-5 py-5">
				<div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/[0.07] blur-3xl transition-transform duration-700 group-hover:scale-150" />

				<div className="relative flex items-center justify-between">
					<span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-brand-700">
						{feature.tag}
					</span>

					<span className="font-mono text-[10px] text-slate-400">
						/ {feature.number}
					</span>
				</div>

				<div className="relative transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none">
					<Visual />
				</div>
			</div>

			{/* Text */}
			<div className="relative flex flex-1 flex-col p-6 sm:p-7">
				<div className="flex items-start justify-between gap-4">
					<h3 className="font-display text-[19px] font-bold leading-tight tracking-tight text-navy sm:text-[21px]">
						{feature.title}
					</h3>

					<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-brand/20 group-hover:bg-brand/10 group-hover:text-brand">
						<ArrowUpRight className="h-4 w-4" />
					</div>
				</div>

				<p className="mt-3 max-w-sm text-[13px] leading-[1.85] text-slate-500 sm:text-[14px]">
					{feature.description}
				</p>

				<div className="mt-auto pt-7">
					<div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent transition-all duration-500 group-hover:from-brand/40" />
				</div>
			</div>
		</article>
	);
}

/* -------------------------------------------------------------------------- */
/* Beyond the Build                                                           */
/* -------------------------------------------------------------------------- */

export function BeyondTheBuild() {
	return (
		<section
			id="beyond-the-build"
			aria-labelledby="beyond-build-heading"
			className="relative isolate overflow-hidden bg-[#F8FAFC] py-20 sm:py-20 lg:py-20"
		>
			{/* Background */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-30"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -left-48 top-1/3 h-[400px] w-[400px] rounded-full bg-brand/[0.04] blur-[100px]"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-brand/[0.04] blur-[100px]"
			/>

			<div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
				{/* Header */}
				<div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:gap-16">
					<div className="max-w-[720px]">
						<div className="inline-flex items-center gap-2.5">
							<span className="h-1.5 w-1.5 rounded-full bg-brand" />

							<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700 sm:text-xs">
								Behind the Work
							</span>
						</div>

						<h2
							id="beyond-build-heading"
							className="
								mt-5 font-display
								text-[clamp(2rem,3.5vw,3.5rem)]
								font-semibold leading-[1.1]
								tracking-[-0.045em]
								text-navy
							"
						>
							Great software goes
							<br />
							<span className="text-brand">
								beyond the build.
							</span>
						</h2>
					</div>

					<div className="max-w-[490px] lg:pb-1">
						<p className="text-[15px] leading-[1.85] text-slate-500 sm:text-[16px]">
							Behind every successful digital product are
							thoughtful decisions. These four principles guide
							our approach to designing, developing, and
							improving software.
						</p>
					</div>
				</div>

				{/* Feature grid */}
				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5 xl:gap-6">
					{FEATURES.map((feature) => (
						<FeatureCard
							key={feature.number}
							feature={feature}
						/>
					))}
				</div>

				{/* Bottom editorial strip */}
				<div className="mt-12 flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-start gap-3">
						<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand/15 bg-brand/[0.07] text-brand">
							<Workflow className="h-4 w-4" />
						</div>

						<div>
							<p className="font-display text-[14px] font-semibold text-navy">
								Thoughtful engineering. Practical outcomes.
							</p>

							<p className="mt-1 text-[12px] leading-relaxed text-slate-500">
								Explore how our services connect strategy,
								design, and development.
							</p>
						</div>
					</div>

					<Link
						to="/services"
						className="
							group inline-flex shrink-0
							items-center gap-2
							self-start
							font-display text-[13px]
							font-semibold text-navy
							transition-colors duration-300
							hover:text-brand
							sm:self-auto
						"
					>
						Explore our services

						<ArrowUpRight className="h-4 w-4 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</Link>
				</div>
			</div>
		</section>
	);
}