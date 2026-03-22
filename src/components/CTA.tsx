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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center gap-4 bg-[#2c2c2c] text-white rounded-full p-2 pr-8 transition-all duration-300 hover:bg-black/75 shadow-[0px_0px_2px_1px_rgba(255,255,255,0.2)_inset]"
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

                            <div className="transition-transform duration-300 group-hover:translate-x-0.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                                </svg>
                            </div>
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
