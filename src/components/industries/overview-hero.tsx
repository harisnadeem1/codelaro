import { Link } from 'react-router';

import {
	ArrowRight,
	ArrowUpRight,
	Boxes,
	Braces,
	Check,
	CircleDot,
	Cpu,
	Fingerprint,
	Layers3,
	MoveUpRight,
	Workflow,


	Sparkles,
	BarChart3,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Visual                                                                      */
/* -------------------------------------------------------------------------- */

function HeroVisual() {
	return (
		<div
			className="
				relative mx-auto
				h-[290px] w-full
				max-w-[560px]
				select-none
				sm:h-[350px]
				lg:ml-auto
				lg:h-[390px]
			"
			aria-hidden="true"
		>
			{/* Background atmosphere */}

			<div
				className="
					pointer-events-none
					absolute left-1/2 top-1/2
					h-[65%] w-[65%]
					-translate-x-1/2 -translate-y-1/2
					rounded-full
					bg-brand/[0.09]
					blur-[70px]
				"
			/>

			{/* Subtle technical background */}

			<div
				className="
					pointer-events-none
					absolute inset-[5%]
					opacity-40
					[background-image:radial-gradient(rgba(15,23,42,0.18)_0.7px,transparent_0.7px)]
					[background-size:19px_19px]
					[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]
				"
			/>

			{/* Architectural illustration */}

			<svg
				viewBox="0 0 560 370"
				fill="none"
				preserveAspectRatio="xMidYMid meet"
				className="absolute inset-0 h-full w-full"
			>
				<defs>
					{/* Top surface */}

					<linearGradient
						id="industry-top-surface"
						x1="160"
						y1="110"
						x2="420"
						y2="260"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FFFFFF" />

						<stop
							offset="1"
							stopColor="#F0FDFB"
						/>
					</linearGradient>

					{/* Middle surface */}

					<linearGradient
						id="industry-middle-surface"
						x1="130"
						y1="140"
						x2="430"
						y2="290"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#E5FAF7" />

						<stop
							offset="1"
							stopColor="#B5ECE7"
						/>
					</linearGradient>

					{/* Bottom surface */}

					<linearGradient
						id="industry-bottom-surface"
						x1="130"
						y1="170"
						x2="430"
						y2="330"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#263B50" />

						<stop
							offset="1"
							stopColor="#0F172A"
						/>
					</linearGradient>

					{/* Main teal module */}

					<linearGradient
						id="industry-core"
						x1="220"
						y1="130"
						x2="350"
						y2="210"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#35D5CE" />

						<stop
							offset="0.55"
							stopColor="#18BCB7"
						/>

						<stop
							offset="1"
							stopColor="#0E9996"
						/>
					</linearGradient>

					{/* Ambient illumination */}

					<radialGradient id="industry-ambient">
						<stop
							stopColor="#18BCB7"
							stopOpacity="0.16"
						/>

						<stop
							offset="1"
							stopColor="#18BCB7"
							stopOpacity="0"
						/>
					</radialGradient>

					{/* Shadow */}

					<filter
						id="industry-shadow"
						x="-30%"
						y="-50%"
						width="160%"
						height="200%"
					>
						<feGaussianBlur stdDeviation="17" />
					</filter>

					{/* Top surface clipping */}

					<clipPath id="industry-top-clip">
						<path d="M280 89L435 166L280 243L125 166Z" />
					</clipPath>
				</defs>

				{/* Ambient illumination */}

				<ellipse
					cx="280"
					cy="210"
					rx="220"
					ry="160"
					fill="url(#industry-ambient)"
				/>

				{/* Ground shadow */}

				<ellipse
					cx="280"
					cy="315"
					rx="148"
					ry="24"
					fill="#0F172A"
					fillOpacity="0.16"
					filter="url(#industry-shadow)"
				/>

				{/* ------------------------------------------------------ */}
				{/* Bottom architectural layer                             */}
				{/* ------------------------------------------------------ */}

				<g>
					{/* Left edge */}

					<path
						d="
							M125 249
							L280 326
							L280 341
							L125 264
							Z
						"
						fill="#172B40"
					/>

					{/* Right edge */}

					<path
						d="
							M280 326
							L435 249
							L435 264
							L280 341
							Z
						"
						fill="#0F172A"
					/>

					{/* Top */}

					<path
						d="
							M280 172
							L435 249
							L280 326
							L125 249
							Z
						"
						fill="url(#industry-bottom-surface)"
						stroke="#405366"
						strokeWidth="1.2"
					/>

					{/* Front illumination */}

					<path
						d="M125 264L280 341L435 264"
						stroke="#18BCB7"
						strokeOpacity="0.5"
						strokeWidth="1.5"
					/>

					{/* Technical indicators */}

					<g fill="#18BCB7">
						<circle
							cx="253"
							cy="321"
							r="2"
						/>

						<circle
							cx="264"
							cy="326"
							r="2"
							opacity="0.6"
						/>

						<circle
							cx="275"
							cy="331"
							r="2"
							opacity="0.3"
						/>
					</g>
				</g>

				{/* ------------------------------------------------------ */}
				{/* Middle architectural layer                             */}
				{/* ------------------------------------------------------ */}

				<g>
					{/* Left edge */}

					<path
						d="
							M125 208
							L280 285
							L280 299
							L125 222
							Z
						"
						fill="#83DCD5"
					/>

					{/* Right edge */}

					<path
						d="
							M280 285
							L435 208
							L435 222
							L280 299
							Z
						"
						fill="#4DBFB8"
					/>

					{/* Main surface */}

					<path
						d="
							M280 131
							L435 208
							L280 285
							L125 208
							Z
						"
						fill="url(#industry-middle-surface)"
						stroke="#18BCB7"
						strokeOpacity="0.55"
						strokeWidth="1.3"
					/>

					{/* Internal architecture */}

					<path
						d="
							M280 153
							L392 208
							L280 263
							L168 208
							Z
						"
						stroke="#18BCB7"
						strokeOpacity="0.24"
						strokeWidth="1"
						strokeDasharray="4 5"
					/>

					{/* Front highlight */}

					<path
						d="M125 222L280 299L435 222"
						stroke="white"
						strokeOpacity="0.7"
						strokeWidth="1"
					/>
				</g>

				{/* ------------------------------------------------------ */}
				{/* Top architectural platform                              */}
				{/* ------------------------------------------------------ */}

				<g>
					{/* Left edge */}

					<path
						d="
							M125 166
							L280 243
							L280 258
							L125 181
							Z
						"
						fill="#E0F3F1"
					/>

					{/* Right edge */}

					<path
						d="
							M280 243
							L435 166
							L435 181
							L280 258
							Z
						"
						fill="#CAE9E6"
					/>

					{/* Main top */}

					<path
						d="
							M280 89
							L435 166
							L280 243
							L125 166
							Z
						"
						fill="url(#industry-top-surface)"
						stroke="#B0DCD8"
						strokeWidth="1.5"
					/>

					{/* Isometric architectural grid */}

					<g
						clipPath="url(#industry-top-clip)"
						stroke="#18BCB7"
						strokeOpacity="0.12"
						strokeWidth="1"
					>
						{Array.from(
							{ length: 13 },
							(_, index) => {
								const offset = index * 28;

								return (
									<g key={index}>
										<path
											d={`M${70 + offset} 80L${330 + offset
												} 210`}
										/>

										<path
											d={`M${70 + offset} 250L${330 + offset
												} 120`}
										/>
									</g>
								);
							},
						)}
					</g>

					{/* Platform inner border */}

					<path
						d="
							M280 108
							L397 166
							L280 224
							L163 166
							Z
						"
						stroke="#18BCB7"
						strokeOpacity="0.27"
						strokeWidth="1"
						strokeDasharray="4 5"
					/>

					{/* Technical connections */}

					<g
						stroke="#18BCB7"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path
							d="M221 166L183 185"
							strokeOpacity="0.6"
						/>

						<path
							d="M339 166L377 185"
							strokeOpacity="0.6"
						/>

						<path
							d="M280 126V111"
							strokeOpacity="0.6"
						/>
					</g>

					{/* Connection points */}

					<g>
						<circle
							cx="183"
							cy="185"
							r="4"
							fill="white"
							stroke="#18BCB7"
							strokeWidth="1.5"
						/>

						<circle
							cx="377"
							cy="185"
							r="4"
							fill="white"
							stroke="#18BCB7"
							strokeWidth="1.5"
						/>

						<circle
							cx="280"
							cy="111"
							r="4"
							fill="white"
							stroke="#18BCB7"
							strokeWidth="1.5"
						/>
					</g>
				</g>

				{/* ------------------------------------------------------ */}
				{/* Central teal technology module                          */}
				{/* ------------------------------------------------------ */}

				<g>
					{/* Module shadow */}

					<path
						d="
							M280 139
							L350 174
							L280 209
							L210 174
							Z
						"
						fill="#0B8F8C"
						fillOpacity="0.18"
						filter="url(#industry-shadow)"
					/>

					{/* Left side */}

					<path
						d="
							M210 158
							L280 193
							L280 211
							L210 176
							Z
						"
						fill="#0E9996"
					/>

					{/* Right side */}

					<path
						d="
							M280 193
							L350 158
							L350 176
							L280 211
							Z
						"
						fill="#087E7C"
					/>

					{/* Main top surface */}

					<path
						d="
							M280 123
							L350 158
							L280 193
							L210 158
							Z
						"
						fill="url(#industry-core)"
						stroke="#70EAE2"
						strokeWidth="1.5"
					/>

					{/* Inner frame */}

					<path
						d="
							M280 134
							L328 158
							L280 182
							L232 158
							Z
						"
						stroke="white"
						strokeOpacity="0.35"
						strokeWidth="1"
					/>

					{/* Digital architecture symbol */}

					<g
						stroke="white"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M260 151L247 158L260 165" />

						<path d="M300 151L313 158L300 165" />

						<path d="M289 145L271 171" />
					</g>

					{/* Hardware indicators */}

					<g fill="white">
						<circle
							cx="252"
							cy="196"
							r="1.5"
							opacity="0.9"
						/>

						<circle
							cx="260"
							cy="200"
							r="1.5"
							opacity="0.6"
						/>

						<circle
							cx="268"
							cy="204"
							r="1.5"
							opacity="0.35"
						/>
					</g>
				</g>

				{/* ------------------------------------------------------ */}
				{/* Peripheral architectural indicators                    */}
				{/* ------------------------------------------------------ */}

				<g>
					{/* Left indicator */}

					<path
						d="
							M169 150
							L190 140
							L211 150
							L190 160
							Z
						"
						fill="white"
						stroke="#B7DCD8"
						strokeWidth="1"
					/>

					<path
						d="M184 150L190 153L198 148"
						stroke="#18BCB7"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>

					{/* Right indicator */}

					<path
						d="
							M349 150
							L370 140
							L391 150
							L370 160
							Z
						"
						fill="white"
						stroke="#B7DCD8"
						strokeWidth="1"
					/>

					<path
						d="M364 150L370 153L378 148"
						stroke="#18BCB7"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>

			{/* ========================================================== */}
			{/* Floating cards                                             */}
			{/* ========================================================== */}

			{/* ---------------------------------------------------------- */}
			{/* TOP LEFT: Industry context                                 */}
			{/* ---------------------------------------------------------- */}

			<div
				className="
					absolute left-[1%] top-[14%]
					z-10
					flex items-center gap-2.5
					rounded-xl
					border border-navy/[0.07]
					bg-white/95
					px-3 py-2.5
					shadow-[0_12px_35px_-15px_rgba(15,23,42,0.2)]
					backdrop-blur-md
					sm:left-[2%]
					sm:top-[19%]
					sm:gap-3
					sm:px-4 sm:py-3
				"
			>
				<div
					className="
						flex h-8 w-8
						shrink-0
						items-center justify-center
						rounded-lg
						bg-brand/10
						sm:h-9 sm:w-9
					"
				>
					<Layers3
						className="h-4 w-4 text-brand"
						strokeWidth={1.8}
					/>
				</div>

				<div>
					<p className="font-display text-[10px] font-semibold text-navy sm:text-[12px]">
						Industry context
					</p>

					<p className="mt-0.5 hidden text-[10px] text-slate-400 sm:block">
						Understand the challenge
					</p>
				</div>
			</div>

			{/* ---------------------------------------------------------- */}
			{/* TOP RIGHT: Operational clarity                             */}
			{/* ---------------------------------------------------------- */}

			<div
				className="
					absolute right-[1%] top-[10%]
					z-10
					hidden items-center gap-2.5
					rounded-xl
					border border-navy/[0.07]
					bg-white/95
					px-3 py-2.5
					shadow-[0_12px_35px_-15px_rgba(15,23,42,0.2)]
					backdrop-blur-md
					sm:right-[2%]
					sm:top-[14%]
					sm:flex
					sm:gap-3
					sm:px-4 sm:py-3
				"
			>
				<div
					className="
						flex h-9 w-9
						shrink-0
						items-center justify-center
						rounded-lg
						bg-brand/10
					"
				>
					<Sparkles
						className="h-4 w-4 text-brand"
						strokeWidth={1.9}
					/>
				</div>

				<div>
					<p className="font-display text-[12px] font-semibold text-navy">
						Operational clarity
					</p>

					<p className="mt-0.5 text-[10px] text-slate-400">
						Clearer systems and flow
					</p>
				</div>
			</div>

			{/* ---------------------------------------------------------- */}
			{/* BOTTOM LEFT: Growth-ready systems                          */}
			{/* ---------------------------------------------------------- */}

			<div
				className="
					absolute bottom-[10%] left-[1%]
					z-10
					hidden items-center gap-2.5
					rounded-xl
					border border-navy/[0.07]
					bg-white/95
					px-3 py-2.5
					shadow-[0_12px_35px_-15px_rgba(15,23,42,0.2)]
					backdrop-blur-md
					sm:bottom-[14%]
					sm:left-[2%]
					sm:flex
					sm:gap-3
					sm:px-4 sm:py-3
				"
			>
				<div
					className="
						flex h-9 w-9
						shrink-0
						items-center justify-center
						rounded-lg
						bg-brand/10
					"
				>
					<BarChart3
						className="h-4 w-4 text-brand"
						strokeWidth={1.9}
					/>
				</div>

				<div>
					<p className="font-display text-[12px] font-semibold text-navy">
						Growth-ready
					</p>

					<p className="mt-0.5 text-[10px] text-slate-400">
						Built to scale with you
					</p>
				</div>
			</div>

			{/* ---------------------------------------------------------- */}
			{/* BOTTOM RIGHT: Tailored software                            */}
			{/* ---------------------------------------------------------- */}

			<div
				className="
					absolute bottom-[7%] right-[1%]
					z-10
					flex items-center gap-2.5
					rounded-xl
					border border-navy/[0.07]
					bg-white/95
					px-3 py-2.5
					shadow-[0_12px_35px_-15px_rgba(15,23,42,0.2)]
					backdrop-blur-md
					sm:bottom-[13%]
					sm:right-[2%]
					sm:gap-3
					sm:px-4 sm:py-3
				"
			>
				<div
					className="
						flex h-8 w-8
						shrink-0
						items-center justify-center
						rounded-lg
						bg-brand/10
						sm:h-9 sm:w-9
					"
				>
					<Check
						className="h-4 w-4 text-brand"
						strokeWidth={2}
					/>
				</div>

				<div>
					<p className="font-display text-[10px] font-semibold text-navy sm:text-[12px]">
						Tailored software
					</p>

					<p className="mt-0.5 hidden text-[10px] text-slate-400 sm:block">
						Built around your needs
					</p>
				</div>
			</div>

			{/* Decorative accents */}

			<span
				className="
					pointer-events-none
					absolute right-[18%] top-[12%]
					h-1.5 w-1.5
					rounded-full
					bg-brand/50
				"
			/>

			<span
				className="
					pointer-events-none
					absolute bottom-[16%] left-[16%]
					h-1 w-1
					rounded-full
					bg-navy/25
				"
			/>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export function IndustriesOverviewHero() {
	return (
		<section
			aria-labelledby="industries-hero-heading"
			className="
				relative isolate
				overflow-hidden
				bg-[#F8FAFC]
			"
		>
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />
			{/* Content */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5
					pb-20 pt-32
					sm:px-8
					md:pb-24 md:pt-40
					lg:pb-28 lg:pt-40
				"
			>
				<div
					className="
						grid items-center
						gap-14
						lg:grid-cols-12
						lg:gap-10
						xl:gap-14
					"
				>
					{/* Left content */}

					<div className="relative z-10 lg:col-span-6">
						{/* Eyebrow */}

						<div
							className="rise-in flex items-center gap-3"
							style={{ animationDelay: '0.05s' }}
						>
							<span className="h-px w-7 bg-brand" />

							<span
								className="
									font-mono
									text-[11px]
									font-semibold uppercase
									tracking-[0.22em]
									text-brand-700
								"
							>
								Industries we serve
							</span>
						</div>

						{/* Main heading */}

						<h1
							id="industries-hero-heading"
							className="
								mt-7
								max-w-[650px]
								font-display
								text-[clamp(2.5rem,4.6vw,4.5rem)]
								font-bold
								leading-[1.08]
								tracking-[-0.045em]
								text-navy
							"
						>
							<span
								className="rise-in block"
								style={{ animationDelay: '0.15s' }}
							>
								Your industry.
							</span>

							<span
								className="rise-in mt-1 block"
								style={{ animationDelay: '0.25s' }}
							>
								Your challenges.
							</span>

							<span
								className="rise-in mt-1 block text-brand"
								style={{ animationDelay: '0.35s' }}
							>
								Our Solutions.
							</span>
						</h1>

						{/* Description */}

						<p
							className="
								rise-in
								mt-7
								max-w-[530px]
								text-[15px]
								leading-[1.85]
								text-slate-500
								sm:text-[17px]
							"
							style={{ animationDelay: '0.45s' }}
						>
							Every industry has its own challenges.
							We develop tailored digital solutions
							that align with your business,
							simplify complex workflows and
							create opportunities for growth.
						</p>

						{/* Actions */}

						<div
							className="
								rise-in
								mt-9
								flex flex-col gap-3
								sm:flex-row sm:items-center
							"
							style={{ animationDelay: '0.55s' }}
						>
							<Link
								to="/contact"
								className="
									group
									inline-flex h-12
									items-center justify-center
									gap-3
									rounded-lg
									bg-brand
									px-6
									font-display text-[16px]
									font-semibold
									text-white
									shadow-[0_8px_25px_-8px_rgba(24,188,183,0.35)]
									transition-all duration-300
									hover:bg-brand-600
									hover:shadow-[0_12px_30px_-8px_rgba(24,188,183,0.45)]
									active:scale-[0.98]
								"
							>
								Discuss Your Project

								<ArrowUpRight
									className="
										h-4 w-4
										transition-transform duration-300
										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5
									"
								/>
							</Link>


						</div>


					</div>

					{/* Right visual */}

					<div
						className="
							relative
							lg:col-span-6
							lg:pl-4
						"
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
					absolute inset-x-0 bottom-0
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