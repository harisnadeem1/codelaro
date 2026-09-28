import { Link } from 'react-router';
import {
	ArrowRight,
	ArrowUpRight,
	ArrowDownRight,
	ExternalLink,
	Globe2,
	Layers3,
	Code2,
	Database,
	Zap,
	Check,
	MousePointer2,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Hero Visual                                                                */
/* -------------------------------------------------------------------------- */

function HeroVisual() {
	return (
		<div
			className="
				relative mx-auto
				w-full max-w-[540px]
				lg:mx-0 lg:ml-auto
				lg:max-w-[580px]
			"
			aria-hidden="true"
		>
			{/* Ambient background */}
			<div className="pointer-events-none absolute -inset-8 rounded-full bg-brand/[0.06] blur-[70px]" />

			{/* Decorative grid */}
			<div
				className="
					pointer-events-none absolute
					-inset-5
					bg-blueprint-grid
					mask-fade-b
					opacity-40
				"
			/>

			{/* Main workspace */}
			<div
				className="
					relative overflow-hidden
					rounded-[22px]
					border border-slate-200
					bg-white
					shadow-[0_24px_80px_-30px_rgba(15,23,42,0.20)]
					sm:rounded-[26px]
				"
			>
				{/* Browser toolbar */}
				<div className="flex h-12 items-center justify-between border-b border-slate-100 bg-white px-4 sm:px-5">
					<div className="flex items-center gap-1.5">
						<span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
						<span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
						<span className="h-2.5 w-2.5 rounded-full bg-brand/40" />
					</div>

					<div className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50 px-3 py-1">
						<Globe2 className="h-3 w-3 text-slate-400" />
						<span className="font-mono text-[10px] text-slate-400">
							project.workspace
						</span>
					</div>

					<ExternalLink className="h-3.5 w-3.5 text-slate-300" />
				</div>

				{/* Workspace content */}
				<div className="grid min-h-[340px] grid-cols-[52px_minmax(0,1fr)] sm:min-h-[375px] sm:grid-cols-[65px_minmax(0,1fr)]">
					{/* Left navigation */}
					<div className="flex flex-col items-center gap-5 border-r border-slate-100 bg-[#FBFCFD] py-5">
						<div className="grid h-8 w-8 place-items-center rounded-lg bg-navy text-white shadow-sm">
							<Layers3 className="h-4 w-4" />
						</div>

						<div className="h-px w-6 bg-slate-200" />

						<div className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
							<Globe2 className="h-4 w-4" />
						</div>

						<Code2 className="h-4 w-4 text-slate-300" />
						<Database className="h-4 w-4 text-slate-300" />
						<Zap className="h-4 w-4 text-slate-300" />

						<div className="mt-auto h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-brand/30 to-navy/20 shadow-sm" />
					</div>

					{/* Main content */}
					<div className="min-w-0 p-4 sm:p-6">
						{/* Header */}
						<div className="flex items-start justify-between gap-2">
							<div>
								<div className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-brand" />

									<span className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-brand-700">
										Project overview
									</span>
								</div>

								<h3 className="mt-2 font-display text-lg font-bold tracking-tight text-navy sm:text-xl">
									From idea to impact.
								</h3>

								<p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
									Design. Engineering. Delivery.
								</p>
							</div>

							<div className="hidden items-center gap-1.5 rounded-full border border-brand/15 bg-brand/[0.07] px-2.5 py-1 sm:flex">
								<span className="h-1.5 w-1.5 rounded-full bg-brand" />

								<span className="text-[10px] font-semibold text-brand-700">
									Workflow
								</span>
							</div>
						</div>

						{/* Product preview */}
						<div
							className="
								relative mt-5 overflow-hidden
								rounded-xl border border-slate-200
								bg-[#F8FAFC]
								p-3
								sm:mt-6 sm:p-4
							"
						>
							{/* Preview header */}
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-brand shadow-sm">
										<Layers3 className="h-3.5 w-3.5" />
									</span>

									<span className="text-[11px] font-semibold text-navy">
										Product architecture
									</span>
								</div>

								<div className="flex gap-1">
									<span className="h-1 w-1 rounded-full bg-slate-300" />
									<span className="h-1 w-1 rounded-full bg-slate-300" />
									<span className="h-1 w-1 rounded-full bg-slate-300" />
								</div>
							</div>

							{/* Architecture illustration */}
							<div className="relative mt-5 flex items-center justify-between gap-1 sm:gap-3">
								{/* Frontend */}
								<div className="relative z-10 flex min-w-0 flex-1 flex-col items-center">
									<div
										className="
											grid h-11 w-11
											place-items-center
											rounded-xl
											border border-brand/20
											bg-white
											text-brand
											shadow-sm
											sm:h-14 sm:w-14
										"
									>
										<Globe2
											className="h-5 w-5 sm:h-6 sm:w-6"
											strokeWidth={1.7}
										/>
									</div>

									<span className="mt-2 text-[9px] font-semibold text-navy sm:text-[11px]">
										Experience
									</span>
								</div>

								{/* Connection */}
								<div className="relative mb-5 flex h-px flex-1 items-center bg-gradient-to-r from-brand/30 to-brand/60">
									<span className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_8px_rgba(24,188,183,0.5)]" />
								</div>

								{/* Backend */}
								<div className="relative z-10 flex min-w-0 flex-1 flex-col items-center">
									<div
										className="
											grid h-11 w-11
											place-items-center
											rounded-xl
											border border-brand/20
											bg-brand/10
											text-brand-700
											shadow-sm
											sm:h-14 sm:w-14
										"
									>
										<Code2
											className="h-5 w-5 sm:h-6 sm:w-6"
											strokeWidth={1.7}
										/>
									</div>

									<span className="mt-2 text-[9px] font-semibold text-navy sm:text-[11px]">
										Engineering
									</span>
								</div>

								{/* Connection */}
								<div className="relative mb-5 flex h-px flex-1 items-center bg-gradient-to-r from-brand/60 to-brand/30">
									<span className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_8px_rgba(24,188,183,0.5)]" />
								</div>

								{/* Infrastructure */}
								<div className="relative z-10 flex min-w-0 flex-1 flex-col items-center">
									<div
										className="
											grid h-11 w-11
											place-items-center
											rounded-xl
											border border-brand/20
											bg-white
											text-brand
											shadow-sm
											sm:h-14 sm:w-14
										"
									>
										<Database
											className="h-5 w-5 sm:h-6 sm:w-6"
											strokeWidth={1.7}
										/>
									</div>

									<span className="mt-2 text-[9px] font-semibold text-navy sm:text-[11px]">
										Infrastructure
									</span>
								</div>
							</div>

							{/* Bottom decorative elements */}
							<div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-200/80 pt-3">
								{[
									'Strategy',
									'Development',
									'Delivery',
								].map((item) => (
									<div
										key={item}
										className="flex items-center gap-1"
									>
										<Check className="h-3 w-3 shrink-0 text-brand" />

										<span className="truncate text-[9px] font-medium text-slate-500 sm:text-[10px]">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Bottom workspace row */}
						<div className="mt-4 flex items-center justify-between gap-2">
							<div className="flex items-center gap-2">
								<div className="flex -space-x-2">
									{[
										'bg-brand/20',
										'bg-navy/15',
										'bg-brand/40',
									].map((color, i) => (
										<div
											key={i}
											className={`h-6 w-6 rounded-full border-2 border-white ${color}`}
										/>
									))}
								</div>

								<span className="text-[10px] text-slate-400">
									Connected workflow
								</span>
							</div>

							<span className="flex items-center gap-1 text-[10px] font-semibold text-brand-700">
								Explore
								<ArrowUpRight className="h-3 w-3" />
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Floating detail card */}
			<div
				className="
					pointer-events-none
					absolute -bottom-5 -left-3
					hidden
					rounded-xl
					border border-slate-200/80
					bg-white/95
					px-4 py-3
					shadow-[0_12px_35px_-12px_rgba(15,23,42,0.18)]
					backdrop-blur-md
					sm:flex sm:items-center sm:gap-3
					lg:-left-8
				"
			>
				<div className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
					<Zap className="h-4 w-4" />
				</div>

				<div>
					<p className="font-display text-xs font-bold text-navy">
						Built with purpose
					</p>

					<p className="mt-0.5 text-[10px] text-slate-400">
						Thoughtful digital engineering
					</p>
				</div>
			</div>

			{/* Decorative corner */}
			<div className="pointer-events-none absolute -right-3 -top-3 hidden h-14 w-14 rounded-tr-[20px] border-r border-t border-brand/30 sm:block" />

			{/* Small cursor */}
			<MousePointer2
				className="
					pointer-events-none absolute
					-bottom-3 right-8
					hidden h-5 w-5
					rotate-[-15deg]
					fill-brand text-white
					drop-shadow-md
					sm:block
				"
			/>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Work Overview Hero                                                         */
/* -------------------------------------------------------------------------- */

export function WorkOverviewHero() {
	return (
		<section
			aria-labelledby="work-hero-heading"
			className="relative isolate overflow-hidden bg-[#F8FAFC]"
		>
			{/* Background */}
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-50" />

			<div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-brand/[0.07] blur-3xl" />

			<div className="pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-navy/[0.035] blur-3xl" />

			{/* Container */}
			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5 pb-20 pt-32
					sm:px-8
					md:pt-40
					lg:pb-24
				"
			>
				<div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12 xl:gap-20">
					{/* Left Content */}
					<div className="max-w-2xl">
						{/* Eyebrow */}
						<div
							className="rise-in inline-flex items-center gap-2.5"
							style={{ animationDelay: '0.05s' }}
						>
							<span className="h-1.5 w-1.5 rounded-full bg-brand" />

							<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700 sm:text-xs">
								Our Work
							</span>

							<span className="h-4 w-px bg-slate-300" />

							<span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
								Selected Projects
							</span>
						</div>

						{/* Heading */}
						<h1
							id="work-hero-heading"
							className="
								rise-in mt-6
								max-w-[750px]
								font-display
								text-[clamp(2.5rem,4.5vw,4.4rem)]
								font-bold
								leading-[1.08]
								tracking-[-0.045em]
								text-navy
							"
							style={{ animationDelay: '0.15s' }}
						>
							Our work.
							<br />
							<span className="text-brand">
								Built to make an impact.
							</span>
						</h1>

						{/* Description */}
						<p
							className="
								rise-in mt-7
								max-w-xl
								text-[15px]
								leading-[1.85]
								text-slate-500
								sm:text-[17px]
							"
							style={{ animationDelay: '0.3s' }}
						>
							Explore our software development projects and case
							studies, showcasing digital products, custom
							platforms, and technology solutions built to solve
							real business challenges.
						</p>

						{/* Buttons */}
						<div
							className="
								rise-in mt-9
								flex flex-col gap-3
								sm:flex-row sm:items-center
							"
							style={{ animationDelay: '0.45s' }}
						>
							<a
								href="#work-showcase"
								className="
									group inline-flex h-12
									items-center justify-center
									gap-3 rounded-lg
									bg-brand px-7
									font-display text-[14px]
									font-semibold text-white
									shadow-[0_8px_24px_-8px_rgba(24,188,183,0.45)]
									transition-all duration-300
									hover:-translate-y-0.5
									hover:bg-brand-600
									hover:shadow-[0_12px_28px_-8px_rgba(24,188,183,0.55)]
									active:scale-[0.98]
									sm:w-auto
								"
							>
								Explore Our Work

								<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</a>

							<Link
								to="/contact"
								className="
									group inline-flex h-12
									items-center justify-center
									gap-3 rounded-lg
									border border-slate-200
									bg-white/80 px-7
									font-display text-[14px]
									font-semibold text-navy
									transition-all duration-300
									hover:border-brand/30
									hover:bg-brand/[0.04]
									active:scale-[0.98]
									sm:w-auto
								"
							>
								Let's Work Together

								<ArrowUpRight className="h-4 w-4 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</Link>
						</div>

						{/* Supporting text */}
						<div
							className="rise-in mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200/80 pt-5"
							style={{ animationDelay: '0.55s' }}
						>
							{[
								'Custom Software',
								'Web Platforms',
								'Digital Solutions',
							].map((item) => (
								<div
									key={item}
									className="flex items-center gap-2"
								>
									<span className="h-1 w-1 rounded-full bg-brand" />

									<span className="text-[11px] font-medium text-slate-400 sm:text-xs">
										{item}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Right Visual */}
					<div
						className="rise-in relative"
						style={{ animationDelay: '0.25s' }}
					>
						<HeroVisual />
					</div>
				</div>
			</div>

			{/* Bottom separator */}
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
		</section>
	);
}