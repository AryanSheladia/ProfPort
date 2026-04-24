import { SectionWrapper } from "@/components/SectionWrapper";
import { Award } from "lucide-react";

const items = [
  { y: "2026", t: "Leadership in Innovation & Entrepreneurship", o: "Divine HR Forum & NIPM Pimpri-Chinchwad Chakan Chapter · Women Achievers Award" },
  { y: "2025", t: "Entrepreneurship Excellence Award", o: "ENSIN Forum · Women Entrepreneurship Enabler — Ecosystem Enabler (Individual), hosted at VIT Pune" },
  { y: "2026", t: "Session Chair · INDAM Conference", o: "Track on Entrepreneurship · hosted by Symbiosis Institute of Business Management (SIBM)" },
  { y: "2009–12", t: "National Master Trainer · Mission10X", o: "Recognised by Wipro Technologies — initiative named among WEF top 50 global talent-mobility programs" },
  { y: "Cert.", t: "Cambridge International Certified", o: "Teacher & Trainer accreditation" },
  { y: "Role", t: "Chief Mentor & Innovation Officer", o: "Symbiosis Institute of Technology, Pune" },
];

export const Media = () => {
  return (
    <SectionWrapper
      id="media"
      eyebrow="Media & recognition"
      title={<>Awards, certifications and <em className="font-display italic text-primary">press features.</em></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <div
            key={i.t}
            className="rounded-2xl border border-border bg-card p-7 hover:shadow-soft transition-shadow"
          >
            <Award className="h-5 w-5 text-primary" />
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-6">
              {i.y}
            </div>
            <div className="font-display text-lg mt-2 leading-snug">{i.t}</div>
            <div className="text-sm text-muted-foreground mt-1">{i.o}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
