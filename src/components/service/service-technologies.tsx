import type { Service } from '@/data/services';

export function ServiceTechnologies({ service }: { service: Service }) {
	return (
		<section className="relative border-y border-slate-200/80 bg-white">
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
					<div>
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
							Technologies
						</p>
						<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
							The stack we use
						</h2>
						<p className="mt-4 text-[15px] leading-relaxed text-slate-500">
							We choose tools that fit your team, scale and constraints — not a fixed
							stack. These are the technologies we commonly reach for in this service.
						</p>
					</div>

					<div className="flex flex-wrap gap-2.5 self-start md:self-center">
						{service.technologies.map((tech) => (
							<span
								key={tech}
								className="inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-[#F8FAFC] px-4 py-2.5 text-[14px] font-semibold text-navy transition-colors hover:border-brand/40 hover:bg-brand/5"
							>
								<span className="h-1.5 w-1.5 rounded-full bg-brand" />
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
