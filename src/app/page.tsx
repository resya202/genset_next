"use client";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import LenisProvider from "./provider/lenisProvider";
import FAQ from "./components/FAQ";
import ProductList from "./components/productList";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="font-sans antialiased pb-20">
      <LenisProvider
        opts={{
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        }}
      />
      <Navbar />
      <Hero />
      <Features />
      <FAQ />

      <Testimonials />
      <ProductList />
    </div>
  );
}
