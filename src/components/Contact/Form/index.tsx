 'use client'
import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const ContactForm = () => {
  const [status, setStatus] = useState('')
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('Sending…')
    const form = event.currentTarget
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error)
      form.reset()
      setStatus('Thank you — your message has been sent successfully.')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to send your message.')
    }
  }
  return (
    <>
      <section className='dark:bg-darkmode md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 grid-cols-1 gap-8'>
            <div className='col-span-6'>
              <h2 className='max-w-72 text-[40px] leading-tight font-bold mb-9 text-midnight_text dark:text-white'>
                Get Online Consultation
              </h2>
              <form onSubmit={submit} className='flex flex-wrap w-full m-auto justify-between'>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='first-name'
                      className='pb-3 inline-block text-base'>
                      First Name*
                    </label>
                    <input
                      className='w-full text-base px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                      type='text'
                      name='firstName'
                      required
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='last-name'
                      className='pb-3 inline-block text-base'>
                      Last Name*
                    </label>
                    <input
                      className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                      type='text'
                      name='lastName'
                    />
                  </div>
                </div>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='email'
                      className='pb-3 inline-block text-base'>
                      Email address*
                    </label>
                    <input
                      type='email'
                      name='email'
                      required
                      className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='Specialist'
                      className='pb-3 inline-block text-base'>
                      Specialist*
                    </label>
                    <select name='service' className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0'>
                      <option value=''>Choose a service</option>
                      <option value='Web Development'>Web Development</option>
                      <option value='Responsive Design'>Responsive Design</option>
                      <option value='UI/UX Design'>UI/UX Design</option>
                      <option value='E-commerce Website'>
                        E-commerce Website
                      </option>
                    </select>
                  </div>
                </div>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='date'
                      className='pb-3 inline-block text-base'>
                      Date*
                    </label>
                    <input
                      className='w-full text-base px-4 rounded-lg  py-2.5 outline-hidden dark:text-white dark:bg-darkmode border-border border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0'
                      type='date'
                      name='date'
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='time'
                      className='pb-3 inline-block text-base'>
                      Time*
                    </label>
                    <input
                      className='w-full text-base px-4 rounded-lg py-2.5 border-border outline-hidden dark:text-white dark:bg-darkmode border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0'
                      type='time'
                      name='time'
                    />
                  </div>
                </div>
                <div className='mx-0 my-2.5 w-full'>
                  <textarea name='message' required rows={4} placeholder='Tell me about your project *' className='mb-3 w-full rounded-lg border border-border bg-transparent px-4 py-3 dark:border-dark_border dark:text-white' />
                  <button className='bg-primary rounded-lg text-white py-4 px-8 mt-1 inline-block hover:bg-blue-700' type='submit'>
                    {status === 'Sending…' ? 'Sending…' : 'Make an appointment'}
                  </button>
                  {status && <p role='status' className='mt-3 w-full text-sm text-grey'>{status}</p>}
                </div>
              </form>
            </div>
            <div className='col-span-6'>
              <Image
                src={getImgPath('/images/Youssef/Hero - Youssef.jpeg')}
                alt='Youssef Atef Frontend Developer'
                width={1300}
                height={0}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                className='rounded-xl object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
