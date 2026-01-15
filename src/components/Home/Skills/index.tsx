'use client'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { Skills as SkillsData } from '@/app/api/data'
import { useLanguage } from '@/app/context/LanguageContext'

interface SkillItem {
  name: string
  icon: string
  progress: number
}

const Skills = () => {
  const [skills, setSkills] = useState<SkillItem[]>([])
  const { t } = useLanguage()

  useEffect(() => {
    setSkills(SkillsData)
  }, [])

  return (
    <section id='skills' className='bg-white dark:bg-darkmode py-16'>
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

        {/* Skills Grid */}
        <div className='grid md:grid-cols-4 grid-cols-2 gap-6 max-w-5xl mx-auto'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='bg-section dark:bg-darklight rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300'
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
              data-aos-duration='1000'>
              {/* Icon and Name */}
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex-shrink-0'>
                  <Icon
                    icon={skill.icon}
                    width={32}
                    height={32}
                    className='text-midnight_text dark:text-white'
                  />
                </div>
                <h3 className='text-lg font-semibold text-midnight_text dark:text-white'>
                  {skill.name}
                </h3>
              </div>

              {/* Progress Bar */}
              <div className='space-y-2'>
                <div className='relative h-2 w-full bg-primary/20 dark:bg-primary/10 rounded-full overflow-hidden'>
                  <div
                    className='absolute left-0 top-0 bottom-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out'
                    style={{ width: `${skill.progress}%` }}></div>
                </div>
                <div className='text-right'>
                  <span className='text-sm font-semibold text-midnight_text dark:text-white'>
                    {skill.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

