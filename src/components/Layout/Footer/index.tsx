'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/app/context/LanguageContext'

const Footer: FC = () => {
  const { t } = useLanguage()
  const quickLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#skills', label: 'Skills' },
  ]

  const contactLinks = [
    {
      href: 'tel:+201208430849',
      icon: 'solar:phone-bold',
      label: '+20 120 843 0849',
    },
    {
      href: 'mailto:youssefmarouf289@gmail.com',
      icon: 'solar:letter-bold',
      label: 'youssefmarouf289@gmail.com',
    },
  ]

  const socialLinks = [
    {
      href: 'https://www.facebook.com/share/14T5rwc9rBk/?mibextid=wwXIfr',
      icon: 'logos:facebook',
      label: 'Facebook',
    },
    {
      href: 'https://github.com/Youssefatef289',
      icon: 'logos:github-icon',
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/youssef-ateef-0358b3235/',
      icon: 'logos:linkedin-icon',
      label: 'LinkedIn',
    },
  ]

  return (
    <footer
      id='contact'
      className='relative overflow-hidden border-t border-dark_border bg-darkmode dark:bg-darklight'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),transparent_42%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.14),transparent_36%)]' />
      <div className='container relative mx-auto max-w-6xl px-4 py-12 lg:py-16'>
        <div className='mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8'>
          <div className='grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]'>
            <div className='text-center sm:text-left'>
              <Link href='/' className='inline-flex items-center gap-3 mb-4'>
                <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary'>
                  <Icon icon='solar:user-bold' width={24} height={24} />
                </span>
                <span className='text-2xl font-bold tracking-wide text-white'>Youssef</span>
              </Link>
              <p className='max-w-sm text-sm leading-7 text-white/70'>
                {t('Frontend Developer')}
              </p>
              <div className='mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start'>
                {socialLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={item.label}
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/80'>
                    <Icon icon={item.icon} width={18} height={18} />
                  </Link>
                ))}
              </div>
            </div>

            <div className='text-center sm:text-left'>
              <h3 className='mb-4 text-base font-semibold text-white'>{t('Quick Links')}</h3>
              <ul className='space-y-2.5'>
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className='inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-primary'>
                      <Icon icon='solar:arrow-right-linear' width={16} height={16} />
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <h3 className='mb-4 text-base font-semibold text-white'>{t('Contact')}</h3>
              <ul className='space-y-3'>
                {contactLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className='inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-primary'>
                      <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white'>
                        <Icon icon={item.icon} width={16} height={16} />
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left'>
          <p className='text-sm text-white/50'>
            © {new Date().getFullYear()} Youssef Atef. {t('All rights reserved')}.
          </p>
          <Link href='/#hero' className='text-sm text-white/60 transition-colors hover:text-primary'>
            {t('Back to top')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
