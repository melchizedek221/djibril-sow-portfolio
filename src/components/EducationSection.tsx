"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface School {
  key: string;
  location: string;
  current?: boolean;
}

const schools: School[] = [
  { key: "uvs", location: "Sénégal (En ligne)", current: true },
  { key: "zone01", location: "Dakar, Sénégal" },
  { key: "esp", location: "Dakar, Sénégal" },
];

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-12">
      <ScrollReveal>
        <div className="section-title">
          <GraduationCap className="w-5 h-5 text-primary" />
          {t.education.title}
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {schools.map((school, index) => {
          const schoolData = t.education.schools[school.key as keyof typeof t.education.schools];
          return (
            <ScrollReveal key={school.key} delay={index * 100}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(20,184,166,0.07)] hover:-translate-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">{schoolData.degree}</h3>
                      <p className="text-primary text-sm font-medium mb-2">{schoolData.school}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {schoolData.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {school.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`self-start shrink-0 text-xs ${
                      school.current
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {school.current ? t.education.statusCurrent : t.education.statusDone}
                  </Badge>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
