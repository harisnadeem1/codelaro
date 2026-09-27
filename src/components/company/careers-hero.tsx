import { useId } from 'react';
import { Link } from 'react-router';

import {
	ArrowDownRight,
	ArrowRight,
	ArrowUpRight,
	Code2,
	Sparkles,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Careers Hero Visual                                                        */
/* -------------------------------------------------------------------------- */


function HeroVisual() {
	const id = useId().replace(/:/g, '');

	const gradient = `career-gradient-${id}`;
	const gradientLight = `career-light-${id}`;
	const gradientGlass = `career-glass-${id}`;
	const glow = `career-glow-${id}`;
	const shadow = `career-shadow-${id}`;

	return (
		<div
			aria-hidden="true"
			className="relative mx-auto w-full max-w-[650px] lg:ml-auto"
		>
			{/* Background atmosphere */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-[18%] top-[14%] h-[65%] w-[70%] rounded-full bg-brand/[0.09] blur-[90px]" />
				<div className="absolute bottom-[5%] right-[5%] h-[35%] w-[40%] rounded-full bg-brand/[0.06] blur-[65px]" />
			</div>

			<svg
				viewBox="0 0 650 550"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				className="relative h-auto w-full overflow-visible"
			>
				<defs>
					{/* Main teal gradient */}
					<linearGradient
						id={gradient}
						x1="140"
						y1="110"
						x2="530"
						y2="460"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#45DAD3" />
						<stop offset="0.5" stopColor="#18BCB7" />
						<stop offset="1" stopColor="#078B88" />
					</linearGradient>

					{/* Light surface */}
					<linearGradient
						id={gradientLight}
						x1="130"
						y1="130"
						x2="520"
						y2="450"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FFFFFF" />
						<stop offset="1" stopColor="#DDF8F5" />
					</linearGradient>

					{/* Transparent glass */}
					<linearGradient
						id={gradientGlass}
						x1="100"
						y1="60"
						x2="500"
						y2="450"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FFFFFF" stopOpacity="0.98" />
						<stop
							offset="1"
							stopColor="#B8F0EB"
							stopOpacity="0.72"
						/>
					</linearGradient>

					{/* Atmospheric glow */}
					<radialGradient id={glow}>
						<stop stopColor="#18BCB7" stopOpacity="0.18" />
						<stop
							offset="1"
							stopColor="#18BCB7"
							stopOpacity="0"
						/>
					</radialGradient>

					{/* Soft shadow */}
					<filter
						id={shadow}
						x="-60%"
						y="-60%"
						width="220%"
						height="220%"
					>
						<feDropShadow
							dx="0"
							dy="17"
							stdDeviation="20"
							floodColor="#18BCB7"
							floodOpacity="0.13"
						/>
					</filter>
				</defs>

				{/* -------------------------------------------------- */}
				{/* Background composition                             */}
				{/* -------------------------------------------------- */}

				<ellipse
					cx="325"
					cy="285"
					rx="275"
					ry="230"
					fill={`url(#${glow})`}
				/>

				{/* Subtle perspective grid */}
				<g
					stroke="#18BCB7"
					strokeOpacity="0.10"
					strokeWidth="1"
				>
					{[0, 1, 2, 3, 4, 5].map((index) => (
						<path
							key={`grid-${index}`}
							d={`M${110 + index * 70} 410L${
								290 + index * 30
							} 510`}
						/>
					))}

					<path d="M105 430H550" />
					<path d="M145 455H520" />
					<path d="M190 480H480" />
				</g>

				{/* -------------------------------------------------- */}
				{/* Floating architectural elements                    */}
				{/* -------------------------------------------------- */}

				<g stroke="#18BCB7" strokeOpacity="0.35">
					<path d="M75 170H98" />
					<path d="M86.5 158V182" />

					<path d="M553 126H578" />
					<path d="M565 114V139" />

					<path d="M525 445H550" />
					<path d="M537 433V457" />
				</g>

				{/* Decorative particles */}
				{[
					[112, 105, 3],
					[515, 89, 4],
					[585, 305, 3],
					[72, 350, 4],
					[185, 475, 2.5],
					[475, 485, 3],
				].map(([x, y, radius], index) => (
					<circle
						key={index}
						cx={x}
						cy={y}
						r={radius}
						fill="#18BCB7"
						fillOpacity="0.45"
					/>
				))}

				{/* -------------------------------------------------- */}
				{/* Central isometric platform                         */}
				{/* -------------------------------------------------- */}

				{/* Platform shadow */}
				<ellipse
					cx="325"
					cy="413"
					rx="205"
					ry="61"
					fill="#18BCB7"
					fillOpacity="0.10"
				/>

				{/* Lower platform */}
				<path
					d="M325 290L535 388L325 488L115 388Z"
					fill="#18BCB7"
					fillOpacity="0.11"
				/>

				{/* Platform thickness */}
				<path
					d="M115 388L325 488V501L115 401Z"
					fill="#A4EAE5"
				/>

				<path
					d="M325 488L535 388V401L325 501Z"
					fill="#61D5CE"
				/>

				{/* Main platform */}
				<path
					d="M325 277L535 376L325 476L115 376Z"
					fill={`url(#${gradientLight})`}
					stroke="#18BCB7"
					strokeOpacity="0.38"
					strokeWidth="1.5"
				/>

				{/* Platform inner detail */}
				<path
					d="M325 302L488 376L325 451L162 376Z"
					stroke="#18BCB7"
					strokeOpacity="0.20"
					strokeDasharray="5 8"
				/>

				{/* Central platform accent */}
				<path
					d="M325 345L392 376L325 407L258 376Z"
					fill="#18BCB7"
					fillOpacity="0.10"
					stroke="#18BCB7"
					strokeOpacity="0.22"
				/>

				{/* -------------------------------------------------- */}
				{/* Main transparent workspace                         */}
				{/* -------------------------------------------------- */}

				<g filter={`url(#${shadow})`}>
					{/* Workspace depth */}
					<path
						d="M173 127L451 99L466 349L188 377Z"
						fill="#18BCB7"
						fillOpacity="0.15"
					/>

					{/* Main panel */}
					<path
						d="M162 115L440 87L455 337L177 365Z"
						fill={`url(#${gradientGlass})`}
						stroke="#18BCB7"
						strokeOpacity="0.58"
						strokeWidth="1.5"
					/>

					{/* Top toolbar */}
					<path
						d="M162 115L440 87L442 118L164 146Z"
						fill="#DDF8F5"
					/>

					<path
						d="M164 146L442 118"
						stroke="#18BCB7"
						strokeOpacity="0.26"
					/>

					{/* Toolbar indicators */}
					<circle cx="180" cy="128" r="3" fill="#18BCB7" />

					<circle
						cx="192"
						cy="127"
						r="3"
						fill="#18BCB7"
						fillOpacity="0.45"
					/>

					<circle
						cx="204"
						cy="126"
						r="3"
						fill="#18BCB7"
						fillOpacity="0.20"
					/>

					{/* Workspace title */}
					<text
						x="250"
						y="123"
						fill="#078B88"
						fontSize="9"
						fontWeight="700"
						letterSpacing="1.5"
						fontFamily="monospace"
						transform="rotate(-5.8 250 123)"
					>
						CREATIVE WORKSPACE
					</text>

					{/* Workspace sidebar */}
					<path
						d="M165 147L207 143L220 358L178 363Z"
						fill="#18BCB7"
						fillOpacity="0.07"
					/>

					{/* Sidebar indicators */}
					{[168, 192, 216, 240, 264].map((y) => (
						<g key={y}>
							<circle
								cx="184"
								cy={y}
								r="4"
								fill="#18BCB7"
								fillOpacity="0.55"
							/>

							<path
								d={`M193 ${y - 1}L203 ${y - 2}`}
								stroke="#18BCB7"
								strokeOpacity="0.38"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</g>
					))}

					{/* Workspace code illustration */}
					<g
						stroke="#18BCB7"
						strokeLinecap="round"
						strokeWidth="5"
					>
						<path
							d="M250 175L271 173"
							strokeOpacity="0.90"
						/>

						<path
							d="M280 172L355 165"
							strokeOpacity="0.27"
						/>

						<path
							d="M261 195L310 190"
							strokeOpacity="0.65"
						/>

						<path
							d="M320 189L391 182"
							strokeOpacity="0.24"
						/>

						<path
							d="M261 215L282 213"
							strokeOpacity="0.80"
						/>

						<path
							d="M292 212L365 205"
							strokeOpacity="0.30"
						/>

						<path
							d="M250 240L330 232"
							strokeOpacity="0.46"
						/>

						<path
							d="M339 231L383 227"
							strokeOpacity="0.20"
						/>
					</g>

					{/* Central product preview */}
					<path
						d="M246 264L405 248L411 322L252 339Z"
						fill="#FFFFFF"
						fillOpacity="0.82"
						stroke="#18BCB7"
						strokeOpacity="0.22"
					/>

					{/* Preview header */}
					<path
						d="M247 265L405 249L406 265L248 281Z"
						fill="#DFF8F5"
					/>

					{/* Preview graphic */}
					<path
						d="M268 308L294 290L318 304L352 275L390 294"
						stroke="#18BCB7"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>

					<circle
						cx="352"
						cy="275"
						r="4"
						fill="#18BCB7"
					/>
				</g>

				{/* -------------------------------------------------- */}
				{/* Floating design layer                              */}
				{/* -------------------------------------------------- */}

				<g filter={`url(#${shadow})`}>
					{/* Depth */}
					<path
						d="M405 184L546 202L531 339L390 321Z"
						fill="#18BCB7"
						fillOpacity="0.12"
					/>

					{/* Glass surface */}
					<path
						d="M397 176L538 194L523 331L382 313Z"
						fill="#FFFFFF"
						fillOpacity="0.95"
						stroke="#18BCB7"
						strokeOpacity="0.43"
						strokeWidth="1.5"
					/>

					{/* Design title */}
					<text
						x="414"
						y="215"
						fontSize="10"
						fontWeight="700"
						letterSpacing="1.1"
						fill="#078B88"
						fontFamily="monospace"
						transform="rotate(7 414 215)"
					>
						DESIGN
					</text>

					{/* Abstract design elements */}
					<rect
						x="412"
						y="229"
						width="42"
						height="42"
						rx="8"
						transform="rotate(7 412 229)"
						fill={`url(#${gradient})`}
					/>

					<circle
						cx="486"
						cy="253"
						r="21"
						stroke="#18BCB7"
						strokeWidth="2"
						strokeOpacity="0.70"
					/>

					<path
						d="M414 289L495 299"
						stroke="#18BCB7"
						strokeOpacity="0.50"
						strokeWidth="5"
						strokeLinecap="round"
					/>

					<path
						d="M413 303L470 310"
						stroke="#18BCB7"
						strokeOpacity="0.23"
						strokeWidth="5"
						strokeLinecap="round"
					/>
				</g>

				{/* -------------------------------------------------- */}
				{/* Floating collaboration layer                       */}
				{/* -------------------------------------------------- */}

				<g filter={`url(#${shadow})`}>
					{/* Panel */}
					<path
						d="M93 217L215 195L226 310L104 333Z"
						fill="#FFFFFF"
						fillOpacity="0.97"
						stroke="#18BCB7"
						strokeOpacity="0.44"
						strokeWidth="1.5"
					/>

					{/* Panel accent */}
					<path
						d="M93 217L215 195L218 218L96 240Z"
						fill="#E1F9F6"
					/>

					{/* Collaboration symbols */}
					<circle
						cx="130"
						cy="263"
						r="13"
						fill={`url(#${gradient})`}
					/>

					<circle
						cx="165"
						cy="256"
						r="13"
						fill="#A5E9E4"
					/>

					<circle
						cx="198"
						cy="249"
						r="13"
						fill="#D8F6F2"
						stroke="#18BCB7"
						strokeOpacity="0.5"
					/>

					{/* Connecting baseline */}
					<path
						d="M115 297L199 281"
						stroke="#18BCB7"
						strokeOpacity="0.50"
						strokeWidth="2"
						strokeDasharray="4 5"
					/>

					<text
						x="128"
						y="314"
						fontSize="9"
						fontWeight="700"
						letterSpacing="1"
						fill="#078B88"
						fontFamily="monospace"
						transform="rotate(-10 128 314)"
					>
						TOGETHER
					</text>
				</g>

				{/* -------------------------------------------------- */}
				{/* Collaborative cursor details                       */}
				{/* -------------------------------------------------- */}

				{/* Cursor one */}
				<g transform="translate(478 145)">
					<path
						d="M0 0V27L8 21L15 34L21 31L13 18L23 16Z"
						fill={`url(#${gradient})`}
						stroke="#FFFFFF"
						strokeWidth="2"
						strokeLinejoin="round"
					/>

					<rect
						x="17"
						y="29"
						width="64"
						height="20"
						rx="6"
						fill="#18BCB7"
					/>

					<text
						x="49"
						y="42"
						textAnchor="middle"
						fontSize="9"
						fontWeight="600"
						fill="#FFFFFF"
					>
						Design
					</text>
				</g>

				{/* Cursor two */}
				<g transform="translate(292 365)">
					<path
						d="M0 0V25L7 19L14 31L19 28L12 16L21 14Z"
						fill="#9EDFD9"
						stroke="#FFFFFF"
						strokeWidth="2"
						strokeLinejoin="round"
					/>

					<rect
						x="14"
						y="27"
						width="83"
						height="20"
						rx="6"
						fill="#6DCFC8"
					/>

					<text
						x="55"
						y="40"
						textAnchor="middle"
						fontSize="9"
						fontWeight="600"
						fill="#FFFFFF"
					>
						Engineering
					</text>
				</g>

				{/* -------------------------------------------------- */}
				{/* Final decorative details                           */}
				{/* -------------------------------------------------- */}

				<path
					d="M105 134L151 114"
					stroke="#18BCB7"
					strokeOpacity="0.35"
					strokeWidth="2"
					strokeDasharray="4 6"
				/>

				<path
					d="M499 373L548 350"
					stroke="#18BCB7"
					strokeOpacity="0.35"
					strokeWidth="2"
					strokeDasharray="4 6"
				/>
			</svg>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Careers Hero                                                               */
/* -------------------------------------------------------------------------- */

export function CareersHero() {
	return (
		<section
			id="careers-hero"
			aria-labelledby="careers-hero-heading"
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
						opacity-[0.22]
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
					{/* -------------------------------------------------- */}
					{/* Left Content                                       */}
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
								<Sparkles
									className="h-4 w-4"
									strokeWidth={1.7}
									aria-hidden="true"
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
								Careers at Codelaro
							</span>

							<span className="h-px w-8 bg-brand/40" />
						</div>

						{/* Main heading */}

						<h1
							id="careers-hero-heading"
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
							Build meaningful
							<br />

							<span className="text-brand">
								things with us.
							</span>
						</h1>

						{/* Description */}

						<p
							className="
								mt-6
								max-w-[530px]
								text-[15px]
								leading-[1.9]
								text-slate-500
								sm:text-[17px]
							"
						>
							Explore career opportunities at Codelaro,
							where thoughtful engineering, creative
							problem-solving, and collaborative thinking
							come together to build meaningful digital
							products.
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

							<a
								href="#open-positions"
								className="
									group
									inline-flex h-[52px]
									w-full items-center
									justify-center gap-3
									rounded-xl
									bg-brand
									px-7
									font-display
									text-[15px]
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
								Explore Opportunities

								<ArrowUpRight
									className="
										h-[17px] w-[17px]
										transition-transform duration-300
										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5
									"
									aria-hidden="true"
								/>
							</a>

							{/* Secondary CTA */}

							<Link
								to="/company"
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
									text-[15px]
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
								About Codelaro

								<ArrowRight
									className="
										h-[17px] w-[17px]
										text-brand
										transition-transform duration-300
										group-hover:translate-x-1
									"
									aria-hidden="true"
								/>
							</Link>
						</div>

						{/* Supporting statement */}

						<div
							className="
								mt-11
								flex items-center gap-3
								border-t border-navy/[0.08]
								pt-6
							"
						>
							<div
								className="
									flex h-9 w-9
									shrink-0
									items-center justify-center
									rounded-xl
									border border-brand/15
									bg-brand/[0.07]
									text-brand
								"
							>
								<Code2
									className="h-[18px] w-[18px]"
									strokeWidth={1.7}
									aria-hidden="true"
								/>
							</div>

							<p
								className="
									font-display
									text-[13px]
									font-medium
									leading-relaxed
									text-navy
									sm:text-[14px]
								"
							>
								Bring your ideas, curiosity,
								and passion for technology.
							</p>
						</div>
					</div>

					{/* -------------------------------------------------- */}
					{/* Right Visual                                       */}
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