

import Hero from "./../components/Hero";
import Skills from "./skills/page";
import Projects from "./projects/page";
import About from "./about/page";
export default function Home() {
  return (
   <>
    <div className="bg-gradient-to-r from-[#282f44] to-[#634258]  overflow-hidden ">
    
    <Hero />
    <Skills/>
    <Projects/>
    <About/>
    </div>
   </>
  );
}
