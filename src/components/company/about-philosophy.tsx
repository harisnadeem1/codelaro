import { ABOUT } from '@/data/company';

/**
 * Code. Launch. Grow. philosophy — dark editorial surface with the three
 * movements that define every Codelaro engagement.
 */
export function AboutPhilosophy() {
	return (
		<section className="relative overflow-hidden bg-navy-900">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-60"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand/10 blur-3xl drift-slow"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-brand/8 blur-3xl drift-slow"
			/>

			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
				<div className="mx-auto max-w-2xl text-center">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						Our philosophy
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						Code. Launch. <span className="text-brand">Grow.</span>
					</h2>
					<p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
						Three movements that shape every engagement — from the first line of code to
						long after go-live.
					</p>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
					{ABOUT.philosophy.map((item, i) => (
						<div
							key={item.word}
							className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7"
						>
							<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand/70">
								0{i + 1}
							</span>
							<h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white">
								{item.word}
								<span className="text-brand">.</span>
							</h3>
							<p className="mt-4 text-[14px] leading-relaxed text-slate-400">
								{item.description}
							</p>
						</div>
					))}
				</div>

				<div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-10 sm:gap-x-10">
					{ABOUT.philosophy.map((item, i) => (
						<div key={item.word} className="flex items-center gap-6 sm:gap-10">
							<span className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
								{item.word}
								<span className="text-brand">.</span>
							</span>
							{i < ABOUT.philosophy.length - 1 && (
								<span
									aria-hidden
									className="hidden h-1.5 w-1.5 rounded-full bg-brand/60 sm:block"
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
