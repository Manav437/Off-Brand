import { motion } from "framer-motion";
import CtaImg from "../assets/cta-img.jpg";

const CTA = () => {
    return (
        <section id="contact" className="w-full py-20 md:py-28 px-6 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <span className="text-xs uppercase tracking-[0.1em] text-zinc-400 font-bold block mb-3">
                        Start Your Project
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight text-zinc-950">
                        Work seamlessly with a creative team built to match
                        <span className="text-zinc-400 block sm:inline sm:ml-3 font-normal">
                            your pace and exceed your expectations.
                        </span>
                    </h2>
                </motion.div>

                <motion.a
                    href="mailto:manav.gusain@gmail.com?subject=Project%20Inquiry%20-%20Off%20Brand"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="group relative flex items-center gap-4 bg-zinc-950 text-white rounded-full p-2.5 pr-8 transition-all duration-200 hover:bg-zinc-800 shadow-md active:scale-95"
                >
                    <div className="relative">
                        <img
                            src={CtaImg}
                            alt="Project Lead"
                            className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
                        />
                        <span className="absolute bottom-0 right-0 flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-emerald-500 border-2 border-zinc-950"></span>
                        </span>
                    </div>

                    <div className="flex flex-col text-left">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-base sm:text-lg">
                                Book a call
                            </span>
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
                        </div>
                        <span className="text-xs text-zinc-400 font-medium">
                            Let's talk about your project
                        </span>
                    </div>
                </motion.a>
            </div>
        </section>
    );
};

export default CTA;
