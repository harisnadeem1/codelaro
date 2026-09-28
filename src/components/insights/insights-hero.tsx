import { Link } from 'react-router';

import {
	ArrowUpRight,
	BookOpen,
	Code2,
	BrainCircuit,
	Cloud,
	Lightbulb,
	Sparkles,
	Activity,
	Layers3,
	ArrowRight,
	Check,
	Zap,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Visual Data                                                                */
/* -------------------------------------------------------------------------- */

const TOPICS = [
	{
		title: 'Engineering',
		subtitle: 'Build better',
		icon: Code2,
		position: 'left',
	},
	{
		title: 'AI & Automation',
		subtitle: 'Think smarter',
		icon: BrainCircuit,
		position: 'right',
	},
	{
		title: 'Product',
		subtitle: 'Create value',
		icon: Lightbulb,
		position: 'left',
	},
	{
		title: 'Cloud',
		subtitle: 'Scale further',
		icon: Cloud,
		position: 'right',
	},
] as const;

/* -------------------------------------------------------------------------- */
/* Topic Card                                                                 */
/* -------------------------------------------------------------------------- */

function TopicCard({
	title,
	subtitle,
	icon: Icon,
}: {
	title: string;
	subtitle: string;
	icon: typeof Code2;
}) {
	return (
		<div
			className="
				group
				relative
				flex
				w-full
				items-center
				gap-3
				rounded-2xl
				border border-slate-200/80
				bg-white/95
				p-3
				shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]
				backdrop-blur-xl
				transition-all
				duration-300
				hover:-translate-y-1
				hover:border-brand/30
				hover:shadow-[0_14px_35px_-12px_rgba(15,23,42,0.16)]
			"
		>
			<div
				className="
					flex
					h-10
					w-10
					shrink-0
					items-center
					justify-center
					rounded-xl
					border border-brand/10
					bg-brand/[0.07]
					transition-colors
					group-hover:bg-brand/[0.12]
				"
			>
				<Icon
					className="h-[19px] w-[19px] text-brand"
					strokeWidth={1.7}
				/>
			</div>

			<div className="min-w-0">
				<p className="truncate font-display text-[12px] font-bold text-navy sm:text-[13px]">
					{title}
				</p>

				<p className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px]">
					{subtitle}
				</p>
			</div>

			<ArrowUpRight
				className="
					ml-auto
					h-3.5
					w-3.5
					shrink-0
					text-slate-300
					transition-colors
					group-hover:text-brand
				"
			/>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Modern Insights Visual                                                     */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Modern Insights Visual                                                     */
/* -------------------------------------------------------------------------- */

function InsightsVisual() {
	const topics = [
		{
			title: 'Engineering',
			subtitle: 'Software Development',
			icon: Code2,
			number: '01',
		},
		{
			title: 'AI & Automation',
			subtitle: 'Intelligent Solutions',
			icon: BrainCircuit,
			number: '02',
		},
		{
			title: 'Product Strategy',
			subtitle: 'Digital Innovation',
			icon: Lightbulb,
			number: '03',
		},
		{
			title: 'Cloud & Scale',
			subtitle: 'Modern Infrastructure',
			icon: Cloud,
			number: '04',
		},
	];

	return (
		<div
			aria-hidden="true"
			className="
				relative
				mx-auto
				w-full
				max-w-[540px]
				lg:ml-auto
				lg:mr-0
			"
		>
			{/* Main visual container */}

			<div
				className="
					relative
					isolate
					overflow-hidden
					rounded-[28px]
					border border-slate-200/80
					bg-gradient-to-br
					from-white
					via-[#FAFDFD]
					to-[#EDF9F7]
					p-5
					shadow-[0_25px_65px_-35px_rgba(15,23,42,0.16)]
					sm:rounded-[32px]
					sm:p-7
				"
			>
				{/* Background grid */}

				<div
					className="
						pointer-events-none
						absolute
						inset-0
						opacity-[0.035]
					"
					style={{
						backgroundImage: `
							linear-gradient(#0F172A 1px, transparent 1px),
							linear-gradient(90deg, #0F172A 1px, transparent 1px)
						`,
						backgroundSize: '26px 26px',
					}}
				/>

				{/* Ambient glow */}

				<div
					className="
						pointer-events-none
						absolute
						left-1/2
						top-1/2
						h-[260px]
						w-[260px]
						-translate-x-1/2
						-translate-y-1/2
						rounded-full
						bg-brand/[0.09]
						blur-[65px]
					"
				/>

				{/* Header */}

				<div className="relative z-10 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="h-2 w-2 rounded-full bg-brand" />

						<span
							className="
								font-mono
								text-[10px]
								font-semibold
								uppercase
								tracking-[0.16em]
								text-slate-500
							"
						>
							Knowledge Network
						</span>
					</div>

					<div className="flex items-center gap-1.5">
						<span className="h-1.5 w-1.5 rounded-full bg-brand" />

						<span className="h-1.5 w-1.5 rounded-full bg-brand/40" />

						<span className="h-1.5 w-1.5 rounded-full bg-brand/20" />
					</div>
				</div>

				{/* Main visualization */}

				<div className="relative z-10 mt-6">

					{/* Top technology cards */}

					<div className="grid grid-cols-2 gap-3 sm:gap-4">
						{topics.slice(0, 2).map((topic) => {
							const Icon = topic.icon;

							return (
								<div
									key={topic.title}
									className="
										group
										relative
										min-w-0
										rounded-2xl
										border border-slate-200/80
										bg-white/95
										p-3
										shadow-[0_8px_25px_-15px_rgba(15,23,42,0.15)]
										backdrop-blur-xl
										transition-all
										duration-300
										hover:-translate-y-1
										hover:border-brand/30
										sm:p-4
									"
								>
									<div className="flex items-start justify-between gap-2">
										<div
											className="
												flex
												h-9
												w-9
												items-center
												justify-center
												rounded-xl
												border border-brand/10
												bg-brand/[0.07]
												sm:h-10
												sm:w-10
											"
										>
											<Icon
												className="h-[18px] w-[18px] text-brand"
												strokeWidth={1.7}
											/>
										</div>

										<span className="font-mono text-[10px] text-slate-300">
											{topic.number}
										</span>
									</div>

									<h3 className="mt-3 font-display text-[12px] font-bold text-navy sm:text-[13px]">
										{topic.title}
									</h3>

									<p className="mt-1 text-[10px] leading-relaxed text-slate-500 sm:text-[11px]">
										{topic.subtitle}
									</p>
								</div>
							);
						})}
					</div>

					{/* Central connection system */}

					<div className="relative flex h-[116px] items-center justify-center sm:h-[130px]">

						{/* Connection lines */}

						<svg
							viewBox="0 0 400 130"
							preserveAspectRatio="none"
							className="pointer-events-none absolute inset-0 h-full w-full"
							fill="none"
						>
							<defs>
								<linearGradient
									id="knowledgeConnection"
									x1="0%"
									y1="0%"
									x2="100%"
									y2="100%"
								>
									<stop
										offset="0%"
										stopColor="#18BCB7"
										stopOpacity="0.2"
									/>

									<stop
										offset="50%"
										stopColor="#18BCB7"
										stopOpacity="0.7"
									/>

									<stop
										offset="100%"
										stopColor="#18BCB7"
										stopOpacity="0.2"
									/>
								</linearGradient>
							</defs>

							<path
								d="M100 0 V25 H200 V45"
								stroke="url(#knowledgeConnection)"
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>

							<path
								d="M300 0 V25 H200"
								stroke="url(#knowledgeConnection)"
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>

							<path
								d="M200 85 V105 H100 V130"
								stroke="url(#knowledgeConnection)"
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>

							<path
								d="M200 105 H300 V130"
								stroke="url(#knowledgeConnection)"
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>
						</svg>

						{/* Central knowledge hub */}

						<div
							className="
								relative
								z-10
								flex
								h-[80px]
								w-[80px]
								items-center
								justify-center
								rounded-[24px]
								border border-brand/25
								bg-white
								shadow-[0_12px_35px_-12px_rgba(24,188,183,0.3)]
								sm:h-[88px]
								sm:w-[88px]
							"
						>
							<div
								className="
									absolute
									-inset-2
									rounded-[30px]
									border border-dashed border-brand/20
								"
							/>

							<div className="relative flex flex-col items-center">
								<Layers3
									className="h-7 w-7 text-brand"
									strokeWidth={1.5}
								/>

								<span
									className="
										mt-1.5
										font-mono
										text-[9px]
										font-bold
										tracking-[0.08em]
										text-navy
									"
								>
									INSIGHTS
								</span>
							</div>
						</div>
					</div>

					{/* Bottom technology cards */}

					<div className="grid grid-cols-2 gap-3 sm:gap-4">
						{topics.slice(2).map((topic) => {
							const Icon = topic.icon;

							return (
								<div
									key={topic.title}
									className="
										group
										relative
										min-w-0
										rounded-2xl
										border border-slate-200/80
										bg-white/95
										p-3
										shadow-[0_8px_25px_-15px_rgba(15,23,42,0.15)]
										backdrop-blur-xl
										transition-all
										duration-300
										hover:-translate-y-1
										hover:border-brand/30
										sm:p-4
									"
								>
									<div className="flex items-start justify-between gap-2">
										<div
											className="
												flex
												h-9
												w-9
												items-center
												justify-center
												rounded-xl
												border border-brand/10
												bg-brand/[0.07]
												sm:h-10
												sm:w-10
											"
										>
											<Icon
												className="h-[18px] w-[18px] text-brand"
												strokeWidth={1.7}
											/>
										</div>

										<span className="font-mono text-[10px] text-slate-300">
											{topic.number}
										</span>
									</div>

									<h3 className="mt-3 font-display text-[12px] font-bold text-navy sm:text-[13px]">
										{topic.title}
									</h3>

									<p className="mt-1 text-[10px] leading-relaxed text-slate-500 sm:text-[11px]">
										{topic.subtitle}
									</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Footer */}

				<div
					className="
						relative
						z-10
						mt-5
						flex
						items-center
						justify-between
						gap-3
						border-t border-slate-200/80
						pt-4
					"
				>
					<div className="flex items-center gap-2">
						<Activity className="h-3.5 w-3.5 text-brand" />

						<span className="font-mono text-[9px] uppercase tracking-[0.1em] text-slate-400">
							Connected Knowledge
						</span>
					</div>

					<div className="flex items-center gap-1.5">
						<span className="h-1.5 w-1.5 rounded-full bg-brand" />

						<span className="font-mono text-[9px] font-medium text-brand">
							CODELARO
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
/* -------------------------------------------------------------------------- */
/* Insights Hero                                                              */
/* -------------------------------------------------------------------------- */

export function InsightsHero() {
	return (
		<section
			aria-labelledby="insights-hero-heading"
			className="
				relative
				isolate
				overflow-hidden
				border-b border-navy/[0.06]
				bg-[#F8FAFC]
			"
		>
			{/* Background grid */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					inset-0
					bg-blueprint-grid
					mask-fade-b
					opacity-40
				"
			/>

			{/* Background accents */}

			<div
				aria-hidden="true"
				className="
					drift-slow
					pointer-events-none
					absolute
					-right-32
					-top-32
					h-[420px]
					w-[420px]
					rounded-full
					bg-brand/[0.06]
					blur-3xl
				"
			/>

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					-bottom-32
					-left-32
					h-[350px]
					w-[350px]
					rounded-full
					bg-navy/[0.025]
					blur-3xl
				"
			/>

			{/* Main container */}

			<div
				className="
					relative
					mx-auto
					grid
					w-full
					max-w-8xl
					items-center
					gap-12
					px-5
					pb-16
					pt-28
					sm:px-8
					md:pt-36
					lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
					lg:gap-14
					lg:pb-20
					xl:gap-20
				"
			>
				{/* ========================================================== */}
				{/* Left Content                                               */}
				{/* ========================================================== */}

				<div className="relative max-w-[660px]">
					{/* Eyebrow */}

					<div className="rise-in inline-flex items-center gap-3">
						<span className="h-px w-8 bg-brand" />

						<span
							className="
								font-mono
								text-[11px]
								font-semibold
								uppercase
								tracking-[0.24em]
								text-brand-700
								sm:text-[12px]
							"
						>
							Codelaro Insights
						</span>
					</div>

					{/* Heading */}

					<h1
						id="insights-hero-heading"
						className="
							mt-6
							font-display
							text-[clamp(2.5rem,4.5vw,4.5rem)]
							font-bold
							leading-[1.09]
							tracking-[-0.045em]
							text-navy
						"
					>
						<span
							className="rise-in block"
							style={{ animationDelay: '0.1s' }}
						>
							Ideas that inspire.
						</span>

						<span
							className="rise-in mt-1 block text-brand"
							style={{ animationDelay: '0.2s' }}
						>
							Insights that build.
						</span>
					</h1>

					{/* Description */}

					<p
						className="
							rise-in
							mt-6
							max-w-[550px]
							text-[15px]
							leading-[1.85]
							text-slate-600
							sm:text-[17px]
						"
						style={{ animationDelay: '0.3s' }}
					>
						Explore practical insights on software development,
						artificial intelligence, cloud engineering and
						digital innovation. Discover ideas and technical
						knowledge to help you build better digital products.
					</p>

					{/* Categories */}

					<div
						className="
							rise-in
							mt-7
							flex
							flex-wrap
							items-center
							gap-2
						"
						style={{ animationDelay: '0.35s' }}
					>
						{[
							'Engineering',
							'Artificial Intelligence',
							'Cloud',
							'Product',
						].map((category) => (
							<span
								key={category}
								className="
									inline-flex
									items-center
									rounded-full
									border border-navy/[0.08]
									bg-white/80
									px-3.5
									py-1.5
									font-mono
									text-[10px]
									font-medium
									text-slate-600
									backdrop-blur-sm
									sm:text-[11px]
								"
							>
								{category}
							</span>
						))}
					</div>

					{/* Buttons */}

					<div
						className="
							rise-in
							mt-9
							flex
							flex-col
							gap-3
							sm:flex-row
							sm:items-center
						"
						style={{ animationDelay: '0.42s' }}
					>
						<a
							href="#latest"
							className="
								group
								inline-flex
								h-[50px]
								w-full
								items-center
								justify-center
								gap-3
								rounded-xl
								bg-brand
								px-7
								font-display
								text-[16px]
								font-semibold
								text-white
								shadow-[0_8px_25px_rgba(24,188,183,0.18)]
								transition-all
								duration-300
								hover:-translate-y-0.5
								hover:bg-brand-600
								hover:shadow-[0_12px_30px_rgba(24,188,183,0.25)]
								active:translate-y-0
								sm:w-auto
							"
						>
							Explore Insights

							<ArrowUpRight
								className="
									h-4
									w-4
									transition-transform
									duration-300
									group-hover:translate-x-0.5
									group-hover:-translate-y-0.5
								"
							/>
						</a>

						<Link
							to="/contact"
							className="
								group
								inline-flex
								h-[50px]
								w-full
								items-center
								justify-center
								gap-3
								rounded-xl
								border border-navy/15
								bg-white
								px-7
								font-display
								text-[16px]
								font-semibold
								text-navy
								transition-all
								duration-300
								hover:-translate-y-0.5
								hover:border-brand/40
								hover:bg-brand/[0.04]
								active:translate-y-0
								sm:w-auto
							"
						>
							Let's Talk

							<ArrowUpRight
								className="
									h-4
									w-4
									text-brand
									transition-transform
									duration-300
									group-hover:translate-x-0.5
									group-hover:-translate-y-0.5
								"
							/>
						</Link>
					</div>

					{/* Bottom detail */}

					<div
						className="
							rise-in
							mt-10
							flex
							max-w-[510px]
							items-center
							gap-3
							border-t border-navy/[0.08]
							pt-5
						"
						style={{ animationDelay: '0.5s' }}
					>
						<div
							className="
								flex
								h-10
								w-10
								shrink-0
								items-center
								justify-center
								rounded-xl
								border border-brand/15
								bg-brand/[0.07]
							"
						>
							<BookOpen
								className="h-[18px] w-[18px] text-brand"
								strokeWidth={1.7}
							/>
						</div>

						<div>
							<p className="font-display text-[12px] font-semibold text-navy">
								Knowledge worth sharing
							</p>

							<p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
								Engineering insights and practical technology perspectives.
							</p>
						</div>

						<ArrowRight className="ml-auto hidden h-4 w-4 text-slate-400 sm:block" />
					</div>
				</div>

				{/* ========================================================== */}
				{/* Right Visual                                               */}
				{/* ========================================================== */}

				<div
					className="
						rise-in
						relative
						w-full
						lg:pl-2
					"
					style={{ animationDelay: '0.25s' }}
				>
					<InsightsVisual />
				</div>
			</div>
		</section>
	);
}