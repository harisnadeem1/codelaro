/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const highlights = [
	{
		value: '80+',
		label: 'Projects Delivered',
	},
	{
		value: '3+',
		label: 'Years of Experience',
	},
	{
		value: '30+',
		label: 'Happy Clients',
	},
	{
		value: '8+',
		label: 'Countries Served',
	},
];

/* -------------------------------------------------------------------------- */
/* Services Overview                                                          */
/* -------------------------------------------------------------------------- */

export function ServicesOverviewIntro() {
	return (
		<section
			id="services-overview"
			aria-labelledby="services-overview-heading"
			className="relative bg-white pb-20 pt-8 sm:pb-24 sm:pt-12 lg:pb-14 lg:pt-14"
		>
			<div className="mx-auto w-full max-w-9xl px-5 sm:px-8">

				{/* ---------------------------------------------------------- */}
				{/* Statistics                                                 */}
				{/* ---------------------------------------------------------- */}

				{/* Statistics Banner */}
				<div className="relative overflow-hidden rounded-2xl bg-navy">
					<dl className="grid grid-cols-2 lg:grid-cols-4">
						{highlights.map(({ value, label }, index) => (
							<div
								key={label}
								className={`
					relative flex flex-col justify-center
					px-6 py-7
					sm:px-9 sm:py-8
					lg:px-10 lg:py-9

					after:absolute after:right-0 after:top-1/2
					after:h-12 after:w-px
					after:-translate-y-1/2
					after:bg-white/15

					${index % 2 === 0 ? 'after:block' : 'after:hidden'}
					${index < highlights.length - 1 ? 'lg:after:block' : 'lg:after:hidden'}
				`}
							>
								<dt className="order-2 mt-2 text-xs font-medium text-slate-400 sm:text-sm">
									{label}
								</dt>

								<dd className="order-1 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
									{value}
								</dd>
							</div>
						))}
					</dl>
				</div>

				{/* ---------------------------------------------------------- */}
				{/* Company Overview                                           */}
				{/* ---------------------------------------------------------- */}

				<div
					className="
						mt-16 grid
						gap-9
						sm:mt-20
						sm:gap-12
						lg:mt-24
						lg:grid-cols-12
						lg:gap-16
					"
				>
					{/* Left: Introduction */}

					<div className="lg:col-span-5">

						{/* Eyebrow */}

						<div className="mb-6 flex items-center gap-3">
							<span
								aria-hidden="true"
								className="h-px w-8 bg-brand"
							/>

							<p
								className="
									text-[11px]
									font-bold uppercase
									tracking-[0.2em]
									text-slate-500
								"
							>
								Who We Are
							</p>
						</div>

						{/* Heading */}

						<h2
							id="services-overview-heading"
							className="
								max-w-[510px]
								font-display
								text-[34px]
								font-semibold
								leading-[1.17]
								tracking-[-0.045em]
								text-navy
								sm:text-4xl
								lg:text-4xl
								xl:text-4xl
							"
						>
							Built on Experience.
							<span className="mt-1 block  text-slate-400 ">
								Focused on What's Next.
							</span>
						</h2>
					</div>

					{/* Right: Company Description */}

					<div
						className="
							flex max-w-[750px]
							flex-col gap-6
							lg:col-span-7
							lg:pt-1
							sm:gap-7
						"
					>
						{/* Primary description */}

						{/* Primary description */}
						<p className="text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
							Codelaro builds on its founder's experience delivering
							over 80 digital projects for 30+ clients, including
							clients in the UK, Germany, the Netherlands, Romania,
							and France.
						</p>

						{/* Secondary description */}
						<p className="text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
							We bring together expertise in web and mobile development,
							custom software, AI automation, and cloud solutions.
							From initial strategy to deployment and ongoing support,
							we build reliable, scalable digital products designed
							to solve business challenges and support long-term growth.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}