"use client";

import { Dna, ChevronRight } from "lucide-react";

const mutationTypes = [
  { name: "Swap", desc: "Exchange two base positions deterministically", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  { name: "Insert", desc: "Insert a derived base at a computed position", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  { name: "Rotate", desc: "Circular shift of a genome sub-sequence", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  { name: "XOR", desc: "XOR bases with a derived key pattern", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  { name: "Shift", desc: "Bit-level shift across a fragment window", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
];

const datasetStats = [
  { label: "Source", value: "GRCh38", mono: true },
  { label: "Total Bases", value: "~3,000,000,000" },
  { label: "Chromosomes", value: "22 + X + Y" },
  { label: "Encoding", value: "2-bit packed" },
  { label: "Storage", value: "~750 MB" },
  { label: "Fragment Size", value: "1,048,576 bytes" },
];

export default function GenomePowSection() {
  return (
    <section id="genome-pow" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4 uppercase tracking-widest">
            Genome-PoW
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            The{" "}
            <span className="dna-gradient">Genome Dataset</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            The entire human genome becomes your mining dataset — deterministically selected, mutated, and scored.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Dataset info + fragment selection */}
          <div className="flex flex-col gap-6">
            {/* Dataset stats */}
            <div className="card-cyan rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Dna className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Genome Dataset</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {datasetStats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</span>
                    <span className={`text-sm font-semibold text-white ${s.mono ? "font-mono" : ""}`}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fragment selection code */}
            <div>
              <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-2">Fragment Selection</p>
              <div className="code-block">
                <div><span className="text-slate-500">{"// Deterministic fragment selection"}</span></div>
                <div className="mt-2">index_hash = <span className="text-purple-400">blake3</span>(epoch_seed ‖ nonce)</div>
                <div>fragment_index = <span className="text-emerald-400">rejection_sample</span>(index_hash)</div>
                <div className="text-cyan-300">               % num_fragments</div>
              </div>
            </div>

            {/* Block genome generation */}
            <div>
              <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-2">Block Genome Generation</p>
              <div className="code-block">
                <div>genome_0 = selected_fragment</div>
                <div className="mt-2"><span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-amber-400">0..K(epoch)</span> {"{"}</div>
                <div className="pl-6">apply_deterministic_mutation();</div>
                <div>{"}"}</div>
                <div className="mt-2 text-slate-500">{"// K(epoch) ∈ [4, 16]"}</div>
              </div>
            </div>
          </div>

          {/* Right: Mutation types */}
          <div className="flex flex-col gap-4">
            <div className="card-glow rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-5">Mutation Operations</h3>
              <div className="flex flex-col gap-3">
                {mutationTypes.map((m, i) => (
                  <div key={m.name} className="flex items-center gap-4 group">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-bold text-slate-500">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <span className={`px-3 py-1 rounded-md text-xs font-mono font-semibold border ${m.color}`}>
                        {m.name}
                      </span>
                      <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{m.desc}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Canonicalization note */}
            <div className="card-glow rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white mb-3">Canonicalization</h3>
              <p className="text-sm text-slate-400 mb-3">
                The genome is normalized to a strict canonical form before encoding:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Sequence-only", "Uppercase", "{A, C, G, T, N}"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Validation steps */}
            <div className="card-cyan rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white mb-4">Validation Steps</h3>
              <div className="flex flex-col gap-2">
                {[
                  "Select genome fragment",
                  "Apply deterministic mutations",
                  "Compute lightweight fitness",
                  "Compute final BLAKE3 hash",
                  "Compare against target",
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm text-slate-400">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
