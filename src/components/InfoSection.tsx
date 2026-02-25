import { motion } from "framer-motion";

const infoContent: string[] = [
    "Design a brand worth remembering",
    "Story-driven web experiences that convert",
    "Pitch desks for 9-figures raises, literally",
    "Dedicated product designers",
    "Output focused design sprints",
];

const InfoSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="mx-auto max-w-full md:mx-4 px-6 py-20 flex flex-col gap-16 md:gap-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="max-w-6xl"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                    <span>
                        Design dream team for founders obsessed with shipping
                        fast.
                    </span>
                    <span className="text-gray-400 ml-3">
                        Our clients have raised over $600M+ in the last 18
                        months alone.
                    </span>
                </h1>
            </motion.div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col justify-between h-full md:sticky md:top-24 pb-4"
                >
                    <div className="space-y-6 text-lg md:text-xl text-black/70 leading-relaxed w-full">
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

                    <div className="flex items-center gap-6 border-t border-gray-100 pt-8 mt-12 md:mt-0">
                        <span className="text-sm uppercase tracking-wider text-black/50">
                            Projects start at <br />
                            <strong className="text-black text-lg">
                                $8,000/mo
                            </strong>
                        </span>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 bg-black text-white rounded-full px-6 py-3 transition-transform"
                        >
                            <span className="text-sm font-medium">
                                View Pricing
                            </span>
                            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col divide-y divide-gray-200 border-y border-gray-200"
                >
                    {infoContent.map((content, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group flex items-start gap-4 py-4 px-2 transition-colors hover:bg-gray-50"
                        >
                            <ArrowIcon className="w-5 h-5 mt-1.5 text-black/30 group-hover:text-black transition-colors shrink-0" />
                            <span className="text-xl md:text-2xl font-medium tracking-tight text-black/80 group-hover:text-black">
                                {content}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ArrowIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 256 256">
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
);

export default InfoSection;
