import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast.error(first || "Please check the form");
      return;
    }
    setSubmitting(true);
    try {
      const key = "contact_messages";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push({ ...parsed.data, createdAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
      await new Promise((r) => setTimeout(r, 500));
      toast.success("Message sent — thank you for reaching out.");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact & collaboration"
      title={<>Have a problem worth solving? <em className="font-display italic text-primary">Let's talk.</em></>}
    >
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
        <div className="space-y-8">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Reach out
            </div>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              For workshops, consultancy, keynotes or research collaborations.
              I read every message and reply personally.
            </p>
          </div>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</div>
                <a
                  href="mailto:bhavna.ambudkar@sitpune.edu.in"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  bhavna.ambudkar@sitpune.edu.in
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Phone</div>
                <a href="tel:+919890094521" className="text-foreground hover:text-primary transition-colors">+91 98900 94521</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Location</div>
                <span className="text-foreground">Symbiosis Institute of Technology · Pune, Maharashtra, India</span>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="cname">Name</Label>
              <Input id="cname" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cemail">Email</Label>
              <Input id="cemail" name="email" type="email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="csubject">Subject</Label>
            <Input id="csubject" name="subject" placeholder="What's this about?" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cmessage">Message</Label>
            <Textarea id="cmessage" name="message" rows={6} required maxLength={2000} />
          </div>
          <Button type="submit" disabled={submitting} className="rounded-full h-12 px-8" size="lg">
            {submitting ? "Sending…" : <>Send message <ArrowRight className="ml-1 h-4 w-4" /></>}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
};
