'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { Icon } from '@iconify/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Skills as SkillsData } from '@/app/api/data'
import { useLanguage } from '@/app/context/LanguageContext'

interface SkillItem {
  name: string
  icon: string
  progress?: number
}

const Skills = () => {
  const [skills, setSkills] = useState<SkillItem[]>([])
  const { t, language } = useLanguage()
  const sliderRef = useRef<Slider | null>(null)

  useEffect(() => {
    setSkills(SkillsData)
  }, [])

  const goPrev = () => sliderRef.current?.slickPrev()
  const goNext = () => sliderRef.current?.slickNext()

  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    draggable: true,
    pauseOnHover: true,
    rtl: language === 'ar',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section id='skills' className='bg-white dark:bg-darkmode py-16 overflow-hidden'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div
            className='flex gap-2 items-center justify-center mb-4'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              {t('My Skills')}
            </span>
          </div>
          <h2
            className='text-4xl md:text-5xl font-bold text-midnight_text dark:text-white mb-4'
            data-aos='fade-up'
            data-aos-delay='300'
            data-aos-duration='1000'>
            {t('Technical Skills & Expertise')}
          </h2>
          <p
            className='text-base text-grey dark:text-white/70 max-w-2xl mx-auto'
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-duration='1000'>
            {t('Technologies and tools I use to build amazing web experiences')}
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className='relative px-2 sm:px-6'
          data-aos='fade-up'
          data-aos-delay='500'
          data-aos-duration='1000'>
          <Slider key={language} ref={sliderRef} {...settings}>
            {skills.map((skill, index) => (
              <div key={index} className='px-3 py-2'>
                <div className='bg-section dark:bg-darklight rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 min-h-[150px] group cursor-grab active:cursor-grabbing'>
                  <div className='flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-darkmode shadow-xs group-hover:scale-110 transition-transform duration-300'>
                    <Icon
                      icon={skill.icon}
                      width={36}
                      height={36}
                      className='transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-base md:text-lg font-semibold text-midnight_text dark:text-white group-hover:text-primary transition-colors duration-300'>
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Controls */}
          <div className='flex items-center justify-center gap-4 mt-8'>
            <button
              type='button'
              onClick={goPrev}
              aria-label={language === 'ar' ? 'المهارة السابقة' : 'Previous Skill'}
              className='flex items-center justify-center w-11 h-11 rounded-full text-primary bg-section dark:bg-darklight border border-slate-200/80 dark:border-white/10 shadow-sm hover:bg-primary hover:text-white hover:border-primary hover:shadow-md transition-all duration-300 active:scale-95'>
              <Icon icon='solar:arrow-left-bold' width={20} height={20} className='rtl-flip' />
            </button>
            <button
              type='button'
              onClick={goNext}
              aria-label={language === 'ar' ? 'المهارة التالية' : 'Next Skill'}
              className='flex items-center justify-center w-11 h-11 rounded-full text-primary bg-section dark:bg-darklight border border-slate-200/80 dark:border-white/10 shadow-sm hover:bg-primary hover:text-white hover:border-primary hover:shadow-md transition-all duration-300 active:scale-95'>
              <Icon icon='solar:arrow-right-bold' width={20} height={20} className='rtl-flip' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
