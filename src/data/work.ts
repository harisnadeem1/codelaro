export type CaseStudyApproach = {

    phase: string;

    title: string;

    description: string;

};



export type CaseStudyFeature = {

    title: string;

    description: string;

};



export type CaseStudyTechGroup = {

    category: string;

    items: string[];

};



export type CaseStudyVisual = {
    src?: string;
    caption: string;
    alt: string;
    aspect: 'wide' | 'tall' | 'square';
};



export type CaseStudyOutcome = {

    /** Use verified results only; descriptive delivery outcomes are acceptable. */

    metric: string;

    label: string;

    note: string;

};



export type WorkProject = {

    id: string;

    slug: string;

    category: string;

    title: string;

    services: string[];

    technologies: string[];

    /** Full introduction used on the case-study detail page. */
    description: string;

    /** Short, SEO-conscious copy used ONLY on /work overview cards. */
    overviewDescription: string;
    overviewChallenge: string;
    overviewSolution: string;

    /** Optional real image URL in /public; omit until supplied. */
    screenshotSrc?: string;

    /** Descriptive text for a real screenshot, not placeholder copy. */

    screenshotAlt: string;

    /** Detailed case-study content, shown only on the detail page. */

    context: string[];

    challenge: string[];

    objectives: string[];

    approach: CaseStudyApproach[];

    solution: string[];

    keyFeatures: CaseStudyFeature[];

    technologyStack: CaseStudyTechGroup[];

    productVisuals: CaseStudyVisual[];

    outcomes: CaseStudyOutcome[];

};



/**

 * Selected work showcases. These are editable placeholders: no clients,

 * results or statistics are invented. Replace `title`, `category`, lists,

 * detail copy and the screenshots with real project information when available.

 */

export const WORK_PROJECTS: WorkProject[] = [

    {
    id: 'project-01',
    slug: 'ronin-charts',
    category: 'FinTech & Trading Platform',
    title: 'Ronin Charts',
    services: [
        'Custom Software Development',
        'Web Application Development',
        'Backend Development',
        'Database Architecture',
        'UI/UX Development',
        'Cloud & DevOps',
    ],

    technologies: [
        'JavaScript',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'JWT',
        'Nginx',
        'PM2',
    ],

    description:
        'Ronin Charts is a custom trading journal and risk-management platform designed to help traders manage positions, monitor performance, and maintain disciplined trading habits. An existing browser-based application was transformed into a production-ready, multi-user platform with secure authentication, persistent PostgreSQL storage, advanced trade tracking, personalized analytics, and centralized administration.',

    overviewDescription:
        'A multi-user trading journal and risk-management platform built from an existing browser-based tool, with secure accounts and persistent trade data.',

    overviewChallenge:
        'Move complex trading records beyond browser storage without disrupting established workflows.',

    overviewSolution:
        'A Node.js and PostgreSQL backend with invite-only accounts, isolated user data, and API-backed trading tools.',
    context: [
        'Ronin Charts is a specialized trading platform developed to support traders who follow structured risk-management and performance-review strategies. The application brings together position sizing, trade journaling, portfolio statistics, and trading discipline tools within a unified digital environment.',
        'The project began with an existing browser-based application that relied on localStorage to maintain trading records and user preferences. Although its core trading functionality was already established, the original architecture lacked the centralized infrastructure required for secure multi-user access, persistent data management, and administrative oversight. The engagement focused on transforming this existing application into a production-ready platform while preserving its established trading workflows and distinctive visual identity.',
    ],
    challenge: [
        'The primary challenge was transforming a single-browser trading application into a secure, database-driven platform capable of supporting multiple independent users. Reliance on localStorage limited centralized data management, account-based access, and the ability to maintain consistent trading records across different devices.',
        'The transformation required restructuring complex trading data without disrupting existing functionality. Journal entries, partial trade exits, user settings, achievements, and market scans needed to be represented within a reliable database architecture. At the same time, the platform required secure invite-only onboarding, strict separation of user records, administrative controls, and a deployment-ready backend while retaining the familiar experience of the original application.',
    ],
    objectives: [
        'Transform the existing browser-based trading application into a production-ready, multi-user web platform with centralized data management.',
        'Implement secure authentication, administrator-controlled invitations, and account-specific access to protect individual trading records.',
        'Replace browser-dependent storage with a structured PostgreSQL database capable of supporting complex trading journals, position management, performance tracking, and personalized settings.',
        'Preserve the original trading workflows and distinctive Ronin Charts interface while integrating the frontend with a modular REST API.',
        'Introduce centralized administration, user management, activity logging, and an infrastructure architecture suitable for VPS deployment.',
    ],
    approach: [
        {
            phase: '01',
            title: 'Discovery & Architecture',
            description:
                'The engagement began with an assessment of the existing application, its trading workflows, and its browser-based data structures. Particular attention was given to position management, journal entries, partial exits, user preferences, achievements, and market scans. These requirements informed a PostgreSQL database architecture designed to preserve existing functionality while introducing persistent storage and independent user accounts.',
        },
        {
            phase: '02',
            title: 'Backend & Security',
            description:
                'A modular backend was developed using Node.js and Express, supported by PostgreSQL. The architecture introduced JWT-based authentication, administrator-issued invitations, account-specific data access, and dedicated services for trading journals, user settings, achievements, scans, and administration. Database constraints, indexed queries, and automated user initialization established a structured foundation for the platform.',
        },

        {
            phase: '03',
            title: 'Application Integration',
            description:
                'The existing JavaScript frontend was connected to the new backend through REST APIs while preserving its established trading workflows. Position management, trade journaling, statistics, compound calculations, and personalized settings were integrated with persistent storage. The interface retained the distinctive Ronin Charts visual identity while supporting responsive navigation across desktop and mobile layouts.',
        },

        {

            phase: '04',
            title: 'Deployment & Production Readiness',
            description:
                'The final stage focused on organizing the application for production deployment and future maintenance. Separate frontend and backend modules, environment-based configuration, PostgreSQL constraints, indexed queries, and administrative activity logging established a maintainable architecture. The application was prepared for VPS hosting using Nginx as a reverse proxy and PM2 for Node.js process management.',
        },
    ],

    solution: [
        'The result was a multi-user trading journal and risk-management web application supported by a modular Node.js and Express backend and a PostgreSQL database. The platform combines position sizing, trade management, detailed journaling, performance statistics, achievement tracking, and personalized account settings. Secure authentication and administrator-controlled invitations provide structured access, while account-specific database operations keep individual trading records separate.',
        'The application preserves the established Ronin Charts trading experience while replacing its original browser-dependent architecture with centralized data management. A relational and JSONB-based database supports detailed trading records, flexible journal information, partial exits, and market scans. Dedicated administrative functionality, modular backend services, and deployment-ready infrastructure provide a foundation for maintaining and extending the platform.',
    ],
    keyFeatures: [
        {
            title: 'Advanced Trading Journal',
            description:
                'A comprehensive trading journal designed to document the complete lifecycle of a trade. Traders can record entry prices, stop losses, profit targets, position sizes, risk percentages, trading theses, and personal notes. The system supports open, partially closed, and completed positions, including detailed partial-exit records and trade performance calculations.',
        },
        {
            title: 'Risk & Position Management',
            description:
                'Integrated position-sizing and risk-management tools help traders structure their trading decisions. Personalized account settings, risk parameters, active position management, and a compound calculator bring essential trading calculations and position information into one application.',
        },
        {

            title: 'Trading Statistics & Progress Tracking',
            description:
                'Dedicated statistics and achievement modules help users review their trading activity and monitor consistency. The platform tracks trading records, journal completion, achievement progress, and activity streaks, giving traders structured information for evaluating their habits and reviewing their performance.',
        },

        {
            title: 'Secure Multi-User Platform',
            description:
                'An administrator-controlled invitation system provides account registration through one-time invitations. JWT authentication, protected API endpoints, and account-specific database queries support secure access and separation of individual trading data. An administrative dashboard provides user management, invitation tracking, platform statistics, and activity logging.',
        },
        {
            title: 'Personalized Trading Experience',
            description:
                'Individual user accounts maintain independent trading journals, account configurations, risk preferences, achievements, and saved market scans. PostgreSQL-backed storage replaces browser-dependent persistence, allowing trading information to remain associated with each authenticated account.',
        },
        {
            title: 'Custom Responsive Interface',
            description:
                'A distinctive parchment-and-ink interface combines aged-gold accents, carefully selected typography, and purpose-built trading components. The responsive application features desktop sidebar navigation and mobile bottom navigation, preserving the Ronin Charts identity across different screen sizes.',
        },

    ],

    technologyStack: [
        {
            category: 'Frontend',
            items: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Responsive UI',
            ],
        },

        {

            category: 'Backend',
            items: [

                'Node.js',

                'Express.js',

                'REST API',

                'JWT Authentication',

            ],

        },

        {

            category: 'Database',
            items: [

                'PostgreSQL',

                'JSONB',

                'Database Triggers',

                'Indexed Queries',

            ],

        },


        {

            category: 'Infrastructure',
            items: [

                'Linux VPS',

                'Nginx',

                'PM2',

                'Environment Configuration',

            ],

        },

    ],


screenshotSrc: '/work/ronin/calculator.png',
screenshotAlt: 'Ronin Charts trading risk calculator for position sizing and risk management',
productVisuals: [
    {
        src: '/work/ronin/home.png',
        caption: 'Ronin Charts home dashboard providing access to trading tools and account information.',
        alt: 'Ronin Charts home dashboard with trading tools and account overview',
        aspect: 'wide',
    },
    {
        src: '/work/ronin/calculator.png',
        caption: 'Trading risk calculator for calculating position sizes and managing trade risk.',
        alt: 'Ronin Charts trading risk calculator for position sizing and risk calculations',
        aspect: 'wide',
    },
    {
        src: '/work/ronin/positions.png',
        caption: 'Position management interface for tracking open trades and managing trading positions.',
        alt: 'Ronin Charts position management interface for tracking and managing trades',
        aspect: 'wide',
    },
    {
        src: '/work/ronin/compound.png',
        caption: 'Compound calculator for exploring potential account growth and trading scenarios.',
        alt: 'Ronin Charts compound calculator displaying account growth calculations',
        aspect: 'wide',
    },
],


    outcomes: [

        {
            metric: 'Multi-User',
            label: 'Platform Transformation',
            note:
                'Transformed the original single-browser application into a multi-user platform with individual accounts, centralized PostgreSQL storage, and persistent trading records.',
        },



        {

            metric: 'Account-Based',
            label: 'Secure Data Management',
            note:

                'Introduced JWT authentication, administrator-controlled invitations, and account-specific data access for trading journals, settings, achievements, and saved market scans.',

        },



        {

            metric: 'Production-Ready',
            label: 'Application Architecture',
            note:

                'Established a modular backend, structured database architecture, administrative tools, and an infrastructure configuration prepared for production VPS deployment.',

        },

    ],

},



];



export function getProjectBySlug(slug: string): WorkProject | undefined {

    return WORK_PROJECTS.find((project) => project.slug === slug);

}
