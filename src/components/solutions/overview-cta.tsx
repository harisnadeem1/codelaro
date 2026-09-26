import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function SolutionsOverviewCta() {
	return (
		<section
			id="contact"
			aria-labelledby="solutions-cta-heading"
			className="
				relative scroll-mt-24
				overflow-hidden
				bg-[#F8FAFC]
				px-4 py-16
				sm:px-6 sm:py-20
				lg:px-8 lg:py-20 lg:pt-0
			"
		>
			{/* Main CTA container */}

			<div
				className="
					relative isolate
					mx-auto w-full
					max-w-8xl
					overflow-hidden
					rounded-[28px]
					bg-navy
					sm:rounded-[36px]
					lg:rounded-[44px]
				"
			>
				{/* ------------------------------------------ */}
				{/* BACKGROUND DETAILS                         */}
				{/* ------------------------------------------ */}

				{/* Subtle central illumination */}

				<div
					aria-hidden="true"
					className="
						pointer-events-none
						absolute left-1/2 top-0
						h-[420px] w-[800px]
						-max-w-none
						-translate-x-1/2
						rounded-full
						bg-brand/[0.065]
						blur-[110px]
					"
				/>

				{/* Right architectural circles */}

				<div
					aria-hidden="true"
					className="
						pointer-events-none
						absolute -right-[260px] -top-[250px]
						h-[650px] w-[650px]
						rounded-full
						border border-white/[0.045]
					"
				/>

				<div
					aria-hidden="true"
					className="
						pointer-events-none
						absolute -right-[170px] -top-[160px]
						h-[470px] w-[470px]
						rounded-full
						border border-brand/[0.09]
					"
				/>

				{/* Left architectural decoration */}

				<div
					aria-hidden="true"
					className="
						pointer-events-none
						absolute -bottom-[280px] -left-[260px]
						h-[570px] w-[570px]
						rounded-full
						border border-white/[0.045]
					"
				/>

				{/* Top accent */}

				<div
					aria-hidden="true"
					className="
						absolute left-1/2 top-0
						h-[2px] w-[240px]
						-translate-x-1/2
						bg-gradient-to-r
						from-transparent
						via-brand/70
						to-transparent
					"
				/>

				{/* ------------------------------------------ */}
				{/* MAIN CONTENT                               */}
				{/* ------------------------------------------ */}

				<div
					className="
						relative z-10
						mx-auto flex
						max-w-5xl
						flex-col items-center
						px-6 py-20
						text-center
						sm:px-10 sm:py-20
						lg:px-12 lg:py-20
						xl:py-20
					"
				>
					{/* Eyebrow */}

					<div className="inline-flex items-center gap-3">
						<span className="h-px w-7 bg-brand/65" />

						<p
							className="
								font-mono
								text-[10px]
								font-semibold
								uppercase
								tracking-[0.22em]
								text-brand
								sm:text-[11px]
							"
						>
							Let's work together
						</p>

						<span className="h-px w-7 bg-brand/65" />
					</div>

					{/* Heading */}

					<h2
						id="solutions-cta-heading"
						className="
							
				mt-6 font-display
				text-[2.2rem] font-semibold
				leading-[1.08]
				tracking-[-0.025em]
				text-white
				sm:text-5xl
				md:text-[3.5rem]
			
						"
					>
						Not sure which solution
						<br className="hidden sm:block" />{' '}
						<span className="text-slate-400">
							Fits Your Vision?
						</span>
					</h2>

					{/* Description */}

					<p
						className="
							mt-7
							max-w-[610px]
							text-[15px]
							leading-[1.9]
							text-slate-300
							sm:text-[17px]
						"
					>
						Every great solution begins with a conversation.
						Share your challenges and goals with us, and
						let's explore the right technology to move
						your business forward.
					</p>

					{/* -------------------------------------- */}
					{/* CTA BUTTONS                            */}
					{/* -------------------------------------- */}

					<div
						className="
							mt-10
							flex w-full
							flex-col items-center
							justify-center
							gap-4
							sm:w-auto
							sm:flex-row
						"
					>
						{/* Primary */}

						<Link
							to="/start-a-project"
							className="
								group
								inline-flex
								min-h-[54px]
								w-full
								items-center
								justify-center
								gap-5
								rounded-xl
								bg-brand
								px-7
								font-display
								text-[16px]
								font-semibold
								text-white
								transition-all
								duration-300
								hover:-translate-y-0.5
								hover:bg-[#39CBC6]
								hover:shadow-[0_12px_35px_-14px_rgba(24,188,183,0.5)]
								active:scale-[0.98]
								focus-visible:outline
								focus-visible:outline-2
								focus-visible:outline-offset-4
								focus-visible:outline-white
								motion-reduce:transform-none
								sm:w-auto
							"
						>
							Discuss your Project

							<ArrowUpRight
								className="
									h-[18px] w-[18px]
									transition-transform
									duration-300
									group-hover:-translate-y-0.5
									group-hover:translate-x-0.5
									motion-reduce:transform-none
								"
								strokeWidth={1.8}
								aria-hidden="true"
							/>
						</Link>

						{/* Secondary */}

						<Link
							to="/services"
							className="
								group
								inline-flex
								min-h-[54px]
								w-full
								items-center
								justify-center
								gap-4
								rounded-xl
								border border-white/20
								bg-white/[0.035]
								px-7
								font-display
								text-[16px]
								font-semibold
								text-white
								transition-all
								duration-300
								hover:border-white/40
								hover:bg-white/[0.08]
								focus-visible:outline
								focus-visible:outline-2
								focus-visible:outline-offset-4
								focus-visible:outline-brand
								sm:w-auto
							"
						>
							Explore our services

							<ArrowRight
								className="
									h-[17px] w-[17px]
									text-brand
									transition-transform
									duration-300
									group-hover:translate-x-1
									motion-reduce:transform-none
								"
								strokeWidth={1.8}
								aria-hidden="true"
							/>
						</Link>
					</div>

					{/* Supporting statement */}

					<div
						className="
							mt-12
							flex items-center
							justify-center
							gap-3
						"
					>
						<span className="h-px w-7 bg-white/15" />

						<p
							className="
								font-mono
								text-[10px]
								font-medium
								uppercase
								tracking-[0.15em]
								text-slate-400
								sm:text-[11px]
							"
						>
							Code. Launch. Grow.
						</p>

						<span className="h-px w-7 bg-white/15" />
					</div>
				</div>

				{/* ------------------------------------------ */}
				{/* BOTTOM DECORATIVE DETAILS                 */}
				{/* ------------------------------------------ */}

				

				
			</div>
		</section>
	);
}