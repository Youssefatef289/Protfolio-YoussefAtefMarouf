'use client'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'
import { useLanguage } from '@/app/context/LanguageContext'

const PortfolioCard = () => {
  const { t, language } = useLanguage()
  const sliderRef = useRef<Slider | null>(null)

  const goPrev = () => sliderRef.current?.slickPrev()
  const goNext = () => sliderRef.current?.slickNext()

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    pauseOnHover: true,
    rtl: language === 'ar',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 600,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          speed: 600,
        },
      },
    ],
  }

  return (
    <div className='dark:bg-darkmode pb-16 slider-container'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <Slider key={language} ref={sliderRef} {...settings}>
          {portfolioinfo.map((item, index) => (
            <div key={index} className='px-4'>
              <div className='group bg-white dark:bg-darkmode rounded-xl overflow-hidden shadow-none border border-slate-100 dark:border-white/5 h-full flex flex-col'>
                {/* Image Container - Square Aspect Ratio (1 / 1), No Background, No Border/Padding/Radius, Object-Fit Contain */}
                <div
                  className='relative w-full aspect-square overflow-hidden bg-transparent p-0 border-0 rounded-none'
                  style={{ aspectRatio: '1 / 1' }}>
                  {item.demoUrl && item.demoUrl !== '#' ? (
                    <a
                      href={item.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${item.title} - ${t('View Project')}`}
                      className='block w-full h-full bg-transparent p-0 border-0 rounded-none'>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={1200}
                        height={1200}
                        sizes='(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw'
                        quality={100}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        className='w-full h-full object-contain p-0 border-0 rounded-none group-hover:scale-105 transition-transform duration-500'
                      />
                    </a>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1200}
                      height={1200}
                      sizes='(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw'
                      quality={100}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      className='w-full h-full object-contain p-0 border-0 rounded-none'
                    />
                  )}
                </div>

                {/* Content Container - Flex to fill remaining space */}
                <div className='p-6 flex flex-col flex-1'>
                  {/* Title */}
                  {item.demoUrl && item.demoUrl !== '#' ? (
                    <a
                      href={item.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-2xl font-bold text-midnight_text dark:text-white mb-2 group-hover:text-primary transition-colors duration-300 hover:underline underline-offset-4'>
                      {item.title}
                    </a>
                  ) : (
                    <h4 className='text-2xl font-bold text-midnight_text dark:text-white mb-2'>
                      {item.title}
                    </h4>
                  )}

                  {/* Description */}
                  <p className='text-base font-normal text-grey dark:text-white/70 mb-4 flex-1'>
                    {item.info}
                  </p>

                  {/* Demo Button */}
                  {item.demoUrl && item.demoUrl !== '#' && (
                    <a
                      href={item.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${item.title} - ${t('View Demo')}`}
                      className='inline-flex items-center gap-2 text-primary hover:text-blue-700 transition-colors duration-300 text-sm font-medium mt-auto'>
                      <span>{t('View Demo')}</span>
                      <Icon icon='solar:arrow-right-bold' width={16} height={16} className='rtl-flip' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Arrows */}
        <button
          type='button'
          onClick={goPrev}
          aria-label={t('Previous projects')}
          className='portfolio-arrow portfolio-arrow-left'>
          <Icon icon='solar:arrow-left-bold' width={18} height={18} />
        </button>
        <button
          type='button'
          onClick={goNext}
          aria-label={t('Next projects')}
          className='portfolio-arrow portfolio-arrow-right'>
          <Icon icon='solar:arrow-right-bold' width={18} height={18} />
        </button>
      </div>
    </div>
  )
}

export default PortfolioCard
