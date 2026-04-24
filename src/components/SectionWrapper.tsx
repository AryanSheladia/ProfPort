import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export const SectionWrapper = ({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  align = "left",
}: SectionWrapperProps) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} id={id} className={cn("section-pad", className)}>
      <div className="container-tight">
        {(eyebrow || title || intro) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "mb-16 md:mb-24 max-w-3xl",
              align === "center" && "mx-auto text-center"
            )}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="h2 mt-6">{title}</h2>}
            {intro && <p className="lede mt-6">{intro}</p>}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
