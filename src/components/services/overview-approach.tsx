import { Link } from 'react-router';

import {
	ArrowUpRight,
	Compass,
	PenTool,
	Code2,
	FlaskConical,
	Gauge,
	Rocket,
	Activity,
	TrendingUp,
	Headset,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Delivery Process                                                           */
/* -------------------------------------------------------------------------- */

const DELIVERY_PROCESS = [
	{
		number: '01',
		title: 'Code',
		subtitle: 'From vision to working technology.',
		description:
			'We establish the right foundation and transform your ideas into powerful digital products.',
		steps: [
			{
				icon: Compass,
				title: 'Discover',
				description:
					'Understand your goals, challenges, and business requirements.',
			},
			{
				icon: PenTool,
				title: 'Design',
				description:
					'Create intuitive experiences and scalable technical architecture.',
			},
			{
				icon: Code2,
				title: 'Develop',
				description:
					'Build reliable software tailored to your business needs.',
			},
		],
	},
	{
		number: '02',
		title: 'Launch',
		subtitle: 'From development to real-world impact.',
		description:
			'We prepare your product for production through testing, optimization, and reliable deployment.',
		steps: [
			{
				icon: FlaskConical,
				title: 'Test',
				description:
					'Validate functionality, performance, and product reliability.',
			},
			{
				icon: Gauge,
				title: 'Optimize',
				description:
					'Refine performance, usability, and production readiness.',
			},
			{
				icon: Rocket,
				title: 'Deploy',
				description:
					'Launch your solution with a structured deployment process.',
			},
		],
	},
	{
		number: '03',
		title: 'Grow',
		subtitle: 'From successful launches to lasting value.',
		description:
			'We help your technology evolve through ongoing monitoring, improvements, and technical support.',
		steps: [
			{
				icon: Activity,
				title: 'Monitor',
				description:
					'Track performance and identify opportunities for improvement.',
			},
			{
				icon: TrendingUp,
				title: 'Improve',
				description:
					'Enhance your product as your users and business evolve.',
			},
			{
				icon: Headset,
				title: 'Support',
				description:
					'Maintain reliability through continuous technical support.',
			},
		],
	},
];

/* -------------------------------------------------------------------------- */
/* Delivery Stage                                                             */
/* -------------------------------------------------------------------------- */

type DeliveryStageType = (typeof DELIVERY_PROCESS)[number];

function DeliveryStage({
	stage,
}: {
	stage: DeliveryStageType;
}) {
	return (
		<li
			className="
				group relative
				border-b border-white/10
				py-10
				first:pt-0
				last:border-0
				last:pb-0
				sm:py-12
			"
		>
			{/* Stage header */}

			<div className="flex items-start gap-5 sm:gap-7">

				{/* Stage number */}

				<span
					className="
						font-display
						text-[42px] font-semibold
						leading-none tracking-[-0.06em]
						text-white/15
						transition-colors duration-300
						group-hover:text-brand/40
						sm:text-[52px]
					"
				>
					{stage.number}
				</span>

				{/* Stage introduction */}

				<div className="min-w-0 flex-1">

					<div className="flex flex-wrap items-center gap-3">

						<h3
							className="
								font-display
								text-[28px] font-semibold
								leading-none tracking-tight
								text-white
								sm:text-[34px]
							"
						>
							{stage.title}
						</h3>

						<span
							className="
								h-1.5 w-1.5
								rounded-full bg-brand
							"
						/>

					</div>

					<p
						className="
							mt-3 text-[13px]
							font-medium text-brand
							sm:text-[14px]
						"
					>
						{stage.subtitle}
					</p>

					<p
						className="
							mt-4 max-w-xl
							text-[13px]
							leading-[1.8]
							text-slate-400
							sm:text-[14px]
						"
					>
						{stage.description}
					</p>

				</div>
			</div>

			{/* Stage activities */}

			<ol
				className="
					mt-9 grid gap-7
					sm:grid-cols-3
					sm:gap-5
					lg:gap-6
				"
			>
				{stage.steps.map((step) => {
					const Icon = step.icon;

					return (
						<li
							key={step.title}
							className="
								group/step relative
								min-w-0
								border-l border-white/15
								pl-5
								transition-colors duration-300
								hover:border-brand
								sm:pl-4
							"
						>
							{/* Activity icon */}

							<div
								className="
									mb-5
									flex h-10 w-10
									items-center justify-center
									rounded-xl
									border border-white/10
									bg-white/[0.05]
									text-brand
									transition-all duration-300
									group-hover/step:border-brand/30
									group-hover/step:bg-brand/10
								"
							>
								<Icon
									className="h-[18px] w-[18px]"
									strokeWidth={1.7}
									aria-hidden="true"
								/>
							</div>

							{/* Activity title */}

							<h4
								className="
									font-display
									text-[16px] font-semibold
									tracking-tight
									text-white
									sm:text-[17px]
								"
							>
								{step.title}
							</h4>

							{/* Activity description */}

							<p
								className="
									mt-2
									text-[12px]
									leading-[1.75]
									text-slate-400
									sm:text-[13px]
								"
							>
								{step.description}
							</p>
						</li>
					);
				})}
			</ol>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Services Approach                                                          */
/* -------------------------------------------------------------------------- */

export function ServicesOverviewApproach() {
	return (
		<section
	id="our-approach"
	aria-labelledby="approach-heading"
	className="
		relative isolate
		bg-navy text-white
		py-20 sm:py-24 lg:py-28
	"
>
			{/* Background atmosphere */}
<div
	aria-hidden="true"
	className="pointer-events-none absolute inset-0 overflow-hidden"
>
	<div className="
		absolute -left-48 top-0
		h-[450px] w-[450px] rounded-full
		bg-brand/[0.045] blur-[110px]
	" />

	<div className="
		absolute -bottom-40 right-0
		h-[400px] w-[400px] rounded-full
		bg-brand/[0.035] blur-[120px]
	" />
</div>

			{/* Main container */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5 sm:px-8
				"
			>
				<div
					className="
						grid items-start gap-14
						lg:grid-cols-12
						lg:gap-12
						xl:gap-20
					"
				>
					{/* -------------------------------------------------- */}
					{/* Left: Introduction                                 */}
					{/* -------------------------------------------------- */}

					<div
						className="
							lg:sticky lg:top-32
							lg:col-span-5
							lg:self-start
						"
					>
						{/* Eyebrow */}

						<div className="mb-7 flex items-center gap-3">
							<span
								aria-hidden="true"
								className="h-px w-8 bg-brand"
							/>

							<p
								className="
									text-[11px] font-bold
									uppercase tracking-[0.2em]
									text-brand
								"
							>
								How We Deliver
							</p>
						</div>

						{/* Heading */}

						<h2
							id="approach-heading"
							className="
								max-w-[550px]
								font-display
								text-[36px]
								font-semibold
								leading-[1.13]
								tracking-[-0.045em]
								text-white
								sm:text-[44px]
								lg:text-[48px]
								xl:text-[54px]
							"
						>
							From First Line
							<br className="hidden sm:block" />{' '}
							of Code to{' '}
							<span className="text-slate-400">
								Lasting Growth.
							</span>
						</h2>

						{/* Description */}

						<p
							className="
								mt-7 max-w-[470px]
								text-[15px]
								leading-[1.85]
								text-slate-400
								sm:text-[16px]
							"
						>
							At Codelaro, our process reflects our
							philosophy: Code, Launch, Grow. We
							combine thoughtful engineering,
							structured deployment, and continuous
							improvement to turn your ideas into
							reliable digital products.
						</p>

						{/* Supporting statement */}

						<div
							className="
								mt-9 max-w-[430px]
								border-l-2 border-brand/70
								pl-5
							"
						>
							<p
								className="
									text-[13px]
									leading-[1.75]
									text-slate-300
									sm:text-[14px]
								"
							>
								One connected delivery process,
								adapted to your project's goals,
								complexity, and requirements.
							</p>
						</div>

						{/* Minimal CTA */}

						<Link
							to="/contact"
							className="
								group mt-9 inline-flex
								items-center gap-3
								text-[14px] font-semibold
								text-white
								transition-colors duration-300
								hover:text-brand
								focus-visible:rounded-sm
								focus-visible:outline-2
								focus-visible:outline-offset-4
								focus-visible:outline-brand
							"
						>
							Discuss Your Roadmap

							<span
								className="
									flex h-9 w-9
									items-center justify-center
									rounded-full
									border border-white/20
									transition-all duration-300
									group-hover:border-brand
									group-hover:bg-brand
									group-hover:text-navy
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
						</Link>
					</div>

					{/* -------------------------------------------------- */}
					{/* Right: Code. Launch. Grow.                         */}
					{/* -------------------------------------------------- */}

					<div className="min-w-0 lg:col-span-7">

						{/* Roadmap header */}

						<div
							className="
								mb-9 flex flex-wrap
								items-center justify-between
								gap-3
								border-b border-white/15
								pb-5
							"
						>
							<p
								className="
									text-[11px]
									font-semibold uppercase
									tracking-[0.18em]
									text-slate-400
								"
							>
								Our Delivery Process
							</p>

							<span
								className="
									font-mono text-[11px]
									font-medium tracking-wide
									text-brand
								"
							>
								CODE / LAUNCH / GROW
							</span>
						</div>

						{/* Delivery stages */}

						<ol>
							{DELIVERY_PROCESS.map((stage) => (
								<DeliveryStage
									key={stage.number}
									stage={stage}
								/>
							))}
						</ol>

					</div>
				</div>
			</div>
		</section>
	);
}