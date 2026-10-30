const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full pt-16 sm:pt-20 border-t border-zinc-100 bg-white">
            <div className="overflow-hidden select-none pointer-events-none px-4">
                <p className="text-[14vw] font-bold leading-none text-center text-zinc-900/[0.1] tracking-normal">
                    OFF BRAND
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-zinc-500">
                {/*<div className="order-2 md:order-1 flex items-center gap-4">
                    <span>© {currentYear} OFF BRAND. All rights reserved.</span>
                </div>*/}

                <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2 order-1 md:order-2">
                    {[
                        "Terms of Service",
                        "Privacy Policy",
                        "Cookie Policy",
                    ].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                            className="
                                relative cursor-pointer text-zinc-700 font-medium
                                transition-colors duration-200 hover:text-zinc-950
                                after:absolute after:left-0 after:-bottom-0.5
                                after:h-[1px] after:w-0 after:bg-zinc-900
                                after:transition-all after:duration-200
                                hover:after:w-full
                            "
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="order-1 md:order-3">
                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-950 transition-colors px-3 py-1.5 rounded-full hover:bg-zinc-100"
                    >
                        <span>Back to top</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
