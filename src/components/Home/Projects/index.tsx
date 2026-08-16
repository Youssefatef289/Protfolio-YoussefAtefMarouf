'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'
import { useLanguage } from '@/app/context/LanguageContext'
import { Icon } from '@iconify/react'

const Projects = () => {
  const { t } = useLanguage()
  const featuredProjects = portfolioinfo.slice(0, 6)

  return (
    <section className='bg-white dark:bg-darkmode py-20' id='projects'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center mb-16'>
          <div
            className='flex gap-2 items-center justify-center mb-4'
            data-aos='fade-up'
            data-aos-duration='1000'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              {t('Portfolio')}
            </span>
          </div>
          <h2
            className='text-4xl md:text-5xl font-bold text-midnight_text dark:text-white mb-4'
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'>
            {t('My Projects')}
          </h2>
          <p
            className='text-grey dark:text-white/60 text-lg max-w-2xl mx-auto'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'>
            {t('portfolio.description')}
          </p>
        </div>

        <div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1000'>
          {featuredProjects.map((item, index) => (
            <Link
              key={index}
              href={`/portfolio/${item.slug}`}
              className='group block'>
              <div className='relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 dark:bg-darklight'>
                <div className='relative'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className='w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  {item.category && (
                    <span className='absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm'>
                      {item.category}
                    </span>
                  )}
                </div>
                <div className='p-6'>
                  <h4 className='text-xl font-bold text-midnight_text transition-colors duration-300 group-hover:text-primary dark:text-white'>
                    {item.title}
                  </h4>
                  <p className='mt-2 text-secondary text-sm leading-relaxed dark:text-white/70'>
                    {item.info}
                  </p>
                  <div className='mt-4 flex items-center text-sm font-semibold text-primary'>
                    <span>View Project</span>
                    <Icon
                      icon='solar:arrow-right-bold'
                      width={18}
                      height={18}
                      className='ml-2 transition-transform duration-300 group-hover:translate-x-1'
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='text-center mt-16' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000'>
          <Link
            href='/portfolio'
            className='inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-primary/90'>
            {t('View My Work')}
            <Icon
              icon='solar:arrow-right-bold'
              width={18}
              height={18}
              className='ml-2'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
