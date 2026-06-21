'use client'

import { cn } from '@/lib/utils'

interface DemoButtonProps {
  href: string
  label: string
  className?: string
}

export function DemoButton({ href, label, className }: DemoButtonProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn('btn-23', className)}
      onClick={(event) => event.stopPropagation()}>
      <span className='text'>{label}</span>
      <span aria-hidden='true' className='marquee'>
        {label}
      </span>
    </a>
  )
}
