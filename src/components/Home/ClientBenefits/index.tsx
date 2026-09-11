'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/app/context/LanguageContext'

const ClientBenefits = () => {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: 'solar:code-bold',
      title: 'benefits.1.title',
      description: 'benefits.1.description',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'solar:smartphone-bold',
      title: 'benefits.2.title',
      description: 'benefits.2.description',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'solar:rocket-bold',
      title: 'benefits.3.title',
      description: 'benefits.3.description',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'solar:shield-check-bold',
      title: 'benefits.4.title',
      description: 'benefits.4.description',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'solar:chart-bold',
      title: 'benefits.5.title',
      description: 'benefits.5.description',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'solar:heart-pulse-bold',
      title: 'benefits.6.title',
      description: 'benefits.6.description',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id='benefits' className='bg-gray-50 dark:bg-darklight py-20'>
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
              {t('Why Choose Me')}
            </span>
          </div>
          <h2
            className='text-4xl md:text-5xl font-bold text-midnight_text dark:text-white mb-4'
            data-aos='fade-up'
            data-aos-delay='300'
            data-aos-duration='1000'>
            {t('How You Will Benefit From My Services')}
          </h2>
          <p
            className='text-lg text-grey dark:text-white/60 max-w-2xl mx-auto'
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-duration='1000'>
            {t('benefits.subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='group relative bg-white dark:bg-darkmode rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 overflow-hidden'
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
              data-aos-duration='1000'>
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon Container */}
              <div className='relative z-10 mb-6'>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <Icon
                    icon={benefit.icon}
                    width={32}
                    height={32}
                    className='text-white'
                  />
                </div>
              </div>

              {/* Content */}
              <div className='relative z-10'>
                <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'>
                  {t(benefit.title)}
                </h3>
                <p className='text-base font-normal text-grey dark:text-white/70 leading-relaxed'>
                  {t(benefit.description)}
                </p>
              </div>

              {/* Decorative Element */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientBenefits

