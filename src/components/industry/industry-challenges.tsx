import type { Industry } from '@/data/industries';

/* -------------------------------------------------------------------------- */
/* Industry Challenges                                                        */
/* -------------------------------------------------------------------------- */

export function IndustryChallenges({
    industry,
}: {
    industry: Industry;
}) {
    return (
        <section
            id="industry-challenges"
            aria-labelledby="industry-challenges-heading"
            className="
                relative
                overflow-hidden
                bg-white
                py-20
                sm:py-20
                lg:py-20
            "
        >
            <div className="mx-auto w-full max-w-8xl px-5 sm:px-8">

                {/* ====================================================== */}
                {/* SECTION INTRODUCTION                                   */}
                {/* ====================================================== */}

                <div
                    className="
                        grid
                        items-end
                        gap-10
                        lg:grid-cols-12
                        lg:gap-16
                    "
                >

                    {/* Left — Heading */}

                    <div className="lg:col-span-7">

                        {/* Eyebrow */}

                        <div className="flex items-center gap-3">

                            <span
                                aria-hidden="true"
                                className="h-[2px] w-8 bg-brand"
                            />

                            <span
                                className="
                                    font-mono
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-brand
                                    sm:text-xs
                                "
                            >
                                Understanding the challenges
                            </span>

                        </div>


                        {/* Main Heading */}

                        <h2
                            id="industry-challenges-heading"
                            className="
                                mt-7
                                max-w-[760px]
                                font-display
                                text-[clamp(2.5rem,4.3vw,4.7rem)]
                                font-bold
                                leading-[1.09]
                                tracking-[-0.045em]
                                text-navy
                            "
                        >
                            Every industry
                            <br />
                            has its{' '}

                            <span className="text-slate-400">
                                Challenges.
                            </span>
                        </h2>

                    </div>


                    {/* Right — Industry Introduction */}

                    <div className="lg:col-span-5">

                        <div className="lg:max-w-[460px] lg:pb-2">

                            <p
                                className="
                                    mb-4
                                    font-mono
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-slate-400
                                "
                            >
                                {industry.title}
                            </p>

                            <p
                                className="
                                    text-[16px]
                                    leading-[1.85]
                                    text-slate-600
                                    sm:text-[17px]
                                "
                            >
                                {industry.challengeIntro}
                            </p>

                        </div>

                    </div>

                </div>


                {/* ====================================================== */}
                {/* CHALLENGE INDEX                                        */}
                {/* ====================================================== */}

                <div className="mt-16 sm:mt-20 lg:mt-24">

                    {/* List Header */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            gap-5
                            border-b-2
                            border-navy/20
                            pb-5
                        "
                    >

                        <span
                            className="
                                font-mono
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.19em]
                                text-navy
                            "
                        >
                            Key industry challenges
                        </span>


                        <span
                            className="
                                font-mono
                                text-[11px]
                                font-medium
                                uppercase
                                tracking-[0.14em]
                                text-slate-400
                            "
                        >
                            01 — {String(
                                industry.challengePoints.length
                            ).padStart(2, '0')}
                        </span>

                    </div>


                    {/* Challenge Rows */}

                    <ol>
                        {industry.challengePoints.map(
                            (point, index) => (

                                <li
                                    key={`${point.title}-${index}`}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        border-b
                                        border-navy/10
                                        transition-colors
                                        duration-300
                                        hover:bg-[#F8FAFC]
                                        motion-reduce:transition-none
                                    "
                                >

                                    {/* Animated Left Border */}

                                    <span
                                        aria-hidden="true"
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            top-0
                                            w-[3px]
                                            origin-center
                                            scale-y-0
                                            bg-brand
                                            transition-transform
                                            duration-300
                                            group-hover:scale-y-100
                                            motion-reduce:transition-none
                                        "
                                    />


                                    {/* Row Content */}

                                    <div
                                        className="
                                            grid
                                            items-start
                                            gap-5
                                            py-9
                                            transition-[padding]
                                            duration-300

                                            group-hover:pl-4

                                            sm:py-11

                                            lg:grid-cols-12
                                            lg:items-start
                                            lg:gap-8
                                            lg:py-12
                                            lg:group-hover:pl-6

                                            motion-reduce:transition-none
                                        "
                                    >

                                        {/* Number */}

                                        <div
                                            className="
                                                lg:col-span-1
                                            "
                                        >

                                            <span
                                                className="
                                                    font-mono
                                                    text-[14px]
                                                    font-semibold
                                                    tracking-tight
                                                    text-brand
                                                "
                                            >
                                                {String(
                                                    index + 1
                                                ).padStart(2, '0')}
                                            </span>

                                        </div>


                                        {/* Challenge Title */}

                                        <div
                                            className="
                                                lg:col-span-5
                                            "
                                        >

                                            <h3
                                                className="
                                                    max-w-[480px]
                                                    font-display
                                                    text-[clamp(1.4rem,2.2vw,2rem)]
                                                    font-semibold
                                                    leading-[1.25]
                                                    tracking-[-0.035em]
                                                    text-navy
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-brand
                                                    motion-reduce:transition-none
                                                "
                                            >
                                                {point.title}
                                            </h3>

                                        </div>


                                        {/* Challenge Description */}

                                        <div
                                            className="
                                                lg:col-span-6
                                            "
                                        >

                                            <p
                                                className="
                                                    max-w-[560px]
                                                    text-[15px]
                                                    leading-[1.85]
                                                    text-slate-600
                                                    sm:text-[16px]
                                                "
                                            >
                                                {point.description}
                                            </p>

                                        </div>

                                    </div>

                                </li>

                            )
                        )}
                    </ol>


                    {/* Bottom Detail */}

                    <div
                        className="
                            mt-8
                            flex
                            items-center
                            justify-between
                            gap-5
                        "
                    >

                        <span
                            className="
                                font-mono
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.17em]
                                text-slate-400
                            "
                        >
                            Industry insights
                        </span>


                        {/* Decorative indicator */}

                        <div
                            aria-hidden="true"
                            className="flex items-center gap-1.5"
                        >

                            <span className="h-1.5 w-1.5 rounded-full bg-brand" />

                            <span className="h-1.5 w-1.5 rounded-full bg-brand/40" />

                            <span className="h-1.5 w-1.5 rounded-full bg-brand/15" />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}