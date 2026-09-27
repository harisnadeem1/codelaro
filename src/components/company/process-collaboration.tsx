import { Link } from 'react-router';

import {
	ArrowRight,
	ArrowUpRight,
	Check,
	ClipboardCheck,
	MessagesSquare,
	RefreshCw,
	ScanSearch,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Collaboration Content                                                      */
/* -------------------------------------------------------------------------- */

const COLLABORATION = [
	{
		number: '01',
		icon: ScanSearch,
		title: 'Clarity from the beginning',
		description:
			'We align on your business objectives, project requirements, priorities, and expectations before development begins. This creates a shared understanding of what we are building and why.',
	},
	{
		number: '02',
		icon: MessagesSquare,
		title: 'Communication that stays open',
		description:
			'Regular conversations and meaningful progress updates help you understand where the project stands, what decisions need attention, and what comes next.',
	},
	{
		number: '03',
		icon: RefreshCw,
		title: 'Feedback that shapes the product',
		description:
			'We create opportunities to review progress, discuss new insights, and refine the product together. Your feedback informs development decisions throughout the engagement.',
	},
	{
		number: '04',
		icon: ClipboardCheck,
		title: 'A structured approach to delivery',
		description:
			'We work toward agreed milestones, review completed functionality, and coordinate the necessary steps for launch. Documentation and handover are planned around your project needs.',
	},
];

/* -------------------------------------------------------------------------- */
/* Collaboration Item                                                         */
/* -------------------------------------------------------------------------- */

function CollaborationItem({
	item,
}: {
	item: (typeof COLLABORATION)[number];
}) {
	const Icon = item.icon;

	return (
		<li
			className="
				group relative
				border-t border-navy/10
				py-8
				sm:py-10
			"
		>
			{/* Hover accent */}

			<span
				aria-hidden="true"
				className="
					absolute left-0 top-0
					h-[2px] w-0
					bg-brand
					transition-all duration-500
					group-hover:w-20
				"
			/>

			<div className="flex items-start gap-5">
				{/* Icon */}

				<div
					className="
						flex h-12 w-12
						shrink-0
						items-center justify-center
						rounded-2xl
						border border-brand/15
						bg-brand/[0.055]
						text-brand
						transition-all duration-300
						group-hover:border-brand/30
						group-hover:bg-brand/10
					"
				>
					<Icon
						className="h-5 w-5"
						strokeWidth={1.6}
						aria-hidden="true"
					/>
				</div>

				{/* Content */}

				<div className="min-w-0">
					<span
						className="
							font-mono
							text-[10px]
							font-semibold
							tracking-[0.17em]
							text-brand-700
						"
					>
						{item.number}
					</span>

					<h3
						className="
							mt-2
							max-w-[390px]
							font-display
							text-xl
							font-semibold
							leading-[1.3]
							tracking-[-0.025em]
							text-navy
							sm:text-[23px]
						"
					>
						{item.title}
					</h3>

					<p
						className="
							mt-3
							max-w-[460px]
							text-[14px]
							leading-[1.85]
							text-slate-500
							sm:text-[15px]
						"
					>
						{item.description}
					</p>
				</div>
			</div>
		</li>
	);
}

/* -------------------------------------------------------------------------- */
/* Communication Visual                                                       */
/* -------------------------------------------------------------------------- */

function CollaborationVisual() {
	return (
		<div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
			{/* Background atmosphere */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -inset-8
					rounded-full
					bg-brand/[0.055]
					blur-[65px]
				"
			/>

			{/* Main visual */}

			<div
				className="
					relative isolate
					overflow-hidden
					rounded-[26px]
					bg-navy
					p-6
					shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)]
					sm:rounded-[32px]
					sm:p-8
				"
			>
				{/* Technical background */}

				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0"
				>
					<div className="absolute inset-0 bg-blueprint-grid-dark opacity-[0.14]" />

					<div
						className="
							absolute -right-28 -top-24
							h-72 w-72
							rounded-full
							bg-brand/[0.13]
							blur-[85px]
						"
					/>

					<div
						className="
							absolute -bottom-32 -left-32
							h-72 w-72
							rounded-full
							bg-brand/[0.06]
							blur-[80px]
						"
					/>
				</div>

				<div className="relative">
					{/* Visual header */}

					<div
						className="
							flex items-center
							justify-between
							gap-3
							border-b border-white/10
							pb-6
						"
					>
						<div>
							<p
								className="
									font-mono
									text-[10px]
									font-semibold
									uppercase
									tracking-[0.2em]
									text-brand
								"
							>
								Working Together
							</p>

							<h3
								className="
									mt-3
									font-display
									text-[22px]
									font-semibold
									leading-tight
									tracking-tight
									text-white
									sm:text-[26px]
								"
							>
								Clarity at every step.
							</h3>
						</div>

						<div
							aria-hidden="true"
							className="
								flex h-11 w-11
								shrink-0
								items-center justify-center
								rounded-xl
								border border-brand/25
								bg-brand/10
								text-brand
							"
						>
							<MessagesSquare
								className="h-5 w-5"
								strokeWidth={1.5}
							/>
						</div>
					</div>

					{/* Communication flow */}

					<div className="relative mt-8">
						{/* Connection line */}

						<div
							aria-hidden="true"
							className="
								absolute bottom-7
								left-[17px] top-7
								w-px
								bg-gradient-to-b
								from-brand/70
								via-brand/35
								to-brand/10
							"
						/>

						{[
							{
								number: '01',
								title: 'Align',
								description:
									'Shared goals, priorities and expectations.',
							},
							{
								number: '02',
								title: 'Collaborate',
								description:
									'Progress updates and informed decisions.',
							},
							{
								number: '03',
								title: 'Review',
								description:
									'Feedback, validation and improvements.',
							},
							{
								number: '04',
								title: 'Deliver',
								description:
									'Agreed milestones and coordinated handover.',
							},
						].map((step, index) => (
							<div
								key={step.number}
								className={`
									relative flex items-start gap-4
									${index !== 3 ? 'pb-8' : ''}
								`}
							>
								{/* Node */}

								<span
									className="
										relative z-10
										flex h-[35px] w-[35px]
										shrink-0
										items-center justify-center
										rounded-full
										border border-brand/35
										bg-[#183146]
										font-mono
										text-[10px]
										font-semibold
										text-brand
									"
								>
									{step.number}
								</span>

								{/* Content */}

								<div className="min-w-0 pt-0.5">
									<p
										className="
											font-display
											text-[15px]
											font-semibold
											text-white
											sm:text-[17px]
										"
									>
										{step.title}
									</p>

									<p
										className="
											mt-1.5
											text-[12px]
											leading-relaxed
											text-slate-400
											sm:text-[13px]
										"
									>
										{step.description}
									</p>
								</div>

								{index === 3 && (
									<Check
										aria-hidden="true"
										className="
											ml-auto mt-1
											h-4 w-4
											shrink-0
											text-brand
										"
									/>
								)}
							</div>
						))}
					</div>

					{/* Bottom signature */}

					<div
						className="
							mt-9
							flex items-center
							justify-between
							gap-3
							border-t border-white/10
							pt-6
						"
					>
						<p
							className="
								font-mono
								text-[10px]
								font-medium
								uppercase
								tracking-[0.15em]
								text-white/50
							"
						>
							Your vision. Our collaboration.
						</p>

						<ArrowUpRight
							aria-hidden="true"
							className="h-4 w-4 shrink-0 text-brand"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Process Collaboration Section                                              */
/* -------------------------------------------------------------------------- */

export function ProcessCollaboration() {
	return (
		<section
			id="process-collaboration"
			aria-labelledby="process-collaboration-heading"
			className="
				relative isolate
				overflow-hidden
				bg-white
				py-20
				sm:py-20
				lg:py-20
			"
		>
			{/* Subtle background */}

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
			>
				<div
					className="
						absolute -right-48 top-20
						h-[420px] w-[420px]
						rounded-full
						bg-brand/[0.025]
						blur-[100px]
					"
				/>
			</div>

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
						pb-14
						lg:grid-cols-12
						lg:gap-14
						lg:pb-20
					"
				>
					<div className="lg:col-span-7">
						<div className="mb-6 flex items-center gap-3">
							<span
								aria-hidden="true"
								className="h-2 w-2 rotate-45 bg-brand"
							/>

							<p
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.22em]
									text-brand-700
								"
							>
								Collaboration Matters
							</p>

							<span
								aria-hidden="true"
								className="h-px w-10 bg-brand/40"
							/>
						</div>

						<h2
							id="process-collaboration-heading"
							className="
								max-w-[800px]
								font-display
								text-[clamp(2.3rem,4vw,4.3rem)]
								font-bold
								leading-[1.12]
								tracking-[-0.045em]
								text-navy
							"
						>
							You're part of the process.
							<br />

							<span className="text-brand">
								Not outside it.
							</span>
						</h2>
					</div>

					<div className="lg:col-span-5">
						<p
							className="
								max-w-[490px]
								text-[15px]
								leading-[1.9]
								text-slate-500
								sm:text-[16px]
								lg:ml-auto
							"
						>
							Successful software development depends on
							more than engineering. We believe clear
							communication, shared decisions, and
							regular feedback help turn project
							requirements into digital products that
							serve real business needs.
						</p>
					</div>
				</div>

				{/* -------------------------------------------------- */}
				{/* Content                                            */}
				{/* -------------------------------------------------- */}

				<div
					className="
						grid items-center
						gap-12
						lg:grid-cols-12
						lg:gap-14
						xl:gap-20
					"
				>
					{/* Collaboration principles */}

					<div className="min-w-0 lg:col-span-7">
						<ul className="grid gap-x-9 sm:grid-cols-2">
							{COLLABORATION.map((item) => (
								<CollaborationItem
									key={item.number}
									item={item}
								/>
							))}
						</ul>

						{/* Bottom link */}

						<div className="mt-6 border-t border-navy/10 pt-7">
							<Link
								to="/contact"
								className="
									group
									inline-flex items-center
									gap-2
									font-display
									text-[14px]
									font-semibold
									text-navy
									transition-colors
									hover:text-brand-700
								"
							>
								Discuss Your Project

								<ArrowRight
									aria-hidden="true"
									className="
										h-4 w-4
										text-brand
										transition-transform duration-300
										group-hover:translate-x-1
									"
								/>
							</Link>
						</div>
					</div>

					{/* Communication visual */}

					<div className="min-w-0 lg:col-span-5">
						<CollaborationVisual />
					</div>
				</div>
			</div>
		</section>
	);
}