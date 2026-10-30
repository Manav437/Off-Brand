import { useState } from "react";
import { motion } from "framer-motion";
import authorImg from "../assets/mnv.jpg";
import { DitherBackground } from "./DitherBackground";

interface PlanDetails {
    title: string;
    price: string;
    unit: string;
    badge: string;
    description: string;
    features: string[];
}

interface Plans {
    [key: string]: PlanDetails;
}

const plans: Plans = {
    monthly: {
        title: "Design Retainer",
        price: "$1,000",
        unit: "/mo",
        badge: "Most Popular",
        description:
            "Perfect for venture-backed startups needing a dedicated design arm.",
        features: [
            "Brand, experience, or interface design support",
            "Flexible monthly engagement with async cadence",
            "Clear timeline and milestone deliverables",
            "Dedicated senior designer & weekly updates",
        ],
    },
    custom: {
        title: "Custom Project",
        price: "$5,000",
        unit: "/project",
        badge: "Fixed Scope",
        description:
            "One-off specialized projects with a defined scope and timeline.",
        features: [
            "End-to-end design & design system sprints",
            "Production-ready web & mobile app interfaces",
            "Milestone-based delivery with clear execution",
            "High-impact pitch decks & brand strategy",
        ],
    },
};

const Pricing = () => {
    const [plan, setPlan] = useState<keyof typeof plans>("monthly");

    const handleScrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const currentPlan = plans[plan];

    return (
        <section id="pricing" className="w-full max-w-[1400px] mx-auto px-6 py-20 md:py-28">
            <div className="text-center mb-12 sm:mb-16">
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold block mb-2">
                    Pricing & Plans
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950">
                    Transparent Investment
                </h2>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-16">
                <motion.div
                    layout
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-xl mx-auto lg:mx-0 flex flex-1 items-stretch flex-col justify-between gap-10 lg:gap-12"
                >
                    <div className="space-y-4">
                        <span className="text-xs uppercase tracking-[0.1em] text-zinc-400 font-bold block">
                            The ROI of Quality
                        </span>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl max-w-md font-semibold leading-[1.15] tracking-tight text-zinc-950">
                            Hire the best, and get what you paid for.
                        </h3>
                    </div>

                    <motion.div
                        layout
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col justify-end"
                    >
                        <blockquote className="font-serif text-xl sm:text-2xl text-zinc-700 italic leading-relaxed border-l-2 border-zinc-900/20 pl-6 mb-6">
                            "For us it has been important to find a creative
                            partner like Off Brand - a team we can trust to
                            deliver quality work on time."
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-zinc-200">
                                <img
                                    src={authorImg}
                                    alt="Manav Gusain"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-base text-zinc-950">
                                    Manav Gusain
                                </span>
                                <span className="text-xs text-zinc-500 font-medium">
                                    Author, The 67 Types of Wealth
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="w-full max-w-md mx-auto lg:mx-0 flex flex-col gap-5">
                    <div className="flex bg-zinc-100/90 p-1 rounded-2xl relative border border-zinc-200/60">
                        {(Object.keys(plans) as Array<keyof typeof plans>).map(
                            (option) => (
                                <button
                                    key={option}
                                    onClick={() => setPlan(option)}
                                    className={`relative flex-1 py-2.5 text-xs sm:text-sm font-semibold transition-colors duration-200 z-10 ${plan === option
                                        ? "text-zinc-950"
                                        : "text-zinc-500 hover:text-zinc-800"
                                        }`}
                                >
                                    {plan === option && (
                                        <motion.div
                                            layoutId="activePlan"
                                            className="absolute inset-0 bg-white shadow-sm rounded-xl"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 35,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-20 capitalize">
                                        {option}
                                    </span>
                                </button>
                            ),
                        )}
                    </div>

                    <div className="bg-zinc-950 text-white rounded-[1rem] p-7 sm:p-9 shadow-xl border border-white/10 relative overflow-hidden w-full">
                        <DitherBackground variant={plan as "monthly" | "custom"} />
                        <div className="w-full relative z-10">
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex size-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
                                        </span>
                                        <h4 className="text-xs uppercase tracking-[0.1em] text-zinc-400 font-bold">
                                            {currentPlan.title}
                                        </h4>
                                    </div>
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/10 px-2 py-0.5 rounded-full">
                                        {currentPlan.badge}
                                    </span>
                                </div>

                                <div className="flex items-baseline gap-1 mt-3">
                                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                                        {currentPlan.price}
                                    </span>
                                    <span className="text-lg text-zinc-400 font-medium">
                                        {currentPlan.unit}
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-400 mt-2">
                                    {currentPlan.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-9 border-t border-white/10 pt-6">
                                {currentPlan.features.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm text-zinc-300"
                                    >
                                        <div className="mt-0.5 bg-white/15 rounded-full p-1 shrink-0">
                                            <svg
                                                className="w-2.5 h-2.5 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={3}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-3">
                                <button
                                    onClick={handleScrollToContact}
                                    className="group relative flex items-center justify-center gap-2 w-full bg-white text-zinc-950 font-bold py-4 rounded-full transition-all duration-200 hover:bg-zinc-100 shadow-sm active:scale-95 text-sm"
                                >
                                    <span>Get Started Now</span>
                                    <div className="transition-transform duration-200 group-hover:translate-x-0.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                                        </svg>
                                    </div>
                                </button>
                                <p className="text-center text-[10px] text-zinc-400 uppercase tracking-wide font-semibold">
                                    Limited spots available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
