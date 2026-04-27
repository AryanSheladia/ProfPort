import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const domains = ["All", "Design Thinking", "Entrepreneurship", "Startup Ecosystems", "Education", "Innovation"] as const;

const projects = [
  {
    title: "EPIC: Entrepreneurship Promotion & Innovation Cell at SIT Pune",
    domain: "Startup Ecosystems",
    problem: "Technical students had no structured pathways from ideation to validated startups.",
    approach: "Built a cell-based incubation model combining mentor circles, investor pitches, and real-world mentoring. Organized flagship STARTUPCON events.",
    outcome: "120+ student ventures incubated; 28 raised seed funding; ecosystem spanning 5 cities.",
    impact: "$8.5M raised · 450+ mentored founders",
  },
  {
    title: "Design Thinking as Transformative Pedagogy",
    domain: "Design Thinking",
    problem: "Engineering education lacked human-centered, empathy-driven problem-solving frameworks.",
    approach: "Designed spiral curriculum integrating empathy mapping, prototyping, and iterative testing across 4 semesters with faculty training.",
    outcome: "Adopted by 12-institution state consortium; trained 80+ faculty facilitators.",
    impact: "12,000+ students reached · Scopus-published research",
  },
  {
    title: "Founder Cohort Program: From Idea to Investor Pitch",
    domain: "Entrepreneurship",
    problem: "First-time founders lacked structured customer discovery and business model validation.",
    approach: "12-week intensive combining weekly experiments, design sprints, mentor circles, and investor critiques. Weekly problem-reframing sessions.",
    outcome: "42 ventures graduated over 3 cohorts; 38% seed funding success rate.",
    impact: "$12M+ capital raised · 6-month time-to-raise reduction",
  },
  {
    title: "Design Thinking Workshops for Corporate Innovation Teams",
    domain: "Design Thinking",
    problem: "Enterprises struggled to embed human-centered design in product and service development.",
    approach: "Intensive 3-5 day design sprints with problem reframing, rapid prototyping, and co-creation with end-users.",
    outcome: "Delivered for TCS, Infosys, and 8+ Fortune 500 enterprises. 15+ live prototypes deployed.",
    impact: "2,000+ leaders trained · $45M estimated impact",
  },
  {
    title: "Mission10X: Faculty Training in Technology-Enhanced Pedagogy",
    domain: "Education",
    problem: "25,000+ engineering faculty lacked skills in technology-enhanced, student-centered teaching.",
    approach: "Designed and delivered scalable Master Trainer model. Trained 80 multipliers who cascaded to 25,000+ faculty across India.",
    outcome: "Cambridge Certified Faculty Training Program; Mission10X designation.",
    impact: "25,000+ faculty transformed · India-wide reach",
  },
  {
    title: "Startup Mentoring: STARTUPCON & Investor Matchmaking",
    domain: "Startup Ecosystems",
    problem: "Pre-seed ventures had no access to investor networks or stage-appropriate mentorship.",
    approach: "Organized annual STARTUPCON events with 500+ attendees; built mentor-founder networks; conducted investor readiness workshops.",
    outcome: "48-hour hackathons; 200+ startups pitched; 60+ investor connections made.",
    impact: "9 direct seed fundings · Strong regional ecosystem",
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
