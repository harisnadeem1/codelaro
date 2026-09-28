import { Link } from 'react-router';

import {
	ArrowUpRight,
	Search,
	ListChecks,
	Layers3,
	Rocket,
	MoveUpRight,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Approach Steps                                                             */
/* -------------------------------------------------------------------------- */

const STEPS = [
	{
		phase: '01',
		label: 'DISCOVERY',
		title: 'Learn your field',
		description:
			'We start from the language, constraints and goals of your sector — not a generic playbook.',
		icon: Search,
	},
	{
		phase: '02',
		label: 'STRATEGY',
		title: 'Map the challenges',
		description:
			'We identify the digital challenges that actually hold your operation back, and prioritise them.',
		icon: ListChecks,
	},
	{
		phase: '03',
		label: 'ENGINEERING',
		title: 'Bring the right disciplines',
		description:
			'We combine the services and solutions that fit — into one engagement, under one team.',
		icon: Layers3,
	},
	{
		phase: '04',
		label: 'DELIVERY',
		title: 'Ship for the outcome',
		description:
			'We deliver working software that fits how your industry works, and measure it against real results.',
		icon: Rocket,
	},
];

/* -------------------------------------------------------------------------- */
/* Individual Timeline Step                                                   */
/* -------------------------------------------------------------------------- */

function ApproachStep({
	step,
	index,
}: {
	step: (typeof STEPS)[number];
	index: number;
}) {
	const Icon = step.icon;

	const isLast = index === STEPS.length - 1;

	return (
		<li className="group relative">
			<div
				className="
					relative grid
					grid-cols-[52px_minmax(0,1fr)]
					gap-4
					sm:gap-6
				"
			>
				{/* ====================================================== */}
				{/* Timeline marker                                        */}
				{/* ====================================================== */}

				<div className="relative flex flex-col items-center">
					{/* Vertical connector */}

					{!isLast && (
						<div
							aria-hidden="true"
							className="
								absolute left-1/2
								top-[58px] -bottom-7
								w-px
								-translate-x-1/2
								bg-gradient-to-b
								from-brand/45
								via-brand/20
								to-white/10
							"
						/>
					)}

					{/* Icon container */}

					<div
						className="
							relative z-10
							flex h-[52px] w-[52px]
							shrink-0
							items-center justify-center
							rounded-[16px]
							border border-white/10
							bg-[#1B2A40]
							text-brand
							shadow-[0_8px_25px_-15px_rgba(0,0,0,0.3)]
							transition-all duration-300

							group-hover:border-brand/50
							group-hover:bg-brand
							group-hover:text-white
							group-hover:shadow-[0_10px_35px_-10px_rgba(24,188,183,0.3)]
						"
					>
						<Icon
							className="h-[21px] w-[21px]"
							strokeWidth={1.6}
							aria-hidden="true"
						/>

						{/* Small corner indicator */}

						<span
							aria-hidden="true"
							className="
								absolute -right-1 -top-1
								h-2.5 w-2.5
								rounded-full
								border-[3px] border-navy
								bg-brand
								opacity-60
								transition-opacity duration-300
								group-hover:opacity-100
							"
						/>
					</div>
				</div>

				{/* ====================================================== */}
				{/* Step content                                           */}
				{/* ====================================================== */}

				<div
					className="
						relative min-w-0
						overflow-hidden
						rounded-[20px]
						border border-white/[0.075]
						bg-white/[0.035]
						px-5 py-5
						transition-all duration-300

						group-hover:border-brand/30
						group-hover:bg-white/[0.065]

						sm:px-7
						sm:py-6
					"
				>
					{/* Hover accent */}

					<div
						aria-hidden="true"
						className="
							pointer-events-none
							absolute inset-y-0 left-0
							w-[2px]
							origin-center
							scale-y-0
							bg-brand
							transition-transform duration-300
							group-hover:scale-y-100
						"
					/>

					{/* Top metadata */}

					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<span
								className="
									font-mono
									text-[11px] font-semibold
									tabular-nums
									tracking-[0.12em]
									text-brand
								"
							>
								{step.phase}
							</span>

							<span
								aria-hidden="true"
								className="h-px w-5 bg-white/20"
							/>

							<span
								className="
									font-mono
									text-[10px] font-medium
									uppercase
									tracking-[0.16em]
									text-slate-400
								"
							>
								{step.label}
							</span>
						</div>

						{/* Decorative indicator */}

						<MoveUpRight
							className="
								h-4 w-4
								shrink-0
								text-white/20
								transition-all duration-300

								group-hover:-translate-y-0.5
								group-hover:translate-x-0.5
								group-hover:text-brand
							"
							strokeWidth={1.5}
							aria-hidden="true"
						/>
					</div>

					{/* Title */}

					<h3
						className="
							mt-4
							font-display
							text-[19px] font-semibold
							leading-[1.3]
							tracking-[-0.025em]
							text-white

							sm:text-[22px]
						"
					>
						{step.title}
					</h3>

					{/* Description */}

					<p
						className="
							mt-2.5
							max-w-[500px]
							text-[13px]
							leading-[1.85]
							text-slate-400

							sm:text-[14px]
						"
					>
						{step.description}
					</p>

					{/* Bottom decorative progress line */}

					<div
						aria-hidden="true"
						className="
							mt-5
							flex items-center gap-1.5
						"
					>
						<div
							className="
								h-[2px] w-10
								rounded-full
								bg-brand/65
								transition-all duration-300
								group-hover:w-16
								group-hover:bg-brand
							"
						/>

						<div className="h-[2px] w-3 rounded-full bg-white/10" />

						<div className="h-[2px] w-1.5 rounded-full bg-white/10" />
					</div>
				</div>
			</div>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Industries Overview Approach                                               */
/* -------------------------------------------------------------------------- */

export function IndustriesOverviewApproach() {
	return (
	<section
    id="industries-approach"
    aria-labelledby="industries-approach-heading"
    className="
        relative isolate
        overflow-clip
        bg-navy
        text-white
    "
>
			{/* ========================================================== */}
			{/* Background atmosphere                                      */}
			{/* ========================================================== */}

			{/* Subtle technical grid */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
					opacity-[0.16]
					[background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)]
					[background-size:52px_52px]
					[mask-image:radial-gradient(ellipse_at_75%_45%,black,transparent_75%)]
				"
			/>

			{/* Right teal atmosphere */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -right-44 top-[15%]
					h-[650px] w-[650px]
					rounded-full
					bg-brand/[0.055]
					blur-[120px]
				"
			/>

			{/* Left atmosphere */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -bottom-56 -left-52
					h-[500px] w-[500px]
					rounded-full
					bg-brand/[0.035]
					blur-[110px]
				"
			/>

			{/* Decorative right vertical line */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute right-[5%] top-0
					hidden h-full w-px
					bg-gradient-to-b
					from-transparent
					via-white/[0.035]
					to-transparent
					2xl:block
				"
			/>

			{/* ========================================================== */}
			{/* Main container                                            */}
			{/* ========================================================== */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5
					py-20
					sm:px-8
					md:py-20
					lg:py-20
				"
			>
				{/* Top section indicator */}

				<div
					className="
						mb-12
						flex items-center
						justify-between
						gap-5
						border-b border-white/10
						pb-6
						lg:mb-16
					"
				>
					<div className="flex items-center gap-3">
						<span
							aria-hidden="true"
							className="
								h-[6px] w-[6px]
								rounded-full
								bg-brand
								shadow-[0_0_12px_rgba(24,188,183,0.6)]
							"
						/>

						<span
							className="
								font-mono
								text-[11px] font-semibold
								uppercase
								tracking-[0.22em]
								text-brand
							"
						>
							Our approach
						</span>
					</div>

					<span
						className="
							hidden
							font-mono
							text-[10px]
							font-medium
							uppercase
							tracking-[0.18em]
							text-slate-500
							sm:block
						"
					>
						Industry-focused development
					</span>
				</div>

				{/* ====================================================== */}
				{/* Two-column composition                                */}
				{/* ====================================================== */}

				<div
    className="
        grid
        gap-14

        lg:grid-cols-12
        lg:items-stretch
        lg:gap-14

        xl:gap-20
    "
>
					{/* ================================================== */}
					{/* Left editorial content                             */}
					{/* ================================================== */}

				<div className="relative lg:col-span-5 lg:self-stretch">
    <div
        className="
            lg:sticky
            lg:top-28
        "
    >
							{/* Small introductory label */}

							<div className="flex items-center gap-3">
								<span
									aria-hidden="true"
									className="h-px w-8 bg-brand"
								/>

								<span
									className="
										font-mono
										text-[10px]
										font-semibold
										uppercase
										tracking-[0.2em]
										text-brand
									"
								>
									Beyond generic solutions
								</span>
							</div>

							{/* Heading */}

							<h2
								id="industries-approach-heading"
								className="
									mt-7
									max-w-[570px]
									font-display
									text-[clamp(2.25rem,3.6vw,3.5rem)]
									font-semibold
									leading-[1.12]
									tracking-[-0.045em]
									text-white
								"
							>
								Your industry
								<br />

								sets the direction.

								<span className="mt-2 block text-brand">
									We build what fits.
								</span>
							</h2>

							{/* Description */}

							<p
								className="
									mt-7
									max-w-[460px]
									text-[15px]
									leading-[1.9]
									text-slate-400

									sm:text-[16px]
								"
							>
								Great software starts with understanding
								the business behind it. We combine
								industry knowledge, strategic thinking
								and the right technical expertise to
								build solutions around your actual
								operational needs.
							</p>

							{/* Supporting principle */}

							<div
								className="
									mt-10
									max-w-[440px]
									border-l-2 border-brand
									pl-5
								"
							>
								<p
									className="
										font-display
										text-[15px]
										font-medium
										leading-[1.7]
										text-white/85
									"
								>
									No one-size-fits-all approach.
									Every decision begins with
									your industry's priorities.
								</p>
							</div>

							{/* CTA */}

							<div className="mt-10">
								<Link
									to="/contact"
									className="
										group
										inline-flex h-12
										items-center justify-center
										gap-3
										rounded-lg
										bg-brand
										px-7
										font-display
										text-[16px]
										font-semibold
										text-white
										shadow-[0_8px_25px_-8px_rgba(24,188,183,0.3)]
										transition-all duration-300

										hover:bg-brand-600
										hover:shadow-[0_12px_32px_-8px_rgba(24,188,183,0.45)]

										active:scale-[0.98]

										focus-visible:outline-none
										focus-visible:ring-2
										focus-visible:ring-white
										focus-visible:ring-offset-4
										focus-visible:ring-offset-navy
									"
								>
									Plan Your Project

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
								</Link>
							</div>

							{/* Bottom visual signature */}

							<div
								aria-hidden="true"
								className="
									mt-16
									hidden
									max-w-[400px]
									items-center
									gap-3
									lg:flex
								"
							>
								<span className="h-px w-10 bg-brand/60" />

								<span className="h-px w-5 bg-brand/30" />

								<span className="h-px w-2 bg-brand/20" />

								<span
									className="
										ml-2
										font-mono
										text-[10px]
										uppercase
										tracking-[0.2em]
										text-slate-500
									"
								>
									Built around your business
								</span>
							</div>
						</div>
					</div>

					{/* ================================================== */}
					{/* Right connected timeline                           */}
					{/* ================================================== */}

					<div className="relative lg:col-span-7">
						{/* Timeline heading */}

						<div
							className="
								mb-8
								flex items-center
								justify-between
								gap-4
								pl-[68px]
								sm:pl-[76px]
							"
						>
							<span
								className="
									font-mono
									text-[10px]
									font-semibold
									uppercase
									tracking-[0.18em]
									text-slate-400
								"
							>
								From context to execution
							</span>

							<span
								className="
									font-mono
									text-[10px]
									font-medium
									tabular-nums
									text-brand
								"
							>
								01 — 04
							</span>
						</div>

						{/* Steps */}

						<ol className="space-y-5">
							{STEPS.map((step, index) => (
								<ApproachStep
									key={step.phase}
									step={step}
									index={index}
								/>
							))}
						</ol>

						{/* Timeline completion */}

						<div
							className="
								mt-8
								flex items-center
								gap-4
								pl-[68px]
								sm:pl-[76px]
							"
						>
							<div
								aria-hidden="true"
								className="
									h-px w-12
									bg-gradient-to-r
									from-brand/70
									to-transparent
								"
							/>

							<p
								className="
									font-mono
									text-[10px]
									font-medium
									uppercase
									tracking-[0.14em]
									text-slate-500
								"
							>
								Built for your business outcomes
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom border */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-x-0 bottom-0
					h-px
					bg-gradient-to-r
					from-transparent
					via-brand/25
					to-transparent
				"
			/>
		</section>
	);
}