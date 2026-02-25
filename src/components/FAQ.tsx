import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CallImg from "../assets/pfpf1.png";

type FaqItemsType = {
    question: string;
    answer: string;
};

const faqItems: FaqItemsType[] = [
    {
        question: "What's the Off Brand delivery process?",
        answer: "Our delivery process is designed to be efficient and transparent. We start with a discovery phase to understand your needs, then move to design concepts, revisions, and final delivery. Throughout the process, you'll have regular check-ins and opportunities for feedback.",
    },
    {
        question: "How does the Monthly Retainer work?",
        answer: "We align on the scope of your project ahead of kickoff and prepare a transparent timeline and design plan based on your needs. It doesn't matter whether it's branding, website design, UI/UX, or marketing materials - it's all included.",
    },
    {
        question: "What if I'm not happy with the work?",
        answer: "Simple - we keep iterating. Design is subjective, sometimes your taste and ours doesn't align, so we work extra hard to bridge that taste gap.",
    },
    {
        question: "How do I share feedback?",
        answer: "Loom and Figma comments are our favorite. For quick comments, we still prefer Figma (more organized) but the occasional Slack message is also welcome. You can use our project management tool, Orchestra, to leave comments directly on designs or schedule a call with your project manager.",
    },
    {
        question: "Is there a limit to how much I can ask for?",
        answer: "Great question - not exactly. You can ask for anything you need and we'll be upfront about whether it's possible on your plan. For Custom Projects, any new scope usually requires a change order or adding a retainer option.",
    },
    {
        question: "Can we have calls?",
        answer: "Absolutely! You can book an intro call to discuss potential projects anytime. Each project starts with a kickoff call. We offer strategy calls as needed, but prefer to let designers focus on their work. Depending on the topic, you might meet only with the project lead.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="w-full py-24 md:py-30 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-20 lg:gap-32">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-between w-full lg:w-[35%] lg:sticky lg:top-32 bg-[#2c2c2c]/10 backdrop-blur-xl border border-white/60 ring-2 ring-black/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] rounded-[2rem] p-8"
                >
                    <div>
                        <img
                            src={CallImg}
                            className="h-16 w-16 rounded-full mb-4 ring-2 ring-black/20"
                        />
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                            Book an intro call
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 max-w-sm">
                            Time to get introduced and explore how Off Brand can
                            help you ship faster.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors mb-12 shadow-lg shadow-black/5"
                        >
                            Book a Call
                        </motion.button>
                    </div>
                    <div className="flex items-center gap-5 pt-8 border-t border-zinc-100">
                        <div className="p-3 bg-zinc-50 rounded-full text-zinc-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                            >
                                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,123.39,52.57,64ZM216,192H40V74.19L123.07,139a8,8,0,0,0,9.86,0L216,74.19V192Z" />
                            </svg>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                                Email us directly
                            </p>
                            <a
                                href="mailto:manav.gussain@gmail.com"
                                className="font-semibold text-zinc-900 hover:text-zinc-500 transition-colors"
                            >
                                manav.gussain@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="w-full lg:w-[65%]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-semibold leading-tight mb-20"
                    >
                        Frequently <br className="hidden md:block" />
                        <span className="text-gray-300">Asked Questions</span>
                    </motion.h2>

                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="border-t border-zinc-200"
                    >
                        {faqItems.map((item, index) => (
                            <motion.li
                                layout
                                variants={itemVariants}
                                key={index}
                                className="flex flex-col border-b border-zinc-200"
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex(
                                            activeIndex === index
                                                ? null
                                                : index,
                                        )
                                    }
                                    className="w-full text-left py-3 flex items-center justify-between group transition-all"
                                >
                                    <span className="text-lg md:text-xl font-medium tracking-tight pr-8">
                                        {item.question}
                                    </span>

                                    <motion.div
                                        animate={{
                                            rotate:
                                                activeIndex === index ? 135 : 0,
                                        }}
                                        className={`text-2xl transition-colors ${activeIndex === index ? "text-black" : "text-zinc-300 group-hover:text-zinc-500"}`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                                        </svg>
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {activeIndex === index && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.35,
                                                ease: [0.04, 0.62, 0.23, 0.98],
                                            }}
                                        >
                                            <div className="pb-4 pr-12 text-zinc-500 text-md leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
