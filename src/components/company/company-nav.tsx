import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';

const COMPANY_NAV = [
	{ label: 'About', href: '/company' },
	{ label: 'Why Codelaro', href: '/company/why-codelaro' },
	{ label: 'Our Process', href: '/company/process' },
	{ label: 'Careers', href: '/company/careers' },
];

/**
 * Sticky secondary navigation for the Company section. Highlights the active
 * page by exact path match.
 */
export function CompanyNav() {
	const { pathname } = useLocation();
	return (
		<nav
			aria-label="Company"
			className="sticky top-16 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl md:top-20"
		>
			<div className="mx-auto flex w-full max-w-6xl items-center gap-1 overflow-x-auto px-5 sm:px-8">
				{COMPANY_NAV.map((item) => {
					const isActive = pathname === item.href;
					return (
						<Link
							key={item.href}
							to={item.href}
							className={cn(
								'relative flex h-12 shrink-0 items-center px-3.5 text-[14px] font-medium transition-colors',
								isActive ? 'text-navy' : 'text-slate-500 hover:text-navy',
							)}
						>
							{item.label}
							{isActive && (
								<span
									aria-hidden
									className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-brand"
								/>
							)}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
