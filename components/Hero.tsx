"use client";

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
        <p className="text-xs tracking-[0.4em] text-blue-400 uppercase mb-6 font-medium">
          Est. 2024
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-none mb-6">
          ANAETHER
          <br />
          <span className="text-blue-500">SYSTEMS</span>
        </h1>
        <p className="text-base sm:text-lg text-white/40 font-light max-w-md mx-auto tracking-wide">
          Engineering autonomy at the edge of possibility.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
