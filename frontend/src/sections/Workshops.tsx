import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Clock, Users, ArrowRight } from "lucide-react";

const workshops = [
  {
    title: "Design Thinking · Foundations",
    audience: "Corporate teams · Faculty",
    duration: "2 days · in-person",
    body: "Empathy, problem framing, ideation and prototyping — through a real organizational challenge.",
  },
  {
    title: "Innovation Studio for Leaders",
    audience: "Senior leadership",
    duration: "3 days · hybrid",
    body: "Build an innovation portfolio, operating model and capability roadmap for your function.",
  },
  {
    title: "Founder Bootcamp",
    audience: "Early-stage founders",
    duration: "6 weeks · cohort",
    body: "Customer discovery, MVP scoping, business modelling and investor narrative — taught in studio mode.",
  },
  {
    title: "AI for Design & Strategy",
    audience: "Designers · Product teams",
    duration: "1 day · in-person",
    body: "Hands-on labs to integrate generative AI responsibly into design and decision workflows.",
  },
];

export const Workshops = () => {
  return (
    <SectionWrapper
      id="workshops"
      eyebrow="Workshops & training"
      title={<>Studio-style programs that <em className="font-display italic text-primary">change how teams think.</em></>}
      intro="Each workshop is shaped around your context — outcomes, artifacts and capabilities you can use the next morning."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {workshops.map((w) => (
          <article
            key={w.title}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col"
          >
            <h3 className="font-display text-2xl">{w.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {w.body}
            </p>
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" /> {w.duration}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-3.5 w-3.5" /> {w.audience}
              </span>
            </div>
            <Button
              asChild
              variant="ghost"
              className="mt-6 self-start rounded-full px-0 text-primary hover:bg-transparent hover:text-primary"
            >
              <a href="#consultancy">
                Request workshop <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
