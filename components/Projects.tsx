const projects = [
  {
    title: "Project Velos",
    description:
      "A lightweight autonomous aerial platform with onboard edge inference for real-time obstacle avoidance and mission planning.",
    tag: "Autonomous",
  },
  {
    title: "Argus Vision",
    description:
      "Multi-camera perception system using transformer-based object detection, designed for low-latency deployment on embedded hardware.",
    tag: "Computer Vision",
  },
  {
    title: "Meridian Control",
    description:
      "Adaptive control framework for dynamic systems, enabling robust state estimation and feedback under highly variable environmental conditions.",
    tag: "Control Systems",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-blue-500 uppercase mb-16 font-medium">
          Projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0a0a0f] p-8 flex flex-col gap-4 border border-white/[0.06] hover:border-blue-500/30 transition-colors duration-300"
            >
              <span className="text-[10px] tracking-widest text-blue-500 uppercase font-medium">
                {project.tag}
              </span>
              <h3 className="text-lg font-medium text-white">{project.title}</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed flex-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
