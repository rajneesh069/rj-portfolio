import Experience from "./Experience";
import HeroBanner from "./HeroBanner";
import Projects from "./Projects";
import { Separator } from "./ui/separator";

export default function Landing() {
  return (
    <div className="h-[100%] flex flex-col gap-3">
      <section id="home">
        <HeroBanner />
      </section>
      <Separator />
      <section id="experience" className="flex justify-center">
        <Experience />
      </section>
      <Separator />
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
