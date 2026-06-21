'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'
import { SocialFlipButton } from '@/components/ui/social-flip-button'
import Logo from '@/components/Layout/Header/Logo'
import { useLanguage } from '@/app/context/LanguageContext'

const socialItems = [
  {
    letter: 'C',
    icon: <FaFacebook />,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/14T5rwc9rBk/?mibextid=wwXIfr',
  },
  {
    letter: 'O',
    icon: <FaInstagram />,
    label: 'Instagram',
    href: 'https://www.instagram.com/yousseeff_ateeff/',
  },
  {
    letter: 'N',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/youssef-ateef-0358b3235/',
  },
  {
    letter: 'T',
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/Youssefatef289',
  },
  {
    letter: 'A',
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    href: 'https://wa.me/201208430849',
  },
  {
    letter: 'C',
    icon: <FaEnvelope />,
    label: 'Email',
    href: 'mailto:youssefmarouf289@gmail.com',
  },
  {
    letter: 'T',
    icon: <FaWhatsapp />,
    label: '01505991425',
    href: 'https://wa.me/201505991425',
  },
]

const phoneNumbers = [
  {
    href: 'tel:+201208430849',
    label: '+20 120 843 0849',
  },
  {
    href: 'tel:+201505991425',
    label: '01505991425',
  },
]

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer id='contact' className='border-t border-border/30 py-12'>
      <div className='container mx-auto max-w-4xl px-4'>
        <div className='flex flex-col items-center gap-8 text-center'>
          <Logo variant='footer' />

          <div>
            <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8'>
              {phoneNumbers.map((phone) => (
                <Link
                  key={phone.href}
                  href={phone.href}
                  className='inline-flex items-center gap-2 text-lg font-semibold text-midnight_text transition-colors hover:text-primary dark:text-white dark:hover:text-primary'>
                  <Icon icon='solar:phone-bold' width={20} height={20} />
                  {phone.label}
                </Link>
              ))}
            </div>
          </div>

          <SocialFlipButton
            items={socialItems}
            className='p-0'
            frontClassName='border border-darkmode/15 bg-white text-darkmode dark:border-white/15 dark:bg-darklight dark:text-white'
            backClassName='bg-darkmode text-white dark:bg-darkmode dark:text-white'
          />

          <div className='flex w-full flex-col items-center justify-between gap-3 border-t border-border/30 pt-6 sm:flex-row'>
            <p className='text-sm text-grey dark:text-white/50'>
              © {new Date().getFullYear()} Youssef Atef. {t('All rights reserved')}.
            </p>
            <Link
              href='/#hero'
              className='text-sm text-grey transition-colors hover:text-primary dark:text-white/60 dark:hover:text-primary'>
              {t('Back to top')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
