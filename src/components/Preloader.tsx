import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ isReady, onComplete }: { isReady: boolean; onComplete: () => void }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev < 99) return prev + 1;
                if (prev === 99 && isReady) return 100;
                return prev;
            });
        }, 20);

        if (counter === 100) {
            clearInterval(interval);
            setTimeout(onComplete, 500);
        }

        return () => clearInterval(interval);
    }, [isReady, counter, onComplete]);

    const words = ["OFF", "BRAND"];

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{
                y: "-100%",
                transition: {
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.2
                }
            }}
            className="fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="relative flex flex-col items-center gap-4">
                <div className="flex gap-4 overflow-hidden py-2">
                    {words.map((word, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1,
                                ease: [0.33, 1, 0.68, 1],
                                delay: idx * 0.1,
                            }}
                            className="text-white text-6xl md:text-8xl font-serif font-bold tracking-tighter"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                <div className="w-48 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${counter}%` }}
                        className="absolute inset-0 bg-white"
                    />
                </div>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-white/40 font-mono text-xs tracking-widest uppercase"
                >
                    {counter}%
                </motion.span>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at center, white 0%, transparent 70%)`,
                }}
            />
        </motion.div>
    );
};

export default Preloader;
