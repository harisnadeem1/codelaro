import { Link } from 'react-router';

import {
	ArrowRight,
	ArrowUpRight,
	Braces,
	Check,
	Code2,
	Cpu,
	Layers3,
	Rocket,
	TrendingUp,
	Zap,
} from 'lucide-react';

import { ABOUT } from '@/data/company';

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const PROCESS = [
	{
		number: '01',
		title: 'Code',
		description: 'Build with purpose',
		icon: Code2,
	},
	{
		number: '02',
		title: 'Launch',
		description: 'Bring ideas to life',
		icon: Rocket,
	},
	{
		number: '03',
		title: 'Grow',
		description: 'Engineer for tomorrow',
		icon: TrendingUp,
	},
];

/* -------------------------------------------------------------------------- */
/* Small visual components                                                    */
/* -------------------------------------------------------------------------- */

function VisualGrid() {
	return (
		<div
			aria-hidden="true"
			className="
				pointer-events-none
				absolute inset-0
				opacity-[0.045]
			"
			style={{
				backgroundImage: `
					linear-gradient(
						to right,
						#FFFFFF 1px,
						transparent 1px
					),
					linear-gradient(
						to bottom,
						#FFFFFF 1px,
						transparent 1px
					)
				`,
				backgroundSize: '38px 38px',
			}}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Abstract architecture visual                                               */
/* -------------------------------------------------------------------------- */

function ArchitectureVisual() {
	return (
		<div
			aria-hidden="true"
			className="
				relative
				flex h-[172px] w-full
				items-center justify-center
				overflow-hidden
				rounded-2xl
				border border-white/[0.08]
				bg-[#111F34]
				sm:h-[205px]
			"
		>
			{/* Background grid */}

			<div
				className="absolute inset-0 opacity-[0.07]"
				style={{
					backgroundImage: `
						linear-gradient(
							to right,
							#FFFFFF 1px,
							transparent 1px
						),
						linear-gradient(
							to bottom,
							#FFFFFF 1px,
							transparent 1px
						)
					`,
					backgroundSize: '26px 26px',
				}}
			/>

			{/* Ambient lighting */}

			<div
				className="
					pointer-events-none
					absolute left-1/2 top-1/2
					h-48 w-48
					-translate-x-1/2 -translate-y-1/2
					rounded-full bg-brand/15
					blur-[65px]
				"
			/>

			{/* Connection architecture */}

			<svg
				viewBox="0 0 360 180"
				fill="none"
				className="
					absolute inset-0
					h-full w-full
				"
				preserveAspectRatio="xMidYMid meet"
			>
				<defs>
					<linearGradient
						id="about-architecture-gradient"
						x1="0"
						y1="0"
						x2="360"
						y2="180"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#18BCB7" stopOpacity="0.12" />
						<stop
							offset="0.5"
							stopColor="#18BCB7"
							stopOpacity="0.8"
						/>
						<stop
							offset="1"
							stopColor="#18BCB7"
							stopOpacity="0.12"
						/>
					</linearGradient>
				</defs>

				{/* Horizontal connections */}

				<path
					d="M78 90H282"
					stroke="url(#about-architecture-gradient)"
					strokeWidth="1"
					strokeDasharray="4 5"
				/>

				{/* Vertical connections */}

				<path
					d="M180 28V152"
					stroke="url(#about-architecture-gradient)"
					strokeWidth="1"
					strokeDasharray="4 5"
				/>

				{/* Diagonal connections */}

				<path
					d="M105 45L255 135"
					stroke="#18BCB7"
					strokeOpacity="0.25"
				/>

				<path
					d="M255 45L105 135"
					stroke="#18BCB7"
					strokeOpacity="0.25"
				/>

				{/* Architecture nodes */}

				{[
					[78, 90],
					[282, 90],
					[180, 28],
					[180, 152],
					[105, 45],
					[255, 45],
					[105, 135],
					[255, 135],
				].map(([cx, cy], index) => (
					<g key={index}>
						<circle
							cx={cx}
							cy={cy}
							r="5"
							fill="#111F34"
							stroke="#18BCB7"
							strokeOpacity="0.6"
						/>

						<circle
							cx={cx}
							cy={cy}
							r="1.5"
							fill="#18BCB7"
						/>
					</g>
				))}

				{/* Center orbit */}

				<circle
					cx="180"
					cy="90"
					r="48"
					stroke="#18BCB7"
					strokeOpacity="0.18"
					strokeDasharray="3 5"
				/>

				<circle
					cx="180"
					cy="90"
					r="65"
					stroke="#18BCB7"
					strokeOpacity="0.08"
				/>
			</svg>

			{/* Central processor */}

			<div
				className="
					relative z-10
					flex h-[84px] w-[84px]
					items-center justify-center
					rounded-[22px]
					border border-brand/45
					bg-[#183344]
					shadow-[0_0_60px_rgba(24,188,183,0.15)]
					sm:h-[100px] sm:w-[100px]
				"
			>
				<div
					className="
						absolute inset-[6px]
						rounded-[17px]
						border border-brand/20
					"
				/>

				<Braces
					className="
						relative z-10
						h-9 w-9 text-brand
						sm:h-11 sm:w-11
					"
					strokeWidth={1.5}
				/>
			</div>

			{/* Interface labels */}

			<div
				className="
					absolute left-4 top-4
					flex items-center gap-2
					rounded-md
					border border-white/10
					bg-white/[0.04]
					px-2.5 py-1.5
					font-mono text-[9px]
					text-white/60
					sm:text-[10px]
				"
			>
				<span
					className="
						h-1.5 w-1.5
						rounded-full bg-brand
					"
				/>

				SYSTEM ARCHITECTURE
			</div>

			<div
				className="
					absolute bottom-4 right-4
					font-mono text-[9px]
					tracking-[0.14em]
					text-brand/70
				"
			>
				ENGINEERED TO SCALE
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Process card                                                               */
/* -------------------------------------------------------------------------- */

function ProcessCard() {
	return (
		<div
			className="
				relative
				overflow-hidden
				rounded-[22px]
				border border-white/[0.12]
				bg-white/[0.055]
				p-4
				backdrop-blur-md
				sm:p-5
			"
		>
			<div className="mb-5 flex items-center justify-between gap-3">
				<div className="flex items-center gap-2.5">
					<div
						className="
							flex h-8 w-8
							items-center justify-center
							rounded-lg
							border border-brand/20
							bg-brand/10
							text-brand
						"
					>
						<Layers3 className="h-4 w-4" />
					</div>

					<div>
						<p
							className="
								font-display
								text-[12px] font-semibold
								text-white
								sm:text-[13px]
							"
						>
							Our development philosophy
						</p>

						<p
							className="
								mt-0.5
								font-mono text-[9px]
								tracking-[0.08em]
								text-white/40
							"
						>
							FROM CONCEPT TO CONTINUOUS GROWTH
						</p>
					</div>
				</div>

				<ArrowUpRight
					className="h-4 w-4 shrink-0 text-white/35"
				/>
			</div>

			{/* Process stages */}

			<div className="relative grid grid-cols-3 gap-2 sm:gap-3">
				{/* Connecting line */}

				<div
					aria-hidden="true"
					className="
						pointer-events-none
						absolute left-[15%] right-[15%] top-[19px]
						h-px
						bg-gradient-to-r
						from-transparent
						via-brand/45
						to-transparent
					"
				/>

				{PROCESS.map((step) => {
					const Icon = step.icon;

					return (
						<div
							key={step.number}
							className="
								relative z-10
								flex flex-col
								items-center
								text-center
							"
						>
							<div
								className="
									mb-3
									flex h-10 w-10
									items-center justify-center
									rounded-xl
									border border-brand/35
									bg-[#173445]
									text-brand
									shadow-[0_0_20px_rgba(24,188,183,0.08)]
								"
							>
								<Icon
									className="h-[18px] w-[18px]"
									strokeWidth={1.7}
								/>
							</div>

							<span
								className="
									mb-1
									font-mono text-[9px]
									text-brand/65
								"
							>
								{step.number}
							</span>

							<h3
								className="
									font-display text-[13px]
									font-semibold text-white
									sm:text-[15px]
								"
							>
								{step.title}
							</h3>

							<p
								className="
									mt-1
									max-w-[105px]
									text-[10px]
									leading-relaxed
									text-white/45
									sm:text-[11px]
								"
							>
								{step.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Decorative code interface                                                  */
/* -------------------------------------------------------------------------- */

function CodeInterface() {
	return (
		<div
			aria-hidden="true"
			className="
				hidden
				absolute -right-5 top-[15%]
				z-20
				w-[184px]
				rotate-[5deg]
				overflow-hidden
				rounded-xl
				border border-white/15
				bg-[#14273B]
				shadow-[0_20px_55px_rgba(0,0,0,0.3)]
				lg:block
				xl:-right-9
				xl:w-[205px]
			"
		>
			{/* Window header */}

			<div
				className="
					flex items-center justify-between
					border-b border-white/[0.08]
					bg-white/[0.035]
					px-3 py-2.5
				"
			>
				<div className="flex items-center gap-1.5">
					<span className="h-1.5 w-1.5 rounded-full bg-[#FB7185]" />
					<span className="h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
					<span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
				</div>

				<span className="font-mono text-[9px] text-white/40">
					codelaro.ts
				</span>
			</div>

			{/* Code preview */}

			<div className="space-y-2 px-3 py-3.5">
				<div className="flex items-center gap-2">
					<span className="font-mono text-[9px] text-white/20">
						01
					</span>

					<span className="font-mono text-[9px] text-brand">
						const
					</span>

					<span className="font-mono text-[9px] text-white/75">
						vision =
					</span>

					<span className="font-mono text-[9px] text-[#FBBF24]">
						&#123;
					</span>
				</div>

				{[
					['02', 'design', 'purpose'],
					['03', 'build', 'quality'],
					['04', 'scale', 'growth'],
				].map(([line, key, value]) => (
					<div key={line} className="flex items-center gap-1.5">
						<span className="mr-1 font-mono text-[9px] text-white/20">
							{line}
						</span>

						<span className="pl-2 font-mono text-[9px] text-[#93C5FD]">
							{key}
						</span>

						<span className="font-mono text-[9px] text-white/50">
							:
						</span>

						<span className="font-mono text-[9px] text-brand">
							'{value}'
						</span>
					</div>
				))}

				<div className="flex items-center gap-2">
					<span className="font-mono text-[9px] text-white/20">
						05
					</span>

					<span className="font-mono text-[9px] text-[#FBBF24]">
						&#125;;
					</span>
				</div>
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Floating growth interface                                                  */
/* -------------------------------------------------------------------------- */

function GrowthInterface() {
	return (
		<div
			aria-hidden="true"
			className="
				hidden
				absolute -bottom-5 -left-8
				z-20
				w-[190px]
				-rotate-[4deg]
				rounded-2xl
				border border-slate-200/90
				bg-white
				p-3.5
				shadow-[0_18px_55px_rgba(15,23,42,0.14)]
				lg:block
				xl:-left-11
			"
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div
						className="
							flex h-7 w-7
							items-center justify-center
							rounded-lg
							bg-brand/10
							text-brand
						"
					>
						<TrendingUp className="h-3.5 w-3.5" />
					</div>

					<span className="text-[11px] font-semibold text-navy">
						Continuous growth
					</span>
				</div>
			</div>

			<div className="mt-3 flex items-end gap-1.5">
				{[24, 35, 29, 46, 41, 56, 49, 68, 61, 83].map(
					(height, index) => (
						<div
							key={index}
							className="
								flex-1
								rounded-t-[3px]
								bg-brand/75
							"
							style={{
								height: `${height * 0.55}px`,
								opacity: 0.3 + index * 0.07,
							}}
						/>
					),
				)}
			</div>

			<div
				className="
					mt-2.5
					flex items-center justify-between
					border-t border-slate-100
					pt-2
				"
			>
				<span className="font-mono text-[9px] text-slate-400">
					BUILD · IMPROVE · SCALE
				</span>

				<ArrowUpRight className="h-3 w-3 text-brand" />
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Main hero visual                                                           */
/* -------------------------------------------------------------------------- */

function HeroVisual() {
	const steps = [
		{
			number: '01',
			title: 'Code',
			description: 'Engineer with purpose',
			icon: Code2,
		},
		{
			number: '02',
			title: 'Launch',
			description: 'Turn ideas into reality',
			icon: Rocket,
		},
		{
			number: '03',
			title: 'Grow',
			description: 'Built for what comes next',
			icon: TrendingUp,
		},
	];

	return (
		<div
			aria-hidden="true"
			className="
				relative mx-auto
				w-full max-w-[570px]
				lg:ml-auto
			"
		>
			{/* Background atmosphere */}
			<div className="pointer-events-none absolute -inset-5 rounded-[45px] bg-brand/[0.055] blur-3xl" />

			<div className="pointer-events-none absolute -inset-2 rounded-[35px] border border-brand/10" />

			{/* Main container */}
			<div
				className="
					relative isolate
					overflow-hidden
					rounded-[28px]
					border border-brand/15
					bg-white
					p-5
					shadow-[0_25px_75px_-30px_rgba(15,23,42,0.14)]
					sm:p-7
				"
			>
				{/* Background grid */}
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.035]"
					style={{
						backgroundImage: `
							linear-gradient(#0F172A 1px, transparent 1px),
							linear-gradient(90deg, #0F172A 1px, transparent 1px)
						`,
						backgroundSize: '28px 28px',
					}}
				/>

				{/* Ambient gradients */}
				<div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/[0.09] blur-[65px]" />

				<div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-brand/[0.045] blur-[60px]" />

				<div className="relative z-10">
					{/* Header */}
					<div className="flex items-center justify-between gap-3">
						<div className="flex items-center gap-3">
							<div
								className="
									flex h-10 w-10
									items-center justify-center
									rounded-xl
									border border-brand/15
									bg-brand/[0.08]
									text-brand
								"
							>
								<Layers3 className="h-5 w-5" strokeWidth={1.7} />
							</div>

							<div>
								<p className="font-display text-[14px] font-bold text-navy">
									Codelaro
								</p>

								<p className="mt-0.5 font-mono text-[10px] tracking-wide text-slate-400">
									ENGINEERED FOR GROWTH
								</p>
							</div>
						</div>

						<div className="flex items-center gap-2 rounded-full border border-brand/15 bg-brand/[0.06] px-3 py-1.5">
							<span className="h-1.5 w-1.5 rounded-full bg-brand" />

							<span className="font-mono text-[10px] font-semibold text-brand-700">
								OUR APPROACH
							</span>
						</div>
					</div>

					{/* Architecture illustration */}
					<div
						className="
							relative mt-6
							flex h-[180px]
							items-center justify-center
							overflow-hidden
							rounded-2xl
							border border-brand/10
							bg-[#F8FCFC]
							sm:h-[205px]
						"
					>
						{/* Grid */}
						<div
							className="pointer-events-none absolute inset-0 opacity-40"
							style={{
								backgroundImage: `
									linear-gradient(rgba(24,188,183,0.065) 1px, transparent 1px),
									linear-gradient(90deg, rgba(24,188,183,0.065) 1px, transparent 1px)
								`,
								backgroundSize: '24px 24px',
							}}
						/>

						{/* Central glow */}
						<div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.09] blur-[45px]" />

						{/* Architecture connections */}
						<svg
							viewBox="0 0 420 200"
							fill="none"
							className="pointer-events-none absolute inset-0 h-full w-full"
							preserveAspectRatio="xMidYMid meet"
						>
							<defs>
								<linearGradient
									id="about-light-connection"
									x1="40"
									y1="30"
									x2="380"
									y2="170"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#18BCB7" stopOpacity="0.08" />
									<stop
										offset="0.5"
										stopColor="#18BCB7"
										stopOpacity="0.65"
									/>
									<stop
										offset="1"
										stopColor="#18BCB7"
										stopOpacity="0.08"
									/>
								</linearGradient>
							</defs>

							{/* Outer orbit */}
							<circle
								cx="210"
								cy="100"
								r="78"
								stroke="#18BCB7"
								strokeOpacity="0.15"
								strokeDasharray="3 6"
							/>

							<circle
								cx="210"
								cy="100"
								r="58"
								stroke="#18BCB7"
								strokeOpacity="0.12"
							/>

							{/* Connections */}
							{[
								'M210 100L90 100',
								'M210 100L330 100',
								'M210 100L210 23',
								'M210 100L210 177',
								'M210 100L120 40',
								'M210 100L300 40',
								'M210 100L120 160',
								'M210 100L300 160',
							].map((path, index) => (
								<path
									key={index}
									d={path}
									stroke="url(#about-light-connection)"
									strokeWidth="1.3"
									strokeDasharray="4 5"
								/>
							))}

							{/* Nodes */}
							{[
								[90, 100],
								[330, 100],
								[210, 23],
								[210, 177],
								[120, 40],
								[300, 40],
								[120, 160],
								[300, 160],
							].map(([cx, cy], index) => (
								<g key={index}>
									<circle
										cx={cx}
										cy={cy}
										r="7"
										fill="white"
										stroke="#18BCB7"
										strokeOpacity="0.35"
									/>

									<circle
										cx={cx}
										cy={cy}
										r="2.5"
										fill="#18BCB7"
									/>
								</g>
							))}
						</svg>

						{/* Central architecture element */}
						<div
							className="
								relative z-10
								flex h-[88px] w-[88px]
								items-center justify-center
								rounded-[24px]
								border border-brand/30
								bg-white
								shadow-[0_12px_40px_rgba(24,188,183,0.13)]
							"
						>
							<div className="absolute inset-[6px] rounded-[18px] border border-brand/10" />

							<div
								className="
									relative flex h-14 w-14
									items-center justify-center
									rounded-[16px]
									bg-brand/[0.08]
								"
							>
								<Braces
									className="h-8 w-8 text-brand"
									strokeWidth={1.7}
								/>
							</div>
						</div>

						{/* Small interface labels */}
						<div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md border border-brand/10 bg-white/90 px-2 py-1.5 shadow-sm sm:left-4 sm:top-4">
							<span className="h-1.5 w-1.5 rounded-full bg-brand" />

							<span className="font-mono text-[9px] font-semibold text-slate-500">
								DIGITAL ENGINEERING
							</span>
						</div>

						<div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md border border-brand/10 bg-white/90 px-2 py-1.5 shadow-sm sm:bottom-4 sm:right-4">
							<Zap className="h-3 w-3 text-brand" />

							<span className="font-mono text-[9px] font-semibold text-slate-500">
								BUILT TO EVOLVE
							</span>
						</div>
					</div>

					{/* Philosophy heading */}
					<div className="mb-4 mt-6 flex items-end justify-between gap-3">
						<div>
							<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-700">
								Our Philosophy
							</p>

							<h3 className="mt-1.5 font-display text-[18px] font-bold tracking-tight text-navy sm:text-[20px]">
								Code. Launch. Grow.
							</h3>
						</div>

						<div className="hidden items-center gap-1.5 pb-1 sm:flex">
							<span className="h-px w-5 bg-brand/40" />

							<span className="font-mono text-[9px] text-slate-400">
								01 — 03
							</span>
						</div>
					</div>

					{/* Process stages */}
					<div className="grid grid-cols-3 gap-2 sm:gap-3">
						{steps.map((step) => {
							const Icon = step.icon;

							return (
								<div
									key={step.number}
									className="
										group relative
										rounded-xl
										border border-brand/10
										bg-[#F8FCFC]
										p-3
										transition-all duration-300
										hover:-translate-y-1
										hover:border-brand/30
										hover:bg-brand/[0.045]
										sm:p-4
									"
								>
									<div className="flex items-start justify-between gap-1">
										<div
											className="
												flex h-8 w-8
												items-center justify-center
												rounded-lg
												border border-brand/15
												bg-white
												text-brand
												transition-colors
												group-hover:bg-brand/10
												sm:h-9 sm:w-9
											"
										>
											<Icon
												className="h-4 w-4"
												strokeWidth={1.8}
											/>
										</div>

										<span className="font-mono text-[9px] font-semibold text-brand/45">
											{step.number}
										</span>
									</div>

									<h4 className="mt-3 font-display text-[13px] font-bold text-navy sm:text-[14px]">
										{step.title}
									</h4>

									<p className="mt-1 text-[10px] leading-relaxed text-slate-500 sm:text-[11px]">
										{step.description}
									</p>
								</div>
							);
						})}
					</div>

					{/* Bottom detail */}
					<div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
						<div className="flex items-center gap-2">
							<div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/[0.08]">
								<Check className="h-3.5 w-3.5 text-brand" />
							</div>

							<span className="text-[11px] font-medium text-slate-500 sm:text-[12px]">
								Technology with purpose.
							</span>
						</div>

						<div className="flex items-center gap-1.5">
							<span className="font-mono text-[9px] font-semibold tracking-wide text-brand-700">
								CODELARO
							</span>

							<ArrowUpRight className="h-3.5 w-3.5 text-brand" />
						</div>
					</div>
				</div>
			</div>

			{/* Decorative corner accents */}
			<span className="pointer-events-none absolute -left-3 -top-3 hidden h-7 w-7 rounded-tl-lg border-l-2 border-t-2 border-brand/30 sm:block" />

			<span className="pointer-events-none absolute -bottom-3 -right-3 hidden h-7 w-7 rounded-br-lg border-b-2 border-r-2 border-brand/30 sm:block" />
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* About Hero                                                                 */
/* -------------------------------------------------------------------------- */

export function AboutHero() {
	return (
		<section
			id="about-hero"
			aria-labelledby="about-hero-heading"
			className="
				relative isolate
				overflow-hidden
				bg-[#F8FAFC]
			"
		>
			{/* Background atmosphere */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
				"
			>
				{/* Blueprint grid */}

				<div
					className="
						absolute inset-0
						bg-blueprint-grid
						mask-fade-b
						opacity-35
					"
				/>

				{/* Upper-right gradient */}

			

				{/* Bottom-left gradient */}

				<div
					className="
						absolute -bottom-40 -left-40
						h-[440px] w-[440px]
						rounded-full
						bg-navy/[0.035]
						blur-[100px]
					"
				/>

				{/* Decorative vertical line */}

				<div
					className="
						absolute bottom-0
						left-1/2 top-0
						hidden w-px
						bg-gradient-to-b
						from-transparent
						via-navy/[0.035]
						to-transparent
						2xl:block
					"
				/>
			</div>

			{/* Main container */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5
					pb-20 pt-32
					sm:px-8
					sm:pb-20 sm:pt-32
					lg:pb-20 lg:pt-32
					xl:pt-32
				"
			>
				<div
					className="
						grid items-center
						gap-16
						lg:grid-cols-12
						lg:gap-10
						xl:gap-16
					"
				>
					{/* ------------------------------------------------------ */}
					{/* Left content                                           */}
					{/* ------------------------------------------------------ */}

					<div className="relative lg:col-span-6 xl:col-span-6">
						{/* Eyebrow */}

						<div
							className="
								rise-in
								mb-7
								inline-flex items-center gap-3
							"
							style={{ animationDelay: '0.05s' }}
						>
							<span
								className="
									flex h-8 w-8
									items-center justify-center
									rounded-lg
									border border-brand/20
									bg-brand/[0.08]
								"
							>
								<span
									className="
										h-2 w-2
										rounded-[2px]
										bg-brand
										rotate-45
									"
								/>
							</span>

							<span
								className="
									font-mono text-[11px]
									font-semibold uppercase
									tracking-[0.23em]
									text-brand-700
									sm:text-[12px]
								"
							>
								About Codelaro
							</span>

							<span className="h-px w-9 bg-brand/35" />
						</div>

						{/* Primary heading */}

						<h1
							id="about-hero-heading"
							className="
								rise-in
								max-w-[750px]
								font-display
								text-[clamp(2.55rem,4.1vw,4.6rem)]
								font-bold
								leading-[1.08]
								tracking-[-0.045em]
								text-navy
							"
							style={{ animationDelay: '0.12s' }}
						>
							We build software.
							<br />

							<span className="text-brand">
								You build
							</span>{' '}

							the future.
						</h1>

						{/* Supporting introduction */}

						<div
							className="
								rise-in
								mt-7
								max-w-[590px]
							"
							style={{ animationDelay: '0.22s' }}
						>
							<p
								className="
									font-display
									text-[17px]
									font-medium
									leading-[1.65]
									text-navy/85
									sm:text-[19px]
								"
							>
								Your technology partner for turning
								ambitious ideas into powerful digital
								products.
							</p>

							<p
								className="
									mt-4
									max-w-[560px]
									text-[14px]
									leading-[1.9]
									text-slate-500
									sm:text-[16px]
								"
							>
								{ABOUT.purpose}
							</p>
						</div>

						{/* Actions */}

						<div
							className="
								rise-in
								mt-6
								flex flex-col gap-3
								sm:flex-row sm:items-center
							"
							style={{ animationDelay: '0.32s' }}
						>
							{/* Primary CTA */}

							<Link
								to="/contact"
								className="
									group
									inline-flex h-[52px]
									w-full items-center
									justify-center gap-3
									rounded-xl
									bg-brand
									px-7
									font-display
									text-[16px] font-semibold
									text-white
									shadow-[0_8px_25px_rgba(24,188,183,0.17)]
									transition-all duration-300
									hover:-translate-y-0.5
									hover:bg-brand-600
									hover:shadow-[0_12px_30px_rgba(24,188,183,0.25)]
									focus-visible:outline
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
									active:translate-y-0
									sm:w-auto
								"
							>
								Start a Project

								<ArrowUpRight
									className="
										h-[17px] w-[17px]
										transition-transform duration-300
										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5
									"
								/>
							</Link>

							{/* Secondary CTA */}

							<Link
								to="/company/why-codelaro"
								className="
									group
									inline-flex h-[52px]
									w-full items-center
									justify-center gap-3
									rounded-xl
									border border-navy/15
									bg-white/70
									px-7
									font-display
									text-[16px] font-semibold
									text-navy
									transition-all duration-300
									hover:border-brand/40
									hover:bg-white
									focus-visible:outline
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
									sm:w-auto
								"
							>
								Why Codelaro

								<ArrowRight
									className="
										h-[17px] w-[17px]
										text-brand
										transition-transform duration-300
										group-hover:translate-x-1
									"
								/>
							</Link>
						</div>

						{/* Bottom trust statement */}

						<div
							className="
								rise-in
								mt-0
								flex items-start gap-4
								pt-8
								sm:mt-0
							"
							style={{ animationDelay: '0.42s' }}
						>
							<div
								className="
									flex h-10 w-10
									shrink-0 items-center justify-center
									rounded-xl
									border border-brand/15
									bg-brand/[0.07]
									text-brand
								"
							>
								<Layers3
									className="h-[19px] w-[19px]"
									strokeWidth={1.7}
								/>
							</div>

							<div>
								<p
									className="
										font-display
										text-[13px]
										font-semibold
										text-navy
									"
								>
									More than development.
									A long-term technology partner.
								</p>

								<p
									className="
										mt-1.5
										max-w-[420px]
										text-[12px]
										leading-relaxed
										text-slate-500
										sm:text-[13px]
									"
								>
									Thoughtful engineering, transparent
									collaboration, and technology
									designed to evolve with your business.
								</p>
							</div>
						</div>
					</div>

					{/* ------------------------------------------------------ */}
					{/* Right visual                                           */}
					{/* ------------------------------------------------------ */}

					<div
						className="
							rise-in
							relative
							min-w-0
							px-3 pb-3
							sm:px-5
							lg:col-span-6
							lg:px-2 lg:pb-5
							xl:px-6
						"
						style={{ animationDelay: '0.25s' }}
					>
						<HeroVisual />
					</div>
				</div>
			</div>

			{/* Bottom separator */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute bottom-0 left-0 right-0
					h-px
					bg-gradient-to-r
					from-transparent
					via-navy/10
					to-transparent
				"
			/>
		</section>
	);
}