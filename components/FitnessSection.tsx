"use client";

import { BarChart3, Activity, Layers } from "lucide-react";

const metrics = [
  {
    icon: Activity,
    name: "Shannon Entropy",
    desc: "Measures randomness and information content across the mutated genome fragment.",
    color: "text-purple-400",
    bar: 85,
    barColor: "bg-purple-500",
  },
  {
    icon: BarChart3,
    name: "GC Content Balance",
    desc: "Evaluates the ratio of guanine-cytosine pairs — a biological stability indicator.",
    color: "text-cyan-400",
    bar: 70,
    barColor: "bg-cyan-500",
  },
  {
    icon: Layers,
    name: "Pattern / Cycle Detection",
    desc: "Penalizes repetitive or degenerate patterns that reduce biological diversity.",
    color: "text-emerald-400",
    bar: 60,
    barColor: "bg-emerald-500",
  },
];

export default function FitnessSection() {
  return (
    <section id="fitness" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4 uppercase tracking-widest">
            Fitness Scoring
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Lightweight{" "}
            <span className="dna-gradient">Fitness Score</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Keeps validation fast while incentivizing miners to produce high-quality genome mutations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: metrics */}
          <div className="flex flex-col gap-6">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.name} className="card-glow rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 ${m.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white">{m.name}</h3>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">{m.desc}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${m.barColor} rounded-full`}
                        style={{ width: `${m.bar}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-slate-500">w{metrics.indexOf(m) + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: formula + type */}
          <div className="flex flex-col gap-6">
            <div className="card-green rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4">Fitness Type</h3>
              <div className="code-block mb-4">
                <span className="text-amber-400">fitness_value</span>: u32
              </div>
              <p className="text-xs text-slate-500">
                A single 32-bit unsigned integer representing the overall fitness of the mutated genome fragment.
                Lightweight enough for fast consensus verification.
              </p>
            </div>

            <div className="card-green rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4">Example Fitness Model</h3>
              <div className="code-block">
                <div className="text-slate-500">{"// Weighted combination"}</div>
                <div className="mt-2">
                  fitness = <span className="text-amber-400">w1</span> * entropy
                </div>
                <div className="pl-10">
                  + <span className="text-amber-400">w2</span> * gc_score
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Weights <code className="text-amber-400">w1</code> and <code className="text-amber-400">w2</code> are
                adjusted adaptively per epoch, ensuring the network evolves its scoring over time.
              </p>
            </div>

            <div className="card-glow rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-3">Why Fitness Matters</h3>
              <ul className="flex flex-col gap-2">
                {[
                  "Incentivizes high-quality mutation strategies",
                  "Prevents degenerate or trivial mining shortcuts",
                  "Drives continuous evolutionary improvement",
                  "Validated deterministically in O(n) time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
