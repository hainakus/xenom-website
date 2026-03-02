"use client";

import { Shield, Cpu, Lock, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Memory Hardness",
    value: "~750 MB",
    desc: "The full genome dataset must be held in memory during mining, preventing lightweight ASIC implementations.",
    color: "text-purple-400",
    card: "card-glow",
    badge: "bg-purple-500/10 border-purple-500/30 text-purple-300",
  },
  {
    icon: Cpu,
    title: "ASIC Resistance",
    value: "Adaptive",
    desc: "Evolving mutation parameters and epoch-driven seed rotation make custom silicon optimization impractical.",
    color: "text-cyan-400",
    card: "card-cyan",
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
  },
  {
    icon: Shield,
    title: "Deterministic Verification",
    value: "O(n)",
    desc: "Any node can independently verify a block in bounded linear time — no additional trust assumptions required.",
    color: "text-emerald-400",
    card: "card-green",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
  },
  {
    icon: CheckCircle,
    title: "Adaptive Complexity",
    value: "Per Epoch",
    desc: "Mutation rounds and weighting shift every 200 blocks, continuously raising the bar for optimization attacks.",
    color: "text-amber-400",
    card: "card-glow",
    badge: "bg-amber-500/10 border-amber-500/30 text-amber-300",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 uppercase tracking-widest">
            Security Model
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Built for{" "}
            <span className="dna-gradient">Adversarial</span> Environments
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Genome-PoW layers biological complexity on top of cryptographic primitives — delivering robust, adaptive security that scales with the network.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {securityFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={`${f.card} rounded-2xl p-6`}>
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 flex-shrink-0 ${f.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-white">{f.title}</h3>
                      <span className={`px-2 py-0.5 text-xs font-mono font-semibold rounded border ${f.badge}`}>
                        {f.value}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fitness-based incentive row */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">🔬</span>
              Fitness-Based Incentive
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              By rewarding miners for producing high-fitness genome mutations, the network creates an
              economic incentive that naturally resists lazy or degenerate mining strategies.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Lazy miners earn lower rewards",
                "High-fitness mining requires genuine computation",
                "Fitness threshold adapts with the epoch",
                "No shortcut to high fitness without memory access",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-purple-400 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-cyan rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">🔒</span>
              Attack Resistance Summary
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { attack: "ASIC Mining", resistance: "High", color: "text-emerald-400" },
                { attack: "Precomputation", resistance: "Blocked by epoch seed rotation", color: "text-emerald-400" },
                { attack: "Low-memory devices", resistance: "Excluded (~750 MB required)", color: "text-emerald-400" },
                { attack: "Algorithm shortcuts", resistance: "Fitness scoring prevents it", color: "text-emerald-400" },
                { attack: "51% attacks", resistance: "Memory cost raises bar", color: "text-amber-400" },
              ].map((item) => (
                <div key={item.attack} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-slate-300">{item.attack}</span>
                  <span className={`text-xs font-semibold ${item.color}`}>{item.resistance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
