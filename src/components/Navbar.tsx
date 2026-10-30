import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#about" },
    { name: "Case Studies", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
];

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

    const handleLinkClick = (href: string) => {
        setOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            ref={navRef}
            initial={{ y: -20, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
                fixed top-6 left-1/2 z-[100]
                flex w-[92%] max-w-3xl items-center justify-between
                border border-black/5 rounded-full p-2 px-3
                bg-white/75 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                ring-1 ring-black/5
            "
        >
            <div className="flex items-center">
                <a
                    href="#"
                    className="text-xl font-bold tracking-tighter cursor-pointer pl-3 text-zinc-950 hover:opacity-80 transition-opacity"
                >
                    O{" "}/{" "}B
                </a>
            </div>

            <div className="flex items-center gap-2">
                <MenuIcon toggle={toggleDropdown} isOpen={open} />
                <div className="h-6 w-[1px] bg-zinc-200 mx-1 md:block hidden" />

                <button
                    onClick={() => handleLinkClick("#contact")}
                    className="
                        group relative flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold
                        bg-zinc-950 text-white transition-all duration-200 hover:bg-zinc-800
                        shadow-sm active:scale-95
                    "
                >
                    <span>Book a call</span>
                    <ArrowIcon />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.99 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="
                            absolute top-full left-0 mt-3 w-full
                            bg-white backdrop-blur-xl border border-zinc-200/80
                            rounded-[1.5rem] p-3 shadow-xl
                            ring-1 ring-black/5 overflow-hidden
                        "
                    >
                        <ul className="flex flex-col gap-1 text-sm font-semibold text-zinc-600">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(item.href);
                                        }}
                                        className="group/item flex items-center justify-between cursor-pointer rounded-2xl px-4 py-3 transition-colors hover:bg-zinc-200/50 hover:text-zinc-950"
                                    >
                                        <span>{item.name}</span>
                                        <ArrowIcon className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-zinc-400" />
                                    </a>
                                </li>
                            ))}
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
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="p-2 hover:bg-black/5 rounded-full transition-colors text-zinc-900"
    >
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="overflow-visible"
        >
            <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                className={`transition-all duration-200 origin-center ${isOpen ? "rotate-45" : "-translate-y-[6px]"
                    }`}
            />
            <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                className={`transition-all duration-200 ${isOpen ? "opacity-0" : ""
                    }`}
            />
            <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                className={`transition-all duration-200 origin-center ${isOpen ? "-rotate-45" : "translate-y-[6px]"
                    }`}
            />
        </svg>
    </button>
);

const ArrowIcon = ({ className }: { className?: string }) => (
    <div className={`transition-transform duration-200 group-hover:translate-x-0.5 ${className ?? ""}`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            viewBox="0 0 256 256"
        >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
        </svg>
    </div>
);

export default Navbar;
