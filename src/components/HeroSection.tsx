import { motion, type Variants } from "framer-motion";
import bgImg from "../assets/hero-section-img.jpg";

const HeroSection = () => {
    const titleVariant: Variants = {
        hidden: { y: "100%", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1],
            },
        },
    };

    const containerVariant: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const handleScrollTo = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-[85vh] max-w-[calc(100%-16px)] mx-auto mt-2 sm:mt-3 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-end pb-16 sm:pb-20 px-4">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/25 z-[1]" />

            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 w-full max-w-4xl"
            >
                <div className="text-white text-center tracking-tight leading-[1.1]">
                    <div className="overflow-hidden pb-1">
                        <motion.h1
                            variants={titleVariant}
                            className="font-serif text-3xl sm:text-5xl lg:text-6xl mb-2 font-normal"
                        >
                            Designing Brands and Experiences
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden pb-2">
                        <motion.h2
                            variants={titleVariant}
                            className="font-serif italic text-white/80 text-4xl sm:text-6xl lg:text-7xl font-light"
                        >
                            Worth Remembering
                        </motion.h2>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
                >
                    <button
                        onClick={() => handleScrollTo("#contact")}
                        className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold bg-zinc-900 text-white transition-all duration-200 hover:bg-zinc-800 shadow-md active:scale-95"
                    >
                        <span>Get Started</span>
                        <ArrowIcon />
                    </button>

                    <button
                        onClick={() => handleScrollTo("#pricing")}
                        className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold bg-white text-zinc-900 transition-all duration-200 hover:bg-zinc-100 shadow-sm active:scale-95"
                    >
                        <span>View Pricing</span>
                        <ArrowIcon color="black" />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

const ArrowIcon = ({ color = "white" }: { color?: string }) => (
    <div className="transition-transform duration-200 group-hover:translate-x-0.5">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill={color === "white" ? "#ffffff" : "#18181b"}
            viewBox="0 0 256 256"
        >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
        </svg>
    </div>
);

export default HeroSection;
