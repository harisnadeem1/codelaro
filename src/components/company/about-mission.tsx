import {
	ArrowUpRight,
	Target,
	Eye,
	Flag,
	MoveUpRight,
	Check,
	Sparkles,
} from 'lucide-react';

import { ABOUT } from '@/data/company';

/* -------------------------------------------------------------------------- */
/* Purpose visual                                                             */
/* -------------------------------------------------------------------------- */

function PurposeVisual() {
	return (
		<div
			aria-hidden="true"
			className="
				pointer-events-none
				relative
				flex h-[150px] w-full
				items-center justify-center
				overflow-hidden
				sm:h-[180px]
			"
		>
			{/* Background glow */}

			<div
				className="
					absolute left-1/2 top-1/2
					h-44 w-44
					-translate-x-1/2 -translate-y-1/2
					rounded-full bg-brand/10
					blur-[50px]
				"
			/>

			{/* Architecture illustration */}

			<svg
				viewBox="0 0 400 180"
				fill="none"
				className="absolute inset-0 h-full w-full"
				preserveAspectRatio="xMidYMid meet"
			>
				<defs>
					<linearGradient
						id="purpose-gradient"
						x1="0"
						y1="0"
						x2="400"
						y2="180"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#18BCB7" stopOpacity="0.08" />
						<stop
							offset="0.5"
							stopColor="#18BCB7"
							stopOpacity="0.6"
						/>
						<stop
							offset="1"
							stopColor="#18BCB7"
							stopOpacity="0.08"
						/>
					</linearGradient>
				</defs>

				{/* Connecting lines */}

				<path
					d="M40 90H360"
					stroke="url(#purpose-gradient)"
					strokeDasharray="4 6"
				/>

				<path
					d="M200 10V170"
					stroke="url(#purpose-gradient)"
					strokeDasharray="4 6"
				/>

				<path
					d="M100 35L300 145"
					stroke="#18BCB7"
					strokeOpacity="0.2"
				/>

				<path
					d="M300 35L100 145"
					stroke="#18BCB7"
					strokeOpacity="0.2"
				/>

				{/* Outer circles */}

				<circle
					cx="200"
					cy="90"
					r="74"
					stroke="#18BCB7"
					strokeOpacity="0.15"
					strokeDasharray="4 7"
				/>

				<circle
					cx="200"
					cy="90"
					r="53"
					stroke="#18BCB7"
					strokeOpacity="0.22"
				/>

				{/* Connection nodes */}

				{[
					[40, 90],
					[360, 90],
					[200, 10],
					[200, 170],
					[100, 35],
					[300, 35],
					[100, 145],
					[300, 145],
				].map(([cx, cy], index) => (
					<g key={index}>
						<circle
							cx={cx}
							cy={cy}
							r="5"
							fill="#FFFFFF"
							stroke="#18BCB7"
							strokeOpacity="0.5"
						/>

						<circle
							cx={cx}
							cy={cy}
							r="1.5"
							fill="#18BCB7"
						/>
					</g>
				))}
			</svg>

			{/* Central icon */}

			<div
				className="
					relative z-10
					flex h-[86px] w-[86px]
					items-center justify-center
					rounded-[24px]
					border border-brand/25
					bg-white
					shadow-[0_15px_45px_rgba(24,188,183,0.12)]
				"
			>
				<div
					className="
						absolute inset-[6px]
						rounded-[19px]
						border border-brand/10
					"
				/>

				<div
					className="
						flex h-14 w-14
						items-center justify-center
						rounded-[17px]
						bg-brand/[0.08]
						text-brand
					"
				>
					<Flag className="h-7 w-7" strokeWidth={1.6} />
				</div>
			</div>

			{/* Floating details */}

			<div
				className="
					absolute left-3 top-3
					flex items-center gap-1.5
					rounded-md
					border border-brand/10
					bg-white/90
					px-2 py-1.5
					shadow-sm
					sm:left-5
				"
			>
				<span className="h-1.5 w-1.5 rounded-full bg-brand" />

				<span className="font-mono text-[9px] font-semibold text-slate-500">
					OUR FOUNDATION
				</span>
			</div>

			<div
				className="
					absolute bottom-3 right-3
					font-mono text-[9px]
					font-semibold tracking-[0.12em]
					text-brand/70
					sm:right-5
				"
			>
				BUILT WITH PURPOSE
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Mission visual                                                             */
/* -------------------------------------------------------------------------- */

function MissionVisual() {
	return (
		<div
			aria-hidden="true"
			className="
				relative
				flex h-[105px] w-full
				items-center justify-center
				overflow-hidden
				rounded-xl
				border border-brand/10
				bg-[#F8FCFC]
			"
		>
			{/* Grid */}

			<div
				className="absolute inset-0 opacity-50"
				style={{
					backgroundImage: `
						linear-gradient(rgba(24,188,183,0.055) 1px, transparent 1px),
						linear-gradient(90deg, rgba(24,188,183,0.055) 1px, transparent 1px)
					`,
					backgroundSize: '20px 20px',
				}}
			/>

			{/* Connected milestones */}

			<div className="relative flex items-center gap-3 sm:gap-5">
				{[1, 2, 3].map((item, index) => (
					<div key={item} className="relative flex items-center">
						<div
							className={`
								relative z-10
								flex h-12 w-12
								items-center justify-center
								rounded-xl
								border
								shadow-sm
								${
									index === 1
										? 'border-brand/40 bg-brand text-white'
										: 'border-brand/20 bg-white text-brand'
								}
							`}
						>
							{index === 0 && (
								<Target className="h-5 w-5" strokeWidth={1.6} />
							)}

							{index === 1 && (
								<Check className="h-5 w-5" strokeWidth={2} />
							)}

							{index === 2 && (
								<MoveUpRight
									className="h-5 w-5"
									strokeWidth={1.6}
								/>
							)}
						</div>

						{index < 2 && (
							<div className="ml-3 flex items-center sm:ml-5">
								<div className="h-px w-5 bg-brand/40 sm:w-8" />

								<div className="h-1.5 w-1.5 rounded-full bg-brand/60" />
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Vision visual                                                              */
/* -------------------------------------------------------------------------- */

function VisionVisual() {
	return (
		<div
			aria-hidden="true"
			className="
				relative
				flex h-[105px] w-full
				items-end justify-center
				overflow-hidden
				rounded-xl
				border border-brand/10
				bg-[#F8FCFC]
			"
		>
			{/* Background */}

			<div
				className="
					pointer-events-none
					absolute -bottom-16 left-1/2
					h-44 w-44
					-translate-x-1/2
					rounded-full bg-brand/10
					blur-[45px]
				"
			/>

			{/* Growth bars */}

			<div className="relative flex h-full items-end gap-2 pb-5">
				{[26, 35, 31, 48, 44, 58, 54, 75].map(
					(height, index) => (
						<div
							key={index}
							className="
								w-5
								rounded-t-[5px]
								border border-brand/15
								bg-gradient-to-t
								from-brand/10
								to-brand/50
								sm:w-6
							"
							style={{
								height: `${height}%`,
								opacity: 0.45 + index * 0.07,
							}}
						/>
					),
				)}
			</div>

			{/* Upward indicator */}

			<div
				className="
					absolute right-4 top-3
					flex h-7 w-7
					items-center justify-center
					rounded-lg
					border border-brand/15
					bg-white
					text-brand
					shadow-sm
				"
			>
				<ArrowUpRight className="h-4 w-4" />
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* About Mission                                                              */
/* -------------------------------------------------------------------------- */

export function AboutMission() {
	return (
		<section
			id="mission"
			aria-labelledby="mission-heading"
			className="
				relative isolate
				overflow-hidden
				bg-white
				py-20
				sm:py-20
				lg:py-20
			"
		>
			{/* Background atmosphere */}

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
			>
				<div className="absolute inset-0 bg-blueprint-grid mask-fade-b opacity-[0.16]" />

				<div
					className="
						absolute -right-40 top-0
						h-[450px] w-[450px]
						rounded-full bg-brand/[0.035]
						blur-[100px]
					"
				/>
			</div>

			{/* Main container */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5 sm:px-8
				"
			>
				{/* ------------------------------------------------------ */}
				{/* Section heading                                        */}
				{/* ------------------------------------------------------ */}

				<div
					className="
						mb-12
						grid items-end
						gap-6
						lg:mb-14
						lg:grid-cols-12
						lg:gap-10
					"
				>
					{/* Left heading */}

					<div className="lg:col-span-7">
						<div className="mb-5 flex items-center gap-3">
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
								<Sparkles className="h-4 w-4" strokeWidth={1.7} />
							</span>

							<span
								className="
									font-mono
									text-[11px] font-semibold
									uppercase tracking-[0.22em]
									text-brand-700
								"
							>
								What Drives Us
							</span>

							<span className="h-px w-8 bg-brand/35" />
						</div>

						<h2
							id="mission-heading"
							className="
								max-w-[750px]
								font-display
								text-[clamp(2rem,3.4vw,3.5rem)]
								font-semibold
								leading-[1.12]
								tracking-[-0.035em]
								text-navy
							"
						>
							Driven by purpose.
							<br />

							<span className="text-slate-400">
								Defined by ambition.
							</span>
						</h2>
					</div>

					{/* Right introduction */}

					<div className="lg:col-span-5">
						<p
							className="
								max-w-[480px]
								text-[14px]
								leading-[1.85]
								text-slate-500
								sm:text-[16px]
								lg:ml-auto
							"
						>
							Our purpose, mission, and vision define how
							we approach software development. Together,
							they guide our decisions, shape our
							partnerships, and keep us focused on
							creating technology that delivers lasting
							value.
						</p>
					</div>
				</div>

				{/* ------------------------------------------------------ */}
				{/* Asymmetric content grid                                */}
				{/* ------------------------------------------------------ */}

				<div
					className="
						grid items-stretch
						gap-5
						lg:grid-cols-12
						lg:gap-6
					"
				>
					{/* -------------------------------------------------- */}
					{/* Featured purpose card                              */}
					{/* -------------------------------------------------- */}

					<article
						className="
							group relative isolate
							flex flex-col
							overflow-hidden
							rounded-[26px]
							border border-brand/15
							bg-[#F8FCFC]
							p-6
							transition-all duration-500
							hover:border-brand/30
							hover:shadow-[0_20px_60px_-25px_rgba(15,23,42,0.12)]
							sm:p-8
							lg:col-span-6
							lg:p-9
							xl:col-span-7
						"
					>
						{/* Background details */}

						<div
							aria-hidden="true"
							className="pointer-events-none absolute inset-0"
						>
							<div
								className="
									absolute -right-20 -top-20
									h-64 w-64
									rounded-full
									bg-brand/[0.065]
									blur-[75px]
								"
							/>

							<div
								className="
									absolute inset-0
									opacity-[0.025]
								"
								style={{
									backgroundImage: `
										linear-gradient(#0F172A 1px, transparent 1px),
										linear-gradient(90deg, #0F172A 1px, transparent 1px)
									`,
									backgroundSize: '32px 32px',
								}}
							/>
						</div>

						<div className="relative z-10 flex h-full flex-col">
							{/* Header */}

							<div className="flex items-start justify-between gap-4">
								<div className="flex items-center gap-3">
									<span
										className="
											flex h-12 w-12
											items-center justify-center
											rounded-2xl
											border border-brand/20
											bg-white
											text-brand
											shadow-sm
										"
									>
										<Flag
											className="h-[22px] w-[22px]"
											strokeWidth={1.7}
										/>
									</span>

									<div>
										<p
											className="
												font-mono
												text-[10px]
												font-semibold
												uppercase tracking-[0.18em]
												text-brand-700
											"
										>
											Our Foundation
										</p>

										<h3
											className="
												mt-1
												font-display
												text-[20px]
												font-bold
												text-navy
											"
										>
											Our Purpose
										</h3>
									</div>
								</div>

								<span
									className="
										font-mono
										text-[12px]
										font-semibold
										text-brand/45
									"
								>
									01 / 03
								</span>
							</div>

							{/* Purpose content */}

							<div className="mt-7 max-w-[610px]">
								<p
									className="
										font-display
										text-[clamp(1.15rem,1.6vw,1.5rem)]
										font-medium
										leading-[1.65]
										tracking-[-0.015em]
										text-navy/90
									"
								>
									{ABOUT.purpose}
								</p>
							</div>

							{/* Architecture visual */}

							<div
								className="
									mt-auto
									pt-7
								"
							>
								<div
									className="
										overflow-hidden
										rounded-[20px]
										border border-brand/10
										bg-white/70
									"
								>
									<PurposeVisual />
								</div>
							</div>

							{/* Bottom statement */}

							<div
								className="
									mt-6
									flex items-center
									justify-between
									gap-3
									border-t border-brand/10
									pt-5
								"
							>
								<div className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-brand" />

									<span
										className="
											font-mono
											text-[10px]
											font-semibold
											uppercase
											tracking-[0.12em]
											text-slate-500
										"
									>
										Technology With Purpose
									</span>
								</div>

								<ArrowUpRight
									aria-hidden="true"
									className="
										h-4 w-4
										text-brand/60
										transition-transform duration-300
										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5
									"
								/>
							</div>
						</div>
					</article>

					{/* -------------------------------------------------- */}
					{/* Mission and vision                                  */}
					{/* -------------------------------------------------- */}

					<div
						className="
							grid min-w-0
							gap-5
							sm:grid-cols-2
							lg:col-span-6
							lg:grid-cols-1
							lg:gap-6
							xl:col-span-5
						"
					>
						{/* Mission */}

						<article
							className="
								group relative isolate
								flex flex-col
								overflow-hidden
								rounded-[26px]
								border border-slate-200/80
								bg-white
								p-6
								transition-all duration-500
								hover:border-brand/35
								hover:shadow-[0_20px_55px_-25px_rgba(15,23,42,0.12)]
								sm:p-7
							"
						>
							<div className="relative z-10">
								{/* Card heading */}

								<div className="flex items-start justify-between gap-3">
									<div className="flex items-center gap-3">
										<span
											className="
												flex h-11 w-11
												items-center justify-center
												rounded-xl
												border border-brand/15
												bg-brand/[0.07]
												text-brand
											"
										>
											<Target
												className="h-5 w-5"
												strokeWidth={1.7}
											/>
										</span>

										<div>
											<p
												className="
													font-mono
													text-[10px]
													font-semibold
													uppercase
													tracking-[0.15em]
													text-brand-700
												"
											>
												What We Do
											</p>

											<h3
												className="
													mt-1
													font-display
													text-[19px]
													font-bold
													text-navy
												"
											>
												Our Mission
											</h3>
										</div>
									</div>

									<span className="font-mono text-[11px] font-semibold text-slate-300">
										02 / 03
									</span>
								</div>

								{/* Content */}

								<p
									className="
										mt-5
										text-[13px]
										leading-[1.8]
										text-slate-600
										sm:text-[14px]
									"
								>
									{ABOUT.mission}
								</p>

								{/* Visual */}

								<div className="mt-5">
									<MissionVisual />
								</div>
							</div>
						</article>

						{/* Vision */}

						<article
							className="
								group relative isolate
								flex flex-col
								overflow-hidden
								rounded-[26px]
								border border-slate-200/80
								bg-white
								p-6
								transition-all duration-500
								hover:border-brand/35
								hover:shadow-[0_20px_55px_-25px_rgba(15,23,42,0.12)]
								sm:p-7
							"
						>
							<div className="relative z-10">
								{/* Heading */}

								<div className="flex items-start justify-between gap-3">
									<div className="flex items-center gap-3">
										<span
											className="
												flex h-11 w-11
												items-center justify-center
												rounded-xl
												border border-brand/15
												bg-brand/[0.07]
												text-brand
											"
										>
											<Eye
												className="h-5 w-5"
												strokeWidth={1.7}
											/>
										</span>

										<div>
											<p
												className="
													font-mono
													text-[10px]
													font-semibold
													uppercase
													tracking-[0.15em]
													text-brand-700
												"
											>
												Where We're Going
											</p>

											<h3
												className="
													mt-1
													font-display
													text-[19px]
													font-bold
													text-navy
												"
											>
												Our Vision
											</h3>
										</div>
									</div>

									<span className="font-mono text-[11px] font-semibold text-slate-300">
										03 / 03
									</span>
								</div>

								{/* Content */}

								<p
									className="
										mt-5
										text-[13px]
										leading-[1.8]
										text-slate-600
										sm:text-[14px]
									"
								>
									{ABOUT.vision}
								</p>

								{/* Visual */}

								<div className="mt-5">
									<VisionVisual />
								</div>
							</div>
						</article>
					</div>
				</div>

				{/* ------------------------------------------------------ */}
				{/* Bottom brand statement                                 */}
				{/* ------------------------------------------------------ */}

				<div
					className="
						mt-10
						flex flex-col
						justify-between
						gap-4
						border-t border-slate-200/80
						pt-7
						sm:flex-row
						sm:items-center
					"
				>
					<div className="flex items-center gap-3">
						<span className="h-px w-6 bg-brand" />

						<p
							className="
								font-display
								text-[13px]
								font-medium
								text-slate-500
								sm:text-[14px]
							"
						>
							One clear direction. Three defining principles.
						</p>
					</div>

					<span
						className="
							font-mono
							text-[10px]
							font-semibold
							uppercase
							tracking-[0.18em]
							text-brand-700
						"
					>
						Code. Launch. Grow.
					</span>
				</div>
			</div>
		</section>
	);
}