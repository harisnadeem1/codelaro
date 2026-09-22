import {
	useEffect,
	useRef,
	useState,
	type CSSProperties,
	type ReactNode,
} from 'react';
import { Link } from 'react-router';

import {
	ArrowUpRight,
	Bot,
	Boxes,
	Check,
	Cloud,
	Code2,
	Database,
	Globe2,
	Layers3,
	MonitorSmartphone,
	PackageCheck,
	Play,
	Server,
	ShoppingBag,
	Smartphone,
	Sparkles,
	Workflow,
	Zap,
} from 'lucide-react';

import { cn } from '@/lib/utils';

/* =========================================================
   Types
========================================================= */

type SolutionVisualType =
	| 'web'
	| 'software'
	| 'automation'
	| 'commerce'
	| 'mobile'
	| 'cloud';

type HomepageSolution = {
	slug: string;
	title: string;
	eyebrow: string;
	outcome: string;
	explanation: string;
	capabilities: string[];
	visual: SolutionVisualType;
	icon: typeof Code2;
};

/* =========================================================
   Homepage Solutions

   This is intentionally independent from /data/solutions.

   It gives the homepage full control over:
   - ordering
   - messaging
   - capabilities
   - visuals
   - SEO-friendly descriptions
========================================================= */

const HOMEPAGE_SOLUTIONS: HomepageSolution[] = [
	{
		slug: 'web-development',
		title: 'Web Development',
		eyebrow: 'Digital Experiences',
		outcome:
			'Fast, polished websites built to turn attention into action.',
		explanation:
			'We design and engineer responsive digital experiences that combine strong visual design, performance, accessibility and scalable frontend architecture.',
		capabilities: [
			'React & modern frontend',
			'Responsive UI/UX',
			'Performance optimization',
			'SEO-ready architecture',
		],
		visual: 'web',
		icon: Globe2,
	},
	{
		slug: 'custom-software',
		title: 'Custom Software',
		eyebrow: 'Built Around Your Business',
		outcome:
			'Software shaped around the way your business actually works.',
		explanation:
			'From internal platforms to customer-facing systems, we build custom software that connects workflows, data and teams without forcing your business into a generic product.',
		capabilities: [
			'Custom platforms',
			'Business dashboards',
			'API development',
			'Database systems',
		],
		visual: 'software',
		icon: Boxes,
	},
	{
		slug: 'ai-automation',
		title: 'AI & Automation',
		eyebrow: 'Work Smarter',
		outcome:
			'Turn repetitive processes into intelligent automated workflows.',
		explanation:
			'We connect your tools, APIs and business processes with practical automation and AI systems designed to reduce manual work and improve operational speed.',
		capabilities: [
			'AI integrations',
			'Workflow automation',
			'Smart assistants',
			'API orchestration',
		],
		visual: 'automation',
		icon: Bot,
	},
	{
		slug: 'ecommerce',
		title: 'E-commerce',
		eyebrow: 'Built To Convert',
		outcome:
			'Commerce experiences designed for smoother journeys and stronger growth.',
		explanation:
			'We build scalable online stores and commerce systems with thoughtful customer journeys, reliable integrations and the infrastructure needed to grow.',
		capabilities: [
			'Custom storefronts',
			'Payment integration',
			'Order workflows',
			'Commerce analytics',
		],
		visual: 'commerce',
		icon: ShoppingBag,
	},
	{
		slug: 'mobile-app-development',
		title: 'Mobile Apps',
		eyebrow: 'Products In Your Pocket',
		outcome:
			'Mobile experiences that feel simple, responsive and purposeful.',
		explanation:
			'We create mobile products around real user journeys, combining intuitive interfaces with dependable backend systems and scalable product architecture.',
		capabilities: [
			'Mobile UI/UX',
			'Cross-platform apps',
			'API integration',
			'Product development',
		],
		visual: 'mobile',
		icon: Smartphone,
	},
	{
		slug: 'cloud-devops',
		title: 'Cloud & DevOps',
		eyebrow: 'Infrastructure That Scales',
		outcome:
			'Reliable infrastructure built to keep your products fast and available.',
		explanation:
			'We deploy and manage modern application infrastructure with practical cloud architecture, automated delivery and monitoring built around reliability.',
		capabilities: [
			'Cloud deployment',
			'CI/CD workflows',
			'Server management',
			'Monitoring & scaling',
		],
		visual: 'cloud',
		icon: Cloud,
	},
];

/* =========================================================
   Shared UI
========================================================= */

function BrowserDots() {
	return (
		<div
			aria-hidden="true"
			className="flex items-center gap-1.5"
		>
			<span className="h-1.5 w-1.5 rounded-full bg-white/20" />
			<span className="h-1.5 w-1.5 rounded-full bg-white/20" />
			<span className="h-1.5 w-1.5 rounded-full bg-white/20" />
		</div>
	);
}

function VisualLabel({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<span
			className={cn(
				`
					inline-flex items-center gap-2
					rounded-full
					border border-white/10
					bg-navy/80
					px-3 py-1.5
					text-[9px] font-semibold
					uppercase tracking-[0.18em]
					text-slate-400
					backdrop-blur-xl
				`,
				className,
			)}
		>
			<span className="h-1.5 w-1.5 rounded-full bg-brand" />
			{children}
		</span>
	);
}

/* =========================================================
   01 — Web Development
========================================================= */

function WebVisual({
	isActive,
}: {
	isActive: boolean;
}) {
	return (
		<div
			className={cn(
				`
					relative mx-auto
					h-[370px] w-full max-w-[510px]
					transition-all duration-700
					ease-[cubic-bezier(0.22,1,0.36,1)]
				`,
				isActive
					? 'translate-y-0 scale-100 opacity-100'
					: 'translate-y-8 scale-[0.96] opacity-0',
			)}
		>
			{/* Back browser layer */}

			<div
				aria-hidden="true"
				className="
					absolute right-[1%] top-[12%]
					h-[72%] w-[78%]
					rotate-[5deg]
					rounded-[1.8rem]
					border border-brand/10
					bg-brand/[0.025]
				"
			/>

			{/* Browser */}

			<div
				className="
					absolute left-[2%] top-[2%]
					w-[88%]
					overflow-hidden
					rounded-[1.6rem]
					border border-white/[0.11]
					bg-[#111c30]/95
					shadow-2xl shadow-black/30
					backdrop-blur-xl
				"
			>
				<div
					className="
						flex h-11 items-center
						justify-between
						border-b border-white/[0.07]
						px-5
					"
				>
					<BrowserDots />

					<div
						className="
							h-5 w-[44%]
							rounded-full
							border border-white/[0.06]
							bg-white/[0.025]
						"
					/>

					<div className="w-8" />
				</div>

				<div className="p-6">
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-7">
							<div className="h-1.5 w-12 rounded-full bg-brand" />

							<div className="mt-4 h-5 w-full rounded-md bg-white/80" />

							<div className="mt-2 h-5 w-[78%] rounded-md bg-white/80" />

							<div className="mt-5 h-2 w-full rounded-full bg-white/10" />

							<div className="mt-2 h-2 w-[72%] rounded-full bg-white/[0.06]" />

							<div className="mt-6 flex gap-2">
								<div className="h-8 w-24 rounded-lg bg-brand/90" />

								<div
									className="
										h-8 w-20
										rounded-lg
										border border-white/10
										bg-white/[0.03]
									"
								/>
							</div>
						</div>

						<div
							className="
								col-span-5
								flex h-[145px]
								items-end
								justify-center
								gap-2
								rounded-2xl
								border border-white/[0.07]
								bg-white/[0.025]
								p-4
							"
						>
							{[38, 62, 49, 78, 58].map(
								(height, index) => (
									<span
										key={index}
										className={cn(
											`
												w-3 rounded-t
												transition-all
												duration-700
											`,
											index === 3
												? 'bg-brand/80'
												: 'bg-white/10',
										)}
										style={{
											height: isActive
												? `${height}%`
												: '4%',
											transitionDelay: `${index * 70}ms`,
										}}
									/>
								),
							)}
						</div>
					</div>

					<div className="mt-7 grid grid-cols-3 gap-3">
						{[0, 1, 2].map((item) => (
							<div
								key={item}
								className="
									rounded-xl
									border border-white/[0.06]
									bg-white/[0.02]
									p-3
								"
							>
								<div className="h-2 w-7 rounded-full bg-brand/30" />
								<div className="mt-3 h-1.5 w-full rounded-full bg-white/10" />
								<div className="mt-2 h-1.5 w-2/3 rounded-full bg-white/[0.06]" />
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Floating performance card */}

			<div
				className={cn(
					`
						absolute bottom-[3%] right-[1%]
						w-[175px]
						rounded-2xl
						border border-white/10
						bg-[#17243a]/95
						p-4
						shadow-2xl shadow-black/30
						backdrop-blur-xl
						transition-all
						delay-200 duration-700
					`,
					isActive
						? 'translate-x-0 opacity-100'
						: 'translate-x-8 opacity-0',
				)}
			>
				<div className="flex items-center justify-between">
					<p className="text-[10px] text-slate-400">
						Performance
					</p>

					<span className="h-2 w-2 rounded-full bg-brand" />
				</div>

				<div className="mt-2">
					<span className="font-display text-2xl font-semibold text-white">
						98
					</span>

					<span className="ml-1 text-[10px] text-slate-500">
						/ 100
					</span>
				</div>

				<div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
					<div className="h-full w-[90%] rounded-full bg-brand" />
				</div>
			</div>

			<div className="absolute bottom-0 left-[2%]">
				<VisualLabel>Digital experience</VisualLabel>
			</div>
		</div>
	);
}

/* =========================================================
   02 — Custom Software
========================================================= */

function SoftwareVisual({
	isActive,
}: {
	isActive: boolean;
}) {
	const nodes = [
		{
			label: 'Interface',
			icon: MonitorSmartphone,
			position: 'left-[1%] top-[38%]',
			delay: 100,
		},
		{
			label: 'Application',
			icon: Code2,
			position: 'left-[38%] top-[2%]',
			delay: 180,
		},
		{
			label: 'Services',
			icon: Layers3,
			position: 'right-[1%] top-[38%]',
			delay: 260,
		},
		{
			label: 'Database',
			icon: Database,
			position: 'left-[38%] bottom-[3%]',
			delay: 340,
		},
	];

	return (
		<div className="relative mx-auto h-[370px] w-full max-w-[510px]">
			<div
				aria-hidden="true"
				className="
					absolute left-1/2 top-1/2
					h-[285px] w-[285px]
					-translate-x-1/2
					-translate-y-1/2
					rounded-full
					border border-white/[0.055]
				"
			/>

			<div
				aria-hidden="true"
				className="
					absolute left-1/2 top-1/2
					h-[205px] w-[205px]
					-translate-x-1/2
					-translate-y-1/2
					rounded-full
					border border-brand/[0.10]
				"
			/>

			<svg
				aria-hidden="true"
				className="absolute inset-0 h-full w-full"
				viewBox="0 0 510 370"
				fill="none"
			>
				<path
					d="M105 185 L255 72 L405 185 L255 300 Z"
					stroke="currentColor"
					strokeWidth="1"
					className="text-white/10"
				/>

				<path
					d="M105 185 L405 185"
					stroke="currentColor"
					strokeWidth="1"
					strokeDasharray="5 7"
					className="text-brand/25"
				/>

				<path
					d="M255 72 L255 300"
					stroke="currentColor"
					strokeWidth="1"
					strokeDasharray="5 7"
					className="text-brand/25"
				/>
			</svg>

			<div
				className={cn(
					`
						absolute left-1/2 top-1/2
						z-20
						grid h-24 w-24
						-translate-x-1/2
						-translate-y-1/2
						place-items-center
						rounded-[1.8rem]
						border border-brand/25
						bg-[#14233a]
						shadow-[0_0_80px_rgba(24,188,183,0.10)]
						transition-all duration-700
					`,
					isActive
						? 'scale-100 opacity-100'
						: 'scale-75 opacity-0',
				)}
			>
				<div className="text-center">
					<Boxes
						className="mx-auto h-6 w-6 text-brand"
						strokeWidth={1.6}
					/>

					<p
						className="
							mt-2 text-[9px]
							font-semibold uppercase
							tracking-[0.14em]
							text-slate-400
						"
					>
						Core
					</p>
				</div>
			</div>

			{nodes.map((node) => {
				const Icon = node.icon;

				return (
					<div
						key={node.label}
						className={cn(
							`
								absolute z-20
								w-[120px]
								rounded-2xl
								border border-white/10
								bg-[#111d31]/90
								p-4
								shadow-xl shadow-black/20
								backdrop-blur-xl
								transition-all duration-700
							`,
							node.position,
							isActive
								? 'translate-y-0 scale-100 opacity-100'
								: 'translate-y-5 scale-90 opacity-0',
						)}
						style={
							{
								transitionDelay: isActive
									? `${node.delay}ms`
									: '0ms',
							} as CSSProperties
						}
					>
						<Icon
							className="h-5 w-5 text-brand"
							strokeWidth={1.6}
						/>

						<p className="mt-3 text-xs font-medium text-slate-300">
							{node.label}
						</p>
					</div>
				);
			})}
		</div>
	);
}

/* =========================================================
   03 — AI & Automation
========================================================= */

function AutomationVisual({
	isActive,
}: {
	isActive: boolean;
}) {
	const steps = [
		{
			title: 'Trigger',
			description: 'New request received',
			icon: Play,
		},
		{
			title: 'AI Process',
			description: 'Understand & decide',
			icon: Sparkles,
		},
		{
			title: 'Workflow',
			description: 'Systems connected',
			icon: Workflow,
		},
		{
			title: 'Complete',
			description: 'Action delivered',
			icon: Check,
		},
	];

	return (
		<div
			className="
				relative mx-auto
				flex h-[370px]
				w-full max-w-[510px]
				items-center
			"
		>
			<div className="relative w-full px-7">
				<div
					aria-hidden="true"
					className="
						absolute bottom-7
						left-[58px] top-7
						w-px
						bg-gradient-to-b
						from-brand/50
						via-brand/20
						to-transparent
					"
				/>

				<div className="space-y-3">
					{steps.map((step, index) => {
						const Icon = step.icon;

						return (
							<div
								key={step.title}
								className={cn(
									`
										relative flex
										items-center gap-4
										transition-all duration-700
										ease-[cubic-bezier(0.22,1,0.36,1)]
									`,
									isActive
										? 'translate-x-0 opacity-100'
										: index % 2 === 0
											? '-translate-x-10 opacity-0'
											: 'translate-x-10 opacity-0',
								)}
								style={{
									transitionDelay: isActive
										? `${100 + index * 110}ms`
										: '0ms',
								}}
							>
								<div
									className="
										relative z-10
										grid h-[58px] w-[58px]
										shrink-0 place-items-center
										rounded-2xl
										border border-brand/20
										bg-[#132138]
										text-brand
										shadow-xl shadow-black/20
									"
								>
									<Icon
										className="h-[18px] w-[18px]"
										strokeWidth={1.7}
									/>
								</div>

								<div
									className="
										flex flex-1
										items-center
										justify-between
										rounded-2xl
										border border-white/[0.075]
										bg-white/[0.025]
										px-5 py-3.5
									"
								>
									<div>
										<p className="text-[13px] font-semibold text-white">
											{step.title}
										</p>

										<p className="mt-1 text-[10px] text-slate-500">
											{step.description}
										</p>
									</div>

									<span
										className="
											font-display
											text-[10px]
											font-semibold
											text-brand
										"
									>
										0{index + 1}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

/* =========================================================
   04 — E-commerce
========================================================= */

function CommerceVisual({
	isActive,
}: {
	isActive: boolean;
}) {
	return (
		<div
			className={cn(
				`
					relative mx-auto
					h-[370px] w-full max-w-[510px]
					transition-all duration-700
				`,
				isActive
					? 'scale-100 opacity-100'
					: 'scale-[0.94] opacity-0',
			)}
		>
			<div
				className="
					absolute left-[2%] top-[3%]
					w-[78%]
					rounded-[1.6rem]
					border border-white/10
					bg-[#111d31]/95
					p-5
					shadow-2xl shadow-black/30
				"
			>
				<div className="flex items-center justify-between">
					<div>
						<p
							className="
								text-[9px]
								font-semibold uppercase
								tracking-[0.18em]
								text-slate-500
							"
						>
							Commerce overview
						</p>

						<p className="mt-2 font-display text-xl font-semibold text-white">
							Store performance
						</p>
					</div>

					<div
						className="
							grid h-10 w-10
							place-items-center
							rounded-xl
							border border-brand/20
							bg-brand/[0.07]
							text-brand
						"
					>
						<ShoppingBag className="h-4 w-4" />
					</div>
				</div>

				<div className="mt-6 grid grid-cols-2 gap-3">
					<div
						className="
							rounded-xl
							border border-white/[0.07]
							bg-white/[0.025]
							p-4
						"
					>
						<p className="text-[10px] text-slate-500">
							Orders
						</p>

						<p className="mt-2 font-display text-2xl font-semibold text-white">
							1,284
						</p>

						<p className="mt-2 text-[10px] font-medium text-brand">
							+18.4%
						</p>
					</div>

					<div
						className="
							rounded-xl
							border border-white/[0.07]
							bg-white/[0.025]
							p-4
						"
					>
						<p className="text-[10px] text-slate-500">
							Conversion
						</p>

						<p className="mt-2 font-display text-2xl font-semibold text-white">
							4.8%
						</p>

						<p className="mt-2 text-[10px] font-medium text-brand">
							Optimized
						</p>
					</div>
				</div>

				<div className="mt-5 flex h-20 items-end gap-2">
					{[35, 52, 44, 70, 58, 82, 68, 92].map(
						(height, index) => (
							<div
								key={index}
								className="flex h-full flex-1 items-end"
							>
								<span
									className={cn(
										`
											block w-full
											rounded-t
											transition-all duration-700
										`,
										index === 7
											? 'bg-brand/80'
											: 'bg-white/10',
									)}
									style={{
										height: isActive
											? `${height}%`
											: '4%',
										transitionDelay: `${index * 50}ms`,
									}}
								/>
							</div>
						),
					)}
				</div>
			</div>

			<div
				className={cn(
					`
						absolute bottom-[7%] right-[1%]
						w-[195px]
						rounded-2xl
						border border-white/10
						bg-[#17243a]/95
						p-4
						shadow-2xl shadow-black/30
						backdrop-blur-xl
						transition-all
						delay-200 duration-700
					`,
					isActive
						? 'translate-x-0 opacity-100'
						: 'translate-x-8 opacity-0',
				)}
			>
				<div className="flex items-center gap-3">
					<div
						className="
							grid h-10 w-10
							place-items-center
							rounded-xl
							bg-brand/[0.08]
							text-brand
						"
					>
						<PackageCheck className="h-5 w-5" />
					</div>

					<div>
						<p className="text-xs font-semibold text-white">
							Order complete
						</p>

						<p className="mt-1 text-[10px] text-slate-500">
							Processed automatically
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

/* =========================================================
   05 — Mobile Apps
========================================================= */

function MobileVisual({
	isActive,
}: {
	isActive: boolean;
}) {
	return (
		<div className="relative mx-auto h-[370px] w-full max-w-[510px]">
			{/* Orbit */}

			<div
				aria-hidden="true"
				className={cn(
					`
						absolute left-1/2 top-1/2
						h-[315px] w-[315px]
						-translate-x-1/2
						-translate-y-1/2
						rounded-full
						border border-dashed
						border-white/[0.07]
						transition-all duration-1000
					`,
					isActive
						? 'rotate-0 scale-100 opacity-100'
						: 'rotate-45 scale-75 opacity-0',
				)}
			/>

			{/* Phone */}

			<div
				className={cn(
					`
						absolute left-1/2 top-1/2
						z-20
						h-[335px] w-[174px]
						-translate-x-1/2
						-translate-y-1/2
						overflow-hidden
						rounded-[2.4rem]
						border-[5px]
						border-[#26344a]
						bg-[#101b2e]
						shadow-2xl shadow-black/40
						transition-all duration-700
						ease-[cubic-bezier(0.22,1,0.36,1)]
					`,
					isActive
						? 'rotate-[-3deg] scale-100 opacity-100'
						: 'rotate-6 scale-90 opacity-0',
				)}
			>
				<div
					className="
						absolute left-1/2 top-2
						z-20 h-5 w-20
						-translate-x-1/2
						rounded-full bg-[#26344a]
					"
				/>

				<div className="px-4 pb-5 pt-11">
					<div className="flex items-center justify-between">
						<div>
							<div className="h-1.5 w-10 rounded-full bg-brand" />
							<div className="mt-2 h-1.5 w-16 rounded-full bg-white/20" />
						</div>

						<div
							className="
								grid h-8 w-8
								place-items-center
								rounded-full
								bg-brand/[0.08]
								text-brand
							"
						>
							<Smartphone className="h-4 w-4" />
						</div>
					</div>

					<div
						className="
							mt-6 rounded-2xl
							border border-brand/15
							bg-brand/[0.06]
							p-4
						"
					>
						<p className="text-[9px] text-slate-500">
							Activity
						</p>

						<p className="mt-2 font-display text-lg font-semibold text-white">
							Your product
						</p>

						<div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
							<div className="h-full w-[74%] rounded-full bg-brand" />
						</div>
					</div>

					<div className="mt-4 grid grid-cols-2 gap-2">
						{[0, 1, 2, 3].map((item) => (
							<div
								key={item}
								className="
									h-[60px]
									rounded-xl
									border border-white/[0.07]
									bg-white/[0.025]
									p-3
								"
							>
								<div className="h-1.5 w-5 rounded-full bg-white/20" />
								<div className="mt-3 h-1.5 w-full rounded-full bg-white/[0.08]" />
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Floating cards */}

			<div
				className={cn(
					`
						absolute right-[1%] top-[16%]
						z-30 w-[160px]
						rounded-2xl
						border border-white/10
						bg-[#17243a]/95
						p-4
						shadow-xl shadow-black/30
						backdrop-blur-xl
						transition-all
						delay-200 duration-700
					`,
					isActive
						? 'translate-x-0 opacity-100'
						: 'translate-x-10 opacity-0',
				)}
			>
				<div className="flex items-center gap-3">
					<span
						className="
							grid h-8 w-8
							place-items-center
							rounded-lg
							bg-brand/[0.08]
						"
					>
						<Check className="h-4 w-4 text-brand" />
					</span>

					<div>
						<p className="text-[11px] font-semibold text-white">
							Ready
						</p>

						<p className="mt-0.5 text-[9px] text-slate-500">
							App deployed
						</p>
					</div>
				</div>
			</div>

			<div
				className={cn(
					`
						absolute bottom-[14%] left-[1%]
						z-30
						rounded-2xl
						border border-white/10
						bg-[#111d31]/90
						px-4 py-3
						backdrop-blur-xl
						transition-all
						delay-300 duration-700
					`,
					isActive
						? 'translate-x-0 opacity-100'
						: '-translate-x-10 opacity-0',
				)}
			>
				<p
					className="
						text-[9px] font-semibold
						uppercase tracking-[0.16em]
						text-slate-500
					"
				>
					Experience
				</p>

				<p className="mt-1 text-xs font-medium text-slate-200">
					Mobile first
				</p>
			</div>
		</div>
	);
}

/* =========================================================
   06 — Cloud & DevOps
========================================================= */

function CloudVisual({
	isActive,
}: {
	isActive: boolean;
}) {
	const servers = [
		{
			label: 'Web',
			value: 'Online',
			icon: Globe2,
		},
		{
			label: 'API',
			value: 'Healthy',
			icon: Server,
		},
		{
			label: 'Database',
			value: 'Synced',
			icon: Database,
		},
	];

	return (
		<div className="relative mx-auto h-[370px] w-full max-w-[510px]">
			<svg
				aria-hidden="true"
				viewBox="0 0 510 370"
				className="absolute inset-0 h-full w-full"
				fill="none"
			>
				<path
					d="M255 90 L100 240"
					className="text-brand/20"
					stroke="currentColor"
					strokeWidth="1"
					strokeDasharray="6 7"
				/>

				<path
					d="M255 90 L255 240"
					className="text-brand/20"
					stroke="currentColor"
					strokeWidth="1"
					strokeDasharray="6 7"
				/>

				<path
					d="M255 90 L410 240"
					className="text-brand/20"
					stroke="currentColor"
					strokeWidth="1"
					strokeDasharray="6 7"
				/>
			</svg>

			{/* Cloud */}

			<div
				className={cn(
					`
						absolute left-1/2 top-[3%]
						z-20
						-translate-x-1/2
						rounded-[1.8rem]
						border border-brand/20
						bg-[#142239]
						px-7 py-4
						shadow-[0_0_80px_rgba(24,188,183,0.10)]
						transition-all duration-700
					`,
					isActive
						? 'translate-y-0 scale-100 opacity-100'
						: '-translate-y-6 scale-90 opacity-0',
				)}
			>
				<div className="flex items-center gap-4">
					<div
						className="
							grid h-10 w-10
							place-items-center
							rounded-xl
							bg-brand/[0.08]
							text-brand
						"
					>
						<Cloud className="h-5 w-5" />
					</div>

					<div>
						<p
							className="
								text-[9px] font-semibold
								uppercase tracking-[0.17em]
								text-slate-500
							"
						>
							Infrastructure
						</p>

						<p className="mt-1 text-sm font-semibold text-white">
							Cloud environment
						</p>
					</div>
				</div>
			</div>

			{/* Servers */}

			<div
				className="
					absolute inset-x-0
					bottom-[13%]
					grid grid-cols-3 gap-4
				"
			>
				{servers.map((server, index) => {
					const Icon = server.icon;

					return (
						<div
							key={server.label}
							className={cn(
								`
									rounded-2xl
									border border-white/[0.09]
									bg-[#111d31]/90
									p-4
									shadow-xl shadow-black/20
									backdrop-blur-xl
									transition-all duration-700
								`,
								isActive
									? 'translate-y-0 opacity-100'
									: 'translate-y-10 opacity-0',
							)}
							style={{
								transitionDelay: isActive
									? `${180 + index * 120}ms`
									: '0ms',
							}}
						>
							<div className="flex items-center justify-between">
								<div
									className="
										grid h-8 w-8
										place-items-center
										rounded-lg
										border border-white/[0.07]
										bg-white/[0.03]
									"
								>
									<Icon className="h-3.5 w-3.5 text-slate-400" />
								</div>

								<span className="h-2 w-2 rounded-full bg-brand" />
							</div>

							<p className="mt-5 text-xs font-semibold text-white">
								{server.label}
							</p>

							<p className="mt-1 text-[10px] text-slate-500">
								{server.value}
							</p>

							<div className="mt-4 space-y-1.5">
								<div className="h-1 rounded-full bg-white/[0.07]">
									<div className="h-full w-[72%] rounded-full bg-brand/50" />
								</div>

								<div className="h-1 rounded-full bg-white/[0.07]">
									<div className="h-full w-[48%] rounded-full bg-white/20" />
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div
				className={cn(
					`
						absolute bottom-0
						left-1/2
						-translate-x-1/2
						transition-all
						delay-500 duration-700
					`,
					isActive
						? 'translate-y-0 opacity-100'
						: 'translate-y-4 opacity-0',
				)}
			>
				<VisualLabel>
					Systems connected
				</VisualLabel>
			</div>
		</div>
	);
}

/* =========================================================
   Visual Router

   Every homepage solution has its OWN visual.
   Nothing cycles or repeats.
========================================================= */

function SolutionVisual({
	solution,
	isActive,
}: {
	solution: HomepageSolution;
	isActive: boolean;
}) {
	switch (solution.visual) {
		case 'web':
			return (
				<WebVisual
					isActive={isActive}
				/>
			);

		case 'software':
			return (
				<SoftwareVisual
					isActive={isActive}
				/>
			);

		case 'automation':
			return (
				<AutomationVisual
					isActive={isActive}
				/>
			);

		case 'commerce':
			return (
				<CommerceVisual
					isActive={isActive}
				/>
			);

		case 'mobile':
			return (
				<MobileVisual
					isActive={isActive}
				/>
			);

		case 'cloud':
			return (
				<CloudVisual
					isActive={isActive}
				/>
			);

		default:
			return null;
	}
}

/* =========================================================
   Desktop Solution
========================================================= */

function DesktopSolution({
	solution,
	index,
	activeIndex,
}: {
	solution: HomepageSolution;
	index: number;
	activeIndex: number;
}) {
	const Icon = solution.icon;

	const isActive = index === activeIndex;
	const isPast = index < activeIndex;

	return (
		<article
			aria-hidden={!isActive}
			className={cn(
				`
					absolute inset-0
					grid grid-cols-12
					items-center gap-12
					transition-all duration-700
					ease-[cubic-bezier(0.22,1,0.36,1)]
				`,
				isActive &&
				`
						z-20
						translate-y-0
						opacity-100
					`,
				isPast &&
				`
						pointer-events-none
						z-10
						-translate-y-10
						opacity-0
					`,
				!isActive &&
				!isPast &&
				`
						pointer-events-none
						z-10
						translate-y-10
						opacity-0
					`,
			)}
		>
			{/* Left */}

			<div className="col-span-6 pr-6 xl:pr-14">
				<div
					className={cn(
						`
							flex items-center gap-4
							transition-all duration-500
						`,
						isActive
							? 'translate-y-0 opacity-100'
							: 'translate-y-3 opacity-0',
					)}
				>
					<span
						className="
							grid h-10 w-10
							place-items-center
							rounded-xl
							border border-brand/20
							bg-brand/[0.06]
							text-brand
						"
					>
						<Icon
							className="h-[18px] w-[18px]"
							strokeWidth={1.7}
							aria-hidden="true"
						/>
					</span>

					<div>
						<p
							className="
								text-[10px] font-bold
								uppercase tracking-[0.2em]
								text-brand
							"
						>
							{solution.eyebrow}
						</p>

						<p className="mt-1 text-[10px] text-slate-600">
							{String(index + 1).padStart(2, '0')}
							{' / '}
							{String(HOMEPAGE_SOLUTIONS.length).padStart(2, '0')}
						</p>
					</div>
				</div>

				<h3
					className={cn(
						`
							mt-6 max-w-2xl
							font-display
							text-[2.7rem] font-semibold
							leading-[0.98]
							tracking-[-0.04em]
							text-white
							transition-all duration-500
							xl:text-[3.5rem]
						`,
						isActive
							? 'translate-y-0 opacity-100 delay-75'
							: 'translate-y-5 opacity-0',
					)}
				>
					{solution.title}
				</h3>

				<p
					className={cn(
						`
							mt-4 max-w-xl
							text-[1.05rem] font-medium
							leading-7 text-slate-300
							transition-all duration-500
							xl:text-[1.15rem]
							xl:leading-8
						`,
						isActive
							? 'translate-y-0 opacity-100 delay-100'
							: 'translate-y-5 opacity-0',
					)}
				>
					{solution.outcome}
				</p>

				<p
					className={cn(
						`
							mt-4 max-w-lg
							text-[14px] leading-6
							text-slate-400
							transition-all duration-500
							xl:leading-7
						`,
						isActive
							? 'translate-y-0 opacity-100 delay-150'
							: 'translate-y-5 opacity-0',
					)}
				>
					{solution.explanation}
				</p>

				<div
					className={cn(
						`
							mt-5 flex max-w-xl
							flex-wrap gap-2
							transition-all duration-500
						`,
						isActive
							? 'translate-y-0 opacity-100 delay-200'
							: 'translate-y-5 opacity-0',
					)}
				>
					{solution.capabilities
						.slice(0, 4)
						.map((capability) => (
							<span
								key={capability}
								className="
									inline-flex items-center
									gap-2 rounded-full
									border border-white/[0.08]
									bg-white/[0.025]
									px-3 py-1.5
									text-[10px] font-medium
									text-slate-400
								"
							>
								<Check
									className="h-3 w-3 text-brand"
									strokeWidth={2}
								/>

								{capability}
							</span>
						))}
				</div>

				<div
					className={cn(
						`
							mt-7
							transition-all duration-500
						`,
						isActive
							? 'translate-y-0 opacity-100 delay-300'
							: 'translate-y-5 opacity-0',
					)}
				>
					<Link
						to={`/solutions/${solution.slug}`}
						tabIndex={isActive ? 0 : -1}
						aria-label={`Explore ${solution.title} services`}
						className="
							group inline-flex
							items-center gap-4
							text-[14px] font-semibold
							text-white
							transition-colors duration-300
							hover:text-brand
						"
					>
						Explore solution

						<span
							className="
								grid h-9 w-9
								place-items-center
								rounded-full
								border border-white/15
								transition-all duration-300
								group-hover:border-brand/30
								group-hover:bg-brand/[0.07]
							"
						>
							<ArrowUpRight
								className="
									h-4 w-4
									transition-transform duration-300
									group-hover:-translate-y-0.5
									group-hover:translate-x-0.5
								"
								aria-hidden="true"
							/>
						</span>
					</Link>
				</div>
			</div>

			{/* Right */}

			<div className="col-span-6">
				<div
					className="
						relative flex
						min-h-[390px]
						items-center justify-center
					"
				>
					<div
						aria-hidden="true"
						className="
							pointer-events-none
							absolute left-1/2 top-1/2
							h-[320px] w-[320px]
							-translate-x-1/2
							-translate-y-1/2
							rounded-full
							bg-brand/[0.04]
							blur-[90px]
						"
					/>

					<span
						aria-hidden="true"
						className="
							pointer-events-none
							absolute -right-2 -top-2
							select-none
							font-display
							text-[8rem] font-semibold
							leading-none
							tracking-[-0.08em]
							text-transparent
							opacity-[0.05]
							[-webkit-text-stroke:1px_#94A3B8]
						"
					>
						{String(index + 1).padStart(2, '0')}
					</span>

					<div className="relative z-10 w-full">
						<SolutionVisual
							solution={solution}
							isActive={isActive}
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

/* =========================================================
   Desktop
========================================================= */

function DesktopSolutions() {
	const containerRef =
		useRef<HTMLDivElement>(null);

	const [activeIndex, setActiveIndex] =
		useState(0);

	useEffect(() => {
		const update = () => {
			const container =
				containerRef.current;

			if (!container) return;

			const rect =
				container.getBoundingClientRect();

			const scrollableDistance =
				container.offsetHeight -
				window.innerHeight;

			if (scrollableDistance <= 0) {
				return;
			}

			const travelled = Math.min(
				Math.max(-rect.top, 0),
				scrollableDistance,
			);

			const progress = Math.min(
				travelled / scrollableDistance,
				0.999999,
			);

			const nextIndex = Math.floor(
				progress * HOMEPAGE_SOLUTIONS.length,
			);

			setActiveIndex((current) =>
				current === nextIndex
					? current
					: nextIndex,
			);
		};

		update();

		window.addEventListener(
			'scroll',
			update,
			{
				passive: true,
			},
		);

		window.addEventListener(
			'resize',
			update,
		);

		return () => {
			window.removeEventListener(
				'scroll',
				update,
			);

			window.removeEventListener(
				'resize',
				update,
			);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative hidden lg:block"
			style={{
				height: `calc(100vh + ${(HOMEPAGE_SOLUTIONS.length - 1) * 52
					}vh)`,
			}}
		>
			{/*
				Reduced top offset / padding.

				Previously we had:
				top-20 + pt-5 + vertically centered content.

				This version sits closer to the navbar
				without being covered by it.
			*/}

			<div
				className="
					sticky top-16
					h-[calc(100vh-4rem)]
					min-h-[650px]
					overflow-hidden
				"
			>
				<div
					className="
						mx-auto flex h-full
						w-full max-w-8xl
						flex-col
						px-8
						pt-5
						xl:px-10
					"
				>
					{/* =====================================================
					    Header
					===================================================== */}

					<div
						className="
		flex shrink-0
		items-end
		justify-between
		gap-10
		pt-0
		xl:pt-0
	"
					>
						{/* Section heading */}
						<div>
							<div className="flex items-center gap-3">
								<span
									aria-hidden="true"
									className="h-px w-7 bg-brand"
								/>

								<p
									className="
					text-[10px] font-bold
					uppercase
					tracking-[0.22em]
					text-brand
				"
								>
									What we build
								</p>
							</div>

							<h2
								id="solutions-heading"
								className="
				my-5 max-w-2xl
				font-display
				text-[2rem]
				font-semibold
				leading-[1.04]
				tracking-[-0.035em]
				text-white
				xl:text-[2.35rem]
			"
							>
								Six capabilities.
								<span className="ml-2 text-slate-400">
									One technology partner.
								</span>
							</h2>
						</div>

						{/* View all solutions */}
						<Link
							to="/solutions"
							aria-label="View all Codelaro technology services and solutions"
							className="
			group mb-5
			inline-flex
			items-center gap-3
			text-base font-semibold
			text-slate-300
			transition-colors
			duration-300
			hover:text-brand
		"
						>
							<span>View all solutions</span>

							<span
								aria-hidden="true"
								className="
				grid h-9 w-9
				place-items-center
				rounded-full
				border border-white/10
				transition-all
				duration-300
				group-hover:border-brand/30
				group-hover:bg-brand/[0.06]
			"
							>
								<ArrowUpRight
									className="
					h-4 w-4
					transition-transform
					duration-300
					group-hover:-translate-y-0.5
					group-hover:translate-x-0.5
				"
								/>
							</span>
						</Link>
					</div>

					{/* =====================================================
					    Progress
					===================================================== */}

					<div
						className="
							mt-4 flex shrink-0
							items-center gap-5
							
							pt-3
						"
					>
						<div className="flex items-baseline gap-2">
							<span
								className="
									font-display
									text-lg font-semibold
									text-white
								"
							>
								{String(
									activeIndex + 1,
								).padStart(2, '0')}
							</span>

							<span className="text-[10px] text-slate-600">
								/
							</span>

							<span className="text-[10px] font-medium text-slate-500">
								{String(
									HOMEPAGE_SOLUTIONS.length,
								).padStart(2, '0')}
							</span>
						</div>

						<div className="flex flex-1 gap-1.5">
							{HOMEPAGE_SOLUTIONS.map(
								(solution, index) => (
									<div
										key={solution.slug}
										className="
											h-px flex-1
											overflow-hidden
											bg-white/[0.08]
										"
									>
										<span
											className={cn(
												`
													block h-full
													origin-left
													bg-brand
													transition-transform
													duration-500
												`,
												index <=
													activeIndex
													? 'scale-x-100'
													: 'scale-x-0',
											)}
										/>
									</div>
								),
							)}
						</div>

						<p
							className="
								hidden
								text-[9px] font-semibold
								uppercase
								tracking-[0.18em]
								text-slate-600
								xl:block
							"
						>
							Scroll to explore
						</p>
					</div>

					{/* =====================================================
					    Content
					===================================================== */}

					<div
						className="
							relative mt-2
							min-h-0 flex-1
						"
					>
						{HOMEPAGE_SOLUTIONS.map(
							(solution, index) => (
								<DesktopSolution
									key={solution.slug}
									solution={solution}
									index={index}
									activeIndex={
										activeIndex
									}
								/>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

/* =========================================================
   Mobile Solution
========================================================= */

function MobileSolution({
	solution,
	index,
}: {
	solution: HomepageSolution;
	index: number;
}) {
	const Icon = solution.icon;

	return (
		<article
			className="
				border-t border-white/[0.08]
				py-8
				last:border-b
			"
		>
			<div className="flex items-center justify-between gap-5">
				<div className="flex items-center gap-3">
					<span
						className="
							grid h-10 w-10
							place-items-center
							rounded-xl
							border border-brand/15
							bg-brand/[0.05]
							text-brand
						"
					>
						<Icon
							className="h-[18px] w-[18px]"
							strokeWidth={1.7}
							aria-hidden="true"
						/>
					</span>

					<div>
						<p
							className="
								text-[9px]
								font-semibold uppercase
								tracking-[0.18em]
								text-brand
							"
						>
							{solution.eyebrow}
						</p>

						<p className="mt-1 text-[9px] text-slate-600">
							{String(index + 1).padStart(2, '0')}
							{' / '}
							{String(HOMEPAGE_SOLUTIONS.length).padStart(2, '0')}
						</p>
					</div>
				</div>

				<span
					aria-hidden="true"
					className="
						font-display
						text-4xl font-semibold
						leading-none
						text-transparent
						opacity-20
						[-webkit-text-stroke:1px_#94A3B8]
					"
				>
					{String(index + 1).padStart(2, '0')}
				</span>
			</div>

			<h3
				className="
					mt-6 font-display
					text-[1.8rem] font-semibold
					leading-[1.08]
					tracking-[-0.025em]
					text-white
					sm:text-[2.1rem]
				"
			>
				{solution.title}
			</h3>

			<p
				className="
					mt-3
					text-[16px] font-medium
					leading-7 text-slate-300
				"
			>
				{solution.outcome}
			</p>

			<p
				className="
					mt-4
					text-[14px] leading-6
					text-slate-400
					sm:text-[15px]
				"
			>
				{solution.explanation}
			</p>

			<ul className="mt-6 grid gap-3 sm:grid-cols-2">
				{solution.capabilities.map(
					(capability) => (
						<li
							key={capability}
							className="
								flex items-start gap-2.5
								text-[13px]
								leading-5
								text-slate-300
							"
						>
							<Check
								className="
									mt-0.5 h-4 w-4
									shrink-0 text-brand
								"
								strokeWidth={2}
								aria-hidden="true"
							/>

							{capability}
						</li>
					),
				)}
			</ul>

			<Link
				to={`/solutions/${solution.slug}`}
				aria-label={`Explore ${solution.title} services`}
				className="
					group mt-7
					inline-flex
					items-center gap-2.5
					text-[14px] font-semibold
					text-white
					transition-colors
					hover:text-brand
				"
			>
				Explore solution

				<ArrowUpRight
					className="
						h-4 w-4
						transition-transform duration-300
						group-hover:-translate-y-0.5
						group-hover:translate-x-0.5
					"
					aria-hidden="true"
				/>
			</Link>
		</article>
	);
}

/* =========================================================
   Mobile
========================================================= */

function MobileSolutions() {
	return (
		<div
			className="
				mx-auto w-full max-w-8xl
				px-5 py-16
				sm:px-8 sm:py-20
				lg:hidden
			"
		>
			<div className="flex items-center gap-3">
				<span
					aria-hidden="true"
					className="h-px w-7 bg-brand"
				/>

				<p
					className="
						text-[10px] font-bold
						uppercase tracking-[0.22em]
						text-brand
					"
				>
					What we build
				</p>
			</div>

			<h2
				id="solutions-heading-mobile"
				className="
					mt-4 max-w-2xl
					font-display
					text-[2.2rem] font-semibold
					leading-[1.06]
					tracking-[-0.03em]
					text-white
					sm:text-[2.7rem]
				"
			>
				Six capabilities.
				<span className="block text-slate-400">
					One technology partner.
				</span>
			</h2>

			<p
				className="
					mt-4 max-w-xl
					text-[14px] leading-7
					text-slate-400
					sm:text-[15px]
				"
			>
				Codelaro combines strategy, design,
				engineering and automation to build
				digital products and technology systems
				around real business goals.
			</p>

			<div className="mt-10">
				{HOMEPAGE_SOLUTIONS.map(
					(solution, index) => (
						<MobileSolution
							key={solution.slug}
							solution={solution}
							index={index}
						/>
					),
				)}
			</div>

			<Link
				to="/solutions"
				aria-label="View all Codelaro technology services and solutions"
				className="
					group mt-8
					inline-flex
					items-center gap-2.5
					rounded-xl
					border border-white/15
					bg-white/[0.04]
					px-5 py-3
					text-[14px] font-semibold
					text-white
					transition-all duration-300
					hover:border-brand/25
					hover:bg-brand/[0.05]
				"
			>
				View all solutions

				<ArrowUpRight
					className="
						h-4 w-4
						transition-transform duration-300
						group-hover:-translate-y-0.5
						group-hover:translate-x-0.5
						group-hover:text-brand
					"
					aria-hidden="true"
				/>
			</Link>
		</div>
	);
}

/* =========================================================
   Solutions
========================================================= */

export function Solutions() {
	return (
		<section
			id="solutions"
			aria-label="Codelaro technology services and solutions"
			className="
				relative
				scroll-mt-20
				overflow-visible
				bg-navy
			"
		>
			{/* Background */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
					overflow-hidden
				"
			>
				<span
					className="
						absolute inset-0
						bg-blueprint-grid-dark
						opacity-[0.09]
					"
				/>

				<span
					className="
						absolute
						-left-56 top-[15%]
						h-[34rem] w-[34rem]
						rounded-full
						bg-brand/[0.035]
						blur-3xl
					"
				/>

				<span
					className="
						absolute
						-bottom-48 -right-52
						h-[32rem] w-[32rem]
						rounded-full
						bg-brand/[0.025]
						blur-3xl
					"
				/>
			</div>

			<div className="relative">
				<DesktopSolutions />
				<MobileSolutions />
			</div>
		</section>
	);
}