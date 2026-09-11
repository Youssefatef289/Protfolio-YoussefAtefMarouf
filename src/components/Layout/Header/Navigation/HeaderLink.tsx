"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/context/LanguageContext';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const { t } = useLanguage()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive =
    path === item.href ||
    (item.href === '/' && path === '/') ||
    (item.submenu?.some((s) => path === s.href) ?? false);

  // Scrolls to the section referenced by a hash link
  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Reflect the section in the URL without reloading
      if (window.history.replaceState) {
        window.history.replaceState(null, '', hash);
      }
    }
  };

  // Navigates to the home page and jumps to the given section (basePath-aware)
  const goHomeToSection = (hash: string) => {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
    window.location.href = `${base}/${hash}`;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Hash links (#section or /#section) - smooth scroll on home page,
    // otherwise navigate to the home page first
    if (item.href.startsWith('/#') || item.href.startsWith('#')) {
      e.preventDefault();
      const hash = item.href.startsWith('/#')
        ? item.href.replace('/', '')
        : item.href;
      if (path !== '/') {
        goHomeToSection(hash);
        return;
      }
      scrollToSection(hash);
      return;
    }

    // Home link - smooth scroll back to the top when already on the home page
    if (item.href === '/' && path === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link 
        href={item.href} 
        onClick={handleClick}
        className={`text-base flex py-2 font-normal hover:text-primary dark:hover:text-primary text-black dark:text-white ${isActive ? 'text-primary dark:text-primary!' : ''}`}>
        {t(item.label)}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 top-8 w-60 bg-white dark:bg-darklight shadow-lg dark:shadow-dark-md rounded-lg `}
          data-aos="fade-up"
          data-aos-duration="400"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-[15px]  ${
                path === subItem.href
                  ? "bg-primary text-white"
                  : "text-black hover:bg-gray-200 dark:hover:bg-midnight_text dark:text-white hover:text-dark dark:hover:text-white"
              }`}
            >
              {t(subItem.label)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
