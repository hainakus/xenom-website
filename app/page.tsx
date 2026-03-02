import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import GenomePowSection from "@/components/GenomePowSection";
import FitnessSection from "@/components/FitnessSection";
import EpochSection from "@/components/EpochSection";
import SecuritySection from "@/components/SecuritySection";
import RewardSection from "@/components/RewardSection";
import BuildSection from "@/components/BuildSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-200">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <GenomePowSection />
        <FitnessSection />
        <EpochSection />
        <SecuritySection />
        <RewardSection />
        <BuildSection />
      </main>
      <Footer />
    </div>
  );
}
