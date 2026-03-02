"use client";

import { Database, RefreshCw, TrendingUp, Lock } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Fragment-Based Entropy",
    desc: "~3 billion genome bases across 22 chromosomes + X and Y, packed in 2-bit encoding into a ~750 MB memory-hard dataset.",
    color: "text-purple-400",
    card: "card-glow",
  },
  {
    icon: RefreshCw,
    title: "Deterministic Mutations",
    desc: "Genome fragments undergo K(epoch) ∈ [4,16] mutation rounds — Swap, Insert, Rotate, XOR, Shift — all fully deterministic.",
    color: "text-cyan-400",
    card: "card-cyan",
  },
  {
    icon: TrendingUp,
    title: "Fitness Scoring",
    desc: "Lightweight scoring via Shannon entropy, GC content balance, and pattern detection produces a fitness_value: u32 per block.",
    color: "text-emerald-400",
    card: "card-green",
  },
  {
    icon: RefreshCw,
    title: "Adaptive Epoch Updates",
    desc: "Every 200 blocks, epoch_score = median fitness updates mutation rounds, weighting, and the next genome seed via BLAKE3.",
    color: "text-amber-400",
    card: "card-glow",
  },
  {
    icon: TrendingUp,
    title: "Reward Multiplier",
    desc: "Miners are rewarded for optimization: multiplier = clamp(1 + (fitness/threshold)², 1, 2) on top of base_reward.",
    color: "text-pink-400",
    card: "card-cyan",
  },
  {
    icon: Lock,
    title: "Memory-Hard Design",
    desc: "The ~750 MB genome dataset requirement makes parallel ASIC attacks economically unfeasible and impractical.",
    color: "text-indigo-400",
    card: "card-green",
  },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 uppercase tracking-widest">
            Overview
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Genome-PoW{" "}
            <span className="dna-gradient">Combines</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            A multi-layered evolutionary consensus mechanism that unifies cryptographic security with biological complexity.
          </p>
        </div>

        {/* Formula highlight */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="card-glow rounded-2xl p-6 text-center">
            <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-3">Final PoW Formula</p>
            <div className="code-block text-center text-base sm:text-lg">
              final_hash = blake3(genome_i ‖ header_hash ‖ nonce)
            </div>
            <p className="text-xs text-slate-500 mt-3">Block valid when: <span className="text-cyan-400 font-mono">final_hash &lt; target</span></p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={`${f.card} rounded-2xl p-6 flex flex-col gap-4`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 ${f.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
