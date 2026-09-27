import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

import type { Industry } from '@/data/industries';

export function IndustryCta({
	industry,
}: {
	industry: Industry;
}) {
	const journey = [
		{
			title: 'Code',
			description: 'Build the right solution',
		},
		{
			title: 'Launch',
			description: 'Bring it to your market',
		},
		{
			title: 'Grow',
			description: 'Scale with confidence',
		},
	];

	return (
		<section
			id="contact"
			aria-labelledby="industry-cta-heading"
			className="
				relative
				scroll-mt-24
				bg-white
				px-4 py-10
				border-0
				sm:px- sm:py-14
				lg:px-8 lg:py-20
				lg:pt-0
			"
		>
			{/* ====================================================== */}
			{/* MAIN CTA CONTAINER                                     */}
			{/* ====================================================== */}

			<div
				className="
					relative
					mx-auto
					w-full
					max-w-8xl
					overflow-hidden
					rounded-[26px]
					bg-navy
					text-white
					sm:rounded-[34px]
					lg:rounded-[40px]
				"
			>
				{/* Main Content */}

				<div
					className="
						relative
						mx-auto
						grid
						w-full
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
					{/* ================================================== */}
					{/* LEFT — INDUSTRY-SPECIFIC CTA                       */}
					{/* ================================================== */}

					<div className="min-w-0 lg:col-span-8">

						{/* Eyebrow */}

						<div className="flex items-center gap-3">

							<span
								aria-hidden="true"
								className="h-px w-8 shrink-0 bg-brand"
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
								Let's work together
							</p>

						</div>


						{/* Dynamic Industry Heading */}

						<h2
							id="industry-cta-heading"
							className="
								mt-6
								max-w-[850px]
								font-display
								text-[clamp(2.15rem,3.8vw,4.6rem)]
								font-semibold
								leading-[1.12]
								tracking-[-0.05em]
								text-white
							"
						>
							Building for{' '}

							<span className="text-brand">
								{industry.title.toLowerCase()}?
							</span>


						
						</h2>


						{/* Industry-Specific Description */}

						<p
							className="
								mt-6
								max-w-[600px]
								text-[15px]
								leading-[1.85]
								text-slate-300
								sm:text-[16px]
							"
						>
							Have an idea or a challenge in{' '}
							{industry.title.toLowerCase()}?
							Tell us what you're looking to achieve,
							and let's explore how the right
							technology can move your business forward.
						</p>


						{/* Primary CTA */}

						<div className="mt-9">

							<Link
								to="/contact"
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

									focus-visible:outline
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand

									motion-reduce:transform-none
									motion-reduce:transition-none

									sm:w-auto
								"
							>
								Discuss Your Project

								<ArrowUpRight
									aria-hidden="true"
									className="
										h-[18px]
										w-[18px]
										shrink-0
										transition-transform
										duration-300

										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5

										motion-reduce:transition-none
									"
									strokeWidth={1.8}
								/>

							</Link>

						</div>

					</div>


					{/* ================================================== */}
					{/* RIGHT — CODE. LAUNCH. GROW.                        */}
					{/* ================================================== */}

					<div
						className="
							min-w-0
							border-t border-white/10
							pt-10

							lg:col-span-4
							lg:border-t-0
							lg:py-3
							lg:pl-0

							xl:pl-12
						"
					>
						<div className="relative">

							{/* Vertical Connecting Line */}

							<span
								aria-hidden="true"
								className="
									absolute
									bottom-6
									left-[7px]
									top-6
									hidden
									w-px
									bg-gradient-to-b
									from-brand/60
									via-white/20
									to-white/10
									lg:block
								"
							/>


							{/* Journey Items */}

							<div
								className="
									grid
									grid-cols-3
									gap-3

									sm:gap-5

									lg:grid-cols-1
									lg:gap-12
								"
							>
								{journey.map((item, index) => (

									<div
										key={item.title}
										className="
											relative
											flex
											min-w-0
											flex-col
											gap-3

											lg:flex-row
											lg:items-start
											lg:gap-7
										"
									>

										{/* Journey Marker */}

										<span
											aria-hidden="true"
											className={`
												relative
												z-10
												mt-2
												h-[15px]
												w-[15px]
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


										{/* Journey Details */}

										<div className="min-w-0">

											<h3
												className="
													font-display
													text-[clamp(1.35rem,2.6vw,2.8rem)]
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

											</h3>


											<p
												className="
													mt-3
													max-w-[180px]
													text-[11px]
													leading-[1.6]
													text-slate-400

													sm:text-[13px]
													sm:leading-[1.7]

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