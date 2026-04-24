import { useMemo, useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Input } from "@/components/ui/input";
import { Search, FileText, BookOpen, Award } from "lucide-react";
import { cn } from "@/lib/utils";

type Kind = "All" | "Paper" | "Book" | "Patent";

const items: { title: string; venue: string; year: number; kind: Exclude<Kind, "All"> }[] = [
  { title: "Empathy as a method: a framework for design pedagogy", venue: "Intl. Journal of Design Education", year: 2024, kind: "Paper" },
  { title: "Designing innovation ecosystems in higher education", venue: "Springer · Innovation Studies", year: 2023, kind: "Book" },
  { title: "Adaptive feedback system for studio-based learning", venue: "Indian Patent Office", year: 2023, kind: "Patent" },
  { title: "From classroom to commerce: studio learning for entrepreneurship", venue: "Journal of Entrepreneurship Education", year: 2022, kind: "Paper" },
  { title: "AI-augmented design critique: a controlled study", venue: "ACM CHI Workshop", year: 2024, kind: "Paper" },
  { title: "Frameworks for human-centered AI adoption", venue: "Routledge · Design & Society", year: 2025, kind: "Book" },
];

const kinds: Kind[] = ["All", "Paper", "Book", "Patent"];
const iconFor = { Paper: FileText, Book: BookOpen, Patent: Award };

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
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search publications…"
            className="pl-11 h-12 rounded-full bg-surface-elevated border-border"
          />
        </div>
        <div className="flex gap-2">
          {kinds.map((k) => (
            <button
              key={k}
              onClick={() => setKind(k)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all",
                kind === k
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {k}
            </button>
          ))}
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
