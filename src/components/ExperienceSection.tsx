"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";
import { Briefcase, CheckCircle2, Calendar } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useEffect, useRef } from "react";

const techColors: Record<string, string> = {
  Angular: "bg-red-500/10 text-red-400 border-red-500/20",
  Java: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Spring Boot": "bg-green-500/10 text-green-400 border-green-500/20",
  iReport: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Oracle: "bg-red-600/10 text-red-500 border-red-600/20",
  Toad: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  NextJS: "bg-white/10 text-white border-white/20",
  React: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Express: "bg-gray-500/10 text-gray-300 border-gray-500/20",
  NodeJS: "bg-green-600/10 text-green-500 border-green-600/20",
  MySQL: "bg-blue-600/10 text-blue-400 border-blue-600/20",
  Python: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  FastAPI: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  PostgreSQL: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  REST: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Kafka: "bg-orange-600/10 text-orange-400 border-orange-600/20",
  Nginx: "bg-green-500/10 text-green-400 border-green-500/20",
  Golang: "bg-cyan-600/10 text-cyan-400 border-cyan-600/20",
  Rust: "bg-orange-700/10 text-orange-400 border-orange-700/20",
  DevOps: "bg-purple-600/10 text-purple-400 border-purple-600/20",
  MongoDB: "bg-green-700/10 text-green-400 border-green-700/20",
  PHP: "bg-indigo-600/10 text-indigo-400 border-indigo-600/20",
  Docker: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const getTechColor = (tech: string) =>
  techColors[tech] || "bg-muted text-muted-foreground border-border";

interface Job {
  key: string;
  techs: string[];
  current?: boolean;
}

const jobs: Job[] = [
  { key: "cam", techs: ["Angular", "Java", "Spring Boot", "iReport", "Oracle", "Toad"], current: true },
  { key: "lansar", techs: ["NextJS", "React", "Express", "NodeJS", "MySQL"] },
  { key: "baobab", techs: ["Java", "Spring Boot", "Python", "FastAPI", "PostgreSQL"] },
  { key: "selal", techs: ["Java", "Spring Boot", "REST", "Kafka", "Nginx", "MySQL", "Python"] },
  { key: "zone01", techs: ["React", "Angular", "Java", "Golang", "Express", "Rust", "DevOps", "MongoDB", "Python"] },
  { key: "sonatel", techs: ["Java", "PHP"] },
];

function TimelineBar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current?.closest("section");
    if (!section || !fillRef.current || !trackRef.current) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const trackRect = trackRef.current!.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Progress = how far the section has been scrolled through
      const start = trackRect.top;
      const end = trackRect.bottom;
      const visible = viewH - start;
      const total = end - start;

      const progress = Math.min(1, Math.max(0, visible / total));
      fillRef.current!.style.height = `${progress * 100}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div ref={sectionRef} className="absolute left-[10px] top-2 bottom-2 w-px hidden sm:block">
      {/* Track (empty) */}
      <div ref={trackRef} className="absolute inset-0 bg-border/50 rounded-full" />
      {/* Fill */}
      <div
        ref={fillRef}
        className="absolute top-0 left-0 w-full rounded-full transition-none"
        style={{
          height: "0%",
          background: "linear-gradient(180deg, hsl(174,45%,38%) 0%, hsl(174,45%,50%) 100%)",
        }}
      />
    </div>
  );
}

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-12">
      <ScrollReveal>
        <div className="section-title">
          <Briefcase className="w-5 h-5 text-primary" />
          {t.experience.title}
        </div>
      </ScrollReveal>

      <div className="relative">
        <TimelineBar />

        <div className="space-y-5">
          {jobs.map((job, index) => {
            const jobData = t.experience.jobs[job.key as keyof typeof t.experience.jobs];
            return (
              <ScrollReveal key={job.key} delay={index * 70}>
                <div className="relative sm:pl-10">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-5 w-[21px] h-[21px] rounded-full border-2 hidden sm:flex items-center justify-center transition-colors duration-300 ${
                      job.current
                        ? "border-primary/70 bg-primary/15"
                        : "border-border bg-card"
                    }`}
                  >
                    {job.current && (
                      <div className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
                    )}
                  </div>

                  <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_24px_rgba(20,184,166,0.06)] hover:-translate-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-semibold">{jobData.title}</h3>
                          {job.current && (
                            <Badge className="text-xs bg-primary/15 text-primary/90 border border-primary/25">
                              Actuel
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary/80 text-sm font-medium mt-0.5">{jobData.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                        <Calendar className="w-3 h-3" />
                        {jobData.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {jobData.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary/70" />
                        {t.experience.keyAchievements}
                      </h4>
                      <ul className="space-y-1.5">
                        {jobData.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                      {job.techs.map((tech) => (
                        <Badge key={tech} variant="outline" className={`text-xs ${getTechColor(tech)}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
