"use client";

import Head from "next/head";
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
      <Head>
        <title>Genset Distributor Indonesia - High Quality Genset Solutions</title>
        <meta name="description" content="Discover high-quality genset solutions for businesses in Indonesia. Genset Distributor Indonesia offers reliable and affordable genset products." />
        <meta name="keywords" content="genset, genset distributor, genset Indonesia, silent genset, genset solutions" />
        <link rel="canonical" href="https://yourdomain.com" />
        
        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Genset Distributor Indonesia - High Quality Genset Solutions" />
        <meta property="og:description" content="Discover high-quality genset solutions for businesses in Indonesia. Genset Distributor Indonesia offers reliable and affordable genset products." />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/path/to/cover-image.jpg" /> {/* Replace with actual image URL */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Genset Distributor Indonesia - High Quality Genset Solutions" />
        <meta name="twitter:description" content="Discover high-quality genset solutions for businesses in Indonesia. Genset Distributor Indonesia offers reliable and affordable genset products." />
        <meta name="twitter:image" content="https://yourdomain.com/path/to/cover-image.jpg" /> {/* Replace with actual image URL */}
      </Head>

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
