'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import { useLanguage } from '@/app/context/LanguageContext'
import { Icon } from '@iconify/react'

const Hero = () => {
  const { t } = useLanguage()
  return (
    <section id='hero' className='relative md:pt-44 pt-28 bg-gray-100 dark:bg-darklight'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-8 relative z-10 items-center'>
        {/* Left Section - Text Content and Buttons */}
        <div
          className='md:col-span-7 col-span-12 p-4 md:px-4 px-0 space-y-6 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center mb-2'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              {t('Frontend Developer')}
            </span>
          </div>
          <h1 className='text-midnight_text dark:text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight'>
            {t('hero.name')}
          </h1>
          <p className='text-grey dark:text-white/70 text-base md:text-lg leading-relaxed'>
            {t('hero.description')}
          </p>
          <div className='flex gap-4 flex-wrap pt-2'>
            <a
              href='#portfolio'
              className='py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300 px-8 font-medium'>
              {t('My Projects')}
            </a>
            <a
              href='/images/Youssef/Youssef Atef Maarouf  CV (1).pdf'
              download
              className='py-3 bg-transparent border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 px-8 font-medium flex items-center gap-2'>
              <Icon icon="solar:download-bold" width={18} height={18} />
              {t('Download CV')}
            </a>
          </div>
        </div>

        {/* Right Section - Profile Card with Image and Social Icons */}
        <div
          className='md:col-span-5 col-span-12 flex flex-col items-center'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>
          {/* White Card with Profile Image */}
          <div className='bg-white dark:bg-darkmode rounded-2xl p-6 shadow-lg w-full max-w-md relative mb-8'>
            <Image
              src={getImgPath('/images/Youssef/Hero - Youssef.jpeg')}
              alt='Youssef Hero Image'
              width={400}
              height={500}
              quality={100}
              className='w-full h-auto rounded-xl object-cover'
              priority
            />
          </div>
          
          {/* Social Media Icons - Overlapping the card */}
          <div className='flex items-center gap-3 -mt-12 relative z-10 flex-wrap justify-center'>
            <a
              href='https://www.facebook.com/share/14T5rwc9rBk/?mibextid=wwXIfr'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-darkmode shadow-md hover:shadow-lg transition-all hover:scale-110 text-purple-600 dark:text-purple-400'>
              <Icon icon="logos:facebook" width={20} height={20} />
            </a>
            <a
              href='https://www.instagram.com/yousseeff_ateeff/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-darkmode shadow-md hover:shadow-lg transition-all hover:scale-110 text-purple-600 dark:text-purple-400'>
              <Icon icon="logos:instagram-icon" width={20} height={20} />
            </a>
            <a
              href='https://www.linkedin.com/in/youssef-ateef-0358b3235/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-darkmode shadow-md hover:shadow-lg transition-all hover:scale-110 text-purple-600 dark:text-purple-400'>
              <Icon icon="logos:linkedin-icon" width={20} height={20} />
            </a>
            <a
              href='https://github.com/Youssefatef289'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-darkmode shadow-md hover:shadow-lg transition-all hover:scale-110 text-purple-600 dark:text-purple-400'>
              <Icon icon="logos:github-icon" width={20} height={20} />
            </a>
            <a
              href='https://wa.me/201208430849'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-darkmode shadow-md hover:shadow-lg transition-all hover:scale-110 text-purple-600 dark:text-purple-400'>
              <Icon icon="logos:whatsapp-icon" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
