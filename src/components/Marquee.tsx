import onePassword from "../assets/logos/1password-logo.png";
import achieve from "../assets/logos/achieve-logo.png";
import ditto from "../assets/logos/ditto-logo.png";
import iddqd from "../assets/logos/iddqd-logo.png";
import offbrand from "../assets/logos/offbrand-logo.png";
import amiri from "../assets/logos/amiri-logo.png";
import redbull from "../assets/logos/redbull-logo.svg";
import riot from "../assets/logos/riot-logo.svg";
import subaru from "../assets/logos/subaru-logo.webp";
import tangentia from "../assets/logos/tangentia-logo.png";

const marqueeItems = [
    { name: "1Password", logo: onePassword },
    { name: "Achieve", logo: achieve },
    { name: "Ditto", logo: ditto },
    { name: "IDDQD Capital", logo: iddqd },
    { name: "Off Brand", logo: offbrand },
    { name: "Amiri", logo: amiri },
    { name: "Red Bull", logo: redbull },
    { name: "Riot Games", logo: riot },
    { name: "Subaru", logo: subaru },
    { name: "Tangentia", logo: tangentia },
];

const Marquee = () => {
    return (
        <section className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center overflow-hidden py-8 md:py-10 border-y border-gray-100 bg-white">
            <div className="w-full md:w-[25%] lg:w-[15%] shrink-0 px-6 mb-6 md:mb-0 z-20 bg-white">
                <span className="text-xs lg:text-sm font-medium text-black/50 uppercase tracking-widest leading-tight block">
                    Trusted by <br className="hidden md:block" /> exciting
                    brands
                </span>
            </div>

            <div className="relative w-full md:w-[75%] lg:w-[85%] overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-16 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-marquee gap-12 md:gap-16 items-center py-2 will-change-transform">
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <img
                            key={idx}
                            src={item.logo}
                            alt={item.name}
                            className="h-5 md:h-6 w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
