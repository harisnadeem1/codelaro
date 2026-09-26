import { useId, useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';

import type { Solution } from '@/data/solutions';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/* Solution FAQ                                                               */
/* -------------------------------------------------------------------------- */

export function SolutionFaq({
	solution,
}: {
	solution: Solution;
}) {
	const [open, setOpen] = useState<number | null>(0);
	const instanceId = useId().replace(/:/g, '');

	return (
		<section
			id="solution-faq"
			aria-labelledby="solution-faq-heading"
			className="
				relative
				scroll-mt-24
				bg-[#F8FAFC]
				py-20
				sm:py-24
				lg:py-32
			"
		>
			<div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* Main layout */}

				<div
					className="
						grid
						items-start
						gap-12
						lg:grid-cols-12
						lg:gap-16
						xl:gap-24
					"
				>
					{/* ------------------------------------------------------ */}
					{/* Left: Sticky introduction                              */}
					{/* ------------------------------------------------------ */}

					<div className="lg:col-span-5 lg:sticky lg:top-32">

						{/* Eyebrow */}

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
							Frequently asked questions
						</p>

						{/* Heading */}

						<h2
							id="solution-faq-heading"
							className="
								mt-6
								max-w-lg
								font-display
								text-[2.2rem]
								font-semibold
								leading-[1.08]
								tracking-[-0.025em]
								text-navy
								md:text-[3rem]
							"
						>
							Questions about{' '}
							<span className="text-brand">
								{solution.title}?
							</span>
						</h2>

						{/* Description */}

						<p
							className="
								mt-6
								max-w-md
								text-[15px]
								leading-[1.85]
								text-slate-500
								sm:text-[17px]
							"
						>
							Explore answers to common questions about our{' '}
							{solution.title.toLowerCase()} solution,
							including how we work and what you can expect.
						</p>

						{/* Contact prompt */}

						<div className="mt-10 border-t border-navy/10 pt-7">

							<p className="text-[13px] text-slate-500">
								Have a question we haven't answered?
							</p>

							<Link
								to="/contact"
								aria-label={`Contact Codelaro about ${solution.title}`}
								className="
									group
									mt-4
									inline-flex
									items-center
									gap-3
									font-display
									text-[15px]
									font-semibold
									text-navy
									transition-colors
									duration-300
									hover:text-brand
								"
							>
								Ask Us Directly

								<span
									className="
										grid
										h-9 w-9
										place-items-center
										rounded-full
										border border-slate-200
										bg-white
										transition-all
										duration-300
										group-hover:border-brand/30
										group-hover:bg-brand/[0.05]
									"
								>
									<ArrowUpRight
										aria-hidden="true"
										className="
											h-4 w-4
											transition-transform
											duration-300
											group-hover:translate-x-0.5
											group-hover:-translate-y-0.5
										"
									/>
								</span>
							</Link>

						</div>
					</div>

					{/* ------------------------------------------------------ */}
					{/* Right: FAQ accordion                                   */}
					{/* ------------------------------------------------------ */}

					<div className="min-w-0 lg:col-span-7">

						<div className="border-t border-slate-200">

							{solution.faq.map((item, index) => {
								const isOpen = open === index;

								const buttonId =
									`${instanceId}-faq-button-${index}`;

								const panelId =
									`${instanceId}-faq-panel-${index}`;

								return (
									<article
										key={`${index}-${item.question}`}
										className="
											group
											relative
											border-b
											border-slate-200
										"
									>
										{/* Question */}

										<h3>
											<button
												id={buttonId}
												type="button"
												aria-expanded={isOpen}
												aria-controls={panelId}
												onMouseEnter={() => {
													if (
														window.matchMedia(
															'(hover: hover) and (pointer: fine)'
														).matches
													) {
														setOpen(index);
													}
												}}
												onClick={() =>
													setOpen(
														isOpen
															? null
															: index
													)
												}
												className="
													flex
													w-full
													items-start
													justify-between
													gap-5
													py-6
													text-left
													outline-none
													sm:py-7
													focus-visible:outline-2
													focus-visible:outline-offset-2
													focus-visible:outline-brand
												"
											>
												{/* Question text */}

												<span
													className={cn(
														`
															max-w-xl
															font-display
															text-[16px]
															font-semibold
															leading-[1.5]
															tracking-[-0.02em]
															transition-colors
															duration-300
															sm:text-[18px]
														`,
														isOpen
															? 'text-navy'
															: 'text-navy/80 group-hover:text-navy'
													)}
												>
													{item.question}
												</span>

												{/* Toggle icon */}

												<span
													aria-hidden="true"
													className={cn(
														`
															grid
															h-9 w-9
															shrink-0
															place-items-center
															rounded-full
															border
															transition-all
															duration-300
														`,
														isOpen
															? `
																border-brand
																bg-brand
																text-white
															`
															: `
																border-slate-200
																bg-white
																text-slate-500
																group-hover:border-brand/40
																group-hover:text-brand
															`
													)}
												>
													{isOpen ? (
														<Minus
															className="h-4 w-4"
															strokeWidth={1.8}
														/>
													) : (
														<Plus
															className="h-4 w-4"
															strokeWidth={1.8}
														/>
													)}
												</span>
											</button>
										</h3>

										{/* Animated answer */}

										<div
											id={panelId}
											role="region"
											aria-labelledby={buttonId}
											aria-hidden={!isOpen}
											inert={!isOpen}
											className={cn(
												`
													grid
													transition-[grid-template-rows,opacity]
													duration-500
													ease-[cubic-bezier(0.22,1,0.36,1)]
													motion-reduce:transition-none
												`,
												isOpen
													? `
														grid-rows-[1fr]
														opacity-100
													`
													: `
														grid-rows-[0fr]
														opacity-0
													`
											)}
										>
											<div className="min-h-0 overflow-hidden">

												<p
													className="
														max-w-xl
														pb-7
														pr-10
														text-[14px]
														leading-[1.85]
														text-slate-500
														sm:pr-16
														sm:text-[16px]
													"
												>
													{item.answer}
												</p>

											</div>
										</div>

									</article>
								);
							})}

						</div>

						{/* Bottom note */}

						<div
							className="
								mt-8
								flex
								flex-wrap
								items-center
								justify-between
								gap-4
							"
						>
							<p className="text-[13px] text-slate-400">
								Still have questions? We're happy to help.
							</p>

							<span
								className="
									font-mono
									text-[10px]
									font-medium
									uppercase
									tracking-[0.15em]
									text-slate-400
								"
							>
								Codelaro Support
							</span>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}