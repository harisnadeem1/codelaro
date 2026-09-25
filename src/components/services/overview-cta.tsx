import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function ServicesOverviewCta() {
	return (
		<section
			id="contact"
			aria-labelledby="services-cta-heading"
			className="relative scroll-mt-24 bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
		>
			{/* Outer Container */}
			<div className="mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* CTA Panel */}
				<div
					className="
						relative isolate overflow-hidden
						rounded-[24px]
						border border-brand/15
						bg-brand/[0.07]
						sm:rounded-[32px]
						lg:rounded-[40px]
					"
				>
					{/* Background Decorations */}
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0"
					>
						{/* Soft teal gradient */}
						<div
							className="
								absolute inset-0
								bg-gradient-to-br
								from-brand/[0.09]
								via-brand/[0.025]
								to-transparent
							"
						/>

						{/* Top-right glow */}
						<div
							className="
								absolute -right-32 -top-40
								h-[420px] w-[420px]
								rounded-full
								bg-brand/[0.10]
								blur-[100px]
							"
						/>

						{/* Bottom-left glow */}
						<div
							className="
								absolute -bottom-40 -left-32
								h-[350px] w-[350px]
								rounded-full
								bg-brand/[0.06]
								blur-[100px]
							"
						/>
					</div>

					{/* CTA Content */}
					<div
						className="
							relative mx-auto max-w-4xl
							px-6 py-16 text-center
							sm:px-10 sm:py-20
							lg:py-24
						"
					>
						{/* Eyebrow */}
						<div className="mb-6 flex items-center justify-center gap-3">
							<span
								aria-hidden="true"
								className="h-px w-7 bg-brand"
							/>

							<p
								className="
									text-[11px] font-bold
									uppercase tracking-[0.2em]
									text-brand-700
								"
							>
								Let's Work Together
							</p>

							<span
								aria-hidden="true"
								className="h-px w-7 bg-brand"
							/>
						</div>

						{/* Heading */}
						<h2
							id="services-cta-heading"
							className="
								font-display
								text-[34px] font-semibold
								leading-[1.14]
								tracking-[-0.045em]
								text-navy
								sm:text-[42px]
								lg:text-[52px]
							"
						>
							Have an idea? Let's build{' '}
							<span className="text-brand">
								what's next.
							</span>
						</h2>

						{/* Description */}
						<p
							className="
								mx-auto mt-6 max-w-2xl
								text-[15px] leading-[1.8]
								text-slate-600
								sm:text-[16px]
							"
						>
							Whether you're launching a new product,
							modernizing existing systems, or exploring
							new opportunities, we're here to turn your
							vision into practical digital solutions.
						</p>

						{/* CTA Buttons */}
						<div
							className="
								mt-9 flex flex-col
								items-center justify-center
								gap-3
								sm:flex-row
							"
						>
							{/* Primary Button */}
							<Link
								to="/start-a-project"
								className="
									group inline-flex
									h-[52px] w-full
									items-center justify-center
									gap-3 rounded-xl
									bg-brand px-7
									font-display
									text-[16px] font-semibold
									text-white
									shadow-lg shadow-brand/20
									transition-all duration-300
									hover:-translate-y-0.5
									hover:bg-brand-600
									hover:shadow-brand/30
									active:translate-y-0
									sm:w-auto
								"
							>
								Start a Project

								<ArrowUpRight
									className="
										h-4 w-4
										transition-transform duration-300
										group-hover:translate-x-0.5
										group-hover:-translate-y-0.5
									"
									aria-hidden="true"
								/>
							</Link>

							{/* Secondary Button */}
							<Link
								to="/solutions"
								className="
									group inline-flex
									h-[52px] w-full
									items-center justify-center
									gap-3 rounded-xl
									border border-brand/20
									bg-white/90 px-7
									font-display
									text-[16px] font-semibold
									text-navy
									transition-all duration-300
									hover:-translate-y-0.5
									hover:border-brand/40
									hover:bg-white
									active:translate-y-0
									sm:w-auto
								"
							>
								Explore Our Solutions

								<ArrowRight
									className="
										h-4 w-4 text-brand
										transition-transform duration-300
										group-hover:translate-x-1
									"
									aria-hidden="true"
								/>
							</Link>
						</div>

						{/* Brand Tagline */}
						<p
							className="
								mt-9 text-[12px]
								font-medium tracking-wide
								text-slate-500
							"
						>
							Code. Launch. Grow.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}