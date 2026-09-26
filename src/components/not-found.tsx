import { Link } from 'react-router';

import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	Home,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const QUICK_LINKS = [
	{
		label: 'Services',
		href: '/services',
		description: 'Explore our development expertise',
	},
	{
		label: 'Solutions',
		href: '/solutions',
		description: 'Discover solutions for your business',
	},
	{
    label: 'Industries',
    href: '/industries',
    description: 'Explore the industries we serve',
},
	{
		label: 'Company',
		href: '/company',
		description: 'Get to know Codelaro',
	},
];

/* -------------------------------------------------------------------------- */
/* Navigation Item                                                            */
/* -------------------------------------------------------------------------- */

function NavigationItem({
	label,
	href,
	description,
	index,
}: {
	label: string;
	href: string;
	description: string;
	index: number;
}) {
	return (
		<Link
			to={href}
			className="
				group
				relative
				flex items-center
				justify-between
				gap-5
				border-b border-navy/[0.09]
				py-5
				transition-colors
				duration-300
				hover:border-brand/40
				sm:py-6
			"
		>
			<div className="flex min-w-0 items-center gap-4 sm:gap-6">

				{/* Number */}

				<span
					className="
						font-mono
						text-[11px]
						font-semibold
						text-brand
					"
				>
					{String(index + 1).padStart(2, '0')}
				</span>

				{/* Text */}

				<div>
					<h3
						className="
							font-display
							text-[16px]
							font-semibold
							tracking-[-0.02em]
							text-navy
							transition-colors
							duration-300
							group-hover:text-brand-700
							sm:text-[18px]
						"
					>
						{label}
					</h3>

					<p
						className="
							mt-1
							text-[12px]
							leading-relaxed
							text-slate-500
							sm:text-[13px]
						"
					>
						{description}
					</p>
				</div>
			</div>

			{/* Arrow */}

			<span
				className="
					grid h-9 w-9
					shrink-0
					place-items-center
					rounded-full
					border border-slate-200
					text-navy
					transition-all
					duration-300
					group-hover:border-brand/30
					group-hover:bg-brand
					group-hover:text-white
				"
			>
				<ArrowUpRight
					aria-hidden="true"
					className="
						h-4 w-4
						transition-transform
						duration-300
						group-hover:translate-x-0.5
						group-hover:-translate-y-0.5
					"
					strokeWidth={1.7}
				/>
			</span>
		</Link>
	);
}

/* -------------------------------------------------------------------------- */
/* Not Found                                                                  */
/* -------------------------------------------------------------------------- */

export function NotFound() {
	return (
		<main
			id="not-found"
			className="
				relative
				isolate
				min-h-[100dvh]
				overflow-hidden
				bg-[#F8FAFC]
			"
		>
			{/* -------------------------------------------------------------- */}
			{/* Background                                                     */}
			{/* -------------------------------------------------------------- */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
					bg-blueprint-grid
					opacity-[0.2]
					[mask-image:linear-gradient(to_bottom,black,transparent_75%)]
				"
			/>

			{/* Ambient lighting */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute -right-52 -top-52
					h-[600px] w-[600px]
					rounded-full
					bg-brand/[0.045]
					blur-[120px]
				"
			/>

			{/* -------------------------------------------------------------- */}
			{/* Main Container                                                 */}
			{/* -------------------------------------------------------------- */}

			<div
				className="
					relative
					mx-auto
					w-full
					max-w-8xl
					px-5
					pb-16 pt-16
					sm:px-8
					sm:pb-20 sm:pt-32
					lg:pb-20 lg:pt-32
				"
			>
				{/* ---------------------------------------------------------- */}
				{/* Error Content                                               */}
				{/* ---------------------------------------------------------- */}

				<div
					className="
						grid
						items-center
						gap-12
						lg:grid-cols-12
						lg:gap-16
						xl:gap-24
					"
				>
					{/* LEFT: Error information */}

					<div className="order-2 lg:order-1 lg:col-span-7">

						{/* Eyebrow */}

						<div className="flex items-center gap-3">

							<span
								aria-hidden="true"
								className="h-px w-8 bg-brand"
							/>

							<p
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.2em]
									text-brand-700
								"
							>
								Error 404 / Page not found
							</p>

						</div>

						{/* Heading */}

						<h1
							className="
								mt-7
								max-w-2xl
								font-display
								text-[clamp(2.5rem,4.6vw,5.2rem)]
								font-semibold
								leading-[1.08]
								tracking-[-0.045em]
								text-navy
							"
						>
							Looks like you've
							<br />

							<span className="text-brand">
								lost your way.
							</span>
						</h1>

						{/* Description */}

						<p
							className="
								mt-7
								max-w-lg
								text-[15px]
								leading-[1.9]
								text-slate-500
								sm:text-[17px]
							"
						>
							The page you're looking for doesn't exist,
							may have moved, or is temporarily unavailable.
							Let's get you back to where you need to be.
						</p>

						{/* CTA buttons */}

						<div
							className="
								mt-10
								flex flex-col
								items-start
								gap-3
								sm:flex-row
								sm:items-center
							"
						>
							{/* Primary button */}

							<Link
								to="/"
								className="
									group
									inline-flex
									min-h-[52px]
									w-full
									items-center
									justify-center
									gap-3
									rounded-xl
									bg-brand
									px-7
									font-display
									text-[14px]
									font-semibold
									text-white
									transition-all
									duration-300
									hover:-translate-y-0.5
									hover:bg-brand-600
									hover:shadow-lg
									hover:shadow-brand/20
									active:translate-y-0
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
									motion-reduce:transform-none
									sm:w-auto
								"
							>
								<Home
									aria-hidden="true"
									className="h-4 w-4"
									strokeWidth={1.8}
								/>

								Back to Homepage

								<ArrowUpRight
									aria-hidden="true"
									className="
										h-4 w-4
										transition-transform
										duration-300
										group-hover:translate-x-0.5
										group-hover:-translate-y-0.5
									"
								/>
							</Link>

							{/* Secondary button */}

							<Link
								to="/contact"
								className="
									group
									inline-flex
									min-h-[52px]
									w-full
									items-center
									justify-center
									gap-3
									rounded-xl
									border border-slate-200
									bg-white
									px-7
									font-display
									text-[14px]
									font-semibold
									text-navy
									transition-all
									duration-300
									hover:border-brand/30
									hover:bg-brand/[0.035]
									active:scale-[0.98]
									focus-visible:outline-2
									focus-visible:outline-offset-4
									focus-visible:outline-brand
									sm:w-auto
								"
							>
								Contact Us

								<ArrowRight
									aria-hidden="true"
									className="
										h-4 w-4
										text-brand
										transition-transform
										duration-300
										group-hover:translate-x-1
									"
									strokeWidth={1.8}
								/>
							</Link>

						</div>

						{/* Supporting statement */}

						<div
							className="
								mt-12
								flex items-center
								gap-3
								border-t border-navy/[0.08]
								pt-6
							"
						>
							<span
								className="
									h-1.5 w-1.5
									rounded-full
									bg-brand
								"
							/>

							<p
								className="
									text-[12px]
									font-medium
									text-slate-400
								"
							>
								Every great journey finds its direction.
							</p>
						</div>

					</div>

					{/* ------------------------------------------------------ */}
					{/* RIGHT: Large 404 graphic                               */}
					{/* ------------------------------------------------------ */}

					<div
						className="
							order-1
							relative
							flex
							min-h-[200px]
							items-center
							justify-center
							lg:order-2
							lg:col-span-5
							lg:min-h-[450px]
						"
					>
						{/* Subtle circular guides */}

						<div
							aria-hidden="true"
							className="
								absolute
								aspect-square
								w-[260px]
								rounded-full
								border border-brand/[0.09]
								sm:w-[350px]
								lg:w-[430px]
							"
						/>

						<div
							aria-hidden="true"
							className="
								absolute
								aspect-square
								w-[190px]
								rounded-full
								border border-brand/[0.12]
								sm:w-[270px]
								lg:w-[330px]
							"
						/>

						{/* Main number */}

						<div
							aria-hidden="true"
							className="
								relative
								select-none
								font-display
								text-[clamp(8rem,18vw,17rem)]
								font-bold
								leading-none
								tracking-[-0.11em]
								text-transparent
								[-webkit-text-stroke:2px_#0F172A]
							"
						>
							404
						</div>

						{/* Floating status */}

						<div
							className="
								absolute
								bottom-0 left-1/2
								flex
								-translate-x-1/2
								items-center
								gap-3
								whitespace-nowrap
								rounded-full
								border border-slate-200
								bg-white
								px-5 py-3
								shadow-[0_15px_40px_-20px_rgba(15,23,42,0.2)]
								lg:bottom-8
							"
						>
							<span
								className="
									relative
									flex h-2 w-2
								"
							>
								<span
									className="
										absolute
										inline-flex
										h-full w-full
										rounded-full
										bg-brand/30
									"
								/>

								<span
									className="
										relative
										h-2 w-2
										rounded-full
										bg-brand
									"
								/>
							</span>

							<span
								className="
									font-mono
									text-[10px]
									font-semibold
									uppercase
									tracking-[0.15em]
									text-navy
								"
							>
								Page not found
							</span>

						</div>

					</div>

				</div>

				{/* ---------------------------------------------------------- */}
				{/* Navigation Directory                                       */}
				{/* ---------------------------------------------------------- */}

				<div
					className="
						mt-20
						border-t border-navy/10
						pt-10
						lg:mt-28
						lg:pt-12
					"
				>
					{/* Directory header */}

					<div
						className="
							flex
							flex-col
							gap-3
							sm:flex-row
							sm:items-end
							sm:justify-between
						"
					>
						<div>
							<p
								className="
									font-mono
									text-[10px]
									font-semibold
									uppercase
									tracking-[0.2em]
									text-brand-700
								"
							>
								Explore Codelaro
							</p>

							<h2
								className="
									mt-3
									font-display
									text-[24px]
									font-semibold
									tracking-[-0.035em]
									text-navy
									sm:text-[30px]
								"
							>
								Find your next destination.
							</h2>
						</div>

						<p
							className="
								max-w-xs
								text-[13px]
								leading-relaxed
								text-slate-500
							"
						>
							Explore our services, solutions and
							the work we do.
						</p>
					</div>

					{/* Navigation grid */}

					<nav
						aria-label="Suggested pages"
						className="
							mt-9
							grid
							grid-cols-1
							gap-x-12
							sm:grid-cols-2
							lg:gap-x-20
						"
					>
						{QUICK_LINKS.map((link, index) => (
							<NavigationItem
								key={link.href}
								{...link}
								index={index}
							/>
						))}
					</nav>

				</div>

				{/* ---------------------------------------------------------- */}
				{/* Bottom                                                     */}
				{/* ---------------------------------------------------------- */}

				<div
					className="
						mt-16
						flex
						flex-col
						gap-4
						border-t border-navy/[0.08]
						pt-6
						sm:flex-row
						sm:items-center
						sm:justify-between
					"
				>
					<p
						className="
							font-mono
							text-[10px]
							font-medium
							uppercase
							tracking-[0.15em]
							text-slate-400
						"
					>
						Codelaro / Code. Launch. Grow.
					</p>

					<Link
						to="/"
						className="
							group
							inline-flex
							w-fit
							items-center
							gap-2
							font-display
							text-[12px]
							font-semibold
							text-navy
							transition-colors
							duration-300
							hover:text-brand
						"
					>
						<ArrowLeft
							aria-hidden="true"
							className="
								h-3.5 w-3.5
								transition-transform
								duration-300
								group-hover:-translate-x-1
							"
						/>

						Return Home
					</Link>
				</div>

			</div>
		</main>
	);
}