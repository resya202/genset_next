"use client";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Statistics from "./components/statistics";

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Statistics />
    </div>
  );
}
