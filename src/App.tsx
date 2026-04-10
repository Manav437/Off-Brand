import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import InfoSection from "./components/InfoSection";
import Project from "./components/Project";
import ProcessHighlightsSection from "./components/ProcessHighlightsSection";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import "./App.css";

function App() {
    const [isAssetsReady, setIsAssetsReady] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const handleLoad = () => setIsAssetsReady(true);

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <div className="relative min-h-screen w-full font-sans antialiased overflow-x-clip bg-white">
            <AnimatePresence mode="wait">
                {!showContent && (
                    <Preloader
                        key="loader"
                        isReady={isAssetsReady}
                        onComplete={() => setShowContent(true)}
                    />
                )}
            </AnimatePresence>

            {showContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Navbar />
                    <main>
                        <HeroSection />
                        <Marquee />
                        <div className="flex flex-col">
                            <InfoSection />
                            <Project />
                            <ProcessHighlightsSection />
                            <Pricing />
                            <FAQ />
                            <CTA />
                        </div>
                    </main>
                    <Footer />
                </motion.div>
            )}
        </div>
    );
}

export default App;
