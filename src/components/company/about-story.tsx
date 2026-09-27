import {
	ArrowUpRight,
	ArrowRight,
	Code2,
	Globe2,
	Lightbulb,
	Rocket,
	Quote,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Story milestones                                                           */
/* -------------------------------------------------------------------------- */

const STORY = [
	{
		number: '01',
		label: 'THE BEGINNING',
		title: 'Experience shaped the idea.',
		description:
			'Codelaro was born from its founder’s experience delivering digital solutions for international clients. Working across different industries and business environments revealed a consistent need: technology partners who understand the bigger picture, not just the technical requirements.',
		icon: Lightbulb,
	},
	{
		number: '02',
		label: 'THE VISION',
		title: 'A different kind of technology partner.',
		description:
			'That experience inspired the vision behind Codelaro: a software development company built around thoughtful engineering, transparent collaboration, and a genuine commitment to solving business challenges.',
		icon: Code2,
	},
	{
		number: '03',
		label: 'THE FUTURE',
		title: 'Built for what comes next.',
		description:
			'Our ambition is to build lasting partnerships with businesses worldwide, creating digital products that solve meaningful problems, adapt to changing needs, and support sustainable growth.',
		icon: Rocket,
	},
];

/* -------------------------------------------------------------------------- */
/* Story timeline                                                             */
/* -------------------------------------------------------------------------- */

function StoryTimeline() {
	return (
		<div className="relative">
			{/* Timeline heading */}

			<div className="mb-9 flex items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<span className="h-2 w-2 rotate-45 bg-brand" />

					<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
						Our Journey
					</span>
				</div>

				<span className="font-mono text-[10px] tracking-[0.14em] text-slate-400">
					01 — 03
				</span>
			</div>

			{/* Timeline */}

			<ol className="relative">
				{/* Connecting line */}

				<div
					aria-hidden="true"
					className="
						absolute bottom-16 left-[23px] top-6
						w-px
						bg-gradient-to-b
						from-brand/45
						via-brand/25
						to-transparent
						sm:left-[27px]
					"
				/>

				{STORY.map((item, index) => {
					const Icon = item.icon;

					return (
						<li
							key={item.number}
							className={`
								group relative
								grid grid-cols-[48px_minmax(0,1fr)]
								gap-5
								sm:grid-cols-[56px_minmax(0,1fr)]
								sm:gap-7
								${index !== STORY.length - 1 ? 'pb-10 sm:pb-12' : ''}
							`}
						>
							{/* Timeline node */}

							<div className="relative z-10">
								<div
									className="
										flex h-12 w-12
										items-center justify-center
										rounded-2xl
										border border-brand/20
										bg-white
										text-brand
										shadow-[0_8px_25px_rgba(15,23,42,0.04)]
										transition-all duration-300
										group-hover:border-brand/40
										group-hover:bg-brand
										group-hover:text-white
										sm:h-14 sm:w-14
									"
								>
									<Icon
										className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
										strokeWidth={1.6}
									/>
								</div>
							</div>

							{/* Content */}

							<div className="min-w-0 pt-1">
								<div className="mb-3 flex flex-wrap items-center gap-3">
									<span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-brand-700">
										{item.number}
									</span>

									<span className="h-px w-5 bg-brand/30" />

									<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
										{item.label}
									</span>
								</div>

								<h3
									className="
										max-w-[450px]
										font-display
										text-[20px]
										font-semibold
										leading-[1.3]
										tracking-[-0.025em]
										text-navy
										sm:text-[23px]
									"
								>
									{item.title}
								</h3>

								<p
									className="
										mt-3
										max-w-[470px]
										text-[13px]
										leading-[1.9]
										text-slate-500
										sm:text-[14px]
									"
								>
									{item.description}
								</p>

								{/* Decorative stage separator */}

								{index !== STORY.length - 1 && (
									<div
										aria-hidden="true"
										className="
											mt-8 h-px w-full
											bg-gradient-to-r
											from-slate-200
											to-transparent
										"
									/>
								)}
							</div>
						</li>
					);
				})}
			</ol>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* International experience                                                   */
/* -------------------------------------------------------------------------- */

function ExperienceNote() {
	return (
		<aside
			aria-label="Founder's international experience"
			className="
				group relative
				mt-10
				overflow-hidden
				rounded-2xl
				border border-brand/15
				bg-white
				p-5
				transition-all duration-300
				hover:border-brand/30
				sm:p-6
			"
		>
			{/* Decorative accent */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute right-0 top-0
					h-28 w-28
					bg-brand/[0.06]
					blur-[45px]
				"
			/>

			<div className="relative flex items-start gap-4">
				{/* Icon */}

				<div
					className="
						flex h-11 w-11
						shrink-0 items-center justify-center
						rounded-xl
						border border-brand/15
						bg-brand/[0.07]
						text-brand
					"
				>
					<Globe2 className="h-5 w-5" strokeWidth={1.6} />
				</div>

				{/* Text */}

				<div className="min-w-0">
					<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-700">
						Experience Behind Codelaro
					</p>

					<h3 className="mt-2 font-display text-[16px] font-semibold tracking-tight text-navy sm:text-[18px]">
						International experience. Global ambition.
					</h3>

					<p className="mt-2 text-[13px] leading-[1.8] text-slate-500">
						Before founding Codelaro, our founder worked
						with clients across the United Kingdom,
						Germany, the Netherlands, Romania, and France,
						gaining valuable experience in international
						software development and remote collaboration.
					</p>

					{/* Country indicators */}

					<div className="mt-5 flex flex-wrap gap-2">
						{[
							'United Kingdom',
							'Germany',
							'Netherlands',
							'Romania',
							'France',
						].map((country) => (
							<span
								key={country}
								className="
									inline-flex items-center
									rounded-md
									border border-slate-200
									bg-[#F8FAFC]
									px-2.5 py-1.5
									text-[10px]
									font-medium
									text-slate-500
									sm:text-[11px]
								"
							>
								{country}
							</span>
						))}
					</div>
				</div>
			</div>
		</aside>
	);
}

/* -------------------------------------------------------------------------- */
/* Our Story                                                                  */
/* -------------------------------------------------------------------------- */

export function AboutStory() {
	return (
		<section
			id="our-story"
			aria-labelledby="our-story-heading"
			className="
				relative isolate
				overflow-hidden
				bg-[#F8FAFC]
				py-20
				sm:py-20
				lg:py-20
			"
		>
			{/* Background atmosphere */}

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
			>
				{/* Blueprint grid */}

				<div className="absolute inset-0 bg-blueprint-grid mask-fade-b opacity-[0.12]" />

				{/* Ambient gradient */}

				<div
					className="
						absolute -left-48 top-0
						h-[500px] w-[500px]
						rounded-full
						bg-brand/[0.045]
						blur-[110px]
					"
				/>

				<div
					className="
						absolute -bottom-52 -right-40
						h-[450px] w-[450px]
						rounded-full
						bg-brand/[0.035]
						blur-[100px]
					"
				/>
			</div>

			{/* Main container */}

			<div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
				{/* Main two-column layout */}

				<div
					className="
						grid items-start
						gap-14
						lg:grid-cols-12
						lg:gap-16
						xl:gap-24
					"
				>
					{/* -------------------------------------------------- */}
					{/* Left editorial content                             */}
					{/* -------------------------------------------------- */}

					<div className="lg:col-span-6">
						{/* Eyebrow */}

						<div className="mb-6 flex items-center gap-3">
							<span
								className="
									flex h-8 w-8
									items-center justify-center
									rounded-lg
									border border-brand/15
									bg-brand/[0.07]
									text-brand
								"
							>
								<Quote
									className="h-4 w-4"
									strokeWidth={1.7}
								/>
							</span>

							<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
								Our Story
							</span>

							<span className="h-px w-9 bg-brand/35" />
						</div>

						{/* Primary heading */}

						<h2
							id="our-story-heading"
							className="
								max-w-[660px]
								font-display
								text-[clamp(2.3rem,3.8vw,4.3rem)]
								font-semibold
								leading-[1.12]
								tracking-[-0.045em]
								text-navy
							"
						>
							Built from experience.
							<br />

							<span className="text-slate-400">
								Driven by ambition.
							</span>
						</h2>

						{/* Main story */}

						<div className="mt-8 max-w-[570px] space-y-5">
							<p
								className="
									font-display
									text-[17px]
									font-medium
									leading-[1.75]
									tracking-[-0.01em]
									text-navy/85
									sm:text-[19px]
								"
							>
								Codelaro began with a simple belief:
								great software should solve real
								problems and create meaningful value
								for the people who use it.
							</p>

							<p className="text-[14px] leading-[1.95] text-slate-500 sm:text-[15px]">
								Our story is rooted in hands-on
								software development experience,
								international collaboration, and a
								passion for transforming complex
								challenges into practical digital
								solutions.
							</p>

							<p className="text-[14px] leading-[1.95] text-slate-500 sm:text-[15px]">
								After working independently with
								international clients, our founder
								established Codelaro with the ambition
								of building something bigger: a
								technology company where thoughtful
								engineering, clear communication, and
								long-term partnerships come together.
							</p>

							<p className="text-[14px] leading-[1.95] text-slate-500 sm:text-[15px]">
								Today, that ambition shapes how we
								approach every opportunity. We focus
								on understanding business challenges,
								creating dependable digital products,
								and developing technology that can
								evolve as our clients grow.
							</p>
						</div>

						{/* Founder attribution */}

						<div
							className="
								mt-9
								flex items-center gap-4
								border-l-2 border-brand
								pl-5
							"
						>
							<div>
								<p className="font-display text-[15px] font-semibold text-navy">
									Muhammad Haris Nadeem
								</p>

								<p className="mt-1 text-[12px] text-slate-500">
									Founder, Codelaro
								</p>
							</div>
						</div>

						{/* Experience note */}

						<ExperienceNote />
					</div>

					{/* -------------------------------------------------- */}
					{/* Right timeline                                      */}
					{/* -------------------------------------------------- */}

					<div className="min-w-0 lg:col-span-6 lg:pl-4 xl:pl-8">
						{/* Timeline panel */}

						<div
							className="
								relative
								border-t-2 border-brand
								bg-white
								px-5 py-8
								shadow-[0_20px_70px_-40px_rgba(15,23,42,0.12)]
								sm:px-8 sm:py-10
								xl:px-10
							"
						>
							{/* Background accent */}

							<div
								aria-hidden="true"
								className="
									pointer-events-none
									absolute right-0 top-0
									h-48 w-48
									bg-brand/[0.045]
									blur-[60px]
								"
							/>

							<div className="relative">
								<StoryTimeline />
							</div>

							{/* Timeline footer */}

							<div
								className="
									mt-10
									flex items-center
									justify-between
									gap-4
									border-t border-slate-100
									pt-5
								"
							>
								<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
									Our Journey Continues
								</span>

								<ArrowUpRight
									aria-hidden="true"
									className="h-4 w-4 text-brand"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* -------------------------------------------------- */}
				{/* Bottom brand statement                               */}
				{/* -------------------------------------------------- */}

				<div
					className="
						mt-16
						grid items-center
						gap-6
						border-t border-navy/10
						pt-9
						lg:mt-20
						lg:grid-cols-12
						lg:gap-10
					"
				>
					<div className="lg:col-span-8">
						<div className="flex items-start gap-4">
							<span
								aria-hidden="true"
								className="
									mt-2.5
									h-2 w-2
									shrink-0
									rotate-45
									bg-brand
								"
							/>

							<p
								className="
									max-w-[720px]
									font-display
									text-[clamp(1.35rem,2vw,2rem)]
									font-semibold
									leading-[1.4]
									tracking-[-0.025em]
									text-navy
								"
							>
								Our story is still being written.
								<span className="text-brand">
									{' '}We're building for what comes next.
								</span>
							</p>
						</div>
					</div>

					{/* Brand signature */}

					<div className="flex items-center gap-3 lg:col-span-4 lg:justify-end">
						<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.17em] text-brand-700">
							Code. Launch. Grow.
						</span>

						<ArrowRight
							aria-hidden="true"
							className="h-4 w-4 text-brand"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}