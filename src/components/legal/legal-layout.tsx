import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import {
    ArrowLeft,
    ArrowUpRight,
    BookOpen,
    CalendarDays,
    Check,
    ChevronRight,
    FileText,
    Headphones,
    List,
    ShieldCheck,
} from 'lucide-react';

import type { LegalDocument } from '@/data/legal';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/* Legal Layout                                                               */
/* -------------------------------------------------------------------------- */

export function LegalLayout({ document }: { document: LegalDocument }) {
    const [activeId, setActiveId] = useState<string>(
        document.sections[0]?.id ?? ''
    );

    const [readingProgress, setReadingProgress] = useState(0);
    const [mobileTocOpen, setMobileTocOpen] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);
    const sidebarNavRef = useRef<HTMLElement>(null);

    const totalSections = document.sections.length;

    /* ---------------------------------------------------------------------- */
    /* Reset navigation when document changes                                 */
    /* ---------------------------------------------------------------------- */

    useEffect(() => {
        setActiveId(document.sections[0]?.id ?? '');
        setReadingProgress(0);
        setMobileTocOpen(false);
    }, [document]);

    /* ---------------------------------------------------------------------- */
    /* Automatic active section tracking + reading progress                   */
    /* ---------------------------------------------------------------------- */

    useEffect(() => {
        let frame = 0;

        const updateReadingState = () => {
            cancelAnimationFrame(frame);

            frame = requestAnimationFrame(() => {
                const container = contentRef.current;

                if (!container || !document.sections.length) {
                    return;
                }

                const sections = document.sections
                    .map((section) =>
                        window.document.getElementById(section.id)
                    )
                    .filter(
                        (section): section is HTMLElement =>
                            section !== null
                    );

                if (!sections.length) return;

                /*
                 * Reading position:
                 * Approximately 30% down the viewport,
                 * capped at 260px.
                 */

                const readingPosition = Math.min(
                    window.innerHeight * 0.3,
                    260
                );

                /*
                 * Identify the currently visible section.
                 */

                let currentSection = sections[0];

                for (const section of sections) {
                    const rect = section.getBoundingClientRect();

                    if (rect.top <= readingPosition) {
                        currentSection = section;
                    } else {
                        break;
                    }
                }

                /*
                 * Ensure the final section activates
                 * when the reader reaches the bottom.
                 */

                const lastSection = sections[sections.length - 1];

                const documentBottom =
                    window.scrollY +
                    window.innerHeight >=
                    window.document.documentElement.scrollHeight - 8;

                if (documentBottom) {
                    currentSection = lastSection;
                }

                setActiveId((previous) =>
                    previous === currentSection.id
                        ? previous
                        : currentSection.id
                );

                /*
                 * Calculate document reading progress.
                 */

                const rect = container.getBoundingClientRect();

                const containerTop =
                    window.scrollY + rect.top;

                const containerBottom =
                    containerTop + container.offsetHeight;

                const currentPosition =
                    window.scrollY + readingPosition;

                const totalDistance =
                    containerBottom - containerTop;

                const progress =
                    totalDistance > 0
                        ? ((currentPosition - containerTop) /
                              totalDistance) *
                          100
                        : 0;

                setReadingProgress(
                    Math.min(100, Math.max(0, progress))
                );
            });
        };

        updateReadingState();

        window.addEventListener('scroll', updateReadingState, {
            passive: true,
        });

        window.addEventListener('resize', updateReadingState);

        return () => {
            cancelAnimationFrame(frame);

            window.removeEventListener(
                'scroll',
                updateReadingState
            );

            window.removeEventListener(
                'resize',
                updateReadingState
            );
        };
    }, [document]);

    /* ---------------------------------------------------------------------- */
    /* Keep active sidebar item visible                                       */
    /* ---------------------------------------------------------------------- */

    useEffect(() => {
        const navigation = sidebarNavRef.current;

        if (!navigation || !activeId) return;

        const activeLink = Array.from(
            navigation.querySelectorAll<HTMLAnchorElement>('a')
        ).find(
            (link) =>
                link.getAttribute('href') === `#${activeId}`
        );

        if (!activeLink) return;

        const navigationRect =
            navigation.getBoundingClientRect();

        const linkRect =
            activeLink.getBoundingClientRect();

        if (
            linkRect.top < navigationRect.top ||
            linkRect.bottom > navigationRect.bottom
        ) {
            navigation.scrollTo({
                top:
                    navigation.scrollTop +
                    linkRect.top -
                    navigationRect.top -
                    navigation.clientHeight / 3,
                behavior: 'smooth',
            });
        }
    }, [activeId]);

    /* ---------------------------------------------------------------------- */
    /* Sidebar navigation                                                     */
    /* ---------------------------------------------------------------------- */

    const handleSectionClick = (id: string) => {
        setActiveId(id);
        setMobileTocOpen(false);
    };

    return (
        <main className="bg-white">

            {/* ============================================================= */}
            {/* HERO                                                          */}
            {/* ============================================================= */}

            <section
                aria-labelledby="legal-page-heading"
                className="relative isolate overflow-hidden border-b border-navy/[0.07] bg-[#F8FAFC]"
            >
                {/* Background */}

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand/[0.045] to-transparent"
                />

                <div className="relative mx-auto w-full max-w-8xl px-5 pb-16 pt-32 sm:px-8 md:pb-20 md:pt-40">

                    {/* Breadcrumb */}

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-10 flex flex-wrap items-center gap-2 text-[12px] font-medium text-slate-500"
                    >
                        <Link
                            to="/"
                            className="transition-colors hover:text-brand-700"
                        >
                            Home
                        </Link>

                        <ChevronRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-slate-400"
                        />

                        <span className="text-slate-500">
                            Legal
                        </span>

                        <ChevronRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-slate-400"
                        />

                        <span
                            aria-current="page"
                            className="font-semibold text-navy"
                        >
                            {document.title}
                        </span>
                    </nav>

                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">

                        {/* Heading */}

                        <div className="max-w-3xl">

                            <div className="inline-flex items-center gap-3">
                                <span className="h-px w-8 bg-brand" />

                                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                                    {document.eyebrow}
                                </span>
                            </div>

                            <h1
                                id="legal-page-heading"
                                className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.07] tracking-[-0.05em] text-navy"
                            >
                                {document.title}
                                <span className="text-brand">.</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-slate-600 sm:text-[17px]">
                                {document.intro}
                            </p>

                            {/* Metadata */}

                            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">

                                <div className="flex items-center gap-2.5">
                                    <CalendarDays
                                        aria-hidden="true"
                                        className="h-4 w-4 text-brand-700"
                                        strokeWidth={1.7}
                                    />

                                    <span className="text-[12px] font-medium text-slate-600">
                                        Last updated:
                                    </span>

                                    <span className="text-[12px] font-semibold text-navy">
                                        {document.lastUpdated}
                                    </span>
                                </div>

                                <span
                                    aria-hidden="true"
                                    className="hidden h-4 w-px bg-slate-200 sm:block"
                                />

                                <div className="flex items-center gap-2.5">
                                    <BookOpen
                                        aria-hidden="true"
                                        className="h-4 w-4 text-brand-700"
                                        strokeWidth={1.7}
                                    />

                                    <span className="text-[12px] font-medium text-slate-600">
                                        {totalSections}{' '}
                                        {totalSections === 1
                                            ? 'section'
                                            : 'sections'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative document visual */}

                        <div className="hidden lg:block">
                            <div className="flex h-[160px] w-[160px] items-center justify-center rounded-[32px] border border-brand/15 bg-white/70 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.25)] backdrop-blur-sm">

                                <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] border border-brand/20 bg-brand/[0.07]">

                                    <FileText
                                        aria-hidden="true"
                                        className="h-9 w-9 text-brand-700"
                                        strokeWidth={1.3}
                                    />

                                    <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-brand text-white">
                                        <Check
                                            className="h-3.5 w-3.5"
                                            strokeWidth={2.5}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================= */}
            {/* DOCUMENT BODY                                                 */}
            {/* ============================================================= */}

            <section
                aria-label={`${document.title} content`}
                className="relative bg-white py-16 sm:py-20"
            >
                <div className="mx-auto w-full max-w-8xl px-5 sm:px-8">

                    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,350px)_minmax(0,1fr)] xl:gap-20">

                        {/* ================================================= */}
                        {/* STICKY SIDEBAR                                    */}
                        {/* ================================================= */}

                        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">

                            <div className="overflow-hidden rounded-[22px] border border-navy/[0.08] bg-[#F8FAFC]">

                                {/* Sidebar heading */}

                                <div className="border-b border-navy/[0.07] px-5 py-5 sm:px-6">

                                    <div className="flex items-center justify-between gap-4">

                                        <div className="flex items-center gap-3">

                                            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/15 bg-brand/[0.08] text-brand-700">
                                                <List
                                                    aria-hidden="true"
                                                    className="h-4 w-4"
                                                    strokeWidth={1.8}
                                                />
                                            </span>

                                            <div>
                                                <p className="font-display text-[14px] font-semibold text-navy">
                                                    On this page
                                                </p>

                                                <p className="mt-0.5 font-mono text-[10px] text-slate-400">
                                                    Document navigation
                                                </p>
                                            </div>
                                        </div>

                                        {/* Mobile toggle */}

                                        <button
                                            type="button"
                                            aria-expanded={mobileTocOpen}
                                            aria-controls="legal-toc"
                                            onClick={() =>
                                                setMobileTocOpen(
                                                    (current) => !current
                                                )
                                            }
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy/10 bg-white text-navy lg:hidden"
                                        >
                                            <ChevronRight
                                                className={cn(
                                                    'h-4 w-4 transition-transform',
                                                    mobileTocOpen &&
                                                        'rotate-90'
                                                )}
                                            />

                                            <span className="sr-only">
                                                Toggle table of contents
                                            </span>
                                        </button>

                                        <span className="hidden font-mono text-[11px] font-semibold text-slate-400 lg:block">
                                            {String(totalSections).padStart(
                                                2,
                                                '0'
                                            )}
                                        </span>
                                    </div>
                                </div>

                                {/* Navigation */}

                                <nav
                                    ref={sidebarNavRef}
                                    id="legal-toc"
                                    aria-label="Table of contents"
                                    className={cn(
                                        'max-h-[min(55vh,520px)] overflow-y-auto overscroll-contain px-3 py-4 sm:px-4',
                                        mobileTocOpen
                                            ? 'block'
                                            : 'hidden lg:block'
                                    )}
                                >
                                    <ul className="space-y-1">

                                        {document.sections.map(
                                            (section, index) => {
                                                const isActive =
                                                    activeId === section.id;

                                                return (
                                                    <li key={section.id}>
                                                        <a
                                                            href={`#${section.id}`}
                                                            aria-current={
                                                                isActive
                                                                    ? 'location'
                                                                    : undefined
                                                            }
                                                            onClick={() =>
                                                                handleSectionClick(
                                                                    section.id
                                                                )
                                                            }
                                                            className={cn(
                                                                'group relative flex items-start gap-3 rounded-xl px-3.5 py-3 transition-all duration-300',
                                                                isActive
                                                                    ? 'bg-brand/[0.09] text-navy'
                                                                    : 'text-slate-500 hover:bg-white hover:text-navy'
                                                            )}
                                                        >

                                                            {/* Active indicator */}

                                                            <span
                                                                aria-hidden="true"
                                                                className={cn(
                                                                    'absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full transition-all duration-300',
                                                                    isActive
                                                                        ? 'bg-brand'
                                                                        : 'bg-transparent'
                                                                )}
                                                            />

                                                            {/* Section number */}

                                                            <span
                                                                className={cn(
                                                                    'mt-0.5 shrink-0 font-mono text-[10px] font-semibold transition-colors duration-300',
                                                                    isActive
                                                                        ? 'text-brand-700'
                                                                        : 'text-slate-400 group-hover:text-brand-700'
                                                                )}
                                                            >
                                                                {String(
                                                                    index + 1
                                                                ).padStart(
                                                                    2,
                                                                    '0'
                                                                )}
                                                            </span>

                                                            {/* Section title */}

                                                            <span
                                                                className={cn(
                                                                    'flex-1 text-[13px] leading-[1.6] transition-colors duration-300',
                                                                    isActive
                                                                        ? 'font-semibold text-navy'
                                                                        : 'font-medium'
                                                                )}
                                                            >
                                                                {
                                                                    section.heading
                                                                }
                                                            </span>

                                                            {isActive && (
                                                                <ArrowUpRight
                                                                    aria-hidden="true"
                                                                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-700"
                                                                />
                                                            )}
                                                        </a>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </nav>

                                {/* Reading progress */}

                                <div className="border-t border-navy/[0.07] bg-white/60 px-5 py-5 sm:px-6">

                                    <div className="mb-3 flex items-center justify-between gap-3">

                                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500">
                                            Reading progress
                                        </span>

                                        <span className="font-mono text-[11px] font-semibold text-brand-700">
                                            {Math.round(readingProgress)}%
                                        </span>
                                    </div>

                                    <div
                                        role="progressbar"
                                        aria-label="Document reading progress"
                                        aria-valuenow={Math.round(
                                            readingProgress
                                        )}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        className="h-1.5 overflow-hidden rounded-full bg-navy/[0.07]"
                                    >
                                        <div
                                            className="h-full rounded-full bg-brand transition-[width] duration-150"
                                            style={{
                                                width: `${readingProgress}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact card */}

                            <div className="mt-5 hidden rounded-[20px] border border-brand/15 bg-brand/[0.045] p-6 lg:block">

                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/15 bg-white text-brand-700">
                                    <Headphones
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                        strokeWidth={1.7}
                                    />
                                </span>

                                <h3 className="mt-5 font-display text-[15px] font-semibold text-navy">
                                    Need clarification?
                                </h3>

                                <p className="mt-2 text-[13px] leading-[1.8] text-slate-500">
                                    Have a question about this document?
                                    Get in touch with our team.
                                </p>

                                <Link
                                    to="/contact"
                                    className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-700 transition-colors hover:text-navy"
                                >
                                    Contact us

                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        </aside>

                        {/* ================================================= */}
                        {/* DOCUMENT CONTENT                                  */}
                        {/* ================================================= */}

                        <div
                            ref={contentRef}
                            className="min-w-0"
                        >

                            {/* Introduction */}

                            <div className="mb-12 border-b border-navy/[0.09] pb-9">

                                <div className="flex items-center gap-3">

                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/[0.07] text-brand-700">
                                        <BookOpen
                                            aria-hidden="true"
                                            className="h-4 w-4"
                                            strokeWidth={1.7}
                                        />
                                    </span>

                                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                                        Document overview
                                    </span>
                                </div>

                                <p className="mt-5 max-w-3xl text-[15px] leading-[1.95] text-slate-600 sm:text-[16px]">
                                    {document.intro}
                                </p>
                            </div>

                            {/* Legal sections */}

                            <div className="space-y-12 sm:space-y-14">

                                {document.sections.map(
                                    (section, index) => (
                                        <section
                                            key={section.id}
                                            id={section.id}
                                            aria-labelledby={`${section.id}-heading`}
                                            className="group scroll-mt-32"
                                        >

                                            {/* Section heading */}

                                            <div className="flex items-start gap-4 sm:gap-5">

                                                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand/15 bg-brand/[0.06] font-mono text-[11px] font-semibold text-brand-700 sm:h-10 sm:w-10">
                                                    {String(
                                                        index + 1
                                                    ).padStart(2, '0')}
                                                </span>

                                                <div className="min-w-0 flex-1">

                                                    <h2
                                                        id={`${section.id}-heading`}
                                                        className="font-display text-[19px] font-semibold leading-[1.4] tracking-[-0.025em] text-navy sm:text-[22px]"
                                                    >
                                                        {section.heading}
                                                    </h2>

                                                    <div className="mt-4 h-px w-full bg-navy/[0.08]" />
                                                </div>
                                            </div>

                                            {/* Section paragraphs */}

                                            <div className="mt-6 space-y-5 sm:pl-[60px]">

                                                {section.body.map(
                                                    (paragraph, index) => (
                                                        <p
                                                            key={index}
                                                            className="max-w-3xl text-[14px] leading-[2] text-slate-600 sm:text-[15px]"
                                                        >
                                                            {paragraph}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </section>
                                    )
                                )}
                            </div>

                          

                            {/* Document footer */}

                            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-navy/[0.09] pt-6">

                                <div className="flex items-center gap-2.5">

                                    <ShieldCheck
                                        aria-hidden="true"
                                        className="h-4 w-4 text-brand-700"
                                        strokeWidth={1.7}
                                    />

                                    <span className="font-mono text-[11px] font-medium text-slate-500">
                                        End of document
                                    </span>
                                </div>

                                <a
                                    href="#legal-page-heading"
                                    className="group inline-flex items-center gap-2 text-[12px] font-semibold text-brand-700 transition-colors hover:text-navy"
                                >
                                    Back to top

                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================= */}
            {/* CONTACT CTA                                                   */}
            {/* ============================================================= */}

            <section
                aria-labelledby="legal-contact-heading"
                className="relative isolate bg-[#F8FAFC] py-16 sm:py-20"
            >
                <div className="mx-auto w-full max-w-8xl px-5 sm:px-8">

                    <div className="relative overflow-hidden rounded-[28px] border border-brand/15 bg-brand/[0.065] sm:rounded-[36px]">

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-20"
                        />

                        <div className="relative flex flex-col items-start justify-between gap-10 px-7 py-10 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:gap-16 lg:px-16">

                            <div className="max-w-2xl">

                                <div className="inline-flex items-center gap-3">

                                    <span className="h-px w-8 bg-brand" />

                                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                                        We're here to help
                                    </span>
                                </div>

                                <h2
                                    id="legal-contact-heading"
                                    className="mt-5 font-display text-[clamp(1.8rem,3vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.04em] text-navy"
                                >
                                    Questions about this
                                    <span className="text-brand">
                                        {' '}document?
                                    </span>
                                </h2>

                                <p className="mt-4 max-w-xl text-[14px] leading-[1.85] text-slate-600 sm:text-[15px]">
                                    If you have questions about our
                                    policies or need further
                                    clarification, our team is
                                    available to help.
                                </p>
                            </div>

                            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">

                                <Link
                                    to="/contact"
                                    className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-brand px-7 font-display text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_12px_28px_-12px_rgba(24,188,183,0.5)]"
                                >
                                    Contact us

                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>

                                <Link
                                    to="/"
                                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-navy/10 bg-white/80 px-6 font-display text-[16px] font-semibold text-navy transition-all duration-300 hover:border-brand/30 hover:bg-white"
                                >
                                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />

                                    Back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}