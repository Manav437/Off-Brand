import { motion } from "framer-motion";
import CtaImg from "../assets/cta-img.jpg";

const CTA = () => {
    return (
        <section className="w-full py-32 md:py-36 px-6 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tighter"
                    >
                        Work seamlessly with a creative team built to match
                        <span className="text-zinc-400 block md:inline md:ml-3">
                            your pace and exceed your expectations.
                        </span>
                    </motion.h2>
                </div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex items-center gap-4 bg-[#1a1a1a] text-white rounded-full p-2 pr-8 transition-all duration-300 shadow-xl shadow-black/10 active:bg-black"
                >
                    <div className="relative">
                        <img
                            src={CtaImg}
                            alt="Project Lead"
                            className="h-14 w-14 rounded-full object-cover ring-2 ring-white/30"
                        />
                        <span className="absolute bottom-0 right-0 flex size-3.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex size-3.5 rounded-full bg-green-500 border-2 border-[#1a1a1a]"></span>
                        </span>
                    </div>

                    <div className="flex flex-col text-left">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">
                                Book a call
                            </span>

                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </div>
                        <span className="text-sm text-white/50 font-medium">
                            Let's talk about your project
                        </span>
                    </div>
                </motion.button>
            </div>
        </section>
    );
};

export default CTA;
