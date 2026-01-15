'use client'
import React, { useEffect, useState } from 'react'
import { Progress as ProgressData } from '@/app/api/data'
import { useLanguage } from '@/app/context/LanguageContext'

// Define the interface for ProgressItem
interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([])
  const { t } = useLanguage()
  
  useEffect(() => {
    setProgressValues(ProgressData)
  }, [])

  return (
    <section
      className={`scroll-mt-25 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='about'>
      <div className='container mx-auto max-w-6xl px-4 py-16'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='flex gap-2 items-center justify-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              {t('About Me')}
            </span>
          </div>
          <h2 className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl'>
            {t('Frontend Developer')}
          </h2>
        </div>

        {/* Two Columns Text */}
        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          <div className='space-y-4'>
            <p className='text-base font-normal text-midnight_text dark:text-white/70 leading-relaxed'>
              {t('about.description.1')}
            </p>
            <p className='text-base font-normal text-midnight_text dark:text-white/70 leading-relaxed'>
              {t('about.description.2')}
            </p>
          </div>
          <div className='space-y-4'>
            <p className='text-base font-normal text-midnight_text dark:text-white/70 leading-relaxed'>
              {t('about.description.3')}
            </p>
            <p className='text-base font-normal text-midnight_text dark:text-white/70 leading-relaxed'>
              {t('about.description.4')}
            </p>
          </div>
        </div>

        {/* Skills Progress Bars Grid */}
        <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {progressValues.map((item, index) => (
            <div
              key={index}
              className='bg-section dark:bg-darklight rounded-lg p-6 shadow-sm'
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
              data-aos-duration='1000'>
              <div className='flex items-center justify-between mb-3'>
                <h3 className='text-base font-semibold text-midnight_text dark:text-white'>
                  {t(item.title)}
                </h3>
                <span className='text-base font-semibold text-midnight_text dark:text-white'>
                  {item.Progress}%
                </span>
              </div>
              <div className='relative h-2 w-full bg-primary/20 rounded-full overflow-hidden'>
                <div
                  className='absolute left-0 top-0 bottom-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out'
                  style={{ width: `${item.Progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Progresswork
