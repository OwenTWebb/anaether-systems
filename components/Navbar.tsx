"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#mission" },
  { label: "Builds", href: "#builds" },
  { label: "Lab", href: "#lab" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
      {/* Logo */}
      <span className="text-xs tracking-[0.3em] text-white font-medium uppercase">
        Anaether
      </span>

      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs tracking-widest text-white/60 hover:text-white uppercase transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden text-white/60 hover:text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          {open ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 border-b border-white/[0.06] px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-widest text-white/60 hover:text-white uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
