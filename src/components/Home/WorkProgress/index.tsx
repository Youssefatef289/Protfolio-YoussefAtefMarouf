'use client'
import React, { useEffect, useState } from 'react'
import { Progress as ProgressData } from '@/app/api/data'
import { useLanguage } from '@/app/context/LanguageContext'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

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
          ? 'dark:bg-darklight bg-gray-50'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='about'>
      <div className='container mx-auto max-w-6xl px-4 py-20'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='flex gap-2 items-center justify-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              {t('About Me')}
            </span>
          </div>
          <h2 className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl mb-4'>
            {t('Frontend Developer')}
          </h2>
          <p className='text-grey dark:text-white/60 text-lg max-w-2xl mx-auto'>
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Left Side - Image */}
          <div 
            className='order-2 lg:order-1'
            data-aos='fade-right'
            data-aos-duration='1000'>
            <div className='relative'>
              <div className='absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20'></div>
              <div className='relative bg-white dark:bg-darklight rounded-2xl p-6 shadow-xl'>
                <Image
                  src={getImgPath('/images/Youssef/Hero - Youssef.jpeg')}
                  alt='Youssef Atef'
                  width={500}
                  height={600}
                  quality={100}
                  className='w-full h-auto rounded-xl object-cover'
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div 
            className='order-1 lg:order-2 space-y-6'
            data-aos='fade-left'
            data-aos-duration='1000'>
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

            {/* Stats Cards */}
            <div className='grid grid-cols-2 gap-4 pt-4'>
              <div className='bg-white dark:bg-darklight rounded-lg p-4 shadow-md border border-gray-100 dark:border-gray-800'>
                <div className='flex items-center gap-3 mb-2'>
                  <Icon icon="solar:code-bold" width={24} height={24} className='text-purple-600 dark:text-purple-400' />
                  <h3 className='text-2xl font-bold text-midnight_text dark:text-white'>50+</h3>
                </div>
                <p className='text-sm text-grey dark:text-white/60'>{t('Projects Completed')}</p>
              </div>
              <div className='bg-white dark:bg-darklight rounded-lg p-4 shadow-md border border-gray-100 dark:border-gray-800'>
                <div className='flex items-center gap-3 mb-2'>
                  <Icon icon="solar:heart-bold" width={24} height={24} className='text-purple-600 dark:text-purple-400' />
                  <h3 className='text-2xl font-bold text-midnight_text dark:text-white'>3+</h3>
                </div>
                <p className='text-sm text-grey dark:text-white/60'>{t('Years Experience')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Progress Bars Grid */}
        <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {progressValues.map((item, index) => (
            <div
              key={index}
              className='bg-white dark:bg-darklight rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300'
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
              data-aos-duration='1000'>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-semibold text-midnight_text dark:text-white'>
                  {t(item.title)}
                </h3>
                <span className='text-lg font-bold text-purple-600 dark:text-purple-400'>
                  {item.Progress}%
                </span>
              </div>
              <div className='relative h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
                <div
                  className='absolute left-0 top-0 bottom-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000 ease-out'
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
