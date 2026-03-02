"use client";

import { Dna, Github, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-purple-500/10 bg-[#030609]/80 backdrop-blur-sm">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Dna className="w-7 h-7 text-purple-400" />
                <div className="absolute inset-0 blur-md bg-purple-500/30 rounded-full" />
              </div>
              <span className="font-bold text-lg tracking-wider text-white">
                XENO<span className="text-purple-400">MORPH</span>
              </span>
              <span className="text-xs text-purple-400/70 font-mono">V3.0.0</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Evolutionary Proof-of-Work based on the human genome reference (GRCh38).
              Memory-hard, ASIC-resistant, and continuously adaptive.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/hainakus/Xenomorph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://github.com/hainakus/Xenomorph/releases/tag/V3.0.0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                V3.0.0 Release
              </a>
            </div>
          </div>

          {/* Protocol */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Protocol</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Overview", href: "#overview" },
                { label: "Genome-PoW", href: "#genome-pow" },
                { label: "Fitness Scoring", href: "#fitness" },
                { label: "Epoch System", href: "#epoch" },
                { label: "Security Model", href: "#security" },
                { label: "Reward Mechanism", href: "#rewards" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-purple-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Build Instructions", href: "#build" },
                { label: "Source Code", href: "https://github.com/hainakus/Xenomorph" },
                { label: "V3.0.0 Checkout", href: "https://github.com/hainakus/Xenomorph/tree/V3.0.0" },
                { label: "GRCh38 Reference", href: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000001405.40/" },
                { label: "BLAKE3", href: "https://github.com/BLAKE3-team/BLAKE3" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-500 hover:text-cyan-300 transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.href.startsWith("http") && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-slate-600">XENOMORPH V3.0.0</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span className="text-xs font-mono text-slate-600">Genome-PoW</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span className="text-xs font-mono text-purple-500/60">GRCh38</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span className="text-xs font-mono text-cyan-500/60">BLAKE3</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Open source · MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
