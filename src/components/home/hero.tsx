import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Check, Sparkles, Cpu, Activity } from 'lucide-react';

/* ---------- Right-side technology visual ---------- */
/* ---------- Right-side product development visual ---------- */

function ProductBuildCard() {
	const stages = [
		{
			label: 'Product Design',
			description: 'UX, interface & architecture',
			status: 'complete',
		},
		{
			label: 'Development',
			description: 'Frontend & backend systems',
			status: 'complete',
		},
		{
			label: 'AI & Integrations',
			description: 'Automation & connected services',
			status: 'active',
		},
		{
			label: 'Launch',
			description: 'Production deployment',
			status: 'pending',
		},
	] as const;

	return (
		<div
			className="
				scale-in relative overflow-hidden
				rounded-[24px]
				border border-white/70
				bg-white/80
				shadow-[0_30px_80px_-30px_rgba(15,23,42,0.30)]
				ring-1 ring-navy/[0.04]
				backdrop-blur-xl
			"
			style={{ animationDelay: '0.65s' }}
		>
			{/* Browser / workspace header */}
			<div className="flex h-12 items-center justify-between border-b border-slate-200/70 px-4 sm:px-5">
				<div className="flex items-center gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
					<span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
					<span className="h-2.5 w-2.5 rounded-full bg-brand/60" />
				</div>

				<div
					className="
						rounded-md border border-slate-200/80
						bg-slate-50/80 px-3 py-1
						text-[10px] font-medium text-slate-400
					"
				>
					codelaro / digital-product
				</div>

				<span className="h-2 w-2 rounded-full bg-brand" />
			</div>

			{/* Main workspace */}
			<div className="relative p-5 sm:p-6">
				{/* Subtle internal glow */}
				<div
					className="
						pointer-events-none absolute
						-right-16 -top-16 h-44 w-44
						rounded-full bg-brand/[0.08] blur-3xl
					"
				/>

				{/* Heading */}
				<div className="relative flex items-start justify-between gap-4">
					<div>
						<div className="mb-2 flex items-center gap-2">
							<span className="h-1.5 w-1.5 rounded-full bg-brand" />

							<span
								className="
									text-[10px] font-bold uppercase
									tracking-[0.16em] text-brand-700
								"
							>
								Product Build
							</span>
						</div>

						<h3 className="font-display text-xl font-semibold tracking-tight text-navy sm:text-2xl">
							Building your
							<br />
							digital product
						</h3>
					</div>

					<div
						className="
							hidden rounded-xl border border-slate-200/80
							bg-white/80 px-3 py-2 text-right
							shadow-sm sm:block
						"
					>
						<p className="text-[10px] font-medium text-slate-400">
							Build progress
						</p>

						<p className="mt-0.5 text-lg font-bold text-navy">
							86%
						</p>
					</div>
				</div>

				{/* Progress bar */}
				<div className="relative mt-5">
					<div className="flex items-center justify-between text-[10px] font-medium">
						<span className="text-slate-400">
							Development progress
						</span>

						<span className="text-brand-700">72%</span>
					</div>

					<div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
						<div className="h-full w-[72%] rounded-full bg-brand" />
					</div>
				</div>

				{/* Development stages */}
				<div className="relative mt-6 space-y-2">
					{stages.map((stage, index) => {
						const complete = stage.status === 'complete';
						const active = stage.status === 'active';

						return (
							<div
								key={stage.label}
								className={[
									'group flex items-center gap-3 rounded-xl',
									'border px-3.5 py-3',
									'transition-all duration-300',
									active
										? 'border-brand/20 bg-brand/[0.055]'
										: 'border-slate-100/90 bg-white/55',
								].join(' ')}
							>
								{/* Status */}
								<div
									className={[
										'grid h-8 w-8 shrink-0 place-items-center rounded-lg',
										complete
											? 'bg-navy text-white'
											: active
												? 'bg-brand text-white shadow-sm shadow-brand/20'
												: 'bg-slate-100 text-slate-400',
									].join(' ')}
								>
									{complete ? (
										<Check
											className="h-4 w-4"
											strokeWidth={2.4}
										/>
									) : active ? (
										<span className="relative flex h-2.5 w-2.5">
											<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
											<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
										</span>
									) : (
										<span className="text-[11px] font-semibold">
											{index + 1}
										</span>
									)}
								</div>

								{/* Stage information */}
								<div className="min-w-0 flex-1">
									<p className="text-[13px] font-semibold text-navy">
										{stage.label}
									</p>

									<p className="mt-0.5 text-[11px] text-slate-400">
										{stage.description}
									</p>
								</div>

								{/* State */}
								{complete && (
									<span className="hidden text-[10px] font-semibold text-slate-400 sm:block">
										Complete
									</span>
								)}

								{active && (
									<span
										className="
											hidden rounded-full bg-brand/10
											px-2 py-1 text-[10px]
											font-semibold text-brand-700
											sm:block
										"
									>
										In progress
									</span>
								)}
							</div>
						);
					})}
				</div>

				{/* Bottom technology line */}
				<div
					className="
						relative mt-5 flex items-center
						justify-between border-t border-slate-100 pt-4
					"
				>
					<div className="flex items-center gap-2">
						<span className="flex -space-x-1.5">
							<span
								className="
									grid h-6 w-6 place-items-center rounded-full
									border-2 border-white bg-navy
									text-[8px] font-bold text-white
								"
							>
								FE
							</span>

							<span
								className="
									grid h-6 w-6 place-items-center rounded-full
									border-2 border-white bg-slate-700
									text-[8px] font-bold text-white
								"
							>
								BE
							</span>

							<span
								className="
									grid h-6 w-6 place-items-center rounded-full
									border-2 border-white bg-brand
									text-[8px] font-bold text-white
								"
							>
								AI
							</span>
						</span>

						<span className="text-[10px] font-medium text-slate-400">
							Systems connected
						</span>
					</div>

					<span className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-700">
						<span className="h-1.5 w-1.5 rounded-full bg-brand" />
						Active
					</span>
				</div>
			</div>
		</div>
	);
}


/* ---------- Floating deployment status ---------- */

function DeployCard() {
	return (
		<div
			className="
				float-b scale-in
				absolute -bottom-5 -left-3
				z-20 w-[210px]
				rounded-2xl
				border border-white/80
				bg-white/85 p-3.5
				shadow-[0_18px_50px_-18px_rgba(15,23,42,0.35)]
				ring-1 ring-navy/[0.04]
				backdrop-blur-xl
				sm:-left-7 sm:w-56 sm:p-4
			"
			style={{ animationDelay: '0.95s' }}
		>
			<div className="flex items-center gap-2.5">
				<span
					className="
						grid h-9 w-9 shrink-0
						place-items-center rounded-xl
						bg-brand/10 text-brand-700
					"
				>
					<Check className="h-4 w-4" strokeWidth={2.5} />
				</span>

				<div className="min-w-0">
					<div className="flex items-center gap-1.5">
						<p className="truncate text-[12px] font-semibold text-navy sm:text-[13px]">
							Ready to deploy
						</p>

						<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
					</div>

					<p className="mt-0.5 text-[10px] text-slate-400 sm:text-[11px]">
						Production environment
					</p>
				</div>
			</div>

			<div className="mt-3 flex items-center gap-1">
				<span className="h-1 rounded-full bg-brand" style={{ width: '25%' }} />
				<span className="h-1 rounded-full bg-brand" style={{ width: '25%' }} />
				<span className="h-1 rounded-full bg-brand" style={{ width: '25%' }} />
				<span className="h-1 rounded-full bg-slate-100" style={{ width: '25%' }} />
			</div>
		</div>
	);
}


/* ---------- Floating AI status ---------- */

function AiChip() {
	return (
		<div
			className="
				float-a scale-in
				absolute -right-2 top-5 z-20
				flex items-center gap-2
				rounded-full
				border border-white/80
				bg-white/85
				py-2 pl-2 pr-3.5
				shadow-[0_14px_40px_-16px_rgba(15,23,42,0.35)]
				ring-1 ring-navy/[0.04]
				backdrop-blur-xl
				sm:-right-5
			"
			style={{ animationDelay: '1.1s' }}
		>
			<span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white">
				<Cpu className="h-4 w-4" strokeWidth={2} />
			</span>

			<div>
				<p className="text-[11px] font-semibold leading-none text-navy sm:text-[12px]">
					AI integrated
				</p>

				<p className="mt-1 text-[9px] leading-none text-slate-400">
					Automation connected
				</p>
			</div>

			<span className="relative ml-1 flex h-2 w-2">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
				<span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
			</span>
		</div>
	);
}


/* ---------- Background connector details ---------- */

function ConnectorLines() {
	return (
		<svg
			className="pointer-events-none absolute inset-0 h-full w-full"
			viewBox="0 0 500 560"
			fill="none"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<path
				d="M40 110 C140 55 335 70 455 125"
				stroke="#18BCB7"
				strokeWidth="1.2"
				strokeDasharray="4 7"
				opacity="0.3"
			/>

			<path
				d="M60 440 C170 500 355 470 455 390"
				stroke="#0F172A"
				strokeWidth="1"
				strokeDasharray="4 8"
				opacity="0.12"
			/>

			<circle
				cx="40"
				cy="110"
				r="3.5"
				fill="#18BCB7"
				className="node-pulse"
			/>

			<circle
				cx="455"
				cy="125"
				r="3.5"
				fill="#18BCB7"
				className="node-pulse"
				style={{ animationDelay: '1s' }}
			/>

			<circle
				cx="455"
				cy="390"
				r="3"
				fill="#0F172A"
				opacity="0.3"
				className="node-pulse"
				style={{ animationDelay: '1.5s' }}
			/>
		</svg>
	);
}


/* ---------- Complete hero visual ---------- */

function HeroVisual() {
	return (
		<div
			className="
				relative mx-auto mt-12
				w-full max-w-[500px]
				lg:mt-0 lg:max-w-none
			"
		>
			{/* Large atmospheric glow */}
			<div
				className="
					drift-slow pointer-events-none
					absolute left-1/2 top-1/2 -z-20
					h-[80%] w-[90%]
					-translate-x-1/2 -translate-y-1/2
					rounded-full bg-brand/[0.12]
					blur-[80px]
				"
			/>

			{/* Blueprint backdrop */}
			<div
				className="
					pointer-events-none absolute
					-inset-5 -z-10
					rounded-[32px]
					bg-blueprint-grid
					opacity-60
					mask-fade-b
				"
			/>

			<div className="relative min-h-[470px] sm:min-h-[520px] lg:min-h-[560px]">
				<ConnectorLines />

				{/* Main product interface */}
				<div className="relative z-10 pt-9 sm:pr-5 sm:pt-11">
					<ProductBuildCard />
				</div>

				<AiChip />
				<DeployCard />

				{/* Small ambient nodes */}
				<span
					className="
						node-pulse pointer-events-none
						absolute left-2 top-[36%]
						h-2 w-2 rounded-full bg-brand/60
					"
				/>

				<span
					className="
						node-pulse pointer-events-none
						absolute bottom-[18%] right-3
						h-1.5 w-1.5 rounded-full bg-navy/30
					"
					style={{ animationDelay: '1.4s' }}
				/>
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

			<div className="relative mx-auto w-full max-w-8xl px-5 pb-24 pt-32 sm:px-8 md:pt-20 lg:pb-28">
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
							</span>
						</h1>

						<p
							className="rise-in mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
							style={{ animationDelay: '0.6s' }}
						>
						Codelaro helps startups and growing businesses turn ambitious ideas into high-performing websites, custom software and AI-powered solutions.
						</p>

						<div
							className="rise-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
							style={{ animationDelay: '0.72s' }}
						>
						<Link
    to="/contact"
    aria-label="Talk to a Codelaro development expert"
    className="
        group flex h-12 w-full
        items-center justify-center gap-2
        rounded-lg bg-brand px-7
        font-display text-base font-semibold text-white
        shadow-lg shadow-brand/25
        transition-all duration-300
        hover:bg-brand-600
        hover:shadow-brand/40
        active:scale-[0.98]
		hover:-translate-y-0.5
        sm:w-auto
    "
>
    Talk to an Expert

    <ArrowUpRight
        className="
            h-4 w-4
            transition-transform duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            motion-reduce:transform-none
        "
        strokeWidth={2}
        aria-hidden="true"
    />
</Link>
						
						</div>

						{/* Quiet trust line */}
						<div className="rise-in mt-8 flex items-center gap-4 text-[14px] text-slate-600" style={{ animationDelay: '0.85s' }}>
							<span className="flex items-center gap-1.5">
								<span className="h-1.5 w-1.5 rounded-full bg-brand" />
								Product-focused development
							</span>
							<span className="h-3 w-px bg-slate-200" />
							<span className="flex items-center gap-1.5">
								<span className="h-1.5 w-1.5 rounded-full bg-brand" />
								End-to-end delivery
							</span>
							<a
								href="/work"
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
