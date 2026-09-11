import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const ContactInfo = () => {
  return (
    <>
      <section className='dark:bg-darkmode pt-8 md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='flex md:flex-row flex-col md:items-center items-start justify-center md:gap-28 gap-8'>
            <div className='flex sm:flex-row flex-col items-start sm:gap-8 gap-4'>
              <div className='bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full'>
                <Icon icon='solar:letter-bold' width={30} height={30} className='text-primary' />
              </div>
              <div className='flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between'>
                <div>
                  <span className='text-midnight_text dark:text-white text-xl font-bold'>
                    Email Me
                  </span>
                  <p className='text-DeepOcean font-normal text-lg max-w-80 pt-3 pb-7 dark:text-white/50'>
                    Please feel free to drop me a line. I will respond as soon
                    as possible.
                  </p>
                </div>
                <div>
                  <Link
                    href='mailto:youssefmarouf289@gmail.com'
                    className='text-primary text-base font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white'>
                    youssefmarouf289@gmail.com
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex sm:flex-row flex-col items-start sm:gap-8 gap-4'>
              <div className='bg-primary/20 w-3.75 h-3.75 flex sm:items-center items-start justify-center rounded-full'>
                <Icon icon='solar:phone-bold' width={30} height={30} className='text-primary' />
              </div>
              <div className='flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between'>
                <div>
                  <span className='text-midnight_text dark:text-white text-xl font-bold'>
                    Call Me
                  </span>
                  <p className='text-DeepOcean font-normal text-lg max-w-80 pt-3 pb-7 dark:text-white/50'>
                    Available for freelance projects and job opportunities.
                  </p>
                </div>
                <div>
                  <Link
                    href='https://wa.me/201505991425'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary text-base font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white'>
                    WhatsApp: 0150 599 1425
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='md:pt-32 pt-11 md:pb-28 pb-8'>
            <iframe
              src='https://maps.google.com/maps?q=Cairo%2C%20Egypt&z=6&output=embed'
              width='1114'
              height='477'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Youssef Atef Location - Egypt'
              className='rounded-lg w-full'></iframe>
          </div>
        </div>
        <div className='border-b border-solid border-border dark:border-dark_border'></div>
      </section>
    </>
  )
}

export default ContactInfo
