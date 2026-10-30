'use client'
import React from 'react'
import { useLanguage } from '@/app/context/LanguageContext'

const Progresswork = ({ isColorMode }: { isColorMode: boolean }) => {
  const { t } = useLanguage()

  return (
    <section
      className={`scroll-mt-20 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='about'>
      <div className='container mx-auto max-w-6xl px-4 py-16'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div
            className='flex gap-2 items-center justify-center mb-4'
            data-aos='fade-up'
            data-aos-duration='1000'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              {t('About Me')}
            </span>
          </div>
          <h2
            className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl'
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'>
            {t('Frontend Developer')}
          </h2>
        </div>

        {/* Two Columns Text */}
        <div
          className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='space-y-4'>
            <p className='text-base md:text-lg font-normal text-midnight_text dark:text-white/70 leading-relaxed'>
              {t('about.description.1')}
            </p>
            <p className='text-base md:text-lg font-normal text-midnight_text dark:text-white/70 leading-relaxed'>
              {t('about.description.2')}
            </p>
          </div>
          <div className='space-y-4'>
            <p className='text-base md:text-lg font-normal text-midnight_text dark:text-white/70 leading-relaxed'>
              {t('about.description.3')}
            </p>
            <p className='text-base md:text-lg font-normal text-midnight_text dark:text-white/70 leading-relaxed'>
              {t('about.description.4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
