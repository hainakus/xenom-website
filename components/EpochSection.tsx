"use client";

import { Clock, Hash, ArrowRight } from "lucide-react";

const epochUpdates = [
  { label: "Mutation Rounds", desc: "K(epoch) adjusts between 4–16" },
  { label: "Mutation Weighting", desc: "Relative probability of each mutation type" },
  { label: "Memory Weight", desc: "Dataset access patterns and caching strategy" },
  { label: "Fitness Weighting", desc: "w1, w2 coefficients for scoring" },
];

export default function EpochSection() {
  return (
    <section id="epoch" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4 uppercase tracking-widest">
            Epoch System
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Continuous{" "}
            <span className="dna-gradient">Evolution</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Every 200 blocks, the network updates its genome seed and mutation parameters — evolving deterministically while remaining fully verifiable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Epoch parameters */}
          <div className="card-glow rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Clock className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-white">Epoch Parameters</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between py-3 border-b border-white/5">
                <span className="text-sm text-slate-400">Epoch Length</span>
                <span className="text-sm font-mono font-bold text-amber-400">200 blocks</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Epoch Score</span>
                <div className="code-block text-xs mt-1">
                  median(fitness of last<br />200 SP-chain blocks)
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Next Seed</span>
                <div className="code-block text-xs mt-1">
                  blake3(epoch_score ‖<br />prev_epoch_seed)
                </div>
              </div>
            </div>
          </div>

          {/* Flow diagram */}
          <div className="card-cyan rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Hash className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white">Epoch Flow</h3>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { step: "Mine 200 blocks", sub: "Collect fitness scores from SP-chain", color: "border-purple-500/40 bg-purple-500/10 text-purple-300" },
                { step: "Compute median", sub: "epoch_score = median(fitness[])", color: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300" },
                { step: "Derive new seed", sub: "blake3(epoch_score ‖ prev_seed)", color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300" },
                { step: "Update parameters", sub: "Rounds, weights, memory, fitness", color: "border-amber-500/40 bg-amber-500/10 text-amber-300" },
                { step: "Next epoch begins", sub: "Network evolves forward", color: "border-pink-500/40 bg-pink-500/10 text-pink-300" },
              ].map((item, i, arr) => (
                <div key={item.step} className="flex flex-col gap-1">
                  <div className={`px-3 py-2.5 rounded-lg border text-xs font-semibold ${item.color}`}>
                    <div>{item.step}</div>
                    <div className="text-slate-500 font-normal font-mono mt-0.5">{item.sub}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex justify-center">
                      <ArrowRight className="w-3 h-3 text-slate-600 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* What updates per epoch */}
          <div className="card-glow rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-5">What Updates Per Epoch</h3>
            <div className="flex flex-col gap-4">
              {epochUpdates.map((u, i) => (
                <div key={u.label} className="flex gap-4 items-start group">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-xs font-mono font-bold text-amber-400 flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">{u.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{u.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-xs text-slate-500 leading-relaxed">
                The network evolves <span className="text-amber-400">continuously</span> while remaining
                fully <span className="text-cyan-400">deterministic</span> — any node can independently
                verify and reproduce every epoch transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
