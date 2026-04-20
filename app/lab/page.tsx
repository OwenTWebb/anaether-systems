import Navbar from "@/components/Navbar";

const sections = [
  {
    index: "01",
    title: "Machine Vision",
    body: "The next generation of Anaether platforms moves beyond GPS coordinates into active perception. Using a Jetson Nano running YOLOv8 with Roboflow-trained models, the goal is drones that don't just follow a programmed path — they understand what they're looking at. Object detection, classification, and real-time decision making, all onboard, without a ground station in the loop.",
    tags: ["Jetson Nano", "YOLOv8", "Roboflow", "Edge Inference"],
  },
  {
    index: "02",
    title: "Sensor Fusion",
    body: "Future builds integrate depth cameras, optical flow, and additional ranging sensors alongside GPS for environment-aware navigation. The architecture separates high-level compute from real-time flight control — the drone flies itself while the AI layer processes the world around it.",
    tags: ["Depth Camera", "Optical Flow", "LIDAR", "GPS Fusion"],
  },
  {
    index: "03",
    title: "Applications",
    body: "The vision stack opens up use cases that coordinates alone can't solve: autonomous livestock and wildlife monitoring, endangered species population surveys, habitat mapping, and conservation patrol. Areas where a drone that can see and react beats one that can only follow a route.",
    tags: ["Wildlife", "Conservation", "Habitat Mapping", "Surveillance"],
  },
];

export default function Lab() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-24 relative overflow-hidden">
      <Navbar />

      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-xs tracking-[0.3em] text-blue-500 uppercase font-medium">
            Lab
          </p>
          <div className="flex-1 h-px bg-blue-500/20" />
          <p className="text-[10px] tracking-widest text-white/15 uppercase font-mono">
            Research
          </p>
        </div>

        <h1 className="text-4xl sm:text-5xl font-light text-white/90 leading-tight mb-4">
          The long-term work.
        </h1>
        <p className="text-white/30 text-sm font-light leading-relaxed mb-20 max-w-xl">
          Research-grade builds pushing further into autonomy, perception, and
          intelligent systems. This is what comes after waypoints.
        </p>

        {/* Sections */}
        <div className="space-y-0">
          {sections.map((section, i) => (
            <div key={section.index}>
              <div className="grid grid-cols-[auto_1fr] gap-8 sm:gap-16 py-12">
                {/* Index */}
                <div className="pt-1">
                  <span className="text-xs font-mono text-blue-500/60 tracking-widest">
                    {section.index}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-lg font-medium text-white mb-4 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-sm text-white/45 font-light leading-relaxed mb-6 max-w-2xl">
                    {section.body}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {section.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono tracking-widest text-blue-400/50 uppercase border border-blue-500/15 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {i < sections.length - 1 && (
                <div className="h-px bg-white/[0.04]" />
              )}
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/[0.04]" />
          <p className="text-[10px] font-mono tracking-widest text-white/15 uppercase">
            Active Research
          </p>
        </div>
      </div>
    </main>
  );
}
