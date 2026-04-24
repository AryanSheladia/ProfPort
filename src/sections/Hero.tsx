import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/HeroBackground";
import portrait from "@/assets/bhavna-ambudkar.jpg";

const stats = [
  { v: "25+", l: "Years in academia" },
  { v: "25K", l: "Teachers via Mission10X" },
  { v: "9,596", l: "LinkedIn followers" },
  { v: "Head", l: "E&TC · SIT Pune" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      <HeroBackground />
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/70 backdrop-blur px-4 py-1.5 text-xs"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground">
                Professor & Head · Symbiosis Institute of Technology, Pune
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="display mt-8"
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
              I'm Dr. Bhavna Ambudkar — an intrapreneurial academician with 25+
              years in Electronics & Telecommunication. Design Thinking expert,
              Cambridge International certified Teacher & Trainer, Innovation
              Officer and Chief Mentor at Symbiosis Institute of Technology, Pune.
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl rounded-[2rem]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface-elevated shadow-soft">
              <img
                src={portrait}
                alt="Dr. Bhavna Ambudkar — Professor and Head, E&TC, Symbiosis Institute of Technology, Pune"
                className="h-full w-full object-cover object-[30%_center]"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Pune, Maharashtra
                </div>
                <div className="font-display text-lg mt-1">
                  Dr. Bhavna Ambudkar
                </div>
              </div>
            </div>
          </motion.div>
        </div>

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
