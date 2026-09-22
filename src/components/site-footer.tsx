import { Link } from 'react-router';
import { Github, Linkedin, Twitter } from 'lucide-react';

const FOOTER_GROUPS = [
	{
		title: 'Services',
		links: [
			{ label: 'Web Development', href: '/services/web-development' },
			{ label: 'Mobile Development', href: '/services/mobile-app-development' },
			{ label: 'Cloud & DevOps', href: '/services/cloud-devops' },
			{ label: 'UI/UX Design', href: '/services/ui-ux-design' },
			{ label: 'AI & Automation', href: '/services/ai-automation' },
		],
	},
	{
		title: 'Solutions',
		links: [
			{ label: 'MVP & Startup Launch', href: '/solutions/mvp-startup-launch' },
			{ label: 'Business Process Automation', href: '/solutions/business-process-automation' },
			{ label: 'Digital Transformation', href: '/solutions/digital-transformation' },
			{ label: 'Legacy Modernization', href: '/solutions/legacy-modernization' },
			{ label: 'Team Extension', href: '/solutions/team-extension' },
		],
	},
	{
		title: 'Industries',
		links: [
			{ label: 'Financial Services & FinTech', href: '/industries/financial-services-fintech' },
			{ label: 'E-commerce & Retail', href: '/industries/ecommerce-retail' },
			{ label: 'Healthcare', href: '/industries/healthcare' },
			{ label: 'Logistics & Transportation', href: '/industries/logistics-transportation' },
			{ label: 'Startups & Technology', href: '/industries/startups-technology' },
		],
	},
	{
		title: 'Company',
		links: [
			{ label: 'About Us', href: '/company' },
			{ label: 'Why Codelaro', href: '/company/why-codelaro' },
			{ label: 'Our Process', href: '/company/process' },
			{ label: 'Careers', href: '/company/careers' },
			{ label: 'Work', href: '/work' },
			{ label: 'Insights', href: '/insights' },
			{ label: 'Contact', href: '/contact' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ label: 'Privacy Policy', href: '/privacy-policy' },
			{ label: 'Terms & Conditions', href: '/terms' },
			{ label: 'Cookie Policy', href: '/cookie-policy' },
			{ label: 'Accessibility', href: '/accessibility' },
		],
	},
];

export function SiteFooter() {
	return (
		<footer className="relative overflow-hidden bg-navy text-slate-300">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 md:py-16">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
					{/* Brand block */}
					<div className="lg:col-span-4">
						<Link to="/" className="flex items-center gap-2.5" aria-label="Codelaro — home">
							<span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 font-display text-[13px] font-bold tracking-tighter text-brand ring-1 ring-white/10">
								{'</>'}
							</span>
							<span className="font-display text-xl font-semibold tracking-tight text-white">
								Codelaro
							</span>
						</Link>
						<p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
							An international software development and technology company. We design,
							build and scale digital products for ambitious teams worldwide.
						</p>
						<p className="mt-5 font-display text-sm font-semibold tracking-wide text-brand">
							Code. Launch. Grow.
						</p>
						<div className="mt-6 flex items-center gap-2">
							{[
								{ icon: Github, label: 'GitHub' },
								{ icon: Twitter, label: 'Twitter' },
								{ icon: Linkedin, label: 'LinkedIn' },
							].map(({ icon: Icon, label }) => (
								<Link
									key={label}
									to="#"
									aria-label={label}
									className="grid h-10 w-10 place-items-center rounded-lg text-slate-400 ring-1 ring-white/10 transition-colors hover:text-brand hover:ring-brand/40"
								>
									<Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
								</Link>
							))}
						</div>
					</div>

					{/* Link columns */}
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
						{FOOTER_GROUPS.map((group) => (
							<div key={group.title}>
								<h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
									{group.title}
								</h3>
								<ul className="mt-4 space-y-2.5">
									{group.links.map((link) => (
										<li key={link.label}>
											<Link
												to={link.href}
												className="text-[13px] text-slate-400 transition-colors hover:text-brand"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row">
					<p className="text-[13px] text-slate-500">
						© {new Date().getFullYear()} Codelaro. All rights reserved.
					</p>
					<p className="text-[13px] text-slate-500">
						Built for ambitious teams worldwide.
					</p>
				</div>
			</div>
		</footer>
	);
}
