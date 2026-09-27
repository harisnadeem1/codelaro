import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, CalendarClock } from 'lucide-react';

type CtaSectionProps = {
	eyebrow?: string;
	title?: ReactNode;
	subtitle?: string;
	background?: 'white' | 'off-white' | 'transparent';
};

const BACKGROUND_STYLES = {
	white: 'bg-white',
	'off-white': 'bg-[#F8FAFC]',
	transparent: 'bg-transparent',
};

export function CtaSection({
	eyebrow = "Let's Work Together",

	title = (
		<>
			Have an idea?
			<br />
			<span className="text-brand">
				Let's make it happen.
			</span>
		</>
	),

	subtitle =
		'From custom software development to AI-powered solutions, we help turn ambitious ideas into digital products built for lasting growth.',

	background = 'off-white',
}: CtaSectionProps) {
	return (
		<section
	id="contact"
	aria-labelledby="cta-heading"
	className={`
		relative scroll-mt-24
		py-16 sm:py-20 lg:py-20 lg:pt-0
		${BACKGROUND_STYLES[background]}
	`}
>
			{/* Outer container */}
			<div className="mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* CTA panel */}
				<div
					className="
						relative isolate
						overflow-hidden
						rounded-[24px]
						bg-navy
						px-6 py-16
						sm:rounded-[32px]
						sm:px-10 sm:py-20
						lg:rounded-[40px]
						lg:px-16 lg:py-16
					"
				>
					{/* Background decoration */}
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0"
					>
						{/* Subtle grid */}
						<div className="absolute inset-0 bg-blueprint-grid-dark opacity-20" />

						{/* Soft teal glow */}
						<div
							className="
								absolute -right-32 -top-40
								h-[450px] w-[450px]
								rounded-full
								bg-brand/10
								blur-[110px]
							"
						/>

						{/* Bottom accent */}
						<div
							className="
								absolute bottom-0
								left-[25%] right-[25%]
								h-px
								bg-gradient-to-r
								from-transparent
								via-brand/50
								to-transparent
							"
						/>
					</div>

					{/* Content */}
					<div
						className="
							relative z-10
							mx-auto max-w-3xl
							text-center
						"
					>
						{/* Eyebrow */}
						<div className="mb-6 flex items-center justify-center gap-3">
							<span className="h-px w-7 bg-brand/50" />

							<p
								className="
									font-mono text-[11px]
									font-semibold uppercase
									tracking-[0.22em]
									text-brand
								"
							>
								{eyebrow}
							</p>

							<span className="h-px w-7 bg-brand/50" />
						</div>

						{/* Heading */}
						<h2
							id="cta-heading"
							className="
								font-display
								text-[clamp(2.2rem,4vw,4.2rem)]
								font-semibold
								leading-[1.12]
								tracking-[-0.045em]
								text-white
							"
						>
							{title}
						</h2>

						{/* Description */}
						<p
							className="
								mx-auto mt-6
								max-w-xl
								text-[14px]
								leading-[1.85]
								text-slate-300
								sm:text-[16px]
							"
						>
							{subtitle}
						</p>

						{/* Buttons */}
						<div
							className="
								mt-9
								flex flex-col
								items-center justify-center
								gap-3
								sm:flex-row
							"
						>
							{/* Primary CTA */}
							<Link
								to="/contact"
								className="
									group
									inline-flex h-[52px]
									w-full items-center
									justify-center gap-3
									rounded-xl
									bg-brand
									px-7
									font-display
									text-[16px] font-semibold
									text-white
									transition-all duration-300
									hover:-translate-y-0.5
									hover:bg-brand-600
									focus-visible:outline
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
									sm:w-auto
								"
							>
								Start a Project

								<ArrowUpRight
									className="
										h-[17px] w-[17px]
										transition-transform duration-300
										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5
									"
								/>
							</Link>

							{/* Secondary CTA */}
							<Link
								to="/services"
								className="
									group
									inline-flex h-[52px]
									w-full items-center
									justify-center gap-2.5
									rounded-xl
									border border-white/20
									bg-white/[0.055]
									px-7
									font-display
									text-[16px] font-semibold
									text-white
									transition-all duration-300
									hover:border-brand/40
									hover:bg-white/10
									focus-visible:outline
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
									sm:w-auto
								"
							>
								

								Explore Services
							</Link>
						</div>

						{/* Subtle footer */}
						<p
							className="
								mt-9
								font-mono
								text-[10px]
								font-medium uppercase
								tracking-[0.18em]
								text-white/35
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