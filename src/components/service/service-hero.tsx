import { useState } from 'react';
import { Link } from 'react-router';
import {
    ArrowLeft,
    ArrowUpRight,
    ArrowDown,
    Activity,
    CheckCircle2,
    Database,
    Zap,
    Cpu,
    RefreshCw,
    Terminal,
    Sparkles,
    Gauge,
    Server,
    ShieldCheck,
    Smartphone,
    GitBranch,
    BarChart3,
    ShoppingCart,
    Network,
    Palette,
    CreditCard,
    LifeBuoy,
    Boxes,
} from 'lucide-react';

import type { Service } from '@/data/services';

// ---------------------------------------------------------------------------
// 1. AI Automation Engine
// ---------------------------------------------------------------------------
function AiEngine() {
    const [step, setStep] = useState(2);

    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Autonomous Workflow Engine</span>
                </div>
                <button
                    type="button"
                    onClick={() => setStep((s) => (s >= 3 ? 0 : s + 1))}
                    className="flex items-center gap-1 rounded bg-white/5 px-2 py-0.5 text-[10px] text-slate-300 border border-white/10 hover:bg-white/10"
                >
                    <RefreshCw className="h-2.5 w-2.5" /> Step Trace
                </button>
            </div>

            <div className="space-y-1.5">
                {[
                    { id: 0, tag: 'TRIGGER', label: 'Inbound Webhook / Document Stream', ms: '12ms' },
                    { id: 1, tag: 'RAG EMBED', label: 'Hybrid Vector Search (Cosine > 0.88)', ms: '48ms' },
                    { id: 2, tag: 'LLM AGENT', label: 'Context Reasoning & Tool Routing', ms: '162ms' },
                    { id: 3, tag: 'ACTION', label: 'Dispatched to CRM & Internal APIs', ms: '35ms' },
                ].map((s) => {
                    const isDone = step >= s.id;
                    const isCurrent = step === s.id;
                    return (
                        <div
                            key={s.id}
                            className={`flex items-center justify-between rounded-lg border p-2 transition-all ${
                                isCurrent
                                    ? 'border-brand/60 bg-brand/[0.08] text-white shadow-sm shadow-brand/10'
                                    : isDone
                                    ? 'border-white/10 bg-white/[0.03] text-slate-300'
                                    : 'border-white/5 bg-transparent text-slate-600'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span
                                    className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${
                                        isCurrent
                                            ? 'bg-brand text-slate-950'
                                            : isDone
                                            ? 'bg-white/10 text-slate-300'
                                            : 'bg-white/5 text-slate-600'
                                    }`}
                                >
                                    {s.tag}
                                </span>
                                <span className="text-[11px] font-medium">{s.label}</span>
                            </div>
                            <span className="text-[10px] font-semibold">{isDone ? s.ms : 'pending'}</span>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[11px] text-slate-400">
                <span className="flex items-center gap-2">
                    <Activity className="h-3 w-3 text-brand" /> Total Pipeline Latency
                </span>
                <span className="font-bold text-white">257 ms (Zero Manual Input)</span>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 2. Custom Software Development Engine
// ---------------------------------------------------------------------------
function CustomSoftwareEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <Boxes className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Domain-Driven Architecture</span>
                </div>
                <span className="rounded bg-brand/10 px-2 py-0.5 text-[10px] text-brand border border-brand/20">
                    CLEAN CODE CERTIFIED
                </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                    <p className="text-[10px] text-slate-400">Unit & Integration Tests</p>
                    <p className="mt-1 text-base font-bold text-emerald-400">98.6%</p>
                    <span className="text-[10px] text-slate-500">Automated Vitest/Jest run</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                    <p className="text-[10px] text-slate-400">Technical Debt Ratio</p>
                    <p className="mt-1 text-base font-bold text-white">&lt; 1.2%</p>
                    <span className="text-[10px] text-emerald-400">SonarQube Grade A</span>
                </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 space-y-1.5 text-[11px]">
                <p className="text-slate-400"><span className="text-brand">▸</span> Modular Monolith / Microservices decoupled via gRPC</p>
                <p className="text-slate-400"><span className="text-brand">▸</span> Strict TypeScript & OpenAPI Contract Enforcement</p>
                <p className="text-slate-400"><span className="text-brand">▸</span> Full IP & Source Repository Ownership on handoff</p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 3. Web Development Engine
// ---------------------------------------------------------------------------
function WebDevEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-semibold text-slate-200">Lighthouse & Core Web Vitals</span>
                </div>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">
                    PERFECT 100/100
                </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Performance', val: '100', note: 'TTFB: 38ms' },
                    { label: 'Accessibility', val: '100', note: 'WCAG AAA' },
                    { label: 'Best Practices', val: '100', note: 'Strict CSP' },
                ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] text-slate-400">{item.label}</span>
                            <Gauge className="h-3 w-3 text-brand" />
                        </div>
                        <p className="mt-1 font-display text-base font-bold text-white">{item.val}</p>
                        <span className="text-[9px] text-emerald-400">{item.note}</span>
                    </div>
                ))}
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 text-[11px] space-y-1">
                <p className="text-slate-400"><span className="text-brand">✓</span> Edge SSR Route compilation: <span className="text-white">114ms</span></p>
                <p className="text-slate-400"><span className="text-brand">✓</span> Assets optimized (AVIF / Brotli): <span className="text-white">41.8 kB</span></p>
                <p className="text-emerald-400/90 flex items-center gap-1 font-semibold text-[10px] pt-1">
                    <CheckCircle2 className="h-3 w-3" /> Deployed on Global Edge Network
                </p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 4. Cloud & DevOps Engine
// ---------------------------------------------------------------------------
function CloudDevOpsEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <Server className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Kubernetes & Terraform Pipeline</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Auto-Healing
                </span>
            </div>

            <div className="space-y-2">
                {[
                    { stage: 'Infrastructure as Code', status: 'Terraform Plan Verified', time: '18s' },
                    { stage: 'Container Build & Scan', status: 'Docker Multi-Stage (0 Vulnerabilities)', time: '42s' },
                    { stage: 'Rolling Zero-Downtime Deploy', status: 'Canary Release (10% -> 100%)', time: 'Active' },
                ].map((s) => (
                    <div key={s.stage} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2">
                        <div>
                            <p className="text-[11px] font-semibold text-white">{s.stage}</p>
                            <p className="text-[10px] text-slate-400">{s.status}</p>
                        </div>
                        <span className="text-[10px] text-brand">{s.time}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[11px]">
                <span className="text-slate-400">Annual Availability SLA</span>
                <span className="font-bold text-emerald-400">99.99% Guaranteed</span>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 5. Mobile App Development Engine
// ---------------------------------------------------------------------------
function MobileAppEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <Smartphone className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Dual-Engine iOS & Android Runtime</span>
                </div>
                <span className="text-[10px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">
                    60 FPS LOCKED
                </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                    <div className="flex items-center justify-between text-slate-400 text-[10px]">
                        <span>Apple App Store</span>
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    </div>
                    <p className="mt-1 text-sm font-bold text-white">iOS 17+ Ready</p>
                    <span className="text-[9px] text-slate-500">Swift Native Bridges</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                    <div className="flex items-center justify-between text-slate-400 text-[10px]">
                        <span>Google Play Store</span>
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    </div>
                    <p className="mt-1 text-sm font-bold text-white">Android 14+ Ready</p>
                    <span className="text-[9px] text-slate-500">Kotlin / React Native</span>
                </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 space-y-1 text-[11px]">
                <p className="text-slate-300"><span className="text-brand">✓</span> Offline-First SQLite with Background Sync</p>
                <p className="text-slate-300"><span className="text-brand">✓</span> Biometric Auth (FaceID / Fingerprint) Pre-Configured</p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 6. SaaS Development Engine
// ---------------------------------------------------------------------------
function SaasEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <Server className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Multi-Tenant Production Cluster</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 99.99% Uptime
                </span>
            </div>

            <div className="space-y-2">
                {[
                    { name: 'Row-Level Tenant Isolation', status: 'Active (Strict RLS)', icon: ShieldCheck, color: 'text-emerald-400' },
                    { name: 'Distributed PostgreSQL', status: 'Synced (Zero-lag Read Replica)', icon: Database, color: 'text-brand' },
                    { name: 'Billing & Entitlement Tiering', status: 'Stripe Webhooks Ingesting', icon: Zap, color: 'text-amber-400' },
                ].map((node) => {
                    const Icon = node.icon;
                    return (
                        <div key={node.name} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2">
                            <div className="flex items-center gap-2">
                                <Icon className="h-3.5 w-3.5 text-slate-400" />
                                <span className="text-[11px] text-slate-200">{node.name}</span>
                            </div>
                            <span className={`text-[10px] ${node.color}`}>{node.status}</span>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="rounded-lg border border-white/10 bg-black/40 p-2">
                    <p className="text-slate-400">P99 API Latency</p>
                    <p className="mt-0.5 text-sm font-bold text-white">36 ms</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-2">
                    <p className="text-slate-400">Tenant Scale Capacity</p>
                    <p className="mt-0.5 text-sm font-bold text-brand">Auto-Partitioned</p>
                </div>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 7. Data & Analytics Engine
// ---------------------------------------------------------------------------
function DataAnalyticsEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <BarChart3 className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Real-Time Data Lakehouse (OLAP)</span>
                </div>
                <span className="text-[10px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">
                    STREAMING
                </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                    <p className="text-[10px] text-slate-400">Event Ingestion Throughput</p>
                    <p className="mt-1 text-base font-bold text-white">125,000 <span className="text-[10px] text-slate-500">ev/s</span></p>
                    <span className="text-[9px] text-emerald-400">Kafka / ClickHouse Pipeline</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                    <p className="text-[10px] text-slate-400">Median Query Execution</p>
                    <p className="mt-1 text-base font-bold text-brand">&lt; 14 ms</p>
                    <span className="text-[9px] text-slate-500">Vectorized Columnar Storage</span>
                </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 text-[11px] space-y-1">
                <p className="text-slate-300"><span className="text-brand">✓</span> Automated ETL / ELT pipeline with dbt data modeling</p>
                <p className="text-slate-300"><span className="text-brand">✓</span> Embeddable customer-facing analytics dashboards</p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 8. E-Commerce Development Engine
// ---------------------------------------------------------------------------
function EcommerceEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <ShoppingCart className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Headless Commerce Telemetry</span>
                </div>
                <span className="text-[10px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">
                    HIGH CONVERSION
                </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <p className="text-[10px] text-slate-400">Checkout Speed</p>
                    <p className="mt-1 text-base font-bold text-white">0.6s</p>
                    <span className="text-[9px] text-emerald-400">1-Click Flow</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <p className="text-[10px] text-slate-400">Cart Latency</p>
                    <p className="mt-1 text-base font-bold text-brand">18ms</p>
                    <span className="text-[9px] text-slate-400">Edge Cached</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <p className="text-[10px] text-slate-400">Inventory Sync</p>
                    <p className="mt-1 text-base font-bold text-emerald-400">100%</p>
                    <span className="text-[9px] text-slate-400">ERP Synced</span>
                </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 text-[11px] space-y-1">
                <p className="text-slate-300"><span className="text-brand">✓</span> Shopify Plus, Medusa, or Custom Headless Architecture</p>
                <p className="text-slate-300"><span className="text-brand">✓</span> Dynamic tax calculation & international multi-currency pricing</p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 9. API & System Integration Engine
// ---------------------------------------------------------------------------
function ApiIntegrationEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <Network className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Integration Gateway & Webhook Broker</span>
                </div>
                <span className="text-[10px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">
                    0 DROPPED CALLS
                </span>
            </div>

            <div className="space-y-2">
                {[
                    { source: 'Webhook Ingest', target: 'Dead-Letter Queue (Retry Loop)', rate: '10,000 req/s' },
                    { source: 'Payload Transformer', target: 'Schema Validation (Zod / JSON Schema)', rate: '0.4ms avg' },
                    { source: 'Target Dispatch', target: 'Salesforce, HubSpot, ERP & Stripe', rate: '200 OK' },
                ].map((item) => (
                    <div key={item.source} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2">
                        <div>
                            <p className="text-[11px] text-slate-200 font-semibold">{item.source}</p>
                            <p className="text-[10px] text-slate-400">{item.target}</p>
                        </div>
                        <span className="text-[10px] text-brand font-semibold">{item.rate}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[11px]">
                <span className="text-slate-400">Idempotency & Replay Guarantee</span>
                <span className="font-bold text-white">Full Audit Log Maintained</span>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 10. UI/UX Design Engine
// ---------------------------------------------------------------------------
function UiUxDesignEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <Palette className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Design System & Token Architecture</span>
                </div>
                <span className="text-[10px] text-brand border border-brand/20 bg-brand/10 px-2 py-0.5 rounded">
                    PIXEL-PERFECT
                </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <p className="text-[10px] text-slate-400">Tokens</p>
                    <p className="mt-1 text-base font-bold text-white">420+</p>
                    <span className="text-[9px] text-slate-500">Colors / Spacing</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <p className="text-[10px] text-slate-400">Components</p>
                    <p className="mt-1 text-base font-bold text-brand">56</p>
                    <span className="text-[9px] text-slate-500">Atomic Variants</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <p className="text-[10px] text-slate-400">Accessibility</p>
                    <p className="mt-1 text-base font-bold text-emerald-400">AAA</p>
                    <span className="text-[9px] text-emerald-400">High Contrast</span>
                </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 text-[11px] space-y-1">
                <p className="text-slate-300"><span className="text-brand">✓</span> Figma to React Component Sync via Typed Design Tokens</p>
                <p className="text-slate-300"><span className="text-brand">✓</span> User journey mapping, interactive prototypes & usability testing</p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 11. Payment Integration Engine
// ---------------------------------------------------------------------------
function PaymentEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <CreditCard className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">Payment Gateway Orchestration</span>
                </div>
                <span className="text-[10px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">
                    PCI-DSS LEVEL 1
                </span>
            </div>

            <div className="space-y-2">
                {[
                    { gateway: 'Stripe, Paddle & LemonSqueezy', detail: 'Dynamic Smart Routing & Local Payment Methods' },
                    { gateway: 'Idempotency & Reconcile Engine', detail: 'Zero duplicate billing on network dropouts' },
                    { gateway: 'Failed Payment Recovery (Dunning)', detail: 'Smart retries & automated customer card update flows' },
                ].map((item) => (
                    <div key={item.gateway} className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-white">{item.gateway}</span>
                            <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        </div>
                        <p className="text-[10px] text-slate-400 mt-0.5">{item.detail}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[11px]">
                <span className="text-slate-400">Payment Authorization Rate</span>
                <span className="font-bold text-emerald-400">99.98% Success</span>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 12. Maintenance & Support Engine
// ---------------------------------------------------------------------------
function MaintenanceEngine() {
    return (
        <div className="space-y-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <LifeBuoy className="h-3.5 w-3.5 text-brand" />
                    <span className="font-semibold text-slate-200">24/7 Reliability & Security APM</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Monitored Live
                </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                    <p className="text-[10px] text-slate-400">Mean Time to Detect (MTTD)</p>
                    <p className="mt-1 text-base font-bold text-white">&lt; 60 seconds</p>
                    <span className="text-[9px] text-emerald-400">Instant Alerting</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                    <p className="text-[10px] text-slate-400">Vulnerability Patches</p>
                    <p className="mt-1 text-base font-bold text-brand">0 Critical CVEs</p>
                    <span className="text-[9px] text-slate-400">Automated Dependency Audits</span>
                </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 text-[11px] space-y-1">
                <p className="text-slate-300"><span className="text-brand">✓</span> Weekly offsite encrypted database snapshots & restore drills</p>
                <p className="text-slate-300"><span className="text-brand">✓</span> Dedicated engineering standby for emergency patches</p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Universal Engine Resolver for All 12 Slugs
// ---------------------------------------------------------------------------
function resolveEngine(service: Service) {
    const key = (service.slug || service.title || '')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    if (key.includes('ai') || key.includes('automation')) {
        return <AiEngine />;
    }
    if (key.includes('customsoftware')) {
        return <CustomSoftwareEngine />;
    }
    if (key.includes('cloud') || key.includes('devops')) {
        return <CloudDevOpsEngine />;
    }
    if (key.includes('mobile')) {
        return <MobileAppEngine />;
    }
    if (key.includes('saas') || key.includes('platform')) {
        return <SaasEngine />;
    }
    if (key.includes('data') || key.includes('analytics')) {
        return <DataAnalyticsEngine />;
    }
    if (key.includes('commerce') || key.includes('ecommerce') || key.includes('shop')) {
        return <EcommerceEngine />;
    }
    if (key.includes('api') || key.includes('integration') && !key.includes('payment')) {
        return <ApiIntegrationEngine />;
    }
    if (key.includes('design') || key.includes('ui') || key.includes('ux')) {
        return <UiUxDesignEngine />;
    }
    if (key.includes('payment') || key.includes('billing')) {
        return <PaymentEngine />;
    }
    if (key.includes('maintenance') || key.includes('support')) {
        return <MaintenanceEngine />;
    }

    // Default to Web Development
    return <WebDevEngine />;
}

// ---------------------------------------------------------------------------
// Main ServiceHero Component
// ---------------------------------------------------------------------------
export function ServiceHero({ service }: { service: Service }) {
    return (
        <section aria-labelledby="service-hero-title" className="relative overflow-hidden bg-[#F8FAFC]">
            <div className="mx-auto w-full max-w-9xl px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-28 lg:px-8 lg:pb-16">
                {/* ---------------------------------------------------------- */}
                {/* Top Navigation Bar                                         */}
                {/* ---------------------------------------------------------- */}
                <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
                    <Link
                        to="/services"
                        className="group inline-flex items-center gap-2 text-[13px] font-medium text-slate-500 transition-colors duration-200 hover:text-navy"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                        All Services
                    </Link>

                    <div className="hidden items-center gap-3 sm:flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Codelaro / {service.title}
                        </span>
                    </div>
                </div>

                {/* ---------------------------------------------------------- */}
                {/* Main Hero Card Container                                   */}
                {/* ---------------------------------------------------------- */}
                <div className="relative isolate overflow-hidden rounded-[24px] bg-[#0B1120] text-white shadow-2xl ring-1 ring-white/10 sm:rounded-[32px]">
                    {/* Background Gradients & Grid */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(24,188,183,0.12),transparent_45%)]"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
                    />

                    {/* Content Grid */}
                    <div className="relative z-10 grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-12 lg:py-14">
                        {/* ------------------------------------------------------ */}
                        {/* Left Column: Typography & CTAs                         */}
                        {/* ------------------------------------------------------ */}
                        <div className="min-w-0 lg:col-span-7">
                            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                                <span>Core Capability</span>
                            </div>

                            <h1
                                id="service-hero-title"
                                className="mt-4 font-display text-[clamp(2.3rem,4.5vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white"
                            >
                                {service.title}
                                <span className="text-brand">.</span>
                            </h1>

                            <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-slate-300 sm:text-[17px]">
                                {service.summary}
                            </p>

                            {/* Action Buttons */}
                            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                                <a
                                    href="/contact"
                                    className="group inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-xl bg-white px-6 font-display text-[16px] font-semibold text-navy transition-all hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 active:scale-[0.98] sm:w-auto"
                                >
                                    Start a Project
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>

                                <Link
                                    to="/solutions"
                                    className="group inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-white bg-white/[0.04] px-5 font-display text-[16px] font-semibold text-white transition-all hover:border-white/40 hover:bg-white/[0.08] sm:w-auto"
                                >
                                    Explore Our Solutions
                                </Link>
                            </div>
                        </div>

                        {/* ------------------------------------------------------ */}
                        {/* Right Column: Live Engine Shell                        */}
                        {/* ------------------------------------------------------ */}
                        <div className="min-w-0 lg:col-span-5">
                            <div className="relative rounded-2xl border border-white/15 bg-white/[0.02] p-5 shadow-2xl backdrop-blur-md transition-all hover:border-white/25 sm:p-6">
                                {/* Chrome Window Header */}
                                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                                    <div className="flex items-center gap-1.5">
                                        <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                                        <Cpu className="h-3 w-3 text-brand" />
                                        <span>LIVE_SPEC_RUNTIME</span>
                                    </div>
                                </div>

                                {/* Dynamic Service-Specific HUD */}
                                {resolveEngine(service)}
                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------------------------- */}
                    {/* Bottom Utility Bar                                         */}
                    {/* ---------------------------------------------------------- */}
                    <div className="flex items-center justify-between border-t border-white/10 bg-black/20 px-6 py-4 sm:px-10">
                        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span>Enterprise SLA & Production-Ready Codebase</span>
                        </div>

                        <a
                            href="#service-content"
                            aria-label="Explore service details"
                            className="group inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 transition-colors hover:text-white"
                        >
                            <span>EXPLORE_SPECS</span>
                            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
