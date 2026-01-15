'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'
import { useLanguage } from '@/app/context/LanguageContext'

// Technology icons mapping
const techIcons: { [key: string]: string } = {
  'React': 'logos:react',
  'Next.js': 'logos:nextjs-icon',
  'TypeScript': 'logos:typescript-icon',
  'JavaScript': 'logos:javascript',
  'HTML': 'logos:html-5',
  'CSS': 'logos:css-3',
  'Tailwind CSS': 'logos:tailwindcss-icon',
}

const PortfolioCard = () => {
  const { t } = useLanguage()
  
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
    <div id='portfolio' className='dark:bg-darkmode pb-16'>
      <div className='container mx-auto max-w-7xl px-4 slider-container'>
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <div key={index} className='px-4'>
              <div className='bg-white dark:bg-darkmode rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col'>
                {/* Image Container - Fixed Height */}
                <div className='relative overflow-hidden rounded-t-xl' style={{ height: '300px' }}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={800}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className='group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
                
                {/* Content Container - Flex to fill remaining space */}
                <div className='p-6 flex flex-col flex-1'>
                  {/* Title */}
                  <h4 className='text-2xl font-bold text-midnight_text dark:text-white mb-2 group-hover:text-primary transition-colors duration-300'>
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p className='text-base font-normal text-grey dark:text-white/70 mb-4 flex-1'>
                    {item.info}
                  </p>
                  
                  {/* Technologies Icons - No background, no shadow */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className='flex flex-wrap gap-3 mb-4'>
                      {item.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className='flex items-center'
                          title={tech}>
                          {techIcons[tech] ? (
                            <Icon
                              icon={techIcons[tech]}
                              width={24}
                              height={24}
                              className='text-midnight_text dark:text-white opacity-80'
                            />
                          ) : (
                            <span className='text-sm text-midnight_text dark:text-white/70'>{tech}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Demo Button */}
                  {item.demoUrl && item.demoUrl !== '#' && (
                    <a
                      href={item.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={(e) => e.stopPropagation()}
                      className='inline-flex items-center gap-2 text-primary hover:text-blue-700 transition-colors duration-300 text-sm font-medium mt-auto'>
                      <span>{t('View Demo')}</span>
                      <Icon icon='solar:arrow-right-bold' width={16} height={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PortfolioCard
