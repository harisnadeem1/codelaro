import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

import { SOLUTIONS } from '@/data/solutions';

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const visibleSolutions = SOLUTIONS;

const CARD_LAYOUTS = [
    'lg:col-span-7',
    'lg:col-span-5',
    'lg:col-span-5',
    'lg:col-span-7',
    'lg:col-span-7',
    'lg:col-span-5',
    'lg:col-span-5',
    'lg:col-span-7',
];




/* -------------------------------------------------------------------------- */
/* Solutions Overview                                                         */
/* -------------------------------------------------------------------------- */

export function SolutionsOverviewGrid() {
	return (
		<section
			id="solutions-grid"
			aria-labelledby="solutions-grid-heading"
			className="
				relative isolate
				scroll-mt-24
				overflow-hidden
				border-t border-navy/[0.06]
				bg-white
			"
		>
			{/* Background atmosphere */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -right-44 top-0
					h-[500px] w-[500px]
					rounded-full
					bg-brand/[0.035]
					blur-[110px]
				"
			/>

			{/* Container */}

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
				{/* ================================================== */}
				{/* SECTION HEADER                                     */}
				{/* ================================================== */}

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
							<span className="h-px w-8 bg-brand" />

							<p
								className="
									font-mono text-[11px]
									font-semibold uppercase
									tracking-[0.2em]
									text-brand
								"
							>
								Explore our solutions
							</p>
						</div>

						{/* Heading */}

						<h2
							id="solutions-grid-heading"
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
							Your next move
							<br />

							<span className="text-slate-400">
								
								Starts Here.
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
							Whether you're launching something new,
							transforming existing systems, or preparing
							for growth, explore solutions designed
							around your business objectives.
						</p>

						{/* Minimal supporting detail */}

					</div>
				</div>

				{/* ================================================== */}
				{/* GRID INTRO                                        */}
				{/* ================================================== */}

				<div
					className="
						mt-14
						flex items-center
						justify-between
						gap-5
						border-t border-navy/[0.08]
						pt-5
						sm:mt-16
					"
				>
					<div className="flex items-center gap-2.5">
						<span className="h-1.5 w-1.5 rounded-full bg-brand" />

						<span
							className="
								font-mono text-[10px]
								font-semibold uppercase
								tracking-[0.15em]
								text-navy
							"
						>
							Our solutions
						</span>
					</div>

					<span
						className="
							font-mono text-[10px]
							tabular-nums
							tracking-[0.12em]
							text-slate-400
						"
					>
						01 — {String(visibleSolutions.length).padStart(2, '0')}
					</span>
				</div>

				{/* ================================================== */}
				{/* ASYMMETRIC SOLUTION GRID                            */}
				{/* ================================================== */}

				<div
					className="
						mt-6
						grid grid-cols-1
						gap-4
						sm:grid-cols-2
						lg:grid-cols-12
						lg:gap-5
					"
				>
					{visibleSolutions.map((solution, index) => {
						const Icon = solution.icon;

						const featured = index === 0;

					const wide = CARD_LAYOUTS[index] === 'lg:col-span-7';

						const layout =
							CARD_LAYOUTS[index] ?? 'lg:col-span-6';

						return (
							<Link
								key={solution.slug}
								to={`/solutions/${solution.slug}`}
								aria-label={`Explore ${solution.title}`}
								className={`
									group relative isolate
									flex flex-col
									overflow-hidden
									rounded-[22px]
									border
									p-6
									transition-all
									duration-500
									focus-visible:outline
									focus-visible:outline-2
									focus-visible:outline-offset-2
									focus-visible:outline-brand
									motion-safe:hover:-translate-y-1
									sm:p-7
									lg:p-8

									${layout}

									${
										featured
											? 'min-h-[300px] sm:col-span-2 lg:min-h-[300px]'
											: 'min-h-[300px] lg:min-h-[300px]'
									}

									${
										featured
											? `
												border-navy
												bg-navy
												text-white
												shadow-[0_20px_55px_-38px_rgba(15,23,42,0.4)]
												hover:shadow-[0_26px_65px_-35px_rgba(15,23,42,0.45)]
											`
											: `
												border-navy/[0.075]
												bg-[#F8FAFC]
												text-navy
												hover:border-brand/30
												hover:bg-white
												hover:shadow-[0_20px_55px_-35px_rgba(15,23,42,0.18)]
											`
									}
								`}
							>
								{/* -------------------------------------- */}
								{/* Background artwork                     */}
								{/* -------------------------------------- */}


								{/* Hover glow */}

								<div
									aria-hidden="true"
									className={`
										pointer-events-none
										absolute -right-24 -bottom-32
										h-72 w-72
										rounded-full
										blur-[75px]
										opacity-0
										transition-opacity duration-700
										group-hover:opacity-100

										${
											featured
												? 'bg-brand/10'
												: 'bg-brand/[0.055]'
										}
									`}
								/>

								{/* -------------------------------------- */}
								{/* Card top                                */}
								{/* -------------------------------------- */}

								<div
									className="
										relative z-10
										flex items-start
										justify-between
										gap-5
									"
								>
									{/* Icon */}

									<div
										className={`
											grid h-12 w-12
											shrink-0
											place-items-center
											rounded-xl
											border
											transition-all duration-500
											group-hover:rotate-[-5deg]
											motion-reduce:transform-none

											${
												featured
													? `
														border-white/15
														bg-white/10
														text-brand
														group-hover:border-brand/40
														group-hover:bg-brand/15
													`
													: `
														border-brand/10
														bg-white
														text-brand
														group-hover:border-brand/25
														group-hover:bg-brand
														group-hover:text-white
													`
											}
										`}
									>
										<Icon
											className="h-[22px] w-[22px]"
											strokeWidth={1.65}
											aria-hidden="true"
										/>
									</div>

									{/* Index + corner arrow */}

									<div className="flex items-center gap-4">
										<span
											className={`
												font-mono
												text-[11px]
												tabular-nums
												tracking-[0.12em]

												${
													featured
														? 'text-white/45'
														: 'text-slate-400'
												}
											`}
										>
											{String(index + 1).padStart(2, '0')}
											{' / '}
											{String(visibleSolutions.length).padStart(2, '0')}
										</span>

										<span
											className={`
												grid h-9 w-9
												shrink-0
												place-items-center
												rounded-full
												border
												transition-all duration-300
												group-hover:-translate-y-0.5
												group-hover:translate-x-0.5
												motion-reduce:transform-none

												${
													featured
														? `
															border-white/15
															text-white
															group-hover:border-brand
															group-hover:bg-brand
														`
														: `
															border-navy/10
															text-navy
															group-hover:border-brand
															group-hover:bg-brand
															group-hover:text-white
														`
												}
											`}
										>
											<ArrowUpRight
												className="h-4 w-4"
												strokeWidth={1.8}
												aria-hidden="true"
											/>
										</span>
									</div>
								</div>

								{/* -------------------------------------- */}
								{/* Featured card technical detail         */}
								{/* -------------------------------------- */}

								

								{/* -------------------------------------- */}
								{/* Card content                            */}
								{/* -------------------------------------- */}

								<div
									className="
										relative z-10
										mt-0
										pt-5
									"
								>
									

									{/* Title */}

									<h3
										className={`
											mt-3
											max-w-[520px]
											font-display
											font-semibold
											leading-[1.14]
											tracking-[-0.035em]

											${
												wide
													? 'text-[clamp(1.6rem,2.6vw,2.15rem)]'
													: 'text-[clamp(1.5rem,2vw,1.9rem)]'
											}

											${
												featured
													? 'text-white'
													: 'text-navy'
											}
										`}
									>
										{solution.title}
									</h3>

									{/* Outcome */}

									<p
										className={`
											mt-3
											max-w-[470px]
											font-display
											text-[14px]
											font-semibold
											leading-[1.6]
											sm:text-[15px]

											${
												featured
													? 'text-brand'
													: 'text-brand-700'
											}
										`}
									>
										{solution.outcome}
									</p>

									{/* Explanation */}

									<p
										className={`
											mt-3
											max-w-[490px]
											text-[15px]
											leading-[1.85]
											sm:text-[15px]

											${
												featured
													? 'text-slate-300'
													: 'text-slate-600'
											}
										`}
									>
										{solution.explanation}
									</p>

									{/* ---------------------------------- */}
									{/* Footer                             */}
									{/* ---------------------------------- */}

									<div
										className={`
											mt-7
											flex items-center
											justify-between
											gap-4
											border-t
											pt-5

											${
												featured
													? 'border-white/15'
													: 'border-navy/[0.075]'
											}
										`}
									>
										<span
											className={`
												inline-flex items-center
												gap-2
												font-display
												text-[14px]
												font-semibold
												transition-colors duration-300
												sm:text-[14px]

												${
													featured
														? 'text-white'
														: 'text-navy group-hover:text-brand'
												}
											`}
										>
											View solution

											<ArrowUpRight
												className="
													h-3.5 w-3.5
													transition-transform
													duration-300
													group-hover:-translate-y-0.5
													group-hover:translate-x-0.5
													motion-reduce:transform-none
												"
												aria-hidden="true"
											/>
										</span>

										<span
											className={`
												font-mono
												text-[12px]
												uppercase
												tracking-[0.12em]

												${
													featured
														? 'text-white/35'
														: 'text-slate-400'
												}
											`}
										>
											Explore
										</span>
									</div>
								</div>
							</Link>
						);
					})}
				</div>

				{/* ================================================== */}
				{/* BOTTOM DETAIL                                      */}
				{/* ================================================== */}

				<div
					className="
						mt-10
						flex flex-col
						gap-4
						border-t border-navy/[0.075]
						pt-6
						sm:flex-row
						sm:items-center
						sm:justify-between
					"
				>
					<div className="flex items-center gap-2.5">
						<span className="h-1.5 w-1.5 rounded-full bg-brand" />

						<p
							className="
								font-display
								text-[12px]
								font-medium
								text-slate-500
								sm:text-[13px]
							"
						>
							Focused on outcomes. Built for what comes next.
						</p>
					</div>

					<span
						className="
							font-mono text-[10px]
							uppercase
							tracking-[0.15em]
							text-slate-400
						"
					>
						Codelaro / Solutions
					</span>
				</div>
			</div>
		</section>
	);
}