'use client'
import React from 'react'
import { Servicebox } from '@/app/api/data'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/app/context/LanguageContext'

const Services = () => {
  const { t } = useLanguage()
  
  return (
    <section className='bg-section dark:bg-darklight py-16' id='services'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            {t('our services')}
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-12 md:w-4/6 w-full mx-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          {t('Services specifically designed to meet your business needs')}
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'
              className='group bg-white dark:bg-darkmode rounded-lg p-8 shadow-service hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col gap-6'>
              {/* Icon Container */}
              <div className='w-16 h-16 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300'>
                <Icon
                  icon={item.icon}
                  width={32}
                  height={32}
                  className='text-primary group-hover:text-white transition-colors duration-300'
                />
              </div>
              
              {/* Content */}
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
                  {t(`service.${index}.title`)}
                </h3>
                <p className='text-base font-normal text-grey dark:text-white/70 leading-relaxed'>
                  {t(`service.${index}.description`)}
                </p>
              </div>
              
              {/* Arrow Link */}
              <div className='flex items-center gap-2 text-primary group-hover:gap-4 transition-all duration-300 cursor-pointer'>
                <span className='text-base font-medium'>
                  {t('Learn More')}
                </span>
                <Icon
                  icon='solar:arrow-right-bold'
                  width={20}
                  height={20}
                  className='group-hover:translate-x-1 transition-transform duration-300'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
