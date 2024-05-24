'use client'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import './swiper.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Card } from './Card'
import { ProjectDetailsModal } from './ProjectDetailsModal'
import { Tables } from '@/app/protocols'
import { testimonialsContentType, testimonialsType } from './types'

interface TestimonialsProps {
  values: Tables<testimonialsContentType>[]
}

export const Testimonials: React.FC<TestimonialsProps> = ({ values }) => {
  const testimonialsContent = values[0].fields
  const [slidePerView, setSlidePerView] = useState(4)
  const [showNavigation, setShowNavigation] = useState(true)
  const [space, setSpace] = useState(80)
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<testimonialsType | null>(null)
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidePerView(1.25)
      setShowNavigation(false)
      setSpace(16)
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setSlidePerView(2)
      setShowNavigation(true)
      setSpace(40)
    }
    if (window.innerWidth >= 1280) {
      setSlidePerView(3)
      setShowNavigation(true)
      setSpace(40)
    }
  }

  const handleDetailsClick = (testimonial: testimonialsType) => {
    setSelectedTestimonial(testimonial)
    const projectName = testimonial.name.replace(/\s+/g, '-').toLowerCase()
    window.history.pushState(null, '', `?project=${projectName}`)
  }

  const handleCloseModal = () => {
    setSelectedTestimonial(null)
    window.history.pushState(null, '', window.location.pathname)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    const urlParams = new URLSearchParams(window.location.search)
    const projectName = urlParams.get('project')
    if (projectName) {
      const testimonial = testimonialsContent.testimonials.find(
        (t: Tables<testimonialsContentType>) =>
          t.fields.name.replace(/\s+/g, '-').toLowerCase() === projectName,
      )

      if (testimonial) {
        setSelectedTestimonial(testimonial.fields)
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="projetos" className={style.testimonials}>
      <h2 className={`title ${style.title}`}>{testimonialsContent.title}</h2>
      <h3 className={`title--extra-small`}>
        {testimonialsContent.description}
      </h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={showNavigation}
        centeredSlides={true}
        spaceBetween={space}
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        loop={false}
        initialSlide={0.5}
        className={style.swiper__slide}
      >
        <div className={style.left}></div>
        <div className={style.right}></div>
        {testimonialsContent.testimonials.map(
          (item: Tables<testimonialsType>, index: number) => (
            <SwiperSlide key={index}>
              <Card
                testimonial={item.fields}
                quotationMark={testimonialsContent.quotationMark}
                onDetailsClick={() => handleDetailsClick(item.fields)}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <ProjectDetailsModal
        isOpen={!!selectedTestimonial}
        onClose={handleCloseModal}
        testimonial={selectedTestimonial}
      />
    </section>
  )
}

export default Testimonials
