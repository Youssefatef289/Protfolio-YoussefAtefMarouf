import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Skills from '@/components/Home/Skills';
import ClientBenefits from '@/components/Home/ClientBenefits';
import Projects from '@/components/Home/Projects';
export const metadata: Metadata = {
  title: "Protfolio-YoussefAtefMarouf",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Progresswork isColorMode={false} />
      <Services />
      <Projects />
      <Skills />
      <ClientBenefits />
    </main>
  )
}
