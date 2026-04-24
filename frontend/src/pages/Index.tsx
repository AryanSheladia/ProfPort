import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Expertise } from "@/sections/Expertise";
import { Projects } from "@/sections/Projects";
import { Research } from "@/sections/Research";
import { Workshops } from "@/sections/Workshops";
import { Impact } from "@/sections/Impact";
import { Consultancy } from "@/sections/Consultancy";
import { Media } from "@/sections/Media";
import { Blog } from "@/sections/Blog";
import { Contact } from "@/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Research />
      <Workshops />
      <Impact />
      <Consultancy />
      <Media />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
