import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { Link } from 'react-router';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  ExternalLink,
  List,
} from 'lucide-react';
import type { Route } from './+types/insights-article';
import { seo } from '@/lib/seo';
import {
  INSIGHT_CATEGORIES,
  getInsightArticleBySlug,
  getRelatedInsightArticles,
  type InsightArticle,
} from '@/data/insights';
import { CtaSection } from '@/components/cta-section';

import { InsightArticleVisual } from '@/components/insights/insight-article-visual';

const SITE_URL = 'https://codelaro.com';

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(iso));
}

/** Only data from our local editorial collection is accepted as an article. */
export function loader({ params }: Route.LoaderArgs) {
  const article = getInsightArticleBySlug(params.slug ?? '');
  if (!article) throw new Response('Insight not found', { status: 404 });
  return { article };
}

export function meta({ matches, location, data }: Route.MetaArgs) {
  const article = data?.article;
  if (!article) {
    return [
      { title: 'Article Not Found | Codelaro' },
      { name: 'robots', content: 'noindex, follow' },
    ];
  }

  const path = `/insights/${article.slug}`;
  const canonical = `${SITE_URL}${path}`;
  const metadata = seo(
    { matches, location },
    {
      title: article.seoTitle,
      description: article.seoDescription,
      path,
      // Draft pages receive no published-article schema.
      ...(!article.placeholder && {
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.seoDescription,
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
          url: canonical,
          datePublished: article.publishedAt,
          author: { '@type': 'Organization', name: article.author },
          publisher: { '@type': 'Organization', name: 'Codelaro', url: SITE_URL },
          inLanguage: 'en',
          keywords: article.keywords.join(', '),
        },
      }),
    },
  );

  // Avoid conflicting index/noindex directives on editorial drafts.
  if (article.placeholder) {
    return [
      ...metadata.filter(
        (entry) => !('name' in entry && entry.name === 'robots'),
      ),
      { name: 'robots', content: 'noindex, follow' },
    ];
  }
  return metadata;
}

function HeadingLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
      {children}
    </p>
  );
}

function ArticleHero({ article }: { article: InsightArticle }) {
  return (
    <header className="relative isolate overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-30" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-8xl px-5 pb-14 pt-32 sm:px-8 md:pb-20 md:pt-40">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] text-slate-500">
          <Link to="/insights" className="transition-colors hover:text-brand-700">Insights</Link>
          <span aria-hidden="true" className="text-slate-300">/</span>
          <span aria-current="page" className="max-w-[240px] truncate font-medium text-navy sm:max-w-none">
            {article.title}
          </span>
        </nav>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-16">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-brand/20 bg-brand/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-700">
                {article.tag}
              </span>
             
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,4.7vw,4.65rem)] font-bold leading-[1.09] tracking-[-0.045em] text-navy">
              {article.title}
              <span className="text-brand">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-slate-600 sm:text-[18px]">
              {article.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200 pt-6 text-[13px] text-slate-500">
              <span className="inline-flex items-center gap-2 font-semibold text-navy">
                <BookOpen aria-hidden="true" className="h-4 w-4 text-brand" />
                {article.author}
              </span>
              {!article.placeholder && (
                <span className="inline-flex items-center gap-2">
                  <CalendarDays aria-hidden="true" className="h-4 w-4" />
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                </span>
              )}
              <span className="inline-flex items-center gap-2">
                <Clock3 aria-hidden="true" className="h-4 w-4" />
                {article.readTime} min read (est.)
              </span>
            </div>
          </div>

          {/* Restrained technical panel; no fake performance figures or claims. */}
          {/* Dedicated Article Visual */}
<div
    className="
        relative hidden min-w-0
        overflow-hidden
        rounded-[28px]
        border border-slate-200
        bg-[#F8FAFC]
        shadow-[0_24px_65px_-42px_rgba(15,23,42,0.20)]
        lg:flex lg:flex-col
    "
>
    {/* Visual Header */}
    <div className="relative z-10 flex items-center justify-between border-b border-slate-200/70 bg-white/80 px-5 py-4">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-navy">
            CODELARO / INSIGHTS
        </span>

        <span className="rounded-full border border-brand/15 bg-brand/[0.07] px-3 py-1 text-[10px] font-semibold text-brand-700">
            {article.tag}
        </span>
    </div>

    {/* Article-specific Illustration */}
    <div className="h-[320px] w-full overflow-hidden [&>*]:!h-full">
        <InsightArticleVisual
            slug={article.slug}
            variant="hero"
        />
    </div>

    {/* Visual Footer */}
    <div className="relative z-10 flex items-center justify-between border-t border-slate-200/70 bg-white/80 px-5 py-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
            {article.category}
        </span>

        <span className="font-mono text-[10px] tracking-wide text-brand-700">
            CODE. LAUNCH. GROW.
        </span>
    </div>
</div>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Article Sidebar — ScrollSpy & Reading Progress                             */
/* -------------------------------------------------------------------------- */

function ArticleSidebar({ article }: { article: InsightArticle }) {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'key-takeaways', label: 'Key takeaways' },

        ...article.content.map((section) => ({
            id: section.id,
            label: section.heading,
        })),

        { id: 'conclusion', label: 'Conclusion' },

        ...(article.faqs.length > 0
            ? [{ id: 'article-faqs', label: 'Frequently asked questions' }]
            : []),

        ...(article.sources?.length
            ? [{ id: 'sources', label: 'Further reading' }]
            : []),
    ];

    const [activeSection, setActiveSection] = useState('overview');
    const [progress, setProgress] = useState(0);

    /* ---------------------------------------------------------------------- */
    /* Track Active Section & Reading Progress                                */
    /* ---------------------------------------------------------------------- */

    useEffect(() => {
        let frame = 0;

        const updateScroll = () => {
            const offset = 180;

            let currentSection = sections[0].id;

            for (const section of sections) {
                const element = document.getElementById(section.id);

                if (!element) continue;

                const rect = element.getBoundingClientRect();

                if (rect.top <= offset) {
                    currentSection = section.id;
                }
            }

            setActiveSection(currentSection);

            /* Calculate progress through the article */

            const articleElement = document.querySelector(
                '[data-article-content]'
            );

            if (articleElement) {
                const rect = articleElement.getBoundingClientRect();

                const scrollableDistance =
                    rect.height - window.innerHeight;

                if (scrollableDistance > 0) {
                    const currentProgress =
                        (-rect.top / scrollableDistance) * 100;

                    setProgress(
                        Math.min(
                            100,
                            Math.max(0, currentProgress)
                        )
                    );
                } else {
                    setProgress(
                        rect.top <= 0 ? 100 : 0
                    );
                }
            }
        };

        const handleScroll = () => {
            cancelAnimationFrame(frame);

            frame = requestAnimationFrame(updateScroll);
        };

        updateScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        window.addEventListener('resize', handleScroll);

        return () => {
            cancelAnimationFrame(frame);

            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };

    }, [article.slug]);

    /* ---------------------------------------------------------------------- */
    /* Handle Navigation                                                      */
    /* ---------------------------------------------------------------------- */

    const scrollToSection = (
        event: MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        const element = document.getElementById(id);

        if (!element) return;

        event.preventDefault();

        setActiveSection(id);

        element.scrollIntoView({
            behavior: window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches
                ? 'instant'
                : 'smooth',

            block: 'start',
        });

        window.history.replaceState(
            window.history.state,
            '',
            `#${id}`
        );
    };

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (
        <aside
            aria-label="Article navigation"
            className="hidden lg:block"
        >
            <div
                className="
                    sticky top-28
                    overflow-hidden
                    rounded-[24px]
                    border border-slate-200
                    bg-[#F8FAFC]
                    shadow-[0_10px_35px_-20px_rgba(15,23,42,0.08)]
                "
            >

                {/* Header */}

                <div className="border-b border-slate-200/80 px-6 pb-5 pt-6">

                    <div className="flex items-center justify-between gap-3">

                        <div className="flex items-center gap-2.5">

                            <div
                                className="
                                    flex h-8 w-8
                                    items-center justify-center
                                    rounded-lg
                                    bg-brand/[0.09]
                                    text-brand
                                "
                            >
                                <List
                                    className="h-4 w-4"
                                    strokeWidth={1.8}
                                />
                            </div>

                            <span className="font-display text-[14px] font-bold text-navy">
                                On this page
                            </span>

                        </div>

                        <span className="font-mono text-[11px] font-semibold text-brand-700">
                            {Math.round(progress)}%
                        </span>

                    </div>

                    {/* Progress Bar */}

                    <div
                        role="progressbar"
                        aria-label="Article reading progress"
                        aria-valuenow={Math.round(progress)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="
                            mt-5 h-[3px] w-full
                            overflow-hidden
                            rounded-full
                            bg-slate-200
                        "
                    >
                        <div
                            className="
                                h-full rounded-full
                                bg-brand
                                transition-[width] duration-150
                                ease-out
                            "
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>

                </div>

                {/* Navigation */}

                <nav
                    aria-label="Table of contents"
                    className="
                        max-h-[min(60vh,520px)]
                        space-y-1
                        overflow-y-auto
                        px-3 py-4
                        [scrollbar-width:thin]
                    "
                >

                    {sections.map((section, index) => {
                        const isActive =
                            activeSection === section.id;

                        return (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(event) =>
                                    scrollToSection(
                                        event,
                                        section.id
                                    )
                                }
                                aria-current={
                                    isActive
                                        ? 'location'
                                        : undefined
                                }
                                className={`
                                    group relative
                                    flex items-start
                                    gap-3
                                    rounded-lg
                                    border-l-[3px]
                                    px-3 py-2.5
                                    text-[13px]
                                    leading-[1.5]
                                    transition-all duration-200

                                    ${
                                        isActive
                                            ? `
                                                border-brand
                                                bg-brand/[0.09]
                                                font-semibold
                                                text-brand-700
                                            `
                                            : `
                                                border-transparent
                                                font-medium
                                                text-slate-500
                                                hover:border-brand/40
                                                hover:bg-brand/[0.04]
                                                hover:text-brand-700
                                            `
                                    }
                                `}
                            >

                                {/* Section Number */}

                                <span
                                    className={`
                                        mt-[1px]
                                        shrink-0
                                        font-mono
                                        text-[10px]
                                        transition-colors

                                        ${
                                            isActive
                                                ? 'text-brand'
                                                : 'text-slate-400'
                                        }
                                    `}
                                >
                                    {String(
                                        index + 1
                                    ).padStart(2, '0')}
                                </span>

                                {/* Section Heading */}

                                <span className="min-w-0">
                                    {section.label}
                                </span>

                            </a>
                        );
                    })}

                </nav>

                {/* Footer */}

                <div className="border-t border-slate-200/80 px-6 py-5">

                    <Link
                        to="/insights"
                        className="
                            group inline-flex
                            items-center gap-2
                            text-[13px]
                            font-semibold
                            text-brand-700
                            transition-colors
                            hover:text-navy
                        "
                    >
                        <ArrowLeft
                            className="
                                h-4 w-4
                                transition-transform
                                group-hover:-translate-x-1
                            "
                        />

                        Back to insights
                    </Link>

                </div>

            </div>
        </aside>
    );
}

function ArticleContent({ article }: { article: InsightArticle }) {
  return (
    <section aria-label="Article" className="bg-white">
    <div
    className="
        mx-auto grid w-full max-w-8xl
        gap-12 px-5 py-16 sm:px-0 md:py-20
        lg:grid-cols-[minmax(0,1fr)_350px]
        lg:gap-12
        xl:grid-cols-[minmax(0,1fr)_380px]
        xl:gap-20
    "
>
      <article
    data-article-content
    className="min-w-0 max-w-[850px]"
>

          <section id="overview" className="scroll-mt-28">
            <HeadingLabel>Article overview</HeadingLabel>
            <h2 className="mt-3 font-display text-[clamp(1.65rem,3vw,2.35rem)] font-bold tracking-tight text-navy">The big picture</h2>
            <div className="mt-6 space-y-5">
              {article.introduction.map((paragraph, i) => (
                <p key={i} className="text-[16px] leading-[1.95] text-slate-600">{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="key-takeaways" className="mt-12 scroll-mt-28 rounded-[24px] border border-brand/15 bg-[#F2FAF9] p-6 sm:p-8">
            <HeadingLabel>At a glance</HeadingLabel>
            <h2 className="mt-3 font-display text-[23px] font-bold tracking-tight text-navy sm:text-[27px]">Key takeaways</h2>
            <ul className="mt-6 space-y-4">
              {article.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.75] text-slate-700">
                  <span aria-hidden="true" className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-700"><Check className="h-3 w-3" strokeWidth={2.5} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-14 space-y-14">
            {article.content.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-[clamp(1.55rem,2.5vw,2.15rem)] font-bold leading-[1.25] tracking-[-0.03em] text-navy">{section.heading}</h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-[16px] leading-[1.95] text-slate-600">{paragraph}</p>
                  ))}
                </div>
                {!!section.bullets?.length && (
                  <ul className="mt-6 space-y-3 pl-0">
                    {section.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3 text-[15px] leading-[1.85] text-slate-700">
                        <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section id="conclusion" className="mt-14 scroll-mt-28 border-t border-slate-200 pt-12">
            <HeadingLabel>Final thoughts</HeadingLabel>
            <h2 className="mt-3 font-display text-[clamp(1.55rem,2.5vw,2.15rem)] font-bold tracking-tight text-navy">Conclusion</h2>
            <div className="mt-5 space-y-5">
              {article.conclusion.map((paragraph, i) => <p key={i} className="text-[16px] leading-[1.95] text-slate-600">{paragraph}</p>)}
            </div>
          </section>

          {!!article.faqs.length && (
            <section id="article-faqs" className="mt-14 scroll-mt-28 border-t border-slate-200 pt-12">
              <HeadingLabel>Common questions</HeadingLabel>
              <h2 className="mt-3 font-display text-[clamp(1.55rem,2.5vw,2.15rem)] font-bold tracking-tight text-navy">Frequently asked questions</h2>
              <div className="mt-7 divide-y divide-slate-200 rounded-[22px] border border-slate-200 px-5 sm:px-7">
                {article.faqs.map((faq, i) => (
                  <details key={i} className="group py-5" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[15px] font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
                      {faq.question}<span aria-hidden="true" className="shrink-0 text-xl font-normal text-brand group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-3 pr-5 text-[14px] leading-[1.85] text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {!!article.sources?.length && (
            <section id="sources" className="mt-14 scroll-mt-28 border-t border-slate-200 pt-12">
              <HeadingLabel>Explore further</HeadingLabel>
              <h2 className="mt-3 font-display text-[clamp(1.55rem,2.5vw,2.15rem)] font-bold tracking-tight text-navy">Further reading</h2>
              <ul className="mt-6 space-y-3">
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200 px-4 py-4 transition-colors hover:border-brand/30 hover:bg-[#F8FAFC]">
                      <span><span className="block text-[14px] font-semibold text-navy group-hover:text-brand-700">{source.title}</span><span className="mt-1 block text-[12px] text-slate-500">{source.publisher}</span></span>
                      <ExternalLink aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-7">
            <Link to="/insights" className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-700 hover:text-navy"><ArrowLeft className="h-4 w-4" /> All insights</Link>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400">Codelaro insights</span>
          </div>
        </article>
        <ArticleSidebar article={article} />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Related Insights                                                           */
/* -------------------------------------------------------------------------- */

function RelatedInsights({ article }: { article: InsightArticle }) {
    const related = getRelatedInsightArticles(article, 3);

    if (!related.length) return null;

    return (
        <section
            aria-labelledby="related-heading"
            className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-20"
            />

            <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">

                {/* Section Heading */}
                <div className="flex flex-wrap items-end justify-between gap-6">

                    <div>
                        <HeadingLabel>Keep exploring</HeadingLabel>

                        <h2
                            id="related-heading"
                            className="
                                mt-3 font-display
                                text-[clamp(1.8rem,3vw,2.6rem)]
                                font-bold tracking-tight text-navy
                            "
                        >
                            Related insights
                            <span className="text-brand">.</span>
                        </h2>

                        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:text-base">
                            Continue exploring practical perspectives on
                            software engineering, AI, and digital innovation.
                        </p>
                    </div>

                    <Link
                        to="/insights"
                        className="
                            group inline-flex items-center gap-2
                            text-sm font-semibold text-brand-700
                            transition-colors hover:text-navy
                        "
                    >
                        View all insights

                        <ArrowUpRight
                            className="
                                h-4 w-4
                                transition-transform duration-300
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                            "
                        />
                    </Link>

                </div>

                {/* Related Articles Grid */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {related.map((item) => (
                        <Link
                            key={item.slug}
                            to={`/insights/${item.slug}`}
                            aria-label={`Read article: ${item.title}`}
                            className="
                                group flex min-w-0 flex-col
                                overflow-hidden rounded-[24px]
                                border border-slate-200
                                bg-white
                                transition-all duration-500
                                hover:-translate-y-1
                                hover:border-brand/30
                                hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.18)]
                                focus-visible:outline
                                focus-visible:outline-2
                                focus-visible:outline-offset-4
                                focus-visible:outline-brand
                            "
                        >

                            {/* Article-specific Visual */}
                            <div className="relative isolate overflow-hidden bg-[#F8FAFC]">

                                <div
                                    aria-hidden="true"
                                    className="
                                        h-[220px] w-full
                                        overflow-hidden
                                        transition-transform duration-700 ease-out
                                        group-hover:scale-[1.025]
                                        motion-reduce:transform-none
                                        sm:h-[300px]
                                        lg:h-[300px]
                                        [&>*]:!h-full
                                    "
                                >
                                    <InsightArticleVisual
                                        slug={item.slug}
                                        variant="card"
                                    />
                                </div>

                             

                                {/* Bottom Accent */}
                                <div
                                    aria-hidden="true"
                                    className="
                                        pointer-events-none absolute
                                        inset-x-0 bottom-0 z-20
                                        h-px
                                        bg-gradient-to-r
                                        from-transparent
                                        via-brand/30
                                        to-transparent
                                    "
                                />

                            </div>

                            {/* Article Content */}
                            <div className="flex flex-1 flex-col p-6 sm:p-7">

                                {/* Article Title */}
                                <h3
                                    className="
                                        font-display text-[20px]
                                        font-bold leading-[1.35]
                                        tracking-[-0.025em] text-navy
                                        transition-colors duration-300
                                        group-hover:text-brand-700
                                    "
                                >
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        mt-3 line-clamp-3 flex-1
                                        text-[14px] leading-[1.8]
                                        text-slate-600
                                    "
                                >
                                    {item.excerpt}
                                </p>

                                {/* Footer */}
                                <div
                                    className="
                                        mt-7 flex items-center
                                        justify-between gap-4
                                        border-t border-slate-100 pt-5
                                    "
                                >
                                    <span className="text-[13px] font-semibold text-brand-700">
                                        {item.placeholder
                                            ? 'Preview article'
                                            : 'Read article'}
                                    </span>

                                    <span
                                        className="
                                            flex h-9 w-9
                                            items-center justify-center
                                            rounded-full
                                            border border-slate-200
                                            bg-slate-50
                                            text-slate-500
                                            transition-all duration-300
                                            group-hover:border-brand
                                            group-hover:bg-brand
                                            group-hover:text-white
                                        "
                                    >
                                        <ArrowRight
                                            className="
                                                h-4 w-4
                                                transition-transform duration-300
                                                group-hover:translate-x-0.5
                                            "
                                            strokeWidth={1.8}
                                        />
                                    </span>
                                </div>

                            </div>

                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default function InsightsArticlePage({ loaderData }: Route.ComponentProps) {
  const { article } = loaderData;
  return (
    <main>
      <ArticleHero article={article} />
      <ArticleContent article={article} />
      <RelatedInsights article={article} />
      <CtaSection
        eyebrow="Code. Launch. Grow."
        title={<>Building something? <span className="text-brand">Let’s talk.</span></>}
        subtitle="Turn what you've learned into a practical digital product. Talk with Codelaro about your goals and next steps."
      />
    </main>
  );
}
