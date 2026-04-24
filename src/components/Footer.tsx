import { Mail, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-tight py-20">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background font-semibold">
                BA
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg">Dr. Bhavna Ambudkar</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Design Thinking · Innovation
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Transforming complex problems through Design Thinking, Innovation,
              and Entrepreneurship.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Research", "#research"],
                ["Workshops", "#workshops"],
                ["Insights", "#blog"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Connect
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@bhavnaambudkar.com"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" /> hello@bhavnaambudkar.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4" /> Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary"
                >
                  Start a conversation <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Dr. Bhavna Ambudkar. All rights reserved.</div>
          <div>Crafted with intention · Pune, India</div>
        </div>
      </div>
    </footer>
  );
};
