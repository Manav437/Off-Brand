import { motion } from "framer-motion";

type CardContentType = {
    title: string;
    content: string;
    supportingFigure: string;
    supportingText: string;
};

const cardContent: CardContentType[] = [
    {
        title: "A team that lives on the frontier",
        content:
            "Off Brand is deliberately small. We hire exclusively designers and engineers that live in the future. No outsourcing, no corner cuts.",
        supportingFigure: "10/10",
        supportingText: "Clients say they would recommend Off Brand",
    },
    {
        title: "Tight feedback loops, constant momentum",
        content:
            "Work with a team that moves as fast as you do. We iterate quickly, deliver often, and stay aligned every step of the way.",
        supportingFigure: "1 Week",
        supportingText: "Time to meaningful progress",
    },
    {
        title: "An extension of your team",
        content:
            "Shipping at the pace your business requires. We embrace challenges and rise to meet the needs of our partners.",
        supportingFigure: "10+ Years",
        supportingText: "Average years of experience",
    },
];

const Card = ({
    cardTitle,
    cardContent,
    cardSupportingFigure,
    cardSupportingText,
    index,
}: {
    cardTitle: string;
    cardContent: string;
    cardSupportingFigure: string;
    cardSupportingText: string;
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.45,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            className="flex flex-col justify-between h-full p-8 rounded-[1.75rem] sm:rounded-[0.5rem]
                       border border-zinc-200/80 bg-zinc-50/60 hover:border-zinc-300 transition-colors"
        >
            <div className="mb-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight leading-snug text-zinc-950">
                    {cardTitle}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base sm:text-lg">
                    {cardContent}
                </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-zinc-200">
                <div className="text-3xl sm:text-4xl font-bold tracking-tighter text-zinc-950">
                    {cardSupportingFigure}
                </div>
                <div className="text-[11px] text-right max-w-[55%] uppercase tracking-wider font-semibold text-zinc-400 leading-tight">
                    {cardSupportingText}
                </div>
            </div>
        </motion.div>
    );
};

const ProcessHighlightsSection = () => {
    return (
        <section id="process" className="w-full max-w-[1400px] mx-auto px-6 py-20 md:py-28">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
            >
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold block mb-2">
                    How We Work
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-zinc-950">
                    A process built for shipping interfaces fast.
                    <span className="text-zinc-400 ml-2 font-normal block sm:inline">
                        Zero compromises.
                    </span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {cardContent.map((card, idx) => (
                    <Card
                        key={idx}
                        index={idx}
                        cardTitle={card.title}
                        cardContent={card.content}
                        cardSupportingFigure={card.supportingFigure}
                        cardSupportingText={card.supportingText}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProcessHighlightsSection;
