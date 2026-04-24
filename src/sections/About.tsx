import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const timeline = [
  { year: "2024", title: "President · EPIC Cell, SIT Pune", body: "Leading the Entrepreneurship Promotion and Innovation Cell and the Institutions Innovation Council at Symbiosis Institute of Technology." },
  { year: "2023", title: "Coordinator · AICTE IDEA Lab", body: "Anchoring SIT Pune's AICTE IDEA Lab — a maker-space turning student ideas into prototypes, IP and ventures." },
  { year: "2022", title: "Professor & Head · E&TC, SIT Pune", body: "Heading the Electronics & Telecommunication department; building design-thinking-led curriculum and faculty capability." },
  { year: "2020", title: "Cambridge International Certified", body: "Certified Teacher and Trainer (Cambridge International) — formalising two decades of pedagogical practice." },
  { year: "2015", title: "Innovation Officer & Chief Mentor", body: "Mentoring student innovators, startup teams and faculty research across multi-disciplinary programs." },
  { year: "2008", title: "Researcher · E&TC and signal systems", body: "First indexed publications on networks and signal processing — the foundation of an ongoing research practice." },
  { year: "1999", title: "Faculty · Electronics & Telecommunication", body: "Began teaching in E&TC engineering — the start of a 25+ year academic journey." },
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
