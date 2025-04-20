"use client";

export default function Hero() {
  return (
    <section id="Home" className="relative h-auto py-28 pt-[100px] lg:pt-[200px]">
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

        <h1 className="text-6xl md:text-6xl font-medium text-center mt-3 text-white">
          AI-Powered Insights
        </h1>

        <h2 className="text-center text-6xl text-white/90 mt-4 max-w-4xl mx-auto">
          Deriving The Green Shipping Era
          </h2>

        
      </div>
    </section>
  );
}
