import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Check, Sparkles, Cpu, Activity } from 'lucide-react';

/* ---------- Right-side technology visual ---------- */

function AnalyticsCard() {
	const bars = [38, 52, 46, 68, 60, 84, 96];
	return (
		<div className="float-a scale-in rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-xl shadow-navy/10 ring-1 ring-navy/5 backdrop-blur-sm" style={{ animationDelay: '0.7s' }}>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
						<Activity className="h-4 w-4" strokeWidth={2} />
					</span>
					<div>
						<p className="text-[13px] font-semibold text-navy">Product Analytics</p>
						<p className="text-[11px] text-slate-400">Live · last 7 days</p>
					</div>
				</div>
				<span className="rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
					+38%
				</span>
			</div>

			<div className="mt-4 flex h-24 items-end gap-1.5">
				{bars.map((h, i) => (
					<div
						key={i}
						className="flex-1 rounded-t-sm bg-gradient-to-t from-brand/20 to-brand/70"
						style={{ height: `${h}%` }}
					/>
				))}
			</div>

			<svg viewBox="0 0 280 40" className="mt-3 h-9 w-full" preserveAspectRatio="none" aria-hidden="true">
				<polyline
					points="0,34 40,28 80,31 120,18 160,22 200,9 240,12 280,3"
					fill="none"
					stroke="#18BCB7"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<circle cx="280" cy="3" r="3.5" fill="#18BCB7" />
			</svg>
		</div>
	);
}

function DeployCard() {
	return (
		<div className="float-b scale-in absolute -bottom-6 -left-6 w-56 rounded-xl border border-slate-200/80 bg-white/95 p-4 shadow-xl shadow-navy/10 ring-1 ring-navy/5 backdrop-blur-sm" style={{ animationDelay: '0.95s' }}>
			<div className="flex items-center gap-2.5">
				<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
					<Check className="h-4 w-4" strokeWidth={2.5} />
				</span>
				<div className="min-w-0">
					<p className="truncate text-[13px] font-semibold text-navy">Deploy succeeded</p>
					<p className="text-[11px] text-slate-400">shipped to production</p>
				</div>
			</div>
			<div className="mt-3 flex items-center gap-1.5">
				<span className="h-1.5 flex-1 rounded-full bg-slate-100" />
				<span className="h-1.5 flex-1 rounded-full bg-slate-100" />
				<span className="h-1.5 flex-1 rounded-full bg-slate-100" />
				<span className="h-1.5 flex-1 rounded-full bg-brand" />
			</div>
		</div>
	);
}

function AiChip() {
	return (
		<div className="float-a scale-in absolute -right-4 top-6 flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 py-2 pl-2 pr-3.5 shadow-lg shadow-navy/10 ring-1 ring-navy/5 backdrop-blur-sm" style={{ animationDelay: '1.15s' }}>
			<span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-brand">
				<Cpu className="h-3.5 w-3.5" strokeWidth={2} />
			</span>
			<span className="text-[12px] font-semibold text-navy">AI automation</span>
			<span className="relative flex h-2 w-2">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
				<span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
			</span>
		</div>
	);
}

function ConnectorLines() {
	return (
		<svg
			className="pointer-events-none absolute inset-0 h-full w-full"
			viewBox="0 0 400 480"
			fill="none"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<line x1="60" y1="120" x2="330" y2="70" stroke="#18BCB7" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.45" />
			<line x1="120" y1="300" x2="300" y2="180" stroke="#0F172A" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.18" />
			<circle cx="60" cy="120" r="4" fill="#18BCB7" className="node-pulse" />
			<circle cx="330" cy="70" r="4" fill="#18BCB7" className="node-pulse" style={{ animationDelay: '1s' }} />
			<circle cx="120" cy="300" r="3.5" fill="#0F172A" opacity="0.35" className="node-pulse" style={{ animationDelay: '1.6s' }} />
		</svg>
	);
}

function HeroVisual() {
	return (
		<div className="relative mx-auto mt-14 w-full max-w-md lg:mt-0 lg:max-w-none">
			{/* Teal glow + grid panel behind the fragments */}
			<div className="drift-slow pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute inset-0 -z-10 rounded-[1.75rem] bg-blueprint-grid mask-fade-b opacity-70" />

			<div className="relative min-h-[420px] sm:min-h-[460px] lg:min-h-[520px]">
				<ConnectorLines />

				<div className="relative pt-10 pr-8 sm:pr-12">
					<AnalyticsCard />
				</div>

				<AiChip />
				<DeployCard />

				{/* Corner brackets framing the composition */}
				<span className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-brand/60" />
				<span className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-brand/60" />
			</div>
		</div>
	);
}

/* ---------- Hero ---------- */

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			{/* Background layers */}
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

			<div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8 md:pt-40 lg:pb-28">
				<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
					{/* Left — content */}
					<div className="lg:col-span-7">
						{/* Eyebrow / brand message */}
						<div className="rise-in inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm" style={{ animationDelay: '0.05s' }}>
							<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
								Code.
							</span>
							<span className="h-3 w-px bg-slate-200" />
							<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-navy">
								Launch.
							</span>
							<span className="h-3 w-px bg-slate-200" />
							<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400">
								Grow.
							</span>
						</div>

						<h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
							<span className="rise-in block" style={{ animationDelay: '0.15s' }}>
								We Build{' '}
								<span className="text-brand">Digital Products</span>
							</span>
							<span className="rise-in block" style={{ animationDelay: '0.3s' }}>
								That Move Businesses
							</span>
							<span className="rise-in relative block" style={{ animationDelay: '0.45s' }}>
								Forward.
								<span className="absolute -bottom-1 left-0 h-1 w-24 rounded-full bg-brand/40 sm:w-32" />
							</span>
						</h1>

						<p
							className="rise-in mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
							style={{ animationDelay: '0.6s' }}
						>
							From powerful software and mobile apps to AI automation and seamless
							integrations, Codelaro turns ambitious ideas into scalable digital
							experiences.
						</p>

						<div
							className="rise-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
							style={{ animationDelay: '0.72s' }}
						>
							<Link
								to="#contact"
								className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
							>
								Start a Project
								<ArrowRight className="h-4 w-4" />
							</Link>
							<Link
								to="#work"
								className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 font-display text-[15px] font-semibold text-navy transition-all hover:border-navy/30 hover:bg-slate-50 active:scale-[0.98] sm:w-auto"
							>
								<Sparkles className="h-4 w-4 text-brand" />
								Explore Our Work
							</Link>
						</div>

						{/* Quiet trust line */}
						<div className="rise-in mt-8 flex items-center gap-4 text-[13px] text-slate-400" style={{ animationDelay: '0.85s' }}>
							<span className="flex items-center gap-1.5">
								<span className="h-1.5 w-1.5 rounded-full bg-brand" />
								Senior-only teams
							</span>
							<span className="h-3 w-px bg-slate-200" />
							<span className="flex items-center gap-1.5">
								<span className="h-1.5 w-1.5 rounded-full bg-brand" />
								End-to-end delivery
							</span>
							<a
								href="#work"
								className="ml-auto hidden items-center gap-1 font-medium text-navy transition-colors hover:text-brand sm:flex"
							>
								See case studies
								<ArrowUpRight className="h-3.5 w-3.5" />
							</a>
						</div>
					</div>

					{/* Right — visual */}
					<div className="lg:col-span-5">
						<HeroVisual />
					</div>
				</div>
			</div>
		</section>
	);
}
