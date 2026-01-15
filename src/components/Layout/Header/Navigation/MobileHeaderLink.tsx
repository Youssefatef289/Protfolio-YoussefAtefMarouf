'use client'
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/context/LanguageContext';

const MobileHeaderLink: React.FC<{ item: HeaderItem; onLinkClick?: () => void }> = ({ item, onLinkClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.href.startsWith('/#') || item.href.startsWith('#')) {
      e.preventDefault();
      const hash = item.href.startsWith('/#') ? item.href.replace('/', '') : item.href;
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Close mobile menu after navigation
      if (onLinkClick) {
        onLinkClick();
      }
    } else if (!item.submenu && onLinkClick) {
      // Close menu for non-hash links too
      onLinkClick();
    }
  };

  const path = usePathname();

  return (
    <Link href={item.href} onClick={handleClick} className="relative block w-full">
      <button
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 px-3 text-black dark:text-white rounded-md focus:outline-hidden ${path === item.href || (path === '/' && (item.href.startsWith('/#') || item.href.startsWith('#'))) ? 'bg-primary text-white dark:text-white!' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
      >
        {t(item.label)}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </button>
      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link key={index} href={subItem.href} className="block py-2 text-gray-500 hover:bg-gray-200">
              {t(subItem.label)}
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
};

export default MobileHeaderLink;
