import { useState } from 'react';
import { Link } from 'react-router';
import {
	ArrowUpRight,
	Minus,
	Plus,
} from 'lucide-react';

import { FAQ_ITEMS } from '@/data/faq';
import { cn } from '@/lib/utils';

/* =========================================================
   FAQ
========================================================= */

export function Faq() {
	const [open, setOpen] = useState<number | null>(0);

	return (
		<section
			id="faq"
			aria-labelledby="faq-heading"
			className="
				relative
				scroll-mt-24
				overflow-hidden
				bg-[#F8FAFC]
			"
		>
			{/* =====================================================
			    Background
			===================================================== */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
					overflow-hidden
				"
			>
				{/* Blueprint texture */}
				<div
					className="
						absolute inset-0
						bg-blueprint-grid
						opacity-[0.3]
						[mask-image:linear-gradient(to_bottom,black,transparent_90%)]
					"
				/>

				{/* Subtle teal glow */}
				<div
					className="
						absolute
						-left-48 top-1/3
						h-[30rem] w-[30rem]
						rounded-full
						bg-brand/[0.045]
						blur-[110px]
					"
				/>

				{/* Large decorative text */}
				<p
					className="
						absolute
						-right-5 top-10
						select-none
						font-display
						text-[8rem]
						font-bold
						leading-none
						tracking-[-0.08em]
						text-navy/[0.025]
						lg:text-[13rem]
					"
				>
					FAQ
				</p>
			</div>

			<div
				className="
					relative mx-auto
					w-full max-w-7xl
					px-5
					py-20
					sm:px-8
					md:py-24
					lg:py-28
				"
			>
				<div
					className="
						grid gap-14
						lg:grid-cols-12
						lg:gap-16
						xl:gap-20
					"
				>
					{/* =================================================
					    Left / introduction
					================================================= */}

					<div className="lg:col-span-5">
						<div className="lg:sticky lg:top-28">
							{/* Eyebrow */}

							<div className="flex items-center gap-3">
								<span
									aria-hidden="true"
									className="h-px w-8 bg-brand"
								/>

								<p
									className="
										text-[11px]
										font-bold uppercase
										tracking-[0.22em]
										text-brand-700
									"
								>
									Frequently asked
								</p>
							</div>

							{/* Heading */}

							<h2
								id="faq-heading"
								className="
									mt-5 max-w-lg
									font-display
									text-[2.5rem]
									font-semibold
									leading-[1.02]
									tracking-[-0.045em]
									text-navy
									sm:text-[3rem]
									lg:text-[3.5rem]
								"
							>
								Questions before
								<span className="block text-brand">
									we get started?
								</span>
							</h2>

							{/* Description */}

							<p
								className="
									mt-6 max-w-md
									text-[15px]
									leading-7
									text-slate-600
									sm:text-base
								"
							>
								Here are answers to the things
								clients usually want to know about
								working with Codelaro, from project
								planning and development to launch
								and ongoing support.
							</p>

							{/* Small separator */}

							<div
								className="
									mt-8
									h-px w-full
									max-w-sm
									bg-slate-200
								"
							/>

							{/* Contact prompt */}

							<div className="mt-7">
								<p
									className="
										text-[13px]
										font-medium
										text-slate-400
									"
								>
									Can't find what you're looking for?
								</p>

								<Link
									to="/contact"
									aria-label="Ask Codelaro a question"
									className="
										group mt-3
										inline-flex
										items-center gap-3
										font-display
										text-[16px]
										font-semibold
										text-navy
										transition-colors
										duration-300
										hover:text-brand
									"
								>
									Ask us Directly

									<span
										className="
											grid h-8 w-8
											place-items-center
											rounded-full
											border border-slate-200
											bg-white
											transition-all
											duration-300
											group-hover:border-brand/30
										"
									>
										<ArrowUpRight
											className="
												h-3.5 w-3.5
												transition-transform
												duration-300
												group-hover:-translate-y-0.5
												group-hover:translate-x-0.5
											"
											aria-hidden="true"
										/>
									</span>
								</Link>
							</div>
						</div>
					</div>

					{/* =================================================
					    Right / FAQ questions
					================================================= */}

					<div className="lg:col-span-7">
						<div
							className="
								border-t
								border-slate-200
							"
						>
							{FAQ_ITEMS.map((item, index) => {
								const isOpen = open === index;

								const buttonId = `faq-button-${index}`;
								const panelId = `faq-panel-${index}`;

								return (
									<article
										key={item.question}
										className="
											group relative
											border-b
											border-slate-200
										"
									>
										{/* Active accent */}

										{/* <span
											aria-hidden="true"
											className={cn(
												`
													absolute
													left-0 top-0
													h-full w-[2px]
													origin-top
													bg-brand
													transition-transform
													duration-500
													ease-[cubic-bezier(0.22,1,0.36,1)]
												`,
												isOpen
													? 'scale-y-100'
													: 'scale-y-0',
											)}
										/> */}

										{/* Question */}

										<button
											id={buttonId}
											type="button"
											aria-expanded={isOpen}
											aria-controls={panelId}
											onClick={() =>
												setOpen(
													isOpen
														? null
														: index,
												)
											}
											className="
												flex w-full
												items-start
												justify-between
												gap-6
												py-7
												pl-0 pr-1
												text-left
												transition-[padding]
												duration-300
												sm:py-4
												group-hover:pl-2
											"
										>
											{/* Question text */}

											<span
												className={cn(
													`
														max-w-xl
														font-display
														text-[1.05rem]
														font-semibold
														leading-snug
														tracking-[-0.02em]
														transition-colors
														duration-300
														sm:text-[1.15rem]
													`,
													isOpen
														? 'text-navy'
														: 'text-navy/85 group-hover:text-navy',
												)}
											>
												{item.question}
											</span>

											{/* Toggle */}

											<span
												aria-hidden="true"
												className={cn(
													`
														grid h-9 w-9
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
															text-brand
														`
														: `
															border-slate-200
															bg-white
															text-slate-500
															group-hover:border-brand/30
															group-hover:text-brand
														`,
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

										{/* =================================================
										    Answer

										    Kept mounted so FAQ copy remains
										    available in the document.
										================================================= */}

										<div
											id={panelId}
											role="region"
											aria-labelledby={buttonId}
											aria-hidden={!isOpen}
											className={cn(
												`
													grid
													transition-[grid-template-rows,opacity]
													duration-500
													ease-[cubic-bezier(0.22,1,0.36,1)]
												`,
												isOpen
													? `
														grid-rows-[1fr]
														opacity-100
													`
													: `
														grid-rows-[0fr]
														opacity-0
													`,
											)}
										>
											<div className="overflow-hidden">
												<div
													className="
														max-w-xl
														pb-4
														pr-12
														sm:pr-16
													"
												>
													<p
														className="
															text-[15px]
															leading-6
															text-slate-600
															sm:text-[16px]
														"
													>
														{item.answer}
													</p>

													
												</div>
											</div>
										</div>
									</article>
								);
							})}
						</div>

						{/* =================================================
						    Bottom note
						================================================= */}

						<div
							className="
								mt-8
								flex flex-col
								gap-2
								sm:flex-row
								sm:items-center
								sm:justify-between
							"
						>
							<p
								className="
									text-[14px]
									text-slate-400
								"
							>
								Still have questions?
								We're happy to talk through them.
							</p>

							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}