import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import authorImg from "../assets/mnv.jpg";

const plans = {
    monthly: {
        title: "Design Retainer",
        price: "$1,000",
        unit: "/mo",
        description:
            "Perfect for venture-backed startups needing a dedicated design arm.",
        features: [
            "Brand, Experience, or Interface design support",
            "On-going monthly retainer to fit your needs",
            "Clear timeline and milestone deliverables",
            "Expert project manager & weekly async updates",
        ],
    },
    custom: {
        title: "Custom Project",
        price: "$5,000",
        unit: "/mo",
        description:
            "One-off specialized projects with a defined scope and timeline.",
        features: [
            "Work with a world-class design/engineering team",
            "Ship iOS & Mac apps in weeks",
            "Milestone-based delivery and clear plan",
            "Brand and storytelling strategy",
        ],
    },
};

const Pricing = () => {
    const [plan, setPlan] = useState("monthly");
    const currentPlan = plans[plan];

    return (
        <section className="w-full max-w-[95vw] mx-auto px-6 py-24">
            <div className="overflow-hidden text-center mb-[-1vw] md:mb-[-1vw]">
                <motion.h1
                    initial={{ y: "40%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-[28vw] font-semibold leading-[0.9] text-zinc-800 select-none [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]"
                >
                    Pricing
                </motion.h1>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16 relative z-10">
                <div className="max-w-xl flex flex-1 items-stretch flex-col justify-between gap-12">
                    <div className="space-y-4">
                        <span className="text-sm uppercase tracking-[0.2em] text-black/40 font-bold block">
                            The ROI of Quality
                        </span>
                        <h2 className="text-4xl md:text-5xl max-w-sm font-semibold leading-[1.1] tracking-tight">
                            Hire the best, and get what you paid for.
                        </h2>
                    </div>

                    <div className="flex flex-col justify-end">
                        <blockquote className="font-serif text-2xl md:text-3xl text-black/80 italic leading-relaxed border-l-4 border-black/10 pl-8 mb-10">
                            "For us it has been important to find a creative
                            partner like Off Brand — a team we can trust to
                            deliver quality work on time."
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-black/10">
                                <img
                                    src={authorImg}
                                    alt="Manav Gusain"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg text-black">
                                    Manav Gusain
                                </span>
                                <span className="text-sm text-black/50 font-medium">
                                    Author, The 67 Types of Wealth
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-md flex flex-col gap-6">
                    <div className="flex bg-zinc-100 p-1 rounded-2xl relative">
                        {["monthly", "custom"].map((option) => (
                            <button
                                key={option}
                                onClick={() => setPlan(option)}
                                className={`relative flex-1 py-3 text-sm font-bold transition-colors duration-300 z-10 ${
                                    plan === option
                                        ? "text-black"
                                        : "text-zinc-400 hover:text-zinc-600"
                                }`}
                            >
                                {plan === option && (
                                    <motion.div
                                        layoutId="activePlan"
                                        className="absolute inset-0 bg-white shadow-sm rounded-xl"
                                        transition={{
                                            type: "spring",
                                            bounce: 0.2,
                                            duration: 0.6,
                                        }}
                                    />
                                )}
                                <span className="relative z-20 capitalize">
                                    {option}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="bg-[#1a1a1a]/90 text-white rounded-[1rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={plan}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                <div className="mb-10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="relative flex size-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                                            <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
                                        </span>
                                        <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">
                                            {currentPlan.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-5xl font-bold tracking-tight">
                                            {currentPlan.price}
                                        </span>
                                        <span className="text-xl text-white/30 font-medium">
                                            {currentPlan.unit}
                                        </span>
                                    </div>
                                    {/*<p className="mt-4 text-white/50 text-sm leading-relaxed">
                                        {currentPlan.description}
                                    </p>*/}
                                </div>

                                <ul className="space-y-5 mb-12">
                                    {currentPlan.features.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-4 text-[15px] text-white/70"
                                        >
                                            <div className="mt-1 bg-white/20 rounded-full p-1 shrink-0">
                                                <svg
                                                    className="w-3 h-3 text-white"
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

                                <div className="space-y-4">
                                    <button className="w-full bg-white text-black font-bold py-5 rounded-full hover:bg-zinc-200 transition-all active:scale-[0.98]">
                                        Get Started Now
                                    </button>
                                    <p className="text-center text-[11px] text-white/50 uppercase tracking-widest font-bold">
                                        Limited spots available
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
