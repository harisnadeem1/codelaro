import { Maximize2 } from 'lucide-react';
import type { WorkProject } from '@/data/work';
import { cn } from '@/lib/utils';

const ASPECT_CLASS = {
	wide: 'aspect-[16/10]',
	tall: 'aspect-[3/4]',
	square: 'aspect-square',
} as const;

/**
 * Product Visuals — dark gallery of editable screenshot placeholders.
 */
export function CaseStudyVisuals({ project }: { project: WorkProject }) {
	return (
		<section className="relative overflow-hidden bg-navy-900">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-60"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand/10 blur-3xl drift-slow"
			/>

			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						Product visuals
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						The product, in <span className="text-brand">the frame</span>.
					</h2>
					<p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
						Selected screens and views from the shipped product. Each slot below is an
						editable placeholder — replace it with the real screenshot when available.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{project.productVisuals.map((visual, i) => (
						<figure
							key={i}
							className={cn(
								'group relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 shadow-xl shadow-black/30',
								i === 0 && 'sm:col-span-2 lg:col-span-2',
							)}
						>
							<div className={cn('relative w-full bg-blueprint-grid-dark', ASPECT_CLASS[visual.aspect])}>
								<span
									aria-hidden
									className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand/15 blur-3xl drift-slow"
								/>
								<div className="absolute inset-0 grid place-items-center p-6">
									<div className="flex flex-col items-center gap-2.5 text-center">
										<span className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-white/[0.04] text-brand">
											<Maximize2 className="h-5 w-5" strokeWidth={1.8} />
										</span>
										<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
											{visual.alt}
										</p>
									</div>
								</div>
							</div>
							<figcaption className="border-t border-white/10 bg-white/[0.02] px-5 py-3.5 text-[13px] text-slate-400">
								{visual.caption}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
