import { Link } from 'react-router';
import {
	ArrowRight,
	ArrowUpRight,
} from 'lucide-react';

import type { Industry } from '@/data/industries';
import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';

/* -------------------------------------------------------------------------- */
/* Industry Services & Solutions                                              */
/* -------------------------------------------------------------------------- */

export function IndustryServices({
	industry,
}: {
	industry: Industry;
}) {
	/* ---------------------------------------------------------------------- */
	/* Resolve Industry-Specific Content                                      */
	/* ---------------------------------------------------------------------- */

	const services = industry.applicableServices
		.map((slug) => SERVICES.find((service) => service.slug === slug))
		.filter((service): service is NonNullable<typeof service> =>
			Boolean(service)
		);

	const solutions = industry.applicableSolutions
		.map((slug) => SOLUTIONS.find((solution) => solution.slug === slug))
		.filter((solution): solution is NonNullable<typeof solution> =>
			Boolean(solution)
		);

	const hasServices = services.length > 0;
	const hasSolutions = solutions.length > 0;

	if (!hasServices && !hasSolutions) {
		return null;
	}

	return (
		<section
			id="industry-services"
			aria-labelledby="industry-services-heading"
			className="
				relative isolate
				overflow-hidden
				bg-navy
				py-20 text-white
				sm:py-20
				lg:py-20
			"
		>
			{/* Subtle architectural background */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
					opacity-[0.035]
					[background-image:linear-gradient(to_right,white_1px,transparent_1px)]
					[background-size:120px_100%]
				"
			/>

			<div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* ====================================================== */}
				{/* SECTION INTRODUCTION                                   */}
				{/* ====================================================== */}

				<div
					className="
						grid items-end
						gap-8
						lg:grid-cols-12
						lg:gap-12
					"
				>
					{/* Left heading */}

					<div className="lg:col-span-7">

						{/* Eyebrow */}

						<div className="flex items-center gap-3">

							<span
								aria-hidden="true"
								className="h-[2px] w-8 bg-brand"
							/>

							<p
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.22em]
									text-brand
								"
							>
								How Codelaro helps
							</p>

						</div>

						{/* Heading */}

						<h2
							id="industry-services-heading"
							className="
								mt-7
								max-w-[800px]
								font-display
								text-[clamp(2.5rem,4.2vw,3.5rem)]
								font-semibold
								leading-[1.08]
								tracking-[-0.045em]
								text-white
							"
						>
							The right expertise.
							<span className="mt-1 block text-brand">
								Built for your industry.
							</span>
						</h2>

					</div>

					{/* Right description */}

					<div className="lg:col-span-5">

						<div
							className="
								max-w-[470px]
								lg:ml-auto
								lg:pb-2
							"
						>
							<p
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.18em]
									text-brand
								"
							>
								{industry.title}
							</p>

							<p
								className="
									mt-4
									text-[16px]
									leading-[1.85]
									text-slate-300
									sm:text-[17px]
								"
							>
								From specialized development services to
								complete digital solutions, we combine
								the right capabilities to address your
								industry's challenges and support
								long-term growth.
							</p>

						</div>

					</div>

				</div>


				{/* ====================================================== */}
				{/* MAIN CAPABILITY SHOWCASE                               */}
				{/* ====================================================== */}

				<div
					className={`
						mt-16
						grid
						items-start
						gap-10
						lg:mt-20
						lg:gap-12
						xl:gap-16

						${
							hasServices && hasSolutions
								? 'lg:grid-cols-2'
								: 'grid-cols-1'
						}
					`}
				>

					{/* ================================================== */}
					{/* LEFT — SERVICES                                    */}
					{/* ================================================== */}

					{hasServices && (

						<div className="min-w-0">

							{/* Column Header */}

							<div
								className="
									flex
									items-start
									justify-between
									gap-5
									border-b
									border-white/15
									pb-7
								"
							>

								<div>

									<div className="flex items-center gap-3">

										<span
											className="
												font-mono
												text-[12px]
												font-semibold
												tracking-wider
												text-brand
											"
										>
											01 /
										</span>

										<span
											className="
												font-mono
												text-[11px]
												font-semibold
												uppercase
												tracking-[0.19em]
												text-white/50
											"
										>
											Our expertise
										</span>

									</div>

									<h3
										className="
											mt-5
											font-display
											text-[clamp(1.8rem,2.5vw,2.6rem)]
											font-semibold
											leading-tight
											tracking-[-0.035em]
											text-white
										"
									>
										Services
									</h3>

									<p
										className="
											mt-3
											max-w-md
											text-[14px]
											leading-relaxed
											text-slate-400
											sm:text-[15px]
										"
									>
										Technical capabilities tailored
										to your industry's requirements.
									</p>

								</div>

								{/* Count */}

								<span
									className="
										flex
										h-10 w-10
										shrink-0
										items-center
										justify-center
										rounded-full
										border
										border-white/15
										font-mono
										text-[12px]
										font-semibold
										text-slate-300
									"
								>
									{String(services.length).padStart(2, '0')}
								</span>

							</div>


							{/* Services Grid */}

							<ul
								className="
									mt-7
									grid
									auto-rows-fr
									gap-3
									sm:grid-cols-2
									lg:grid-cols-1
									xl:grid-cols-2
								"
							>
								{services.map((service) => {

									const Icon = service.icon;

									return (

										<li
											key={service.slug}
											className="min-w-0"
										>

											<Link
												to={`/services/${service.slug}`}
												aria-label={`Explore ${service.title}`}
												className="
													group
													relative
													flex
													h-full
													min-h-[220px]
													flex-col
													overflow-hidden
													rounded-[22px]
													border
													border-white/[0.10]
													bg-white/[0.035]
													p-6

													transition-all
													duration-300

													hover:-translate-y-1
													hover:border-brand/45
													hover:bg-white/[0.075]

													focus-visible:outline
													focus-visible:outline-2
													focus-visible:outline-offset-4
													focus-visible:outline-brand

													motion-reduce:transform-none
													motion-reduce:transition-none
												"
											>

												{/* Top Row */}

												<div
													className="
														flex
														items-start
														justify-between
														gap-4
													"
												>

													{/* Service Icon */}

													<div
														className="
															flex
															h-12 w-12
															shrink-0
															items-center
															justify-center
															rounded-[14px]
															border
															border-brand/20
															bg-brand/[0.10]
															text-brand

															transition-all
															duration-300

															group-hover:border-brand
															group-hover:bg-brand
															group-hover:text-navy
														"
													>
														<Icon
															className="h-5 w-5"
															strokeWidth={1.7}
															aria-hidden="true"
														/>
													</div>


													{/* Directional Arrow */}

													<ArrowUpRight
														aria-hidden="true"
														className="
															h-[18px] w-[18px]
															shrink-0
															text-white/30

															transition-all
															duration-300

															group-hover:-translate-y-0.5
															group-hover:translate-x-0.5
															group-hover:text-brand
														"
													/>

												</div>


												{/* Service Content */}

												<div className="mt-auto pt-8">

													<h4
														className="
															font-display
															text-[18px]
															font-semibold
															leading-snug
															tracking-[-0.025em]
															text-white

															transition-colors
															duration-300

															group-hover:text-brand
														"
													>
														{service.title}
													</h4>


													<p
														className="
															mt-2
															text-[13px]
															leading-[1.7]
															text-slate-400
														"
													>
														{service.tagline}
													</p>

												</div>


												{/* Bottom Accent */}

												<span
													aria-hidden="true"
													className="
														absolute
														bottom-0
														left-6
														h-[2px]
														w-0
														bg-brand

														transition-all
														duration-300

														group-hover:w-16
													"
												/>

											</Link>

										</li>

									);

								})}
							</ul>


							{/* Services Footer */}

							<div
								className="
									mt-8
									border-t
									border-white/10
									pt-6
								"
							>

								<Link
									to="/services"
									className="
										group
										inline-flex
										items-center
										gap-3

										font-display
										text-[16px]
										font-semibold
										text-white

										transition-colors
										hover:text-brand

										focus-visible:outline
										focus-visible:outline-2
										focus-visible:outline-offset-4
										focus-visible:outline-brand
									"
								>
									Explore all services

									<ArrowUpRight
										aria-hidden="true"
										className="
											h-4 w-4
											text-brand

											transition-transform
											duration-300

											group-hover:-translate-y-0.5
											group-hover:translate-x-0.5
										"
									/>

								</Link>

							</div>

						</div>

					)}


					{/* ================================================== */}
					{/* RIGHT — SOLUTIONS                                  */}
					{/* ================================================== */}

					{hasSolutions && (

						<div
							className="
								relative
								min-w-0
								overflow-hidden
								rounded-[26px]
								border
								border-white/10
								bg-[#F8FAFC]
								p-6
								text-navy

								sm:rounded-[30px]
								sm:p-8

								lg:p-9

								xl:p-10
							"
						>

							{/* Top Decorative Accent */}

							<span
								aria-hidden="true"
								className="
									absolute
									left-9
									top-0
									h-[3px]
									w-24
									rounded-b-full
									bg-brand
								"
							/>


							{/* Solutions Header */}

							<div
								className="
									flex
									items-start
									justify-between
									gap-5
								"
							>

								<div>

									<div className="flex items-center gap-3">

										<span
											className="
												font-mono
												text-[12px]
												font-semibold
												tracking-wider
												text-brand
											"
										>
											02 /
										</span>

										<span
											className="
												font-mono
												text-[11px]
												font-semibold
												uppercase
												tracking-[0.19em]
												text-slate-400
											"
										>
											What we deliver
										</span>

									</div>


									<h3
										className="
											mt-5
											font-display
											text-[clamp(1.8rem,2.5vw,2.6rem)]
											font-semibold
											leading-tight
											tracking-[-0.035em]
											text-navy
										"
									>
										Solutions
									</h3>


									<p
										className="
											mt-3
											max-w-md
											text-[14px]
											leading-relaxed
											text-slate-500
											sm:text-[15px]
										"
									>
										Outcome-focused solutions
										designed around your business
										challenges.
									</p>

								</div>


								{/* Count */}

								<span
									className="
										flex
										h-10 w-10
										shrink-0
										items-center
										justify-center
										rounded-full
										border
										border-navy/10
										bg-white
										font-mono
										text-[12px]
										font-semibold
										text-navy
									"
								>
									{String(solutions.length).padStart(2, '0')}
								</span>

							</div>


							{/* ================================================== */}
							{/* SOLUTION NAVIGATION                                */}
							{/* ================================================== */}

							<ul
								className="
									mt-8
									border-t
									border-navy/10
								"
							>

								{solutions.map((solution, index) => {

									const Icon = solution.icon;

									const number = String(
										index + 1
									).padStart(2, '0');

									return (

										<li
											key={solution.slug}
											className="
												group
												border-b
												border-navy/10
											"
										>

											<Link
												to={`/solutions/${solution.slug}`}
												aria-label={`Explore ${solution.title}`}
												className="
													relative
													flex
													items-start
													gap-4
													py-6

													transition-all
													duration-300

													hover:pl-2

													focus-visible:rounded-lg
													focus-visible:outline
													focus-visible:outline-2
													focus-visible:outline-brand

													sm:gap-5

													motion-reduce:transition-none
												"
											>

												{/* Solution Number */}

												<span
													className="
														pt-1.5
														font-mono
														text-[11px]
														font-semibold
														tracking-wide
														text-slate-400

														transition-colors
														duration-300

														group-hover:text-brand
													"
												>
													{number}
												</span>


												{/* Solution Icon */}

												<div
													className="
														flex
														h-11 w-11
														shrink-0
														items-center
														justify-center
														rounded-xl
														border
														border-navy/[0.07]
														bg-white
														text-navy

														transition-all
														duration-300

														group-hover:border-brand/20
														group-hover:bg-brand/10
														group-hover:text-brand
													"
												>
													<Icon
														aria-hidden="true"
														className="h-5 w-5"
														strokeWidth={1.7}
													/>
												</div>


												{/* Solution Details */}

												<div
													className="
														min-w-0
														flex-1
													"
												>

													<h4
														className="
															font-display
															text-[16px]
															font-semibold
															leading-snug
															tracking-[-0.025em]
															text-navy

															transition-colors
															duration-300

															group-hover:text-brand

															sm:text-[17px]
														"
													>
														{solution.title}
													</h4>


													<p
														className="
															mt-2
															max-w-[380px]
															text-[13px]
															leading-[1.7]
															text-slate-500

															sm:text-[14px]
														"
													>
														{solution.outcome}
													</p>

												</div>


												{/* Direction Arrow */}

												<span
													className="
														flex
														h-8 w-8
														shrink-0
														items-center
														justify-center
														rounded-full
														border
														border-navy/10
														bg-white
														text-navy

														transition-all
														duration-300

														group-hover:border-brand
														group-hover:bg-brand
														group-hover:text-white
													"
												>

													<ArrowUpRight
														aria-hidden="true"
														className="
															h-4 w-4

															transition-transform
															duration-300

															group-hover:-translate-y-0.5
															group-hover:translate-x-0.5
														"
													/>

												</span>

											</Link>

										</li>

									);

								})}

							</ul>


							{/* ================================================== */}
							{/* SOLUTIONS FOOTER                                   */}
							{/* ================================================== */}

							<div className="mt-8">

								<Link
									to="/solutions"
									className="
										group
										inline-flex
										items-center
										gap-3

										font-display
										text-[16px]
										font-semibold
										text-navy

										transition-colors
										duration-300

										hover:text-brand

										focus-visible:outline
										focus-visible:outline-2
										focus-visible:outline-offset-4
										focus-visible:outline-brand
									"
								>

									Explore all solutions

									<span
										className="
											flex
											h-8 w-8
											items-center
											justify-center
											rounded-full
											bg-navy
											text-white

											transition-all
											duration-300

											group-hover:bg-brand
										"
									>
										<ArrowRight
											aria-hidden="true"
											className="
												h-4 w-4

												transition-transform
												duration-300

												group-hover:translate-x-0.5
											"
										/>
									</span>

								</Link>

							</div>

						</div>

					)}

				</div>

			</div>

		</section>
	);
}