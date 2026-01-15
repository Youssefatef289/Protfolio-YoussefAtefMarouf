import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

const Logo: React.FC = () => {

  return (
    <Link href="/" className='flex items-center gap-3'>
      {/* <Image
        src={getImgPath("/images/logo/logo.svg")}
        alt="logo"
        width={40}
        height={40}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src={getImgPath("/images/logo/logo-white.svg")}
        alt="logo"
        width={40}
        height={40}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:block hidden'
      /> */}
      <span className='text-xl font-bold text-black dark:text-white flex items-center gap-2'>
        <Icon 
          icon="solar:user-bold" 
          width={24} 
          height={24} 
          className='text-primary'
        />
        Youssef
      </span>
    </Link>
  );
};

export default Logo;
