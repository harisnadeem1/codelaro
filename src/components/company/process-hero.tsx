import { Link } from 'react-router';

import {
	ArrowRight,
	ArrowUpRight,
	Check,
	Code2,
	Compass,
	Figma,
	GitBranch,
	Layers3,
	Rocket,
	TrendingUp,
	Target,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Process configuration                                                      */
/* -------------------------------------------------------------------------- */

const PROCESS = [
	{
		number: '01',
		title: 'Discover',
		icon: Compass,
	},
	{
		number: '02',
		title: 'Strategize',
		icon: Target,
	},
	{
		number: '03',
		title: 'Design',
		icon: Figma,
	},
	{
		number: '04',
		title: 'Develop',
		icon: Code2,
	},
	{
		number: '05',
		title: 'Launch',
		icon: Rocket,
	},
	{
		number: '06',
		title: 'Grow',
		icon: TrendingUp,
	},
];

/* -------------------------------------------------------------------------- */
/* Visual: Development Journey                                                */
/* -------------------------------------------------------------------------- */

function HeroVisual() {
	const stageNodes = [
		{ x: 70, y: 75, number: '01' },
		{ x: 170, y: 75, number: '02' },
		{ x: 270, y: 75, number: '03' },
		{ x: 365, y: 150, number: '04' },
		{ x: 270, y: 225, number: '05' },
		{ x: 170, y: 225, number: '06' },
	];

	return (
		<div
			aria-hidden="true"
			className="relative mx-auto w-full max-w-[690px] lg:ml-auto"
		>
			{/* Ambient glow */}
			<div className="pointer-events-none absolute left-1/2 top-[42%] h-[68%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[90px]" />

			<div className="relative">
				{/* Monitor shell */}
				<div className="relative overflow-hidden rounded-[20px] border-[7px] border-[#142033] bg-[#142033] shadow-[0_30px_70px_-28px_rgba(15,23,42,0.38)] sm:rounded-[24px]">
					{/* Screen */}
					<div className="relative aspect-[1.34] overflow-hidden bg-gradient-to-br from-white via-[#F9FDFD] to-[#EDF9F8]">
						{/* Screen grid */}
						<div
							className="pointer-events-none absolute inset-0 opacity-50"
							style={{
								backgroundImage: `
									linear-gradient(rgba(24,188,183,0.05) 1px, transparent 1px),
									linear-gradient(90deg, rgba(24,188,183,0.05) 1px, transparent 1px)
								`,
								backgroundSize: '28px 28px',
							}}
						/>

						{/* Screen glow */}
						<div className="pointer-events-none absolute left-1/2 top-[44%] h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.07] blur-[50px]" />
						<div className="pointer-events-none absolute -right-20 -top-16 h-56 w-56 rounded-full bg-brand/[0.09] blur-[70px]" />

						{/* Top toolbar */}
						<div className="relative z-10 flex items-center justify-between border-b border-brand/10 bg-white/75 px-3 py-2.5 backdrop-blur-sm sm:px-5 sm:py-3">
							<div className="flex items-center gap-2.5">
								<div className="flex items-center gap-1">
									<span className="h-2 w-2 rounded-full bg-[#FB7185]" />
									<span className="h-2 w-2 rounded-full bg-[#FBBF24]" />
									<span className="h-2 w-2 rounded-full bg-brand" />
								</div>

								<div className="h-3.5 w-px bg-slate-200" />

								<div className="flex items-center gap-2">
									<span className="grid h-7 w-7 place-items-center rounded-lg border border-brand/20 bg-brand/[0.08] text-brand">
										<GitBranch className="h-4 w-4" strokeWidth={1.7} />
									</span>

									<div>
										<p className="font-display text-[12px] font-semibold text-navy sm:text-[13px]">
											Development Journey
										</p>
										<p className="font-mono text-[8px] tracking-[0.14em] text-slate-400 sm:text-[9px]">
											FROM IDEA TO IMPACT
										</p>
									</div>
								</div>
							</div>

							<span className="rounded-full border border-brand/15 bg-brand/[0.07] px-2.5 py-1 font-mono text-[8px] font-semibold text-brand-700 sm:px-3 sm:py-1.5 sm:text-[10px]">
								06 STAGES
							</span>
						</div>

						{/* Main screen content */}
						<div className="relative z-10 px-0 pb-0 pt-0 sm:px-0 sm:pb-0 sm:pt-0">
							<div className="relative overflow-hidden  bg-white/70 px-3 py-4 sm:rounded-[20px] sm:px-5 sm:py-5">
								{/* Decorative center glow */}
								<div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.05] blur-[40px]" />

								{/* SVG roadmap */}
								<svg
									viewBox="0 0 500 300"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="relative h-auto w-full overflow-visible"
								>
									<defs>
										<linearGradient
											id="process-path-gradient-monitor"
											x1="35"
											y1="50"
											x2="465"
											y2="255"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#18BCB7" stopOpacity="0.22" />
											<stop offset="0.5" stopColor="#18BCB7" stopOpacity="0.95" />
											<stop offset="1" stopColor="#18BCB7" stopOpacity="0.32" />
										</linearGradient>

										<linearGradient
											id="process-node-gradient-monitor"
											x1="0%"
											y1="0%"
											x2="100%"
											y2="100%"
										>
											<stop stopColor="#18BCB7" />
											<stop offset="1" stopColor="#0C8584" />
										</linearGradient>

										<radialGradient id="process-glow-monitor">
											<stop stopColor="#18BCB7" stopOpacity="0.14" />
											<stop offset="1" stopColor="#18BCB7" stopOpacity="0" />
										</radialGradient>

										<filter
											id="process-shadow-monitor"
											x="-50%"
											y="-50%"
											width="200%"
											height="200%"
										>
											<feGaussianBlur stdDeviation="8" />
										</filter>
									</defs>

									{/* Background glow */}
									<ellipse
										cx="250"
										cy="150"
										rx="210"
										ry="130"
										fill="url(#process-glow-monitor)"
									/>

									{/* Technical guide lines */}
									<g
										stroke="#18BCB7"
										strokeOpacity="0.09"
										strokeWidth="1"
										strokeDasharray="3 6"
									>
										<path d="M20 75H480" />
										<path d="M20 150H480" />
										<path d="M20 225H480" />
										<path d="M95 15V285" />
										<path d="M250 15V285" />
										<path d="M405 15V285" />
									</g>

									{/* Orbit lines */}
									<circle
										cx="250"
										cy="150"
										r="112"
										stroke="#18BCB7"
										strokeOpacity="0.10"
										strokeDasharray="4 8"
									/>
									<circle
										cx="250"
										cy="150"
										r="148"
										stroke="#18BCB7"
										strokeOpacity="0.05"
									/>

									{/* Path base */}
									<path
										id="process-journey-path-monitor"
										d="
											M70 75
											C115 75 125 75 170 75
											C215 75 225 75 270 75
											C315 75 365 95 365 150
											C365 205 315 225 270 225
											C225 225 215 225 170 225
											C125 225 115 225 70 225
										"
										stroke="#18BCB7"
										strokeOpacity="0.10"
										strokeWidth="15"
										strokeLinecap="round"
									/>

									{/* Main path */}
									<path
										d="
											M70 75
											C115 75 125 75 170 75
											C215 75 225 75 270 75
											C315 75 365 95 365 150
											C365 205 315 225 270 225
											C225 225 215 225 170 225
											C125 225 115 225 70 225
										"
										stroke="url(#process-path-gradient-monitor)"
										strokeWidth="2.25"
										strokeLinecap="round"
										strokeDasharray="5 7"
									/>

									{/* Animated signal */}
									<circle r="4.2" fill="#18BCB7">
										<animateMotion
											dur="10s"
											repeatCount="indefinite"
											rotate="auto"
										>
											<mpath href="#process-journey-path-monitor" />
										</animateMotion>
									</circle>

									{/* Stage nodes */}
									{stageNodes.map((node, index) => (
										<g key={node.number}>
											<circle
												cx={node.x}
												cy={node.y + 3}
												r="25"
												fill="#0F172A"
												fillOpacity="0.07"
												filter="url(#process-shadow-monitor)"
											/>

											<circle
												cx={node.x}
												cy={node.y}
												r="24"
												fill="#FFFFFF"
												stroke={index >= 4 ? '#18BCB7' : '#D6EEEC'}
												strokeWidth="1.5"
											/>

											<circle
												cx={node.x}
												cy={node.y}
												r="17"
												fill={
													index >= 4
														? 'url(#process-node-gradient-monitor)'
														: '#F1FAF9'
												}
											/>

											<text
												x={node.x}
												y={node.y + 4}
												textAnchor="middle"
												fontSize="11"
												fontWeight="700"
												fontFamily="monospace"
												fill={index >= 4 ? '#FFFFFF' : '#0B777B'}
											>
												{node.number}
											</text>
										</g>
									))}

									{/* Stage captions */}
									<g
										fontSize="10"
										fontWeight="600"
										fontFamily="sans-serif"
										fill="#64748B"
										textAnchor="middle"
									>
										<text x="70" y="113">DISCOVER</text>
										<text x="170" y="113">STRATEGY</text>
										<text x="270" y="113">DESIGN</text>
										<text x="420" y="154">BUILD</text>
										<text x="270" y="265">LAUNCH</text>
										<text x="170" y="265">GROW</text>
									</g>

									{/* Decorative markers */}
									<g stroke="#18BCB7" strokeOpacity="0.25" strokeWidth="1">
										<path d="M435 30H455" />
										<path d="M445 20V40" />
										<path d="M40 265H60" />
										<path d="M50 255V275" />
									</g>
								</svg>

								{/* Bottom chips */}
								<div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
									{[
										{
											number: '01',
											title: 'Code',
											icon: Compass,
										},
										{
											number: '02',
											title: 'Launch',
											icon: Code2,
										},
										{
											number: '03',
											title: 'Grow',
											icon: TrendingUp,
										},
									].map((phase) => {
										const Icon = phase.icon;

										return (
											<div
												key={phase.number}
												className="flex min-w-0 items-center gap-2 rounded-xl border border-brand/10 bg-white/85 px-2.5 py-3 sm:gap-3 sm:px-4"
											>
												<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/[0.08] text-brand">
													<Icon className="h-4 w-4" strokeWidth={1.7} />
												</div>

												<div className="min-w-0">
													<span className="block font-mono text-[8px] text-brand/65">
														{phase.number}
													</span>
													<span className="block font-display text-[11px] font-semibold text-navy sm:text-[13px]">
														{phase.title}
													</span>
												</div>
											</div>
										);
									})}
								</div>
							</div>

							{/* Screen footer */}
							<div className="mt-4 flex items-center justify-between gap-3 border-t border-brand/10 px-1 pt-3">
								<div className="flex items-center gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/[0.08]">
										<Check className="h-3 w-3 text-brand" />
									</span>

									<p className="text-[10px] font-medium text-slate-500 sm:text-[11px]">
										One connected development journey
									</p>
								</div>

								<span className="font-mono text-[9px] font-semibold tracking-[0.08em] text-brand-700">
									CODE. LAUNCH. GROW.
								</span>
							</div>
						</div>
					</div>

					{/* Bottom bezel */}
					<div className="flex h-6 items-center justify-center bg-[#142033] sm:h-7">
						<span className="h-1.5 w-10 rounded-full bg-white/10" />
					</div>
				</div>

				{/* Monitor stand */}
				<div className="mx-auto flex flex-col items-center">
					<div className="h-10 w-[16%] bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400" />
					<div className="h-3.5 w-[34%] rounded-t-[999px] border border-slate-300/60 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 shadow-[0_10px_20px_rgba(15,23,42,0.08)]" />
				</div>

				{/* Ground shadow */}
				<div className="mx-auto mt-1 h-4 w-[55%] rounded-full bg-navy/[0.06] blur-lg" />
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Process Hero                                                               */
/* -------------------------------------------------------------------------- */

export function ProcessHero() {
	return (
		<section
			id="process-hero"
			aria-labelledby="process-hero-heading"
			className="
				relative isolate
				overflow-hidden
				bg-[#F8FAFC]
			"
		>
			{/* Background */}

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
			>
				<div
					className="
						absolute inset-0
						bg-blueprint-grid
						mask-fade-b
						opacity-25
					"
				/>

				<div
					className="
						absolute -right-40 -top-40
						h-[520px] w-[520px]
						rounded-full
						bg-brand/[0.065]
						blur-[110px]
					"
				/>

				<div
					className="
						absolute -bottom-40 -left-40
						h-[400px] w-[400px]
						rounded-full
						bg-navy/[0.025]
						blur-[100px]
					"
				/>
			</div>

			{/* Main container */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5
					pb-16 pt-28
					sm:px-8
					sm:pb-20 sm:pt-32
					lg:pb-20 lg:pt-36
				"
			>
				<div
					className="
						grid items-center
						gap-12
						lg:grid-cols-12
						lg:gap-12
						xl:gap-16
					"
				>
					{/* -------------------------------------------------- */}
					{/* Left content                                       */}
					{/* -------------------------------------------------- */}

					<div className="min-w-0 lg:col-span-6">
						{/* Eyebrow */}

						<div className="mb-6 inline-flex items-center gap-3">
							<span
								className="
									flex h-8 w-8
									items-center justify-center
									rounded-lg
									border border-brand/15
									bg-brand/[0.07]
									text-brand
								"
							>
								<GitBranch
									className="h-4 w-4"
									strokeWidth={1.7}
								/>
							</span>

							<span
								className="
									font-mono
									text-[11px]
									font-semibold uppercase
									tracking-[0.22em]
									text-brand-700
								"
							>
								Our Development Process
							</span>

							<span className="h-px w-8 bg-brand/40" />
						</div>

						{/* Heading */}

						<h1
							id="process-hero-heading"
							className="
								max-w-[720px]
								font-display
								text-[clamp(2.5rem,3.9vw,4.5rem)]
								font-bold
								leading-[1.1]
								tracking-[-0.045em]
								text-navy
							"
						>
							From your first idea
							<br />

							<span className="text-brand">
								to what comes next.
							</span>
						</h1>

						{/* Description */}

						<p
							className="
								mt-6
								max-w-[520px]
								text-[15px]
								leading-[1.9]
								text-slate-500
								sm:text-[17px]
							"
						>
							Our software development process
							combines strategic planning, thoughtful
							design, disciplined engineering, and
							reliable delivery. From understanding
							your goals to launching and improving
							your product, every stage is designed
							to move your project forward.
						</p>

						{/* Actions */}

						<div
							className="
								mt-9
								flex flex-col gap-3
								sm:flex-row
								sm:items-center
							"
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
									text-[16px]
									font-semibold
									text-white
									transition-all duration-300
									hover:-translate-y-0.5
									hover:bg-brand-600
									focus-visible:outline
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
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
								to="/work"
								className="
									group
									inline-flex h-[52px]
									w-full items-center
									justify-center gap-3
									rounded-xl
									border border-navy/15
									bg-white
									px-7
									font-display
									text-[16px]
									font-semibold
									text-navy
									transition-all duration-300
									hover:border-brand/40
									hover:bg-slate-50
									focus-visible:outline
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
									sm:w-auto
								"
							>
								Explore Our Work

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

						{/* Supporting statement */}

						<div
							className="
								mt-11
								flex items-start gap-3
								border-t border-navy/[0.08]
								pt-6
							"
						>
							<div
								className="
									flex h-9 w-9
									shrink-0
									items-center justify-center
									rounded-lg
									border border-brand/15
									bg-brand/[0.07]
									text-brand
								"
							>
								<Layers3
									className="h-[18px] w-[18px]"
									strokeWidth={1.7}
								/>
							</div>

							<div>
								<p className="font-display text-[13px] font-semibold text-navy">
									A process built around your goals.
								</p>

								<p
									className="
										mt-1
										max-w-[400px]
										text-[12px]
										leading-relaxed
										text-slate-500
										sm:text-[13px]
									"
								>
									Clear communication, collaborative
									decisions, and purposeful delivery
									at every stage.
								</p>
							</div>
						</div>
					</div>

					{/* -------------------------------------------------- */}
					{/* Right visual                                        */}
					{/* -------------------------------------------------- */}

					<div className="relative min-w-0 lg:col-span-6">
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