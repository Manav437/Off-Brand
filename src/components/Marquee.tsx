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

const marqueeList = [...marqueeItems, ...marqueeItems];

const Marquee = () => {
    return (
        <section className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center overflow-hidden py-8 md:py-10 border-y border-zinc-100 bg-white">
            <div className="w-full md:w-[24%] lg:w-[18%] shrink-0 px-6 sm:px-8 mb-4 md:mb-0 z-20 bg-white">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide leading-relaxed block">
                    Trusted by <br className="hidden md:block" /> exciting brands
                </span>
            </div>

            <div className="group relative w-full md:w-[76%] lg:w-[82%] overflow-hidden flex">
                <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center gap-12 md:gap-16 pr-12 md:pr-16 py-2 will-change-transform">
                    {marqueeList.map((item, idx) => (
                        <div
                            key={`track1-${idx}`}
                            className="flex items-center justify-center shrink-0 h-8"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="max-h-5 sm:max-h-6 max-w-[120px] w-auto object-contain grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-200 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>

                <div
                    aria-hidden="true"
                    className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center gap-12 md:gap-16 pr-12 md:pr-16 py-2 will-change-transform"
                >
                    {marqueeList.map((item, idx) => (
                        <div
                            key={`track2-${idx}`}
                            className="flex items-center justify-center shrink-0 h-8"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="max-h-5 sm:max-h-6 max-w-[120px] w-auto object-contain grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-200 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
