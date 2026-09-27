import { Link } from 'react-router';

import {
	ArrowRight,
	ArrowUpRight,
	Check,
	Mail,
	Rocket,
	CalendarClock,
	Clock3,
} from 'lucide-react';

import { ContactForm } from './contact-form';

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const BENEFITS = [
	'No-obligation initial conversation',
	'Clear communication and next steps',
	'Solutions tailored to your business',
];



/* -------------------------------------------------------------------------- */
/* Contact Hero                                                               */
/* -------------------------------------------------------------------------- */

export function ContactHero() {
	return (
		<section
			id="contact"
			aria-labelledby="contact-heading"
			className="
				relative isolate
				overflow-hidden
				bg-[#F8FAFC]
			"
		>
			{/* Background Grid */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
					bg-blueprint-grid
					mask-fade-b
					opacity-30
				"
			/>

			{/* Main Container */}

			<div
				className="
					relative mx-auto
					w-full max-w-8xl
					px-5
					pb-16 pt-28
					sm:px-8
					sm:pb-20 sm:pt-32
					lg:pb-20 lg:pt-32
					xl:pt-32
				"
			>
				<div
					className="
						grid grid-cols-1
						items-start
						gap-12
						lg:grid-cols-12
						lg:gap-10
						xl:gap-16
					"
				>
					{/* ------------------------------------------------------ */}
					{/* Left — Introduction                                    */}
					{/* ------------------------------------------------------ */}

					<div
    className="
        relative
        lg:col-span-6
        lg:pt-8
        xl:pt-12
    "
>
						{/* Eyebrow */}

						<div className="mb-7 inline-flex items-center gap-3">
							<span className="h-px w-8 bg-brand" />

							<span
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.22em]
									text-brand-700
								"
							>
								GET IN TOUCH
							</span>
						</div>

						{/* Main Heading */}

						<h1
							id="contact-heading"
							className="
								max-w-[650px]
								font-display
								text-[clamp(2.7rem,4.4vw,4.4rem)]
								font-bold
								leading-[1.08]
								tracking-[-0.045em]
								text-navy
							"
						>
							Great ideas
							<br className="hidden sm:block" />{' '}
							start with a
							<br />
							<span className="relative inline-block text-brand">
								Conversation.

								{/* Decorative Underline */}

								<svg
									aria-hidden="true"
									viewBox="0 0 330 14"
									preserveAspectRatio="none"
									className="
										absolute -bottom-2 left-0
										h-[10px] w-full
										text-brand/25
									"
								>
									<path
										d="M2 9 C80 1 190 1 328 7"
										fill="none"
										stroke="currentColor"
										strokeWidth="5"
										strokeLinecap="round"
									/>
								</svg>
							</span>
						</h1>

						{/* Description */}

						<p
							className="
								mt-8
								max-w-[470px]
								text-[15px]
								leading-[1.9]
								text-slate-500
								sm:text-[17px]
							"
						>
							Have a software project in mind, exploring a new digital
							idea, or looking for the right technology partner?
							Let's discuss how Codelaro can help you build,
							launch, and grow.
						</p>

						{/* Benefits */}

					

						{/* Divider */}

						<div
							className="
								my-10
								h-px w-full
								max-w-[440px]
								bg-navy/10
							"
						/>

						{/* Direct Email */}

						<div>
							<p
								className="
									mb-3
									text-[12px]
									font-semibold
									uppercase
									tracking-[0.14em]
									text-slate-400
								"
							>
								Prefer to reach out directly?
							</p>

							<a
								href="mailto:hello@codelaro.com"
								className="
									group
									inline-flex
									items-center
									gap-3
									text-navy
									transition-colors
									hover:text-brand
								"
							>
								<span
									className="
										flex h-11 w-11
										shrink-0
										items-center justify-center
										rounded-xl
										border border-navy/10
										bg-white
										text-brand
										shadow-sm
										transition-all duration-300
										group-hover:border-brand/30
									"
								>
									<Mail
										className="h-[19px] w-[19px]"
										strokeWidth={1.8}
									/>
								</span>

								<span
									className="
										font-display
										text-[16px]
										font-semibold
										sm:text-[18px]
									"
								>
									hello@codelaro.com
								</span>

								<ArrowUpRight
									className="
										h-4 w-4
										text-slate-400
										transition-all duration-300
										group-hover:-translate-y-0.5
										group-hover:translate-x-0.5
										group-hover:text-brand
									"
								/>
							</a>
						</div>

						
					</div>

					{/* ------------------------------------------------------ */}
					{/* Right — Contact Form                                   */}
					{/* ------------------------------------------------------ */}

				{/* Right — Contact Form */}

<div
    className="
        relative
        min-w-0
        w-full
        lg:col-span-6
    "
>
    <ContactForm />
</div>
				</div>
			</div>
		</section>
	);
}

/* -------------------------------------------------------------------------- */
/* Contact Paths                                                              */
/* -------------------------------------------------------------------------- */

export function ContactPaths() {
	return (
		<section
			id="contact-options"
			aria-labelledby="contact-options-heading"
			className="
				relative isolate
				overflow-hidden
				bg-white
				py-16
				sm:py-20
				lg:py-24
			"
		>
			<div className="mx-auto w-full max-w-8xl px-5 sm:px-8">

				{/* Section Header */}

				<div
					className="
						mb-10
						flex flex-col
						gap-5
						md:mb-12
						md:flex-row
						md:items-end
						md:justify-between
					"
				>
					<div className="max-w-2xl">

						{/* Eyebrow */}

						<div className="mb-5 flex items-center gap-3">
							<span className="h-px w-8 bg-brand" />

							<span
								className="
									font-mono
									text-[11px]
									font-semibold
									uppercase
									tracking-[0.22em]
									text-brand-700
								"
							>
								MORE WAYS TO CONNECT
							</span>
						</div>

						{/* Heading */}

						<h2
							id="contact-options-heading"
							className="
								font-display
								text-[clamp(2rem,3.5vw,3.25rem)]
								font-bold
								leading-[1.12]
								tracking-[-0.035em]
								text-navy
							"
						>
							Choose how you'd
							<br className="hidden sm:block" />{' '}
							like to <span className="text-brand">begin.</span>
						</h2>
					</div>

					<p
						className="
							max-w-[390px]
							text-[14px]
							leading-[1.85]
							text-slate-500
							sm:text-[15px]
						"
					>
						Whether you're ready to launch or just exploring,
						we've made it easy to find the right starting point.
					</p>
				</div>

				{/* ---------------------------------------------------------- */}
				{/* Contact Path Cards                                         */}
				{/* ---------------------------------------------------------- */}

				

				{/* ---------------------------------------------------------- */}
				{/* Bottom Contact Strip                                       */}
				{/* ---------------------------------------------------------- */}

				<div
					className="
						mt-6
						flex flex-col
						gap-5
						rounded-[20px]
						border border-navy/[0.08]
						bg-[#F8FAFC]
						p-6
						sm:flex-row
						sm:items-center
						sm:justify-between
						sm:gap-8
						sm:p-7
					"
				>
					{/* Left */}

					<div className="flex items-center gap-4">

						<span
							className="
								flex h-12 w-12
								shrink-0
								items-center justify-center
								rounded-xl
								bg-white
								text-brand
								shadow-sm
							"
						>
							<Clock3
								className="h-5 w-5"
								strokeWidth={1.8}
							/>
						</span>

						<div>
							<h3
								className="
									font-display
									text-[15px]
									font-semibold
									text-navy
								"
							>
								We're here to help
							</h3>

							<p
								className="
									mt-1
									text-[13px]
									leading-relaxed
									text-slate-500
								"
							>
								Have a question? Reach out and
								we'll get back to you.
							</p>
						</div>
					</div>

					{/* Email Link */}

					<a
						href="mailto:hello@codelaro.com"
						className="
							group
							inline-flex
							shrink-0
							items-center
							gap-2
							font-display
							text-[14px]
							font-semibold
							text-navy
							transition-colors duration-300
							hover:text-brand
						"
					>
						hello@codelaro.com

						<ArrowUpRight
							className="
								h-4 w-4
								text-brand
								transition-transform duration-300
								group-hover:-translate-y-0.5
								group-hover:translate-x-0.5
							"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}