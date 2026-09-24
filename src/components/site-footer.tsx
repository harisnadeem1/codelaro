import { Link } from 'react-router';
import {
	ArrowUpRight,
	Github,
	Linkedin,
	Twitter
} from 'lucide-react';

/* =========================================================
   Footer navigation
========================================================= */

const FOOTER_GROUPS = [
	{
		title: 'Services',
		links: [
			{
				label: 'Web Development',
				href: '/services/web-development',
			},
			{
				label: 'Mobile Development',
				href: '/services/mobile-app-development',
			},
			{
				label: 'Cloud & DevOps',
				href: '/services/cloud-devops',
			},
			{
				label: 'UI/UX Design',
				href: '/services/ui-ux-design',
			},
			{
				label: 'AI & Automation',
				href: '/services/ai-automation',
			},
		],
	},
	{
		title: 'Solutions',
		links: [
			{
				label: 'MVP & Startup Launch',
				href: '/solutions/mvp-startup-launch',
			},
			{
				label: 'Business Process Automation',
				href: '/solutions/business-process-automation',
			},
			{
				label: 'Digital Transformation',
				href: '/solutions/digital-transformation',
			},
			{
				label: 'Legacy Modernization',
				href: '/solutions/legacy-modernization',
			},
			{
				label: 'Team Extension',
				href: '/solutions/team-extension',
			},
		],
	},
	{
		title: 'Industries',
		links: [
			{
				label: 'Financial Services & FinTech',
				href: '/industries/financial-services-fintech',
			},
			{
				label: 'E-commerce & Retail',
				href: '/industries/ecommerce-retail',
			},
			{
				label: 'Healthcare',
				href: '/industries/healthcare',
			},
			{
				label: 'Logistics & Transportation',
				href: '/industries/logistics-transportation',
			},
			{
				label: 'Startups & Technology',
				href: '/industries/startups-technology',
			},
		],
	},
	{
		title: 'Company',
		links: [
			{
				label: 'About Us',
				href: '/company',
			},
			{
				label: 'Why Codelaro',
				href: '/company/why-codelaro',
			},
			{
				label: 'Our Process',
				href: '/company/process',
			},
			{
				label: 'Careers',
				href: '/company/careers',
			},
			{
				label: 'Work',
				href: '/work',
			},
			{
				label: 'Insights',
				href: '/insights',
			},
			{
				label: 'Contact',
				href: '/contact',
			},
		],
	},
	{
		title: 'Legal',
		links: [
			{
				label: 'Privacy Policy',
				href: '/privacy-policy',
			},
			{
				label: 'Terms & Conditions',
				href: '/terms',
			},
			{
				label: 'Cookie Policy',
				href: '/cookie-policy',
			},
			{
				label: 'Accessibility',
				href: '/accessibility',
			},
		],
	},
];

/* =========================================================
   Social links

   Add the real URLs when the Codelaro profiles are live.
   Do not use "#" placeholder links.
========================================================= */

const SOCIAL_LINKS = [
	// {
	// 	label: 'GitHub',
	// 	href: 'https://github.com/...',
	// 	icon: Github,
	// },
	// {
	// 	label: 'LinkedIn',
	// 	href: 'https://www.linkedin.com/company/...',
	// 	icon: Linkedin,
	// },
];

export function SiteFooter() {
	return (
		<footer
			className="
				relative
				overflow-hidden
				bg-navy
				text-slate-300
			"
		>
			{/* =====================================================
			    Background
			===================================================== */}

			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute inset-0
					overflow-hidden
				"
			>
				<div
					className="
						absolute inset-0
						bg-blueprint-grid-dark
						opacity-[0.3]
						[mask-image:linear-gradient(to_bottom,black,transparent_95%)]
					"
				/>

				<div
					className="
						absolute
						-right-48 top-0
						h-[32rem] w-[32rem]
						rounded-full
						bg-brand/[0.04]
						blur-[120px]
					"
				/>

				<div
					className="
						absolute
						-left-40 bottom-0
						h-80 w-80
						rounded-full
						bg-brand/[0.025]
						blur-[100px]
					"
				/>
			</div>

			{/* =====================================================
			    Main container
			===================================================== */}

			<div
				className="
					relative
					mx-auto
					w-full max-w-9xl
					px-5
					sm:px-8
				"
			>
				{/* =================================================
				    Top brand statement
				================================================= */}

				<div
    className="
        grid gap-10
        border-b border-white/10
        py-12
        md:grid-cols-12
        md:items-center
        md:gap-12
        md:py-14
        lg:gap-20
    "
>
    {/* Left: Logo & Brand Description */}

    <div className="md:col-span-5">
        <Link
            to="/"
            aria-label="Codelaro home"
            className="group inline-flex items-center"
        >
            <img
                src="/logo/codelaro_svg/logo_white.svg"
                alt="Codelaro"
                width={160}
                height={44}
                loading="lazy"
                className="
                    h-11 w-auto
                    object-contain
                    transition-opacity duration-300
                    group-hover:opacity-90
                "
            />
        </Link>

        <p
            className="
                mt-6 max-w-md
                text-[14px]
                leading-7
                text-slate-400
                sm:text-[15px]
            "
        >
            At Codelaro, we believe great technology begins
            with clear thinking and thoughtful execution.
            Every detail matters, and every project is an
            opportunity to build something meaningful.
        </p>
    </div>

    {/* Right: Brand Statement */}

    <div
        className="
            flex
            md:col-span-7
            md:justify-end
        "
    >
        <h2
            className="
                max-w-2xl
                font-display
                text-[2rem]
                font-semibold
                leading-[1.12]
                tracking-[-0.04em]
                text-white
                sm:text-[2.5rem]
                lg:text-[3rem]
                xl:text-[3.4rem]
            "
        >
            Clarity in thinking.

            <span className="block text-slate-500">
                Care in execution.
            </span>
        </h2>
    </div>
</div>

				{/* =================================================
				    Navigation
				================================================= */}

				<nav
					aria-label="Footer navigation"
					className="
						grid
						gap-12
						py-12
						lg:grid-cols-8
						lg:gap-10
						lg:py-14
					"
				>


					{/* =============================================
					    Link groups
					============================================= */}

					<div
						className="
							grid
							grid-cols-2
							gap-x-7
							gap-y-10
							sm:grid-cols-3
							lg:col-span-9
							lg:grid-cols-5
							lg:gap-x-8
						"
					>
						{FOOTER_GROUPS.map((group) => (
							<div key={group.title}>
								<h3
									className="
										text-[15px]
										font-bold uppercase
										tracking-[0.18em]
										text-slate-400
									"
								>
									{group.title}
								</h3>

								<ul className="mt-5 space-y-3">
									{group.links.map((link) => (
										<li key={link.href}>
											<Link
												to={link.href}
												className="
													group/link
													inline-flex
													items-center
													gap-1.5
													text-[16px]
													leading-5
													text-slate-300
													transition-colors
													duration-300
													hover:text-white
												"
											>
												<span>
													{link.label}
												</span>

												<ArrowUpRight
													className="
														h-3 w-3
														shrink-0
														translate-y-0.5
														opacity-0
														text-brand
														transition-all
														duration-300
														group-hover/link:translate-y-0
														group-hover/link:opacity-100
													"
													aria-hidden="true"
												/>
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</nav>

				{/* =================================================
				    Bottom bar
				================================================= */}

				<div
					className="
		flex
		flex-col
		gap-5
		border-t border-white/10
		py-6
		sm:flex-row
		sm:items-center
		sm:justify-between
	"
				>
					{/* Copyright */}
					<p className="text-[11px] text-slate-500">
						© {new Date().getFullYear()} Codelaro. All rights reserved.
					</p>

					{/* Social links */}
					<div
						className="
			flex
			items-center
			gap-2
		"
						aria-label="Codelaro social media"
					>
						{/* LinkedIn */}
						<a
							href="YOUR_LINKEDIN_URL"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Follow Codelaro on LinkedIn"
							className="
				group
				grid h-8 w-8
				place-items-center
				rounded-full
				border border-white/10
				transition-all
				duration-300
				hover:-translate-y-0.5
				hover:border-brand/40
				hover:bg-brand/[0.08]
			"
						>
							<img
								src="/icons/linkedin.svg"
								alt=""
								aria-hidden="true"
								className="
					h-3.5 w-3.5
					object-contain
					opacity-60
					transition-all
					duration-300
					group-hover:scale-105
					group-hover:opacity-100
				"
							/>
						</a>

						{/* X / Twitter */}
						<a
							href="YOUR_X_URL"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Follow Codelaro on X"
							className="
				group
				grid h-8 w-8
				place-items-center
				rounded-full
				border border-white/10
				transition-all
				duration-300
				hover:-translate-y-0.5
				hover:border-brand/40
				hover:bg-brand/[0.08]
			"
						>
							<img
								src="/icons/x.svg"
								alt=""
								aria-hidden="true"
								className="
					h-3.5 w-3.5
					object-contain
					opacity-60
					transition-all
					duration-300
					group-hover:scale-105
					group-hover:opacity-100
				"
							/>
						</a>

						{/* Facebook */}
						<a
							href="YOUR_FACEBOOK_URL"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Follow Codelaro on Facebook"
							className="
				group
				grid h-8 w-8
				place-items-center
				rounded-full
				border border-white/10
				transition-all
				duration-300
				hover:-translate-y-0.5
				hover:border-brand/40
				hover:bg-brand/[0.08]
			"
						>
							<img
								src="/icons/facebook.svg"
								alt=""
								aria-hidden="true"
								className="
					h-3.5 w-3.5
					object-contain
					opacity-60
					transition-all
					duration-300
					group-hover:scale-105
					group-hover:opacity-100
				"
							/>
						</a>

						{/* Instagram */}
						<a
							href="YOUR_INSTAGRAM_URL"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Follow Codelaro on Instagram"
							className="
				group
				grid h-8 w-8
				place-items-center
				rounded-full
				border border-white/10
				transition-all
				duration-300
				hover:-translate-y-0.5
				hover:border-brand/40
				hover:bg-brand/[0.08]
			"
						>
							<img
								src="/icons/instagram.svg"
								alt=""
								aria-hidden="true"
								className="
					h-3.5 w-3.5
					object-contain
					opacity-60
					transition-all
					duration-300
					group-hover:scale-105
					group-hover:opacity-100
				"
							/>
						</a>
					</div>

					{/* Legal */}
					<div
						className="
			flex
			flex-wrap
			items-center
			gap-x-5
			gap-y-2
		"
					>
						<Link
							to="/privacy-policy"
							className="
				text-[13px]
				text-slate-500
				transition-colors
				duration-300
				hover:text-slate-300
			"
						>
							Privacy
						</Link>

						<Link
							to="/terms"
							className="
				text-[13px]
				text-slate-500
				transition-colors
				duration-300
				hover:text-slate-300
			"
						>
							Terms
						</Link>

						<p className="text-[12px] text-slate-600">
							Built for ambitious teams worldwide.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}