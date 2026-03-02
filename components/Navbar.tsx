"use client";

import { useState, useEffect } from "react";
import { Menu, X, Dna } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Genome-PoW", href: "#genome-pow" },
  { label: "Epoch System", href: "#epoch" },
  { label: "Security", href: "#security" },
  { label: "Rewards", href: "#rewards" },
  { label: "Build", href: "#build" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050811]/90 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Dna className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <div className="absolute inset-0 blur-md bg-purple-500/40 group-hover:bg-purple-500/60 transition-all rounded-full" />
            </div>
            <span className="font-bold text-lg tracking-wider text-white">
              XENO<span className="text-purple-400">MORPH</span>
            </span>
            <span className="text-xs text-purple-400/70 font-mono mt-0.5">V3.0.0</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-purple-300 transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/hainakus/Xenomorph"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-1.5 text-sm font-semibold rounded-md bg-purple-600/20 border border-purple-500/40 text-purple-300 hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-200"
            >
              GitHub
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080d1a]/95 backdrop-blur-md border-b border-purple-500/20">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-400 hover:text-purple-300 transition-colors py-1 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/hainakus/Xenomorph"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 text-sm font-semibold rounded-md bg-purple-600/20 border border-purple-500/40 text-purple-300 text-center"
              onClick={() => setMenuOpen(false)}
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
