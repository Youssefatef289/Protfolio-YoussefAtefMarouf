import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const logoSrc = getImgPath('/images/logo/logo-youssef.png')

type LogoProps = {
  variant?: 'header' | 'footer'
}

const logoStyles = {
  header:
    'h-22 w-auto min-w-[300px] max-w-[360px] object-cover sm:h-[3.625rem] sm:max-w-[400px] lg:h-16 lg:max-w-[460px]',
  footer:
    'h-20 w-auto max-w-[300px] object-contain sm:h-24 sm:max-w-[360px] md:h-28 md:max-w-[400px]',
}

const Logo: React.FC<LogoProps> = ({ variant = 'header' }) => {
  return (
    <Link href='/' className='inline-flex shrink-0 items-center'>
      <Image
        src={logoSrc}
        alt='Youssef Atef - Web Developer & Designer'
        width={620}
        height={160}
        priority={variant === 'header'}
        quality={100}
        className={cn(logoStyles[variant])}
      />
    </Link>
  )
}

export default Logo
