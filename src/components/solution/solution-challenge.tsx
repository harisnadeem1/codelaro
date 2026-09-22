import type { Solution } from '@/data/solutions';

/* A small "friction" diagram: manual handoffs breaking between stages. */
function FrictionDiagram() {
	return (
		<div className="relative mt-8 hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg shadow-navy/5 md:block">
			<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
				Where it breaks today
			</p>
			<div className="mt-4 flex items-center gap-2">
				{['Input', 'Manual', 'Re-key', 'Approve', 'Output'].map((label, i) => (
					<div key={label} className="flex flex-1 items-center gap-2">
						<span
							className={`flex-1 rounded-lg px-2 py-3 text-center text-[11px] font-semibold ${
								i === 1 || i === 2
									? 'bg-red-50 text-red-500 ring-1 ring-red-200/60'
									: 'bg-slate-50 text-slate-500 ring-1 ring-slate-200/70'
							}`}
						>
							{label}
						</span>
						{i < 4 && (
							<span
								className={`h-px w-3 ${i === 1 || i === 2 ? 'bg-red-300/70' : 'bg-slate-200'}`}
								aria-hidden
							/>
						)}
					</div>
				))}
			</div>
			<p className="mt-3 text-[12px] leading-relaxed text-slate-400">
				Manual steps and re-keyed data are where time, accuracy and capacity leak away.
			</p>
		</div>
	);
}

export function SolutionChallenge({ solution }: { solution: Solution }) {
	return (
		<section className="relative bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
					<div className="md:sticky md:top-28 md:self-start">
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
							The challenge
						</p>
						<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
							The problem this solves
						</h2>
						<p className="mt-4 text-[15px] leading-relaxed text-slate-500">
							Before the solution, there is a real business pain. Here is what it looks
							like — and why it does not go away on its own.
						</p>
						<FrictionDiagram />
					</div>

					<div className="space-y-5">
						{solution.challenge.map((paragraph, i) => (
							<p
								key={i}
								className="text-[17px] leading-relaxed text-slate-600 sm:text-lg"
							>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
