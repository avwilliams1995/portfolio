import Image from "next/image";
import Intro from "@/components/sections/intro";
import Divider from "@/components/ui/divider";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Products from "@/components/sections/products";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4" id="main-content">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Products />
      <Divider />
      <Skills />
      <Contact />
    </main>
  );
}
