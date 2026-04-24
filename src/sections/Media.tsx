import { SectionWrapper } from "@/components/SectionWrapper";
import { Award } from "lucide-react";

const items = [
  { y: "2024", t: "President · EPIC Cell & IIC", o: "Symbiosis Institute of Technology, Pune" },
  { y: "2023", t: "Coordinator · AICTE IDEA Lab", o: "All India Council for Technical Education" },
  { y: "2022", t: "Cambridge International Certified", o: "Teacher and Trainer accreditation" },
  { y: "—", t: "Editorial Board Member", o: "IJASRET — Intl. Journal of Advance Scientific Research" },
  { y: "—", t: "Published Researcher", o: "ORCID 0000-0001-9744-836X · indexed since 2008" },
  { y: "—", t: "Chief Mentor & Innovation Officer", o: "Symbiosis Institute of Technology, Pune" },
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
