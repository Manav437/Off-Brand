import { motion, type Variants } from "framer-motion";
import bgImg from "../assets/hero-section-img.jpeg";

const HeroSection = () => {
    const titleVariant: Variants = {
        hidden: { y: "103%" },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
            },
        },
    };

    const containerVariant: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };
    return (
        <section className="relative min-h-[85vh] max-w-[calc(100%-14px)] mx-auto mt-3 rounded-[30px] overflow-hidden flex flex-col items-center justify-end pb-16 px-4">
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            />

            <div className="absolute inset-0 bg-black/40 z-[1]" />

            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center gap-10 w-full max-w-4xl"
            >
                <div className="text-white text-center tracking-tighter leading-[1.1]">
                    <div className="overflow-hidden">
                        <motion.h2
                            variants={titleVariant}
                            className="font-serif text-3xl md:text-5xl lg:text-6xl mb-2"
                        >
                            Designing Brands and Experiences
                        </motion.h2>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h2
                            variants={titleVariant}
                            className="font-serif italic text-white/60 text-4xl md:text-6xl lg:text-7xl"
                        >
                            Worth Remembering
                        </motion.h2>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-row gap-4 mb-4"
                >
                    <button className="group flex items-center justify-center text-white font-semibold bg-[#2c2c2c] px-5 py-3 gap-3 rounded-full transition-all hover:bg-black shadow-[0px_0px_2px_1px_rgba(255,255,255,0.5)_inset]">
                        Get Started
                        <ArrowIcon />
                    </button>

                    <button className="group flex items-center justify-center bg-white text-black font-semibold px-5 py-3 gap-3 rounded-full transition-all hover:bg-zinc-100 shadow-[0px_0px_2px_1px_rgba(1,1,1,0.1)_inset] active:scale-95">
                        <span>View Pricing</span>
                        <ArrowIcon color="black" />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

const ArrowIcon = ({ color = "white" }: { color?: string }) => (
    <div className="transition-transform duration-300 group-hover:translate-x-0.5">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill={color === "white" ? "#ffffff" : "#000000"}
            viewBox="0 0 256 256"
        >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
        </svg>
    </div>
);

export default HeroSection;
