import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	BrainCircuit,
	Cloud,
	Cpu,
	Database,
	Layers3,
	LockKeyhole,
	Network,
	Smartphone,
	Workflow,
	type LucideIcon,
} from 'lucide-react';

import type { Industry } from '@/data/industries';

/* -------------------------------------------------------------------------- */
/* Technology Icon Resolver                                                   */
/* -------------------------------------------------------------------------- */

function getTechnologyIcon(title: string): LucideIcon {
	const value = title.toLowerCase();

	if (/\bai\b|artificial intelligence|machine learning|predictive/.test(value))
		return BrainCircuit;

	if (/automation|workflow|process/.test(value))
		return Workflow;

	if (/cloud|infrastructure|hosting|scaling/.test(value))
		return Cloud;

	if (/data|analytics|reporting|intelligence/.test(value))
		return Database;

	if (/security|privacy|compliance|protection/.test(value))
		return LockKeyhole;

	if (/mobile|application|app/.test(value))
		return Smartphone;

	if (/integration|api|connected/.test(value))
		return Network;

	if (/platform|architecture|system/.test(value))
		return Layers3;

	return Cpu;
}

const formatNumber = (value: number) =>
	String(value).padStart(2, '0');

/* -------------------------------------------------------------------------- */
/* Industry Technology                                                        */
/* -------------------------------------------------------------------------- */

export function IndustryTechnology({
	industry,
}: {
	industry: Industry;
}) {
	const [activeIndex, setActiveIndex] = useState(0);

	const possibilities = industry.technologyPossibilities ?? [];

	useEffect(() => {
		setActiveIndex(0);
	}, [industry.slug]);

	if (possibilities.length === 0) {
		return null;
	}

	const total = possibilities.length;

	const selectedIndex = Math.min(activeIndex, total - 1);

	const selected = possibilities[selectedIndex];

	const SelectedIcon = getTechnologyIcon(selected.title);

	const previous = () => {
		setActiveIndex(
			(current) =>
				(Math.min(current, total - 1) - 1 + total) % total
		);
	};

	const next = () => {
		setActiveIndex(
			(current) =>
				(Math.min(current, total - 1) + 1) % total
		);
	};

	return (
		<section
			id="industry-technology"
			aria-labelledby="industry-technology-heading"
			className="
				relative
				overflow-hidden
				bg-white
				py-16
				sm:py-20
				lg:py-20
				xl:py-20
			"
		>
			<div className="mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* ====================================================== */}
				{/* SECTION INTRODUCTION                                   */}
				{/* ====================================================== */}

				<div
					className="
						grid
						items-end
						gap-7
						lg:grid-cols-12
						lg:gap-14
					"
				>

					{/* Heading */}

					<div className="min-w-0 lg:col-span-7">

						<div className="flex items-center gap-3">

							<span
								aria-hidden="true"
								className="h-[2px] w-8 shrink-0 bg-brand"
							/>

							<p
								className="
									font-mono
									text-[10px]
									font-semibold
									uppercase
									tracking-[0.18em]
									text-brand-700
									sm:text-[11px]
									sm:tracking-[0.22em]
								"
							>
								Technology opportunities
							</p>

						</div>

						<h2
							id="industry-technology-heading"
							className="
								mt-6
								max-w-[800px]
								font-display
								text-[clamp(2.2rem,4.3vw,3.5rem)]
								font-semibold
								leading-[1.1]
								tracking-[-0.045em]
								text-navy
								sm:mt-7
							"
						>
							Technology that
							<br />

							<span className="text-slate-400">
								Moves you Forward.
							</span>

						</h2>

					</div>


					{/* Introduction */}

					<div className="min-w-0 lg:col-span-5">

						<div className="max-w-[470px] lg:ml-auto lg:pb-2">

							<p
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.18em]
									text-brand-700
								"
							>
								{industry.title}
							</p>

							<p
								className="
									mt-3
									text-[15px]
									leading-[1.8]
									text-slate-600
									sm:mt-4
									sm:text-[17px]
								"
							>
								Explore how modern technologies
								can unlock new opportunities,
								improve operations, and support
								the digital evolution of{' '}
								{industry.title.toLowerCase()}.
							</p>

						</div>

					</div>

				</div>


				{/* ====================================================== */}
				{/* TECHNOLOGY SHOWCASE                                    */}
				{/* ====================================================== */}

				<div className="mt-12 sm:mt-16 lg:mt-20">

					{/* Showcase Header */}

					<div
						className="
							mb-5
							flex
							flex-wrap
							items-center
							justify-between
							gap-3
							sm:mb-6
						"
					>

						<div className="flex items-center gap-3">

							<span
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.17em]
									text-navy
								"
							>
								Explore possibilities
							</span>

							<span
								className="
									rounded-full
									border border-brand/20
									bg-brand/[0.07]
									px-2.5 py-1
									font-mono
									text-[10px]
									font-semibold
									text-brand-700
								"
							>
								{formatNumber(total)}
							</span>

						</div>

						<span
							className="
								hidden
								font-mono
								text-[11px]
								text-slate-400
								sm:inline
							"
						>
							Select a technology to explore
						</span>

					</div>


					{/* ================================================== */}
					{/* TECHNOLOGY SELECTOR                                */}
					{/* ================================================== */}

					<div
						role="tablist"
						aria-label={`${industry.title} technology possibilities`}
						className="
							-flex
							flex
							snap-x
							snap-mandatory
							gap-2.5
							overflow-x-auto
							overscroll-x-contain
							pb-4
							[-webkit-overflow-scrolling:touch]

							sm:flex-wrap
							sm:overflow-visible

							lg:gap-3
						"
					>

						{possibilities.map((tech, index) => {

							const isActive = index === selectedIndex;

							const Icon = getTechnologyIcon(tech.title);

							return (

								<button
									key={`${industry.slug}-${tech.title}-${index}`}
									id={`technology-tab-${industry.slug}-${index}`}
									type="button"
									role="tab"
									aria-selected={isActive}
									aria-controls={`technology-panel-${industry.slug}-${index}`}
									tabIndex={isActive ? 0 : -1}
									onClick={() => setActiveIndex(index)}
									onKeyDown={(event) => {

										let target = index;

										if (event.key === 'ArrowRight') {
											target = (index + 1) % total;
										} else if (event.key === 'ArrowLeft') {
											target = (index - 1 + total) % total;
										} else if (event.key === 'Home') {
											target = 0;
										} else if (event.key === 'End') {
											target = total - 1;
										} else {
											return;
										}

										event.preventDefault();

										setActiveIndex(target);

										const tabs =
											event.currentTarget.parentElement
												?.querySelectorAll<HTMLButtonElement>(
													'[role="tab"]'
												);

										tabs?.[target]?.focus();

									}}
									className={`
										group
										relative
										inline-flex
										min-h-[50px]
										max-w-[260px]
										shrink-0
										snap-start
										items-center
										gap-2.5
										rounded-xl
										border
										px-4
										py-3
										text-left
										transition-all
										duration-300

										sm:min-h-[55px]
										sm:max-w-none
										sm:gap-3

										focus-visible:outline
										focus-visible:outline-2
										focus-visible:outline-offset-2
										focus-visible:outline-brand

										motion-reduce:transition-none

										${
											isActive
												? `
													border-brand
													bg-brand
													text-white
													shadow-sm
												`
												: `
													border-navy/10
													bg-white
													text-navy

													hover:border-brand/40
													hover:bg-brand/[0.06]
												`
										}
									`}
								>

									{/* Icon */}

									<Icon
										aria-hidden="true"
										className={`
											h-[18px]
											w-[18px]
											shrink-0

											${
												isActive
													? 'text-white'
													: 'text-brand-700'
											}
										`}
										strokeWidth={1.8}
									/>


									{/* Technology Title */}

									<span
										className="
											min-w-0
											font-display
											text-[13px]
											font-semibold
											leading-snug
											sm:text-[14px]
										"
									>
										{tech.title}
									</span>


									{/* Active Indicator */}

									{isActive && (

										<span
											aria-hidden="true"
											className="
												absolute
												bottom-0
												left-5
												right-5
												h-[2px]
												rounded-full
												bg-navy/40
											"
										/>

									)}

								</button>

							);

						})}

					</div>


					{/* ================================================== */}
					{/* MAIN PRESENTATION PANEL                            */}
					{/* ================================================== */}

					<div
						className="
							relative
							mt-4
							overflow-hidden

							rounded-[22px]
							border
							border-navy/[0.07]
							bg-[#F8FAFC]

							sm:mt-5
							sm:rounded-[30px]

							lg:rounded-[36px]
						"
					>

						{/* Top Accent */}

						<div
							aria-hidden="true"
							className="
								absolute
								left-6
								top-0
								h-[3px]
								w-20
								rounded-b-full
								bg-brand

								sm:left-10
								sm:w-24

								lg:left-14
							"
						/>


						{/* Presentation Content */}

						<div
							className="
								grid
								min-w-0
								items-center

								gap-7
								p-6
								pt-9

								sm:gap-10
								sm:p-10

								lg:grid-cols-[minmax(0,1fr)_230px]
								lg:gap-14
								lg:px-14
								lg:py-16

								xl:px-16
								xl:py-20
							"
						>

							{/* ---------------------------------------------- */}
							{/* Selected Technology                            */}
							{/* ---------------------------------------------- */}

							<div className="min-w-0">

								{/* Top Header */}

								<div
									className="
										flex
										flex-wrap
										items-center
										gap-3
									"
								>

									{/* Mobile Technology Icon */}

									<div
										aria-hidden="true"
										className="
											flex
											h-10 w-10
											shrink-0
											items-center
											justify-center

											rounded-xl
											bg-brand
											text-navy

											lg:hidden
										"
									>
										<SelectedIcon
											className="h-5 w-5"
											strokeWidth={1.7}
										/>
									</div>


									<span
										className="
											font-mono
											text-[10px]
											font-semibold
											uppercase
											tracking-[0.15em]
											text-brand-700

											sm:text-[11px]
											sm:tracking-[0.2em]
										"
									>
										Selected opportunity
									</span>


									<span
										className="
											font-mono
											text-[11px]
											text-slate-400
										"
									>
										/
										{' '}
										{formatNumber(selectedIndex + 1)}
									</span>

								</div>


								{/* Selected Technology Description */}

								<div
									className="
										mt-6
										max-w-[800px]

										sm:mt-8
									"
								>

									{possibilities.map((tech, index) => (

										<div
											key={`${industry.slug}-${tech.title}-${index}`}
											id={`technology-panel-${industry.slug}-${index}`}
											role="tabpanel"
											aria-labelledby={`technology-tab-${industry.slug}-${index}`}
											tabIndex={0}
											hidden={index !== selectedIndex}
											className="
												focus-visible:outline
												focus-visible:outline-2
												focus-visible:outline-offset-4
												focus-visible:outline-brand
											"
										>

											<p
												className="
													max-w-[760px]
													font-display

													text-[clamp(1.35rem,2.6vw,1.8rem)]
													font-medium
													leading-[1.5]
													tracking-[-0.035em]
													text-navy
												"
											>
												{tech.description}
											</p>

										</div>

									))}

								</div>


								{/* Contact CTA */}

								<Link
									to="/contact"
									className="
										group
										mt-8
										inline-flex
										max-w-full
										items-center
										gap-3

										font-display
										text-[16px]
										font-semibold
										text-navy

										transition-colors
										duration-300

										hover:text-brand-700

										sm:mt-9
										sm:text-[16px]

										focus-visible:outline
										focus-visible:outline-2
										focus-visible:outline-offset-4
										focus-visible:outline-brand
									"
								>

									<span>
										Explore this opportunity
									</span>


									<span
										className="
											flex
											h-9 w-9
											shrink-0
											items-center
											justify-center

											rounded-full
											bg-brand
											text-white

											transition-all
											duration-300

											group-hover:bg-brand-600
											group-hover:text-white
										"
									>

										<ArrowUpRight
											aria-hidden="true"
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


							{/* ---------------------------------------------- */}
							{/* Desktop Technology Illustration                */}
							{/* ---------------------------------------------- */}

							<div
								aria-hidden="true"
								className="
									relative
									hidden

									h-[230px]
									w-[230px]

									items-center
									justify-center

									lg:flex
								"
							>

								{/* Outer Ring */}

								<div
									className="
										absolute
										inset-0

										rounded-full
										border
										border-brand/15
									"
								/>


								{/* Inner Ring */}

								<div
									className="
										absolute
										inset-5

										rounded-full
										border
										border-dashed
										border-brand/30
									"
								/>


								{/* Main Technology Icon */}

								<div
									className="
										relative
										z-10

										flex
										h-28
										w-28

										items-center
										justify-center

										rounded-[30px]
										border-[5px]
										border-white

										bg-brand

										shadow-[0_15px_45px_-20px_rgba(24,188,183,0.35)]
									"
								>

									<SelectedIcon
										key={`${industry.slug}-${selectedIndex}`}
										className="
											h-12
											w-12
											text-white
										"
										strokeWidth={1.4}
									/>

								</div>


								{/* Decorative Markers */}

								<span
									className="
										absolute
										left-[18px]
										top-1/2

										h-2.5
										w-2.5

										-translate-y-1/2

										rounded-full
										border-[3px]
										border-white
										bg-brand
									"
								/>


								<span
									className="
										absolute
										right-[18px]
										top-1/2

										h-2.5
										w-2.5

										-translate-y-1/2

										rounded-full
										border-[3px]
										border-white
										bg-brand
									"
								/>

							</div>

						</div>


						{/* ================================================== */}
						{/* SHOWCASE FOOTER                                    */}
						{/* ================================================== */}

						<div
							className="
								flex
								flex-wrap
								items-center
								justify-between
								gap-5

								border-t
								border-navy/[0.07]

								bg-white/80

								px-6
								py-4

								sm:px-10
								sm:py-5

								lg:px-14

								xl:px-16
							"
						>

							{/* Progress */}

							<div className="flex min-w-0 items-center gap-4">

								<span
									className="
										shrink-0
										font-mono
										text-[12px]
										font-semibold
										text-navy
									"
								>
									{formatNumber(selectedIndex + 1)}

									<span className="mx-2 text-slate-300">
										/
									</span>

									<span className="text-slate-400">
										{formatNumber(total)}
									</span>
								</span>


								{/* Progress Indicators */}

								<div className="flex flex-wrap items-center gap-1.5">

									{possibilities.map((tech, index) => (

										<button
											key={`${tech.title}-${index}`}
											type="button"
											onClick={() => setActiveIndex(index)}
											aria-label={`Show ${tech.title}`}
											aria-pressed={index === selectedIndex}
											className={`
												h-1.5
												shrink-0
												rounded-full

												transition-all
												duration-300

												focus-visible:outline
												focus-visible:outline-2
												focus-visible:outline-offset-4
												focus-visible:outline-brand

												motion-reduce:transition-none

												${
													index === selectedIndex
														? 'w-7 bg-brand'
														: 'w-2 bg-brand/20 hover:bg-brand/50'
												}
											`}
										/>

									))}

								</div>

							</div>


							{/* Navigation */}

							<div className="flex shrink-0 items-center gap-2">

								{/* Previous */}

								<button
									type="button"
									onClick={previous}
									aria-label="Previous technology"
									disabled={total < 2}
									className="
										group

										flex
										h-10
										w-10

										items-center
										justify-center

										rounded-full
										border
										border-brand/35

										bg-white
										text-brand-700

										transition-all
										duration-300

										hover:border-brand
										hover:bg-brand
										hover:text-white

										disabled:cursor-not-allowed
										disabled:opacity-40

										focus-visible:outline
										focus-visible:outline-2
										focus-visible:outline-offset-2
										focus-visible:outline-brand

										sm:h-11
										sm:w-11
									"
								>
									<ArrowLeft
										aria-hidden="true"
										className="
											h-4 w-4

											transition-transform
											duration-300

											group-hover:-translate-x-0.5
										"
									/>
								</button>


								{/* Next */}

								<button
									type="button"
									onClick={next}
									aria-label="Next technology"
									disabled={total < 2}
									className="
										group

										flex
										h-10
										w-10

										items-center
										justify-center

										rounded-full
										bg-brand
										text-white

										transition-all
										duration-300

										hover:bg-brand-600
										hover:text-white

										disabled:cursor-not-allowed
										disabled:opacity-40

										focus-visible:outline
										focus-visible:outline-2
										focus-visible:outline-offset-2
										focus-visible:outline-brand

										sm:h-11
										sm:w-11
									"
								>
									<ArrowRight
										aria-hidden="true"
										className="
											h-4 w-4

											transition-transform
											duration-300

											group-hover:translate-x-0.5
										"
									/>
								</button>

							</div>

						</div>

					</div>

				</div>

			</div>
		</section>
	);
}