import { Link } from 'react-router';

import {
	ArrowRight,
	ArrowUpRight,
	Check,
	ChevronRight,
	Code2,
	Lightbulb,
	Layers3,
	Rocket,
	Workflow,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const WORKFLOW = [
	{
		number: '01',
		title: 'Understand',
		description: 'Your goals and challenges',
		icon: Lightbulb,
	},
	{
		number: '02',
		title: 'Engineer',
		description: 'Solutions built around you',
		icon: Code2,
	},
	{
		number: '03',
		title: 'Deliver',
		description: 'Technology ready to evolve',
		icon: Rocket,
	},
];

/* -------------------------------------------------------------------------- */
/* Right Hero Visual                                                          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Advanced architectural hero illustration                                   */
/* -------------------------------------------------------------------------- */

function HeroVisual() {
	return (
		<div
			aria-hidden="true"
			className="
				relative mx-auto
				w-full max-w-[620px]
				lg:ml-auto
			"
		>
			{/* Soft background atmosphere */}

			<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
				<div className="h-[75%] w-[75%] rounded-full bg-brand/[0.07] blur-[75px]" />
			</div>

			{/* Main illustration */}

			<svg
				viewBox="0 0 620 500"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				className="
					relative z-10
					h-auto w-full
					overflow-visible
					drop-shadow-[0_25px_35px_rgba(15,23,42,0.05)]
				"
			>
				<defs>
					{/* Main brand gradient */}

					<linearGradient
						id="why-main-gradient"
						x1="160"
						y1="100"
						x2="470"
						y2="390"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#18BCB7" />

						<stop
							offset="1"
							stopColor="#0B777B"
						/>
					</linearGradient>

					{/* Glass surface */}

					<linearGradient
						id="why-glass-gradient"
						x1="150"
						y1="100"
						x2="440"
						y2="360"
						gradientUnits="userSpaceOnUse"
					>
						<stop
							stopColor="#FFFFFF"
							stopOpacity="0.98"
						/>

						<stop
							offset="1"
							stopColor="#E9F7F6"
							stopOpacity="0.85"
						/>
					</linearGradient>

					{/* Dark structural gradient */}

					<linearGradient
						id="why-navy-gradient"
						x1="170"
						y1="160"
						x2="460"
						y2="390"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#24364D" />

						<stop
							offset="1"
							stopColor="#0F172A"
						/>
					</linearGradient>

					{/* Connection gradient */}

					<linearGradient
						id="why-line-gradient"
						x1="60"
						y1="100"
						x2="550"
						y2="420"
						gradientUnits="userSpaceOnUse"
					>
						<stop
							stopColor="#18BCB7"
							stopOpacity="0"
						/>

						<stop
							offset="0.5"
							stopColor="#18BCB7"
							stopOpacity="0.7"
						/>

						<stop
							offset="1"
							stopColor="#18BCB7"
							stopOpacity="0"
						/>
					</linearGradient>

					{/* Glow */}

					<radialGradient id="why-center-glow">
						<stop
							stopColor="#18BCB7"
							stopOpacity="0.18"
						/>

						<stop
							offset="1"
							stopColor="#18BCB7"
							stopOpacity="0"
						/>
					</radialGradient>

					{/* Shadow */}

					<filter
						id="why-soft-shadow"
						x="-50%"
						y="-50%"
						width="200%"
						height="200%"
					>
						<feGaussianBlur stdDeviation="16" />
					</filter>

					{/* Node glow */}

					<filter
						id="why-node-glow"
						x="-200%"
						y="-200%"
						width="500%"
						height="500%"
					>
						<feGaussianBlur stdDeviation="5" />
					</filter>

					{/* Reusable surface pattern */}

					<pattern
						id="why-surface-grid"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M20 0H0V20"
							stroke="#18BCB7"
							strokeOpacity="0.07"
							strokeWidth="0.8"
						/>
					</pattern>
				</defs>

				{/* ------------------------------------------------------ */}
				{/* Background architectural atmosphere                  */}
				{/* ------------------------------------------------------ */}

				<ellipse
					cx="310"
					cy="260"
					rx="260"
					ry="210"
					fill="url(#why-center-glow)"
				/>

				{/* Background orbit */}

				<ellipse
					cx="310"
					cy="260"
					rx="245"
					ry="115"
					stroke="#18BCB7"
					strokeOpacity="0.13"
					strokeWidth="1"
					strokeDasharray="4 8"
					transform="rotate(-25 310 260)"
				/>

				<ellipse
					cx="310"
					cy="260"
					rx="195"
					ry="85"
					stroke="#18BCB7"
					strokeOpacity="0.1"
					strokeWidth="1"
					transform="rotate(25 310 260)"
				/>

				{/* ------------------------------------------------------ */}
				{/* Background particles                                 */}
				{/* ------------------------------------------------------ */}

				{[
					[90, 145],
					[135, 95],
					[475, 90],
					[535, 160],
					[95, 355],
					[145, 415],
					[505, 385],
					[550, 315],
					[310, 55],
					[310, 455],
				].map(([cx, cy], index) => (
					<g key={`particle-${index}`}>
						<circle
							cx={cx}
							cy={cy}
							r={index % 3 === 0 ? 3 : 2}
							fill="#18BCB7"
							fillOpacity={index % 2 === 0 ? 0.5 : 0.25}
						/>

						<circle
							cx={cx}
							cy={cy}
							r="9"
							stroke="#18BCB7"
							strokeOpacity="0.08"
						/>
					</g>
				))}

				{/* ------------------------------------------------------ */}
				{/* Floor shadow                                         */}
				{/* ------------------------------------------------------ */}

				<ellipse
					cx="310"
					cy="393"
					rx="150"
					ry="35"
					fill="#0F172A"
					fillOpacity="0.12"
					filter="url(#why-soft-shadow)"
				/>

				{/* ------------------------------------------------------ */}
				{/* Bottom structural layer                              */}
				{/* ------------------------------------------------------ */}

				{/* Bottom edge */}

				<path
					d="
						M310 283
						L470 363
						L310 443
						L150 363
						Z
					"
					fill="url(#why-navy-gradient)"
				/>

				{/* Left side */}

				<path
					d="
						M150 363
						L310 443
						L310 425
						L150 345
						Z
					"
					fill="#15263B"
				/>

				{/* Right side */}

				<path
					d="
						M310 443
						L470 363
						L470 345
						L310 425
						Z
					"
					fill="#0F172A"
				/>

				{/* Structural top surface */}

				<path
					d="
						M310 265
						L470 345
						L310 425
						L150 345
						Z
					"
					fill="#21374A"
					stroke="#38566A"
					strokeWidth="1.2"
				/>

				{/* Inner structural border */}

				<path
					d="
						M310 282
						L444 349
						L310 416
						L176 349
						Z
					"
					stroke="#18BCB7"
					strokeOpacity="0.4"
					strokeWidth="1"
				/>

				{/* Decorative motherboard lines */}

				<g
					stroke="#18BCB7"
					strokeOpacity="0.35"
					strokeWidth="1.3"
				>
					<path d="M190 345L240 320L260 330" />

					<path d="M430 345L380 320L360 330" />

					<path d="M220 370L265 347" />

					<path d="M400 370L355 347" />

					<path d="M310 390V365" />
				</g>

				{/* ------------------------------------------------------ */}
				{/* Structural connection pillars                        */}
				{/* ------------------------------------------------------ */}

				{[
					[220, 305, 220, 365],
					[400, 305, 400, 365],
					[310, 340, 310, 400],
				].map(([x1, y1, x2, y2], index) => (
					<g key={`pillar-${index}`}>
						<path
							d={`M${x1} ${y1}L${x2} ${y2}`}
							stroke="#18BCB7"
							strokeOpacity="0.25"
							strokeWidth="5"
							strokeLinecap="round"
						/>

						<path
							d={`M${x1} ${y1}L${x2} ${y2}`}
							stroke="#18BCB7"
							strokeOpacity="0.75"
							strokeWidth="1"
							strokeDasharray="3 5"
						/>
					</g>
				))}

				{/* ------------------------------------------------------ */}
				{/* Middle glass engineering layer                       */}
				{/* ------------------------------------------------------ */}

				{/* Thickness */}

				<path
					d="
						M310 205
						L455 278
						L310 351
						L165 278
						L165 290
						L310 363
						L455 290
						L455 278
					"
					fill="#BCEAE7"
					fillOpacity="0.48"
				/>

				{/* Glass top */}

				<path
					d="
						M310 205
						L455 278
						L310 351
						L165 278
						Z
					"
					fill="url(#why-glass-gradient)"
					fillOpacity="0.94"
					stroke="#18BCB7"
					strokeOpacity="0.5"
					strokeWidth="1.5"
				/>

				{/* Surface grid */}

				<path
					d="
						M310 205
						L455 278
						L310 351
						L165 278
						Z
					"
					fill="url(#why-surface-grid)"
					opacity="0.7"
				/>

				{/* Engineering circuit */}

				<g
					stroke="#18BCB7"
					strokeOpacity="0.55"
					strokeWidth="1.3"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M310 228L405 276L310 324L215 276Z" />

					<path d="M310 244L375 276L310 308L245 276Z" />

					<path d="M310 228V244" />

					<path d="M405 276H375" />

					<path d="M310 324V308" />

					<path d="M215 276H245" />
				</g>

				{/* Circuit nodes */}

				{[
					[310, 228],
					[405, 276],
					[310, 324],
					[215, 276],
				].map(([cx, cy], index) => (
					<g key={`circuit-${index}`}>
						<circle
							cx={cx}
							cy={cy}
							r="4"
							fill="#FFFFFF"
							stroke="#18BCB7"
							strokeWidth="1.5"
						/>

						<circle
							cx={cx}
							cy={cy}
							r="1.5"
							fill="#18BCB7"
						/>
					</g>
				))}

				{/* ------------------------------------------------------ */}
				{/* Upper glass layer                                    */}
				{/* ------------------------------------------------------ */}

				{/* Upper platform shadow */}

				<path
					d="
						M310 128
						L427 187
						L310 246
						L193 187
						Z
					"
					fill="#18BCB7"
					fillOpacity="0.09"
					transform="translate(0 17)"
				/>

				{/* Platform thickness */}

				<path
					d="
						M310 122
						L427 181
						L310 240
						L193 181
						L193 193
						L310 252
						L427 193
						L427 181
					"
					fill="#C9EFED"
				/>

				{/* Upper platform */}

				<path
					d="
						M310 122
						L427 181
						L310 240
						L193 181
						Z
					"
					fill="url(#why-glass-gradient)"
					stroke="#18BCB7"
					strokeOpacity="0.7"
					strokeWidth="1.5"
				/>

				{/* Platform inner architecture */}

				<path
					d="
						M310 143
						L385 181
						L310 219
						L235 181
						Z
					"
					fill="#18BCB7"
					fillOpacity="0.055"
					stroke="#18BCB7"
					strokeOpacity="0.3"
				/>

				<path
					d="
						M310 157
						L357 181
						L310 205
						L263 181
						Z
					"
					stroke="#18BCB7"
					strokeOpacity="0.5"
				/>

				{/* ------------------------------------------------------ */}
				{/* Central technology core                              */}
				{/* ------------------------------------------------------ */}

				{/* Core glow */}

				<ellipse
					cx="310"
					cy="158"
					rx="57"
					ry="40"
					fill="#18BCB7"
					fillOpacity="0.2"
					filter="url(#why-soft-shadow)"
				/>

				{/* Central isometric processor */}

				<g>
					{/* Left face */}

					<path
						d="
							M310 100
							L360 125
							L360 162
							L310 187
							Z
						"
						fill="#0B777B"
					/>

					{/* Right face */}

					<path
						d="
							M310 100
							L260 125
							L260 162
							L310 187
							Z
						"
						fill="#18BCB7"
					/>

					{/* Front top */}

					<path
						d="
							M310 75
							L360 100
							L310 125
							L260 100
							Z
						"
						fill="url(#why-main-gradient)"
						stroke="#18BCB7"
						strokeWidth="1.3"
					/>

					{/* Core geometry */}

					<path
						d="
							M310 90
							L336 103
							L310 116
							L284 103
							Z
						"
						fill="#FFFFFF"
						fillOpacity="0.18"
						stroke="#FFFFFF"
						strokeOpacity="0.65"
					/>

					{/* Top core detail */}

					<path
						d="M297 103H323"
						stroke="#FFFFFF"
						strokeOpacity="0.8"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>

					<path
						d="M310 96V110"
						stroke="#FFFFFF"
						strokeOpacity="0.8"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>

					{/* Side face lighting */}

					<path
						d="M267 130V155L303 173"
						stroke="#FFFFFF"
						strokeOpacity="0.35"
						strokeWidth="1"
					/>

					<path
						d="M353 130V155L317 173"
						stroke="#FFFFFF"
						strokeOpacity="0.25"
						strokeWidth="1"
					/>
				</g>

				{/* ------------------------------------------------------ */}
				{/* External network connections                         */}
				{/* ------------------------------------------------------ */}

				<g
					stroke="url(#why-line-gradient)"
					strokeWidth="1.4"
					strokeDasharray="4 5"
					strokeLinecap="round"
				>
					<path d="M193 181L110 140L62 165" />

					<path d="M427 181L510 140L558 165" />

					<path d="M165 278L92 315L58 295" />

					<path d="M455 278L528 315L562 295" />

					<path d="M310 75V35" />
				</g>

				{/* ------------------------------------------------------ */}
				{/* Network endpoints                                    */}
				{/* ------------------------------------------------------ */}

				{[
					[62, 165],
					[558, 165],
					[58, 295],
					[562, 295],
					[310, 35],
				].map(([cx, cy], index) => (
					<g key={`endpoint-${index}`}>
						{/* Outer glow */}

						<circle
							cx={cx}
							cy={cy}
							r="13"
							fill="#18BCB7"
							fillOpacity="0.2"
							filter="url(#why-node-glow)"
						/>

						{/* Outer ring */}

						<circle
							cx={cx}
							cy={cy}
							r="9"
							fill="#FFFFFF"
							stroke="#18BCB7"
							strokeOpacity="0.35"
							strokeWidth="1.2"
						/>

						{/* Inner point */}

						<circle
							cx={cx}
							cy={cy}
							r="3.5"
							fill="#18BCB7"
						/>
					</g>
				))}

				{/* ------------------------------------------------------ */}
				{/* Animated data signals                                */}
				{/* ------------------------------------------------------ */}

				<g>
					<circle
						r="3"
						fill="#18BCB7"
					>
						<animateMotion
							dur="5s"
							repeatCount="indefinite"
							path="M62 165L110 140L193 181"
						/>
					</circle>

					<circle
						r="3"
						fill="#18BCB7"
					>
						<animateMotion
							dur="6s"
							repeatCount="indefinite"
							path="M558 165L510 140L427 181"
						/>
					</circle>

					<circle
						r="2.5"
						fill="#18BCB7"
					>
						<animateMotion
							dur="4.5s"
							repeatCount="indefinite"
							path="M310 35V75"
						/>
					</circle>
				</g>

				{/* ------------------------------------------------------ */}
				{/* Additional geometric accents                         */}
				{/* ------------------------------------------------------ */}

				<g
					stroke="#18BCB7"
					strokeOpacity="0.25"
					strokeWidth="1"
				>
					<path d="M82 80H120" />

					<path d="M101 61V99" />

					<path d="M505 405H543" />

					<path d="M524 386V424" />

					<path d="M480 65L492 77L480 89L468 77Z" />

					<path d="M120 380L132 392L120 404L108 392Z" />
				</g>
			</svg>

			{/* Bottom visual atmosphere */}

			<div
				className="
					pointer-events-none
					absolute bottom-[7%] left-1/2
					h-12 w-[55%]
					-translate-x-1/2
					rounded-full
					bg-brand/[0.055]
					blur-3xl
				"
			/>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Why Codelaro Hero                                                          */
/* -------------------------------------------------------------------------- */

export function WhyHero() {
	return (
		<section
			id="why-hero"
			aria-labelledby="why-hero-heading"
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
				<div className="absolute inset-0 bg-blueprint-grid mask-fade-b opacity-25" />

				<div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand/[0.06] blur-[110px]" />
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
					lg:pb-24 lg:pt-36
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
					{/* ---------------------------------------------- */}
					{/* Left content                                   */}
					{/* ---------------------------------------------- */}

					<div className="min-w-0 lg:col-span-6">
						{/* Eyebrow */}

						<div className="mb-6 inline-flex items-center gap-3">
							<span className="h-2 w-2 rotate-45 bg-brand" />

							<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
								Why Codelaro
							</span>

							<span className="h-px w-8 bg-brand/40" />
						</div>

						{/* Main heading */}

						<h1
							id="why-hero-heading"
							className="
								max-w-[670px]
								font-display
								text-[clamp(2.5rem,3.8vw,4.3rem)]
								font-bold
								leading-[1.1]
								tracking-[-0.045em]
								text-navy
							"
						>
							More than software.
							<br />

							<span className="text-brand">
								A partner in progress.
							</span>
						</h1>

						{/* Description */}

						<p
							className="
								mt-6 max-w-[510px]
								text-[15px]
								leading-[1.85]
								text-slate-500
								sm:text-[17px]
							"
						>
							Codelaro combines business-focused
							thinking, modern software engineering,
							and transparent collaboration to build
							digital solutions that solve real
							challenges and support long-term growth.
						</p>

						{/* CTA buttons */}

						<div
							className="
								mt-9
								flex flex-col gap-3
								sm:flex-row sm:items-center
							"
						>
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
								Talk to an Expert

								<ArrowUpRight
									className="
										h-[17px] w-[17px]
										transition-transform duration-300
										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5
									"
								/>
							</Link>

							<Link
								to="/company/process"
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
									text-[16px] font-semibold
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
								Our Process

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
					</div>

					{/* ---------------------------------------------- */}
					{/* Right visual                                    */}
					{/* ---------------------------------------------- */}

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