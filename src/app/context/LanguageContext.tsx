'use client'
import React, { createContext, useContext } from 'react'

interface LanguageContextType {
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<string, string> = {
  Home: 'Home',
  About: 'About',
  Services: 'Services',
  Portfolio: 'Portfolio',
  Contact: 'Contact',
  'Sign In': 'Sign In',
  'Sign Up': 'Sign Up',
  'Frontend Developer': 'Frontend Developer',
  'hero.name': 'Youssef Atef',
  'hero.title': 'I am Professional User Experience Designer',
  'hero.description.1':
    "A Frontend developer with 3-5 years of experience, I'm passionate about building user interfaces that not only look great but also work seamlessly and make a real difference to the user experience. I use React and Vue as my core tools, and I love translating designs into clean, organized, and scalable code.",
  'hero.description.2':
    "My work isn't just about translating a design into code—it's a continuous effort to understand the end user's needs and build solutions that truly serve them. I like to stay up-to-date with the latest frontend developments and constantly experiment with new tools and technologies to keep my work both relevant and practical.",
  'hero.description.3':
    "If you're looking for a developer who understands the details and cares about performance as much as aesthetics, you've come to the right place.",
  'View My Work': 'View My Work',
  'My Projects': 'My Projects',
  'Download CV': 'Download CV',
  'Need help?': 'Need help?',
  'Contact our experts': 'Contact our experts',
  'Tell us about your project': 'Tell us about your project',
  Menu: 'Menu',
  'About Me': 'About Me',
  'about.subtitle': 'Passionate about creating beautiful and functional web experiences',
  'Projects Completed': 'Projects Completed',
  'Years Experience': 'Years Experience',
  'about.description.1':
    "I'm a passionate Frontend Developer specializing in building modern, responsive web applications. With expertise in React, Next.js, and modern frameworks, I create engaging user experiences that combine beautiful design with optimal performance.",
  'about.description.2':
    'I focus on writing clean, maintainable code and staying up-to-date with the latest web technologies to deliver high-quality solutions that meet both user needs and business objectives.',
  'about.description.3':
    'My approach to development combines technical excellence with creative problem-solving. I believe in creating intuitive interfaces that not only look great but also provide seamless user experiences.',
  'about.description.4':
    'Whether working on a small project or a large-scale application, I bring attention to detail, best practices, and a commitment to delivering exceptional results.',
  'our services': 'our services',
  'Services specifically designed to meet your business needs':
    'Services specifically designed to meet your business needs',
  'services.subtitle':
    'Delivering exceptional solutions tailored to your unique requirements',
  'Learn More': 'Learn More',
  'service.0.title': 'Web Development',
  'service.0.description':
    'Building modern, responsive web applications using React, Next.js, and TypeScript. Creating fast, scalable, and user-friendly websites.',
  'service.1.title': 'Responsive Design',
  'service.1.description':
    'Ensuring your website looks perfect on all devices. Mobile-first approach with seamless user experience across desktop, tablet, and mobile.',
  'service.2.title': 'UI/UX Design',
  'service.2.description':
    'Creating beautiful and intuitive user interfaces. Focus on user experience, accessibility, and modern design principles.',
  'My Skills': 'My Skills',
  'Technical Skills & Expertise': 'Technical Skills & Expertise',
  'Technologies and tools I use to build amazing web experiences':
    'Technologies and tools I use to build amazing web experiences',
  'Quick Links': 'Quick Links',
  Skills: 'Skills',
  'All rights reserved': 'All rights reserved',
  'Back to top': 'Back to top',
  'Explore my portfolio showcase': 'Explore my portfolio showcase',
  'portfolio.description':
    'Dive into a curated collection of my finest work, showcasing expertise across various industries.',
  'View Demo': 'View Demo',
  'React & Next.js': 'React & Next.js',
  'JavaScript & TypeScript': 'JavaScript & TypeScript',
  'HTML & CSS': 'HTML & CSS',
  'Responsive Design': 'Responsive Design',
  'UI/UX Design': 'UI/UX Design',
  'Why Choose Me': 'Why Choose Me',
  'How You Will Benefit From My Services': 'How You Will Benefit From My Services',
  'benefits.subtitle':
    'Discover the advantages of working with a professional frontend developer who delivers exceptional results',
  'benefits.1.title': 'Modern & Responsive Design',
  'benefits.1.description':
    'Get a website that looks perfect on all devices - desktop, tablet, and mobile. Your users will have an excellent experience regardless of their device.',
  'benefits.2.title': 'Fast Loading & Performance',
  'benefits.2.description':
    'Optimized code and best practices ensure your website loads quickly, improving user experience and SEO rankings.',
  'benefits.3.title': 'Scalable Solutions',
  'benefits.3.description':
    'Build your website with scalability in mind. As your business grows, your website can easily accommodate new features and increased traffic.',
  'benefits.4.title': 'Clean & Maintainable Code',
  'benefits.4.description':
    'Receive well-structured, documented code that is easy to maintain and update. Future modifications will be simple and cost-effective.',
  'benefits.5.title': 'SEO Optimized',
  'benefits.5.description':
    'Your website will be built with SEO best practices, helping you rank higher in search results and attract more organic traffic.',
  'benefits.6.title': 'Ongoing Support',
  'benefits.6.description':
    'Get continuous support and maintenance. I am here to help you with updates, bug fixes, and any questions you may have.',
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const t = (key: string): string => translations[key] || key

  return (
    <LanguageContext.Provider value={{ t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
