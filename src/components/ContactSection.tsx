"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/LanguageContext";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sow062000@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `${t.contact.name}: ${formData.name}\n${t.contact.email}: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactItems = [
    { icon: Mail, label: t.contact.email, value: "sow062000@gmail.com", href: "mailto:sow062000@gmail.com" },
    { icon: Phone, label: t.sidebar.phone, value: "+212 06 48 85 01 66", href: "tel:+2120648850166" },
    { icon: MapPin, label: t.sidebar.location, value: t.sidebar.morocco, href: undefined },
    { icon: Clock, label: t.sidebar.workingHours, value: t.sidebar.flexible, href: undefined },
  ];

  return (
    <section id="contact" className="py-12">
      <ScrollReveal>
        <div className="section-title">
          <MessageSquare className="w-5 h-5 text-primary" />
          {t.contact.title}
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {/* Contact Info Grid */}
        <ScrollReveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm hover:text-primary transition-colors truncate block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={160}>
          <div className="flex gap-3">
            <a
              href="https://github.com/djibrilsow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card hover:border-primary/40 hover:text-primary transition-all text-sm text-muted-foreground"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/djibrilsow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card hover:border-primary/40 hover:text-primary transition-all text-sm text-muted-foreground"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal delay={240}>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold mb-5 flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" />
              {t.contact.sendMessage}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block font-medium">
                    {t.contact.name}
                  </label>
                  <Input
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/30 border-border focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block font-medium">
                    {t.contact.email}
                  </label>
                  <Input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted/30 border-border focus-visible:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block font-medium">
                  {t.contact.subject}
                </label>
                <Input
                  placeholder={t.contact.subjectPlaceholder}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-muted/30 border-border focus-visible:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block font-medium">
                  {t.contact.message}
                </label>
                <Textarea
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted/30 border-border focus-visible:ring-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10"
              >
                <Send className="w-4 h-4 mr-2" />
                {t.contact.send}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              {t.contact.havingTrouble}{" "}
              <a href="mailto:sow062000@gmail.com" className="text-primary hover:underline">
                sow062000@gmail.com
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
