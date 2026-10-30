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

    const handleScrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="faq" className="w-full py-20 md:py-28 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
                <div className="flex flex-col justify-between w-full lg:w-[35%] bg-zinc-50 border border-zinc-200/80 shadow-sm rounded-[2rem] p-8 transition-[height] duration-300">
                    <div>
                        <img
                            src={CallImg}
                            alt="Project Lead"
                            className="h-14 w-14 rounded-full mb-5 ring-2 ring-zinc-200"
                        />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 tracking-tight text-zinc-950">
                            Book an intro call
                        </h3>
                        <p className="text-zinc-500 text-sm sm:text-base mb-8 max-w-sm leading-relaxed">
                            Time to get introduced and explore how Off Brand can help you ship faster.
                        </p>
                        <button
                            onClick={handleScrollToContact}
                            className="group relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-900 text-white transition-all duration-200 hover:bg-zinc-800 shadow-sm active:scale-95 mb-8 w-full sm:w-auto"
                        >
                            <span>Book a Call</span>
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
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-zinc-200/80">
                        <div className="p-2.5 bg-white border border-zinc-200 rounded-full text-zinc-600 shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                            >
                                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,123.39,52.57,64ZM216,192H40V74.19L123.07,139a8,8,0,0,0,9.86,0L216,74.19V192Z" />
                            </svg>
                        </div>

                        <div>
                            <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                                Email us directly
                            </p>
                            <a
                                href="mailto:manav.gusain@gmail.com"
                                className="text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
                            >
                                manav.gusain@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[65%]">
                    <div className="mb-10">
                        {/*<span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold block mb-2">
                            Got Questions?
                        </span>*/}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-zinc-950">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <ul className="border-t border-zinc-200">
                        {faqItems.map((item, index) => (
                            <li
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
                                    className="w-full text-left py-4 flex items-center justify-between group transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-lg"
                                >
                                    <span className="text-base sm:text-lg font-medium tracking-tight pr-6 text-zinc-900 group-hover:text-zinc-600 transition-colors">
                                        {item.question}
                                    </span>

                                    <div
                                        className={`shrink-0 transition-transform duration-200 ${activeIndex === index
                                            ? "rotate-45 text-zinc-950"
                                            : "text-zinc-400 group-hover:text-zinc-600"
                                            }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                                        </svg>
                                    </div>
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
                                                duration: 0.25,
                                                ease: "easeOut",
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-5 pr-8 text-zinc-600 text-sm sm:text-base leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
