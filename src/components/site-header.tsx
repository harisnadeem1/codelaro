import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { NAV_ITEMS, type NavItem } from '@/data/navigation';
import { cn } from '@/lib/utils';

function Logo({ onNavigate }: { onNavigate?: () => void }) {
	return (
		<Link
			to="/"
			onClick={onNavigate}
			className="flex items-center gap-2.5"
			aria-label="Codelaro — home"
		>
			<span className="grid h-9 w-9 place-items-center rounded-lg bg-navy font-display text-[13px] font-bold tracking-tighter text-brand shadow-sm">
				{'</>'}
			</span>
			<span className="font-display text-xl font-semibold tracking-tight text-navy">
				Codelaro
			</span>
		</Link>
	);
}

function MegaMenuPanel({ item }: { item: NavItem }) {
	if (!item.menu) return null;
	const { links, featured } = item.menu;

	return (
		<div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
			<div
				className={cn(
					'overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-navy/10 ring-1 ring-navy/5',
					item.panelWidth,
				)}
			>
				<div className={cn('grid gap-1 p-3', links.length > 4 ? 'grid-cols-2' : 'grid-cols-1')}>
					{links.map((link) => (
						<Link
							key={link.label}
							to={link.href}
							className="group flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-slate-50"
						>
							<span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
								<link.icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
							</span>
							<span>
								<span className="block text-sm font-semibold text-navy">{link.label}</span>
								<span className="mt-0.5 block text-[13px] leading-snug text-slate-500">
									{link.description}
								</span>
							</span>
						</Link>
					))}
				</div>
				<Link
					to={featured.href}
					className="group flex items-center justify-between gap-4 border-t border-slate-100 bg-slate-50/70 px-5 py-3.5 transition-colors hover:bg-brand/5"
				>
					<span>
						<span className="block text-sm font-semibold text-navy">{featured.title}</span>
						<span className="block text-[13px] text-slate-500">{featured.description}</span>
					</span>
					<span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand">
						{featured.cta}
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
					</span>
				</Link>
			</div>
		</div>
	);
}

function DesktopNav() {
	const [openMenu, setOpenMenu] = useState<string | null>(null);

	return (
		<nav aria-label="Primary" className="hidden lg:block">
			<ul className="flex items-center gap-1">
				{NAV_ITEMS.map((item) => {
					const isOpen = openMenu === item.label;
					return (
						<li
							key={item.label}
							className="relative"
							onMouseEnter={() => setOpenMenu(item.menu ? item.label : null)}
							onMouseLeave={() => setOpenMenu(null)}
						>
							{item.menu ? (
								<button
									type="button"
									aria-expanded={isOpen}
									onClick={() => setOpenMenu(isOpen ? null : item.label)}
									className={cn(
										'flex h-11 items-center gap-1 rounded-lg px-3.5 text-[15px] font-medium transition-colors',
										isOpen ? 'text-navy' : 'text-slate-600 hover:text-navy',
									)}
								>
									{item.label}
									<ChevronDown
										className={cn(
											'h-3.5 w-3.5 text-brand transition-transform duration-200',
											isOpen && 'rotate-180',
										)}
									/>
								</button>
							) : (
								<Link
									to={item.href}
									className="flex h-11 items-center rounded-lg px-3.5 text-[15px] font-medium text-slate-600 transition-colors hover:text-navy"
								>
									{item.label}
								</Link>
							)}
							{isOpen && <MegaMenuPanel item={item} />}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
	const [expanded, setExpanded] = useState<string | null>(null);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	if (!open) return null;

	return (
		<div className="fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto border-t border-slate-100 bg-white lg:hidden">
			<nav aria-label="Mobile" className="flex-1 px-5 py-4">
				<ul className="divide-y divide-slate-100">
					{NAV_ITEMS.map((item) => {
						const isExpanded = expanded === item.label;
						if (!item.menu) {
							return (
								<li key={item.label}>
									<Link
										to={item.href}
										onClick={onClose}
										className="flex min-h-12 items-center py-3 font-display text-lg font-semibold text-navy"
									>
										{item.label}
									</Link>
								</li>
							);
						}
						return (
							<li key={item.label}>
								<button
									type="button"
									aria-expanded={isExpanded}
									onClick={() => setExpanded(isExpanded ? null : item.label)}
									className="flex min-h-12 w-full items-center justify-between py-3 font-display text-lg font-semibold text-navy"
								>
									{item.label}
									<ChevronDown
										className={cn(
											'h-5 w-5 text-brand transition-transform duration-200',
											isExpanded && 'rotate-180',
										)}
									/>
								</button>
								{isExpanded && (
									<ul className="space-y-1 pb-4">
										{item.menu.links.map((link) => (
											<li key={link.label}>
												<Link
													to={link.href}
													onClick={onClose}
													className="flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 text-[15px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy"
												>
													<span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand/10 text-brand">
														<link.icon className="h-4 w-4" strokeWidth={1.8} />
													</span>
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
			<div className="border-t border-slate-100 bg-slate-50/60 p-5">
				<Link
					to="/start-a-project"
					onClick={onClose}
					className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand font-display text-base font-semibold text-white shadow-lg shadow-brand/25 transition-transform active:scale-[0.98]"
				>
					Start a Project
					<ArrowRight className="h-4 w-4" />
				</Link>
				<p className="mt-3 text-center text-[13px] text-slate-500">
					Code. Launch. Grow. — we reply within one business day.
				</p>
			</div>
		</div>
	);
}

export function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={cn(
				'fixed inset-x-0 top-0 z-50 transition-all duration-300',
				scrolled || mobileOpen
					? 'border-b border-slate-900/5 bg-white/85 shadow-[0_8px_30px_-12px_rgb(15_23_42/0.12)] backdrop-blur-xl'
					: 'border-b border-transparent bg-transparent',
			)}
		>
			<div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 md:h-20">
				<Logo onNavigate={() => setMobileOpen(false)} />
				<DesktopNav />
				<div className="flex items-center gap-3">
					<Link
						to="/start-a-project"
						className="hidden h-11 items-center gap-2 rounded-lg bg-brand px-5 font-display text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/35 active:scale-[0.98] sm:flex"
					>
						Start a Project
						<ArrowRight className="h-4 w-4" />
					</Link>
					<button
						type="button"
						aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={mobileOpen}
						onClick={() => setMobileOpen((v) => !v)}
						className="grid h-11 w-11 place-items-center rounded-lg text-navy transition-colors hover:bg-slate-100 lg:hidden"
					>
						{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>
			</div>
			<MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
		</header>
	);
}
