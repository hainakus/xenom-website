"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Github, Zap } from "lucide-react";

function DnaHelix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const totalPoints = 60;
      const amplitude = 80;
      const speed = 0.03;

      for (let i = 0; i < totalPoints; i++) {
        const y = (i / totalPoints) * canvas.height;
        const phase = (i / totalPoints) * Math.PI * 6 + frame * speed;

        const x1 = cx + Math.sin(phase) * amplitude;
        const x2 = cx + Math.sin(phase + Math.PI) * amplitude;

        const alpha = 0.15 + 0.85 * Math.abs(Math.sin(phase));

        // Left strand
        ctx.beginPath();
        ctx.arc(x1, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
        ctx.fill();

        // Right strand
        ctx.beginPath();
        ctx.arc(x2, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
        ctx.fill();

        // Rungs every ~8 nodes
        if (i % 8 === 0) {
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.strokeStyle = `rgba(100, 220, 255, ${alpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-[500px] opacity-60 hidden lg:block"
    />
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-[100px]" />
      </div>

      <DnaHelix />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300">
            <Zap className="w-3 h-3" />
            GENOME-POW HARD FORK — CONSENSUS CRITICAL
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-4 leading-none">
          <span className="block text-white">XENO</span>
          <span className="block dna-gradient">MORPH</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-mono text-slate-400 mt-2">
            V3.0.0
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
          Evolutionary Proof-of-Work based on the{" "}
          <span className="text-cyan-400 font-semibold">human genome reference (GRCh38)</span>.{" "}
          Memory-hard, ASIC-resistant, and continuously adaptive through deterministic genetic mutations.
        </p>

        {/* Stats row */}
        <div className="mt-10 flex flex-wrap gap-6">
          {[
            { label: "Genome Bases", value: "~3B", color: "text-purple-400" },
            { label: "Dataset Size", value: "~750 MB", color: "text-cyan-400" },
            { label: "Chromosomes", value: "24", color: "text-emerald-400" },
            { label: "Fragment Size", value: "1 MB", color: "text-amber-400" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start px-5 py-4 rounded-xl card-glow"
            >
              <span className={`text-2xl font-black font-mono ${s.color}`}>{s.value}</span>
              <span className="text-xs text-slate-500 mt-0.5 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#build"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-200 glow-purple hover:scale-105"
          >
            <Zap className="w-4 h-4" />
            Get Started
          </a>
          <a
            href="https://github.com/hainakus/Xenomorph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          <a
            href="#genome-pow"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-slate-400 hover:text-white transition-colors duration-200 font-medium"
          >
            Learn More
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Upgrade warning banner */}
        <div className="mt-12 flex items-start gap-3 px-5 py-4 rounded-xl border border-amber-500/30 bg-amber-500/5 max-w-2xl">
          <span className="text-amber-400 text-lg mt-0.5">⚠️</span>
          <div>
            <p className="text-sm font-semibold text-amber-300">Mandatory Upgrade</p>
            <p className="text-xs text-slate-400 mt-0.5">
              All nodes and miners must upgrade to <strong className="text-white">V3.0.0</strong>.
              Older versions will fork and fail to sync after activation.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-purple-400/60" />
      </div>
    </section>
  );
}
