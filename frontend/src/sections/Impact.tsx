import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { y: "2019", students: 320, startups: 4, workshops: 12 },
  { y: "2020", students: 540, startups: 7, workshops: 18 },
  { y: "2021", students: 820, startups: 11, workshops: 22 },
  { y: "2022", students: 1240, startups: 18, workshops: 28 },
  { y: "2023", students: 1980, startups: 28, workshops: 34 },
  { y: "2024", students: 2840, startups: 41, workshops: 42 },
];

const counters = [
  { v: 5200, l: "Students mentored", suffix: "+" },
  { v: 41, l: "Startups incubated", suffix: "" },
  { v: 156, l: "Workshops conducted", suffix: "" },
  { v: 38, l: "Corporates trained", suffix: "" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl tabular-nums">
      {val.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Impact = () => {
  return (
    <SectionWrapper
      id="impact"
      eyebrow="Mentorship & impact"
      title={<>Measured by people, programs and <em className="font-display italic text-primary">progress over time.</em></>}
      intro="A live snapshot of mentorship and capability-building work — across institutions, startups and enterprises."
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden mb-12">
        {counters.map((c) => (
          <div key={c.l} className="bg-background p-8 md:p-10">
            <Counter to={c.v} suffix={c.suffix} />
            <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {c.l}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="font-display text-2xl">Growth across cohorts</div>
            <div className="text-sm text-muted-foreground mt-1">
              Students, startups and workshops · 2019 → 2024
            </div>
          </div>
        </div>
        <div className="h-72 md:h-80">
          <ResponsiveContainer>
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary-glow))" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="hsl(var(--border))" vertical={false} />
              <XAxis
                dataKey="y"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Area
                type="monotone"
                dataKey="students"
                stroke="hsl(var(--primary))"
                fill="url(#g1)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="workshops"
                stroke="hsl(var(--primary-glow))"
                fill="url(#g2)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </SectionWrapper>
  );
};
