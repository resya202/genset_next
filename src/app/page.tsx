"use client";

import CoverImage from "./components/coverImage";
import LenisProvider from "./provider/lenisProvider";
import dynamic from "next/dynamic";
import { homeCoverImage } from "./translations/home";
import LogoMarquee from "./components/logoMarquee";

const Hero = dynamic(() => import("./components/hero"), {
  loading: () => <div>Loading Hero...</div>,
});

const Features = dynamic(() => import("./components/features"), {
  loading: () => <div>Loading Features...</div>,
});

const FAQ = dynamic(() => import("./components/FAQ"), {
  loading: () => <div>Loading FAQ...</div>,
});

const Testimonials = dynamic(() => import("./components/testimonials"), {
  loading: () => <div>Loading Testimonials...</div>,
});

const ProductList = dynamic(() => import("./components/productList"), {
  loading: () => <div>Loading Product List...</div>,
});

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <LenisProvider
        opts={{
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        }}
      />

      <CoverImage
        imageSrc="/FAQ/IMG_7299.webp"
        translationObject={homeCoverImage}
      />
      <Hero />
      <div className="max-w-[1480px] m-auto">
        {/* Lazy-loaded components */}
        <Features />
        <FAQ />
        <Testimonials />

        <LogoMarquee title="Some of our valuable clients" />
        <ProductList />
      </div>
    </div>
  );
}
