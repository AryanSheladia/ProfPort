import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/HeroBackground";

const stats = [
  { v: "5,000+", l: "Students mentored" },
  { v: "120+", l: "Workshops led" },
  { v: "40+", l: "Startups supported" },
  { v: "15+", l: "Years in academia" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      <HeroBackground />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/70 backdrop-blur px-4 py-1.5 text-xs"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground">
            Now mentoring · Innovation cohort 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-8 max-w-4xl"
        >
          Transforming complex problems through{" "}
          <span className="italic text-primary">design thinking</span>,
          innovation & entrepreneurship.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lede mt-8 max-w-2xl"
        >
          I'm Dr. Bhavna Ambudkar — an educator, strategist and design thinking
          practitioner helping institutions, founders and leaders turn human
          insight into measurable innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full px-7 h-12 text-sm">
            <a href="#consultancy">
              Book a session
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full px-7 h-12 text-sm hover:bg-foreground/5"
          >
            <a href="#projects">See selected work</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border bg-border"
        >
          {stats.map((s) => (
            <div
              key={s.l}
              className="bg-background/80 backdrop-blur p-6 md:p-8"
            >
              <div className="font-display text-3xl md:text-4xl">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
