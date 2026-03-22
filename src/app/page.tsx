"use client";

import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed background grid */}
      <div className="bg-grid-fixed" />

      {/* Cursor glow */}
      <CursorGlow />

      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10">
        <Header />
        <main className="px-5 sm:px-8 pb-20 max-w-3xl mx-auto">
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>

      {/* Desktop Layout with Sidebar */}
      <div className="hidden lg:flex relative z-10">
        <Sidebar />
        <div className="flex-1 ml-80 min-w-0">
          <Header />
          <main className="px-10 pb-20">
            <HeroSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  );
}
