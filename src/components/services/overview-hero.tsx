import { Link } from 'react-router';

import {
	ArrowDown,
	ArrowUpRight,
	Braces,
	Check,
	Code2,
	Layers3,
	Sparkles,
	BrainCircuit,
	MonitorSmartphone,
	Network,
	Cloud,
	Smartphone,
	Activity,
	BarChart3,
	Bot,
	CheckCircle2,
	Workflow,


	ShieldCheck,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Service Data                                                               */
/* -------------------------------------------------------------------------- */

const services = [
	'Web',
	'Mobile',
	'SaaS',
	'AI',
	'Cloud',
	'Data',
	'UI / UX',
	'APIs',
	'Payments',
	'Commerce',
	'Software',
	'Support',
];

/* -------------------------------------------------------------------------- */
/* Hero Visual                                                                */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/* Visual Data                                                                */
/* -------------------------------------------------------------------------- */

const deliveryStages = [
	{ name: 'Interface Design', status: 'Complete', progress: '100%' },
	{ name: 'API Integration', status: 'In Progress', progress: '72%' },
	{ name: 'Release Preparation', status: 'Upcoming', progress: '35%' },
];

const mobileActivities = [
	{ name: 'Automation', status: 'Connected', icon: Workflow },
	{ name: 'Infrastructure', status: 'Operational', icon: Cloud },
];

/* -------------------------------------------------------------------------- */
/* Hero Visual                                                                */
/* -------------------------------------------------------------------------- */

function HeroVisual() {
	return (
		<div
			aria-hidden="true"
			className="
				relative mx-auto mt-12
				w-full max-w-[580px]
				pb-2 sm:pb-16
				lg:mt-0
			"
		>
			{/* Background decoration */}

			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute right-[2%] top-[3%] h-[85%] w-[80%] rotate-[8deg] rounded-[45px] bg-gradient-to-br from-brand/15 via-brand/[0.04] to-transparent" />

				<div className="absolute right-[7%] top-[8%] h-[75%] w-[75%] rotate-[8deg] rounded-[40px] border border-brand/15" />

				<div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-brand/10 blur-[80px]" />
			</div>

			{/* Desktop dashboard */}

			<div
				className="
					relative z-10 w-full
					overflow-hidden rounded-[22px]
					border border-slate-200
					bg-white
					shadow-[0_30px_75px_-25px_rgba(15,23,42,0.18)]
					sm:w-[88%] sm:rounded-[26px]
				"
			>
				{/* Browser toolbar */}

				<div className="flex h-11 items-center justify-between border-b border-slate-100 px-4 sm:h-12">
					<div className="flex items-center gap-1.5">
						{[0, 1, 2].map((dot) => (
							<span
								key={dot}
								className={`h-2 w-2 rounded-full ${dot === 2 ? 'bg-brand/70' : 'bg-slate-200'
									}`}
							/>
						))}
					</div>

					<span className="rounded-md border border-slate-100 bg-slate-50 px-3 py-1 text-[9px] font-medium text-slate-400">
						Atlas / Workspace
					</span>

					<span className="h-1.5 w-1.5 rounded-full bg-brand" />
				</div>

				{/* Application */}

				<div className="relative flex min-h-[310px] bg-[#FBFCFD] sm:min-h-[350px]">
					{/* Application sidebar */}

					<div className="hidden w-[48px] shrink-0 flex-col items-center gap-3 border-r border-slate-100 bg-white py-5 sm:flex">
						<div className="mb-3 grid h-8 w-8 place-items-center rounded-xl bg-navy">
							<Code2 className="h-4 w-4 text-white" />
						</div>

						{[Layers3, Activity, Workflow].map((Icon, index) => (
							<div
								key={index}
								className={`grid h-8 w-8 place-items-center rounded-lg ${index === 0
										? 'bg-brand/10 text-brand'
										: 'text-slate-400'
									}`}
							>
								<Icon className="h-4 w-4" strokeWidth={1.7} />
							</div>
						))}
					</div>

					{/* Dashboard content */}

					<div className="relative min-w-0 flex-1 overflow-hidden p-4 sm:p-5">
						{/* Background lighting */}

						<div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/[0.045] blur-3xl" />

						{/* Heading */}

						<div className="relative">
							<div className="flex items-center gap-2">
								<span className="h-1.5 w-1.5 rounded-full bg-brand" />

								<span className="text-[9px] font-bold uppercase tracking-[0.15em] text-brand-700">
									Operations Overview
								</span>
							</div>

							<div className="mt-3 flex items-start justify-between gap-2">
								<div>
									<p className="font-display text-[19px] font-semibold tracking-tight text-navy sm:text-[23px]">
										Product Workspace
									</p>

									<p className="mt-1 text-[10px] text-slate-400 sm:text-[11px]">
										Everything moving in sync.
									</p>
								</div>

								<span className="rounded-full border border-brand/15 bg-brand/[0.07] px-2 py-1 text-[9px] font-medium text-brand-700">
									On Track
								</span>
							</div>
						</div>

						{/* Overview cards */}

						<div className="relative mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
							{[
								{
									label: 'Development',
									value: 'In Progress',
									icon: Code2,
								},
								{
									label: 'Infrastructure',
									value: 'Connected',
									icon: Cloud,
								},
							].map(({ label, value, icon: Icon }) => (
								<div
									key={label}
									className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
								>
									<div className="flex items-center justify-between">
										<Icon
											className="h-4 w-4 text-brand"
											strokeWidth={1.7}
										/>

										<Check className="h-3 w-3 text-brand/70" />
									</div>

									<p className="mt-3 text-[11px] font-semibold text-navy sm:text-[12px]">
										{value}
									</p>

									<p className="mt-1 text-[9px] text-slate-400">
										{label}
									</p>
								</div>
							))}
						</div>

						{/* Delivery pipeline */}

						<div className="relative mt-4 w-full rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm sm:mt-5 sm:w-[68%] sm:p-4">
							<div className="flex items-center justify-between gap-2">
								<p className="text-[11px] font-semibold text-navy">
									Delivery Pipeline
								</p>

								<ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
							</div>

							<div className="mt-4 space-y-3">
								{deliveryStages.map((stage) => (
									<div key={stage.name}>
										<div className="mb-1.5 flex items-center justify-between gap-2">
											<span className="text-[9px] font-medium text-slate-500">
												{stage.name}
											</span>

											<span className="text-[8px] text-slate-400">
												{stage.status}
											</span>
										</div>

										<div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
											<div
												className="h-full rounded-full bg-brand/80"
												style={{ width: stage.progress }}
											/>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Decorative dashboard element */}

						<div className="pointer-events-none absolute bottom-10 right-5 hidden h-32 w-32 rounded-full border border-brand/10 sm:block">
							<div className="absolute inset-4 rounded-full border border-dashed border-brand/15" />
							<div className="absolute inset-9 rounded-full bg-brand/[0.04]" />
						</div>
					</div>
				</div>

				{/* Dashboard footer */}

				<div className="flex items-center gap-2 border-t border-slate-100 bg-white px-4 py-3 sm:px-5">
					<span className="h-1.5 w-1.5 rounded-full bg-brand" />

					<span className="text-[9px] font-medium text-slate-400">
						Connected digital operations
					</span>
				</div>
			</div>

			{/* Desktop floating mobile application */}

			<div
				className="
					absolute bottom-1 right-0 z-20
					hidden w-[155px]
					overflow-hidden rounded-[29px]
					border-[5px] border-navy
					bg-white
					shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3)]
					sm:block sm:w-[165px]
				"
			>
				<div className="relative min-h-[245px] overflow-hidden rounded-[23px] bg-[#F8FAFC]">
					{/* Camera */}

					<div className="absolute left-1/2 top-0 h-3.5 w-14 -translate-x-1/2 rounded-b-xl bg-navy" />

					{/* Mobile application header */}

					<div className="flex items-center gap-2 px-3 pt-9">
						<div className="grid h-7 w-7 place-items-center rounded-lg bg-brand/10">
							<Layers3 className="h-3.5 w-3.5 text-brand" />
						</div>

						<div>
							<p className="text-[9px] font-semibold text-navy">
								Atlas Mobile
							</p>

							<p className="text-[7px] text-slate-400">
								Workspace
							</p>
						</div>
					</div>

					{/* Mobile content */}

					<div className="mt-6 px-3">
						<p className="text-[8px] font-bold uppercase tracking-[0.1em] text-brand">
							YOUR WORKSPACE
						</p>

						<p className="mt-2 font-display text-[18px] font-semibold leading-tight tracking-tight text-navy">
							Stay connected.
							<br />
							<span className="text-brand">Anywhere.</span>
						</p>

						{/* Mobile activities */}

						<div className="mt-5 space-y-2">
							{mobileActivities.map(
								({ name, status, icon: Icon }) => (
									<div
										key={name}
										className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-2 shadow-sm"
									>
										<div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand/[0.07]">
											<Icon className="h-3.5 w-3.5 text-brand" />
										</div>

										<div>
											<p className="text-[8px] font-semibold text-navy">
												{name}
											</p>

											<p className="mt-0.5 text-[7px] text-slate-400">
												{status}
											</p>
										</div>
									</div>
								),
							)}
						</div>
					</div>

					{/* Bottom background */}

					<div className="pointer-events-none absolute -bottom-16 -right-12 -z-10 h-36 w-36 rounded-full bg-brand/10 blur-xl" />
				</div>

				<div className="absolute bottom-1.5 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-navy/40" />
			</div>

			{/* Mobile-only companion preview */}

			<div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:hidden">
				<div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10">
					<Smartphone className="h-5 w-5 text-brand" />
				</div>

				<div className="min-w-0 flex-1">
					<p className="text-xs font-semibold text-navy">
						Connected on every device
					</p>

					<p className="mt-1 text-[11px] text-slate-500">
						Your entire workspace, wherever you go.
					</p>
				</div>

				<ArrowUpRight className="h-4 w-4 shrink-0 text-brand" />
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Services Hero                                                              */
/* -------------------------------------------------------------------------- */

export function ServicesOverviewHero() {
	return (
		<section
			aria-labelledby="services-hero-heading"
			className="
				relative isolate
				overflow-hidden
				bg-[#F8FAFC]
			"
		>
			{/* Background */}

			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

		

			<div
				aria-hidden="true"
				className="
					pointer-events-none absolute
					-bottom-40 -left-40
					h-[400px] w-[400px]
					rounded-full
					bg-navy/[0.035]
					blur-[100px]
				"
			/>

			<div className="relative mx-auto w-full max-w-8xl px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:pb-24">
				<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
					{/* Left content */}

					<div className="lg:col-span-7">
						{/* Eyebrow */}

						<div className="mb-7 flex items-center gap-3">
							<span className="h-px w-8 bg-brand" />

							<span
								className="
									text-[11px]
									font-bold uppercase
									tracking-[0.2em]
									text-brand-700
								"
							>
								Software & Digital Engineering
							</span>
						</div>

						{/* Headline */}

						<h1
							id="services-hero-heading"
							className="
								max-w-[750px]
								font-display
								text-[2.6rem]
								font-semibold
								leading-[1.12]
								tracking-[-0.045em]
								text-navy
								sm:text-[3.5rem]
								lg:text-[4.1rem]
								xl:text-[4.4rem]
							"
						>
							Technology Built to
							<br className="hidden sm:block" />{' '}
							Move Your
							<span className="text-brand">
								{' '} Business Forward.
							</span>
						</h1>

						{/* Description */}

						<p
							className="
								mt-7 max-w-[570px]
								text-[15px]
								leading-[1.85]
								text-slate-500
								sm:text-[17px]
							"
						>
							From ambitious ideas to scalable digital
							products, we bring strategy, engineering,
							and innovation together to help businesses
							build smarter, launch faster, and grow
							with confidence.
						</p>

						{/* Actions */}

						<div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
							<Link
								to="/contact"
								className="
									group inline-flex
									h-[52px]
									w-full items-center
									justify-center gap-3
									rounded-xl
									bg-brand
									px-7
									font-display
									text-[16px]
									font-semibold
									text-white
									shadow-lg shadow-brand/20
									transition-all duration-300
									hover:-translate-y-0.5
									hover:bg-brand-600
									hover:shadow-xl
									hover:shadow-brand/25
									active:translate-y-0
									sm:w-auto
								"
							>
								Let's Build Together

								<ArrowUpRight
									className="
										h-4 w-4
										transition-transform
										duration-300
										group-hover:translate-x-0.5
										group-hover:-translate-y-0.5
									"
								/>
							</Link>

							<a
								href="#all-services"
								className="
									group inline-flex
									h-[52px]
									w-full items-center
									justify-center gap-3
									rounded-xl
									border border-slate-200
									bg-white
									px-7
									font-display
									text-[16px]
									font-semibold
									text-navy
									transition-all duration-300
									hover:border-brand/30
									hover:bg-brand/[0.035]
									active:scale-[0.98]
									sm:w-auto
								"
							>
								Explore All Services


							</a>
						</div>

						{/* Bottom statement */}


					</div>

					{/* Right visual */}

					<div className="lg:col-span-5">
						<HeroVisual />
					</div>
				</div>
			</div>
		</section>
	);
}