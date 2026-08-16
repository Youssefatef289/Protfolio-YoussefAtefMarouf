'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const detailsSlugs = ['al-mustafa-meats', 'mazara-al-hfny', 'el-geheny-real-estate-development']

const PortfolioList = () => {
  return (
    <section id='portfolio' className='md:pb-24 pb-16 pt-8 dark:bg-darkmode'>
      <div className='max-w-[120rem] w-full mx-auto px-4 lg:px-[2.125rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {portfolioinfo.map((item, index) => (
            <Link key={index} href={`/portfolio/${item.slug}`} className='group block'>
              <div className='relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 dark:bg-darklight'>
                <div className='relative overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className='w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                </div>
                <div className='p-6'>
                  <h4 className='text-xl font-bold text-midnight_text transition-colors duration-300 group-hover:text-primary dark:text-white'>
                    {item.title}
                  </h4>
                  <p className='mt-2 text-secondary text-sm leading-relaxed dark:text-white/70'>
                    {item.info}
                  </p>
                  <div className='mt-4 flex items-center justify-between'>
                    <span className='inline-flex items-center text-sm font-semibold text-primary transition-colors duration-300 group-hover:underline'>
                      View Project
                      <svg className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                      </svg>
                    </span>
                    {detailsSlugs.includes(item.slug) && (
                      <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20'>
                        Details
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioList
