 'use client'
import React, { FormEvent, useState } from 'react'
import { useLanguage } from '@/app/context/LanguageContext'

const Contactform = () => {
  const { t } = useLanguage()
  const [status, setStatus] = useState('')
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setStatus(t('Sending…'))
    const form = event.currentTarget
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) })
      const result = await response.json(); if (!response.ok) throw new Error(result.error)
      form.reset(); setStatus(t('Your inquiry has been sent. Thank you!'))
    } catch (error) { setStatus(error instanceof Error ? error.message : t('Unable to send message.')) }
  }
  return (
    <section id='contact' className='overflow-x-hidden bg-darkmode dark:bg-darklight'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0'>
          <div
            className='row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center justify-start'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-sm text-white'>
                {t('build everything')}
              </span>
            </div>
            <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-white py-12'>
              {t('Let’s discuss about your project and take it the next level.')}
            </h2>
            <div className='grid grid-cols-6 pb-12 border-b border-dark_border '>
              <div className='col-span-3'>
                <span className='text-white/50 text-lg'>{t('Phone')}</span>
                <p className='bg-transparent border-0 text-white text-lg'>
                  +20 120 843 0849
                </p>
              </div>
              <div className='col-span-3'>
                <span className='text-white/50 text-lg'>{t('Email')}</span>
                <p className='bg-transparent border-0 text-white text-lg'>
                  youssefmarouf289@gmail.com
                </p>
              </div>
              <div className='col-span-6 pt-8'>
                <span className='text-white/50 text-lg'>{t('Location')}</span>
                <p className='bg-transparent border-0 text-white text-lg'>
                  {t('Egypt — working with clients worldwide')}
                </p>
              </div>
            </div>
            <div className='pt-12'>
              <p className='text-white/50 pb-4 text-base'>{t('Available for freelance & full-time projects')}</p>
              <div className='flex items-center flex-wrap md:gap-14 gap-7'>
                <span className='text-white font-semibold text-lg'>React</span>
                <span className='text-white font-semibold text-lg'>WordPress</span>
                <span className='text-white font-semibold text-lg'>TypeScript</span>
                <span className='text-white font-semibold text-lg'>UI/UX</span>
              </div>
            </div>
          </div>
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'
            className="relative before:content-[''] before:absolute before:bg-[url('/images/contact/form-line.png')] before:bg-no-repeat before:w-[13rem] before:h-24 before:top-5% before:bg-contain before:left-[35%] before:z-1 before:translate-x-full lg:before:inline-block before:hidden after:content-[''] after:absolute after:bg-[url('/images/contact/from-round-line.png')] after:bg-no-repeat after:w-[6.3125rem] after:h-[6.3125rem] after:bg-contain after:top-1/2 after:-left-[25%] after:z-1 after:translate-x-1/2 after:translate-y-1/2 md:after:inline-block after:hidden md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13">
            <div className='lg:mt-0 mt-8  bg-white dark:bg-darkmode max-w-[50rem] m-auto pt-[2.1875rem] pb-8 px-[2.375rem] rounded-md relative z-10'>
              <h2 className='sm:text-3xl text-lg font-bold text-midnight_text mb-3 dark:text-white'>
                {t('Start the project')}
              </h2>
              <form onSubmit={submit} className='flex w-full m-auto justify-between flex-wrap gap-4'>
                <div className='flex gap-4'>
                  <input
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                    type='text'
                    name='firstName'
                    required
                    placeholder={t('First name')}
                  />
                  <input
                    type='text'
                    name='lastName'
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                    placeholder={t('Last name')}
                  />
                </div>
                <div className='w-full'>
                  <input
                    type='email'
                    name='email'
                    required
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                    placeholder='youremail@website.com'
                  />
                </div>
                <div className='w-full'>
                  <input
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                    type='text'
                    name='country'
                    placeholder={t('Country')}
                  />
                </div>
                <div className='w-full'>
                  <textarea name='message' required
                    className='text-midnight_text h-[9.375rem] w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border! border-border border-solid! focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                    placeholder={t('Let us know about your project')}></textarea>
                </div>
                <div className='flex'>
                  <input
                    id='wp-comment-cookies-consent'
                    name='wp-comment-cookies-consent'
                    type='checkbox'
                    value='yes'
                    className="hover:opacity-1 checked:bg-primary checked:opacity-1 relative border-2 border-solid border-primary rounded-xs bg-none cursor-pointer leading-none mr-2 outline-0 p-0! align-text-top h-[1.25rem] sm:w-[1.25rem] w-[2.25rem] opacity-[0.5] before:content-[''] before:absolute before:right-1/2 before:top-1/2 before:w-1 before:h-2 before:z-2 before:-mt-[0.0625rem] before:-ml-[0.0625rem] before:-mr-[0.0625rem] before:transform before:rotate-45 before:translate-x-[-50%] before:translate-y-[-50%] dark:focus:border-primary"
                  />
                  <div className='text-grey dark:text-white/50'>
                    {t('I have read and acknowledge the')}{' '}
                    <p className='text-primary inline cursor-pointer'>
                      {t('Terms and Conditions')}{' '}
                    </p>
                  </div>
                </div>
                <div className='w-full'>
                  <button
                    className='w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg'
                    type='submit'>
                    {t('Submit Inquiry')}
                  </button>
                  {status && <p role='status' className='mt-3 text-sm text-grey'>{status}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactform
