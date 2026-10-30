import { motion } from "framer-motion";
import p1 from "../assets/project-1.jpeg";
import p2 from "../assets/project-2.webp";
import p3 from "../assets/project-3.webp";
import p4 from "../assets/project-4.webp";
import p5 from "../assets/project-5.jpeg";
import p6 from "../assets/project-6.jpeg";

interface ProjectItem {
    img: string;
    title: string;
    category: string;
}

const projects: ProjectItem[] = [
    {
        img: p1,
        title: "Lensboard",
        category: "Digital Flagship Experience",
    },
    {
        img: p2,
        title: "Utility",
        category: "Venture Brand Identity",
    },
    {
        img: p3,
        title: "MidFunnel",
        category: "Design System & UI",
    },
    {
        img: p4,
        title: "Superintelligent",
        category: "Fintech Growth Platform",
    },
    {
        img: p5,
        title: "Tangentia",
        category: "AI Automation Interface",
    },
    {
        img: p6,
        title: "Ether Sight",
        category: "Esports Interactive Hub",
    },
];

const ArrowIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 256 256">
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
);

const BgCard = ({ project }: { project: ProjectItem }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] h-[340px] sm:h-[460px] lg:h-[540px] bg-zinc-100 cursor-pointer"
        >
            <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-all duration-300 md:opacity-90 md:group-hover:opacity-100 flex flex-col justify-end p-6 sm:p-8">
                <div className="transform transition-transform duration-300 md:translate-y-2 md:group-hover:translate-y-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-1">
                        {project.category}
                    </span>
                    <h3 className="flex items-center gap-2 text-white text-xl sm:text-2xl font-semibold">
                        <span>{project.title}</span>
                        <ArrowIcon className="h-4 w-4 opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                </div>
            </div>
        </motion.div>
    );
};

const Project = () => {
    return (
        <section id="work" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-20 md:py-28 relative">
            <div className="text-center mb-6 sm:mb-10">
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold block mb-2">
                    Selected Work
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950">
                    Case Studies & Engagements
                </h2>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-[68fr_32fr] gap-4">
                    <BgCard project={projects[0]} />
                    <BgCard project={projects[1]} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <BgCard project={projects[2]} />
                    <BgCard project={projects[3]} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[32fr_68fr] gap-4">
                    <BgCard project={projects[4]} />
                    <BgCard project={projects[5]} />
                </div>
            </div>
        </section>
    );
};

export default Project;
