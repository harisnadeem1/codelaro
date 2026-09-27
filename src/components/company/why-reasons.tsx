import { Link } from 'react-router';

import {
	ArrowRight,
	ArrowUpRight,
	BriefcaseBusiness,
	Code2,
	MessagesSquare,
	ShieldCheck,
	Workflow,
	TrendingUp,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Reasons                                                                    */
/* -------------------------------------------------------------------------- */

const REASONS = [
	{
		number: '01',
		icon: BriefcaseBusiness,
		title: 'Business-First Thinking',
		description:
			'We look beyond technical requirements to understand your business, customers, and long-term objectives. Every solution begins with a clear understanding of the problem, helping us make informed technology decisions that support your goals.',
	},
	{
		number: '02',
		icon: Code2,
		title: 'Engineering Built to Scale',
		description:
			'We approach custom software development with an emphasis on clean architecture, maintainable code, performance, and security. Our goal is to build reliable digital products that can adapt as your business evolves.',
	},
	{
		number: '03',
		icon: MessagesSquare,
		title: 'Transparent Collaboration',
		description:
			'Successful partnerships depend on clear communication and shared expectations. We prioritize honest conversations, consistent project updates, and collaborative decision-making so you remain involved throughout development.',
	},
	{
		number: '04',
		icon: ShieldCheck,
		title: 'Ownership & Accountability',
		description:
			'We approach every project with responsibility and attention to detail. From understanding requirements to addressing technical challenges, we focus on practical solutions, thoughtful decisions, and delivering work that meets agreed expectations.',
	},
	{
		number: '05',
		icon: Workflow,
		title: 'End-to-End Product Development',
		description:
			'From initial planning and interface design to software engineering, integration, testing, and deployment, we bring the essential stages of digital product development together through a structured and collaborative approach.',
	},
	{
		number: '06',
		icon: TrendingUp,
		title: 'Focused on Long-Term Value',
		description:
			'Launching a product is an important milestone, not the finish line. We consider maintainability, scalability, and future improvements throughout development, helping businesses create technology that remains valuable as their needs change.',
	},
];

/* -------------------------------------------------------------------------- */
/* Reason Item                                                                */
/* -------------------------------------------------------------------------- */

function ReasonItem({
	reason,
}: {
	reason: (typeof REASONS)[number];
}) {
	const Icon = reason.icon;

	return (
		<li
			className="
				group relative
				min-w-0
				border-t border-navy/10
				py-8
				sm:py-10
				lg:py-11
			"
		>
			{/* Hover accent */}

			<span
				aria-hidden="true"
				className="
					pointer-events-none
					absolute left-0 top-0
					h-[2px] w-0
					bg-brand
					transition-all duration-500
					group-hover:w-24
				"
			/>

			<div className="flex items-start gap-5 sm:gap-6">

				{/* Icon */}

				<div
					className="
						flex h-12 w-12
						shrink-0
						items-center justify-center
						rounded-xl
						border border-brand/15
						bg-brand/[0.06]
						text-brand
						transition-all duration-300
						group-hover:border-brand/30
						group-hover:bg-brand/10
						sm:h-14 sm:w-14
					"
				>
					<Icon
						className="h-5 w-5 sm:h-6 sm:w-6"
						strokeWidth={1.6}
						aria-hidden="true"
					/>
				</div>

				{/* Content */}

				<div className="min-w-0 flex-1">

					{/* Number */}

					<div className="mb-3 flex items-center gap-2.5">
						<span
							className="
								font-mono
								text-[10px]
								font-semibold
								tracking-[0.15em]
								text-brand-700
							"
						>
							{reason.number}
						</span>

						<span className="h-px w-6 bg-brand/25" />
					</div>

					{/* Heading */}

					<h3
						className="
							max-w-[440px]
							font-display
							text-[20px]
							font-semibold
							leading-[1.3]
							tracking-[-0.025em]
							text-navy
							transition-colors duration-300
							group-hover:text-brand-700
							sm:text-[23px]
						"
					>
						{reason.title}
					</h3>

					{/* Description */}

					<p
						className="
							mt-3
							max-w-[510px]
							text-[13px]
							leading-[1.9]
							text-slate-500
							sm:text-[15px]
						"
					>
						{reason.description}
					</p>
				</div>
			</div>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Why Reasons                                                                */
/* -------------------------------------------------------------------------- */

export function WhyReasons() {
	return (
		<section
			id="why-reasons"
			aria-labelledby="why-reasons-heading"
			className="
				relative isolate
				overflow-hidden
				bg-white
				py-20
				sm:py-24
				lg:py-28
			"
		>
			{/* Background */}

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
			>
				<div
					className="
						absolute -right-48 top-0
						h-[480px] w-[480px]
						rounded-full
						bg-brand/[0.035]
						blur-[110px]
					"
				/>

				<div
					className="
						absolute -bottom-48 -left-40
						h-[420px] w-[420px]
						rounded-full
						bg-brand/[0.025]
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
				{/* -------------------------------------------------- */}
				{/* Section heading                                    */}
				{/* -------------------------------------------------- */}

				<div
					className="
						grid items-end
						gap-7
						pb-12
						lg:grid-cols-12
						lg:gap-12
						lg:pb-16
					"
				>
					{/* Left */}

					<div className="lg:col-span-7">

						{/* Eyebrow */}

						<div className="mb-6 flex items-center gap-3">
							<span className="h-2 w-2 rotate-45 bg-brand" />

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
								The Codelaro Difference
							</span>

							<span className="h-px w-9 bg-brand/35" />
						</div>

						{/* Heading */}

						<h2
							id="why-reasons-heading"
							className="
								max-w-[850px]
								font-display
								text-[clamp(2.2rem,3.7vw,4rem)]
								font-semibold
								leading-[1.12]
								tracking-[-0.04em]
								text-navy
							"
						>
							What you can expect
							<br />

							<span className="text-slate-400">
								from working with us.
							</span>
						</h2>
					</div>

					{/* Right */}

					<div className="lg:col-span-5">
						<p
							className="
								max-w-[490px]
								text-[14px]
								leading-[1.9]
								text-slate-500
								sm:text-[16px]
								lg:ml-auto
							"
						>
							The right software development partner
							brings more than technical skills.
							Our approach combines business
							understanding, modern engineering,
							transparent communication, and a
							commitment to building digital
							solutions that support your goals.
						</p>

						<div className="mt-5 lg:text-right">
							<Link
								to="/company"
								className="
									group
									inline-flex items-center
									gap-2
									font-display
									text-[13px]
									font-semibold
									text-navy
									transition-colors
									hover:text-brand-700
								"
							>
								Learn About Codelaro

								<ArrowUpRight
									aria-hidden="true"
									className="
										h-4 w-4
										text-brand
										transition-transform duration-300
										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5
									"
								/>
							</Link>
						</div>
					</div>
				</div>

				{/* -------------------------------------------------- */}
				{/* Reasons grid                                       */}
				{/* -------------------------------------------------- */}

				<ol
					className="
						grid grid-cols-1
						gap-x-12
						md:grid-cols-2
						lg:gap-x-16
						xl:gap-x-24
					"
				>
					{REASONS.map((reason) => (
						<ReasonItem
							key={reason.number}
							reason={reason}
						/>
					))}
				</ol>

				{/* -------------------------------------------------- */}
				{/* Closing statement                                  */}
				{/* -------------------------------------------------- */}

				<div
					className="
						mt-8
						flex flex-col
						justify-between
						gap-5
						border-t border-navy/10
						pt-8
						sm:flex-row
						sm:items-center
						lg:mt-10
					"
				>
					<div className="flex items-start gap-3">
						<span
							aria-hidden="true"
							className="
								mt-[7px]
								h-2 w-2
								shrink-0
								rotate-45
								bg-brand
							"
						/>

						<p
							className="
								max-w-[650px]
								font-display
								text-[14px]
								font-medium
								leading-relaxed
								text-navy
								sm:text-[16px]
							"
						>
							Focused on your goals.
							Committed to the work.
							Built for the long term.
						</p>
					</div>

					<div className="flex shrink-0 items-center gap-3">
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

						<ArrowRight
							aria-hidden="true"
							className="h-4 w-4 text-brand"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}