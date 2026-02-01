import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/layout/HeroSection";
import { ProblemSection } from "@/components/layout/ProblemSection";
import { TruthSection } from "@/components/layout/TruthSection";
import { MentoriaSection } from "@/components/layout/MentoriaSection";
import { DifferentialSection } from "@/components/layout/DifferentialSection";
import { AboutSection } from "@/components/layout/AboutSection";
import { TransformationSection } from "@/components/layout/TransformationSection";
import { SabotagemMetodoSection } from "@/components/layout/SabotagemMetodoSection";
import { LeadFormSection } from "@/components/layout/LeadFormSection";
import { CtaFinalSection } from "@/components/layout/CtaFinalSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() { 
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <TruthSection />
        <MentoriaSection />
        <AboutSection />
        <DifferentialSection />
        <TransformationSection />
        <SabotagemMetodoSection />
        <LeadFormSection />
        <CtaFinalSection />
      </main>

      <Footer />
    </div>
  );
}
