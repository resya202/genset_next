"use client";

import Lenis, { LenisOptions } from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

interface LenisProviderProps {
    opts?: LenisOptions;
}

export default function LenisProvider({ opts }: LenisProviderProps) {
    const [, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with options
        const instance = new Lenis(opts);

        // Save the instance in local state
        setLenis(instance);

        // Sync Lenis scroll events with ScrollTrigger
        instance.on("scroll", ScrollTrigger.update);

        // GSAP animation frame integration
        function raf(time: number) {
            instance.raf(time * 1000);
        }
        gsap.ticker.add(raf);

        // Disable lag smoothing
        gsap.ticker.lagSmoothing(0);

        return () => {
            // Cleanup on unmount
            gsap.ticker.remove(raf);
            instance.destroy();
            setLenis(null);
        };
    }, [opts]);

    return null;
}
