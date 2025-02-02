import Experience from "./Experience";
import HeroBanner from "./HeroBanner";
import Projects from "./Projects";

export default function Landing() {
  return (
    <div className="h-[100%] overflow-y-auto flex flex-col gap-2">
      <section id="home">
        <HeroBanner />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
