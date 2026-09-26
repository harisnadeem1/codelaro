import { Link } from 'react-router';
import {
	ArrowRight,
	ArrowUpRight,
	Code2,
	Rocket,
	TrendingUp,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const STAGES = [
	{
		number: '01',
		name: 'Code',
		label: 'THE FOUNDATION',
		headline: 'Engineer with intention.',
		description:
			'We turn your business challenges into a clear technical direction, combining strategy, design, and engineering to build the right solution.',
		footer: 'Strategy · Design · Engineering',
		icon: Code2,
	},
	{
		number: '02',
		name: 'Launch',
		label: 'THE EXECUTION',
		headline: 'Bring ideas into reality.',
		description:
			'From development and testing to deployment, we focus on delivering reliable solutions that are ready for real-world use.',
		footer: 'Development · Testing · Deployment',
		icon: Rocket,
	},
	{
		number: '03',
		name: 'Grow',
		label: 'THE EVOLUTION',
		headline: 'Built for what comes next.',
		description:
			'We help your software evolve with your business through continuous improvement, optimization, and scalable engineering.',
		footer: 'Optimize · Improve · Scale',
		icon: TrendingUp,
	},
] as const;

type Stage = (typeof STAGES)[number];

/* -------------------------------------------------------------------------- */
/* Custom Architectural Illustrations                                         */
/* -------------------------------------------------------------------------- */

function StageArtwork({
	type,
}: {
	type: 'code' | 'launch' | 'grow';
}) {
	return (
		<div
			aria-hidden="true"
			className="
				relative flex h-[150px]
				w-full items-center
				justify-center
				overflow-hidden
				sm:h-[175px]
				lg:h-[190px]
			"
		>
		

			<svg
				viewBox="0 0 320 180"
				fill="none"
				className="
					relative h-full w-full
					max-w-[320px]
					transition-transform
					duration-700
					motion-safe:group-hover:scale-105
				"
			>
				{/* CODE ILLUSTRATION */}

				{type === 'code' && (
					<>
						{/* Construction frame */}

						<rect
							x="75"
							y="27"
							width="170"
							height="126"
							rx="10"
							stroke="#FFFFFF"
							strokeOpacity=".14"
						/>

						<rect
							x="87"
							y="39"
							width="146"
							height="102"
							rx="5"
							stroke="#18BCB7"
							strokeOpacity=".18"
							strokeDasharray="4 6"
						/>

						{/* Top interface */}

						<path
							d="M75 53H245"
							stroke="white"
							strokeOpacity=".14"
						/>

						<circle
							cx="89"
							cy="40"
							r="2.3"
							fill="#18BCB7"
						/>

						<circle
							cx="99"
							cy="40"
							r="2.3"
							fill="white"
							fillOpacity=".25"
						/>

						<circle
							cx="109"
							cy="40"
							r="2.3"
							fill="white"
							fillOpacity=".15"
						/>

						{/* Code symbol */}

						<path
							d="M137 77L116 96L137 115"
							stroke="#18BCB7"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>

						<path
							d="M183 77L204 96L183 115"
							stroke="#18BCB7"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>

						<path
							d="M170 70L151 122"
							stroke="white"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeOpacity=".8"
						/>

						{/* Architectural connections */}

						<path
							d="M75 83H45V54H22"
							stroke="#18BCB7"
							strokeOpacity=".4"
							strokeDasharray="3 5"
						/>

						<path
							d="M245 105H278V135H300"
							stroke="#18BCB7"
							strokeOpacity=".4"
							strokeDasharray="3 5"
						/>

						<circle
							cx="22"
							cy="54"
							r="3"
							fill="#18BCB7"
						/>

						<circle
							cx="300"
							cy="135"
							r="3"
							fill="#18BCB7"
						/>

						{/* Lower status bars */}

						<rect
							x="110"
							y="132"
							width="45"
							height="2"
							rx="1"
							fill="#18BCB7"
							fillOpacity=".6"
						/>

						<rect
							x="161"
							y="132"
							width="28"
							height="2"
							rx="1"
							fill="white"
							fillOpacity=".2"
						/>
					</>
				)}

				{/* LAUNCH ILLUSTRATION */}

				{type === 'launch' && (
					<>
						{/* Orbital architecture */}

						<circle
							cx="160"
							cy="90"
							r="73"
							stroke="white"
							strokeOpacity=".1"
						/>

						<circle
							cx="160"
							cy="90"
							r="57"
							stroke="#18BCB7"
							strokeOpacity=".22"
							strokeDasharray="4 7"
						/>

						<circle
							cx="160"
							cy="90"
							r="40"
							stroke="white"
							strokeOpacity=".14"
						/>

						{/* Orbital arcs */}

						<circle
							cx="160"
							cy="90"
							r="73"
							stroke="#18BCB7"
							strokeWidth="2"
							strokeDasharray="72 387"
							transform="rotate(-65 160 90)"
						/>

						<circle
							cx="160"
							cy="90"
							r="57"
							stroke="#18BCB7"
							strokeOpacity=".5"
							strokeWidth="1.5"
							strokeDasharray="46 312"
							transform="rotate(135 160 90)"
						/>

						{/* Central rocket */}

						<g transform="translate(129 56)">
							<path
								d="M31 5C47 16 53 36 44 54L31 65L18 54C9 36 15 16 31 5Z"
								stroke="#18BCB7"
								strokeWidth="2"
								fill="#18BCB7"
								fillOpacity=".08"
							/>

							<circle
								cx="31"
								cy="31"
								r="7"
								stroke="white"
								strokeWidth="1.5"
							/>

							<path
								d="M18 44L6 57V67L22 57"
								stroke="#18BCB7"
								strokeWidth="1.5"
							/>

							<path
								d="M44 44L56 57V67L40 57"
								stroke="#18BCB7"
								strokeWidth="1.5"
							/>

							<path
								d="M27 68L31 83L35 68"
								stroke="#18BCB7"
								strokeWidth="1.8"
								strokeLinecap="round"
							/>
						</g>

						{/* Directional technical markers */}

						<path
							d="M160 5V16M160 164V175"
							stroke="#18BCB7"
							strokeOpacity=".5"
						/>

						<path
							d="M75 90H86M234 90H245"
							stroke="#18BCB7"
							strokeOpacity=".5"
						/>

						<circle
							cx="215"
							cy="32"
							r="3"
							fill="#18BCB7"
						/>

						<circle
							cx="100"
							cy="135"
							r="3"
							fill="white"
							fillOpacity=".4"
						/>
					</>
				)}

				{/* GROW ILLUSTRATION */}

				{type === 'grow' && (
					<>
						{/* Chart architecture */}

						<path
							d="M47 137H275"
							stroke="white"
							strokeOpacity=".18"
						/>

						<path
							d="M47 137V32"
							stroke="white"
							strokeOpacity=".18"
						/>

						{/* Horizontal reference lines */}

						{[48, 77, 106].map((y) => (
							<path
								key={y}
								d={`M47 ${y}H275`}
								stroke="white"
								strokeOpacity=".08"
								strokeDasharray="4 6"
							/>
						))}

						{/* Growth area */}

						<path
							d="M48 122L95 107L134 113L175 76L216 84L270 30V137H48V122Z"
							fill="#18BCB7"
							fillOpacity=".065"
						/>

						{/* Main growth line */}

						<path
							d="M48 122L95 107L134 113L175 76L216 84L270 30"
							stroke="#18BCB7"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>

						{/* Data points */}

						{[
							[48, 122],
							[95, 107],
							[134, 113],
							[175, 76],
							[216, 84],
							[270, 30],
						].map(([cx, cy], index) => (
							<g key={index}>
								<circle
									cx={cx}
									cy={cy}
									r="5"
									fill="#0F172A"
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

						{/* Growth direction */}

						<path
							d="M252 30H270V48"
							stroke="#18BCB7"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>

						{/* Technical reference */}

						<path
							d="M270 30V137"
							stroke="#18BCB7"
							strokeOpacity=".2"
							strokeDasharray="3 5"
						/>

						<circle
							cx="270"
							cy="30"
							r="11"
							stroke="#18BCB7"
							strokeOpacity=".25"
						/>
					</>
				)}
			</svg>

			{/* Small reference annotation */}

			<span
				className="
					pointer-events-none
					absolute bottom-2 right-3
					  text-[8px]
					uppercase tracking-[0.15em]
					text-white/20
				"
			>
				Codelaro / {type}
			</span>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Individual Stage                                                           */
/* -------------------------------------------------------------------------- */

function StagePanel({
	stage,
	index,
}: {
	stage: Stage;
	index: number;
}) {
	const Icon = stage.icon;

	const artworkType = stage.name.toLowerCase() as
		| 'code'
		| 'launch'
		| 'grow';

	return (
		<li
			className="
				group relative
				flex min-w-0 flex-col
				overflow-hidden
				border-b border-white/[0.09]
				px-6 pb-7 pt-7
				transition-colors duration-500
				hover:bg-white/[0.035]
				last:border-b-0
				sm:px-8
				lg:border-b-0
				lg:border-r
				lg:px-7
				lg:py-9
				lg:last:border-r-0
				xl:px-9
			"
		>
			{/* Hover accent */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute left-0 top-0
					h-[2px] w-0
					bg-brand
					transition-all duration-700
					group-hover:w-full
					motion-reduce:transition-none
				"
			/>

			{/* Stage header */}

			<div className="relative flex items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<span
						className="
							  text-[12px]
							font-semibold tabular-nums
							text-brand
						"
					>
						{stage.number}
					</span>

					<span className="h-px w-6 bg-brand/40" />

					<span
						className="
							  text-[9px]
							font-medium uppercase
							tracking-[0.15em]
							text-slate-400
						"
					>
						{stage.label}
					</span>
				</div>

				<span
					className="
						grid h-9 w-9
						place-items-center
						rounded-lg
						border border-white/10
						bg-white/[0.035]
						text-brand
						transition-all duration-500
						group-hover:border-brand/30
						group-hover:bg-brand/10
					"
				>
					<Icon
						className="h-[17px] w-[17px]"
						strokeWidth={1.6}
						aria-hidden="true"
					/>
				</span>
			</div>

			{/* Custom illustration */}

			<div className="relative mt-5">
				<StageArtwork type={artworkType} />
			</div>

			{/* Stage content */}

			<div className="relative mt-5 flex flex-1 flex-col">
				{/* Stage name */}

				<h3
					className="
						font-display
						text-[clamp(2.4rem,3.3vw,3.35rem)]
						font-semibold
						leading-none
						tracking-[-0.06em]
						text-white
					"
				>
					{stage.name}
					<span className="text-brand">.</span>
				</h3>

				{/* Headline */}

				<p
					className="
						mt-5
						font-display text-[16px]
						font-semibold leading-snug
						tracking-[-0.02em]
						text-slate-100
						sm:text-[17px]
					"
				>
					{stage.headline}
				</p>

				{/* Description */}

				<p
					className="
						mt-3 max-w-[340px]
						text-[13px]
						leading-[1.85]
						text-slate-400
						sm:text-[14px]
					"
				>
					{stage.description}
				</p>

				{/* Footer */}

				<div
					className="
						mt-auto
						border-t border-white/[0.09]
						pt-5
						[margin-top:32px]
					"
				>
					<div className="flex items-center justify-between gap-3">
						<span
							className="
								  text-[9px]
								font-medium uppercase
								tracking-[0.08em]
								text-slate-400
							"
						>
							{stage.footer}
						</span>

						<span
							aria-hidden="true"
							className="
								  text-[10px]
								tabular-nums
								text-brand/60
							"
						>
							0{index + 1}/03
						</span>
					</div>
				</div>
			</div>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Solutions Approach                                                         */
/* -------------------------------------------------------------------------- */

export function SolutionsOverviewApproach() {
	return (
		<section
			id="solutions-approach"
			aria-labelledby="solutions-approach-heading"
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
					bg-blueprint-grid
					opacity-[0.12]
					[mask-image:linear-gradient(to_bottom,black,transparent_65%)]
				"
			/>

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -right-48 top-0
					h-[450px] w-[450px]
					rounded-full
					bg-brand/[0.045]
					blur-[110px]
				"
			/>

			{/* Main container */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5
					py-20
					sm:px-8 sm:py-20
					lg:py-20
				"
			>
				{/* -------------------------------------------------- */}
				{/* EDITORIAL SECTION HEADER                           */}
				{/* -------------------------------------------------- */}

				<div
					className="
						grid items-end
						gap-8
						lg:grid-cols-12
						lg:gap-12
					"
				>
					{/* Left */}

					<div className="lg:col-span-7">
						{/* Eyebrow */}

						<div className="flex items-center gap-3">
							<span className="h-px w-9 bg-brand" />

							<p
								className="
									  text-[11px]
									font-semibold uppercase
									tracking-[0.2em]
									text-brand-700
								"
							>
								The Codelaro approach
							</p>
						</div>

						{/* Main heading */}

						<h2
							id="solutions-approach-heading"
							className="
								
				mt-6 font-display
				text-[2.2rem] font-semibold
				leading-[1.08]
				tracking-[-0.025em]
				text-navy
				sm:text-4xl
				md:text-[3rem]
			
							"
						>
							One connected journey.
							<br />

							<span className="text-brand">
								Three defining moves.
							</span>
						</h2>
					</div>

					{/* Right */}

					<div className="lg:col-span-5 lg:pb-1">
						<p
							className="
								max-w-[450px]
								text-[15px]
								leading-[1.85]
								text-slate-500
								sm:text-[16px]
							"
						>
							Our approach reflects the philosophy behind
							Codelaro. We engineer with purpose, launch with
							confidence, and build solutions that can evolve
							alongside your business.
						</p>
					</div>
				</div>

				{/* -------------------------------------------------- */}
				{/* BRAND SIGNATURE                                   */}
				{/* -------------------------------------------------- */}

				<div
					className="
						mt-12
						flex flex-wrap items-center
						gap-x-4 gap-y-2
						border-t border-navy/[0.09]
						pt-5
						sm:mt-16
					"
				>
					<div className="flex items-center gap-2.5">
						<span className="h-1.5 w-1.5 rounded-full bg-brand" />

						<span
							className="
								  text-[10px]
								font-semibold uppercase
								tracking-[0.15em]
								text-navy
							"
						>
							Code. Launch. Grow.
						</span>
					</div>

					<span className="ml-auto   text-[10px] text-slate-400">
						THE THREE STAGES
					</span>
				</div>

				{/* -------------------------------------------------- */}
				{/* CONNECTED ARCHITECTURAL SHOWCASE                  */}
				{/* -------------------------------------------------- */}

				<div
					className="
						relative mt-6
						overflow-hidden
						rounded-[24px]
						border border-navy/[0.07]
						bg-navy
						shadow-[0_28px_80px_-50px_rgba(15,23,42,0.35)]
						sm:rounded-[30px]
					"
				>
					{/* Top teal accent */}

					<div
						aria-hidden="true"
						className="
							absolute left-0 top-0
							z-10
							h-[2px] w-full
							bg-gradient-to-r
							from-brand
							via-brand/30
							to-transparent
						"
					/>

					{/* Subtle background grid */}

					<div
						aria-hidden="true"
						className="
							pointer-events-none
							absolute inset-0
							bg-blueprint-grid-dark
							opacity-[0.10]
						"
					/>

					{/* Background lighting */}

					<div
						aria-hidden="true"
						className="
							pointer-events-none
							absolute -left-40 top-0
							h-96 w-96
							rounded-full
							bg-brand/[0.07]
							blur-[100px]
						"
					/>

					<div
						aria-hidden="true"
						className="
							pointer-events-none
							absolute -right-40 bottom-0
							h-96 w-96
							rounded-full
							bg-brand/[0.06]
							blur-[100px]
						"
					/>

					{/* Three connected stages */}

					<ol
						className="
							relative z-10
							grid grid-cols-1
							lg:grid-cols-3
						"
					>
						{STAGES.map((stage, index) => (
							<StagePanel
								key={stage.number}
								stage={stage}
								index={index}
							/>
						))}
					</ol>

					{/* Integrated bottom signature */}

					<div
						className="
							relative z-10
							flex flex-col
							gap-3
							border-t border-white/[0.09]
							bg-white/[0.025]
							px-6 py-5
							sm:flex-row
							sm:items-center
							sm:justify-between
							sm:px-8
						"
					>
						<div className="flex items-center gap-3">
							<span className="h-1.5 w-1.5 rounded-full bg-brand" />

							<p
								className="
									font-display
									text-[12px]
									font-medium
									text-slate-300
									sm:text-[13px]
								"
							>
								From the first decision to what comes next.
							</p>
						</div>

						<div
							aria-hidden="true"
							className="flex items-center gap-2"
						>
							<span className="h-px w-6 bg-brand/40" />

							<span
								className="
									  text-[9px]
									uppercase
									tracking-[0.15em]
									text-brand
								"
							>
								Codelaro
							</span>
						</div>
					</div>
				</div>

				{/* -------------------------------------------------- */}
				{/* BOTTOM EDITORIAL CTA                               */}
				{/* -------------------------------------------------- */}

				<div
					className="
						mt-12
						flex flex-col
						gap-7
						border-t border-navy/[0.09]
						pt-8
						sm:flex-row
						sm:items-center
						sm:justify-between
						lg:mt-16
					"
				>
					{/* Supporting statement */}

					<div className="max-w-[560px]">
						<p
							className="
								font-display
								text-[17px]
								font-semibold
								tracking-[-0.025em]
								text-navy
								sm:text-[19px]
							"
						>
							Your challenge. Our thinking. Shared progress.
						</p>

						<p
							className="
								mt-1.5
								text-[13px]
								leading-[1.8]
								text-slate-500
								sm:text-[14px]
							"
						>
							Let's turn your business objectives into
							a solution designed for the long term.
						</p>
					</div>

					{/* CTA */}

					<Link
	to="/contact"
	className="
		group inline-flex
		min-h-[50px]
		w-fit items-center justify-center gap-3
		rounded-xl
		border border-navy/20
		bg-transparent
		px-6
		font-display text-[16px] font-semibold
		text-navy
		transition-all duration-300
		hover:border-brand
		hover:text-brand
		focus-visible:outline-2
		focus-visible:outline-offset-4
		focus-visible:outline-brand
	"
>
	Build with Codelaro

	<ArrowUpRight
		className="
			h-5 w-5
			text-navy
			transition-transform duration-300
			group-hover:-translate-y-1
			group-hover:text-brand

			group-hover:translate-x-1
			motion-reduce:transform-none
		"
		strokeWidth={1.8}
		aria-hidden="true"
	/>
</Link>
				</div>
			</div>
		</section>
	);
}