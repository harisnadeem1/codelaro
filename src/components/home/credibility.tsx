import { ArrowUpRight, Check } from 'lucide-react';

const principles = [
	{
		number: '01',
		title: 'Understand before we build',
		description:
			'We start with your goals, users and challenges so the product solves the right problem.',
	},
	{
		number: '02',
		title: 'Build for what comes next',
		description:
			'We create maintainable, scalable systems that can evolve as your business grows.',
	},
	{
		number: '03',
		title: 'Measure success by impact',
		description:
			'Technology should improve experiences, simplify operations and create measurable business value.',
	},
];

export function Credibility() {
	return (
		<section className="relative overflow-hidden bg-white">
			{/* Subtle background */}
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-[0.18]" />

			<div className="relative mx-auto max-w-8xl px-5 py-20 sm:px-8 md:py-20 lg:py-20">
				<div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">

					{/* LEFT */}
					<div className="lg:sticky lg:top-32 lg:self-start">
						<div className="flex items-center gap-3">
							<span className="h-px w-8 bg-brand" />

							<p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-700">
								How we think
							</p>
						</div>

						<h2 className="mt-6 max-w-xl font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.025em] text-navy sm:text-4xl md:text-[2.8rem] lg:text-[3rem]">
							We don't just build software.
							<span className="block text-slate-400">
								We build around the problem.
							</span>
						</h2>

						<p className="mt-6 max-w-lg text-[15px] leading-7 text-slate-600 sm:text-base">
							Every Codelaro project starts with understanding what
							your business actually needs — then choosing the right
							technology to make it happen.
						</p>

						{/* Small credibility detail */}
						<div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-6">
							<span className="flex items-center gap-2 text-[13px] font-medium text-navy">
								<span className="grid h-5 w-5 place-items-center rounded-full bg-brand/10 text-brand-700">
									<Check className="h-3 w-3" strokeWidth={2.5} />
								</span>
								Product thinking
							</span>

							<span className="flex items-center gap-2 text-[13px] font-medium text-navy">
								<span className="grid h-5 w-5 place-items-center rounded-full bg-brand/10 text-brand-700">
									<Check className="h-3 w-3" strokeWidth={2.5} />
								</span>
								Scalable engineering
							</span>
						</div>
					</div>

					{/* RIGHT */}
					<div className="relative">
						{/* Vertical rail */}
						<div className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-slate-200 sm:block" />

						<div className="space-y-2">
							{principles.map((principle, index) => (
								<div
									key={principle.number}
									className="
										group relative
										grid gap-5
										border-b border-slate-200/80
										py-8
										first:pt-0
										last:border-b-0
										sm:grid-cols-[40px_1fr_auto]
										sm:gap-6
										sm:py-10
									"
								>
									{/* Number */}
									<div
										className="
											relative z-10
											flex h-10 w-10 items-center justify-center
											rounded-full
											border border-slate-200
											bg-white
											text-[11px] font-bold text-slate-400
											transition-all duration-300
											group-hover:border-brand
											group-hover:bg-brand
											group-hover:text-white
										"
									>
										{principle.number}
									</div>

									{/* Content */}
									<div className="sm:pt-1">
										<h3
											className="
												font-display text-xl font-semibold
												tracking-tight text-navy
												sm:text-[1.35rem]
											"
										>
											{principle.title}
										</h3>

										<p className="mt-2 max-w-lg text-[14px] leading-6 text-slate-500 sm:text-[15px]">
											{principle.description}
										</p>
									</div>

									{/* Detail */}
									<div
										className="
											hidden h-9 w-9
											items-center justify-center
											self-center rounded-full
											border border-slate-200
											text-slate-400
											transition-all duration-300
											group-hover:border-brand/30
											group-hover:text-brand
											sm:flex
										"
									>
										<ArrowUpRight
											className="h-4 w-4"
											strokeWidth={1.8}
										/>
									</div>
								</div>
							))}
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}