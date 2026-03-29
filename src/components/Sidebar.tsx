"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/LanguageContext";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Code,
  Database,
  Terminal,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const skills = [
  { name: "Java Expert", icon: Code },
  { name: "Spring Boot", icon: Code },
  { name: "Full Stack Dev", icon: Terminal },
  { name: "Python & FastAPI", icon: Code },
  { name: "React & Angular", icon: Code },
  { name: "PostgreSQL", icon: Database },
];

export function Sidebar() {
  const { t } = useLanguage();

  return (
    <aside className="w-full lg:w-80 lg:fixed lg:h-screen lg:overflow-y-auto sidebar-scroll bg-card border-r border-border p-6 flex flex-col">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <div className="relative w-28 h-28 mx-auto mb-4">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/25 flex items-center justify-center">
            <span className="text-4xl font-display font-bold text-primary">DS</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-card animate-pulse" />
        </div>

        <h1 className="text-2xl font-display font-bold mb-1">Djibril SOW</h1>
        <p className="text-primary/80 text-sm font-medium">{t.sidebar.title}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          <MapPin className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{t.sidebar.morocco}</span>
        </div>
      </div>

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-1.5 justify-center mb-6">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant="outline"
            className="skill-badge text-xs"
          >
            <skill.icon className="w-3 h-3 mr-1" />
            {skill.name}
          </Badge>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-3 mb-6">
        <a
          href="https://github.com/melchizedek221"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-muted/40 hover:bg-primary/10 hover:text-primary transition-all"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/djibril-sow-3463a4340/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-muted/40 hover:bg-primary/10 hover:text-primary transition-all"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        {/* <a
          href="#contact"
          className="p-2 rounded-lg bg-muted/40 hover:bg-primary/10 hover:text-primary transition-all"
        >
          <ExternalLink className="w-5 h-5" />
        </a> */}
      </div>

      <Separator className="mb-6" />

      {/* Languages */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-primary/80 text-base">🌐</span>
          <h2 className="text-sm font-semibold">{t.sidebar.languages}</h2>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span>{t.sidebar.french}</span>
              <span className="text-muted-foreground text-xs">{t.sidebar.fluent}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: "95%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span>{t.sidebar.english}</span>
              <span className="text-muted-foreground text-xs">{t.sidebar.professional}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Contact Info */}
      <div className="space-y-4 mt-auto">
        <div className="flex items-start gap-3">
          <Mail className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">{t.sidebar.email}</p>
            <a href="mailto:sow062000@gmail.com" className="text-sm hover:text-primary transition-colors break-all">
              sow062000@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">{t.sidebar.phone}</p>
            <a href="tel:+2120648850166" className="text-sm hover:text-primary transition-colors">
              +212 06 48 85 01 66
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">{t.sidebar.location}</p>
            <p className="text-sm">{t.sidebar.morocco}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">{t.sidebar.workingHours}</p>
            <p className="text-sm">{t.sidebar.flexible}</p>
          </div>
        </div>
      </div>

      {/* Available Badge */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-emerald-400/90">{t.sidebar.availableForProjects}</span>
        </div>
      </div>
    </aside>
  );
}
