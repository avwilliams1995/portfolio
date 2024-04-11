import Image from "next/image";
import Intro from "@/components/intro";
import Divider from "@/components/divider";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
