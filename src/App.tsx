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
import "./App.css";

function App() {
    return (
        <div className="relative min-h-screen w-full font-sans antialiased overflow-x-hidden">
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
        </div>
    );
}

export default App;
