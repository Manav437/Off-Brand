import { useEffect, useRef } from "react";

// 8x8 Bayer dithering matrix for authentic ordered dithering
const BAYER_8X8 = [
    [0, 32, 8, 40, 2, 34, 10, 42],
    [48, 16, 56, 24, 50, 18, 58, 26],
    [12, 44, 4, 36, 14, 46, 6, 38],
    [60, 28, 52, 20, 62, 30, 54, 22],
    [3, 35, 11, 43, 1, 33, 9, 41],
    [51, 19, 59, 27, 49, 17, 57, 25],
    [15, 47, 7, 39, 13, 45, 5, 37],
    [63, 31, 55, 23, 61, 29, 53, 21],
];

interface DitherBackgroundProps {
    className?: string;
    variant?: "monthly" | "custom" | "dark";
    /** When true, renders as a full-bleed layer (no rounded corners) */
    fullscreen?: boolean;
}

export const DitherBackground = ({
    className = "",
    variant = "monthly",
    fullscreen = false,
}: DitherBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const variantRef = useRef(variant);

    useEffect(() => {
        variantRef.current = variant;
    }, [variant]);

    const mousePosRef = useRef<{ x: number; y: number; active: boolean }>({
        x: 0.5,
        y: 0.5,
        active: false,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d", { willReadFrequently: false });
        if (!ctx) return;

        let animationFrameId: number;
        let isVisible = true;
        let time = 0;

        // Resolution for the pixelated dither grid (scaled up via CSS image-rendering: pixelated)
        const ditherWidth = 140;
        const ditherHeight = 160;
        canvas.width = ditherWidth;
        canvas.height = ditherHeight;

        const imgData = ctx.createImageData(ditherWidth, ditherHeight);
        const data = imgData.data;

        // Check prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        // IntersectionObserver to pause rendering when scrolled out of view
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0.05 }
        );
        observer.observe(container);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                mousePosRef.current = {
                    x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
                    y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
                    active: true,
                };
            }
        };

        const handleMouseLeave = () => {
            mousePosRef.current.active = false;
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        const render = () => {
            if (!isVisible) {
                animationFrameId = requestAnimationFrame(render);
                return;
            }

            if (!prefersReducedMotion) {
                time += 0.012;
            }

            const mouse = mousePosRef.current;
            const mouseTargetX = mouse.active
                ? mouse.x
                : 0.5 + Math.sin(time * 0.6) * 0.28;
            const mouseTargetY = mouse.active
                ? mouse.y
                : 0.5 + Math.cos(time * 0.45) * 0.28;

            const isCustom = variantRef.current === "custom";
            const isDark = variantRef.current === "dark";

            let ptr = 0;
            for (let y = 0; y < ditherHeight; y++) {
                const ny = y / ditherHeight;
                const bayerRow = BAYER_8X8[y & 7];

                for (let x = 0; x < ditherWidth; x++) {
                    const nx = x / ditherWidth;
                    const bayerVal = bayerRow[x & 7] / 64; // [0, 1)

                    // Ambient harmonic wave motion
                    const wave1 =
                        Math.sin(nx * 4.5 + time * 1.1) *
                        Math.cos(ny * 3.5 - time * 0.7) *
                        0.2;
                    const wave2 =
                        Math.sin((nx + ny) * 5.2 + time * 0.8) * 0.16;
                    const wave3 =
                        Math.cos(nx * 7.0 - ny * 4.5 + time * 1.3) * 0.1;

                    // Light glow from mouse or floating orb
                    const dx = nx - mouseTargetX;
                    const dy = ny - mouseTargetY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const lightGlow = Math.max(0, 1 - dist * 1.7) * 0.38;

                    // Compute dark luminance field [0, 0.85]
                    let lum = 0.14 + wave1 + wave2 + wave3 + lightGlow;
                    if (lum < 0) lum = 0;
                    if (lum > 0.85) lum = 0.85;

                    // Bayer matrix thresholding — 5 levels for richer mid-tones
                    const thresholded = lum * 4.2 + (bayerVal - 0.5) * 0.5;
                    const step = Math.floor(Math.max(0, Math.min(4, thresholded)));

                    let r = 18, g = 18, b = 22; // base — dark zinc

                    if (!isCustom) {
                        // Monthly: lifted monochromatic zinc/steel
                        if (step === 1) {
                            r = 38; g = 39; b = 46;
                        } else if (step === 2) {
                            r = 72; g = 74; b = 84;
                        } else if (step === 3) {
                            r = 110; g = 112; b = 126;
                        } else if (step === 4) {
                            r = 155; g = 157; b = 172;
                        }
                    } else if (isDark) {
                        // Dark / Preloader: very deep void with subtle shimmer
                        if (step === 1) {
                            r = 28; g = 28; b = 34;
                        } else if (step === 2) {
                            r = 55; g = 56; b = 66;
                        } else if (step === 3) {
                            r = 90; g = 92; b = 108;
                        } else if (step === 4) {
                            r = 130; g = 132; b = 150;
                        }
                    } else {
                        // Custom: cool slate-blue lifted
                        if (step === 1) {
                            r = 28; g = 36; b = 50;
                        } else if (step === 2) {
                            r = 58; g = 80; b = 108;
                        } else if (step === 3) {
                            r = 100; g = 128; b = 158;
                        } else if (step === 4) {
                            r = 145; g = 170; b = 198;
                        }
                    }

                    data[ptr] = r;
                    data[ptr + 1] = g;
                    data[ptr + 2] = b;
                    data[ptr + 3] = 255;
                    ptr += 4;
                }
            }

            ctx.putImageData(imgData, 0, 0);

            if (!prefersReducedMotion) {
                animationFrameId = requestAnimationFrame(render);
            }
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`${fullscreen ? "absolute inset-0 overflow-hidden pointer-events-none" : "absolute inset-0 overflow-hidden pointer-events-none rounded-[1rem]"} ${className}`}
            aria-hidden="true"
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover scale-[1.03]"
                style={{
                    imageRendering: "pixelated",
                }}
            />
            {/* Vignette overlays for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-zinc-950/55" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(9,9,11,0.45)_100%)]" />
            {!fullscreen && <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1rem]" />}
        </div>
    );
};
