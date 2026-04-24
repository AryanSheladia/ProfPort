import { SectionWrapper } from "@/components/SectionWrapper";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Design Thinking",
    date: "Apr 2025",
    title: "Empathy isn't a phase — it's a discipline",
    excerpt: "Why the most mature design teams don't 'do empathy' for two weeks. They build it into how they listen, decide and ship.",
    read: "6 min read",
  },
  {
    tag: "AI",
    date: "Mar 2025",
    title: "Designing with AI without losing your judgement",
    excerpt: "Practical heuristics for integrating generative tools into design workflows — and the human work they amplify, not replace.",
    read: "8 min read",
  },
  {
    tag: "Innovation",
    date: "Feb 2025",
    title: "What boards get wrong about innovation portfolios",
    excerpt: "Three structural patterns that quietly stall innovation programs in mid-sized enterprises — and how to fix them.",
    read: "5 min read",
  },
];

export const Blog = () => {
  return (
    <SectionWrapper
      id="blog"
      eyebrow="Insights"
      title={<>Notes on design, innovation and the <em className="font-display italic text-primary">future of learning.</em></>}
      intro="Slow, considered writing — published occasionally, when there's something worth saying."
    >
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
        {posts.map((p) => (
          <article
            key={p.title}
            className="group relative bg-background p-8 md:p-10 hover:bg-secondary/40 transition-colors duration-500 cursor-pointer"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="uppercase tracking-[0.2em] text-primary">{p.tag}</span>
              <span className="text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="font-display text-2xl mt-8 leading-snug">{p.title}</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {p.excerpt}
            </p>
            <div className="mt-10 flex items-center justify-between text-xs text-muted-foreground">
              <span>{p.read}</span>
              <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
