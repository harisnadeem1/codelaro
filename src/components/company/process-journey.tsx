import {
	ArrowDown,
	ArrowUpRight,
	Blocks,
	CheckCheck,
	CircleDot,
	Code2,
	Compass,
	Gauge,
	Layers3,
	Rocket,
	Search,
	ShieldCheck,
	TrendingUp,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Process Content                                                            */
/* -------------------------------------------------------------------------- */

const PHASES = [
	{
		number: '01',
		name: 'Code',
		eyebrow: 'Understand. Design. Engineer.',
		intro:
			'Great software starts long before the first line of code. We combine business discovery, product thinking, thoughtful design, and modern engineering to create the right technical foundation.',
		icon: Code2,
		stages: [
			{
				number: '01',
				title: 'Discover & Strategize',
				description:
					'We start by understanding your business, target audience, project requirements, and the challenges you want to solve. Together, we define priorities, evaluate technical options, establish the project scope, and create a practical development roadmap.',
				activities: [
					'Business goals & requirement discovery',
					'Product strategy & technical planning',
					'Scope, priorities & development roadmap',
				],
				icon: Compass,
			},
			{
				number: '02',
				title: 'Design & Develop',
				description:
					'With a clear direction established, we translate your requirements into intuitive user experiences and reliable software. Our development approach emphasizes maintainable architecture, responsive interfaces, secure integrations, and regular collaboration.',
				activities: [
					'UI/UX design & product architecture',
					'Custom software development',
					'Integrations & iterative implementation',
				],
				icon: Layers3,
			},
		],
		outcome: 'A thoughtfully engineered product ready for validation.',
	},
	{
		number: '02',
		name: 'Launch',
		eyebrow: 'Validate. Refine. Deliver.',
		intro:
			'Building the product is only part of the journey. We focus on validating its functionality, refining the experience, and preparing your software for a carefully managed release.',
		icon: Rocket,
		stages: [
			{
				number: '03',
				title: 'Test & Refine',
				description:
					'Before launch, we evaluate the product against its agreed requirements. Functional testing, usability reviews, performance checks, and issue resolution help us identify improvements and prepare the application for real-world use.',
				activities: [
					'Functional testing & quality assurance',
					'Performance & usability reviews',
					'Issue resolution & release preparation',
				],
				icon: ShieldCheck,
			},
			{
				number: '04',
				title: 'Deploy & Launch',
				description:
					'We prepare the production environment, configure the necessary infrastructure, and coordinate deployment. Our approach includes appropriate release checks, technical handover, and initial monitoring to support a controlled transition.',
				activities: [
					'Production infrastructure & deployment',
					'Release verification & technical handover',
					'Initial monitoring & launch support',
				],
				icon: Rocket,
			},
		],
		outcome: 'A tested digital product deployed and ready for users.',
	},
	{
		number: '03',
		name: 'Grow',
		eyebrow: 'Measure. Improve. Scale.',
		intro:
			'Launching software creates new opportunities to learn. We help businesses evaluate product performance, respond to changing requirements, and make informed improvements as their digital products evolve.',
		icon: TrendingUp,
		stages: [
			{
				number: '05',
				title: 'Measure & Learn',
				description:
					'After launch, we can help assess application performance, collect relevant feedback, and identify opportunities for improvement. These insights provide a clearer understanding of how the product performs and where development efforts can create additional value.',
				activities: [
					'Application performance monitoring',
					'User feedback & product insights',
					'Improvement planning & prioritization',
				],
				icon: Gauge,
			},
			{
				number: '06',
				title: 'Optimize & Scale',
				description:
					'As your business develops, your software may need new capabilities, improved performance, or architectural changes. We support continued product development through targeted enhancements, technical optimization, and scalable engineering.',
				activities: [
					'Performance & architecture optimization',
					'New features & product enhancements',
					'Scalability & ongoing improvements',
				],
				icon: Blocks,
			},
		],
		outcome: 'An evolving product aligned with changing business needs.',
	},
];

/* -------------------------------------------------------------------------- */
/* Individual Development Stage                                               */
/* -------------------------------------------------------------------------- */

type Stage = (typeof PHASES)[number]['stages'][number];

function DevelopmentStage({ stage }: { stage: Stage }) {
	const Icon = stage.icon;

	return (
		<li
			className="
				group relative min-w-0
				border-t border-white/[0.12]
				py-7 sm:py-9 lg:py-10
			"
		>
			{/* Interactive top accent */}
			<span
				aria-hidden="true"
				className="
					absolute left-0 top-0
					h-px w-0 bg-brand
					transition-all duration-500
					group-hover:w-28
				"
			/>

			<div className="flex items-start gap-4 sm:gap-5">
				{/* Step number */}
				<div
					className="
						relative flex h-11 w-11 shrink-0
						items-center justify-center
						rounded-xl
						border border-brand/25
						bg-brand/[0.08]
						sm:h-12 sm:w-12
					"
				>
					<span
						className="
							font-mono text-xs
							font-semibold text-brand
						"
					>
						{stage.number}
					</span>
				</div>

				<div className="min-w-0 flex-1">
					{/* Heading */}
					<div className="flex items-start justify-between gap-3">
						<h4
							className="
								font-display
								text-xl font-semibold
								leading-[1.3]
								tracking-[-0.025em]
								text-white
								sm:text-[23px]
							"
						>
							{stage.title}
						</h4>

						<Icon
							aria-hidden="true"
							strokeWidth={1.5}
							className="
								mt-1 hidden h-5 w-5
								shrink-0 text-brand/55
								transition-colors duration-300
								group-hover:text-brand
								sm:block
							"
						/>
					</div>

					{/* Description */}
					<p
						className="
							mt-4 max-w-[610px]
							text-[14px]
							leading-[1.9]
							text-slate-400
							sm:text-[15px]
						"
					>
						{stage.description}
					</p>

					{/* Stage activities */}
					<div className="mt-6">
						<p
							className="
								mb-3 font-mono text-[10px]
								font-semibold uppercase
								tracking-[0.17em]
								text-brand/80
							"
						>
							Key Activities
						</p>

						<ul className="space-y-2.5">
							{stage.activities.map((activity) => (
								<li
									key={activity}
									className="
										flex items-start gap-2.5
										text-[12px]
										leading-relaxed
										text-slate-300
										sm:text-[13px]
									"
								>
									<span
										aria-hidden="true"
										className="
											mt-[7px] h-1.5 w-1.5
											shrink-0 rounded-full
											bg-brand
										"
									/>

									{activity}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Individual Phase                                                           */
/* -------------------------------------------------------------------------- */

function ProcessPhase({
	phase,
	index,
}: {
	phase: (typeof PHASES)[number];
	index: number;
}) {
	const Icon = phase.icon;

	return (
		<article
			className="
				relative grid
				gap-9
				border-t border-white/[0.12]
				py-12
				sm:py-16
				lg:grid-cols-12
				lg:gap-14
				lg:py-20
				xl:gap-20
			"
		>
			{/* ------------------------------------------------------ */}
			{/* Left: Phase identity                                   */}
			{/* ------------------------------------------------------ */}

			<div className="lg:col-span-5">
				<div className="lg:sticky lg:top-32">
					{/* Phase identifier */}
					<div className="flex items-center gap-3">
						<span
							className="
								font-mono text-[11px]
								font-semibold
								uppercase tracking-[0.2em]
								text-brand
							"
						>
							Phase {phase.number}
						</span>

						<span className="h-px w-12 bg-brand/40" />

						<Icon
							aria-hidden="true"
							strokeWidth={1.6}
							className="h-4 w-4 text-brand"
						/>
					</div>

					{/* Large phase heading */}
					<h3
						className="
							mt-5 font-display
							text-[clamp(3.6rem,6vw,6.5rem)]
							font-bold
							leading-none
							tracking-[-0.07em]
							text-white
						"
					>
						{phase.name}
						<span className="text-brand">.</span>
					</h3>

					<p
						className="
							mt-5 font-mono
							text-[10px] font-semibold
							uppercase
							tracking-[0.2em]
							text-brand
							sm:text-[11px]
						"
					>
						{phase.eyebrow}
					</p>

					{/* Introduction */}
					<p
						className="
							mt-6 max-w-[430px]
							text-[14px]
							leading-[1.9]
							text-slate-400
							sm:text-[16px]
						"
					>
						{phase.intro}
					</p>

					{/* Progress indicator */}
					<div className="mt-9 flex items-center gap-2">
						{PHASES.map((item, itemIndex) => (
							<span
								key={item.number}
								aria-hidden="true"
								className={`
									h-[3px] rounded-full
									transition-colors
									${
										itemIndex <= index
											? 'w-12 bg-brand'
											: 'w-7 bg-white/15'
									}
								`}
							/>
						))}

						<span className="ml-3 font-mono text-[10px] text-slate-500">
							{phase.number} / 03
						</span>
					</div>
				</div>
			</div>

			{/* ------------------------------------------------------ */}
			{/* Right: Detailed stages                                */}
			{/* ------------------------------------------------------ */}

			<div className="min-w-0 lg:col-span-7">
				<p
					className="
						mb-5 font-mono text-[10px]
						font-semibold uppercase
						tracking-[0.2em]
						text-slate-500
					"
				>
					Development Stages
				</p>

				<ol>
					{phase.stages.map((stage) => (
						<DevelopmentStage
							key={stage.number}
							stage={stage}
						/>
					))}
				</ol>

				{/* Phase outcome */}
				<div
					className="
						mt-3 flex items-start gap-4
						rounded-2xl
						border border-brand/15
						bg-brand/[0.055]
						px-5 py-5
						sm:px-6
					"
				>
					<div
						className="
							flex h-9 w-9 shrink-0
							items-center justify-center
							rounded-xl
							bg-brand/10
							text-brand
						"
					>
						<CheckCheck
							aria-hidden="true"
							className="h-[18px] w-[18px]"
							strokeWidth={1.7}
						/>
					</div>

					<div>
						<p
							className="
								font-mono text-[10px]
								font-semibold uppercase
								tracking-[0.15em]
								text-brand
							"
						>
							Phase Outcome
						</p>

						<p
							className="
								mt-2 font-display
								text-[14px]
								font-medium
								leading-relaxed
								text-white
								sm:text-[16px]
							"
						>
							{phase.outcome}
						</p>
					</div>
				</div>
			</div>

			{/* Phase connector */}
			{index < PHASES.length - 1 && (
				<div
					aria-hidden="true"
					className="
						absolute bottom-0 left-0
						hidden translate-y-1/2
						items-center justify-center
						rounded-full
						border border-brand/25
						bg-navy
						p-2.5 text-brand
						lg:flex
					"
				>
					<ArrowDown className="h-4 w-4" />
				</div>
			)}
		</article>
	);
}

/* -------------------------------------------------------------------------- */
/* Process Journey                                                            */
/* -------------------------------------------------------------------------- */

export function ProcessJourney() {
	return (
		<section
			id="process-journey"
			aria-labelledby="process-journey-heading"
		className="
    relative isolate
    scroll-mt-24
    bg-navy
    py-20
    sm:py-20
    lg:py-20
"
		>
			{/* ------------------------------------------------------ */}
			{/* Background                                           */}
			{/* ------------------------------------------------------ */}

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
			>
				{/* Subtle technical grid */}
				<div
					className="
						absolute inset-0
						bg-blueprint-grid-dark
						opacity-[0.17]
					"
				/>

				{/* Teal atmospheric lighting */}
				<div
					className="
						absolute -left-56 top-[20%]
						h-[480px] w-[480px]
						rounded-full
						bg-brand/[0.065]
						blur-[120px]
					"
				/>

				<div
					className="
						absolute -right-52 bottom-[15%]
						h-[500px] w-[500px]
						rounded-full
						bg-brand/[0.045]
						blur-[130px]
					"
				/>
			</div>

			{/* ------------------------------------------------------ */}
			{/* Main Container                                       */}
			{/* ------------------------------------------------------ */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5 sm:px-8
				"
			>
				{/* -------------------------------------------------- */}
				{/* Section Introduction                               */}
				{/* -------------------------------------------------- */}

				<div
					className="
						grid items-end
						gap-8
						pb-16
						lg:grid-cols-12
						lg:gap-14
						lg:pb-20
					"
				>
					{/* Left */}
					<div className="lg:col-span-7">
						{/* Eyebrow */}
						<div className="mb-6 flex items-center gap-3">
							<span className="h-2 w-2 rotate-45 bg-brand" />

							<span
								className="
									font-mono text-[11px]
									font-semibold
									uppercase tracking-[0.22em]
									text-brand
								"
							>
								How We Build
							</span>

							<span className="h-px w-10 bg-brand/40" />
						</div>

						{/* Heading */}
						<h2
							id="process-journey-heading"
							className="
								max-w-[850px]
								font-display
								text-[clamp(2.3rem,4vw,4.5rem)]
								font-semibold
								leading-[1.1]
								tracking-[-0.045em]
								text-white
							"
						>
							One process.
							<br />

							<span className="text-slate-400">
								Three connected phases.
							</span>
						</h2>
					</div>

					{/* Right */}
					<div className="lg:col-span-5">
						<p
							className="
								max-w-[490px]
								text-[14px]
								leading-[1.9]
								text-slate-400
								sm:text-[16px]
								lg:ml-auto
							"
						>
							Our software development process
							connects business discovery, product
							design, engineering, quality assurance,
							deployment, and continuous improvement.
							Each phase is adapted to your project,
							with clear priorities and collaborative
							decision-making throughout.
						</p>

						<div
							className="
								mt-6 flex items-center gap-2
								lg:justify-end
							"
						>
							<CircleDot
								aria-hidden="true"
								className="h-4 w-4 text-brand"
								strokeWidth={1.7}
							/>

							<span
								className="
									font-mono
									text-[10px]
									font-semibold
									uppercase
									tracking-[0.16em]
									text-slate-300
								"
							>
								Code / Launch / Grow
							</span>
						</div>
					</div>
				</div>

				{/* -------------------------------------------------- */}
				{/* Three Phases                                       */}
				{/* -------------------------------------------------- */}

				<div>
					{PHASES.map((phase, index) => (
						<ProcessPhase
							key={phase.number}
							phase={phase}
							index={index}
						/>
					))}
				</div>

				{/* -------------------------------------------------- */}
				{/* Closing Statement                                  */}
				{/* -------------------------------------------------- */}

				<div
					className="
						mt-5 flex flex-col
						justify-between gap-6
						border-t border-white/15
						pt-10
						sm:flex-row
						sm:items-center
					"
				>
					<div>
						<p
							className="
								font-display
								text-lg font-semibold
								tracking-tight
								text-white
								sm:text-xl
							"
						>
							A connected approach.
							<span className="text-brand">
								{' '}Built around your goals.
							</span>
						</p>

						<p
							className="
								mt-2 max-w-[600px]
								text-[13px]
								leading-relaxed
								text-slate-400
							"
						>
							Every engagement is different.
							Our process provides structure while
							allowing room for collaboration,
							feedback, and changing requirements.
						</p>
					</div>

					<div
						className="
							flex shrink-0
							items-center gap-3
						"
					>
						<span
							className="
								font-mono
								text-[11px]
								font-semibold
								uppercase
								tracking-[0.16em]
								text-brand
							"
						>
							Code. Launch. Grow.
						</span>

						<ArrowUpRight
							aria-hidden="true"
							className="h-4 w-4 text-brand"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}