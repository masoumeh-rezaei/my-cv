

import Hero from "./../components/Hero";
import Skills from "./skills/page";
import Projects from "./projects/page";
import About from "./about/page";
import React from "react";
import ContactPage from "@/app/contact/page";


export default function Home() {

  return (
   <>
    <div className="bg-gradient-to-r  from-[#282f44] to-[#634258] dark:from-[#1A1A1D] dark:to-[#37353E]  overflow-hidden ">
    
    <Hero />
    <Skills/>
    <Projects/>
    <About/>
      <ContactPage/>
    </div>
   </>
  );
}
