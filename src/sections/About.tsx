import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const timeline = [
  { year: "2023 — Present", title: "Professor & Head · SIT Pune", body: "Heading the department at Symbiosis Institute of Technology, Pune — building design-thinking-led curriculum, faculty capability and industry partnerships." },
  { year: "2023 — Present", title: "Incharge · EPIC Cell, SIT Pune", body: "Leading the Entrepreneurship Promotion & Innovation Cell — incubating student ventures, strategic initiatives and innovation programs." },
  { year: "2022 — 2023", title: "Coordinator · EDSIC, DYPIT Pimpri", body: "Professor & Coordinator of the Entrepreneurship Development, Startup & Innovation Cell at Dr. D.Y. Patil Institute of Technology, Pimpri." },
  { year: "2015 — 2023", title: "Professor & Dean · Industry-Institute & Alumni Interaction", body: "Eight+ years driving industry-institute collaboration and alumni networks at Dr. D.Y. Patil Institute of Engineering & Technology, Pune." },
  { year: "2009 — 2012", title: "National Master Trainer · Mission10X, Wipro", body: "Recognised by Wipro Technologies as a Master Trainer in Mission10X — a Wipro initiative that enrolled 25,000 engineering teachers and was named by the World Economic Forum among the top 50 global talent-mobility initiatives." },
  { year: "1998 — 2014", title: "HOD · Electronics Engineering, DYPIET", body: "16+ years heading Electronics Engineering — building department culture, pedagogy and student outcomes." },
  { year: "1987 — 1991", title: "B.E. · College of Engineering, Badnera", body: "Engineering education foundation; later post-graduate work at COEP Technological University in Engineering & Critical Thinking." },
];

const philosophy = [
  { t: "Empathy first", d: "Insight comes from listening before solving — design begins with people, not problems." },
  { t: "Teaching as learning", d: "Application-oriented pedagogy that turns classrooms into spaces of lifelong, real-world impact." },
  { t: "Rally around vision", d: "Multiskilling and a distinctive ability to align teams around a shared vision to deliver outstanding results." },
];

export const About = () => {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title={<>An intrapreneurial academician working at the <em className="font-display italic text-primary">edge of engineering, design and innovation.</em></>}
      intro="25+ years across Electronics & Telecommunication, Computer Networks, Computational Technologies, Digital & Biomedical Electronics and Education Technology — with a special tune to entrepreneurship, innovation and design thinking in training and industry applications."
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
