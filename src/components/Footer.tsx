const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className="w-full pt-20 ">
            <div className="overflow-hidden select-none pointer-events-none">
                <h1
                    className="
                    text-[22vw] font-bold leading-[0.8] text-center text-zinc-800
                    tracking-tighter
                    [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]
                "
                >
                    Off / Brand
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
                <div className="order-2 md:order-1">
                    © {currentYear} OFF BRAND. All rights reserved.
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 order-1 md:order-2">
                    {[
                        "Terms of Service",
                        "Privacy Policy",
                        "Cookie Policy",
                    ].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                            className="
                                relative cursor-pointer text-zinc-900 font-medium
                                transition-colors duration-300 hover:text-zinc-500
                                after:absolute after:left-0 after:-bottom-1
                                after:h-[1px] after:w-0 after:bg-zinc-300
                                after:transition-all after:duration-300
                                hover:after:w-full
                            "
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer;
