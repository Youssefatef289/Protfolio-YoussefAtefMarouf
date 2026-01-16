'use client'
import React from 'react'
import { Servicebox } from '@/app/api/data'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/app/context/LanguageContext'

const Services = () => {
  const { t } = useLanguage()
  
  const gradientColors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-orange-500 to-red-500',
  ]
  
  return (
    <section className='bg-white dark:bg-darkmode py-20' id='services'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div
            className='flex gap-2 items-center justify-center mb-4'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              {t('our services')}
            </span>
          </div>
          <h2
            className='text-4xl md:text-5xl font-bold text-midnight_text dark:text-white mb-4'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'>
            {t('Services specifically designed to meet your business needs')}
          </h2>
          <p className='text-grey dark:text-white/60 text-lg max-w-2xl mx-auto'>
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 150}`}
              data-aos-duration='1000'
              className='group relative bg-white dark:bg-darklight rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-800 overflow-hidden'>
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon Container with Gradient */}
              <div className='relative z-10 mb-6'>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradientColors[index]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <Icon
                    icon={item.icon}
                    width={40}
                    height={40}
                    className='text-white'
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className='relative z-10 flex-1 mb-6'>
                <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'>
                  {t(`service.${index}.title`)}
                </h3>
                <p className='text-base font-normal text-grey dark:text-white/70 leading-relaxed'>
                  {t(`service.${index}.description`)}
                </p>
              </div>
              
              {/* Arrow Link */}
              <div className='relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all duration-300'>
                <span className={`text-base font-semibold bg-gradient-to-r ${gradientColors[index]} bg-clip-text text-transparent`}>
                  {t('Learn More')}
                </span>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradientColors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon
                    icon='solar:arrow-right-bold'
                    width={18}
                    height={18}
                    className='text-white group-hover:translate-x-1 transition-transform duration-300'
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
