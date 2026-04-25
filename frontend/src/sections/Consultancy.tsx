import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { Building2, Sparkles, GraduationCap, Mic, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Innovation",
    body: "Capability building, innovation portfolios, and culture interventions.",
  },
  {
    id: "startup",
    icon: Sparkles,
    title: "Startup Mentorship",
    body: "1:1 advisory across discovery, product, fundraising and team building.",
  },
  {
    id: "academic",
    icon: GraduationCap,
    title: "Academic Collaboration",
    body: "Curriculum, faculty development, research partnerships and innovation cells.",
  },
  {
    id: "keynote",
    icon: Mic,
    title: "Keynote Speaking",
    body: "Talks on design thinking, AI, education and the future of work.",
  },
];

const slots = ["09:30", "11:00", "14:00", "16:00"];

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Select a service"),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const Consultancy = () => {
  const [service, setService] = useState(services[0].id);
  const [time, setTime] = useState(slots[0]);
  const [submitting, setSubmitting] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      organization: String(form.get("organization") || ""),
      service,
      date: String(form.get("date") || ""),
      time,
      notes: String(form.get("notes") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast.error(first || "Please check the form");
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/consultancy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message = errorData?.message || "Failed to submit request";
        throw new Error(message);
      }

      toast.success("Request received — I'll reply within 2 business days.");
      (e.target as HTMLFormElement).reset();
      setService(services[0].id);
      setTime(slots[0]);
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="consultancy"
      eyebrow="Consultancy"
      title={<>Smart consultation hub — <em className="font-display italic text-primary">book a session.</em></>}
      intro="Pick a service, a date and a time slot. I respond personally within 2 business days."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
        <div className="space-y-3">
          {services.map((s) => {
            const Icon = s.icon;
            const active = service === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setService(s.id)}
                className={cn(
                  "w-full text-left rounded-2xl border p-6 transition-all duration-300",
                  active
                    ? "border-primary bg-primary/5 shadow-soft"
                    : "border-border bg-card hover:border-foreground/30"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-xl shrink-0 transition-colors",
                      active
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    )}
                  >
                    {active ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-lg">{s.title}</div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@org.com" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization (optional)</Label>
            <Input id="organization" name="organization" placeholder="Company / institution" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred date</Label>
              <Input id="date" name="date" type="date" min={today} required />
            </div>
            <div className="space-y-2">
              <Label>Time slot</Label>
              <div className="flex flex-wrap gap-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setTime(s)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs",
                      time === s
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Tell me about your context</Label>
            <Textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="A few sentences on goals, audience and what success looks like."
              maxLength={1000}
            />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full h-12"
            size="lg"
          >
            {submitting ? "Sending…" : <>Submit request <ArrowRight className="ml-1 h-4 w-4" /></>}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
};
