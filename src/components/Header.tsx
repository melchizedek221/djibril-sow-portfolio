"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

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

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "skills", label: t.nav.skills },
    { id: "contact", label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const langLabel = language === "fr" ? "English" : "Français";

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-xl font-display font-bold">
              <span className="gradient-text">Djibril</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors"> SOW</span>
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              / {t.sidebar.title}
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="lang-toggle"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{langLabel}</span>
            </button>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="nav-link text-left"
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
