import { useEffect, useRef, useState } from 'react';
import type { Service } from '@/data/services';

export function ServiceApproach({
	service,
}: {
	service: Service;
}) {
	const steps = service.approach ?? [];

	const [activeStep, setActiveStep] = useState(0);

	const stepRefs = useRef<Array<HTMLHeadingElement | null>>([]);

	/*
	 * Update the visualization as visitors scroll.
	 * All phase content remains visible without JavaScript.
	 */
	useEffect(() => {
  if (!steps.length) return;

  let frameId = 0;

  const updateActiveStep = () => {
    const elements = stepRefs.current.slice(0, steps.length);

    // Reference point: 45% down the viewport.
    const triggerY = window.innerHeight * 0.55;

    let currentStep = 0;

    elements.forEach((element, index) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();

      // Find the center of each left-side phase.
      const elementCenter = rect.top + rect.height / 2;

      // Activate the phase whose center has passed
      // the reference point.
      if (elementCenter <= triggerY) {
        currentStep = index;
      }
    });

    setActiveStep((previous) =>
      previous === currentStep ? previous : currentStep
    );

    frameId = 0;
  };

  const handleScroll = () => {
    if (frameId) return;

    frameId = requestAnimationFrame(updateActiveStep);
  };

  // Initialize the correct phase immediately.
  updateActiveStep();

  window.addEventListener('scroll', handleScroll, {
    passive: true,
  });

  window.addEventListener('resize', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);

    if (frameId) {
      cancelAnimationFrame(frameId);
    }
  };
}, [steps.length]);

	if (!steps.length) return null;

	const total = steps.length;

	const progress = ((activeStep + 1) / total) * 100;

	return (
		<section
			id="service-approach"
			aria-labelledby="service-approach-heading"
			className="relative overflow-x-clip bg-white py-20 sm:py-20 lg:py-20"
		>
			<div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">

				{/* ========================================================= */}
				{/* INTRODUCTION                                              */}
				{/* ========================================================= */}

				<header className="mx-auto max-w-4xl text-center">

					<div className="flex items-center justify-center gap-3">
						<span
							aria-hidden="true"
							className="h-px w-7 bg-brand"
						/>

						<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
							Our development approach
						</p>

						<span
							aria-hidden="true"
							className="h-px w-7 bg-brand"
						/>
					</div>

					<h2
						id="service-approach-heading"
						className="
              mx-auto mt-6 max-w-4xl
              font-display
              text-[clamp(2.2rem,4.3vw,3.5rem)]
              font-semibold
              leading-[1.1]
              tracking-[-0.055em]
              text-navy
            "
					>
						From the first idea
						<span className="block text-slate-500">
							to the final delivery.
						</span>
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.85] text-slate-600 sm:text-[17px]">
						Explore how we approach{' '}
						{service.title.toLowerCase()}, combining
						thoughtful planning, technical execution,
						and a delivery process adapted to your project.
					</p>

				</header>

				{/* ========================================================= */}
				{/* SCROLL EXPERIENCE                                         */}
				{/* ========================================================= */}

				<div
					className="
  mt-16 grid gap-12
  lg:mt-24
  lg:grid-cols-12
  lg:items-stretch
  lg:gap-16
  xl:gap-24
"
				>

					{/* ======================================================= */}
					{/* LEFT: DEVELOPMENT CHAPTERS                              */}
					{/* ======================================================= */}

					<div className="lg:col-span-7">

						<div className="mb-12 flex items-center justify-between gap-4">

							<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
								The delivery journey
							</p>

							<span className="font-mono text-[10px] text-slate-400">
								{String(total).padStart(2, '0')} phases
							</span>

						</div>

						<ol className="space-y-14 sm:space-y-20 lg:space-y-0">

							{steps.map((step, index) => {
								const isActive = activeStep === index;

								return (
									<li
  key={`${service.slug}-${step.phase}-${index}`}
  data-step-index={index}
  className="
    group relative
    flex flex-col
    justify-center
    lg:min-h-[400px]
    lg:py-12
  "
>

										{/* Phase Identifier */}
										<div className="flex items-center gap-4">

											<span
												className={`
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-full
                          border
                          font-mono text-[12px]
                          font-semibold
                          transition-[background-color,border-color,color]
                          duration-500
                          motion-reduce:transition-none
                          ${isActive
														? 'border-navy bg-navy text-white'
														: 'border-slate-200 bg-[#F8FAFC] text-slate-500'
													}
                        `}
											>
												{String(index + 1).padStart(2, '0')}
											</span>

											<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
												Phase {step.phase}
											</p>

										</div>

										{/* Editorial Content */}
										<div className="mt-8">

											<h3
  ref={(element) => {
    stepRefs.current[index] = element;
  }}
  className="
    max-w-xl
    font-display
    text-[clamp(2rem,3.5vw,3.8rem)]
    font-semibold
    leading-[1.13]
    tracking-[-0.05em]
    text-navy
  "
>
  {step.title}
</h3>

											<p
												className="
                          mt-6 max-w-md
                          text-[15px]
                          leading-[1.95]
                          text-slate-600
                          sm:text-[16px]
                        "
											>
												{step.description}
											</p>

										</div>

										{/* Small Editorial Detail */}
										<div className="mt-9 flex items-center gap-3">

											<span
												aria-hidden="true"
												className={`
                          h-px
                          transition-[width,background-color]
                          duration-500
                          motion-reduce:transition-none
                          ${isActive
														? 'w-16 bg-brand'
														: 'w-8 bg-slate-300'
													}
                        `}
											/>

											<span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
												{index === total - 1
													? 'Delivery'
													: 'Development process'}
											</span>

										</div>

									</li>
								);
							})}

						</ol>

					</div>

					{/* ======================================================= */}
					{/* RIGHT: STICKY PROCESS VISUALIZATION                     */}
					{/* ======================================================= */}

					{/* RIGHT: STICKY PROCESS VISUALIZATION */}
					{/* RIGHT: COMPACT STICKY VISUALIZATION */}
					<div className="relative hidden lg:col-span-5 lg:block lg:self-stretch">

						<div className="sticky top-44 ml-auto w-full max-w-[440px]">

							{/* Visualization Container */}
							<div
								className="
        relative isolate
        flex min-h-[410px]
        flex-col justify-between
        overflow-hidden
        rounded-[24px]
        bg-navy
        p-7
        text-white
        xl:p-9
      "
							>

								{/* Subtle Background Grid */}
								<div
									aria-hidden="true"
									className="
          pointer-events-none
          absolute inset-0
          opacity-[0.055]
          [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          [background-size:36px_36px]
        "
								/>

								{/* Header */}
								<div className="relative flex items-start justify-between gap-3">

									<div>
										<div className="flex items-center gap-2">

											<span
												aria-hidden="true"
												className="h-1.5 w-1.5 rounded-full bg-brand"
											/>

											<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
												Project progression
											</p>

										</div>

										<p className="mt-2 text-[11px] text-slate-400">
											A connected delivery process
										</p>
									</div>

									<span className="hidden shrink-0 font-mono text-[9px] text-slate-500 xl:block">
										CODELARO / PROCESS
									</span>

								</div>

								{/* Main Visualization */}
								<div className="relative my-7">

									{/* Active Phase Number */}
									<div className="flex items-end gap-3">

										<span
											className="
              font-display
              text-[clamp(3.8rem,5vw,5.5rem)]
              font-semibold
              leading-none
              tracking-[-0.08em]
              text-white
              tabular-nums
            "
										>
											{String(activeStep + 1).padStart(2, '0')}
										</span>

										<span className="mb-2 font-mono text-[12px] text-slate-500">
											/ {String(total).padStart(2, '0')}
										</span>

									</div>

									{/* Animated Progress Blocks */}
									<div
										aria-hidden="true"
										className="mt-7 flex h-[105px] items-end gap-2.5"
									>
										{steps.map((_, index) => {
											const completed = index < activeStep;
											const active = index === activeStep;

											return (
												<div
													key={`visual-phase-${index}`}
													className="flex h-full min-w-0 flex-1 items-end"
												>
													<div
														className={`
                    relative w-full
                    overflow-hidden
                    rounded-t-sm
                    border
                    transition-[height,background-color,border-color]
                    duration-300
                    ease-out
                    motion-reduce:transition-none
                    ${active
																? 'h-full border-brand/60 bg-brand/20'
																: completed
																	? 'h-[82%] border-white/20 bg-white/15'
																	: 'h-[34%] border-white/10 bg-white/[0.035]'
															}
                  `}
													>

														{/* Active Highlight */}
														{active && (
															<div className="absolute inset-x-0 top-0 h-[2px] bg-brand" />
														)}

														{/* Technical Pattern */}
														<div
															className="
                      absolute inset-0
                      opacity-20
                      [background-image:repeating-linear-gradient(0deg,transparent,transparent_23px,rgba(255,255,255,0.2)_24px)]
                    "
														/>

													</div>
												</div>
											);
										})}
									</div>

									{/* Chart Baseline */}
									<div
										aria-hidden="true"
										className="h-px w-full bg-white/20"
									/>

									{/* Phase Labels */}
									<div
										aria-hidden="true"
										className="mt-3 flex gap-2.5"
									>
										{steps.map((_, index) => (
											<span
												key={`phase-marker-${index}`}
												className={`
                min-w-0 flex-1
                text-center
                font-mono text-[9px]
                transition-colors duration-300
                ${index === activeStep
														? 'text-brand'
														: 'text-slate-500'
													}
              `}
											>
												{String(index + 1).padStart(2, '0')}
											</span>
										))}
									</div>

								</div>

								{/* Bottom Progress */}
								<div className="relative border-t border-white/10 pt-5">

									<div className="flex items-center justify-between gap-4">

										<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-400">
											Journey overview
										</span>

										<span className="font-mono text-[11px] font-medium text-white">
											{Math.round(progress)}%
										</span>

									</div>

									{/* Progress Bar */}
									<div
										aria-hidden="true"
										className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/10"
									>
										<div
											className="
              h-full rounded-full
              bg-brand
              transition-[width]
              duration-700
              ease-out
              motion-reduce:transition-none
            "
											style={{ width: `${progress}%` }}
										/>
									</div>

									<p className="mt-3 text-[10px] leading-[1.7] text-slate-400">
										Visualizing our development process.
									</p>

								</div>

							</div>

						</div>

					</div>

				</div>

			

				

			</div>
		</section>
	);
}