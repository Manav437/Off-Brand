import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const toggleDropdown = () => setOpen(!open);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                open &&
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <motion.nav
            ref={navRef}
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="
                fixed top-8 left-1/2 z-[100]
                flex w-[95%] max-w-3xl items-center justify-between
                border border-white/20 rounded-full p-2 px-2
                bg-white/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
                ring-1 ring-black/5
            "
        >
            <div className="flex items-center">
                <h1 className="text-xl font-bold tracking-tighter cursor-pointer pl-3">
                    O / B
                </h1>
            </div>

            <div className="flex items-center gap-2">
                <MenuIcon toggle={toggleDropdown} isOpen={open} />
                <div className="h-6 w-[1px] bg-black/10 mx-1 md:block hidden" />

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                        group relative overflow-hidden
                        flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold
                        bg-[#1a1a1a] text-white transition-all duration-200
                        shadow-[0px_0px_2px_1px_rgba(255,255,255,0.2)_inset]
                    "
                >
                    <span>Book a call</span>
                    <ArrowIcon />
                </motion.button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 2, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 2, scale: 0.99 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="
                            absolute top-full left-0 mt-4 w-full
                            bg-black/50 backdrop-blur-xl border border-white/40
                            rounded-[2rem] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)]
                            ring-1 ring-black/5 overflow-hidden
                        "
                    >
                        <ul className="flex flex-col gap-1 text-sm font-semibold text-white">
                            {["About", "Services", "Case Studies"].map(
                                (item) => (
                                    <motion.li
                                        key={item}
                                        whileHover={{
                                            x: 2,
                                        }}
                                        className="cursor-pointer rounded-2xl px-5 py-4 transition-colors hover:bg-zinc-600"
                                    >
                                        {item}
                                    </motion.li>
                                ),
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

interface MenuIconProps {
    toggle: () => void;
    isOpen: boolean;
}

const MenuIcon = ({ toggle, isOpen }: MenuIconProps) => (
    <button
        onClick={toggle}
        type="button"
        aria-label="Toggle menu"
        className="p-2 hover:bg-black/5 rounded-full transition-colors"
    >
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="overflow-visible"
        >
            <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                className={`transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45" : "-translate-y-[6px]"
                }`}
            />

            <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                className={`transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                }`}
            />

            <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                className={`transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45" : "translate-y-[6px]"
                }`}
            />
        </svg>
    </button>
);

const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        viewBox="0 0 256 256"
    >
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
);

export default Navbar;
