import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function FinalCta() {
	return (
		<section
			id="contact"
			aria-labelledby="final-cta-heading"
			className="
				relative
				scroll-mt-24
				bg-[#F8FAFC]
				px-3
				pb-3
				sm:px-4
				sm:pb-14
				lg:px-5
				lg:pb-20
			"
		>
			{/* =====================================================
			    Rounded CTA container
			===================================================== */}

			<div
				className="
					relative
					mx-auto
					w-full
					max-w-8xl
					overflow-hidden
					rounded-[2rem]
					bg-navy
					sm:rounded-[2.25rem]
					lg:rounded-[2.5rem]
				"
			>
				{/* =================================================
				    Background
				================================================= */}

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
							bg-blueprint-grid-dark
							opacity-40
							[mask-image:linear-gradient(to_bottom,black,transparent_95%)]
						"
					/>

					{/* Right glow */}

					<div
						className="
							drift-slow
							absolute
							-right-32 -top-40
							h-[34rem] w-[34rem]
							rounded-full
							bg-brand/[0.08]
							blur-[110px]
						"
					/>

					{/* Left glow */}

					<div
						className="
							drift-slow
							absolute
							-left-40 bottom-0
							h-80 w-80
							rounded-full
							bg-brand/[0.05]
							blur-[100px]
						"
					/>

					{/* Subtle vertical detail */}

					<div
						className="
							absolute
							right-[12%] top-0
							hidden h-full
							w-px
							bg-gradient-to-b
							from-transparent
							via-white/[0.035]
							to-transparent
							lg:block
						"
					/>
				</div>

				{/* =================================================
				    Content
				================================================= */}

				<div
					className="
						relative mx-auto
						w-full max-w-7xl
						px-6
						py-16
						sm:px-6
						md:py-16
						lg:px-8
						lg:py-20
						xl:px-6
					"
				>
					{/* =================================================
					    Main content
					================================================= */}

					<div
						className="
							grid
							gap-14
							lg:grid-cols-12
							lg:items-center
							lg:gap-16
							xl:gap-20
						"
					>
						{/* =============================================
						    Left
						============================================= */}

						<div className="lg:col-span-7">
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
										text-brand
									"
								>
									Let&apos;s build
								</p>
							</div>

							{/* Heading */}

							<h2
								id="final-cta-heading"
								className="
									mt-5
									max-w-3xl
									font-display
									text-[2.75rem]
									font-semibold
									leading-[1.02]
									tracking-[-0.05em]
									text-white
									sm:text-[3.4rem]
									md:text-[4rem]
									lg:text-[4.25rem]
									xl:text-[4.5rem]
								"
							>
								Have something worth
								<span className="text-slate-400">
									{' '}
									building?
								</span>
							</h2>

							{/* Description */}

							<p
								className="
									mt-6
									max-w-2xl
									text-[15px]
									leading-7
									text-slate-400
									sm:text-base
								"
							>
								Tell us what you&apos;re trying to
								build, improve or automate. We&apos;ll
								help turn your goals into a clear path
								from strategy and development to launch
								and growth.
							</p>

							{/* CTA */}

							<div
								className="
									mt-8
									flex flex-col
									gap-4
									sm:flex-row
									sm:items-center
								"
							>
								<Link
									to="/contact"
									aria-label="Talk to a Codelaro expert about your project"
									className="
										group
										inline-flex
										min-h-12
										w-full
										items-center
										justify-center
										gap-2.5
										rounded-xl
										bg-white
										px-6
										font-display
										text-[16px]
										font-semibold
										text-navy
										transition-all
										duration-300
										hover:-translate-y-0.5
										hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.55)]
										active:translate-y-0
										active:scale-[0.99]
										sm:w-auto
									"
								>
									<span>Let's Make It Happen</span>

									<ArrowUpRight
										className="
											h-4 w-4
											shrink-0
											text-navy
											transition-transform
											duration-300
											group-hover:-translate-y-0.5
											group-hover:translate-x-0.5
										"
										strokeWidth={2}
										aria-hidden="true"
									/>
								</Link>

								
							</div>
						</div>

						{/* =============================================
						    Right — Code / Launch / Grow
						============================================= */}

						<div
							aria-hidden="true"
							className="
								relative
								hidden
								min-h-[330px]
								lg:col-span-5
								lg:block
							"
						>
							{/* Ambient glow */}

							<div
								className="
									absolute
									left-10 top-1/2
									h-64 w-64
									-translate-y-1/2
									rounded-full
									bg-brand/[0.045]
									blur-[80px]
								"
							/>

							{/* Journey line */}

							<div
								className="
									absolute
									left-[7px]
									top-5
									bottom-5
									w-px
									bg-gradient-to-b
									from-brand/60
									via-white/15
									to-brand/20
								"
							/>

							{/* CODE */}

							<div
								className="
									absolute
									left-0 top-0
									flex
									items-center
									gap-7
								"
							>
								<span
									className="
										relative z-10
										h-[15px] w-[15px]
										shrink-0
										rounded-full
										border-[3px]
										border-navy
										bg-brand
										ring-1
										ring-brand/30
									"
								/>

								<div>
									<p
										className="
											font-display
											text-[2.75rem]
											font-semibold
											leading-none
											tracking-[-0.055em]
											text-white
											xl:text-[3.25rem]
										"
									>
										Code
										<span className="text-brand">
											.
										</span>
									</p>

									<p
										className="
											mt-2
											text-[10px]
											font-semibold
											uppercase
											tracking-[0.18em]
											text-slate-500
										"
									>
										Shape the idea
									</p>
								</div>
							</div>

							{/* LAUNCH */}

							<div
								className="
									absolute
									left-0 top-1/2
									flex
									-translate-y-1/2
									items-center
									gap-7
								"
							>
								<span
									className="
										relative z-10
										h-[15px] w-[15px]
										shrink-0
										rounded-full
										border-[3px]
										border-navy
										bg-white/40
										ring-1
										ring-white/10
									"
								/>

								<div>
									<p
										className="
											font-display
											text-[2.75rem]
											font-semibold
											leading-none
											tracking-[-0.055em]
											text-white
											xl:text-[3.25rem]
										"
									>
										Launch
										<span className="text-brand">
											.
										</span>
									</p>

									<p
										className="
											mt-2
											text-[10px]
											font-semibold
											uppercase
											tracking-[0.18em]
											text-slate-500
										"
									>
										Bring it to life
									</p>
								</div>
							</div>

							{/* GROW */}

							<div
								className="
									absolute
									bottom-0 left-0
									flex
									items-center
									gap-7
								"
							>
								<span
									className="
										relative z-10
										h-[15px] w-[15px]
										shrink-0
										rounded-full
										border-[3px]
										border-navy
										bg-white/20
										ring-1
										ring-white/10
									"
								/>

								<div>
									<p
										className="
											font-display
											text-[2.75rem]
											font-semibold
											leading-none
											tracking-[-0.055em]
											text-white
											xl:text-[3.25rem]
										"
									>
										Grow
										<span className="text-brand">
											.
										</span>
									</p>

									<p
										className="
											mt-2
											text-[10px]
											font-semibold
											uppercase
											tracking-[0.18em]
											text-slate-500
										"
									>
										Keep moving forward
									</p>
								</div>
							</div>

							{/* Direction indicator */}

							<div
								className="
									absolute
									bottom-1
									right-0
									hidden
									items-center
									gap-3
									xl:flex
								"
							>
								<span
									className="
										text-[10px]
										font-medium
										uppercase
										tracking-[0.16em]
										text-slate-600
									"
								>
									Idea to impact
								</span>

								<ArrowRight
									className="
										h-3.5 w-3.5
										text-brand/60
									"
									strokeWidth={1.8}
								/>
							</div>
						</div>
					</div>

					{/* =================================================
					    Bottom
					================================================= */}

					<div
						className="
							mt-14
							flex flex-col
							gap-5
							border-t border-white/10
							pt-7
							sm:flex-row
							sm:items-center
							sm:justify-between
							lg:mt-16
						"
					>
						<p
							className="
								text-[13px]
								text-slate-500
							"
						>
							We typically reply within one business day.
						</p>

						<div
							className="
								flex items-center
								gap-3
							"
						>
							<span
								aria-hidden="true"
								className="
									h-1.5 w-1.5
									rounded-full
									bg-brand
								"
							/>

							<p
								className="
									text-[13px]
									font-medium
									text-slate-500
								"
							>
								Strategy · Design · Engineering · Growth
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}