import { Link } from 'react-router';

import {

    ArrowLeft,

    ArrowUpRight,

    TrendingUp,

    CreditCard,

    ShoppingBag,

    Activity,

    GraduationCap,

    Building2,

    Briefcase,

    Truck,

    Plane,

    Zap,

    CheckCircle2,

    Clock,

    ShieldCheck,

    Sparkles,

    Play,

    Terminal,

    Luggage,

    UserCheck,

	Headphones,

} from 'lucide-react';

import type { Industry } from '@/data/industries';

function getIndustryKey(industry: Industry): string {

    const key = ( industry.slug || industry.title || '').toLowerCase();

    if (key.includes('fintech') || key.includes('financ')) return 'fintech';

    if (key.includes('commerce') || key.includes('retail')) return 'ecommerce';

    if (key.includes('health')) return 'healthcare';

    if (key.includes('education') || key.includes('learning')) return 'education';

    if (key.includes('estate')) return 'real-estate';

    if (key.includes('professional') || key.includes('consult') || key.includes('service')) return 'professional-services';

    if (key.includes('logistic') || key.includes('transport')) return 'logistics';

    if (key.includes('travel') || key.includes('hospitality')) return 'travel';

    if (key.includes('startup') || key.includes('tech')) return 'startups';

    return 'startups';

}

function IndustryVisual({ industry }: { industry: Industry }) {

    const key = getIndustryKey(industry);

    return (

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">

            {/* ========================================================

                1. FINANCIAL SERVICES & FINTECH: Live Ledger & Settlement

               ======================================================== */}

            {key === 'fintech' && (

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-30px_rgba(15,23,42,0.16)]">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                        <div className="flex items-center gap-2.5">

                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">

                                <CreditCard className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Cross-Border Settlement</p>

                                <p className="text-sm font-bold text-slate-900">Payment Infrastructure</p>

                            </div>

                        </div>

                        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">

                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />

                            Instant

                        </span>

                    </div>

                    <div className="mt-5 rounded-xl bg-slate-50 p-4 border border-slate-100">

                        <div className="flex items-center justify-between">

                            <span className="text-xs text-slate-500 font-medium">You Transfer</span>

                            <span className="font-mono text-xs text-slate-400">Balance: $128,400.00</span>

                        </div>

                        <div className="mt-2 flex items-center justify-between">

                            <p className="text-2xl font-bold font-mono text-slate-900">$25,000.00</p>

                            <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200">

                                USD

                            </span>

                        </div>

                    </div>

                    <div className="relative my-2 flex justify-center">

                        <div className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white shadow-sm">

                            <TrendingUp className="h-3.5 w-3.5" />

                        </div>

                    </div>

                    <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">

                        <div className="flex items-center justify-between">

                            <span className="text-xs text-slate-500 font-medium">Recipient Gets</span>

                            <span className="text-xs font-medium text-brand">1 USD = 0.924 EUR (Example)</span>

                        </div>

                        <div className="mt-2 flex items-center justify-between">

                            <p className="text-2xl font-bold font-mono text-slate-900">€23,100.00</p>

                            <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200">

                                EUR

                            </span>

                        </div>

                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-1">

                        <span className="flex items-center gap-1.5">

                            <ShieldCheck className="h-4 w-4 text-brand" /> Encrypted transactions

                        </span>

                        <span className="font-mono text-slate-400">Latency: 28ms</span>

                    </div>

                </div>

            )}

            {/* ========================================================

                2. E-COMMERCE & RETAIL: High-Converting Checkout Card

               ======================================================== */}

            {key === 'ecommerce' && (

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-30px_rgba(15,23,42,0.16)]">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                        <div className="flex items-center gap-2">

                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">

                                <ShoppingBag className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Cart &amp; Order Stream</p>

                                <p className="text-sm font-bold text-slate-900">One-Click Checkout</p>

                            </div>

                        </div>

                        <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-bold text-brand">

                            4.8% Conv Rate

                        </span>

                    </div>

                    <div className="mt-4 flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-3.5">

                       <div
    className="flex h-16 w-16 shrink-0 items-center justify-center
               rounded-xl border border-brand/15 bg-brand/[0.07]"
    aria-hidden="true"
>
    <Headphones
        className="h-8 w-8 text-brand"
        strokeWidth={1.5}
    />
</div>

                        <div className="min-w-0 flex-1">

                            <p className="truncate text-sm font-bold text-slate-900">Aura Pro Series Headphones</p>

                            <p className="text-xs text-slate-500">Midnight Matte • Qty: 1</p>

                            <p className="mt-1 font-mono text-sm font-bold text-brand">$289.00</p>

                        </div>

                    </div>

                    <div className="mt-4 space-y-2 rounded-xl bg-slate-50/70 p-3.5 text-xs">

                        <div className="flex justify-between text-slate-500">

                            <span>Subtotal</span>

                            <span className="font-mono font-medium text-slate-700">$289.00</span>

                        </div>

                        <div className="flex justify-between text-slate-500">

                            <span>Dynamic Promotional Code</span>

                            <span className="font-medium text-emerald-600">-$43.35 (15% OFF)</span>

                        </div>

                        <div className="flex justify-between border-t border-slate-200 pt-2 text-sm font-bold text-slate-900">

                            <span>Total Authorized</span>

                            <span className="font-mono text-brand">$245.65</span>

                        </div>

                    </div>

                    <div className="mt-4">

                        <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-semibold text-white">

                            <Sparkles className="h-4 w-4" /> Checkout preview

                        </div>

                    </div>

                </div>

            )}

            {/* ========================================================

                3. HEALTHCARE: Clinical Vitals & Telehealth Monitor

               ======================================================== */}

            {key === 'healthcare' && (

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-30px_rgba(15,23,42,0.16)]">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                        <div className="flex items-center gap-2.5">

                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">

                                <Activity className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Patient EHR Portal</p>

                                <p className="text-sm font-bold text-slate-900">Telemetry &amp; Vitals Monitor</p>

                            </div>

                        </div>

                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">

                            Privacy Focused

                        </span>

                    </div>

                    {/* Simulated Pulse Line / Waveform */}

                    <div className="mt-4 rounded-xl bg-slate-900 p-4 text-white">

                        <div className="flex items-center justify-between">

                            <span className="text-xs font-mono text-slate-400 uppercase">Heart Rate (ECG)</span>

                            <span className="flex items-center gap-1.5 text-xs font-bold text-rose-400">

                                <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" /> 72 BPM

                            </span>

                        </div>

                        <div className="mt-3 h-12 w-full overflow-hidden">

                            <svg className="h-full w-full text-brand" viewBox="0 0 200 40" fill="none">

                                <path

                                    d="M0 20 L40 20 L50 20 L55 5 L62 35 L68 12 L73 24 L78 20 L120 20 L125 5 L132 35 L138 12 L143 24 L148 20 L200 20"

                                    stroke="currentColor"

                                    strokeWidth="2.5"

                                    strokeLinecap="round"

                                    strokeLinejoin="round"

                                />

                            </svg>

                        </div>

                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">

                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

                            <p className="text-xs text-slate-500">Blood Pressure</p>

                            <p className="mt-1 font-mono text-lg font-bold text-slate-900">118 / 76</p>

                            <span className="text-[10px] text-emerald-600 font-medium">Optimal Range</span>

                        </div>

                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

                            <p className="text-xs text-slate-500">Blood Oxygen (SpO2)</p>

                            <p className="mt-1 font-mono text-lg font-bold text-slate-900">99%</p>

                            <span className="text-[10px] text-emerald-600 font-medium">Normal Saturation</span>

                        </div>

                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-brand/5 p-3 text-xs text-brand-700">

                        <span className="font-semibold">Next Tele-Consultation:</span>

                        <span className="font-medium text-slate-700">Today at 2:30 PM (Dr. Reynolds)</span>

                    </div>

                </div>

            )}

            {/* ========================================================

                4. EDUCATION & E-LEARNING: Interactive Syllabus & Progress

               ======================================================== */}

            {key === 'education' && (

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-30px_rgba(15,23,42,0.16)]">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                        <div className="flex items-center gap-2.5">

                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">

                                <GraduationCap className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">LMS Platform</p>

                                <p className="text-sm font-bold text-slate-900">Interactive Curriculum</p>

                            </div>

                        </div>

                        <span className="font-mono text-xs font-bold text-brand">Level 3 / Advanced</span>

                    </div>

                    <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm font-bold text-slate-900">Cloud Architecture &amp; Scalability</p>

                                <p className="text-xs text-slate-500">8 Modules • 24 Live Workshops</p>

                            </div>

                            <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white shadow-sm">

                                <Play className="h-4 w-4 ml-0.5" />

                            </div>

                        </div>

                        <div className="mt-4">

                            <div className="flex justify-between text-xs font-medium text-slate-600 mb-1.5">

                                <span>Course Progress</span>

                                <span className="font-bold text-brand">78% Complete</span>

                            </div>

                            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">

                                <div className="h-full rounded-full bg-brand" style={{ width: '78%' }} />

                            </div>

                        </div>

                    </div>

                    <div className="mt-4 space-y-2.5">

                        <div className="flex items-center justify-between rounded-lg bg-emerald-50/70 p-2.5 text-xs text-emerald-800">

                            <span className="flex items-center gap-2 font-medium">

                                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Module 01: Core Infrastructure

                            </span>

                            <span className="font-semibold text-emerald-700">Completed</span>

                        </div>

                        <div className="flex items-center justify-between rounded-lg bg-emerald-50/70 p-2.5 text-xs text-emerald-800">

                            <span className="flex items-center gap-2 font-medium">

                                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Module 02: Kubernetes Orchestration

                            </span>

                            <span className="font-semibold text-emerald-700">Completed</span>

                        </div>

                        <div className="flex items-center justify-between rounded-lg border border-brand/20 bg-brand/5 p-2.5 text-xs text-brand-700">

                            <span className="flex items-center gap-2 font-semibold">

                                <Clock className="h-4 w-4 text-brand" /> Module 03: Fault-Tolerant Systems

                            </span>

                            <span className="font-bold text-brand">Up Next</span>

                        </div>

                    </div>

                </div>

            )}

            {/* ========================================================

                5. REAL ESTATE: Property Specs & Valuation Dashboard

               ======================================================== */}

            {key === 'real-estate' && (

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-30px_rgba(15,23,42,0.16)]">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                        <div className="flex items-center gap-2.5">

                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">

                                <Building2 className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">IDX / MLS Engine</p>

                                <p className="text-sm font-bold text-slate-900">Verified Luxury Asset</p>

                            </div>

                        </div>

                        <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-bold text-brand">

                            +12.4% Est. Yield

                        </span>

                    </div>

                    <div className="mt-4 relative rounded-xl overflow-hidden border border-slate-100 bg-slate-100 p-4 text-center">

                        <div className="py-6">

                            <Building2 className="h-10 w-10 mx-auto text-brand/40 mb-2" />

                            <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">The Glass Pavilion • Suite 4B</p>

                            <p className="text-xl font-bold text-slate-900 mt-1">$1,850,000</p>

                        </div>

                        <div className="absolute top-3 left-3 rounded-md bg-white/90 backdrop-blur px-2 py-0.5 text-[10px] font-bold text-slate-700">

                            Exclusive Listing

                        </div>

                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">

                        <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">

                            <p className="text-[11px] text-slate-500">Bedrooms</p>

                            <p className="font-bold text-slate-900 mt-0.5">4 Beds</p>

                        </div>

                        <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">

                            <p className="text-[11px] text-slate-500">Bathrooms</p>

                            <p className="font-bold text-slate-900 mt-0.5">3.5 Baths</p>

                        </div>

                        <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">

                            <p className="text-[11px] text-slate-500">Living Area</p>

                            <p className="font-bold text-slate-900 mt-0.5">3,450 sqft</p>

                        </div>

                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">

                        <span className="text-xs font-medium text-slate-600">3D Virtual Walkthrough</span>

                        <span className="rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white">

                            Tour preview

                        </span>

                    </div>

                </div>

            )}

            {/* ========================================================

                6. PROFESSIONAL SERVICES: Project Deliverables & SLA

               ======================================================== */}

            {key === 'professional-services' && (

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-30px_rgba(15,23,42,0.16)]">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                        <div className="flex items-center gap-2.5">

                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">

                                <Briefcase className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Client Operations</p>

                                <p className="text-sm font-bold text-slate-900">Project Milestone Portal</p>

                            </div>

                        </div>

                        <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">

                            <UserCheck className="h-3.5 w-3.5" /> Approved

                        </span>

                    </div>

                    <div className="mt-4 space-y-3">

                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">

                            <div className="flex items-center justify-between">

                                <span className="text-xs font-bold text-slate-900">Sprint 04: Technical Discovery</span>

                                <span className="text-[11px] font-semibold text-emerald-600">100% Signed Off</span>

                            </div>

                            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200">

                                <div className="h-full rounded-full bg-emerald-500" style={{ width: '100%' }} />

                            </div>

                        </div>

                        <div className="rounded-xl border border-brand/20 bg-brand/5 p-3.5">

                            <div className="flex items-center justify-between">

                                <span className="text-xs font-bold text-brand-700">Sprint 05: Core System Deployment</span>

                                <span className="text-[11px] font-bold text-brand">In Review</span>

                            </div>

                            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200">

                                <div className="h-full rounded-full bg-brand" style={{ width: '70%' }} />

                            </div>

                        </div>

                        <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 opacity-60">

                            <div className="flex items-center justify-between">

                                <span className="text-xs font-medium text-slate-600">Sprint 06: User Acceptance Testing</span>

                                <span className="text-[11px] text-slate-400">Scheduled</span>

                            </div>

                            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200">

                                <div className="h-full rounded-full bg-slate-300" style={{ width: '0%' }} />

                            </div>

                        </div>

                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-100 p-2.5 text-xs text-slate-500">

                        <span className="font-mono">SLA tracking enabled</span>

                        <span className="text-brand font-semibold">Automated workflows</span>

                    </div>

                </div>

            )}

            {/* ========================================================

                7. LOGISTICS & TRANSPORTATION: Live Fleet Telematics

               ======================================================== */}

            {key === 'logistics' && (

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-30px_rgba(15,23,42,0.16)]">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                        <div className="flex items-center gap-2.5">

                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">

                                <Truck className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Global Fleet Dispatch</p>

                                <p className="text-sm font-bold text-slate-900">Shipment #TRK-8921</p>

                            </div>

                        </div>

                        <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-bold text-brand">

                            On Schedule

                        </span>

                    </div>

                    {/* Route Timeline Graphic */}

                    <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4">

                        <div className="relative pl-6 space-y-4">

                            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-200" />

                            <div className="relative">

                                <div className="absolute -left-6 top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />

                                <p className="text-xs font-bold text-slate-900">Rotterdam Seaport Distribution</p>

                                <p className="text-[11px] text-slate-500">Departed • 06:40 AM CET</p>

                            </div>

                            <div className="relative">

                                <div className="absolute -left-6 top-1 h-3 w-3 rounded-full border-2 border-white bg-brand shadow-sm animate-pulse" />

                                <p className="text-xs font-bold text-brand">Hamburg Transit Terminal</p>

                                <p className="text-[11px] text-slate-500">In Transit • Current Speed: 64 mph</p>

                            </div>

                            <div className="relative">

                                <div className="absolute -left-6 top-1 h-3 w-3 rounded-full border-2 border-white bg-slate-300" />

                                <p className="text-xs font-medium text-slate-400">Berlin Central Cargo Hub</p>

                                <p className="text-[11px] text-slate-400">Estimated Arrival: 16:30 CET</p>

                            </div>

                        </div>

                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-center">

                        <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">

                            <p className="text-[11px] text-slate-500">Cold-Chain Temp</p>

                            <p className="font-mono text-sm font-bold text-slate-900 mt-0.5">-18.2 °C (Locked)</p>

                        </div>

                        <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">

                            <p className="text-[11px] text-slate-500">Fuel Optimization</p>

                            <p className="font-mono text-sm font-bold text-emerald-600 mt-0.5">+14.6% Saved</p>

                        </div>

                    </div>

                </div>

            )}

            {/* ========================================================

                8. TRAVEL & HOSPITALITY: Digital Boarding / Itinerary

               ======================================================== */}

            {key === 'travel' && (

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-30px_rgba(15,23,42,0.16)]">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                        <div className="flex items-center gap-2.5">

                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">

                                <Plane className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Smart Itinerary</p>

                                <p className="text-sm font-bold text-slate-900">Direct Booking Hub</p>

                            </div>

                        </div>

                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">

                            Confirmed

                        </span>

                    </div>

                    <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="font-mono text-xl font-bold text-slate-900">SFO</p>

                                <p className="text-xs text-slate-500">San Francisco</p>

                            </div>

                            <div className="flex flex-col items-center">

                                <Plane className="h-4 w-4 text-brand rotate-90" />

                                <span className="text-[10px] font-mono text-slate-400 mt-1">10h 45m</span>

                            </div>

                            <div className="text-right">

                                <p className="font-mono text-xl font-bold text-slate-900">HND</p>

                                <p className="text-xs text-slate-500">Tokyo Haneda</p>

                            </div>

                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-200/80 pt-3 text-center">

                            <div>

                                <p className="text-[10px] uppercase text-slate-400 font-semibold">Seat</p>

                                <p className="font-mono text-xs font-bold text-slate-800">2A (First)</p>

                            </div>

                            <div>

                                <p className="text-[10px] uppercase text-slate-400 font-semibold">Gate</p>

                                <p className="font-mono text-xs font-bold text-slate-800">B14</p>

                            </div>

                            <div>

                                <p className="text-[10px] uppercase text-slate-400 font-semibold">Boarding</p>

                                <p className="font-mono text-xs font-bold text-brand">19:40</p>

                            </div>

                        </div>

                    </div>

                    <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-sm">

                        <div className="flex items-center gap-2">

                            <Luggage className="h-4 w-4 text-brand" />

                            <span className="text-xs text-slate-700 font-medium">Baggage Transferred to Hotel</span>

                        </div>

                        <span className="text-xs font-bold text-emerald-600">Tracked</span>

                    </div>

                </div>

            )}

            {/* ========================================================

                9. STARTUPS & TECHNOLOGY: Edge Architecture & CI/CD

               ======================================================== */}

            {key === 'startups' && (

                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_65px_-30px_rgba(15,23,42,0.16)]">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                        <div className="flex items-center gap-2.5">

                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand/10 text-brand">

                                <Zap className="h-5 w-5" />

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Continuous Delivery</p>

                                <p className="text-sm font-bold text-slate-900">Edge Cloud Cluster</p>

                            </div>

                        </div>

                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">

                            All Systems Normal

                        </span>

                    </div>

                    {/* Simulated Terminal Window */}

                    <div className="mt-4 rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300">

                        <div className="flex items-center gap-1.5 pb-2 text-slate-500 border-b border-slate-800">

                            <Terminal className="h-3.5 w-3.5" />

                            <span>deploy --production</span>

                        </div>

                        <div className="mt-3 space-y-1.5 text-[11px]">

                            <p className="text-slate-400">&gt; Building artifacts... done (1.2s)</p>

                            <p className="text-slate-400">&gt; Running zero-downtime healthcheck...</p>

                            <p className="text-emerald-400 flex items-center gap-1">

                                <CheckCircle2 className="h-3.5 w-3.5" /> Deployed to 240+ edge points

                            </p>

                        </div>

                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">

                        <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">

                            <p className="text-[11px] text-slate-500">API Latency</p>

                            <p className="font-mono text-sm font-bold text-slate-900 mt-0.5">18ms</p>

                        </div>

                        <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">

                            <p className="text-[11px] text-slate-500">Edge Uptime</p>

                            <p className="font-mono text-sm font-bold text-slate-900 mt-0.5">99.99%</p>

                        </div>

                        <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">

                            <p className="text-[11px] text-slate-500">Build Speed</p>

                            <p className="font-mono text-sm font-bold text-brand mt-0.5">10x MVP</p>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}

/** Short, industry-specific focus areas add relevance without inventing case-study claims. */
const INDUSTRY_FOCUS: Record<string, string[]> = {
    fintech: ['Digital payments', 'Secure platforms', 'Workflow automation'],
    ecommerce: ['Online storefronts', 'Checkout experiences', 'Commerce integrations'],
    healthcare: ['Patient experiences', 'Connected systems', 'Secure data flows'],
    education: ['Learning platforms', 'Student experiences', 'Progress tracking'],
    'real-estate': ['Property platforms', 'Lead management', 'Digital experiences'],
    'professional-services': ['Client portals', 'Process automation', 'Connected workflows'],
    logistics: ['Shipment visibility', 'Fleet operations', 'Process efficiency'],
    travel: ['Booking platforms', 'Guest experiences', 'Connected operations'],
    startups: ['MVP development', 'Product engineering', 'Scalable architecture'],
};

export function IndustryHero({ industry }: { industry: Industry }) {
    const focusAreas = INDUSTRY_FOCUS[getIndustryKey(industry)] ?? INDUSTRY_FOCUS.startups;
	const titleWords = industry.title.trim().split(/\s+/);
const lastWord = titleWords.pop();
const remainingTitle = titleWords.join(' ');

    return (
        <section
            aria-labelledby="industry-hero-heading"
            className="relative isolate overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]"
        >
            <div className="mx-auto w-full max-w-8xl px-5 py-14 sm:px-8 sm:py-16 lg:py-24">
                <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-20">
                    {/* LEFT: clear industry positioning, improved hierarchy and CTAs */}
                    <div className="min-w-0 lg:col-span-7">
                        <nav aria-label="Breadcrumb" className="mb-10 sm:mb-14">
                            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-medium">
                                <li>
                                    <Link
                                        to="/industries"
                                        className="group inline-flex items-center gap-2 text-slate-500 transition-colors hover:text-brand focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                                    >
                                        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                                        All industries
                                    </Link>
                                </li>
                               
                            </ol>
                        </nav>

                        <div className="inline-flex items-center gap-3">
                            <span aria-hidden="true" className="h-[2px] w-8 rounded-full bg-brand" />
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
                                Industry expertise
                            </span>
                        </div>

                       <h1
    id="industry-hero-heading"
    className="
        mt-5 max-w-[760px]
        font-display
        text-[clamp(2.65rem,4.45vw,4.7rem)]
        font-bold leading-[1.08]
        tracking-[-0.045em]
        text-navy
    "
>
    {remainingTitle}{remainingTitle && ' '}
    <span className="text-brand">{lastWord}</span>
</h1>

                        <div className="mt-7 max-w-[650px] border-l-[3px] border-brand pl-5 sm:mt-8 sm:pl-6">
                            <p className="font-display text-lg font-semibold leading-[1.45] tracking-tight text-navy sm:text-[1.35rem]">
                                {industry.tagline}
                            </p>
                        </div>

                        <p className="mt-6 max-w-[630px] text-[15px] leading-[1.85] text-slate-600 sm:text-[17px]">
                            {industry.description}
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                to="/contact"
                                className="group inline-flex min-h-12 items-center justify-center gap-7 rounded-xl bg-brand px-6 py-3.5 font-display text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:w-auto"
                            >
                                Discuss your project
                                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>

                            <Link
                                to="/work"
                                className="group inline-flex min-h-12 items-center justify-center gap-5 rounded-xl border border-navy/15 bg-white px-6 py-3.5 font-display text-base font-semibold text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy sm:w-auto"
                            >
                                Explore our work
                                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
                            </Link>
                        </div>

                        {/* A small, dynamic industry-specific detail—not another card. */}
                        <div className="mt-11 max-w-[640px]  pt-5 sm:mt-5">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                What we can help you build
                            </p>
                            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2.5" aria-label="Industry focus areas">
                                {focusAreas.map((area) => (
                                    <li key={area} className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-600">
                                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: preserve each industry-specific composition, no brand glow. */}
                    <div className="min-w-0 lg:col-span-5">
                        <div aria-hidden="true" className="w-full">
                            <IndustryVisual industry={industry} />
                        </div>
                        <p className="mt-3 text-center text-[11px] text-slate-400">
                            Illustrative interface · Example data
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
