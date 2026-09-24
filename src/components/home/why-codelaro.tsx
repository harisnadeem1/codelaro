import { Link } from 'react-router';
import {
	ArrowRight,
	ArrowUpRight,
	Sparkles,
} from 'lucide-react';

import { REASONS } from '@/data/why-codelaro';

/* =========================================================
   Why Codelaro
========================================================= */

export function WhyCodelaro() {
	return (
		<section
			id="why"
			aria-labelledby="why-codelaro-heading"
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
						opacity-[0.32]
						[mask-image:linear-gradient(to_bottom,black,transparent_85%)]
					"
				/>

				{/* Subtle accent glow */}
				<div
					className="
						absolute
						-right-40 top-24
						h-[30rem] w-[30rem]
						rounded-full
						bg-brand/[0.05]
						blur-[110px]
					"
				/>

				{/* Decorative oversized word */}
				<p
					className="
						absolute
						-right-6 top-8
						select-none
						font-display
						text-[8rem]
						font-bold
						leading-none
						tracking-[-0.08em]
						text-navy/[0.025]
						lg:text-[12rem]
					"
				>
					WHY
				</p>
			</div>

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5
					py-20
					sm:px-8
					md:py-24
					lg:py-28
				"
			>
				{/* =====================================================
				    Top introduction
				===================================================== */}

				<div
					className="
						grid
						gap-10
						lg:grid-cols-12
						lg:gap-16
					"
				>
					{/* Main statement */}

					<div className="lg:col-span-7">
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
								Why Codelaro
							</p>
						</div>

						<h2
							id="why-codelaro-heading"
							className="
								mt-5 max-w-[760px]
								font-display
								text-[2.5rem]
								font-semibold
								leading-[1.02]
								tracking-[-0.045em]
								text-navy
								sm:text-[3rem]
								md:text-[3.4rem]
								lg:text-[3.75rem]
							"
						>
							A Technology Partner Built Around
							<span className="text-brand">
								{' '}
								Your Success
							</span>
						</h2>
					</div>

					{/* Supporting statement */}

					<div
						className="
							flex
							lg:col-span-5
							lg:items-end
							lg:pb-2
						"
					>
						<div className="max-w-lg">
							<p
								className="
									text-[16px]
									leading-7
									text-slate-600
									sm:text-base
								"
							>
								We bring together strategic thinking, transparent collaboration and thoughtful engineering to deliver digital products designed around your business needs.
							</p>

							<div className="mt-6 flex items-center gap-3">
								<span className="h-px w-10 bg-slate-300" />

								<span
									className="
										text-[12px]
										font-semibold uppercase
										tracking-[0.18em]
										text-slate-400
									"
								>
									Code. Launch. Grow.
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* =====================================================
				    Reasons composition
				===================================================== */}

				<div
					className="
						mt-16
						border-t border-slate-200
						pt-5
						md:mt-20
						lg:mt-24
					"
				>
					<div
						className="
							mb-8
							flex items-center
							justify-between
							gap-6
						"
					>
						<p
							className="
								text-[12px]
								font-semibold uppercase
								tracking-[0.2em]
								text-slate-500
							"
						>
							What makes us different
						</p>

						<p
							className="
								hidden
								text-[14px] 
								text-slate-500
								sm:block
							"
						>
							Built around your outcome
						</p>
					</div>

					<div
						className="
							grid
							gap-4
							md:grid-cols-2
							lg:grid-cols-12
						"
					>
						{REASONS.map((reason, index) => {
							const layout =
								index % 4 === 0
									? 'lg:col-span-7'
									: index % 4 === 1
										? 'lg:col-span-5'
										: index % 4 === 2
											? 'lg:col-span-5'
											: 'lg:col-span-7';

							/*
							 * Alternating navy composition:
							 *
							 * Row 1: navy  | white
							 * Row 2: white | navy
							 * Row 3: navy  | white
							 */
							const featured =
								index === 0 ||
								index === 3 ||
								index === 4;

							return (
								<article
									key={reason.title}
									className={`
				group relative
				overflow-hidden
				rounded-[1.5rem]
				border
				p-6
				transition-all
				duration-500
				ease-[cubic-bezier(0.22,1,0.36,1)]
				sm:p-7
				lg:p-8

				${layout}

				${featured
											? `
							border-navy
							bg-navy
							text-white
							shadow-[0_24px_60px_-35px_rgba(15,23,42,0.5)]
						`
											: `
							border-slate-200/80
							bg-white/70
							text-navy
							hover:-translate-y-1
							hover:border-slate-300
							hover:bg-white
							hover:shadow-[0_20px_50px_-35px_rgba(15,23,42,0.25)]
						`
										}
			`}
								>
									{/* Top accent */}
									<span
										aria-hidden="true"
										className={`
					absolute left-0 top-0
					h-[2px]
					bg-brand
					transition-all
					duration-500

					${featured
												? 'w-16'
												: 'w-0 group-hover:w-full'
											}
				`}
									/>

									{/* Subtle navy-card decoration */}
									{featured && (
										<>
											<div
												aria-hidden="true"
												className="
							absolute
							-right-20 -top-20
							h-64 w-64
							rounded-full
							bg-brand/[0.07]
							blur-3xl
						"
											/>

											<div
												aria-hidden="true"
												className="
							absolute
							-bottom-16 -right-16
							h-40 w-40
							rounded-full
							border border-white/[0.04]
						"
											/>
										</>
									)}

									<div className="relative z-10">
										{/* Marker */}
										<div className="flex items-center gap-4">
											<span
												className={`
							grid h-9 w-9
							shrink-0
							place-items-center
							rounded-full
							border

							${featured
														? `
										border-white/10
										bg-white/[0.06]
										text-brand
									`
														: `
										border-slate-200
										bg-white
										text-brand
									`
													}
						`}
											>
												<Sparkles
													className="h-3.5 w-3.5"
													strokeWidth={1.8}
													aria-hidden="true"
												/>
											</span>

											<span
												aria-hidden="true"
												className={`
							h-px flex-1
							transition-colors
							duration-300

							${featured
														? 'bg-white/10'
														: 'bg-slate-200 group-hover:bg-brand/30'
													}
						`}
											/>
										</div>

										{/* Content */}
										<div className="mt-7">
											<h3
												className={`
							max-w-md
							font-display
							text-[1.4rem]
							font-semibold
							leading-tight
							tracking-[-0.025em]
							sm:text-[1.55rem]

							${featured
														? 'text-white'
														: 'text-navy'
													}
						`}
											>
												{reason.title}
											</h3>

											<p
												className={`
							mt-3
							max-w-xl
							text-[14px]
							leading-6
							sm:text-[16px]
							sm:leading-7

							${featured
														? 'text-slate-300'
														: 'text-slate-500'
													}
						`}
											>
												{reason.description}
											</p>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>

				{/* =====================================================
				    Bottom CTA
				===================================================== */}

				<div
					className="
						mt-12
						grid gap-6
						border-t border-slate-200
						pt-8
						md:grid-cols-[1fr_auto]
						md:items-center
						lg:mt-16
					"
				>
					<div>
						<p
							className="
								font-display
								text-xl
								font-semibold
								tracking-[-0.02em]
								text-navy
								sm:text-2xl
							"
						>
							Have something worth building?
						</p>

						<p
							className="
								mt-1
								text-[14px]
								text-slate-500
							"
						>
							Tell us where you want to go.
							We&apos;ll help you figure out how
							to get there.
						</p>
					</div>

					<Link
						to="/contact"
						aria-label="Start a conversation with Codelaro"
						className="
							group
							inline-flex h-12
							w-fit items-center
							justify-center gap-3
							rounded-xl
							bg-navy-800
							px-5
							font-display
							text-[16px]
							font-semibold
							text-white
							transition-all
							duration-300
							hover:-translate-y-0.5
							hover:bg-navy-800
							active:translate-y-0
							active:scale-[0.98]
						"
					>
						Start a Conversation

						<span
							className="
								grid h-7 w-7
								place-items-center
								rounded-full
															text-white

								transition-colors
							"
						>
							<ArrowUpRight
								className="
									h-3.5 w-3.5
									transition-transform
									duration-300
									group-hover:-translate-y-0.5
									group-hover:translate-x-0.5
            group-hover:text-brand

								"
								aria-hidden="true"
							/>
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}