import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#impact", label: "Impact" },
  { href: "#consultancy", label: "Consultancy" },
  { href: "#blog", label: "Insights" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-tight flex h-20 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background text-sm font-semibold tracking-tight">
            BA
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base">Dr. Bhavna Ambudkar</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Design · Innovation
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#consultancy">Book a session</a>
          </Button>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-tight py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base py-2 border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="rounded-full mt-4">
              <a href="#consultancy" onClick={() => setOpen(false)}>
                Book a session
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
