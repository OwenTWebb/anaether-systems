import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-blue-500 uppercase mb-8 font-medium">
          About
        </p>
        <h1 className="text-4xl sm:text-5xl font-light text-white/90 leading-tight mb-12">
          Coming Soon
        </h1>
        <p className="text-white/30 text-base font-light leading-relaxed">
          This section is under construction.
        </p>
      </div>
    </main>
  );
}
