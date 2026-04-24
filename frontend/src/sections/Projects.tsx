import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const domains = ["All", "AI", "Healthcare", "Entrepreneurship", "Education", "Public Sector"] as const;

const projects = [
  {
    title: "Empathy-driven diagnostics for rural clinics",
    domain: "Healthcare",
    problem: "Frontline workers lacked structured tools to surface patient needs.",
    approach: "10-week design sprint with field ethnography, journey mapping and co-creation with ASHA workers.",
    outcome: "A printable diagnostic toolkit and digital companion adopted across 18 clinics.",
    impact: "30% faster triage · 4 partner NGOs",
  },
  {
    title: "AI co-pilot for design educators",
    domain: "AI",
    problem: "Design faculty struggled to give timely feedback at scale across 200+ student artifacts.",
    approach: "Built an AI assistant grounded in rubric-based critique and human oversight loops.",
    outcome: "Pilot with 6 institutions; ~5x faster formative feedback cycles.",
    impact: "1,200+ students · 92% educator NPS",
  },
  {
    title: "Founder fellowship · early-stage ventures",
    domain: "Entrepreneurship",
    problem: "Technical founders lacked structured customer discovery practices.",
    approach: "12-week studio combining mentor circles, weekly experiments and investor critiques.",
    outcome: "21 ventures graduated; 9 raised seed funding within 12 months.",
    impact: "$4.2M raised · 14 cities",
  },
  {
    title: "Design thinking curriculum for engineering colleges",
    domain: "Education",
    problem: "Engineering pedagogy lacked human-centered, studio-based learning.",
    approach: "Designed a 4-semester spiral curriculum with faculty training and assessment frameworks.",
    outcome: "Adopted by a state-wide consortium; trained 80+ faculty as facilitators.",
    impact: "12,000 students reached",
  },
  {
    title: "Citizen experience redesign · municipal services",
    domain: "Public Sector",
    problem: "Citizens faced opaque, fragmented service journeys across departments.",
    approach: "Service blueprinting, pilot kiosks, and operating-model redesign with frontline staff.",
    outcome: "Reduced average resolution time and re-visit rates significantly.",
    impact: "−42% wait time · 6 districts",
  },
  {
    title: "Generative AI labs for HR leaders",
    domain: "AI",
    problem: "HR teams unsure how to safely operationalize generative AI in practice.",
    approach: "Hands-on labs with real use cases, ethical guardrails and policy co-design.",
    outcome: "Internal AI playbooks shipped at 4 enterprises within a quarter.",
    impact: "300+ leaders trained",
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof domains)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.domain === filter);

  return (
    <SectionWrapper
      id="projects"
      eyebrow="Projects & initiatives"
      title={<>Selected case studies — <em className="font-display italic text-primary">problem to impact.</em></>}
      intro="A sample of work spanning healthcare, AI, education and public services. Every project starts with people and ends with measurable change."
    >
      <div className="flex flex-wrap gap-2 mb-12">
        {domains.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all",
              filter === d
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
            )}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-border bg-card p-8 md:p-10 hover:shadow-elev hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                  {p.domain}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl mt-6 leading-snug">
                {p.title}
              </h3>

              <dl className="mt-8 space-y-5 text-sm">
                {[
                  ["Problem", p.problem],
                  ["Approach", p.approach],
                  ["Outcome", p.outcome],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[90px_1fr] gap-4">
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground pt-0.5">
                      {k}
                    </dt>
                    <dd className="text-foreground/80 leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 pt-6 border-t border-border text-xs uppercase tracking-[0.15em] text-primary">
                {p.impact}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};
