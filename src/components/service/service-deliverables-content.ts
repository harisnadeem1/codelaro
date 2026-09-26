/**
 * Temporary, service-specific content for the What We Deliver section.
 * Once the visual direction is approved, these records can move into
 * @/data/services. Every item is an example of possible scope, NOT a promise
 * that all five deliverables are included in every engagement.
 */
import type { Service } from '@/data/services';

export type DeliverableIcon =
  | 'globe' | 'layers' | 'shopping' | 'rocket' | 'refresh'
  | 'mobile' | 'cloud' | 'workflow' | 'chart' | 'connect'
  | 'design' | 'payment' | 'shield' | 'monitor' | 'code'
  | 'database' | 'dashboard' | 'users' | 'bell' | 'server';

export type ServiceDeliverable = {
  title: string;
  description: string;
  includes: readonly [string, string, string];
  outcome: string;
  icon: DeliverableIcon;
};

type ServiceKey =
  | 'web' | 'custom' | 'mobile' | 'saas' | 'cloud' | 'ai'
  | 'analytics' | 'ecommerce' | 'api' | 'design' | 'payments'
  | 'maintenance';

const DELIVERABLES: Record<ServiceKey, readonly ServiceDeliverable[]> = {
  web: [
    {
      icon: 'globe', title: 'Business & corporate websites',
      description: 'A distinctive digital presence that explains your offering and makes the next step clear for prospective customers.',
      includes: ['Custom, responsive page layouts', 'Content structure and conversion paths', 'Technical SEO foundations and analytics setup'],
      outcome: 'A launch-ready website aligned with your brand and business goals.',
    },
    {
      icon: 'layers', title: 'Custom web applications & portals',
      description: 'Purpose-built web experiences for customers, teams, and the workflows that standard websites cannot support.',
      includes: ['Role-based interfaces and user accounts', 'Custom dashboards and business workflows', 'API and database connections'],
      outcome: 'A web application shaped around your actual operating requirements.',
    },
    {
      icon: 'shopping', title: 'E-commerce websites',
      description: 'Online shopping experiences designed to help customers discover products and move confidently through checkout.',
      includes: ['Product catalogs and product discovery', 'Cart and payment-provider integration', 'Order management connections'],
      outcome: 'A connected storefront with the shopping features your business needs.',
    },
    {
      icon: 'rocket', title: 'Landing pages & campaign experiences',
      description: 'Focused pages for launches, lead generation, promotions, and campaigns with a clear objective.',
      includes: ['Conversion-focused content hierarchy', 'Responsive layouts and accessible forms', 'Event tracking and measurement setup'],
      outcome: 'A focused destination for a specific campaign or customer action.',
    },
    {
      icon: 'refresh', title: 'Website redesign & modernization',
      description: 'A considered upgrade for sites that need clearer messaging, a better experience, or a more maintainable foundation.',
      includes: ['UX and interface refresh', 'Performance and technical review', 'Content, redirect, and migration planning'],
      outcome: 'An updated experience that respects existing content and search visibility.',
    },
  ],
  custom: [
    {
      icon: 'layers', title: 'Custom business software',
      description: 'Software designed around the way your business actually operates rather than the constraints of an off-the-shelf product.',
      includes: ['Requirements-led feature planning', 'Role-based business workflows', 'Scalable application architecture'],
      outcome: 'A purpose-built platform supporting your core processes.',
    },
    {
      icon: 'dashboard', title: 'Internal portals & dashboards',
      description: 'Unified digital workspaces that put important information, tools, and everyday tasks in one place.',
      includes: ['Personalized user workspaces', 'Operational views and reporting', 'Permissions and team access'],
      outcome: 'One organized workspace for the people running your operations.',
    },
    {
      icon: 'workflow', title: 'Workflow management systems',
      description: 'Digital processes for approvals, handoffs, tracking, and repetitive administrative work.',
      includes: ['Custom states, forms, and approvals', 'Notifications and task assignments', 'Audit-friendly activity histories'],
      outcome: 'A clearer, more consistent way to manage business workflows.',
    },
    {
      icon: 'connect', title: 'System integrations',
      description: 'Connections that help your custom platform work with the tools and data you already depend on.',
      includes: ['Third-party API integrations', 'Data exchange and synchronization', 'Error handling and integration testing'],
      outcome: 'Connected systems with less unnecessary manual data handling.',
    },
    {
      icon: 'database', title: 'Data & administration tools',
      description: 'Practical administration features to manage records, users, content, and operational data.',
      includes: ['Structured data models', 'Search, filters, and export workflows', 'Admin controls and access management'],
      outcome: 'The controls your team needs to operate the platform.',
    },
  ],
  mobile: [
    {
      icon: 'mobile', title: 'iOS & Android applications',
      description: 'Mobile products designed around your users, core features, and the devices they use every day.',
      includes: ['Mobile-first user journeys', 'Platform-appropriate interactions', 'Backend and account connectivity'],
      outcome: 'An application built for the agreed target platforms.',
    },
    {
      icon: 'design', title: 'Mobile UI & product experiences',
      description: 'Interfaces that make complex features approachable on smaller screens and in real-world situations.',
      includes: ['Screen flows and reusable UI patterns', 'Responsive states and accessibility', 'Onboarding and in-app navigation'],
      outcome: 'A cohesive app experience built around user tasks.',
    },
    {
      icon: 'connect', title: 'Connected app functionality',
      description: 'The application features and system connections required for your mobile product.',
      includes: ['Authentication and user profiles', 'APIs and data synchronization', 'Push notification integrations where needed'],
      outcome: 'An app connected to the systems powering your service.',
    },
    {
      icon: 'workflow', title: 'Offline-aware experiences',
      description: 'Approaches for features that need to work around limited connectivity, where the product requires them.',
      includes: ['Local data and caching strategy', 'Sync flows and conflict considerations', 'Connection and error states'],
      outcome: 'A more resilient experience for the agreed usage scenarios.',
    },
    {
      icon: 'rocket', title: 'Testing & release preparation',
      description: 'The final technical and product steps needed to prepare your application for its release.',
      includes: ['Device and flow testing', 'Bug fixing and pre-release checks', 'Store-submission preparation if in scope'],
      outcome: 'A release candidate prepared for your agreed distribution plan.',
    },
  ],
  saas: [
    {
      icon: 'cloud', title: 'SaaS platforms & MVPs',
      description: 'Focused first releases and expandable products that turn your subscription software idea into a usable service.',
      includes: ['Core product flows and MVP scope', 'Application and data architecture', 'Production deployment foundations'],
      outcome: 'A usable foundation for validating and growing your product.',
    },
    {
      icon: 'users', title: 'Accounts, teams & permissions',
      description: 'The identity and workspace features your customers need to access and organize your product.',
      includes: ['Registration and account management', 'Teams, roles, and permissions', 'Workspace and organization settings'],
      outcome: 'Structured access for the people using your platform.',
    },
    {
      icon: 'payment', title: 'Plans & subscription billing',
      description: 'Subscription experiences mapped to your pricing model and your selected payment provider.',
      includes: ['Plan selection and account upgrades', 'Billing-provider integrations', 'Relevant billing events and account states'],
      outcome: 'A product flow aligned with how customers subscribe and pay.',
    },
    {
      icon: 'dashboard', title: 'Customer & admin dashboards',
      description: 'Useful workspaces for customers and the team that manages your software product.',
      includes: ['Customer-facing product views', 'Administrative management tools', 'Relevant product and usage reporting'],
      outcome: 'Practical control over both customer and internal experiences.',
    },
    {
      icon: 'connect', title: 'Integrations & growth foundations',
      description: 'Connections and technical decisions that allow your SaaS product to evolve as requirements change.',
      includes: ['External API and webhook connections', 'Modular feature organization', 'Monitoring and maintainability foundations'],
      outcome: 'A product foundation prepared for iterative development.',
    },
  ],
  cloud: [
    {
      icon: 'cloud', title: 'Cloud infrastructure architecture',
      description: 'Infrastructure designed to fit your application, operational needs, and realistic growth plans.',
      includes: ['Hosting and environment planning', 'Infrastructure topology and configuration', 'Security and access considerations'],
      outcome: 'An infrastructure plan tailored to your software.',
    },
    {
      icon: 'rocket', title: 'CI/CD & deployment pipelines',
      description: 'Repeatable build, test, and release workflows that make deployment less dependent on manual steps.',
      includes: ['Build and deployment automation', 'Environment-specific configuration', 'Release and rollback planning'],
      outcome: 'A more repeatable path from code changes to releases.',
    },
    {
      icon: 'server', title: 'Infrastructure automation',
      description: 'Configuration and provisioning approaches that make infrastructure easier to reproduce and maintain.',
      includes: ['Infrastructure-as-code where appropriate', 'Configuration and secret handling', 'Environment provisioning workflows'],
      outcome: 'Infrastructure that can be maintained with more consistency.',
    },
    {
      icon: 'monitor', title: 'Monitoring, logging & alerts',
      description: 'Operational visibility appropriate to the application and the issues that matter most.',
      includes: ['Application and infrastructure logs', 'Relevant monitoring dashboards', 'Alerting and incident signals'],
      outcome: 'More useful information when operational issues occur.',
    },
    {
      icon: 'shield', title: 'Security & recovery foundations',
      description: 'Practical operational safeguards designed around the chosen hosting environment and project scope.',
      includes: ['Access and configuration reviews', 'Backup and recovery planning', 'Dependency and update considerations'],
      outcome: 'A clearer baseline for ongoing infrastructure stewardship.',
    },
  ],
  ai: [
    {
      icon: 'workflow', title: 'AI-assisted business workflows',
      description: 'Thoughtful automation for repetitive processes, with people involved wherever judgment is important.',
      includes: ['Workflow discovery and mapping', 'Model or service integrations', 'Approval and exception handling'],
      outcome: 'A practical automation flow aligned with an actual business process.',
    },
    {
      icon: 'users', title: 'Intelligent assistants & chat interfaces',
      description: 'Assistant experiences designed to help customers or teams find information and complete useful tasks.',
      includes: ['Conversational user interfaces', 'Approved knowledge-source connections', 'Escalation and fallback behavior'],
      outcome: 'An assistant designed for a defined audience and use case.',
    },
    {
      icon: 'connect', title: 'Connected automation systems',
      description: 'Workflows linking AI-enabled features with your APIs, applications, and existing business software.',
      includes: ['API and webhook integrations', 'Data validation and routing', 'Operational logging and error handling'],
      outcome: 'Connected workflows that fit your existing tools.',
    },
    {
      icon: 'database', title: 'Knowledge-powered experiences',
      description: 'Search and retrieval experiences over approved organizational content, where appropriate to the use case.',
      includes: ['Document ingestion approach', 'Retrieval and source handling', 'Content access and update strategy'],
      outcome: 'An experience grounded in relevant, approved information.',
    },
    {
      icon: 'monitor', title: 'Evaluation & human oversight',
      description: 'Ways to review usefulness, recognize failure cases, and keep important decisions under human control.',
      includes: ['Test cases for expected outputs', 'Human review points', 'Usage, quality, and error visibility'],
      outcome: 'An AI-enabled system with an explicit review strategy.',
    },
  ],
  analytics: [
    {
      icon: 'chart', title: 'Business intelligence dashboards',
      description: 'Purpose-built reporting interfaces that make your most important metrics easier to understand.',
      includes: ['KPI views and visualizations', 'Filters and drill-downs', 'Role-appropriate dashboard layouts'],
      outcome: 'A clearer view of the information relevant to your team.',
    },
    {
      icon: 'database', title: 'Data collection & integration',
      description: 'Connections that bring relevant business information together for analysis and reporting.',
      includes: ['Selected data-source integrations', 'Data modeling and transformation', 'Quality and consistency checks'],
      outcome: 'A more useful foundation for business reporting.',
    },
    {
      icon: 'dashboard', title: 'Custom reports & insights',
      description: 'Reporting tools designed around the decisions and recurring questions your organization faces.',
      includes: ['Custom report templates', 'Export and sharing workflows', 'Scheduled reporting if required'],
      outcome: 'Reporting formats aligned with your team’s workflows.',
    },
    {
      icon: 'layers', title: 'Customer-facing analytics',
      description: 'Analytics features embedded into products for customers, partners, or other authorized users.',
      includes: ['Embedded charts and metrics', 'Account-specific data access', 'Interactive views and filtering'],
      outcome: 'Useful analytics delivered directly in your product.',
    },
    {
      icon: 'monitor', title: 'Analytics reliability foundations',
      description: 'Practical checks and system visibility to support trust in your reporting processes.',
      includes: ['Data freshness considerations', 'Access and governance controls', 'Pipeline monitoring where relevant'],
      outcome: 'A reporting setup with clearer ownership and checks.',
    },
  ],
  ecommerce: [
    {
      icon: 'shopping', title: 'Online storefronts',
      description: 'Well-structured shopping experiences that make your products easy to discover, evaluate, and purchase.',
      includes: ['Responsive storefront design', 'Product and collection pages', 'Navigation, search, and discovery'],
      outcome: 'A customer-facing store matched to your catalog and brand.',
    },
    {
      icon: 'database', title: 'Product & inventory experiences',
      description: 'Ways to organize your catalog and connect product information to everyday store operations.',
      includes: ['Product variants and collections', 'Catalog administration', 'Inventory connections if required'],
      outcome: 'A product experience your team can maintain.',
    },
    {
      icon: 'payment', title: 'Cart, checkout & payment flows',
      description: 'Purchase journeys connected to the payment providers and checkout model suited to your business.',
      includes: ['Cart and checkout interfaces', 'Payment-provider integration', 'Purchase confirmations and states'],
      outcome: 'An order flow suited to your selected commerce model.',
    },
    {
      icon: 'connect', title: 'Orders & operational integrations',
      description: 'Connections for the tools your business uses after a customer places an order.',
      includes: ['Order management workflows', 'Shipping or fulfillment connections', 'Email and business-system integrations'],
      outcome: 'A storefront better connected to daily operations.',
    },
    {
      icon: 'chart', title: 'Store optimization foundations',
      description: 'Practical foundations for discovering where customers engage and where purchasing friction occurs.',
      includes: ['Technical SEO considerations', 'Relevant analytics events', 'Performance and mobile UX review'],
      outcome: 'A better basis for improving your store over time.',
    },
  ],
  api: [
    {
      icon: 'connect', title: 'Custom APIs & service interfaces',
      description: 'Purpose-built interfaces that let applications exchange the data and actions they need.',
      includes: ['Endpoint and contract design', 'Authentication and access rules', 'Validation and error responses'],
      outcome: 'An API tailored to defined integration requirements.',
    },
    {
      icon: 'layers', title: 'Third-party platform integrations',
      description: 'Connections between your applications and the business tools you already use.',
      includes: ['External API connections', 'Field mapping and data handling', 'Integration testing and documentation'],
      outcome: 'A clearer flow of information between chosen systems.',
    },
    {
      icon: 'workflow', title: 'Webhooks & event-driven workflows',
      description: 'Integrations that respond to events and pass useful information to downstream systems.',
      includes: ['Event and webhook handlers', 'Retries and failure handling', 'Relevant notifications and processing'],
      outcome: 'Connected workflows that react to important events.',
    },
    {
      icon: 'database', title: 'Data migration & synchronization',
      description: 'Planned movement or alignment of information between your source and destination systems.',
      includes: ['Data mapping and validation', 'Migration or sync workflows', 'Conflict and recovery considerations'],
      outcome: 'A structured approach to connecting business data.',
    },
    {
      icon: 'monitor', title: 'Integration visibility & handover',
      description: 'The tools and documentation needed to understand and maintain connected systems.',
      includes: ['Integration logs and diagnostics', 'API documentation', 'Testing and operational handover'],
      outcome: 'Integrations your team can understand and support.',
    },
  ],
  design: [
    {
      icon: 'design', title: 'UI/UX product design',
      description: 'Digital experiences organized around real user needs and the business problems your product should solve.',
      includes: ['Information architecture', 'Screen designs and interaction patterns', 'Responsive and accessible considerations'],
      outcome: 'A considered design direction for your digital product.',
    },
    {
      icon: 'workflow', title: 'User journeys & wireframes',
      description: 'Early visual thinking that helps align stakeholders before committing to high-fidelity design.',
      includes: ['Journey and task mapping', 'Key screens and navigation flows', 'Wireframe review and iteration'],
      outcome: 'A shared understanding of the product experience.',
    },
    {
      icon: 'layers', title: 'Interactive prototypes',
      description: 'Clickable product flows for reviewing ideas, testing assumptions, and communicating interactions.',
      includes: ['Prototype interaction flows', 'Key user states and transitions', 'Stakeholder review scenarios'],
      outcome: 'A tangible preview of how important flows should work.',
    },
    {
      icon: 'dashboard', title: 'Design systems & components',
      description: 'Reusable visual and interaction patterns that help your product stay consistent as it evolves.',
      includes: ['Foundational design tokens', 'Reusable UI components', 'Component usage guidance'],
      outcome: 'A design foundation for consistent future work.',
    },
    {
      icon: 'users', title: 'Usability & developer handover',
      description: 'Design review and handoff materials that help move from approved interfaces to implementation.',
      includes: ['Feedback-led design refinement', 'Responsive behavior specifications', 'Organized implementation handover'],
      outcome: 'More actionable designs for development and iteration.',
    },
  ],
  payments: [
    {
      icon: 'payment', title: 'Payment gateway integrations',
      description: 'Provider-connected payment functionality built around your product, customers, and supported markets.',
      includes: ['Provider API or hosted checkout integration', 'Payment status and confirmation flows', 'Environment setup and integration testing'],
      outcome: 'A payment flow connected to your selected provider.',
    },
    {
      icon: 'shopping', title: 'Custom checkout experiences',
      description: 'Clear purchase journeys tailored to your product and your selected payment infrastructure.',
      includes: ['Checkout interface integration', 'Payment error and retry states', 'Confirmation and receipt workflows'],
      outcome: 'A checkout experience shaped around your customers.',
    },
    {
      icon: 'refresh', title: 'Subscriptions & recurring billing',
      description: 'Recurring payment features appropriate to your pricing plans and provider capabilities.',
      includes: ['Plan and subscription lifecycle flows', 'Billing-event integrations', 'Cancellation and account-state handling'],
      outcome: 'Recurring billing features aligned with your business model.',
    },
    {
      icon: 'workflow', title: 'Payment events & automation',
      description: 'Useful backend workflows triggered by changes in payment or billing status.',
      includes: ['Webhook validation and processing', 'Order and access updates', 'Error handling and operational alerts'],
      outcome: 'More reliable coordination between payments and your product.',
    },
    {
      icon: 'shield', title: 'Payment operations & testing',
      description: 'Appropriate integration safeguards and visibility, without claiming provider-level certification.',
      includes: ['Provider-recommended integration practices', 'Sandbox and exception-case testing', 'Payment event logs and handover'],
      outcome: 'A payment integration with clearer operational procedures.',
    },
  ],
  maintenance: [
    {
      icon: 'refresh', title: 'Ongoing application maintenance',
      description: 'Practical upkeep to keep your software aligned with business changes and evolving requirements.',
      includes: ['Planned application updates', 'Compatibility and dependency reviews', 'Maintenance backlog management'],
      outcome: 'A structured approach to ongoing application care.',
    },
    {
      icon: 'monitor', title: 'Monitoring & issue investigation',
      description: 'Appropriate observability and diagnostic processes for issues affecting your application.',
      includes: ['Monitoring and log review', 'Issue triage and investigation', 'Incident communication processes'],
      outcome: 'Better visibility into the health of the agreed systems.',
    },
    {
      icon: 'rocket', title: 'Performance improvements',
      description: 'Targeted work informed by actual bottlenecks, product usage, and technical priorities.',
      includes: ['Performance assessment', 'Prioritized optimization tasks', 'Before-and-after validation'],
      outcome: 'Measured improvements against agreed priorities.',
    },
    {
      icon: 'shield', title: 'Updates & security hygiene',
      description: 'Reasonable technical maintenance measures within the access, stack, and scope agreed for your product.',
      includes: ['Dependency and patch planning', 'Configuration and access reviews', 'Backup and recovery considerations'],
      outcome: 'A clearer process for maintaining your technical baseline.',
    },
    {
      icon: 'layers', title: 'Enhancements & technical support',
      description: 'An organized way to ship refinements, resolve issues, and adapt your product as needs change.',
      includes: ['Bug fixes and scoped enhancements', 'Release coordination', 'Change records and documentation'],
      outcome: 'Ongoing support that follows defined priorities and service terms.',
    },
  ],
};

function resolveServiceKey(service: Service): ServiceKey | null {
  const key = `${service.slug ?? ''}${service.title ?? ''}`
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  // Ordering matters. E.g. "maintenance" contains "ai" and some payment
  // service names may contain "integration".
  if (key.includes('maintenance') || key.includes('support')) return 'maintenance';
  if (key.includes('payment') || key.includes('billing')) return 'payments';
  if (key.includes('ecommerce') || key.includes('commerce') || key.includes('shop')) return 'ecommerce';
  if (key.includes('customsoftware')) return 'custom';
  if (key.includes('cloud') || key.includes('devops')) return 'cloud';
  if (key.includes('mobile')) return 'mobile';
  if (key.includes('saas') || key.includes('platformdevelopment')) return 'saas';
  if (key.includes('analytics') || key.includes('data')) return 'analytics';
  if (key.includes('integration') || key.includes('api')) return 'api';
  if (key.includes('design') || key.includes('uiux')) return 'design';
  if (key.includes('automation') || key.startsWith('ai') || key.includes('artificialintelligence')) return 'ai';
  if (key.includes('web') || key.includes('website')) return 'web';
  return null;
}

const FALLBACK: readonly ServiceDeliverable[] = [
  {
    icon: 'layers', title: 'A solution designed for your goals',
    description: 'A defined scope based on your audience, operating needs, and the problem you want to solve.',
    includes: ['Requirements-aligned features', 'Relevant user journeys', 'An agreed implementation scope'],
    outcome: 'A solution shaped around the priorities you establish.',
  },
  {
    icon: 'design', title: 'Thoughtful user experiences',
    description: 'Interfaces and workflows suited to the people who will use your solution.',
    includes: ['Key screens and interactions', 'Responsive considerations', 'User-centric content organization'],
    outcome: 'A clearer experience for your intended users.',
  },
  {
    icon: 'connect', title: 'Relevant system connections',
    description: 'The integrations and data flows needed to support the agreed feature set.',
    includes: ['System requirements review', 'Appropriate data handling', 'Integration testing'],
    outcome: 'Features that work with your chosen systems.',
  },
  {
    icon: 'shield', title: 'Quality & reliability considerations',
    description: 'Practical technical checks aligned with the type of product being built.',
    includes: ['Relevant testing', 'Basic error handling', 'Maintainability considerations'],
    outcome: 'A clearer quality baseline for the agreed work.',
  },
  {
    icon: 'rocket', title: 'Organized handover',
    description: 'A handover adapted to the project and the people responsible for its next stage.',
    includes: ['Scope-specific delivery artifacts', 'Applicable documentation', 'Release or next-step guidance'],
    outcome: 'A defined outcome and a practical plan for what comes next.',
  },
];

/**
 * Ready for the next stage: after adding `deliverables` to the Service type,
 * entries defined in services.ts will override the temporary examples here.
 */
export function getServiceDeliverables(service: Service): readonly ServiceDeliverable[] {
  const custom = (service as Service & { deliverables?: readonly ServiceDeliverable[] }).deliverables;
  if (custom?.length) return custom;

  const serviceKey = resolveServiceKey(service);
  return serviceKey ? DELIVERABLES[serviceKey] : FALLBACK;
}
