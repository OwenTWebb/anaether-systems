import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const pillars = [
  {
    index: "01",
    title: "Autonomous Flight",
    body: "GPS waypoint missions executed without a pilot. Takeoff, route, landing — fully onboard, fully independent.",
  },
  {
    index: "02",
    title: "Machine Vision",
    body: "Edge inference running onboard. Platforms that don't just navigate — they perceive, classify, and react in real time.",
  },
  {
    index: "03",
    title: "Intelligent Systems",
    body: "Sensor fusion, adaptive control, and AI-layer architecture built into small, deployable hardware. No ground station required.",
  },
];

const stats = [
  { label: "Class", value: "Micro / 3\"" },
  { label: "AUW", value: "~235g" },
  { label: "Endurance", value: "45–50 min" },
  { label: "GPS", value: "UBLOX M10" },
  { label: "Firmware", value: "iNav" },
  { label: "Battery", value: "3S Li-ion" },
  { label: "Radio", value: "ELRS" },
  { label: "Status", value: "Flying" },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Screen 1 — Hero */}
      <Hero />

      {/* Screen 2 — Pillars */}
      <section className="relative min-h-screen flex items-center py-32 px-6 overflow-hidden">
        {/* Grid bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Blue glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto w-full relative">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <p className="text-xs tracking-[0.3em] text-blue-500 uppercase font-medium">
                What we build
              </p>
              <div className="flex-1 h-px bg-blue-500/20" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.04]">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.index} delay={i * 120}>
                <div className="bg-[#0a0a0f] p-8 h-full">
                  <span className="text-xs font-mono text-blue-500/50 tracking-widest mb-6 block">
                    {pillar.index}
                  </span>
                  <h3 className="text-base font-medium text-white mb-4 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/35 font-light leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="text-xs text-white/15 font-light mt-12 tracking-widest uppercase font-mono text-right">
              US — Based. Global — Application.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Screen 3 — Autonimo spotlight */}
      <section className="relative min-h-screen flex items-center py-32 px-6 overflow-hidden">
        {/* Diagonal line accent */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-xs tracking-[0.3em] text-blue-500 uppercase font-medium">
                Currently Flying
              </p>
              <div className="flex-1 h-px bg-blue-500/20" />
              <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
                Build 001
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-5xl sm:text-7xl font-light text-white/90 tracking-tight mb-4 mt-8">
              Autonimo
            </h2>
            <p className="text-white/30 text-sm font-light mb-12 max-w-lg leading-relaxed">
              One of the smallest M10 GPS-equipped quads in existence. Custom
              3D-printed frame. Fully autonomous waypoint missions. Built to
              prove that reliable autonomy doesn&apos;t need an enterprise budget.
            </p>
          </ScrollReveal>

          {/* Stats grid */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04] mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0a0a0f] px-6 py-5">
                  <p className="text-[9px] font-mono tracking-widest text-white/20 uppercase mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-white/70 font-light">{stat.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link
              href="/builds"
              className="inline-flex items-center gap-3 text-xs tracking-widest text-blue-500 uppercase hover:text-white transition-colors duration-200 group"
            >
              View full build
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Screen 4 — Closing + contact */}
      <section className="relative py-32 px-6 border-t border-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-blue-500 uppercase font-medium mb-10">
              Contact
            </p>
            <p className="text-3xl sm:text-4xl font-light text-white/80 leading-snug mb-12">
              The gap between what autonomous technology can do and where it&apos;s
              being used is closing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <a
              href="mailto:contact@anaether.systems"
              className="text-lg sm:text-xl font-light text-white/50 hover:text-blue-400 transition-colors duration-200 tracking-wide"
            >
              contact@anaether.systems
            </a>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="mt-20 flex items-center gap-4">
              <div className="flex-1 h-px bg-white/[0.04]" />
              <p className="text-[10px] font-mono tracking-widest text-white/15 uppercase">
                Building in the open
              </p>
              <div className="flex-1 h-px bg-white/[0.04]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.04] py-8 px-6 text-center">
        <p className="text-white/15 text-xs tracking-widest uppercase font-mono">
          © {new Date().getFullYear()} Anaether Systems
        </p>
      </footer>
    </main>
  );
}
