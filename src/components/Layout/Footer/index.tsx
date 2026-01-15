'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/app/context/LanguageContext'

const Footer: FC = () => {
  const { t } = useLanguage()

  return (
    <footer id='contact' className='bg-darkmode dark:bg-darklight border-t border-dark_border'>
      <div className='container mx-auto max-w-6xl px-4 py-12'>
        {/* Main Footer Content */}
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* Logo & Name */}
          <div className='text-center md:text-left'>
            <Link href='/' className='inline-flex items-center gap-3 mb-4'>
              <Icon 
                icon="solar:user-bold" 
                width={32} 
                height={32} 
                className='text-primary'
              />
              <span className='text-2xl font-bold text-white'>
                Youssef
              </span>
            </Link>
            <p className='text-white/70 text-sm'>
              {t('Frontend Developer')}
            </p>
          </div>

          {/* Quick Links */}
          <div className='text-center md:text-left'>
            <h3 className='text-white font-semibold mb-4'>
              {t('Quick Links')}
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/#about' className='text-white/70 hover:text-primary transition-colors text-sm'>
                  {t('About')}
                </Link>
              </li>
              <li>
                <Link href='/#services' className='text-white/70 hover:text-primary transition-colors text-sm'>
                  {t('Services')}
                </Link>
              </li>
              <li>
                <Link href='/#portfolio' className='text-white/70 hover:text-primary transition-colors text-sm'>
                  {t('Portfolio')}
                </Link>
              </li>
              <li>
                <Link href='/#skills' className='text-white/70 hover:text-primary transition-colors text-sm'>
                  {t('Skills')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='text-center md:text-left'>
            <h3 className='text-white font-semibold mb-4'>
              {t('Contact')}
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link 
                  href='tel:+201208430849' 
                  className='text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 justify-center md:justify-start'>
                  <Icon icon="solar:phone-bold" width={18} height={18} />
                  +20 120 843 0849
                </Link>
              </li>
              <li>
                <Link 
                  href='mailto:youssefmarouf289@gmail.com' 
                  className='text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 justify-center md:justify-start'>
                  <Icon icon="solar:letter-bold" width={18} height={18} />
                  youssefmarouf289@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='flex justify-center items-center gap-4 mb-8 pt-8 border-t border-dark_border'>
          <Link 
            href='https://www.facebook.com/share/14T5rwc9rBk/?mibextid=wwXIfr' 
            target='_blank'
            rel='noopener noreferrer'
            className='w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors text-white hover:scale-110'>
            <Icon icon="logos:facebook" width={20} height={20} />
          </Link>
          <Link 
            href='https://github.com/Youssefatef289' 
            target='_blank'
            rel='noopener noreferrer'
            className='w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors text-white hover:scale-110'>
            <Icon icon="logos:github-icon" width={20} height={20} />
          </Link>
          <Link 
            href='https://www.linkedin.com/in/youssef-ateef-0358b3235/' 
            target='_blank'
            rel='noopener noreferrer'
            className='w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors text-white hover:scale-110'>
            <Icon icon="logos:linkedin-icon" width={20} height={20} />
          </Link>
        </div>

        {/* Copyright */}
        <div className='text-center pt-8 border-t border-dark_border'>
          <p className='text-white/50 text-sm'>
            © {new Date().getFullYear()} Youssef Atef. {t('All rights reserved')}.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
