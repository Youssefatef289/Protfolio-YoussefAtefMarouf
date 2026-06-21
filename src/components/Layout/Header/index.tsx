'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import HeaderSocialLinks from './HeaderSocialLinks'
import { useLanguage } from '@/app/context/LanguageContext'

const Header: React.FC = () => {
  const { t } = useLanguage()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        sticky
          ? 'border-border/40 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white/80 backdrop-blur-sm'
      }`}>
      <div className='container mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-6'>
        <Logo />
        <nav className='hidden lg:flex grow items-center justify-center gap-5'>
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>
        <div className='flex items-center gap-3'>
          <HeaderSocialLinks className='hidden sm:flex' />
          <HeaderSocialLinks className='sm:hidden' compact />
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='block rounded-lg p-2 text-black transition-colors hover:bg-black/5 lg:hidden'
            aria-label='Toggle mobile menu'>
            <span className='block h-0.5 w-5 bg-current'></span>
            <span className='mt-1.5 block h-0.5 w-5 bg-current'></span>
            <span className='mt-1.5 block h-0.5 w-5 bg-current'></span>
          </button>
        </div>
      </div>
      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
      )}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}>
        <div className='flex items-center justify-between p-4'>
          <h2 className='text-lg font-bold text-midnight_text'>{t('Menu')}</h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label='Close mobile menu'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <nav className='flex flex-col items-start p-4'>
          {headerData.map((item, index) => (
            <MobileHeaderLink
              key={index}
              item={item}
              onLinkClick={() => setNavbarOpen(false)}
            />
          ))}
          <div className='mt-6 border-t border-border/30 pt-6'>
            <HeaderSocialLinks />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
