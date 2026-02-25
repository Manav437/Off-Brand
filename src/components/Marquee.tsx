const marqueeItems: string[] = [
    "obscura",
    "Midfunnel",
    "Achieve",
    "momentum",
    "Tangent",
    "Utility",
    "Superintelligent",
    "Ditto",
    "ClosetNow",
    "IDDQD Capital",
];

const Marquee = () => {
    return (
        <section className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-start md:items-center overflow-hidden py-8 md:py-10 border-y border-gray-100 bg-white">
            <div className="w-full md:w-[25%] lg:w-[15%] shrink-0 px-6 mb-6 md:mb-0 z-20 bg-white">
                <span className="text-xs lg:text-sm font-medium text-black/50 uppercase tracking-widest leading-tight block">
                    Trusted by <br className="hidden md:block" /> exciting
                    brands
                </span>
            </div>

            <div className="relative w-full md:w-[75%] lg:w-[85%] overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-16 md:w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-20 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="flex w-max animate-marquee gap-12 md:gap-16 items-center py-2 will-change-transform">
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <span
                            key={idx}
                            className="text-lg md:text-xl lg:text-2xl font-bold text-gray-400 hover:text-black transition-colors duration-300 cursor-default uppercase tracking-tighter whitespace-nowrap"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
