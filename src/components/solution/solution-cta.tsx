import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

import type { Solution } from '@/data/solutions';

/* -------------------------------------------------------------------------- */
/* Brand Journey                                                              */
/* -------------------------------------------------------------------------- */

const JOURNEY = [
	{
		title: 'Code',
		description: 'Shape the idea',
	},
	{
		title: 'Launch',
		description: 'Bring it to life',
	},
	{
		title: 'Grow',
		description: 'Keep moving forward',
	},
];

/* -------------------------------------------------------------------------- */
/* Solution CTA                                                               */
/* -------------------------------------------------------------------------- */

export function SolutionCta({
	solution,
}: {
	solution: Solution;
}) {
	return (
		<section
			id="contact"
			aria-labelledby="solution-cta-heading"
			className="
				relative scroll-mt-24
				bg-[#F8FAFC]
				px-4 py-10
				sm:px-6 sm:py-14
				lg:px-8 lg:py-20
				lg:pt-0
			"
		>
			{/* Main rounded container */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					overflow-hidden
					rounded-[26px]
					bg-navy
					text-white
					sm:rounded-[34px]
					lg:rounded-[40px]
				"
			>
				{/* Subtle background accent */}

				<div
					aria-hidden="true"
					className="
						pointer-events-none
						absolute -right-40 -top-40
						h-[450px] w-[450px]
						rounded-full
						bg-brand/[0.035]
						blur-[110px]
					"
				/>

				{/* Main layout */}

				<div
					className="
						relative mx-auto
						grid w-full
						gap-12
						px-7 py-14
						sm:px-12 sm:py-16
						lg:grid-cols-12
						lg:items-center
						lg:gap-16
						lg:px-16 lg:py-20
						xl:px-20
					"
				>
					{/* ------------------------------------------------------ */}
					{/* Left: Main CTA                                         */}
					{/* ------------------------------------------------------ */}

					<div className="lg:col-span-8">

						{/* Eyebrow */}

						<div className="flex items-center gap-3">
							<span
								aria-hidden="true"
								className="h-px w-8 bg-brand"
							/>

							<p
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.2em]
									text-brand
								"
							>
								Let's build
							</p>
						</div>

						{/* Heading */}

						<h2
							id="solution-cta-heading"
							className="
								mt-6
								max-w-3xl
								font-display
								text-[clamp(2.3rem,4vw,4.8rem)]
								font-semibold
								leading-[1.1]
								tracking-[-0.05em]
								text-white
							"
						>
							Have a project in mind?

							<span className="mt-1 block text-brand">
								Let's build it together.
							</span>
						</h2>

						{/* Solution-specific description */}

						<p
							className="
								mt-6
								max-w-xl
								text-[15px]
								leading-[1.85]
								text-slate-300
								sm:text-[16px]
							"
						>
							Considering {solution.title.toLowerCase()}?
							Share your goals with us, and let's explore
							how Codelaro can help bring your vision
							to life.
						</p>

						{/* Primary CTA */}

						<div className="mt-9">
							<Link
								to="/contact"
								aria-label={`Contact Codelaro about ${solution.title}`}
								className="
									group
									inline-flex
									min-h-[52px]
									w-full
									items-center
									justify-center
									gap-3
									rounded-xl
									bg-white
									px-6
									font-display
									text-[15px]
									font-semibold
									text-navy
									transition-[background-color,transform,box-shadow]
									duration-300
									hover:-translate-y-0.5
									hover:bg-slate-100
									hover:shadow-[0_14px_30px_-15px_rgba(0,0,0,0.5)]
									active:translate-y-0
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
									motion-reduce:transform-none
									motion-reduce:transition-none
									sm:w-auto
								"
							>
								Let's Make It Happen

								<ArrowUpRight
									aria-hidden="true"
									className="
										h-[18px] w-[18px]
										transition-transform duration-300
										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5
										motion-reduce:transition-none
									"
									strokeWidth={1.8}
								/>
							</Link>
						</div>

					</div>

					{/* ------------------------------------------------------ */}
					{/* Right: Brand Journey                                   */}
					{/* ------------------------------------------------------ */}

					<div
						className="
							pt-10
							lg:col-span-4
							lg:py-3
							lg:pl-8
							xl:pl-12
						"
					>
						<div className="relative">

							{/* Vertical connecting line */}

							<span
								aria-hidden="true"
								className="
									absolute bottom-6
									left-[7px] top-6
									hidden w-px
									bg-gradient-to-b
									from-brand/60
									via-white/20
									to-white/10
									lg:block
								"
							/>

							{/* Journey items */}

							<div className="grid grid-cols-3 gap-5 lg:grid-cols-1 lg:gap-12">

								{JOURNEY.map((item, index) => (
									<div
										key={item.title}
										className="
											relative
											flex flex-col gap-4
											lg:flex-row
											lg:items-start
											lg:gap-7
										"
									>
										{/* Journey marker */}

										<span
											aria-hidden="true"
											className={`
												relative z-10
												mt-2
												h-[15px] w-[15px]
												shrink-0
												rounded-full
												border-[3px]
												border-navy
												ring-1
												${
													index === 0
														? 'bg-brand ring-brand/50'
														: 'bg-slate-500 ring-white/20'
												}
											`}
										/>

										{/* Journey text */}

										<div className="min-w-0">

											<p
												className="
													font-display
													text-[clamp(1.6rem,2.6vw,2.8rem)]
													font-semibold
													leading-[1.05]
													tracking-[-0.05em]
													text-white
												"
											>
												{item.title}
												<span className="text-brand">
													.
												</span>
											</p>

											<p
												className="
													mt-3
													text-[12px]
													leading-[1.7]
													text-slate-400
													sm:text-[13px]
													xl:text-[14px]
												"
											>
												{item.description}
											</p>

										</div>
									</div>
								))}

							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}