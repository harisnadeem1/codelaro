import { Link } from 'react-router';
import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	ArrowDown,
} from 'lucide-react';

import type { Service } from '@/data/services';

export function ServiceHero({ service }: { service: Service }) {
	return (
		<section
			aria-labelledby="service-hero-title"
			className="
				relative overflow-hidden
				bg-[#F8FAFC]
			"
		>
			<div
				className="
					mx-auto w-full max-w-7xl
					px-4 pb-8 pt-8
					sm:px-6 sm:pb-12 sm:pt-10
					lg:px-8 lg:pb-16
				"
			>
				{/* ------------------------------------------------------ */}
				{/* Top Navigation                                         */}
				{/* ------------------------------------------------------ */}

				<div
					className="
						mb-8 flex items-center
						justify-between gap-4
						sm:mb-10
					"
				>
					<Link
						to="/services"
						className="
							group inline-flex items-center
							gap-2
							text-[13px] font-medium
							text-slate-500
							transition-colors duration-300
							hover:text-navy
						"
					>
						<ArrowLeft
							className="
								h-4 w-4
								transition-transform duration-300
								group-hover:-translate-x-1
							"
						/>

						All Services
					</Link>

					<div
						className="
							hidden items-center gap-3
							sm:flex
						"
					>
						<span
							className="
								h-1.5 w-1.5
								rounded-full bg-brand
							"
						/>

						<span
							className="
								font-mono text-[10px]
								font-semibold uppercase
								tracking-[0.2em]
								text-slate-400
							"
						>
							Codelaro / Expertise
						</span>
					</div>
				</div>

				{/* ------------------------------------------------------ */}
				{/* Main Hero                                             */}
				{/* ------------------------------------------------------ */}

				<div
					className="
						relative isolate overflow-hidden
						rounded-[24px]
						bg-[#0F172A]
						text-white
						sm:rounded-[32px]
						lg:rounded-[36px]
					"
				>
					{/* Background gradient */}
					<div
						aria-hidden="true"
						className="
							pointer-events-none
							absolute inset-0
							bg-[radial-gradient(ellipse_at_90%_10%,rgba(24,188,183,0.12),transparent_48%)]
						"
					/>

					{/* Blueprint grid */}
					<div
						aria-hidden="true"
						className="
							pointer-events-none
							absolute inset-0
							opacity-[0.08]
							[background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
							[background-size:48px_48px]
							[mask-image:linear-gradient(to_bottom,black,transparent_95%)]
						"
					/>

					{/* Subtle teal glow */}
					<div
						aria-hidden="true"
						className="
							pointer-events-none absolute
							-right-40 -top-40
							h-[450px] w-[450px]
							rounded-full bg-brand/[0.07]
							blur-[110px]
						"
					/>

					{/* -------------------------------------------------- */}
					{/* Hero Content                                       */}
					{/* -------------------------------------------------- */}

					<div
						className="
							relative z-10
							px-6 pb-8 pt-9
							sm:px-10 sm:pb-10 sm:pt-12
							lg:px-14 lg:pb-12 lg:pt-14
							xl:px-16 xl:pt-16
						"
					>
						{/* Top label */}
						<div
							className="
								flex items-center
								justify-between gap-4
							"
						>
							<div className="flex items-center gap-3">
								<span
									className="
										h-px w-7 bg-brand
										sm:w-10
									"
								/>

								<p
									className="
										font-mono text-[10px]
										font-semibold uppercase
										tracking-[0.22em]
										text-brand
									"
								>
									Our Expertise
								</p>
							</div>

							<p
								className="
									hidden font-mono
									text-[10px] uppercase
									tracking-[0.15em]
									text-white/35
									lg:block
								"
							>
								Code. Launch. Grow.
							</p>
						</div>

						{/* ------------------------------------------------ */}
						{/* Main editorial layout                            */}
						{/* ------------------------------------------------ */}

						<div
							className="
								mt-12 grid gap-12
								sm:mt-16
								lg:mt-24
								lg:grid-cols-12
								lg:items-end
								lg:gap-10
								xl:gap-16
							"
						>
							{/* Left: Large typography */}
							<div
								className="
									min-w-0
									lg:col-span-7
								"
							>
								<p
									className="
										mb-5 font-mono
										text-[11px] font-medium
										uppercase tracking-[0.16em]
										text-white/45
										sm:mb-7
									"
								>
									Technology that moves you forward
								</p>

								<h1
									id="service-hero-title"
									className="
										max-w-[800px]
										font-display
										text-[clamp(2.8rem,6.2vw,6rem)]
										font-semibold
										leading-[1.04]
										tracking-[-0.055em]
										text-white
										[overflow-wrap:anywhere]
									"
								>
									{service.title}
									<span className="text-brand">
										.
									</span>
								</h1>

								{/* Minimal signature accent */}
								<div
									aria-hidden="true"
									className="
										mt-9 flex items-center gap-2
										sm:mt-12
									"
								>
									<span
										className="
											h-[3px] w-12
											rounded-full bg-brand
										"
									/>

									<span
										className="
											h-[3px] w-5
											rounded-full bg-white/15
										"
									/>
								</div>
							</div>

							{/* Right: Description and actions */}
							<div
								className="
									min-w-0
									border-t border-white/15
									pt-8
									lg:col-span-5
									lg:border-l lg:border-t-0
									lg:pb-1 lg:pl-10 lg:pt-0
									xl:pl-12
								"
							>
								<p
									className="
										mb-5 font-mono
										text-[10px] font-semibold
										uppercase tracking-[0.2em]
										text-brand
									"
								>
									The Overview
								</p>

								<p
									className="
										max-w-md
										text-[16px]
										leading-[1.85]
										text-slate-300
										sm:text-[18px]
									"
								>
									{service.summary}
								</p>

								{/* CTAs */}
								<div
									className="
										mt-9 flex flex-col
										items-start gap-3
										sm:flex-row
										sm:flex-wrap
										sm:items-center
										lg:flex-col
										lg:items-start
										xl:flex-row
									"
								>
									{/* Primary button */}
									<a
										href="#contact"
										className="
											group inline-flex
											h-[50px] w-full
											items-center
											justify-between gap-6
											rounded-xl
											bg-white px-6
											font-display
											text-[13px] font-semibold
											text-navy
											transition-all duration-300
											hover:bg-slate-100
											hover:shadow-lg
											hover:shadow-black/10
											active:scale-[0.98]
											sm:w-auto
										"
									>
										Start a Project

										<ArrowUpRight
											className="
												h-4 w-4
												transition-transform
												duration-300
												group-hover:translate-x-0.5
												group-hover:-translate-y-0.5
											"
										/>
									</a>

									{/* Secondary button */}
									<Link
										to="/work"
										className="
											group inline-flex
											h-[50px] w-full
											items-center
											justify-center gap-2
											rounded-xl
											border border-white/20
											px-5
											font-display
											text-[13px] font-semibold
											text-white
											transition-all duration-300
											hover:border-white/40
											hover:bg-white/[0.07]
											sm:w-auto
										"
									>
										Our Work

										<ArrowRight
											className="
												h-4 w-4
												transition-transform
												duration-300
												group-hover:translate-x-1
											"
										/>
									</Link>
								</div>
							</div>
						</div>

						{/* ------------------------------------------------ */}
						{/* Bottom footer                                     */}
						{/* ------------------------------------------------ */}

						<div
							className="
								mt-16 flex items-center
								justify-between gap-4
								border-t border-white/10
								pt-6
								sm:mt-20
								lg:mt-28
							"
						>
							<div
								className="
									flex items-center gap-3
								"
							>
								<span
									className="
										h-1.5 w-1.5
										rounded-full bg-brand
									"
								/>

								<span
									className="
										font-mono text-[10px]
										font-medium uppercase
										tracking-[0.16em]
										text-white/40
									"
								>
									Built around your ambitions
								</span>
							</div>

							<a
								href="#service-content"
								aria-label="Explore service details"
								className="
									group inline-flex
									items-center gap-2
									text-white/50
									transition-colors duration-300
									hover:text-white
								"
							>
								<span
									className="
										hidden font-mono
										text-[10px] uppercase
										tracking-[0.16em]
										sm:inline
									"
								>
									Explore More
								</span>

								<ArrowDown
									className="
										h-4 w-4
										transition-transform
										duration-300
										group-hover:translate-y-1
									"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}