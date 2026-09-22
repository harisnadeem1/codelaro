import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { REASONS } from '@/data/why-codelaro';
import { WHY_FRAMING } from '@/data/company';

function HeroVisual() {
	return (
		<div className="relative mx-auto mt-14 w-full max-w-md lg:mt-0 lg:max-w-none">
			<div className="drift-slow pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute inset-0 -z-10 rounded-[1.75rem] bg-blueprint-grid mask-fade-b opacity-70" />

			<div className="relative min-h-[420px] sm:min-h-[460px] lg:min-h-[520px]">
				<div
					className="float-a scale-in rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-xl shadow-navy/10 ring-1 ring-navy/5 backdrop-blur-sm"
					style={{ animationDelay: '0.7s' }}
				>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
								<ShieldCheck className="h-4 w-4" strokeWidth={2} />
							</span>
							<p className="text-[13px] font-semibold text-navy">Why teams choose us</p>
						</div>
						<span className="rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
							6 reasons
						</span>
					</div>
					<div className="mt-4 space-y-2.5">
						{REASONS.map((reason, i) => (
							<div key={reason.number} className="flex items-center gap-2.5">
								<span className="font-mono text-[11px] font-semibold text-brand/70">
									{reason.number}
								</span>
								<span className="truncate text-[12px] font-medium text-navy">
									{reason.title}
								</span>
								<span
									className={`h-2 rounded-full bg-gradient-to-r from-brand/30 to-brand/70 ${
										i % 2 === 0 ? 'w-2/3' : 'w-1/2'
									}`}
								/>
							</div>
						))}
					</div>
				</div>

				<div
					className="float-b scale-in absolute -bottom-6 -left-6 w-56 rounded-xl border border-slate-200/80 bg-white/95 p-4 shadow-xl shadow-navy/10 ring-1 ring-navy/5 backdrop-blur-sm"
					style={{ animationDelay: '0.95s' }}
				>
					<p className="text-[12px] font-semibold text-navy">A partner, not a vendor</p>
					<p className="mt-2 text-[11px] leading-relaxed text-slate-400">
						Invested in your outcome long after the first release ships.
					</p>
				</div>

				<div
					className="float-a scale-in absolute -right-4 top-6 flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 py-2 pl-2 pr-3.5 shadow-lg shadow-navy/10 ring-1 ring-navy/5 backdrop-blur-sm"
					style={{ animationDelay: '1.15s' }}
				>
					<span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-brand">
						<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
					</span>
					<span className="text-[12px] font-semibold text-navy">Senior-only</span>
				</div>

				<span className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-brand/60" />
				<span className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-brand/60" />
			</div>
		</div>
	);
}

export function WhyHero() {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

			<div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8 md:pt-40 lg:pb-28">
				<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-7">
						<div
							className="rise-in inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm"
							style={{ animationDelay: '0.05s' }}
						>
							<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
								Company
							</span>
							<span className="h-3 w-px bg-slate-200" />
							<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400">
								Why Codelaro
							</span>
						</div>

						<h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
							<span className="rise-in block" style={{ animationDelay: '0.15s' }}>
								More than development.{' '}
								<span className="text-brand">A technology partner.</span>
							</span>
						</h1>

						<p
							className="rise-in mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
							style={{ animationDelay: '0.6s' }}
						>
							{WHY_FRAMING.lead}
						</p>

						<div
							className="rise-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
							style={{ animationDelay: '0.72s' }}
						>
							<a
								href="#contact"
								className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
							>
								Start a conversation
								<ArrowRight className="h-4 w-4" />
							</a>
							<Link
								to="/company/process"
								className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 font-display text-[15px] font-semibold text-navy transition-all hover:border-navy/30 hover:bg-slate-50 active:scale-[0.98] sm:w-auto"
							>
								See our process
								<ArrowUpRight className="h-4 w-4 text-brand" />
							</Link>
						</div>
					</div>

					<div className="lg:col-span-5">
						<HeroVisual />
					</div>
				</div>
			</div>
		</section>
	);
}
