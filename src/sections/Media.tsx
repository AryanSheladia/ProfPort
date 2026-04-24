import { SectionWrapper } from "@/components/SectionWrapper";
import { Award } from "lucide-react";

const items = [
  { y: "2024", t: "Innovation Educator of the Year", o: "National Innovation Council" },
  { y: "2023", t: "Featured · The Hindu BusinessLine", o: "On AI in design education" },
  { y: "2023", t: "Distinguished Speaker", o: "Global Design Education Summit" },
  { y: "2022", t: "Best Paper Award", o: "Intl. Conf. on Design Pedagogy" },
  { y: "2021", t: "Mentor of the Year", o: "Startup India Yatra" },
  { y: "2020", t: "Certified Design Thinking Coach", o: "IDEO U" },
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
