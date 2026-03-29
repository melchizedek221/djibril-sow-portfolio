"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight, Download, Sparkles, Code, Server, Layers, Rocket } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  function scrollToSection(id: string) {
  // Both layouts exist in DOM — find the visible one
  const all = document.querySelectorAll<HTMLElement>(`#${id}`);
  for (const el of all) {
    if (el.offsetHeight > 0 || el.offsetWidth > 0) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  }
}

  const taglines = [
    { icon: Server, text: t.hero.tagline1 },
    { icon: Code, text: t.hero.tagline2 },
    { icon: Layers, text: t.hero.tagline3 },
    { icon: Rocket, text: t.hero.tagline4 },
  ];

  return (
    <section id="home" className="py-16 relative overflow-hidden">
      {/* Ambient orbs - very subtle */}
      <div className="glow-orb w-72 h-72 bg-primary/5 -top-10 -right-10 opacity-40" />
      <div className="glow-orb w-48 h-48 bg-cyan-500/4 bottom-10 -left-10 opacity-30" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="mb-6 animate-fade-in-up stagger-1">
          <Badge variant="outline" className="text-primary/80 border-primary/25 bg-primary/8 px-4 py-1.5 text-sm">
            <Sparkles className="w-3.5 h-3.5 mr-2 opacity-80" />
            {t.hero.badge}
          </Badge>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in-up stagger-2">
          <span className="gradient-text">{t.hero.titleHighlight}</span>
          <br />
          <span className="text-foreground">{t.hero.titleRest}</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-in-up stagger-3">
          {t.hero.description}
        </p>

        {/* Tagline badges */}
        <div className="flex flex-wrap gap-2 mb-10 animate-fade-in-up stagger-4">
          {taglines.map((tagline, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="py-2 px-4 text-sm bg-muted/40 text-muted-foreground hover:bg-primary/8 hover:text-primary/90 transition-all border border-border hover:border-primary/25 cursor-default"
            >
              <tagline.icon className="w-3.5 h-3.5 mr-2" />
              {tagline.text}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-5">
          {/* Contact button */}
          <a
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 px-6 h-11 rounded-md bg-primary/90 hover:bg-primary text-white text-sm font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(20,184,166,0.25)] cursor-pointer"
          >
            {t.hero.contactMe}
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Download CV button */}
          <a
            href="/djibril_sow.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 h-11 rounded-md border border-border bg-transparent hover:border-primary/40 hover:bg-primary/8 text-muted-foreground hover:text-foreground text-sm font-medium transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            {t.hero.viewCV}
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { value: "5+", label: t.hero.yearsExp },
            { value: "6+", label: t.hero.companies },
            { value: "20+", label: t.hero.technologies },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
