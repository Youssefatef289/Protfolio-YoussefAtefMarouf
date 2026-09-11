import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Skills from '@/components/Home/Skills';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Contact from '@/components/Home/Contact'
export const metadata: Metadata = {
  title: "Youssef Atef | Frontend Developer",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Progresswork isColorMode={false} />
      <Services />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Contact />
    </main>
  )
}
