"use client";

import { Coins, Users, TrendingUp } from "lucide-react";

export default function RewardSection() {
  return (
    <section id="rewards" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-pink-300 bg-pink-500/10 border border-pink-500/20 rounded-full mb-4 uppercase tracking-widest">
            Reward Mechanism
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Fitness-Driven{" "}
            <span className="dna-gradient">Rewards</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Better mutations earn better rewards. Aligned incentives while preserving predictable issuance bounds.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Multiplier formula */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="card-glow rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-5 h-5 text-pink-400" />
                <h3 className="text-base font-bold text-white">Reward Multiplier Formula</h3>
              </div>
              <div className="code-block mb-4">
                <div>multiplier = <span className="text-purple-400">clamp</span>(</div>
                <div className="pl-6">1 + (fitness / threshold)²,</div>
                <div className="pl-6 text-emerald-400">min: 1,</div>
                <div className="pl-6 text-amber-400">max: 2</div>
                <div>)</div>
                <div className="mt-3">reward = base_reward * multiplier</div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-5">
                {[
                  { label: "Min Multiplier", value: "1.0×", sub: "No fitness boost", color: "text-slate-400" },
                  { label: "Max Multiplier", value: "2.0×", sub: "Optimal fitness", color: "text-emerald-400" },
                  { label: "Issuance Bound", value: "≤2×", sub: "Fully predictable", color: "text-cyan-400" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center text-center p-3 rounded-xl bg-white/3 border border-white/5">
                    <span className={`text-xl font-black font-mono ${s.color}`}>{s.value}</span>
                    <span className="text-xs font-semibold text-white mt-1">{s.label}</span>
                    <span className="text-xs text-slate-500 mt-0.5">{s.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual bar */}
            <div className="card-cyan rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4">Fitness → Multiplier Curve</h3>
              <div className="relative h-20 flex items-end gap-1">
                {Array.from({ length: 20 }, (_, i) => {
                  const fitness = i / 19;
                  const multiplier = Math.min(1 + fitness * fitness, 2);
                  const height = ((multiplier - 1) / 1) * 100;
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all"
                      style={{
                        height: `${Math.max(4, height)}%`,
                        background: `hsl(${280 + i * 4}, 70%, ${45 + i * 1.5}%)`,
                        opacity: 0.8,
                      }}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-slate-500 font-mono">fitness = 0</span>
                <span className="text-xs text-slate-500 font-mono">fitness = threshold</span>
              </div>
              <div className="flex justify-between mt-0.5">
                <span className="text-xs text-slate-400 font-mono">1.0× reward</span>
                <span className="text-xs text-emerald-400 font-mono">2.0× reward</span>
              </div>
            </div>
          </div>

          {/* Distribution */}
          <div className="flex flex-col gap-6">
            <div className="card-glow rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Coins className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Distribution</h3>
              </div>

              {/* Pie-style visualization */}
              <div className="flex flex-col gap-4">
                {/* Miner */}
                <div>
                  <div className="flex justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                      <span className="text-sm text-slate-300">Miner Reward</span>
                    </div>
                    <span className="text-sm font-bold text-purple-400 font-mono">90%</span>
                  </div>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5">First coinbase output — goes directly to mining address</p>
                </div>

                {/* Network fund */}
                <div>
                  <div className="flex justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                      <span className="text-sm text-slate-300">Network Fund</span>
                    </div>
                    <span className="text-sm font-bold text-cyan-400 font-mono">10%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[10%] bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5">Second coinbase output — sustains network development</p>
                </div>
              </div>
            </div>

            <div className="card-glow rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">Incentive Alignment</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  { point: "Miners rewarded for quality, not just speed", icon: "✓" },
                  { point: "Predictable issuance — bounded by 2× cap", icon: "✓" },
                  { point: "No inflation surprises for token holders", icon: "✓" },
                  { point: "Network fund is permissionless and transparent", icon: "✓" },
                ].map((item) => (
                  <li key={item.point} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-emerald-400 flex-shrink-0 font-bold">{item.icon}</span>
                    {item.point}
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
