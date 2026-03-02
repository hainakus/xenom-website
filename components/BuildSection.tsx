"use client";

import { useState } from "react";
import { Terminal, Copy, Check, AlertTriangle } from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

const buildCommands = `git clone https://github.com/hainakus/Xenomorph.git
cd Xenomorph
git checkout V3.0.0
cargo build --release`;

const runCommand = `./target/release/xenomd`;

const upgradeSteps = [
  { n: 1, label: "Stop node", cmd: null },
  { n: 2, label: "Backup wallet", cmd: null },
  { n: 3, label: "Remove old database", cmd: "rm -rf ~/.xenomorph/db", note: "Only if consensus changes were applied" },
  { n: 4, label: "Rebuild", cmd: "cargo build --release" },
  { n: 5, label: "Restart node", cmd: "./target/release/xenomd" },
];

export default function BuildSection() {
  return (
    <section id="build" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4 uppercase tracking-widest">
            Build & Run
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Get Up &amp;{" "}
            <span className="dna-gradient">Running</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Built with Rust for maximum performance. Clone, build, and launch your node in minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Build instructions */}
          <div className="flex flex-col gap-6">
            <div className="card-green rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Build Instructions</h3>
                </div>
                <CopyButton text={buildCommands} />
              </div>
              <div className="code-block">
                <div className="text-slate-500"># Clone the repository</div>
                <div>git <span className="text-purple-400">clone</span> https://github.com/hainakus/Xenomorph.git</div>
                <div className="mt-2">cd Xenomorph</div>
                <div className="mt-2 text-slate-500"># Checkout V3.0.0</div>
                <div>git <span className="text-purple-400">checkout</span> <span className="text-emerald-400">V3.0.0</span></div>
                <div className="mt-2 text-slate-500"># Build release binary</div>
                <div>cargo <span className="text-cyan-400">build</span> --release</div>
              </div>
            </div>

            <div className="card-green rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Run Node</h3>
                </div>
                <CopyButton text={runCommand} />
              </div>
              <div className="code-block">
                <div className="text-slate-500"># Start the node</div>
                <div>./target/release/<span className="text-emerald-400">xenomd</span></div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Ensure all peers are running <strong className="text-white">V3.0.0</strong> to avoid fork divergence.
              </p>
            </div>

            {/* System requirements */}
            <div className="card-glow rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4">System Requirements</h3>
              <div className="flex flex-col gap-2">
                {[
                  { label: "RAM", value: "≥ 2 GB (mining: ≥ 1.5 GB)", important: true },
                  { label: "Storage", value: "≥ 10 GB free space" },
                  { label: "Toolchain", value: "Rust stable (cargo)" },
                  { label: "OS", value: "Linux / macOS / Windows" },
                  { label: "Network", value: "Open port for P2P sync" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-sm text-slate-400">{r.label}</span>
                    <span className={`text-sm font-mono ${r.important ? "text-amber-400 font-semibold" : "text-slate-300"}`}>
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Upgrade guide */}
          <div className="flex flex-col gap-6">
            {/* Warning */}
            <div className="flex items-start gap-3 px-5 py-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300">Mandatory Upgrade Notice</p>
                <p className="text-xs text-slate-400 mt-1">
                  This is a <strong className="text-white">consensus-critical</strong> release.
                  All nodes and miners must upgrade to V3.0.0 before the activation block.
                  Older versions will fork and fail to sync.
                </p>
              </div>
            </div>

            {/* Upgrade steps */}
            <div className="card-glow rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-5">Upgrading from Previous Versions</h3>
              <div className="flex flex-col gap-4">
                {upgradeSteps.map((step) => (
                  <div key={step.n} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-xs font-mono font-bold text-purple-400 flex-shrink-0">
                      {step.n}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">{step.label}</div>
                      {step.cmd && (
                        <div className="code-block text-xs mt-2 py-2">
                          {step.cmd}
                        </div>
                      )}
                      {step.note && (
                        <div className="text-xs text-slate-500 mt-1">{step.note}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub CTA */}
            <a
              href="https://github.com/hainakus/Xenomorph"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 hover:border-white/20 transition-all group"
            >
              <div>
                <div className="text-sm font-bold text-white">hainakus/Xenomorph</div>
                <div className="text-xs text-slate-500 mt-0.5">View source, issues &amp; releases on GitHub</div>
              </div>
              <div className="text-slate-500 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
