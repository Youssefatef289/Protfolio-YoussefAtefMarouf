import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className='flex shrink-0 items-center justify-start py-1 transition-opacity duration-300 hover:opacity-90'
      aria-label='Youssef Atef home'>
      <Image
        src={getImgPath("/images/Youssef/logo.png")}
        alt="Youssef Atef Logo"
        width={180}
        height={64}
        quality={100}
        className='h-12 w-auto sm:h-14 md:h-16 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105'
        priority
      />
    </Link>
  );
};

export default Logo;
