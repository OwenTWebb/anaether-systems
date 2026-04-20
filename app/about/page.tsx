import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-24">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <p className="text-xs tracking-[0.3em] text-blue-500 uppercase font-medium">
            About
          </p>
          <div className="flex-1 h-px bg-blue-500/20" />
          <p className="text-[10px] tracking-widest text-white/15 uppercase font-mono">
            US
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-light text-white/90 leading-snug mb-12">
          Anaether exists because the gap between what autonomous technology can
          do and what it&apos;s actually being used for is too wide to ignore.
        </h1>

        <div className="space-y-6 text-base text-white/45 font-light leading-relaxed">
          <p>
            What started as a passion for building and flying eventually found
            direction. The more time spent working with GPS navigation, computer
            vision, and autonomous flight, the clearer it became that these
            tools had real, underserved applications — in agriculture,
            conservation, defence, and beyond — that weren&apos;t being
            addressed because the barrier to entry seemed too high.
          </p>
          <p>
            The approach is deliberately practical. Anaether builds with
            low-cost, readily available hardware and open-source firmware,
            proving that reliable autonomous systems don&apos;t require
            enterprise budgets or proprietary platforms. If it can&apos;t be
            understood, repaired, and operated by the person using it, it
            isn&apos;t done yet.
          </p>
          <p>
            The work is ongoing. The applications are expanding. And the only
            requirement is that it works in the real world.
          </p>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/[0.04]" />
          <p className="text-[10px] font-mono tracking-widest text-white/15 uppercase">
            Building in the open
          </p>
        </div>
      </div>
    </main>
  );
}
