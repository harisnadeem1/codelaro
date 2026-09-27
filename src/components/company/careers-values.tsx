import {
	ArrowUpRight,
	BrainCircuit,
	CodeXml,
	GitPullRequest,
	MessagesSquare,
	MoveUpRight,
	ScanSearch,
	Sparkles,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Career Values Configuration                                                */
/* -------------------------------------------------------------------------- */

const VALUES = [
	{
		number: '01',
		title: 'Ownership & Responsibility',
		description:
			'We value people who take ownership of their work, think beyond individual tasks, and take responsibility for delivering meaningful results. Every decision should contribute to the bigger picture.',
		icon: GitPullRequest,
		keyword: 'ACCOUNTABILITY',
	},
	{
		number: '02',
		title: 'Engineering Excellence',
		description:
			'Quality matters at every stage of software development. We appreciate thoughtful architecture, maintainable code, careful testing, and the willingness to improve how things are built.',
		icon: CodeXml,
		keyword: 'CRAFTSMANSHIP',
	},
	{
		number: '03',
		title: 'Open Communication',
		description:
			'Clear communication makes complex projects easier. We encourage thoughtful discussions, constructive feedback, and transparent collaboration that help everyone understand the work and make better decisions.',
		icon: MessagesSquare,
		keyword: 'COLLABORATION',
	},
	{
		number: '04',
		title: 'Continuous Learning',
		description:
			'Technology changes quickly, and curiosity keeps us moving forward. We value people who explore emerging technologies, strengthen their skills, and actively share useful knowledge.',
		icon: BrainCircuit,
		keyword: 'CURIOSITY',
	},
	{
		number: '05',
		title: 'Practical Problem-Solving',
		description:
			'The most complicated solution is not always the right one. We focus on understanding real business challenges, evaluating alternatives, and building software that solves meaningful problems.',
		icon: ScanSearch,
		keyword: 'THOUGHTFULNESS',
	},
	{
		number: '06',
		title: 'Purposeful Innovation',
		description:
			'We embrace new ideas when they create real value. Whether improving an existing system or developing something new, we believe innovation should serve a clear purpose.',
		icon: Sparkles,
		keyword: 'IMPACT',
	},
];

/* -------------------------------------------------------------------------- */
/* Individual Value                                                           */
/* -------------------------------------------------------------------------- */

type CareerValue = (typeof VALUES)[number];

function ValueItem({ value }: { value: CareerValue }) {
	const Icon = value.icon;

	return (
		<li
			className="
				group relative
				border-t border-navy/10
				py-8
				sm:py-10
			"
		>
			{/* Interactive top accent */}

			<span
				aria-hidden="true"
				className="
					absolute left-0 top-0
					h-[2px] w-0
					bg-brand
					transition-all duration-500
					group-hover:w-24
				"
			/>

			{/* Top row */}

			<div className="flex items-start justify-between gap-4">
				{/* Number */}

				<span
					className="
						font-mono
						text-[11px]
						font-semibold
						tracking-[0.12em]
						text-brand-700
					"
				>
					{value.number}
					<span className="ml-1 text-brand/45">/06</span>
				</span>

				{/* Icon */}

				<div
					className="
						flex h-11 w-11
						shrink-0
						items-center justify-center
						rounded-xl
						border border-brand/15
						bg-brand/[0.065]
						text-brand
						transition-all duration-300
						group-hover:border-brand/35
						group-hover:bg-brand/10
						group-hover:-translate-y-1
					"
				>
					<Icon
						className="h-5 w-5"
						strokeWidth={1.6}
						aria-hidden="true"
					/>
				</div>
			</div>

			{/* Content */}

			<div className="mt-7">
				<h3
					className="
						max-w-[350px]
						font-display
						text-[21px]
						font-semibold
						leading-[1.3]
						tracking-[-0.025em]
						text-navy
						sm:text-[23px]
					"
				>
					{value.title}
				</h3>

				<p
					className="
						mt-4
						max-w-[370px]
						text-[14px]
						leading-[1.85]
						text-slate-500
						sm:text-[15px]
					"
				>
					{value.description}
				</p>
			</div>

			{/* Bottom keyword */}

			<div className="mt-8 flex items-center gap-3">
				<span className="h-px w-5 bg-brand/45" />

				<span
					className="
						font-mono
						text-[9px]
						font-semibold
						uppercase
						tracking-[0.18em]
						text-brand-700/70
					"
				>
					{value.keyword}
				</span>
			</div>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Values Illustration                                                        */
/* -------------------------------------------------------------------------- */

function ValuesVisual() {
	return (
		<div
			aria-hidden="true"
			className="
				relative
				flex h-[155px] w-[155px]
				shrink-0
				items-center justify-center
				sm:h-[190px] sm:w-[190px]
				lg:h-[220px] lg:w-[220px]
			"
		>
			{/* Ambient glow */}

			<div className="absolute inset-3 rounded-full bg-brand/[0.08] blur-[32px]" />

			{/* Outer rotating frame */}

			<div
				className="
					absolute inset-0
					rounded-[34px]
					border border-dashed border-brand/25
					rotate-12
				"
			/>

			{/* Middle frame */}

			<div
				className="
					absolute inset-[20px]
					rounded-[27px]
					border border-brand/20
					-rotate-12
				"
			/>

			{/* Central shape */}

			<div
				className="
					relative flex
					h-[100px] w-[100px]
					items-center justify-center
					rounded-[27px]
					border border-brand/25
					bg-gradient-to-br
					from-white
					via-[#F0FBFA]
					to-[#D7F5F2]
					shadow-[0_20px_45px_-20px_rgba(24,188,183,0.25)]
					sm:h-[120px] sm:w-[120px]
					sm:rounded-[32px]
					lg:h-[135px] lg:w-[135px]
				"
			>
				<MoveUpRight
					className="
						h-11 w-11
						text-brand
						sm:h-14 sm:w-14
					"
					strokeWidth={1.1}
				/>

				{/* Corner node */}

				<div className="absolute -right-3 -top-3 h-6 w-6 rounded-lg border-[5px] border-white bg-brand shadow-md shadow-brand/20" />

				<div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full border-[4px] border-white bg-brand/60" />
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Careers Values                                                             */
/* -------------------------------------------------------------------------- */

export function CareersValues() {
	return (
		<section
			id="career-values"
			aria-labelledby="career-values-heading"
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
				<div className="absolute inset-0 bg-blueprint-grid mask-fade-b opacity-[0.10]" />

				<div className="absolute -right-48 top-10 h-[380px] w-[380px] rounded-full bg-brand/[0.035] blur-[100px]" />
			</div>

			{/* Main container */}

			<div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* -------------------------------------------------- */}
				{/* Section introduction                               */}
				{/* -------------------------------------------------- */}

				<div
					className="
						grid items-center
						gap-10
						pb-14
						lg:grid-cols-12
						lg:gap-16
						lg:pb-20
					"
				>
					{/* Left content */}

					<div className="lg:col-span-8">
						{/* Eyebrow */}

						<div className="mb-6 flex items-center gap-3">
							<span
								aria-hidden="true"
								className="h-2 w-2 rotate-45 bg-brand"
							/>

							<span
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.22em]
									text-brand-700
								"
							>
								How We Work
							</span>

							<span className="h-px w-9 bg-brand/40" />
						</div>

						{/* Heading */}

						<h2
							id="career-values-heading"
							className="
								max-w-[900px]
								font-display
								text-[clamp(2.4rem,4vw,4.5rem)]
								font-bold
								leading-[1.12]
								tracking-[-0.045em]
								text-navy
							"
						>
							Great work starts with
							<br />

							<span className="text-brand">
								how we work together.
							</span>
						</h2>

						{/* Description */}

						<p
							className="
								mt-6
								max-w-[670px]
								text-[15px]
								leading-[1.9]
								text-slate-500
								sm:text-[17px]
							"
						>
							At Codelaro, we value thoughtful
							engineering, ownership, open
							communication, and continuous
							improvement. These principles guide
							how we approach software development,
							solve problems, and collaborate on
							digital products.
						</p>
					</div>

					{/* Right visual */}

					<div className="flex justify-center lg:col-span-4 lg:justify-end">
						<ValuesVisual />
					</div>
				</div>

				{/* -------------------------------------------------- */}
				{/* Values editorial grid                              */}
				{/* -------------------------------------------------- */}

				<ul
					className="
						grid
						gap-x-10
						sm:grid-cols-2
						lg:grid-cols-3
						lg:gap-x-14
					"
				>
					{VALUES.map((value) => (
						<ValueItem
							key={value.number}
							value={value}
						/>
					))}
				</ul>

				{/* -------------------------------------------------- */}
				{/* Bottom statement                                   */}
				{/* -------------------------------------------------- */}

				<div
					className="
						mt-7
						flex flex-col
						justify-between
						gap-6
						border-t border-navy/10
						pt-9
						sm:flex-row
						sm:items-center
					"
				>
					<div>
						<p
							className="
								font-display
								text-[18px]
								font-semibold
								tracking-tight
								text-navy
								sm:text-[21px]
							"
						>
							Different skills.
							<span className="text-brand">
								{' '}Shared principles.
							</span>
						</p>

						<p
							className="
								mt-2
								max-w-[580px]
								text-[13px]
								leading-relaxed
								text-slate-500
							"
						>
							We appreciate people who bring new
							perspectives while remaining committed
							to thoughtful collaboration and
							high-quality work.
						</p>
					</div>

					<div
						className="
							flex shrink-0
							items-center gap-3
						"
					>
						<span
							className="
								font-mono
								text-[10px]
								font-semibold
								uppercase
								tracking-[0.17em]
								text-brand-700
							"
						>
							Code. Launch. Grow.
						</span>

						<ArrowUpRight
							aria-hidden="true"
							className="h-4 w-4 text-brand"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}