export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-3xl mx-auto">
      <p className="text-xs tracking-[0.3em] text-blue-500 uppercase mb-8 font-medium">
        About
      </p>
      <p className="text-2xl sm:text-3xl font-light text-white/90 leading-relaxed">
        Anaether Systems builds autonomous platforms where precision engineering
        meets machine intelligence.
      </p>
      <div className="mt-8 space-y-4 text-white/50 text-base font-light leading-relaxed">
        <p>
          We design systems that operate independently in complex, real-world
          environments — from aerial vehicles to embedded perception networks.
        </p>
        <p>
          Our work spans hardware integration, computer vision, and control
          theory, unified by a commitment to reliability in conditions that
          demand it most.
        </p>
      </div>
    </section>
  );
}
