import Hero from "@/app/components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Header from "@/components/header";
import GridBackground from "@/components/grid-background";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <div>
      <Header />
      <GridBackground />
      <main className="container lg:px-28">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
