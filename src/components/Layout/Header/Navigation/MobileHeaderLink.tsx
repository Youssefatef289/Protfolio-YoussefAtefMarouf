'use client'
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/context/LanguageContext';

const MobileHeaderLink: React.FC<{ item: HeaderItem; onLinkClick?: () => void }> = ({ item, onLinkClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { t } = useLanguage();
  const path = usePathname();

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

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    }
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
        if (onLinkClick) onLinkClick();
        return;
      }
      scrollToSection(hash);
    }

    // Home link - smooth scroll back to the top when already on the home page
    if (item.href === '/' && path === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Close mobile menu after navigation
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const isActive =
    path === item.href ||
    (item.href === '/' && path === '/') ||
    (item.submenu?.some((s) => path === s.href) ?? false);

  return (
    <>
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : handleClick}
        className={`relative block w-70 px-3 py-2 rounded-md text-black dark:text-white ${isActive ? 'bg-primary text-white dark:text-white!' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
        <span className='inline-flex items-center gap-2'>
          {t(item.label)}
          {item.submenu && (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
            </svg>
          )}
        </span>
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={() => onLinkClick && onLinkClick()}
              className="block py-2 text-gray-500 hover:bg-gray-200">
              {t(subItem.label)}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileHeaderLink;
