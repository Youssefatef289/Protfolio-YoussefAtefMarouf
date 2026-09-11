'use client'
import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { useLanguage } from '@/app/context/LanguageContext'

const Testimonial = () => {
  const { t } = useLanguage()
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none'
      id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex gap-2 items-center justify-center'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            {t('Testimonials')}
          </span>
        </div>
        <div className='text-center pt-10'>
          <Image
            src={getImgPath('/images/Youssef/Hero - Youssef.jpeg')}
            alt='Youssef Atef'
            width={150}
            height={150}
            quality={100}
            className='w-24 h-24 rounded-full object-cover m-auto border-4 border-primary'
          />
          <div className='pt-10 pb-10'>
            <p className='font-medium md:text-xl text-base text-midnight_text dark:text-white text-center max-w-3xl mx-auto'>
              {t('testimonial.quote')}
            </p>
          </div>
          <div className='text-center'>
            <strong className='text-lg font-bold text-midnight_text dark:text-primary'>
              {t('Happy Client')}
            </strong>
            <p className='text-base text-gray dark:text-white/50 '>
              {t('Previous project owner')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
