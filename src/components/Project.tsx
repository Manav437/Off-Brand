import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import p1 from "../assets/project-1.jpeg";
import p2 from "../assets/project-2.webp";
import p3 from "../assets/project-3.webp";
import p4 from "../assets/project-4.webp";
import p5 from "../assets/project-5.jpeg";
import p6 from "../assets/project-6.jpeg";

type BgCardProps = {
    img: string;
};

const gridRowVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

const ArrowIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 256 256">
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
);

const SectionGrid = () => {
    return (
        <section className="w-full md:w-[99%] mx-auto space-y-4">
            <motion.div
                variants={gridRowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-[70fr_30fr] gap-4"
            >
                <BgCard img={p1} title="Project One" />
                <BgCard img={p2} title="Project Two" />
            </motion.div>

            <motion.div
                variants={gridRowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <BgCard img={p3} title="Project Three" />
                <BgCard img={p4} title="Project Four" />
            </motion.div>

            <motion.div
                variants={gridRowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-[30fr_70fr] gap-4"
            >
                <BgCard img={p5} title="Project Five" />
                <BgCard img={p6} title="Project Six" />
            </motion.div>
        </section>
    );
};

const BgCard = ({ img, title }: { img: string; title: string }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-[2rem] h-[400px] md:h-[500px] lg:h-[600px] bg-zinc-100 cursor-pointer"
        >
            <img
                src={img}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-8">
                <p className="flex items-center gap-2 text-white text-xl font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {title}
                    <ArrowIcon className="h-4" />
                </p>
            </div>
        </motion.div>
    );
};

const Project = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section
            ref={containerRef}
            className="w-full mx-auto px-6 py-20 relative"
        >
            <div className="overflow-hidden mb-[-2rem] md:mb-[-3rem]">
                <motion.h1
                    style={{ y }}
                    className="text-[15vw] md:text-[26vw] font-semibold leading-[0.9] text-zinc-800 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] select-none text-center"
                >
                    Projects
                </motion.h1>
            </div>
            <SectionGrid />
        </section>
    );
};

export default Project;
