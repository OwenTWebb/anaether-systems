export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 text-center">
      <p className="text-xs tracking-[0.3em] text-blue-500 uppercase mb-8 font-medium">
        Contact
      </p>
      <p className="text-white/40 text-sm mb-6 font-light">
        Inquiries, partnerships, and press.
      </p>
      <a
        href="mailto:contact@anaether.systems"
        className="text-xl sm:text-2xl font-light text-white hover:text-blue-400 transition-colors duration-200 tracking-wide"
      >
        contact@anaether.systems
      </a>
    </section>
  );
}
