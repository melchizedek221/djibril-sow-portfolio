"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";
import { Code2, Server, Globe, Database, Terminal, Wrench } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const skillCategories = {
  backend: {
    skills: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "Golang", "Rust"],
    icon: Server,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  frontend: {
    skills: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    icon: Globe,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  database: {
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Redis"],
    icon: Database,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  devops: {
    skills: ["Docker", "Nginx", "Kafka", "CI/CD", "Linux", "Git"],
    icon: Terminal,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  tools: {
    skills: ["VS Code", "IntelliJ IDEA", "Postman", "Jira", "Agile/Scrum"],
    icon: Wrench,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
};

export function SkillsSection() {
  const { t } = useLanguage();

  const categories = Object.entries(skillCategories).map(([key, value]) => ({
    key,
    ...value,
  }));

  return (
    <section id="skills" className="py-12">
      <ScrollReveal>
        <div className="section-title">
          <Code2 className="w-5 h-5 text-primary" />
          {t.skills.title}
        </div>
      </ScrollReveal>

      <div className="grid gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const label = t.skills.categories[category.key as keyof typeof t.skills.categories];
          return (
            <ScrollReveal key={category.key} delay={index * 80}>
              <div className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(20,184,166,0.06)]">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`p-2 rounded-lg ${category.bg} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-4 h-4 ${category.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="skill-badge text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
