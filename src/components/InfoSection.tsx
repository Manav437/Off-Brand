import { motion } from "framer-motion";

const infoContent: string[] = [
    "Design a brand worth remembering",
    "Story-driven web experiences that convert",
    "Pitch decks for 9-figure raises, literally",
    "Dedicated senior product designers",
    "Output-focused design sprints",
];

const InfoSection = () => {
    const handleScrollTo = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="about"
            className="w-full max-w-[1400px] mx-auto px-6 py-20 md:py-28 flex flex-col gap-14 md:gap-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
            >
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight text-zinc-950">
                    <span>
                        Design dream team for founders obsessed with shipping fast.
                    </span>
                    <span className="text-zinc-400 ml-2 font-normal">
                        Our clients have raised over $600M+ in the last 18 months alone.
                    </span>
                </h2>
            </motion.div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col justify-between gap-8 md:sticky md:top-28 self-start"
                >
                    <div className="space-y-5 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-lg">
                        <p>
                            Over 18 years grinding alongside founders with a
                            chip on their shoulder and a story that needs
                            telling.
                        </p>
                        <p>
                            Off Brand is the design partner teams turn to when
                            speed and quality matter most.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 border-t border-zinc-100 pt-6">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium block">
                                Projects start at
                            </span>
                            <span className="text-zinc-900 text-xl font-bold">
                                $1,000/mo
                            </span>
                        </div>

                        <button
                            onClick={() => handleScrollTo("#pricing")}
                            className="group relative flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-zinc-900 text-white transition-all duration-200 hover:bg-zinc-800 shadow-sm active:scale-95"
                        >
                            <span>View Pricing</span>
                            <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </motion.div>

                <div className="flex flex-col divide-y divide-zinc-200 border-y border-zinc-200">
                    {infoContent.map((content, index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-4 py-4 px-2 transition-colors hover:bg-zinc-50/80"
                        >
                            <ArrowIcon className="w-4 h-4 mt-1.5 text-zinc-400 group-hover:text-zinc-900 transition-colors shrink-0" />
                            <span className="text-lg sm:text-xl font-medium tracking-tight text-zinc-700 group-hover:text-zinc-950 transition-colors">
                                {content}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface IconProps {
    className?: string;
}

const ArrowIcon = ({ className }: IconProps) => (
    <svg className={className} fill="currentColor" viewBox="0 0 256 256">
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
);

export default InfoSection;
