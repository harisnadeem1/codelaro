import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { ABOUT } from '@/data/company';

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const STAGES = [
	{
		number: '01',
		label: 'Engineering',
		heading: 'Build with intention.',
	},
	{
		number: '02',
		label: 'Delivery',
		heading: 'Bring ideas to life.',
	},
	{
		number: '03',
		label: 'Evolution',
		heading: 'Create lasting value.',
	},
];

/* -------------------------------------------------------------------------- */
/* Philosophy Row                                                             */
/* -------------------------------------------------------------------------- */

function PhilosophyRow({
	item,
	index,
}: {
	item: (typeof ABOUT.philosophy)[number];
	index: number;
}) {
	const stage = STAGES[index];

	if (!stage) return null;

	return (
		<article
			className="
				group relative
				border-t border-white/[0.12]
				py-8
				sm:py-10
				lg:py-12
			"
		>
			{/* Hover background */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -inset-x-4 inset-y-0
					bg-white/0
					transition-colors duration-500
					group-hover:bg-white/[0.025]
					sm:-inset-x-6
					lg:-inset-x-8
				"
			/>

			{/* Teal hover indicator */}

			<div
				aria-hidden="true"
				className="
					absolute -left-4 top-0
					h-px w-0
					bg-brand
					transition-all duration-500
					group-hover:w-20
					sm:-left-6
					lg:-left-8
				"
			/>

			<div
				className="
					relative
					grid items-start
					gap-5
					md:grid-cols-12
					md:gap-6
					lg:items-center
					lg:gap-8
				"
			>
				{/* Number */}

				<div className="md:col-span-1">
					<span
						className="
							font-mono
							text-[13px]
							font-medium
							text-brand
						"
					>
						{stage.number}
					</span>
				</div>

				{/* Stage title */}

				<div className="md:col-span-4">
					<div>
						<p
							className="
								mb-3
								font-mono
								text-[10px]
								font-semibold
								uppercase
								tracking-[0.2em]
								text-white/40
							"
						>
							{stage.label}
						</p>

						<h3
							className="
								font-display
								text-[clamp(2.7rem,4.2vw,4.8rem)]
								font-semibold
								leading-none
								tracking-[-0.055em]
								text-white
								transition-colors duration-300
								group-hover:text-brand
							"
						>
							{item.word}
							<span className="text-brand">.</span>
						</h3>
					</div>
				</div>

				{/* Stage description */}

				<div className="md:col-span-6">
					<h4
						className="
							font-display
							text-[17px]
							font-semibold
							leading-snug
							tracking-[-0.02em]
							text-white
							sm:text-[19px]
						"
					>
						{stage.heading}
					</h4>

					<p
						className="
							mt-3
							max-w-[540px]
							text-[14px]
							leading-[1.85]
							text-slate-400
							sm:text-[15px]
						"
					>
						{item.description}
					</p>
				</div>

				{/* Direction indicator */}

				<div
					aria-hidden="true"
					className="
						hidden
						justify-end
						md:col-span-1
						md:flex
					"
				>
					<div
						className="
							flex h-11 w-11
							items-center justify-center
							rounded-full
							border border-white/15
							text-white/40
							transition-all duration-300
							group-hover:-translate-y-0.5
							group-hover:translate-x-0.5
							group-hover:border-brand/40
							group-hover:bg-brand/10
							group-hover:text-brand
						"
					>
						<ArrowUpRight
							className="h-[19px] w-[19px]"
							strokeWidth={1.5}
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

/* -------------------------------------------------------------------------- */
/* About Philosophy                                                           */
/* -------------------------------------------------------------------------- */

export function AboutPhilosophy() {
	return (
		<section
			id="philosophy"
			aria-labelledby="philosophy-heading"
			className="
				relative isolate
				overflow-hidden
				bg-navy
				py-20
				sm:py-20
				lg:py-20
			"
		>
			{/* Background decorations */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
					overflow-hidden
				"
			>
				{/* Subtle grid */}

				<div
					className="
						absolute inset-0
						opacity-[0.035]
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
						backgroundSize: '64px 64px',
					}}
				/>

				{/* Ambient teal light */}

				<div
					className="
						absolute -right-48 -top-48
						h-[600px] w-[600px]
						rounded-full
						bg-brand/[0.055]
						blur-[130px]
					"
				/>

				{/* Bottom gradient */}

				<div
					className="
						absolute -bottom-64 -left-48
						h-[500px] w-[500px]
						rounded-full
						bg-brand/[0.035]
						blur-[120px]
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
				{/* -------------------------------------------------- */}
				{/* Editorial header                                    */}
				{/* -------------------------------------------------- */}

				<div
					className="
						grid items-end
						gap-7
						pb-14
						lg:grid-cols-12
						lg:gap-12
						lg:pb-16
					"
				>
					{/* Heading */}

					<div className="lg:col-span-7">
						{/* Eyebrow */}

						<div className="mb-6 flex items-center gap-3">
							<span
								className="
									h-[7px] w-[7px]
									rounded-full
									bg-brand
									shadow-[0_0_15px_rgba(24,188,183,0.35)]
								"
							/>

							<span
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.23em]
									text-brand
								"
							>
								Our Philosophy
							</span>

							<span className="h-px w-9 bg-brand/40" />
						</div>

						{/* Main heading */}

						<h2
							id="philosophy-heading"
							className="
								max-w-[790px]
								font-display
								text-[clamp(2.5rem,4.2vw,4.5rem)]
								font-semibold
								leading-[1.1]
								tracking-[-0.05em]
								text-white
							"
						>
							The thinking behind
							<br />

							<span className="text-brand">
								everything we build.
							</span>
						</h2>
					</div>

					{/* Introduction */}

					<div className="lg:col-span-5">
						<p
							className="
								max-w-[470px]
								text-[14px]
								leading-[1.9]
								text-slate-400
								sm:text-[16px]
								lg:ml-auto
							"
						>
							At Codelaro, software development is more
							than writing code. Our philosophy connects
							thoughtful engineering, reliable product
							delivery, and continuous improvement to
							create digital solutions designed for
							long-term success.
						</p>

						<div
							className="
								mt-5
								flex items-center gap-2.5
								lg:justify-end
							"
						>
							<span
								className="
									font-mono
									text-[10px]
									font-semibold
									uppercase
									tracking-[0.17em]
									text-brand
								"
							>
								Explore our approach
							</span>

							<ArrowDownRight
								aria-hidden="true"
								className="h-4 w-4 text-brand"
							/>
						</div>
					</div>
				</div>

				{/* -------------------------------------------------- */}
				{/* Philosophy stages                                  */}
				{/* -------------------------------------------------- */}

				<div>
					{ABOUT.philosophy.slice(0, 3).map(
						(item, index) => (
							<PhilosophyRow
								key={item.word}
								item={item}
								index={index}
							/>
						),
					)}

					{/* Bottom border */}

					<div className="h-px w-full bg-white/[0.12]" />
				</div>

				{/* -------------------------------------------------- */}
				{/* Closing statement                                  */}
				{/* -------------------------------------------------- */}

				<div
					className="
						mt-12
						flex flex-col
						justify-between
						gap-6
						sm:flex-row
						sm:items-center
						lg:mt-16
					"
				>
					{/* Brand signature */}

					<div>
						<p
							className="
								font-display
								text-[clamp(1.4rem,2.2vw,2rem)]
								font-semibold
								leading-snug
								tracking-[-0.03em]
								text-white
							"
						>
							One philosophy.
							<span className="text-brand">
								{' '}Endless possibilities.
							</span>
						</p>

						<p
							className="
								mt-2
								text-[13px]
								text-slate-400
							"
						>
							A consistent approach to building
							technology that evolves with your business.
						</p>
					</div>

					{/* Signature */}

					<div
						className="
							flex shrink-0
							items-center gap-3
						"
					>
						<span
							className="
								font-mono
								text-[11px]
								font-semibold
								uppercase
								tracking-[0.18em]
								text-brand
							"
						>
							Code. Launch. Grow.
						</span>

						<span className="h-px w-8 bg-brand/50" />
					</div>
				</div>
			</div>
		</section>
	);
}