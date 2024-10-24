"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>    
    </main>
  )
}
