import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/" className='flex shrink-0 items-center justify-center p-1' aria-label='Youssef Atef home'>
      <Image
        src={getImgPath("/images/Youssef/logo.png")}
        alt="Youssef Atef Logo"
        width={100}
        height={50}
        quality={100}
        className='h-40 w-40 rounded-xl object-contain drop-shadow-sm sm:h-14'
        priority
      />
    </Link>
  );
};

export default Logo;
