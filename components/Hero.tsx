"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-xs tracking-[0.4em] text-blue-400 uppercase mb-8 font-medium">
          Est. 2024
        </p>
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/logos/logo-stacked-dark.svg"
            alt="Anaether Systems"
            width={180}
            height={229}
            priority
          />
        </div>
        <p className="text-base sm:text-lg text-white/40 font-light max-w-md mx-auto tracking-wide">
          Not just another solution.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
