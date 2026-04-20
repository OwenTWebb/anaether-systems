import Navbar from "@/components/Navbar";

const builds = [
  {
    name: "Autonimo",
    status: "Active Development",
    tagline: "Micro-class autonomous waypoint platform.",
    description:
      "Autonimo is a custom 3D-printed micro quad built from the ground up for fully autonomous GPS waypoint missions. At roughly 235g AUW on a 3-inch prop platform, it's engineered for efficiency — not speed. Powered by a SpeedyBee F405 Mini running iNav and a UBLOX M10 GPS, it takes off, executes a programmed route, and lands without any pilot input. A 3S Li-ion pack built from Molicel P26A cells targets 45–50 minutes of flight time, making it one of the longest-endurance platforms at this size class. Initial waypoint missions are flying. Tuning, range testing, and mission refinement are ongoing.",
    specs: [
      { label: "Frame", value: "Custom 3D-printed, ~3\" class" },
      { label: "Flight Controller", value: "SpeedyBee F405 Mini / iNav" },
      { label: "GPS", value: "UBLOX M10" },
      { label: "Motors", value: "1104 4300KV" },
      { label: "Battery", value: "3S Li-ion — Molicel P26A" },
      { label: "Target Endurance", value: "45–50 min" },
      { label: "AUW", value: "~235g" },
      { label: "Radio", value: "ELRS / RadioMaster Pocket" },
    ],
    tags: ["Autonomous", "iNav", "GPS", "Micro"],
  },
];

export default function Builds() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-24">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-blue-500 uppercase mb-8 font-medium">
          Builds
        </p>
        <h1 className="text-4xl sm:text-5xl font-light text-white/90 leading-tight mb-16">
          Hardware we&apos;re building.
        </h1>

        <div className="flex flex-col gap-12">
          {builds.map((build) => (
            <div
              key={build.name}
              className="border border-white/[0.08] p-8 sm:p-10 hover:border-blue-500/20 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-medium text-white mb-1">
                    {build.name}
                  </h2>
                  <p className="text-sm text-white/40 font-light">
                    {build.tagline}
                  </p>
                </div>
                <span className="text-[10px] tracking-widest text-blue-500 uppercase border border-blue-500/30 px-3 py-1">
                  {build.status}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {build.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-widest text-white/30 uppercase border border-white/[0.08] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 font-light leading-relaxed mb-10 max-w-2xl">
                {build.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04]">
                {build.specs.map((spec) => (
                  <div key={spec.label} className="bg-[#0a0a0f] px-4 py-4">
                    <p className="text-[10px] tracking-widest text-white/25 uppercase mb-1">
                      {spec.label}
                    </p>
                    <p className="text-xs text-white/70 font-light">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
