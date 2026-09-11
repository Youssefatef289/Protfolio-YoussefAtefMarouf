import React from 'react'
import BlogCard from './blogCard'
import { getAllPosts } from '@/utils/markdown'

const Blog: React.FC = () => {
  const posts = getAllPosts([
    'title',
    'date',
    'excerpt',
    'coverImage',
    'slug',
  ]).slice(0, 3)

  return (
    <section
      className='flex flex-wrap justify-center dark:bg-darkmode'
      id='blog'>
      <div className='container mx-auto max-w-6xl'>
        <div className='flex items-baseline justify-between flex-wrap'>
          <h2
            className='sm:mb-11 mb-3 text-4xl font-bold text-midnight_text dark:text-white'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            Latest blog & news
          </h2>
        </div>
        <div className='grid grid-cols-12 gap-7'>
          {posts.map((blog, i) => (
            <div
              key={i}
              className='w-full md:col-span-4 sm:col-span-6 col-span-12'
              data-aos='fade-up'
              data-aos-delay={`${i * 200}`}
              data-aos-duration='1000'>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
