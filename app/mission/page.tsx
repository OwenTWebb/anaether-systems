import Navbar from "@/components/Navbar";

export default function Mission() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-24">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-blue-500 uppercase mb-8 font-medium">
          Mission
        </p>
        <h1 className="text-3xl sm:text-4xl font-light text-white/90 leading-snug mb-12">
          Anaether Systems builds pilot-free aerial platforms for the real world.
        </h1>
        <div className="space-y-6 text-base text-white/50 font-light leading-relaxed">
          <p>
            No joystick. No operator in the loop. Just a mission, a route, and a machine that executes.
          </p>
          <p>
            Autonomous drone technology is one of the most versatile tools ever developed. A single platform can survey hundreds of acres, monitor critical infrastructure, deliver supplies to locations no vehicle can reach, support defence operations in environments too dangerous for human presence, or provide persistent aerial surveillance over a defined area — all without a pilot.
          </p>
          <p>
            We build the hardware and systems that make this possible at the smallest, most efficient scale achievable. Lightweight platforms. Long endurance. Precise navigation. Deployable anywhere.
          </p>
          <p>
            The applications are as open as the sky. We&apos;re focused on making the technology reliable enough to actually use.
          </p>
        </div>
      </div>
    </main>
  );
}
