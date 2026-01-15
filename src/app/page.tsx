import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Skills from '@/components/Home/Skills';
import Portfolio from '@/components/SharedComponent/portfollio'
export const metadata: Metadata = {
  title: "Protfolio-YoussefAtefMarouf",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Progresswork isColorMode={false} />
      <Services />
      <Skills />
      <Portfolio />
    </main>
  )
}
