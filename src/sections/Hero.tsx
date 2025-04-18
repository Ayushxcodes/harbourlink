"use client";

import Button from "@/components/Button";

export default function Hero() {
  return (
    <section id="Home" className="relative h-auto py-24 pt-[100px] lg:pt-[160px]">
      {/* Background Video */}
      <video
        className="absolute top-[100px] lg:top-[140px] left-0 w-full h-full object-cover z-0 opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/ship.mp4" type="video/mp4" />
      </video>

      {/* Overlay to improve contrast */}
      <div className="absolute lg:top-[140px] left-0 w-full h-full bg-black/40 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 container">
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full text-neutral-950 font-semibold">
            🚢🌊 Smarter Maritime Operations at Your Fingertips
          </div>
        </div>

        <h1 className="text-6xl md:text-6xl font-medium text-center mt-6 text-white">
          Real-time insights, fleet management and port logistics—simplified
        </h1>

        <p className="text-center text-xl text-white/80 mt-8 max-w-2xl mx-auto">
          Empowering maritime businesses with real-time fleet tracking, seamless compliance management, and data-driven insights for optimized operations.
        </p>

        <form className="flex flex-wrap gap-2 border border-white/40 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="Click this"
            placeholder="Click this--->"
            className="bg-transparent px-4 py-2 flex-1 min-w-[200px] w-full md:w-auto outline-none focus:outline-none text-white placeholder-white/60"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm" 
          >
            Contact Us
          </Button>
        </form>
      </div>
    </section>
  );
}
