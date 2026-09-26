import { Link } from 'react-router';

import {
	ArrowDownRight,
	ArrowRight,
	ArrowUpRight,
	Check,
	ChevronRight,
	Sparkles,
} from 'lucide-react';

import { SOLUTIONS } from '@/data/solutions';

/* -------------------------------------------------------------------------- */
/* Solutions Visual                                                           */
/* -------------------------------------------------------------------------- */

function HeroVisual() {
	const stages = [
		{
			number: '01',
			phase: 'DISCOVER',
			title: 'Understand',
			position: 'left-[1%] top-[19%]',
			type: 'discover',
		},
		{
			number: '02',
			phase: 'CREATE',
			title: 'Engineer',
			position: 'right-0 top-[28%]',
			type: 'create',
		},
		{
			number: '03',
			phase: 'DELIVER',
			title: 'Create impact',
			position: 'bottom-[14%] right-[7%]',
			type: 'deliver',
		},
	] as const;

	return (
		<div
			aria-hidden="true"
			className="
				group/visual
				relative mx-auto
				aspect-square
				w-full max-w-[440px]
				select-none
				isolate
				lg:ml-auto
			"
		>
			{/* ====================================================== */}
			{/* 01. ATMOSPHERE                                         */}
			{/* ====================================================== */}

			{/* Primary ambient glow */}

			<div
				className="
					pointer-events-none absolute
					inset-[14%]
					rounded-full
					bg-brand/[0.075]
					blur-[75px]
				"
			/>

			{/* Secondary central illumination */}

			<div
				className="
					pointer-events-none absolute
					inset-[31%]
					rounded-full
					bg-brand/[0.12]
					blur-[35px]
				"
			/>

			{/* Faded technical dot matrix */}

			<div
				className="
					pointer-events-none absolute
					inset-[5%]
					rounded-full
					opacity-[0.18]
					[background-image:radial-gradient(#64748b_0.8px,transparent_0.8px)]
					[background-size:17px_17px]
					[mask-image:radial-gradient(circle,transparent_20%,black_55%,transparent_75%)]
				"
			/>

			{/* ====================================================== */}
			{/* 02. ORBITAL ARCHITECTURE                               */}
			{/* ====================================================== */}

			{/* Outer orbital boundary */}

			<div
				className="
					absolute inset-[4.5%]
					rounded-full
					border border-navy/[0.055]
				"
			/>

			{/* Slow rotating dashed ring */}

			<div
				className="
					absolute inset-[11.8%]
					rounded-full
					border border-dashed border-brand/[0.22]
					motion-safe:animate-[spin_100s_linear_infinite]
				"
			/>

			{/* Inner architectural ring */}

			<div
				className="
					absolute inset-[21%]
					rounded-full
					border border-navy/[0.075]
				"
			/>

			{/* Inner accent ring */}

			<div
				className="
					absolute inset-[23.5%]
					rounded-full
					border border-dashed border-brand/[0.12]
				"
			/>

			{/* ====================================================== */}
			{/* 03. SVG ENGINEERING SYSTEM                             */}
			{/* ====================================================== */}

			<svg
				className="
					pointer-events-none absolute
					inset-0 h-full w-full
					overflow-visible
				"
				viewBox="0 0 440 440"
				fill="none"
				preserveAspectRatio="xMidYMid meet"
			>
				<defs>
					{/* Connection gradient */}

					<linearGradient
						id="solutions-connection-gradient"
						x1="0"
						y1="0"
						x2="1"
						y2="1"
					>
						<stop offset="0%" stopColor="#18BCB7" stopOpacity="0.08" />
						<stop offset="50%" stopColor="#18BCB7" stopOpacity="0.55" />
						<stop offset="100%" stopColor="#18BCB7" stopOpacity="0.08" />
					</linearGradient>
				</defs>

				{/* Outer precision markers */}

				<g>
					{Array.from({ length: 36 }, (_, index) => {
						const angle = index * 10;
						const major = index % 3 === 0;

						return (
							<line
								key={index}
								x1="220"
								y1="20"
								x2="220"
								y2={major ? '28' : '24'}
								transform={`rotate(${angle} 220 220)`}
								stroke={major ? '#18BCB7' : '#0F172A'}
								strokeOpacity={major ? 0.42 : 0.13}
								strokeWidth={major ? 1.2 : 0.8}
							/>
						);
					})}
				</g>

				{/* Outer decorative arcs */}

				<g
					className="motion-safe:animate-[spin_90s_linear_infinite]"
					style={{ transformOrigin: '220px 220px' }}
				>
					<circle
						cx="220"
						cy="220"
						r="200"
						stroke="#18BCB7"
						strokeWidth="1.5"
						strokeOpacity=".55"
						strokeDasharray="86 1170"
						transform="rotate(-65 220 220)"
					/>

					<circle
						cx="220"
						cy="220"
						r="200"
						stroke="#0F172A"
						strokeWidth="1"
						strokeOpacity=".2"
						strokeDasharray="125 1131"
						transform="rotate(110 220 220)"
					/>
				</g>

				{/* Middle orbital arcs */}

				<g
					className="motion-safe:animate-[spin_75s_linear_infinite_reverse]"
					style={{ transformOrigin: '220px 220px' }}
				>
					<circle
						cx="220"
						cy="220"
						r="168"
						stroke="#18BCB7"
						strokeOpacity=".38"
						strokeWidth="1.4"
						strokeDasharray="115 940"
					/>

					<circle
						cx="220"
						cy="220"
						r="168"
						stroke="#18BCB7"
						strokeOpacity=".23"
						strokeWidth="1"
						strokeDasharray="44 1011"
						transform="rotate(170 220 220)"
					/>
				</g>

				{/* Structural connections */}

				<g
					stroke="url(#solutions-connection-gradient)"
					strokeWidth="1.25"
					strokeDasharray="3 6"
				>
					<path d="M110 126 Q171 154 220 220" />

					<path d="M220 220 Q284 190 340 157" />

					<path d="M220 220 Q265 290 301 339" />
				</g>

				{/* Animated signal particles */}

				<g>
					{/* Discover → Core */}

					<circle
						r="3"
						fill="#18BCB7"
						className="motion-reduce:hidden"
					>
						<animateMotion
							dur="5s"
							repeatCount="indefinite"
							path="M110 126 Q171 154 220 220"
						/>
					</circle>

					{/* Core → Engineer */}

					<circle
						r="3"
						fill="#18BCB7"
						className="motion-reduce:hidden"
					>
						<animateMotion
							dur="4.5s"
							begin="1s"
							repeatCount="indefinite"
							path="M220 220 Q284 190 340 157"
						/>
					</circle>

					{/* Core → Impact */}

					<circle
						r="3"
						fill="#18BCB7"
						className="motion-reduce:hidden"
					>
						<animateMotion
							dur="5.5s"
							begin="2s"
							repeatCount="indefinite"
							path="M220 220 Q265 290 301 339"
						/>
					</circle>
				</g>

				{/* Connection endpoints */}

				<g>
					<circle
						cx="110"
						cy="126"
						r="4"
						fill="white"
						stroke="#18BCB7"
						strokeOpacity=".65"
					/>

					<circle
						cx="340"
						cy="157"
						r="4"
						fill="white"
						stroke="#18BCB7"
						strokeWidth="1.5"
					/>

					<circle
						cx="301"
						cy="339"
						r="4"
						fill="white"
						stroke="#18BCB7"
						strokeOpacity=".65"
					/>
				</g>

				{/* Central technical crosshairs */}

				<g
					stroke="#18BCB7"
					strokeOpacity=".28"
					strokeWidth=".8"
				>
					<path d="M220 77V104" />

					<path d="M220 336V363" />

					<path d="M77 220H104" />

					<path d="M336 220H363" />
				</g>
			</svg>

			{/* ====================================================== */}
			{/* 04. ORBITAL SATELLITES                                 */}
			{/* ====================================================== */}

			{/* Top satellite */}

			<div
				className="
					absolute left-1/2 top-[3%]
					z-10
					grid h-5 w-5
					-translate-x-1/2
					place-items-center
					rounded-full
					border border-brand/20
					bg-white
					shadow-sm
				"
			>
				<span
					className="
						h-2 w-2
						rounded-full
						bg-brand
						shadow-[0_0_12px_rgba(24,188,183,0.45)]
					"
				/>
			</div>

			{/* Right reference satellite */}

			<div
				className="
					absolute right-[3%] top-[47%]
					z-10
					grid h-4 w-4
					place-items-center
					rounded-full
					border border-brand/25
					bg-white
				"
			>
				<span className="h-1.5 w-1.5 rounded-full bg-brand/70" />
			</div>

			{/* Left satellite */}

			<span
				className="
					absolute left-[10%] top-[48%]
					h-1.5 w-1.5
					rounded-full
					bg-navy/25
				"
			/>

			{/* Bottom satellite */}

			<div
				className="
					absolute bottom-[10%] left-[30%]
					grid h-3 w-3
					place-items-center
					rounded-full
					border border-brand/30
					bg-white
				"
			>
				<span className="h-1 w-1 rounded-full bg-brand" />
			</div>

			{/* ====================================================== */}
			{/* 05. CENTRAL ENGINEERING CORE                           */}
			{/* ====================================================== */}

			<div
				className="
					absolute inset-[25%]
					z-10
					grid place-items-center
				"
			>
				{/* Background energy glow */}

				<div
					className="
						pointer-events-none absolute
						inset-[6%]
						rounded-full
						bg-brand/[0.16]
						blur-[34px]
					"
				/>

				{/* Rotating architectural frame */}

				<div
					className="
						absolute inset-[3%]
						rotate-45
						rounded-[29%]
						border border-brand/20
						bg-brand/[0.025]
						motion-safe:animate-[spin_70s_linear_infinite]
					"
				/>

				{/* Secondary translucent frame */}

				<div
					className="
						absolute inset-[12%]
						-rotate-12
						rounded-[28%]
						border border-brand/[0.22]
						bg-white/75
						shadow-[0_12px_40px_-22px_rgba(15,23,42,0.2)]
						backdrop-blur-md
					"
				/>

				{/* Third structural frame */}

				<div
					className="
						absolute inset-[21%]
						rotate-12
						rounded-[25%]
						border border-brand/25
						bg-brand/[0.055]
					"
				/>

				{/* Corner engineering markers */}

				<span
					className="
						absolute left-[13%] top-[13%]
						h-2 w-2
						rounded-[2px]
						border border-brand/40
						bg-white
					"
				/>

				<span
					className="
						absolute bottom-[13%] right-[13%]
						h-2 w-2
						rounded-[2px]
						border border-brand/40
						bg-white
					"
				/>

				{/* Main teal core */}

				<div
					className="
						relative z-20
						grid h-[45%] w-[45%]
						place-items-center
						overflow-hidden
						rounded-[25%]
						border border-white/30
						bg-brand
						shadow-[0_16px_48px_-12px_rgba(24,188,183,0.48)]
						transition-all duration-700
						group-hover/visual:shadow-[0_18px_55px_-12px_rgba(24,188,183,0.58)]
					"
				>
					{/* Internal lighting */}

					<div
						className="
							pointer-events-none absolute
							inset-0
							bg-gradient-to-br
							from-white/30
							via-transparent
							to-navy/[0.12]
						"
					/>

					{/* Internal architectural border */}

					<div
						className="
							pointer-events-none absolute
							inset-[6px]
							rounded-[20%]
							border border-white/25
						"
					/>

					{/* Engineering symbol */}

					<svg
						viewBox="0 0 80 80"
						fill="none"
						className="
							relative z-10
							h-[65%] w-[65%]
							drop-shadow-sm
						"
					>
						{/* Main geometric shell */}

						<path
							d="M40 7L67 23V56L40 72L13 56V23L40 7Z"
							stroke="white"
							strokeWidth="1.6"
							strokeLinejoin="round"
						/>

						{/* Internal architecture */}

						<path
							d="M40 7V39M13 23L40 39L67 23M40 39V72"
							stroke="white"
							strokeOpacity=".85"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>

						{/* Secondary technical connections */}

						<path
							d="M26 15L54 64M54 15L26 64"
							stroke="white"
							strokeOpacity=".25"
							strokeWidth=".8"
						/>

						{/* Central intersection */}

						<circle
							cx="40"
							cy="39"
							r="7"
							fill="white"
							fillOpacity=".16"
							stroke="white"
							strokeWidth="1.3"
						/>

						<circle
							cx="40"
							cy="39"
							r="2.5"
							fill="white"
						/>

						{/* Geometric vertices */}

						{[
							[40, 7],
							[67, 23],
							[67, 56],
							[40, 72],
							[13, 56],
							[13, 23],
						].map(([cx, cy], index) => (
							<circle
								key={index}
								cx={cx}
								cy={cy}
								r="2.4"
								fill="white"
							/>
						))}
					</svg>
				</div>

				{/* Four directional indicators */}

				<span
					className="
						absolute left-1/2 top-[1%]
						h-1 w-1
						-translate-x-1/2
						rounded-full bg-brand/70
					"
				/>

				<span
					className="
						absolute bottom-[1%] left-1/2
						h-1 w-1
						-translate-x-1/2
						rounded-full bg-brand/70
					"
				/>

				<span
					className="
						absolute left-[1%] top-1/2
						h-1 w-1
						-translate-y-1/2
						rounded-full bg-brand/70
					"
				/>

				<span
					className="
						absolute right-[1%] top-1/2
						h-1 w-1
						-translate-y-1/2
						rounded-full bg-brand/70
					"
				/>
			</div>

			{/* ====================================================== */}
			{/* 06. FLOATING PROCESS INTERFACE                        */}
			{/* ====================================================== */}

			{stages.map((stage) => {
				const isPrimary = stage.type === 'create';

				return (
					<div
						key={stage.number}
						className={`
							group/node
							absolute z-30
							flex items-center
							gap-2.5
							rounded-xl
							border
							px-3 py-2.5
							backdrop-blur-xl
							transition-all duration-500
							hover:-translate-y-1
							motion-reduce:transform-none

							${stage.position}

							${
								isPrimary
									? `
										border-brand/25
										bg-white/95
										shadow-[0_10px_35px_-18px_rgba(24,188,183,0.35)]
										hover:border-brand/40
									`
									: `
										border-navy/[0.075]
										bg-white/90
										shadow-[0_10px_32px_-18px_rgba(15,23,42,0.2)]
										hover:border-brand/25
									`
							}
						`}
					>
						{/* Stage icon */}

						<div
							className={`
								grid h-8 w-8
								shrink-0 place-items-center
								rounded-lg
								border
								transition-colors duration-300

								${
									isPrimary
										? 'border-brand/15 bg-brand/[0.075]'
										: 'border-navy/[0.06] bg-slate-50'
								}
							`}
						>
							{/* Discover icon */}

							{stage.type === 'discover' && (
								<div className="grid grid-cols-2 gap-[3px]">
									<span className="h-1.5 w-1.5 rounded-[2px] bg-navy/20" />

									<span className="h-1.5 w-1.5 rounded-[2px] bg-navy/40" />

									<span className="h-1.5 w-1.5 rounded-[2px] bg-navy/40" />

									<span className="h-1.5 w-1.5 rounded-[2px] bg-brand" />
								</div>
							)}

							{/* Engineering icon */}

							{stage.type === 'create' && (
								<div
									className="
										grid h-3.5 w-3.5
										rotate-45 place-items-center
										rounded-[3px]
										border-[1.5px]
										border-brand
									"
								>
									<span className="h-1 w-1 rounded-[1px] bg-brand" />
								</div>
							)}

							{/* Impact icon */}

							{stage.type === 'deliver' && (
								<div className="flex h-5 items-end gap-[3px]">
									<span className="h-2 w-1 rounded-full bg-brand/35" />

									<span className="h-3 w-1 rounded-full bg-brand/60" />

									<span className="h-4 w-1 rounded-full bg-brand" />
								</div>
							)}
						</div>

						{/* Text */}

						<div>
							<div className="flex items-center gap-1.5">
								<span
									className={`
										font-mono
										text-[8px]
										font-semibold
										uppercase
										tracking-[0.13em]

										${
											isPrimary
												? 'text-brand'
												: 'text-slate-400'
										}
									`}
								>
									{stage.number} / {stage.phase}
								</span>
							</div>

							<p
								className="
									mt-0.5
									whitespace-nowrap
									font-display
									text-[11px]
									font-semibold
									text-navy
									sm:text-xs
								"
							>
								{stage.title}
							</p>
						</div>
					</div>
				);
			})}

			{/* ====================================================== */}
			{/* 07. MICRO INTERFACE DETAILS                            */}
			{/* ====================================================== */}

			{/* Upper technical label */}

			<div
				className="
					absolute left-[6%] top-[5%]
					z-10
					flex items-center gap-2
				"
			>
				<span
					className="
						h-1.5 w-1.5
						rounded-full
						bg-brand
					"
				/>

				<span
					className="
						font-mono
						text-[8px]
						font-medium
						uppercase
						tracking-[0.16em]
						text-slate-400
					"
				>
					Solution system
				</span>
			</div>

			{/* Upper reference ID */}

			<div
				className="
					absolute right-[6%] top-[5%]
					z-10
					font-mono
					text-[9px]
					tracking-[0.12em]
					text-slate-300
				"
			>
				C / 001
			</div>

			{/* Lower technical annotation */}

			<div
				className="
					absolute bottom-[5%] left-[5%]
					z-10
					flex items-center gap-2.5
				"
			>
				<span className="h-px w-5 bg-brand/60" />

				<span
					className="
						font-mono
						text-[8px]
						font-medium
						uppercase
						tracking-[0.15em]
						text-slate-400
						sm:text-[9px]
					"
				>
					Designed for impact
				</span>
			</div>

			{/* Lower signal indicator */}

			<div
				className="
					absolute bottom-[5%] right-[6%]
					z-10
					flex items-center gap-1.5
				"
			>
				<span className="h-1 w-1 rounded-full bg-brand/25" />

				<span className="h-1 w-1 rounded-full bg-brand/50" />

				<span className="h-1 w-1 rounded-full bg-brand" />
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export function SolutionsOverviewHero() {
	return (
		<section
			aria-labelledby="solutions-hero-heading"
			className="
				relative isolate
				overflow-hidden
				border-b border-navy/[0.06]
				bg-[#F8FAFC]
			"
		>


			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

			{/* Main container */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5
					pb-20 pt-32
					sm:px-8
					sm:pb-20 sm:pt-36
					lg:pb-20 lg:pt-36
				"
			>
				<div
					className="
						grid items-center
						gap-16
						lg:grid-cols-12
						lg:gap-12
						xl:gap-16
					"
				>
					{/* LEFT — Content */}

					<div className="relative lg:col-span-6 xl:col-span-7">
						{/* Eyebrow */}

						<div className="flex items-center gap-3">
							<span
								aria-hidden="true"
								className="h-px w-9 bg-brand"
							/>

							<span
								className="
									font-mono text-[11px]
									font-semibold uppercase
									tracking-[0.22em]
									text-brand
								"
							>
								Codelaro / Solutions
							</span>
						</div>

						{/* Heading */}

						<h1
							id="solutions-hero-heading"
							className="
								mt-8 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]
							"
						>
							<span className="block">
								Complex challenges.
							</span>

							<span className="block">
								Clear solutions.
							</span>

							<span
								className="
									 block
									text-brand
								"
							>
								Real impact.
							</span>
						</h1>

						{/* Description */}

						<div className="mt-8 max-w-[540px]">
							<p
								className="
									text-[15px]
									leading-[1.85]
									text-slate-600
									sm:text-[17px]
								"
							>
								Every business faces different challenges.
								We combine strategic thinking, thoughtful
								design, and modern engineering to build
								software solutions that solve real problems
								and create lasting value.
							</p>
						</div>

						{/* CTA */}

						<div
							className="
								mt-9 flex flex-col gap-3
								sm:flex-row sm:items-center
							"
						>
							<Link
								to="/contact"
								aria-label="Talk to a Codelaro development expert"
								className="
        group flex h-12 w-full
        items-center justify-center gap-2
        rounded-lg bg-brand px-7
        font-display text-base font-semibold text-white
        shadow-lg shadow-brand/25
        transition-all duration-300
        hover:bg-brand-600
        hover:shadow-brand/40
        active:scale-[0.98]
		hover:-translate-y-0.5
        sm:w-auto
    "
							>
								Discuss your  Challenge

								<ArrowUpRight
									className="
            h-4 w-4
            transition-transform duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            motion-reduce:transform-none
        "
									strokeWidth={2}
									aria-hidden="true"
								/>
							</Link>

							<a
								href="#solutions-grid"
								className="
									group inline-flex
									min-h-[50px]
									items-center justify-center
									gap-2
									rounded-xl
									border border-navy/10
									bg-white/70
									px-6
									font-display text-[16px]
									font-semibold text-navy
									transition-all duration-300
									hover:border-brand/25
									hover:bg-brand/[0.045]
									focus-visible:outline
									focus-visible:outline-2
									focus-visible:outline-offset-2
									focus-visible:outline-brand
								"
							>
								Explore solutions

								<ChevronRight
									className="
										h-4 w-4
										text-brand
										transition-transform duration-300
										group-hover:translate-x-1
										motion-reduce:transform-none
									"
								/>
							</a>
						</div>

						{/* Lower supporting statement */}

						<div className="mt-8 flex max-w-[440px] items-start gap-4 pt-0">
							<span className="mt-1 h-8 w-[2px] shrink-0 rounded-full bg-brand/70" />

							<p className="text-[13px] leading-[1.8] text-slate-500 sm:text-[14px]">
								Thoughtful technology, built around what your business
								<span className="font-medium text-navy"> actually needs.</span>
							</p>
						</div>
					</div>

					{/* RIGHT — Architecture visual */}

					<div className="lg:col-span-6 xl:col-span-5">
						<HeroVisual />
					</div>
				</div>

				{/* Bottom navigation */}

				<div
					className="
						mt-20
						flex items-center justify-between
						border-t border-navy/[0.07]
						pt-6
						lg:mt-28
					"
				>
					<div className="flex items-center gap-3">
						<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
							Explore what&apos;s possible
						</span>

						<span className="hidden h-px w-12 bg-slate-200 sm:block" />
					</div>

					<a
						href="#solutions-grid"
						aria-label="Scroll to explore our software solutions"
						className="
							group flex items-center
							gap-2
							font-mono text-[10px]
							font-semibold uppercase
							tracking-[0.14em]
							text-navy
							transition-colors
							hover:text-brand
						"
					>
						Scroll to explore

						<span
							className="
								grid h-8 w-8
								place-items-center
								rounded-full
								border border-navy/10
								transition-all duration-300
								group-hover:border-brand/30
								group-hover:bg-brand/[0.06]
							"
						>
							<ArrowDownRight className="h-3.5 w-3.5" />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}