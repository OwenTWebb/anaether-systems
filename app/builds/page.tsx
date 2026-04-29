import Navbar from "@/components/Navbar";

const builds = [
  {
    name: "Autonimo",
    status: "Active Development",
    tagline: "Micro-class autonomous waypoint platform.",
    description:
      "Autonimo is a custom 3D-printed micro quad built from the ground up for fully autonomous GPS waypoint missions. At roughly 235g AUW on a 3-inch prop platform, it's engineered for efficiency — not speed. Equipped with a UBLOX M10 GPS — one of the smallest M10-equipped quads in existence — and a SpeedyBee F405 Mini running iNav, it takes off, executes a programmed route, and lands without any pilot input. A 3S Li-ion pack built from Molicel P26A cells targets 45–50 minutes of flight time, making it one of the longest-endurance platforms at this size class. Initial waypoint missions are flying. Tuning, range testing, and mission refinement are ongoing.",
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
  {
    name: "Long Range Vision Drone",
    status: "In Development",
    tagline: "7-inch open source long range FPV platform with real-time aerial computer vision.",
    description:
      "A 7-inch long range FPV drone engineered for real-time aerial computer vision and multi-mission intelligence work. The entire stack is open source and open protocol — ELRS 2.4GHz handles the control link (open source, encrypted binding phrase, sub-10ms latency), Walksnail Avatar Moonlight delivers HD digital FPV video on an open platform, and iNav provides GPS-enabled autonomous waypoint navigation and return-to-home. The primary mission target is vehicle counting: fly over a parking lot and autonomously classify and count cars in real time using a Roboflow YOLOv5n model running on an onboard Raspberry Pi Zero 2W. v1 architecture pipes the vision feed through a downward-angled analog camera to a ground VRX and into a laptop for live inference monitoring. v2 upgrades to a Raspberry Pi 4 with a Google Coral AI accelerator — fully local onboard inference, zero ground transmission dependency, and on-aircraft data logging. No ground station. No uplink required. The platform is intentionally modular: swap the model, swap the mission. Current and planned applications include surveillance and perimeter monitoring, defense and intelligence gathering, battlefield and area reconnaissance, livestock and agricultural health monitoring, infrastructure and pipeline inspection, and vehicle or personnel detection for security operations. Built as a reusable edge compute airframe, not a single-purpose tool.",
    specs: [
      { label: "Frame", value: "Mark4 7\" carbon fiber" },
      { label: "Flight Controller", value: "HGLRC F405 / iNav" },
      { label: "ESC", value: "HGLRC Zeus" },
      { label: "Motors", value: "2807 1400KV" },
      { label: "Props", value: "8\" triblade" },
      { label: "Video", value: "Walksnail Avatar Moonlight (open)" },
      { label: "Control Link", value: "ELRS 2.4GHz — encrypted, open source" },
      { label: "GPS", value: "HGLRC M100 M10 + compass" },
      { label: "Compute v1", value: "RPi Zero 2W / Roboflow YOLOv5n" },
      { label: "Compute v2", value: "RPi 4 + Google Coral — fully local" },
      { label: "Battery", value: "4S 2200mAh LiPo" },
      { label: "Primary Mission", value: "Aerial vehicle detection & counting" },
    ],
    tags: ["Computer Vision", "FPV", "ELRS", "iNav", "Open Source", "Surveillance"],
  },
  {
    name: "TinySub",
    status: "In Development",
    tagline: "Sub-$350 autonomous torpedo-style UUV.",
    description:
      "A compact torpedo-profile autonomous underwater vehicle designed for stealth recon and swarm applications. Built around simplicity — two thrusters (rear axial for propulsion, front transverse for yaw steering), variable buoyancy via peristaltic pump and syringe ballast system, and a surface bobber with ELRS receiver for RF comms that sidesteps the RF-through-water problem entirely. Saltwater-tolerant from day one with 316SS hardware, PETG hull, and double O-ring penetrations.",
    specs: [
      { label: "Hull", value: "3D-printed PETG torpedo profile" },
      { label: "Propulsion", value: "2x HobbyWater TD1.2 thrusters" },
      { label: "Depth Control", value: "Bar02 + peristaltic pump ballast" },
      { label: "Compute", value: "RPi Zero 2W + SpeedyBee F405 Mini" },
      { label: "Comms", value: "ELRS nano on surface bobber" },
      { label: "Target Depth", value: "10m (v1)" },
      { label: "Endurance", value: "~20 min" },
      { label: "Target BOM", value: "Under $350" },
    ],
    tags: ["Autonomous", "AUV", "Underwater", "Swarm"],
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
