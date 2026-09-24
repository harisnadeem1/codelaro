import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import {
	ArrowRight,
	ChevronDown,
	Menu,
	Sparkles,
	X,
	ArrowUpRight,
} from 'lucide-react';

import { NAV_ITEMS, type NavItem } from '@/data/navigation';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/*                                    Logo                                    */
/* -------------------------------------------------------------------------- */

function Logo({ onNavigate }: { onNavigate?: () => void }) {
	return (
		<Link
			to="/"
			onClick={onNavigate}
			className="group flex items-center"
			aria-label="Codelaro — home"
		>
			<img
				src="/logo/codelaro_svg/logo_black.svg"
				alt="Codelaro"
				className="
					h-9 w-auto object-contain
					transition-transform duration-300
					group-hover:scale-[1.03]
					sm:h-10
				"
			/>
		</Link>
	);
}

/* -------------------------------------------------------------------------- */
/*                              Desktop Mega Menu                             */
/* -------------------------------------------------------------------------- */

function MegaMenuPanel({
	item,
	onNavigate,
}: {
	item: NavItem;
	onNavigate?: () => void;
}) {
	if (!item.menu) return null;

	const { links, featured } = item.menu;

	return (
		<div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
			<div
				className={cn(
					'overflow-hidden rounded-[20px]',
					'border border-slate-200/80',
					'bg-white/95 backdrop-blur-xl',
					'shadow-[0_24px_70px_-24px_rgba(15,23,42,0.28)]',
					'ring-1 ring-navy/[0.03]',
					item.panelWidth,
				)}
			>
				{/* Menu heading */}
				<div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3.5">
					<span className="h-1.5 w-1.5 rounded-full bg-brand" />

					<span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
						{item.label}
					</span>
				</div>

				{/* Links */}
				<div
					className={cn(
						'grid gap-1 p-3',
						links.length > 4 ? 'grid-cols-2' : 'grid-cols-1',
					)}
				>
					{links.map((link) => (
						<Link
							key={link.label}
							to={link.href}
							onClick={onNavigate}
							className="
								group flex items-start gap-3.5 rounded-xl
								border border-transparent p-3
								transition-all duration-200
								hover:border-brand/10
								hover:bg-brand/[0.045]
							"
						>
							<span
								className="
									mt-0.5 grid h-9 w-9 shrink-0
									place-items-center rounded-lg
									bg-brand/10 text-brand
									transition-all duration-200
									group-hover:bg-brand
									group-hover:text-white
								"
							>
								<link.icon
									className="h-[18px] w-[18px]"
									strokeWidth={1.8}
								/>
							</span>

							<span className="min-w-0">
								<span className="flex items-center gap-1.5 text-sm font-semibold text-navy">
									{link.label}

									<ArrowRight
										className="
											h-3.5 w-3.5 -translate-x-1
											opacity-0 transition-all duration-200
											group-hover:translate-x-0
											group-hover:opacity-100
										"
									/>
								</span>

								<span className="mt-0.5 block text-[13px] leading-snug text-slate-500">
									{link.description}
								</span>
							</span>
						</Link>
					))}
				</div>

				{/* Featured area */}
				<Link
					to={featured.href}
					onClick={onNavigate}
					className="
						group flex items-center justify-between gap-4
						border-t border-slate-100 bg-slate-50/70
						px-5 py-3.5 transition-colors
						hover:bg-brand/[0.06]
					"
				>
					<div className="flex min-w-0 items-center gap-3">
						<span
							className="
								grid h-9 w-9 shrink-0 place-items-center
								rounded-lg bg-navy text-brand
							"
						>
							<Sparkles className="h-4 w-4" strokeWidth={1.8} />
						</span>

						<span>
							<span className="block text-sm font-semibold text-navy">
								{featured.title}
							</span>

							<span className="block text-[13px] text-slate-500">
								{featured.description}
							</span>
						</span>
					</div>

					<span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand">
						{featured.cta}

						<ArrowRight
							className="
								h-4 w-4 transition-transform duration-200
								group-hover:translate-x-1
							"
						/>
					</span>
				</Link>
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/*                                Desktop Nav                                 */
/* -------------------------------------------------------------------------- */

function DesktopNav() {
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const location = useLocation();

	useEffect(() => {
		setOpenMenu(null);
	}, [location.pathname]);

	const isActive = (item: NavItem) => {
		if (item.menu) {
			return item.menu.links.some((link) =>
				location.pathname.startsWith(link.href),
			);
		}

		if (item.href === '/') {
			return location.pathname === '/';
		}

		return location.pathname.startsWith(item.href);
	};

	return (
		<nav aria-label="Primary navigation" className="hidden lg:block">
			<ul className="flex items-center gap-1">
				{NAV_ITEMS.map((item) => {
					const isOpen = openMenu === item.label;
					const active = isActive(item);

					return (
						<li
							key={item.label}
							className="relative"
							onMouseEnter={() =>
								setOpenMenu(item.menu ? item.label : null)
							}
							onMouseLeave={() => setOpenMenu(null)}
						>
							{item.menu ? (
								<button
									type="button"
									aria-expanded={isOpen}
									aria-haspopup="true"
									onClick={() =>
										setOpenMenu(isOpen ? null : item.label)
									}
									className={cn(
										'relative flex h-11 items-center gap-1.5 rounded-lg px-3.5',
										'text-base font-medium transition-all duration-200',
										isOpen
											? 'bg-brand/[0.07] text-navy'
											: active
												? 'text-navy'
												: 'text-slate-600 hover:bg-slate-100/70 hover:text-navy',
									)}
								>
									{item.label}

									<ChevronDown
										className={cn(
											'h-3.5 w-3.5 text-brand',
											'transition-transform duration-200',
											isOpen && 'rotate-180',
										)}
									/>

									{active && !isOpen && (
										<span
											className="
												absolute bottom-0 left-1/2
												h-1 w-1 -translate-x-1/2
												rounded-full bg-brand
											"
										/>
									)}
								</button>
							) : (
								<Link
									to={item.href}
									className={cn(
										'relative flex h-11 items-center rounded-lg px-3.5',
										'text-base font-medium transition-all duration-200',
										active
											? 'text-navy'
											: 'text-slate-600 hover:bg-slate-100/70 hover:text-navy',
									)}
								>
									{item.label}

									{active && (
										<span
											className="
												absolute bottom-0 left-1/2
												h-1 w-1 -translate-x-1/2
												rounded-full bg-brand
											"
										/>
									)}
								</Link>
							)}

							{isOpen && (
								<MegaMenuPanel
									item={item}
									onNavigate={() => setOpenMenu(null)}
								/>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

/* -------------------------------------------------------------------------- */
/*                                 Mobile Nav                                 */
/* -------------------------------------------------------------------------- */

function MobileNav({
	open,
	onClose,
	scrolled,
}: {
	open: boolean;
	onClose: () => void;
	scrolled: boolean;
}) {
	const [expanded, setExpanded] = useState<string | null>(null);
	const location = useLocation();

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	useEffect(() => {
		setExpanded(null);
	}, [location.pathname]);

	if (!open) return null;

	return (
		<>
			{/* Dark transparent backdrop */}
			<button
				type="button"
				aria-label="Close mobile navigation"
				onClick={onClose}
				className="
					fixed inset-0 z-30
					bg-navy/20 backdrop-blur-[3px]
					lg:hidden
				"
			/>

			{/* Floating mobile menu */}
			<div
				className={cn(
					'fixed inset-x-3 z-40 lg:hidden',
					'overflow-hidden rounded-[24px]',
					'border border-white/80',
					'bg-white/95 backdrop-blur-2xl',
					'shadow-[0_30px_80px_-25px_rgba(15,23,42,0.45)]',
					'animate-in fade-in slide-in-from-top-3 duration-200',
					scrolled ? 'top-[86px]' : 'top-[76px]',
				)}
			>
				{/* Top decorative line */}
				<div className="mx-auto h-[2px] w-16 rounded-b-full bg-brand" />

				<nav
					aria-label="Mobile navigation"
					className="
						max-h-[calc(100vh-120px)]
						overflow-y-auto px-4 pb-4 pt-3
					"
				>
					<div className="mb-2 flex items-center justify-between px-2 py-2">
						<span className="text-[11px] font-bold uppercase tracking-[0.17em] text-slate-400">
							Menu
						</span>

						<span
							className="
								flex items-center gap-1.5
								rounded-full bg-brand/[0.08]
								px-2.5 py-1 text-[10px]
								font-semibold text-brand
							"
						>
							<span className="h-1.5 w-1.5 rounded-full bg-brand" />
							Code. Launch. Grow.
						</span>
					</div>

					<ul className="space-y-1">
						{NAV_ITEMS.map((item) => {
							const isExpanded = expanded === item.label;

							const active = item.menu
								? item.menu.links.some((link) =>
									location.pathname.startsWith(link.href),
								)
								: item.href === '/'
									? location.pathname === '/'
									: location.pathname.startsWith(item.href);

							/* Normal mobile link */
							if (!item.menu) {
								return (
									<li key={item.label}>
										<Link
											to={item.href}
											onClick={onClose}
											className={cn(
												'group flex min-h-12 items-center justify-between',
												'rounded-xl px-3.5 py-2.5',
												'font-display text-[16px] font-semibold',
												'transition-all duration-200',
												active
													? 'bg-brand/[0.07] text-navy'
													: 'text-navy hover:bg-slate-50',
											)}
										>
											<div className="flex items-center gap-3">
												{active && (
													<span className="h-5 w-[3px] rounded-full bg-brand" />
												)}

												{item.label}
											</div>

											<ArrowRight
												className="
													h-4 w-4 text-slate-300
													transition-all duration-200
													group-hover:translate-x-0.5
													group-hover:text-brand
												"
											/>
										</Link>
									</li>
								);
							}

							/* Expandable mobile link */
							return (
								<li key={item.label}>
									<button
										type="button"
										aria-expanded={isExpanded}
										onClick={() =>
											setExpanded(
												isExpanded ? null : item.label,
											)
										}
										className={cn(
											'flex min-h-12 w-full items-center justify-between',
											'rounded-xl px-3.5 py-2.5',
											'font-display text-[16px] font-semibold',
											'transition-all duration-200',
											isExpanded
												? 'bg-navy text-white'
												: active
													? 'bg-brand/[0.07] text-navy'
													: 'text-navy hover:bg-slate-50',
										)}
									>
										<div className="flex items-center gap-3">
											{active && !isExpanded && (
												<span className="h-5 w-[3px] rounded-full bg-brand" />
											)}

											{item.label}
										</div>

										<span
											className={cn(
												'grid h-7 w-7 place-items-center rounded-lg',
												'transition-all duration-200',
												isExpanded
													? 'bg-white/10 text-brand'
													: 'bg-brand/[0.08] text-brand',
											)}
										>
											<ChevronDown
												className={cn(
													'h-4 w-4',
													'transition-transform duration-200',
													isExpanded && 'rotate-180',
												)}
											/>
										</span>
									</button>

									{isExpanded && (
										<div
											className="
												mt-1.5 overflow-hidden
												rounded-2xl border border-slate-100
												bg-slate-50/80 p-1.5
											"
										>
											<ul className="space-y-0.5">
												{item.menu.links.map((link) => (
													<li key={link.label}>
														<Link
															to={link.href}
															onClick={onClose}
															className="
																group flex items-center gap-3
																rounded-xl px-2.5 py-2.5
																transition-all duration-200
																hover:bg-white
																hover:shadow-sm
															"
														>
															<span
																className="
																	grid h-9 w-9 shrink-0
																	place-items-center rounded-xl
																	bg-white text-brand
																	shadow-sm ring-1
																	ring-slate-900/[0.04]
																	transition-all duration-200
																	group-hover:bg-brand
																	group-hover:text-white
																"
															>
																<link.icon
																	className="h-4 w-4"
																	strokeWidth={1.8}
																/>
															</span>

															<span className="min-w-0 flex-1">
																<span className="block text-[13.5px] font-semibold text-navy">
																	{link.label}
																</span>

																<span
																	className="
																		mt-0.5 block
																		overflow-hidden text-ellipsis
																		whitespace-nowrap
																		text-[11.5px] text-slate-500
																	"
																>
																	{link.description}
																</span>
															</span>

															<ArrowRight
																className="
																	h-3.5 w-3.5
																	text-slate-300
																	transition-all
																	group-hover:translate-x-0.5
																	group-hover:text-brand
																"
															/>
														</Link>
													</li>
												))}
											</ul>

											<Link
												to={item.menu.featured.href}
												onClick={onClose}
												className="
													group mt-1 flex items-center
													justify-between rounded-xl
													bg-white px-3 py-2.5
													text-[12px] font-semibold
													text-brand shadow-sm
												"
											>
												{item.menu.featured.cta}

												<ArrowRight
													className="
														h-3.5 w-3.5
														transition-transform
														group-hover:translate-x-0.5
													"
												/>
											</Link>
										</div>
									)}
								</li>
							);
						})}
					</ul>

					{/* CTA area */}
					<div
						className="
							mt-4 rounded-2xl bg-navy
							p-4 shadow-lg shadow-navy/10
						"
					>
						<div className="mb-3 flex items-center gap-2">
							<span
								className="
									grid h-8 w-8 place-items-center
									rounded-lg bg-brand/15 text-brand
								"
							>
								<Sparkles className="h-4 w-4" />
							</span>

							<div>
								<p className="text-[13px] font-semibold text-white">
									Have an idea?
								</p>

								<p className="text-[11px] text-slate-400">
									Let's turn it into something real.
								</p>
							</div>
						</div>

						<Link
							to="/contact"
							onClick={onClose}
							aria-label="Contact Codelaro"
							className="
        group flex min-h-11 w-full
        items-center justify-center gap-2
        rounded-xl bg-brand
        font-display text-base font-semibold
        text-white
        shadow-lg shadow-brand/20
        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-brand/30
        active:translate-y-0
    "
						>
							Contact Us

							<ArrowUpRight
								className="
            h-4 w-4
            transition-transform duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            motion-reduce:transform-none
        "
								strokeWidth={2}
								aria-hidden="true"
							/>
						</Link>
					</div>

					<p className="mt-3 text-center text-[11px] text-slate-400">
						We usually reply within one business day.
					</p>
				</nav>
			</div>
		</>
	);
}

/* -------------------------------------------------------------------------- */
/*                                Site Header                                 */
/* -------------------------------------------------------------------------- */

export function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [hideOnSolutions, setHideOnSolutions] = useState(false);

	const location = useLocation();

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 24);
		};

		onScroll();

		window.addEventListener('scroll', onScroll, {
			passive: true,
		});

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		setMobileOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		// Always restore the header when navigating.
		setHideOnSolutions(false);

		// The header should only hide on the homepage.
		if (location.pathname !== '/') {
			return;
		}

		const solutionsSection = document.getElementById('solutions');

		if (!solutionsSection) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				setHideOnSolutions(
					window.innerWidth >= 1024 && entry.isIntersecting
				);
			},
			{
				threshold: 0.1,
			}
		);

		observer.observe(solutionsSection);

		const handleResize = () => {
			if (window.innerWidth < 1024) {
				setHideOnSolutions(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			observer.disconnect();
			window.removeEventListener('resize', handleResize);
		};
	}, [location.pathname]);

	return (
		<header
			className={cn(
				'fixed inset-x-0 top-0 z-50',
				'transition-all duration-500 ease-out',

				scrolled ? 'px-3 pt-3 sm:px-5' : 'px-0 pt-0',

				hideOnSolutions &&
				'lg:-translate-y-full lg:pointer-events-none lg:opacity-0',
			)}
		>
			<div
				className={cn(
					'mx-auto flex w-full max-w-9xl',
					'items-center justify-between gap-4',
					'transition-all duration-500 ease-out',

					scrolled
						? [
							'h-16',
							'rounded-2xl',
							'border border-white/80',
							'bg-white/90',
							'px-4 sm:px-6',
							'backdrop-blur-xl',
							'shadow-[0_16px_45px_-18px_rgba(15,23,42,0.28)]',
						]
						: [
							'h-16 md:h-20',
							'border-b border-transparent',
							'bg-transparent',
							'px-5 sm:px-8',
							'shadow-none',
						],
				)}
			>
				{/* Logo */}
				<Logo onNavigate={() => setMobileOpen(false)} />

				{/* Desktop navigation */}
				<DesktopNav />

				{/* Right side */}
				<div className="flex items-center gap-3">
					<Link
						to="/contact"
						aria-label="Contact Codelaro"
						className="
        group hidden h-11 items-center gap-2
        rounded-lg bg-brand px-5
        font-display text-base font-semibold
        text-white
        shadow-lg shadow-brand/20
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-brand-600
        hover:shadow-brand/30
        active:translate-y-0
        active:scale-[0.98]
        sm:flex
    "
					>
						Contact Us

						<ArrowUpRight
							className="
            h-4 w-4
            transition-transform duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            motion-reduce:transform-none
        "
							strokeWidth={2}
							aria-hidden="true"
						/>
					</Link>

					{/* Mobile menu button */}
					<button
						type="button"
						aria-label={
							mobileOpen ? 'Close menu' : 'Open menu'
						}
						aria-expanded={mobileOpen}
						onClick={() =>
							setMobileOpen((value) => !value)
						}
						className={cn(
							'grid h-11 w-11 place-items-center',
							'rounded-xl transition-all duration-200',
							'lg:hidden',

							mobileOpen
								? 'bg-navy text-white shadow-lg shadow-navy/15'
								: 'text-navy hover:bg-brand/[0.08] hover:text-brand',
						)}
					>
						{mobileOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			<MobileNav
				open={mobileOpen}
				onClose={() => setMobileOpen(false)}
				scrolled={scrolled}
			/>
		</header>
	);
}