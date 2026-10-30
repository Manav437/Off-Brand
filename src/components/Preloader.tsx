import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DitherBackground } from "./DitherBackground";

const Preloader = ({ isReady, onComplete }: { isReady: boolean; onComplete: () => void }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // If assets are ready, swiftly complete the counter; otherwise smooth progress
                const increment = isReady
                    ? Math.max(8, Math.floor((100 - prev) / 2))
                    : prev < 70
                    ? Math.floor(Math.random() * 4) + 3
                    : 2;
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return next;
            });
        }, 14);

        return () => clearInterval(interval);
    }, [isReady]);

    useEffect(() => {
        if (counter >= 100) {
            const timeout = setTimeout(onComplete, 200);
            return () => clearTimeout(timeout);
        }
    }, [counter, onComplete]);

    const words = ["OFF", "BRAND"];

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                y: "-100%",
                transition: {
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                },
            }}
            className="fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
            <DitherBackground variant="dark" fullscreen />
            <div className="relative flex flex-col items-center gap-4 z-10">
                <div className="flex gap-4 overflow-hidden py-2">
                    {words.map((word, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.33, 1, 0.68, 1],
                                delay: idx * 0.08,
                            }}
                            className="text-white text-6xl md:text-8xl font-serif font-bold tracking-tighter"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                <div className="w-48 h-[1px] bg-white/10 mt-8 relative overflow-hidden rounded-full">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-white"
                        style={{ width: `${counter}%` }}
                    />
                </div>

                <span className="mt-4 text-white/40 font-mono text-xs tracking-widest uppercase">
                    {counter}%
                </span>
            </div>
        </motion.div>
    );
};

export default Preloader;
