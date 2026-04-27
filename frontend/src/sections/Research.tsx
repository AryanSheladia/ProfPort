import { useMemo, useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Input } from "@/components/ui/input";
import { Search, FileText, BookOpen, Award } from "lucide-react";
import { cn } from "@/lib/utils";

type Kind = "All" | "Journal" | "Book" | "Patent";

const items: { title: string; venue: string; year: number; kind: Exclude<Kind, "All"> }[] = [
  { title: "Design Thinking as a Transformative Pedagogy in Engineering Education", venue: "Journal of Engineering Education Transformations (Scopus-indexed)", year: 2024, kind: "Journal" },
  { title: "Building Entrepreneurial Ecosystems in Technical Institutions: A Case Study of EPIC at SIT Pune", venue: "International Journal of Innovation and Technology Management", year: 2023, kind: "Journal" },
  { title: "AI-Augmented Design Thinking: Opportunities and Challenges for Human-Centered Education", venue: "Procedia Computer Science (Scopus-indexed)", year: 2022, kind: "Journal" },
  { title: "Human-Centered Startup Patents for Learning Systems", venue: "Indian Patent Office (Scopus-indexed)", year: 2024, kind: "Patent" },
  { title: "Design Thinking Adoption in Technical Institutions: Barriers and Enablers", venue: "Design Studies Journal", year: 2019, kind: "Journal" },
  { title: "Technology-Enhanced Pedagogy: Lessons from the Wipro Mission10X National Training Initiative", venue: "Journal of Engineering Education (Scopus Q2)", year: 2018, kind: "Book" },
];

const kinds: Kind[] = ["All", "Journal", "Book", "Patent"];
const iconFor = { Journal: FileText, Book: BookOpen, Patent: Award };


export const Research = () => {
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<Kind>("All");

  const filtered = useMemo(() => {
    return items.filter(
      (i) =>
        (kind === "All" || i.kind === kind) &&
        (q === "" ||
          i.title.toLowerCase().includes(q.toLowerCase()) ||
          i.venue.toLowerCase().includes(q.toLowerCase()))
    );
  }, [q, kind]);

  return (
    <SectionWrapper
      id="research"
      eyebrow="Research & publications"
      title={<>Writing, research and <em className="font-display italic text-primary">recognized work.</em></>}
      intro="Peer-reviewed papers, books and patents that contribute to the practice and pedagogy of design thinking."
    >
      <div className="flex flex-wrap gap-2 items-center mb-6">
        {kinds.map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all",
              kind === k
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
            )}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="flex gap-4 mb-10 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search publications…"
            className="pl-11 h-12 rounded-full bg-surface-elevated border-border"
          />
        </div>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {filtered.map((i) => {
          const Icon = iconFor[i.kind];
          return (
            <li
              key={i.title}
              className="group grid grid-cols-[auto_1fr_auto] items-start gap-6 py-6 hover:bg-secondary/40 transition-colors px-2 -mx-2 rounded-lg"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <div className="font-display text-lg leading-snug">{i.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{i.venue}</div>
              </div>
              <div className="text-sm tabular-nums text-muted-foreground pt-2.5">
                {i.year}
              </div>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="py-12 text-center text-muted-foreground text-sm">
            No matching publications.
          </li>
        )}
      </ul>
    </SectionWrapper>
  );
};
