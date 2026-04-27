import { SectionWrapper } from "@/components/SectionWrapper";
import { Compass, Rocket, Lightbulb, Brain, Users, ArrowUpRight } from "lucide-react";

const items = [
  {
    icon: Compass,
    title: "Design Thinking",
    body: "Expert practitioner of Stanford d.school's Design Thinking process — empathy mapping, problem reframing, ideation, rapid prototyping, and iterative testing. Applied across engineering, education, and social impact over 25+ years.",
  },
  {
    icon: Rocket,
    title: "Innovation & Entrepreneurship",
    body: "Leads EPIC (Entrepreneurship Promotion & Innovation Cell) at SIT Pune. Proven track record building startup ecosystems, organizing STARTUPCON events, and mentoring student ventures from ideation to investor pitch.",
  },
  {
    icon: Lightbulb,
    title: "Faculty Development & Training",
    body: "Wipro Mission10X Master Trainer with 25,000+ engineering faculty trained across India. Cambridge International Certified. Deep expertise in transforming how educators teach technical subjects through technology-enhanced pedagogy.",
  },
  {
    icon: Brain,
    title: "Research & Publications",
    body: "Author of Scopus-indexed journal articles in design education, innovation management, and engineering pedagogy. 2 patents filed. Doctoral research in Electronics & Telecommunication Engineering. Active IEEE and international conference contributor.",
  },
  {
    icon: Users,
    title: "Workshop Facilitation",
    body: "Delivered high-impact workshops for corporate clients (TCS, Infosys), university consortiums (SPPU), and 48-hour hackathons. From half-day intensives to semester-embedded programs — every engagement is context-driven and outcome-focused.",
  },
];

export const Expertise = () => {
  return (
    <SectionWrapper
      id="expertise"
      eyebrow="Areas of expertise"
      title={<>Five practices, one <em className="font-display italic text-primary">human-centered</em> stance.</>}
      intro="Each engagement draws on a mix of these — calibrated to your context, scale and ambition."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
        {items.map(({ icon: Icon, title, body }) => (
          <a
            key={title}
            href="https://www.linkedin.com/in/bhavna-ambudkar-2683a919/details/skills/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-background p-8 md:p-10 hover:bg-secondary/40 transition-colors duration-500 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <Icon className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
            <h3 className="mt-8 font-display text-2xl">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {body}
            </p>
          </a>
        ))}
        <div className="bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] opacity-70">
              Looking for something else?
            </div>
            <h3 className="font-display text-2xl mt-4 leading-tight">
              Custom programs designed around your team.
            </h3>
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm">
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};
