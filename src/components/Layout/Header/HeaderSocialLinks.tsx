'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'

interface SocialLink {
  href: string
  icon: string
  label: string
  hoverClass: string
  ringClass: string
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/Youssefatef289',
    icon: 'logos:github-icon',
    label: 'GitHub',
    hoverClass: 'hover:bg-darkmode hover:text-white',
    ringClass: 'group-hover:ring-darkmode/20',
  },
  {
    href: 'https://wa.me/201208430849',
    icon: 'logos:whatsapp-icon',
    label: 'WhatsApp',
    hoverClass: 'hover:bg-[#25D366] hover:text-white',
    ringClass: 'group-hover:ring-[#25D366]/30',
  },
]

interface HeaderSocialLinksProps {
  className?: string
  compact?: boolean
}

const HeaderSocialLinks = ({ className = '', compact = false }: HeaderSocialLinksProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-1.5 rounded-full border border-border/60 bg-white/90 p-1 shadow-[0_4px_20px_rgba(16,45,71,0.08)] backdrop-blur-md ${className}`}>
      {socialLinks.map((link, index) => (
        <SocialPill key={link.href} link={link} index={index} compact={compact} />
      ))}
    </motion.div>
  )
}

function SocialPill({
  link,
  index,
  compact,
}: {
  link: SocialLink
  index: number
  compact?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={link.href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={link.label}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex items-center overflow-hidden rounded-full text-midnight_text transition-colors duration-300 ${link.hoverClass} ${link.ringClass} ring-2 ring-transparent`}>
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        className={`flex items-center ${compact ? 'h-9' : 'h-10'}`}>
        <span
          className={`flex shrink-0 items-center justify-center ${compact ? 'h-9 w-9' : 'h-10 w-10'}`}>
          <motion.span
            animate={{ rotate: hovered ? -8 : 0, scale: hovered ? 1.08 : 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
            <Icon icon={link.icon} width={compact ? 20 : 22} height={compact ? 20 : 22} />
          </motion.span>
        </span>

        <AnimatePresence initial={false}>
          {hovered && (
            <motion.span
              key='label'
              initial={{ width: 0, opacity: 0, x: -8 }}
              animate={{ width: 'auto', opacity: 1, x: 0 }}
              exit={{ width: 0, opacity: 0, x: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className='overflow-hidden whitespace-nowrap pr-3 text-sm font-semibold tracking-wide'>
              {link.label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.a>
  )
}

export default HeaderSocialLinks
