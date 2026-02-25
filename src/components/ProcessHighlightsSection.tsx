import { motion } from "framer-motion";

type CardContentType = {
    title: string;
    content: string;
    supportingFigure: string;
    supportingText: string;
};

type CardProps = {
    cardTitle: string;
    cardContent: string;
    cardSupportingFigure: string;
    cardSupportingText: string;
};

const cardContent: CardContentType[] = [
    {
        title: "A team that lives on the Frontier",
        content:
            "Off Brand is deliberately small. We hire exclusively designers and engineers that live in the future. No outsourcing, no corner cuts.",
        supportingFigure: "10/10",
        supportingText: "Clients say they would recommend Off Brand",
    },
    {
        title: "Tight Feedback Loops, Constant Momentum",
        content:
            "Work with a team that moves as fast as you do. We iterate quickly, deliver often, and stay aligned every step of the way.",
        supportingFigure: "1 Week",
        supportingText: "Time to meaningful Progress",
    },
    {
        title: "An extension of your Team",
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
}: CardProps & { index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.21, 0.45, 0.32, 0.9],
            }}
            className="flex flex-col justify-between h-full p-8
                       bg-zinc-500/5 backdrop-blur-xl"
        >
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">
                    {cardTitle}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-lg">
                    {cardContent}
                </p>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-black/5">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
                    className="text-4xl font-bold tracking-tighter text-black"
                >
                    {cardSupportingFigure}
                </motion.div>
                <div className="text-[10px] text-end max-w-[50%] uppercase tracking-[0.15em] font-bold text-black/40 leading-tight">
                    {cardSupportingText}
                </div>
            </div>
        </motion.div>
    );
};

const ProcessHighlightsSection = () => {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-6 py-32 md:py-48">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mb-20"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
                    A process built for shipping interfaces fast.
                    <span className="text-zinc-400 mt-2">
                        {" "}
                        Zero compromises.
                    </span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
