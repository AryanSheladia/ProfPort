import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const timeline = [
  { year: "2024", title: "Innovation strategist · National programs", body: "Leading design thinking adoption across multi-institutional innovation councils." },
  { year: "2021", title: "Director, Design Thinking Cell", body: "Built a design-led learning ecosystem for 2,000+ students and 60+ faculty." },
  { year: "2018", title: "PhD · Human-Centered Innovation", body: "Doctoral research on integrating empathy frameworks into engineering pedagogy." },
  { year: "2014", title: "Faculty · Engineering & Entrepreneurship", body: "Designed studio-style courses bridging engineering, business and human sciences." },
  { year: "2010", title: "Industry practice · Strategy & UX", body: "Worked across product, service and brand design with cross-functional teams." },
];

const philosophy = [
  { t: "Empathy first", d: "Insight comes from listening before solving — design begins with people, not problems." },
  { t: "Learning by doing", d: "Studios, prototypes and real artifacts beat abstract theory every single time." },
  { t: "Real-world relevance", d: "Every workshop and course ships outcomes you can take to a boardroom or a community." },
];

export const About = () => {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title={<>An educator and strategist working at the <em className="font-display italic text-primary">edge of design and innovation.</em></>}
      intro="Two decades of teaching, designing and leading — translating human-centered methods into outcomes for universities, enterprises and founders."
    >
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
        <div className="space-y-8">
          {philosophy.map((p) => (
            <div key={p.t} className="border-t border-border pt-6">
              <div className="font-display text-xl">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-8">
            Career timeline
          </div>
          <ol className="relative">
            <span className="absolute left-[7px] top-1 bottom-1 w-px bg-border" />
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative pl-10 pb-12 last:pb-0 group"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary ring-4 ring-primary/10 group-hover:ring-primary/20 transition" />
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t.year}
                </div>
                <div className="font-display text-xl mt-1.5">{t.title}</div>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl leading-relaxed">
                  {t.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
};
