'use client'
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="fixed right-5 bottom-5 z-50">
        <div className="relative">
          {/* Main Button */}
          <button
            id="main-button"
            onClick={toggleMenu}
            className={`flex items-center justify-center absolute right-0 bottom-0 h-12 w-12 text-xl text-primary cursor-pointer bg-white shadow-lg rounded-full transition-all duration-300 ${
              !isOpen ? 'wave' : 'open'
            }`}
            aria-label="Toggle contact menu">
            <Icon
              icon={isOpen ? 'solar:close-circle-bold' : 'solar:chat-round-call-bold'}
              width={24}
              height={24}
              className="text-primary"
            />
          </button>

          {/* Free Consultation Button */}
          <button
            className={`absolute right-0 bottom-0 z-[-1] h-12 px-5 text-white font-semibold bg-gradient-to-r from-[#00a1f5] to-[#0064f3] shadow-lg border-0 whitespace-nowrap cursor-pointer rounded-lg transition-all duration-400 ${
              isOpen
                ? 'visible right-16 opacity-100'
                : 'invisible opacity-0 right-0'
            }`}
            style={{
              transition: isOpen
                ? 'all 0.4s cubic-bezier(0, 0.01, 0, 1.27)'
                : 'all 0.2s linear',
            }}
            onClick={() => {
              const contactSection = document.querySelector('#contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
              setIsOpen(false)
            }}>
            Free Consultation
          </button>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/201208430849`}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute right-0 bottom-0 z-[-1] flex items-center justify-center cursor-pointer h-12 w-12 text-xl text-white bg-gradient-to-b from-[#00B100] to-[#09db09] shadow-lg rounded-full transition-all duration-400 ${
              isOpen ? 'opacity-100 bottom-16' : 'opacity-0 bottom-0'
            }`}
            style={{
              transition: isOpen
                ? 'all 0.4s cubic-bezier(0, 0.01, 0, 1.27)'
                : 'all 0.2s linear',
            }}
            aria-label="WhatsApp">
            <Icon icon="logos:whatsapp-icon" width={24} height={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:youssefmarouf289@gmail.com"
            className={`absolute right-0 bottom-0 z-[-1] flex items-center justify-center cursor-pointer h-12 w-12 text-xl text-white bg-gradient-to-b from-[#017AB1] to-[#01ABE6] shadow-lg rounded-full transition-all duration-400 ${
              isOpen ? 'opacity-100 bottom-28' : 'opacity-0 bottom-0'
            }`}
            style={{
              transition: isOpen
                ? 'all 0.4s cubic-bezier(0, 0.01, 0, 1.27)'
                : 'all 0.2s linear',
            }}
            aria-label="Email">
            <Icon icon="solar:letter-bold" width={24} height={24} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/14T5rwc9rBk/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute right-0 bottom-0 z-[-1] flex items-center justify-center cursor-pointer h-12 w-12 text-xl text-white bg-gradient-to-b from-[#0078FF] to-[#00C6FF] shadow-lg rounded-full transition-all duration-400 ${
              isOpen ? 'opacity-100 bottom-40' : 'opacity-0 bottom-0'
            }`}
            style={{
              transition: isOpen
                ? 'all 0.4s cubic-bezier(0, 0.01, 0, 1.27)'
                : 'all 0.2s linear',
            }}
            aria-label="Facebook">
            <Icon icon="logos:facebook" width={24} height={24} />
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes wave {
          0% {
            box-shadow: 0 0 0px 0px rgba(37, 99, 235, 0.5);
          }
          100% {
            box-shadow: 0 0 0px 10px rgba(37, 99, 235, 0);
          }
        }

        #main-button.wave {
          animation-name: wave;
          animation-duration: 1s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        #main-button.open {
          animation-iteration-count: 1;
        }
      `}</style>
    </>
  )
}

export default FloatingActionButton

