'use client'
import React from 'react'
import { PerspectiveCarousel } from '@/components/ui/perspective-carousel'
import { portfolioinfo } from '@/app/api/data'
import { useLanguage } from '@/app/context/LanguageContext'

const carouselItems = portfolioinfo
  .filter((item) => item.demoUrl && item.demoUrl !== '#')
  .map((item) => ({
  src: item.image,
  title: item.title,
  alt: item.alt,
  demoUrl: item.demoUrl,
  demoLabel: undefined as string | undefined,
}))

function useCarouselSize() {
  const [size, setSize] = React.useState({ slideWidth: 640, height: 820 })

  React.useEffect(() => {
    const update = () => {
      const width = window.innerWidth

      if (width < 640) {
        setSize({ slideWidth: 320, height: 520 })
      } else if (width < 1024) {
        setSize({ slideWidth: 480, height: 680 })
      } else {
        setSize({ slideWidth: 640, height: 820 })
      }
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return size
}

const PortfolioCard = () => {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = React.useState(1)
  const { slideWidth, height } = useCarouselSize()

  const items = React.useMemo(
    () =>
      carouselItems.map((item) => ({
        ...item,
        demoLabel: t('View Demo'),
      })),
    [t]
  )

  return (
    <div className='pb-16 -mt-2'>
      <div className='container mx-auto max-w-[90rem] px-4'>
        <PerspectiveCarousel
          items={items}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
          defaultActiveIndex={1}
          loop
          autoplay
          autoplayInterval={3500}
          slideWidth={slideWidth}
          inactiveScale={0.8}
          rotationStep={40}
          aspectClassName='aspect-[16/10]'
          imageClassName='bg-transparent shadow-none'
          className='text-midnight_text dark:text-white'
          style={{ height }}
          labelClassName='text-base font-semibold text-midnight_text dark:text-white'
          controlsClassName='border-border/60 bg-white/80 dark:border-white/10 dark:bg-darklight/80'
        />
      </div>
    </div>
  )
}

export default PortfolioCard
